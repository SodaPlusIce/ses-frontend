import React,{useState,useEffect} from "react"
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useLocation } from "react-router-dom";

export default function Bread() {
    const [breadName, setbreadName] = useState()
    const {pathname} = useLocation();

    useEffect(()=>{
        switch(pathname) {
            case "/list":
                setbreadName('查看可选课程')
                break
            case "/means":
                setbreadName('修改资料')
                break
            default:
                break
        }
    },[pathname]) 

    return (
        <Breadcrumb style={{height: "30px",lineHeight: "30px"}}>
            <Breadcrumb.Item href='/'>
                <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item >{breadName}</Breadcrumb.Item>
        </Breadcrumb>
    )
}