import React, { useEffect, useState } from 'react'
import './less/listtable.less'
import { Table, Button, Space } from 'antd';
import { ListApi } from '../request/api';
import monment from 'moment'
import ClassInfo from './ClassInfo'

export default function List() {

    const [arr, setarr] = useState([
        {
            key: 'c1',
            courseId: 'c1',
            courseName: '软件工程',
            courseCapcity: '0/50',
            courseTeacher: '李四',
            courseState: "待审核"
        }
    ])
    // 分页
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 10 })

    useEffect(() => {
        ListApi({
            studentId: localStorage.getItem('userId'),
            pageNo: 1,
            pageSize: 10
        }).then(res => {
            console.log(res)
            if(res.errorCode === 0) {
                let course = Object()
                
            }

            // if (res.errorCode === 0) {
            //     message.success(res.message)
            //     //存储数据
            //     // localStorage.setItem('avatar', res.data.avatar)
            //     // localStorage.setItem('cms-token', res.data['cms-token'])
            //     // localStorage.setItem('editable', res.data.editable)
            //     // localStorage.setItem('player', res.data.player)
            //     localStorage.setItem('userName', res.data.userName)
            //     let userType = res.data.userType
            //     if (userType === "学生") {
            //         localStorage.setItem('auth', 0)
            //     }
            //     if (userType === "教师") {
            //         localStorage.setItem('auth', 1)
            //     }

            //     setTimeout(() => {
            //         if (userType === "学生")
            //             navigate('/')
            //         if (userType === "教师")
            //             navigate('/teacher')
            //     }, 500)
            // } else {
            //     message.error(res.message)
            // }
        })
    }, [])
    const columns = [
        {
            title: '课程名称',
            dataIndex: 'courseName',
            key: 'courseName',
            render: text => {
                return (
                    <div>{text}</div>
                )
            }

        },
        {
            title: '课程号',
            dataIndex: 'courseId',
            key: 'courseId',
            render: text => <p>{text}</p>
        },
        {
            title: '课程容量',
            dataIndex: 'courseCapcity',
            key: 'courseCapcity',
            render: text => <p>{text}</p>
        },
        {
            title: '教师',
            dataIndex: 'courseTeacher',
            key: 'courseTeacher',
            render: text => <p>{text}</p>
        },
        {
            title: '操作',
            key: 'action',
            render: text => {
                return (
                    <Space size="right">
                        <Button type='primary' onClick={() => console.log(text.key)}>选课</Button>
                        <Button type='danger' style={{ left: '15px' }} onClick={() => console.log(text.key)}>退选</Button>
                        <ClassInfo></ClassInfo>
                    </Space >
                )
            },
        },
    ];

    //分页
    const pageChange = (arg) => {
        console.log(arg)
        // getArticleList(arg.current, arg.pageSize);
    }

    return (
        <div className='list_table'>
            <Table
                columns={columns}
                dataSource={arr}
                onChange={pageChange}
                pagination={pagination}
            />
        </div>
    )
}