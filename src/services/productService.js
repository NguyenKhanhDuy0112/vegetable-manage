import api from "./api"

const list = () => {
    return api.get(api.url.products+"/get_all").then(res => res)
}

const get = (id) => {
    return api.get(api.url.products+'/id/'+id).then(res => res)
}

const remove = (id) => {
    return api.delete(api.url.products+'/delete/'+id).then(res => res)
}

const update = (data) => {
    return api.put(api.url.products+`/update/?${data}`).then(res => res)
}

const add = (data) => {
    return api.post(api.url.products+`/add/?${data}`).then(res => res)
}

const productService = {
    list,
    get,
    delete: remove,
    update,
    add
}

export default productService;