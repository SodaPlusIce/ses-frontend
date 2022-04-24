import React from 'react';
import { ReactNode, key,} from 'react';
import { Menu, Button, Divider } from 'antd';
import { Layout, Breadcrumb, Image } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    ContainerOutlined,
    MailOutlined,
    AppstoreOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons'; 
import '@/style/view-style/index.scss'
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}


const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

class NavBar extends React.Component {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        // console.log(collapsed);
        this.setState({
            collapsed,
        });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className='logo'>
                        <img
                            width={170}
                            src="https://coseu-nanjing.oss-cn-nanjing.aliyuncs.com/ses/logo.png"
                        />
                    </div>
                    <Divider></Divider>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                        }}
                    />
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >
                        <Breadcrumb
                            style={{
                                margin: '16px 0',
                            }}
                        >
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                minHeight: 360,
                            }}
                        >
                            Bill is a cat.
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

// export default () => <NavBar />;
export default NavBar;