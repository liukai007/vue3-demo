import axios from "axios";
import querystring from "querystring";

const errorHandle = (status, info) => {
    switch (status) {
        case 400:
            console.log("语义有误");
            break;
        case 401:
            console.log("服务器认证失败");
            break;
        case 502:
            console.log("服务无响应");
            break;
        default:
            console.log(info);
            break;
    }
}


const instance = axios.create({
    //网络请求的公共配置
    timeout: 5000
})

instance.interceptors.request.use(
    config => {
        if (config.method === "post") {
            config.data = querystring.stringify(config.data)
        }
        return config;
    },
    error => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response => {
        response.status === 200 ?
            Promise.resolve(response)
            :
            Promise.reject(response)
    },
    error => {
        const {response} = error;
        errorHandle(response.status, response.info)
    }
)
export default instance;