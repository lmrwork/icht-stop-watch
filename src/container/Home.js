import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavBar, Icon, Button, WingBlank, WhiteSpace, Flex, List } from 'antd-mobile';
//action
import { goSetting, saveWatchState } from '../action/react-stop-watch';
//component
import { Watch } from '../component/Watch';

export class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      second: 0,
      records: [],
      timer: null,
      disableStart: false,
      disableStop: true,
      disableReset: true,
      disableCount:true,
      ...props.watchState,
    };
  }

  onSetting = () => {
    this.props.goSetting(this.props.history);
  }

  componentDidMount = () => {
    if (this.state.disableStart) {
      this.start();
    }
  }

  componentWillUnmount = () => {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }
    this.props.saveWatchState(this.state);
  }

  start = () => {
    //开始计时
    const timer = setInterval(() => {
      this.setState( prevState => (
        {second: (prevState.second + 0.1)}
      ));
    }, 100);
    //保存计时状态
    this.setState({
      timer: timer,
      disableStart: true,
      disableStop: false,
      disableReset: false,
      disableCount:false,
    });
  }

  stop = () => {
    if (this.state.timer) {
      clearInterval(this.state.timer);
      this.setState( prevState => ({
        timer: null,
        disableStart: false,
        disableStop: true,
        disableReset: false,
      }));
    }
  }

  reset = () => {
    //清空计时
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }
    //回复初始状态
    this.setState({
      second: 0,
      timer: null,
      disableStart: false,
      disableStop: true,
      disableReset: true,
      disableCount:true,
      records: [],
    });
  }

  count = () => {
    this.setState({
      records: [this.state.second.toFixed(2), ...this.state.records]
    });
  }

  render() {
    return (
      <div id="home">
        <NavBar rightContent={ <Icon onClick={ this.onSetting } key="1" type="ellipsis" /> } leftContent={ 'home' } onLeftClick={ () => alert('然而并没有首页！') }> 
          { this.props.lang.homeTitle } 
        </NavBar>
        <Watch second={this.state.second} />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button className="btn" style={{width:'100%'}} disabled={this.state.disableStart} onClick={ this.start } type="primary" inline size="small"> 开始/继续 </Button>
            </Flex.Item>
            <Flex.Item>
              <Button className="btn" style={{width:'100%'}} disabled={this.state.disableStop} onClick={ this.stop } type="ghost" inline size="small"> 暂停计时 </Button>
            </Flex.Item>
            <Flex.Item>
              <Button className="btn" style={{width:'100%'}} disabled={this.state.disableReset} onClick={ this.reset } type="warning" inline size="small"> 重置秒表 </Button>
            </Flex.Item>
          </Flex>
          <WhiteSpace/>
          <Button className="btn" disabled={this.state.disableCount} onClick={ this.count } across size="small"> 记录 </Button>
          <WhiteSpace/>
          <List>
          {this.state.records.map( (val, idx) => 
             <List.Item key={idx} extra={`record ${this.state.records.length - idx}`}> {` ----- ${val} seconds-----`} </List.Item>
          )}
          </List>
        </WingBlank>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  watchState: state.watchState,
});

const mapDispatchToProps = (dispatch) => ({
  goSetting: (history) => dispatch(goSetting(history)),
  saveWatchState: (state) => dispatch(saveWatchState(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
