import api from "./api"

const list = () => {
    return api.get(api.url.billDetail).then(res => res)
}

const get = (id) => {
    return api.get(api.url.billDetail+'/'+id).then(res => res)
}

const getBill = (id) => {
    return api.get(api.url.billDetail+'/bill-id/'+id).then(res => res)
}

const remove = (id) => {
    return api.delete(api.url.billDetail+'/delete/'+id).then(res => res)
}

const update = (data) => {
    return api.put(api.url.billDetail+`/update/?${data}`).then(res => res)
}

const add = (data) => {
    return api.post(api.url.billDetail+`/add/?${data}`).then(res => res)
}

const billDetailService = {
    list,
    get,
    delete: remove,
    getBill,
    update,
    add
}

export default billDetailService;