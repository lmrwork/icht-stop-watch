import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavBar } from 'antd-mobile';
//action
import { goHome, saveWatchState } from '../action/react-stop-watch';

let backSecond = 0;
let timer = null;

export class Setting extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      watchState: props.watchState ? {...props.watchState} : null
    };
    //继续计时
    if (this.state.watchState && this.state.watchState.disableStart) {
      backSecond = this.state.watchState.second;
      timer = setInterval(() => {
        backSecond += 0.1;
      }, 100)
    }
  }

  onBack = () => {
    //还原计时
    if (timer) {
      clearInterval(timer);
      this.props.saveWatchState({...this.state.watchState, second:backSecond});
    }
    this.props.goHome(this.props.history);
  }

  render() {
    return (
      <div id="log">
        <NavBar onLeftClick={this.onBack}> { this.props.lang.settingTitle } </NavBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  watchState: state.watchState,
});

const mapDispatchToProps = (dispatch) => ({
  goHome: (history) => dispatch(goHome(history)),
  saveWatchState: (state) => dispatch(saveWatchState(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
