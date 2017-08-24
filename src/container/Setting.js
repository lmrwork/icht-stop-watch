import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavBar } from 'antd-mobile';
//action
import { goHome } from '../action/react-stop-watch';
export class Setting extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onBack = () => {
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
  lang: state.lang
});

const mapDispatchToProps = (dispatch) => ({
  goHome: (history) => dispatch(goHome(history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
