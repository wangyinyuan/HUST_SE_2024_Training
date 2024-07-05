import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net/'

const httpInterceptor = {
  invoke(args: UniApp.RequestOptions) {
    if (!args.url.startsWith('http')) {
      args.url = baseURL + args.url
    }

    args.timeout = 10000
    args.header = {
      ...args.header,
      'source-client': 'miniapp',
    }
    //token
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      args.header.Authorization = token
    }
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
  code: string
  msg: string
  result: T
}

//请求函数
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) resolve(res.data as Data<T>)
        else if (res.statusCode === 401) {
          const memberSotre = useMemberStore()
          memberSotre.clearProfile()
          uni.navigateTo({
            url: '/pages/login/login',
          })
          reject(res)
        } else {
          uni.showToast({
            icon: 'none',
            title: '伺服器被玩坏了',
          })
          reject(res)
        }
      },
      fail(result) {
        uni.showToast({
          icon: 'none',
          title: '网络错误',
        })
        reject(result)
      },
    })
  })
}
