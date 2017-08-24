import React from 'react';
import { NavBar } from 'antd-mobile';

class Log extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onBack = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div id="log">
                <NavBar onLeftClick={this.onBack}>Log</NavBar>
            </div>
        )
    }
}

export default Log;