import React from 'react';
import { NavBar } from 'antd-mobile';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    onBack = () => {
        this.props.history.push('/log');
    }

    render() {
        return (
            <div id="home">
                <NavBar onLeftClick={this.onBack}>Home</NavBar>
            </div>
        );
    }
}

export default Home;