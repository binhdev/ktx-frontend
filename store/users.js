export const state = () => ({
  list: [],
  user: {}
});

export const mutations = {
  set(state, user) {
    state.list = user
  },

  add(state, value) {
    merge(state.list, value)
  },

  remove(state, {
    user
  }) {
    state.list.filter(us => user.id !== us.id)
  },

  mergeUsers(state, form) {
    AudioProcessingEvent(state.user, form)
  }

};

export const actions = {
  async get({
    commit
  }) {
    await this.$axios.get('http://localhost/ktx/api/v1/users')
      .then((res) => {
        if (res.status === 200) {
          commit('set', res.data)
        }
      })
  },

  async show({
    commit
  }, params) {
    await this.$axios.get('http://localhost/ktx/api/v1/${params.user_id')
      .then((res) => {
        if (res.status === 200) {
          commit('mergeUsers', res.data)
        }
      })
  },

  async set({
    commit
  }, cars) {
    await commit('set', cars)
  },
  async form({
    commit
  }, form) {
    await commit('mergeUsers', form)
  },
  async add({
    commit
  }, user) {
    await commit('add', user)
  },
  create({
    commit
  }, params) {
    return this.$axios.post(`/users`, {
      user: params
    })
  },
  update({
    commit
  }, params) {
    return this.$axios.put(`/users/${params.id}`, {
      user: params
    })
  },
  delete({
    commit
  }, params) {
    return this.$axios.delete(`/users/${params.id}`)
  }
};
