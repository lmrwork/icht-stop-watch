import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavBar, List, Switch } from 'antd-mobile';
//action
import { goHome, saveWatchState, setWatchColor } from '../action/react-stop-watch';

let backSecond = 0;
let timer = null;

export class Setting extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      watchState: props.watchState ? {...props.watchState} : null,
      chtColor: props.watchColor ? true : false,
    };
    //继续计时
    if (this.state.watchState && this.state.watchState.disableStart) {
      backSecond = this.state.watchState.second;
      timer = setInterval(() => {
        backSecond += 0.1;
      }, 100);
    }
  }

  onBack = () => {
    //还原计时
    if (this.state.watchState && this.state.watchState.disableStart) {
      clearInterval(timer);
      this.props.saveWatchState({...this.state.watchState, second:backSecond});
    }
    this.props.goHome(this.props.history);
  }

  light = () => {
    if (this.state.chtColor) {
      this.props.setWatchColor(null);
    } else {
      this.props.setWatchColor({background:'#a12022'});
    }
    this.setState({chtColor: !this.state.chtColor});
  }

  render() {
    return (
      <div id="log">
        <NavBar onLeftClick={this.onBack}> { this.props.lang.settingTitle } </NavBar>
        <List renderHeader={this.props.lang.watchConfig}>
        <List.Item extra={<Switch checked={this.state.chtColor} onChange={this.light}/>}>
          {this.props.lang.watchChtColor}
        </List.Item>
        </List>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  watchState: state.watchState,
  watchColor: state.watchColor,
});

const mapDispatchToProps = (dispatch) => ({
  goHome: (history) => dispatch(goHome(history)),
  saveWatchState: (state) => dispatch(saveWatchState(state)),
  setWatchColor: (color) => dispatch(setWatchColor(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
