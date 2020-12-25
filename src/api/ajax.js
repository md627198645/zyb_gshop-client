import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 1.配置通用的基础路径和超时
const service = axios.create({
    baseURL:'http://39.99.186.36/api',
    timeout:2000,
})


// 添加请求拦截器
service.interceptors.request.use((config)=>{
    // 2.显示请求进度条
    NProgress.start()

    // 必须返回config
    return config
})

// 添加响应拦截器
service.interceptors.response.use(
    response=>{  //请求成功返回的回调
        // 隐藏请求进度条
        NProgress.done()

        // return response

        // 3.成功返回的数据不是response,而是response.data
        return response.data
    },
    error=>{    //  请求失败返回的回调
        NProgress.done()

        // 4.统一处理请求错误，具体请求可以处理或不处理
        alert(error.message || '未知的请求错误')

        return Promise.reject(error)
    }
)

// 向外暴露 service
export default service