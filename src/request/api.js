import request from './request'

// 注册
export const RegisterApi = (params) => request.post('/register', params)
// 登录
export const LoginApi = (params) => request.post('/login', params)
// 获取文章列表
export const ArticleListApi = (params) => request.get('/article',{params})      //get结构
// 添加文章
export const ArticelAddApi = (params) => request.post('/article/add', params)
// 删除文章
export const ArticelDelApi = (params) => request.post('/article/remove', params)