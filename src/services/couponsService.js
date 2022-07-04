import api from "./api"

const list = () => {
    return api.get(api.url.coupons).then(res => res)
}

const get = (id) => {
    return api.get(api.url.coupons+'/search/?id='+id).then(res => res)
}

const remove = (id) => {
    return api.delete(api.url.coupons+'/delete/'+id).then(res => res)
}

const update = (data) => {
    return api.put(api.url.coupons+`/update/?${data}`).then(res => res)
}

const add = (data) => {
    return api.post(api.url.coupons+`/add/?${data}`).then(res => res)
}

const couponsService = {
    list,
    get,
    delete: remove,
    update,
    add
}

export default couponsService;