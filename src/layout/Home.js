import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavBar } from 'antd-mobile';

export class Home extends PureComponent {
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
        <NavBar onLeftClick={this.onBack}> { this.props.lang.homeTitle } </NavBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lang: state.lang,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
