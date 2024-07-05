import type { LoginResult } from '@/types/member'
import { http } from '@/utils/http'

type LoginParams = {
  phoneNumber: string
}
export const postLoginWxMin = (data: LoginParams) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data,
  })
}
