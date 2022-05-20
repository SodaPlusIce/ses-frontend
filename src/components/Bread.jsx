import React, { useState, useEffect } from "react"
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useLocation } from "react-router-dom";

export default function Bread() {
    const [breadName, setbreadName] = useState()
    const { pathname } = useLocation();

    useEffect(() => {
        switch (pathname) {
            case "/list":
                setbreadName('查看可选课程')
                break
            case "/courses":
                setbreadName('已选课程')
                break
            case "/means":
                setbreadName('修改资料')
                break

            case "/teacher/list":
                setbreadName('所授课程')
                break
            case "/teacher/addCourse":
                setbreadName('增加课程')
                break
            case "/teacher/means":
                setbreadName('修改资料')
                break

            case "/jwc/list":
                setbreadName('所有课程信息')
                break
            case "/jwc/roomList":
                setbreadName('教室课程信息')
                break
            case "/jwc/means":
                setbreadName('修改资料')
                break

            default:
                break
        }
    }, [pathname])

    return (
        <Breadcrumb style={{ height: "30px", lineHeight: "30px" }}>
            <Breadcrumb.Item href='/'>
                <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item >{breadName}</Breadcrumb.Item>
        </Breadcrumb>
    )
}