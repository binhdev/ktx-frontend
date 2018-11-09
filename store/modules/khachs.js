import axios from 'axios'

const state = {
  listKhach: []
};

const getters = {

};

const mutations = {
  GET_KHACHS(state, khachs) {
    state.listKhach = khachs
  }
};

const actions = {
  getKhachs({
    commit
  }) {
    axios.get('http://localhost/ktx/api/v1/khachluutrus')
      .then(r => {
        console.log(r.data.data)
        commit('GET_KHACHS', r.data.data)
      })
      .catch(err => {
        console.log(err)
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
