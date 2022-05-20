import React from 'react'
import '../less/means.less'
import { Form, Input, Button, InputNumber, Select, TimePicker, message } from 'antd';
import moment from 'moment';
import { AddCourseApi } from '../../request/api';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const format = "HH:mm"


export default function List() {

    const navigate = useNavigate()

    const onFinish = (values) => {
        AddCourseApi({
            courseTeacherId: localStorage.getItem('userId'),
            courseName: values.courseName,
            courseCredit: values.courseCredit,
            courseMaxStudentNumber: values.maxStudentNum,
            courseTime:[
                {
                    courseLocation: values.classroom,
                    classWeek: values.weekTime,
                    classStartTime: moment(values.startTime).format("HH:mm"),
                    classEndTime: moment(values.endTime).format("HH:mm"),
                    classNumber: 1
                },
            ]
        }).then(res => {
            console.log(res)
            if(res.errorCode === 0){
                message.success(res.message)
            }
            navigate("/teacher/list")
        })
    }

    // const onFinishFailed = (errorInfo) => {
    //     console.log(errorInfo)
    // }
    return (
        <div className='means'>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                autoComplete="off"
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="课程名"
                    name="courseName"
                    rules={[{ required: true, message: '请输入课程名!' }]}
                >
                    <Input style={{ width: 360 }} />
                </Form.Item>

                <Form.Item
                    label="课程容量"
                    name="maxStudentNum"
                    rules={[{ required: true, message: '请设置课程容量!' }]}
                >
                    <InputNumber min={10} max={150} />
                    {/* <Input></Input> */}
                </Form.Item>
                <Form.Item
                    label="课程学分"
                    name="courseCredit"
                    rules={[{required: true, message: "请设置课程学分!"}]}
                >
                    <InputNumber min={0.25} max={6}></InputNumber>
                </Form.Item>
                <Form.Item
                    label="课程时间"
                    name="courseDay"
                >
                    <Form.Item 
                    name="weekTime"
                    style={{ display: "inline-block" }} 
                    rules={[{ required: true, message: '请设置课程时间!' }]}
                    >
                        <Select style={{ width: 120 }} >
                            <Option value="one">周一</Option>
                            <Option value="two">周二</Option>
                            <Option value="three" >周三</Option>
                            <Option value="four">周四</Option>
                            <Option value="five">周五</Option>
                            <Option value="six">周六</Option>
                            <Option value="seven">周日</Option>
                        </Select>
                    </Form.Item>
                    &nbsp;&nbsp;上课时间：
                    {/* <InputNumber min={1} max={13} defaultValue={1} /> */}
                    <Form.Item 
                    name="startTime"
                    style={{ display: "inline-block" }} 
                    rules={[{ required: true, message: '请设置课程时间!' }]}>
                        <TimePicker format={format} />
                    </Form.Item>
                    &nbsp;~&nbsp;
                    {/* <InputNumber min={1} max={13} defaultValue={13} /> */}
                    <Form.Item
                    name="endTime" 
                    style={{ display: "inline-block" }} 
                    rules={[{ required: true, message: '请设置课程时间!' }]}>
                        <TimePicker format={format} />
                    </Form.Item>
                    &nbsp;教室：
                    <Form.Item
                    name="classroom" 
                    style={{ display: "inline-block" }} 
                    rules={[{ required: true, message: '请设置课程时间!' }]}>
                        <Input style={{ width: '100px' }} />
                    </Form.Item>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}