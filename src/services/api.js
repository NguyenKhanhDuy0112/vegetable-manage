import axios from 'axios';

const url = {
    baseUrl : "http://localhost:8080/api",
    categories: '/categories',
    products: "/product",
    customers: "/customer",
    providers: "/provider",
    bills: "/bill",
    billDetail: "/bill-detail",
    coupons: "/coupon",
    blogs: "/blog",
}

const instance = axios.create({
    baseURL : url.baseUrl,
    headers: {
        "Content-Type":"application/json",
        Accept:"application/json"
    }
})

const api = {
    url,
    instance,
    get:instance.get,
    put:instance.put,
    delete:instance.delete,
    post:instance.post
}

// instance.interceptors.response.use((response) => {
//     return response;
// }, (error) => {
//     if (error.response) {
//         window.location.href = '/no-internet';
//     }  else {
//         switch (error.response.status) {
//             case 401: window.location.href = '/login'; break;
//             case 403: window.location.href = '/no-permission'; break;
//             default : break
//         }
//     }
//     return Promise.reject(error);
// })


export default api;


