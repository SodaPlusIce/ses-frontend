import React, { Component } from "react";
import { Layout, Input, Form, Button, Divider, message, notification } from "antd";
// import '@/style/view-style/login.scss'
import { withRouter } from 'react-router'

class Login extends Component {
    state = {
        loading: false
    }

    enterLoading = () => {
        this.setState({
            loading:true
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if(!err) {
                // let { username, passwd} = values
                

                switch(values.username) {
                    case 'admin':
                        values.auth = 0
                        break
                    default:
                        values.auth = 1
                }

                localStorage.setItem('user', JSON.stringify(values))
                this.enterLoading()
                this.timer = setTimeout(() => {
                    message.success('Loging Successful!')
                    this.props.history.push('/')
                }, 2000)
            }
        })
    }

    componentDidMount() {
        notification.open({
            message: 'Welcome to Student course selection system!',
            duration: null,
            description: 'Please intput your username and password'
        })
    }

    componentWillUnmount() {
        notification.destroy()
        this.timer && clearTimeout(this.timer)
    }

    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <Layout className="login animated fadeIn">
                <div className="model">
                    <div className="login-form">
                        <h3>System</h3>
                        <Divider />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Item className="item">
                                {getFieldDecorator('username', {
                                    rules: [{required: true, message: 'Please input username'}]
                                })(
                                    <Input
                                        placeholder='Username'
                                    />
                                )}
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default withRouter(Form.create()(Login()))