import request from './request'

// 注册
export const RegisterApi = (params) => request.post('/register', params)
// 登录
export const LoginApi = (params) => request.post('/login', params)

export const ListApi = (params) => request.post('/student/showCourses', params)

