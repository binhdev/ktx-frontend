export const khachApi = {
    index: _index,
    store: _store,
    update: _update,
    show: _show,
    delete: _delete
};

function _index({app}) {
    return app.$axios.get(`/khachluutrus`)
}

function _store({app}, data) {
    return app.$axios.post(`/khachluutrus`, data)
}

function _update({app}, id, data) {
    return app.$axios.put(`/khachluutrus/${id}`, data)
}

function _show({app}, id) {
    return app.$axios.get(`/khachluutrus/${id}`)
}

function _delete({app}, id) {
    return app.$axios.delete(`/khachluutrus/${id}`)
}