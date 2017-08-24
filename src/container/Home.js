import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavBar, Icon, Button, WingBlank, WhiteSpace } from 'antd-mobile';
//action
import { goSetting } from '../action/react-stop-watch';
//component
import { Watch } from '../component/Watch';

export class Home extends PureComponent {
  constructor(props) {
     super(props);
     this.state = {
        second: 0,
        timer: null,
        disableStart: false,
        disableStop: true,
        disableReset: true,
     };
   }

  onSetting = () => {
    this.props.goSetting(this.props.history);
  }

  start = () => {
    //开始计时
    const timer = setInterval(() => {
      this.setState((prevState) => {
        return {second: prevState.second + 0.1};
      });
    }, 100);
    //保存计时状态
    this.setState({
      timer: timer,
      disableStart: true,
      disableStop: false,
    });
  }

  stop = () => {
    if (this.state.timer) {
      clearInterval(this.state.timer);
      this.setState({
        timer: null,
        disableStart: false,
        disableStop: true,
      });
    }
  }

  render() {
    return (
      <div id="home">
        <NavBar rightContent={ <Icon onClick={ this.onSetting } key="1" type="ellipsis" /> } leftContent={ 'home' } onLeftClick={ () => alert('然而并没有首页！') }> 
          { this.props.lang.homeTitle } 
        </NavBar>
        <Watch second={this.state.second} />
        <WingBlank>
          <Button className="btn" disabled={this.state.disableStart} onClick={ this.start }> 开始计时 </Button>
          <WhiteSpace />
          <Button className="btn" disabled={this.state.disableStop} onClick={ this.stop } type="warning"> 暂停计时 </Button>
        </WingBlank>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lang: state.lang,
});

const mapDispatchToProps = (dispatch) => ({
  goSetting: (history) => dispatch( goSetting(history) ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
