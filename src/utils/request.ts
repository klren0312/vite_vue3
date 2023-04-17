import axios from 'axios'

const instance = axios.create({
  timeout: 30000
})

instance.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  response => {
    return response
  },
  err => {
    if (err.respones) {
      switch (err.response.status) {
      case 401:
        break
      default:
        break
      }
    }
    return Promise.reject(err.response.data)
  }
)
