import axios from 'axios'

export const userApi = {
    index: _index,
    store: _store,
    update: _update,
    show: _show,
    delete: _delete
};

function _index({app}) {
    return app.$axios.get(`/users`)
}

function _store({app}, data) {
    return app.$axios.post(`/users`, data)
}

function _update({app}, id, data) {
    return app.$axios.put(`/users/${id}`, data)
}

function _show({app}, id) {
    return axios.get(`http://localhost/ktx/api/v1/users/${id}`)
}

function _delete({app}, id) {
    return app.$axios.delete(`/users/${id}`)
}