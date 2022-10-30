/**

 * 文件主要用来创建 axios 实例，然后添加请求拦截器和响应拦截器

 */
import axios from 'axios'
// 1.定义存放后端请求的服务地址的常量。
const basePath = ''; // http://localhost:8085
// 2.创建 axios 实例
const axiosInstance = axios.create({
    baseURL: basePath,
    withCredentials: true,//是否允许跨域
    timeout: 9000
})
// 3.添加axios实例的请求拦截器
axiosInstance.interceptors.request.use(
    config => {
        // 发送请求之前（可以在这里给头部添加token）
        return config;
    },
    error => {
        // 请求错误
        console.log(error)
        return error;
    }
)

// 4.添加axios实例的响应拦截器。
axiosInstance.interceptors.response.use(
    response => {
        console.log("axios响应拦截器的数据：",response);
        /**
          对响应数据判断:
         如果成功返回数据，就通过return把数据返出去
         如果请求不成功，就在拦截器这里统一处理（组件的代码就不用关注错误的情况了）
         */
        if(response.status==200){
// 请求成功，根据实际的后端返回值进行返回，此项目的后端返回值放在对象的data中，因此是response.data
            return response.data;
        }else{
// 请求失败，通过函数 handleErrorData 对错误消息统一处理。
            handleErrorData(response.data);
        }
        return response;
    },
    error => {
        // 响应错误-axios响应拦截器的错误数据
        return error;
    }

)

// 对错误信息的处理函数

function handleErrorData(errMes){
    if(errMes.message){
        alter(errMes.message);

    }else{
        switch(errMes.code){
            case 401 :
                alter("未授权，请重新登录!");
                break;
            case 403 :
                alter("拒绝访问");
                break;
            case 404 :
                alter("很抱歉，资源未找到!");
                break;
            case 500 :
                alter("服务器错误!");
                break;
            case 504 :
                alter("网络超时!");
                break;
            default :
                alter("服务正在联调中，请稍后!");
                break;
        }
    }
}
export {axiosInstance}
