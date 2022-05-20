import React from 'react'
import './less/means.less'
import { Form, Input, Button } from 'antd';

export default function List() {
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
            >
                <Form.Item
                    label="Username"
                    name="username"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}