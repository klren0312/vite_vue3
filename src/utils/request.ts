import axios, { type ResponseType, type InternalAxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'
import { router } from '../router'
import { PAGE_SERVER_ERROR_NAME } from '../router/constant'
interface ResponseBody<T> {
  code: number
  message: string
  data: T
}

const instance = axios.create({
  baseURL: '/api/v1',
  timeout: 120000,
})

// request拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

// response拦截器
instance.interceptors.response.use(
  (response) => {
    if (response.data.code !== 0) {
      switch (response.data.code) {
        case 20000: // 未登录
        case 20001: // token失效
          // 退出登录操作
          break
        default:
          break
      }
    }
    return response
  },
  (err) => {
    if (err.response) {
      switch (err.response.status) {
        case 401:
          break
        case 500:
        case 501:
        case 502:
        case 503:
          router.replace({
            name: PAGE_SERVER_ERROR_NAME,
          })
          ElMessage.error('服务器错误')
          break
      }
      if (err.response?.data) {
        return Promise.reject(err.response.data)
      }
    } else {
      return Promise.reject(err)
    }
  },
)

export const get = <T = any>(
  url: string,
  params?: any,
  responseType?: ResponseType | null,
  needErrorMessage: boolean = true,
): Promise<ResponseBody<T>> => {
  return new Promise((resolve, reject) => {
    instance({
      url,
      method: 'get',
      responseType: responseType ?? 'json',
      params,
    })
      .then((res) => {
        if (res.status === 200) {
          if (res.data.code !== 0 && needErrorMessage) {
            ElMessage.error(res.data.message ?? '请求错误')
          }
          resolve(res.data)
        } else {
          throw new Error(JSON.stringify(res))
        }
      })
      .catch((err) => {
        console.error(err, 'Get err')
        let message = err?.data?.desc
        if (err.message && err.message.indexOf('timeout') !== -1) {
          message = '接口超时'
        } else {
          message = '接口错误'
        }
        if (message && needErrorMessage) {
          ElMessage.error(message)
        }
        reject(err)
      })
  })
}

export const del = <T = any>(
  url: string,
  data?: any,
  responseType?: ResponseType | null,
  needErrorMessage: boolean = true,
): Promise<ResponseBody<T>> => {
  return new Promise((resolve, reject) => {
    instance({
      url,
      method: 'delete',
      responseType: responseType ?? 'json',
      data,
    })
      .then((res) => {
        if (res.status === 200) {
          if (res.data.code !== 0 && needErrorMessage) {
            ElMessage.error(res.data.message ?? '请求错误')
          }
          resolve(res.data)
        } else {
          throw new Error(JSON.stringify(res))
        }
      })
      .catch((err) => {
        console.error(err, 'Get err')
        let message = err?.data?.desc
        if (err.message && err.message.indexOf('timeout') !== -1) {
          message = '接口超时'
        } else {
          message = '接口错误'
        }
        if (message && needErrorMessage) {
          ElMessage.error(message)
        }
        reject(err)
      })
  })
}

export const post = <T = any>(
  url: string,
  params: any,
  needErrorMessage: boolean = true,
): Promise<ResponseBody<T>> => {
  return new Promise((resolve, reject) => {
    instance({
      url,
      method: 'post',
      data: params,
    })
      .then((res) => {
        if (res.status === 200) {
          if (res.data.code !== 0 && needErrorMessage) {
            ElMessage.error(res.data.message ?? '请求错误')
          }
          resolve(res.data)
        } else {
          throw new Error(JSON.stringify(res))
        }
      })
      .catch((err) => {
        console.error(err, 'Post err')
        let message = err?.data?.desc
        if (err.message && err.message.indexOf('timeout') !== -1) {
          message = '接口超时'
        } else {
          message = '接口错误'
        }
        if (message && needErrorMessage) {
          ElMessage.error(message)
        }
        reject(err)
      })
  })
}

export const patch = <T = any>(
  url: string,
  params: any,
  needErrorMessage: boolean = true,
): Promise<ResponseBody<T>> => {
  return new Promise((resolve, reject) => {
    instance({
      url,
      method: 'patch',
      data: params,
    })
      .then((res) => {
        if (res.status === 200) {
          if (res.data.code !== 0 && needErrorMessage) {
            ElMessage.error(res.data.message ?? '请求错误')
          }
          resolve(res.data)
        } else {
          throw new Error(JSON.stringify(res))
        }
      })
      .catch((err) => {
        console.error(err, 'Patch err')
        let message = err?.data?.desc
        if (err.message && err.message.indexOf('timeout') !== -1) {
          message = '接口超时'
        } else {
          message = '接口错误'
        }
        if (message && needErrorMessage) {
          ElMessage.error(message)
        }
        reject(err)
      })
  })
}

export const getDownload = <T = any>(url: string, params?: any): Promise<ResponseBody<T>> => {
  return new Promise((resolve, reject) => {
    instance({
      url,
      method: 'get',
      params,
      responseType: 'blob',
    })
      .then((res) => {
        if (res.status === 200) {
          const data = res.data
          if (data.size === 0) {
            resolve({
              code: -1,
              message: '暂无文件',
              data,
            })
          }
          const r = new FileReader()
          r.onload = () => {
            // 如果JSON.parse不报错，说明result是json字符串，则可以推测是下载报错情况下返回的对象，类似于{code: 0}
            // 如果JSON.parse报错，说明是下载成功，返回的二进制流，则进入catch进行后续处理
            try {
              const resData = JSON.parse(r.result as string) // this.result为FileReader获取blob数据转换为json后的数据，即后台返回的原始数据
              // 如果执行到这里，说明下载报错了，进行后续处理
              resolve({
                code: -1,
                message: '暂无文件',
                data: resData,
              })
            } catch (err) {
              // 正常处理
              let fileName = res.headers['content-disposition']
              // 获取文件名
              if (fileName && fileName.length >= 2) {
                fileName = fileName.split('=')[1]
              }
              fileName = decodeURIComponent(fileName)
              const url = window.URL.createObjectURL(data)
              const resData: any = {
                url,
                fileName,
              }
              resolve({
                code: 0,
                message: '获取成功',
                data: resData,
              })
            }
          }
          r.readAsText(data) // FileReader的API
        } else {
          throw new Error(JSON.stringify(res))
        }
      })
      .catch((err) => {
        console.error(err, 'Post err')
        const message = err?.data?.desc
        if (message) {
          ElMessage.error(message)
        }
        reject(err)
      })
  })
}
