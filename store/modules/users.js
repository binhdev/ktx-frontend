import { api } from '@/api/index'
import * as constants from '@/utils/constants'

const state = {
  list: [],
  user: {}
};

const getters = {

};

const mutations = {
  SET_USERS: (state, users) => {
    state.list = users
  },

  SET_USER: (state, user) => {
    state.user = user
  }

};

const actions = {
  async me() {
    await this.$auth.fetchUser()
  },
  login({commit, dispatch}, {email, password, remmberme}) {
    return this.$auth.loginWith('local', {data: {email,password,remmberme}})
  },
  async logout() {
    await this.$auth.logout()
  },
  register({commit, dispatch}, form) {
    this.$axios.post('users', form)
  },

  async get({commit, store}) {
    await this.$axios.get('users')
      .then(res => {
        commit('SET_USERS', res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  },
  async show({commit}, params) {
    await this.$axios.get(`users/${params.id}`)
      .then((res) => {
        if (res.status === 200) {
          commit('SET_USER', res.data.data)
        }
      })
  },
  async getListUsers({commit, store}) {
    api.index(this, constants.USERS_ENDPOINT).then(res => {
      commit('SET_USERS', res.data.data)
    })
  },
  async show({commit}, params) {
    api.show(this, constants.USERS_ENDPOINT, params.id)
      .then((res) => {
        commit('SET_USER', res.data.data)
      }).catch(err => {
        console.log(err)
      })
  },

  create({commit}, params) {
    return api.store(this, constants.USERS_ENDPOINT, {user: params})
  },

  update({commit}, params) {
    return api.update(this,  constants.USERS_ENDPOINT, params.id, {user: params})
  },

  delete({commit}, params) {
    return api.delete(this,  constants.USERS_ENDPOINT, params.id)
  }

};

const users = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default users
