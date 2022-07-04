import api from "./api"

const list = () => {
    return api.get(api.url.bills).then(res => res)
}

const get = (id) => {
    return api.get(api.url.bills+'/id/'+id).then(res => res)
}

const getByType = (type) => {
    return api.get(api.url.bills+'/type/'+type).then(res => res)
}

const remove = (id) => {
    return api.delete(api.url.bills+'/delete/'+id).then(res => res)
}

const update = (data) => {
    return api.put(api.url.bills+`/update/?${data}`).then(res => res)
}

const add = (data) => {
    return api.post(api.url.bills+`/add/?${data}`).then(res => res)
}

const billsService = {
    list,
    get,
    delete: remove,
    update,
    add,
    getByType
}

export default billsService;