import { api } from '@/api/index'

const state = {
  listKhach: []
};

const getters = {

};

const mutations = {
  SET_KHACHS(state, khachs) {
    state.listKhach = khachs
  }
};

const actions = {
  getListKhachs({commit}) {
    khachApi.index(this).then(res => {
      commit('SET_KHACHS', res.data.data)
    })
  }
};

const khachs = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default khachs
