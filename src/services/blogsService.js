import api from './api';

const list = () => {
    return api.get(api.url.blogs).then(res => res)
}

const get = (id) => {
    return api.get(api.url.blogs+'/' +id).then(res => res)
}

const update = (data) => {
    return api.put(api.url.blogs+'/update/?' +data).then(res => res)
}

const deleted = (id) => {
    return api.delete(api.url.blogs+'/delete/' +id).then(res => res)
}

const add = (data) => {
    return api.post(api.url.blogs+'/add/?' +data).then(res => res)
}

const blogService = {
    list,
    get,
    update,
    deleted,
    add
}

export default blogService;