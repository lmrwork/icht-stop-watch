import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavBar } from 'antd-mobile';

export class Log extends PureComponent {
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
        <NavBar onLeftClick={this.onBack}> { this.props.lang.logTitle } </NavBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lang: state.lang
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Log);
