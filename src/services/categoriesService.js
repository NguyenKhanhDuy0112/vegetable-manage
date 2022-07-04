import api from "./api"

const list = () => {
    return api.get(api.url.categories).then(res => res)
}

const get = (id) => {
    return api.get(api.url.categories+'/'+id).then(res => res)
}

const remove = (id) => {
    return api.delete(api.url.categories+'/delete/'+id).then(res => res)
}

const update = (data) => {
    return api.put(api.url.categories+`/update/?${data}`).then(res => res)
}

const add = (data) => {
    return api.post(api.url.categories+`/add/?${data}`).then(res => res)
}

const categoriesService = {
    list,
    get,
    delete: remove,
    update,
    add
}

export default categoriesService;