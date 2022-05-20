import request from './request'

// 注册
export const RegisterApi = (params) => request.post('/register', params)
// 登录
export const LoginApi = (params) => request.post('/login', params)

export const ListApi = (params) => request.post('/student/showCourses', params)

export const SelectCourseApi = (params) => request.post('/student/selectCourse', params)

export const DropCourseApi = (params) => request.post('/student/dropCourse', params)
// 教师添加课程
export const AddCourseApi = (params) => request.post('/teacher/addCourse', params)