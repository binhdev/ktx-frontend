import axios from 'axios'

const state = {
  users: [],
  user: {}
};

const getters = {

};

const mutations = {
  setUsers: (state, users) => {
    state.users = users
  },

  setCurrentUser: (state, user) => {
    state.user = user
  }

};

const actions = {
  getUsers({commit}) {
    axios.get('http://localhost/ktx/api/v1/users')
      .then(r => {
        commit('setUsers', r.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  },

  getUser({
    commit
  }, id) {
    axios.get('http://localhost/ktx/api/v1/users/${id}')
      .then(r => {
        commit('setCurrentUser', r.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  },

  deleteUser({
    commit
  }, id) {
    axios.delete('http://localhost/ktx/api/v1/users/${id}')
      .then(r => {
        this.getUsers()
        console.log('Delete Success')
      })
      .catch(err => {
        console.log(err)
      })
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
