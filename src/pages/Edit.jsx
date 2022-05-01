import React, { useState } from 'react'
import { PageHeader, Button, Modal, Form, Input } from 'antd';
import moment from 'moment';
import '@wangeditor/editor/dist/css/style.css'
import MyEditor from '../components/MyEditor';
import { ArticelAddApi } from '../request/api';


export default function Edit() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm()
    const [content, setContent] = useState('')

    const showModal = () => {
        setIsModalVisible(true);
    };


    const handleOk = () => {
        form
            .validateFields()
            .then((values) => {
                form.resetFields();
                console.log('Received values of form: ', values);
                setIsModalVisible(false);
            })
            .catch((info) => {
                console.log('Validate Failed:', info);
            });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title="文章编辑"
                subTitle={"当前日期:"+moment(new Date()).format("YYYY-MM-DD")}
                extra={[
                    <Button key="1" type="primary" onClick={showModal}>
                        提交文章
                    </Button>,
                ]}
            />
            <MyEditor/>
            <Modal title="填写文章标题"  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText="提交" cancelText="取消">
                <Form
                    name="basic"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                    autoComplete="off"
                    form={form}
                >
                    <Form.Item
                        label="Title"
                        name="username"
                        rules={[{required: true, message: "请填写标题"}]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="SubTitle"
                        name="SubTitle"
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}