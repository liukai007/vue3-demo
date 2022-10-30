/**
 * 文件主要封装 axios 的get、post等方法
 */
import { axiosInstance as axios } from "./axios.js"
// 以get方式进行请求
export function axiosGet(url,parameter={}) {
    debugger
    return axios({
        url: url,
        method: 'get',
        params: parameter
    })
}
// 以post方式进行请求
export function axiosPost(url,parameter={}) {
    return axios({
        url: url,
        method:'post' ,
        data: parameter
    })
}