import api from "./api"

const list = () => {
    return api.get(api.url.providers).then(res => res)
}

const get = (id) => {
    return api.get(api.url.providers+'/'+id).then(res => res)
}

const remove = (id) => {
    return api.delete(api.url.providers+'/delete/'+id).then(res => res)
}

const update = (data) => {
    return api.put(api.url.providers+`/update/?${data}`).then(res => res)
}

const add = (data) => {
    return api.post(api.url.providers+`/add/?${data}`).then(res => res)
}

const providersService = {
    list,
    get,
    delete: remove,
    update,
    add
}

export default providersService;