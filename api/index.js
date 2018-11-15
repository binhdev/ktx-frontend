import axios from 'axios'
import { BASE_URL } from '@/utils/constants'

var httpNetwork = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
});

  
export const api = {
    index: _index,
    store: _store,
    update: _update,
    show: _show,
    delete: _delete
};

function _index({app}, endpoint) {
    return httpNetwork.get(endpoint)
}

function _store({app}, endpoint, data) {
    return httpNetwork.post(endpoint, data)
}

function _update({app}, endpoint, id, data) {
    return httpNetwork.put(`${endpoint}/${id}`, data)
}

function _show({app}, endpoint, id) {
    return httpNetwork.get(`${endpoint}/${id}`)
}

function _delete({app}, endpoint, id) {
    return httpNetwork.delete(`${endpoint}/${id}`)
}