import React, { useEffect, useState } from 'react'
import '../less/listtable.less'
import { Table, Button, Input, message } from 'antd';
import monment from 'moment'
import ClassInfo from '../ClassInfo'
import { DeleteCourseApi, CheckCourseApi, JwcAllCourseApi } from '../../request/api';

export default function List() {
    const [arr, setarr] = useState([])
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10, total: 10 })
    useEffect(() => {
        JwcAllCourseApi({
            pageNo: 1,
            pageSize: 10
        }).then(res => {
            let a = res.data;
            for (var i = 0; i < a.length; i++) {
                a[i].key = a[i].courseId;
            }
            setarr(a)
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
            title: '课程学分',
            dataIndex: 'courseCredit',
            key: 'courseCredit',
            render: text => <p>{text}</p>
        },
        {
            title: '已选人数',
            dataIndex: 'courseStudentNumber',
            key: 'courseStudentNumber',
            render: text => <p>{text}</p>
        },
        {
            title: '课程容量',
            dataIndex: 'courseMaxStudentNumber',
            key: 'courseMaxStudentNumber',
            render: text => <p>{text}</p>
        },
        {
            title: '审核状态',
            dataIndex: 'coursePass',
            key: 'coursePass',
            render: text => <p>{text == "0" ? "待审核" : (text == "1" ? "已通过" : "未通过")}</p>
        },
        {
            title: '操作',
            key: 'action',
            render: text => {
                return (
                    <div>
                        <Button type="primary" onClick={() => {
                            CheckCourseApi({
                                courseId: text.courseId,
                                isPass: true
                            }).then(res => {
                                console.log(res)
                                if (res.errorCode == 0) {
                                    window.location.reload()
                                }
                            })
                        }}>通过</Button>
                        <Button type="primary" style={{ left: "15px" }} onClick={() => {
                            CheckCourseApi({
                                courseId: text.courseId,
                                isPass: false
                            }).then(res => {
                                console.log(res)
                                if (res.errorCode == 0) {
                                    window.location.reload()
                                }
                            })
                        }}>不通过</Button>
                        <ClassInfo></ClassInfo>
                        <Button type="danger" style={{ left: "45px" }} onClick={() => {
                            DeleteCourseApi({
                                courseId: text.courseId
                            }).then(res => {
                                console.log(res)
                                if (res.errorCode == 0) {
                                    message.success(res.message)
                                }
                            })
                        }}>删除</Button>
                    </div>
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