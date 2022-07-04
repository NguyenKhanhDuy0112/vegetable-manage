import api from "./api"

const list = () => {
    return api.get(api.url.customers).then(res => res)
}

const get = (id) => {
    return api.get(api.url.customers+'/'+id).then(res => res)
}

const remove = (id) => {
    return api.delete(api.url.customers+'/delete/'+id).then(res => res)
}

const update = (data) => {
    return api.put(api.url.customers+`/update/?${data}`).then(res => res)
}

const add = (data) => {
    return api.post(api.url.customers+`/add/?${data}`).then(res => res)
}

const customersService = {
    list,
    get,
    delete: remove,
    update,
    add
}

export default customersService;