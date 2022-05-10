import { Popover, Button } from 'antd';
import React from 'react'

class App extends React.Component {
    state = {
        clicked: false,
        hovered: false,
    };

    hide = () => {
        this.setState({
            clicked: false,
            hovered: false,
        });
    };

    handleHoverChange = visible => {
        this.setState({
            hovered: visible,
            clicked: false,
        });
    };

    handleClickChange = visible => {
        this.setState({
            clicked: visible,
            hovered: false,
        });
    };

    render() {
        const clickContent = (
            <>
                <div>1-16周&nbsp;&nbsp;周二6-7&nbsp;&nbsp;教1-302 </div>
                <div>1-16周&nbsp;&nbsp;周四1-2&nbsp;&nbsp;教1-302 </div>
            </>
        );

        return (
            <Popover
                content={
                    <div>
                        {clickContent}
                    </div>
                }
                title="详细信息"
                trigger="click"
                visible={this.state.clicked}
                onVisibleChange={this.handleClickChange}
            >
                <Button type="info" style={{ left: '30px' }}>详情</Button>
            </Popover>
        );
    }
}

export default App;