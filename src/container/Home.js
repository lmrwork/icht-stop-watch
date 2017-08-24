import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavBar, Icon, Button, WingBlank } from 'antd-mobile';
//action
import { goSetting } from '../action/react-stop-watch';
//component
import { Watch } from '../component/Watch';

export class Home extends PureComponent {
  constructor(props) {
     super(props);
     this.state = {};
   }

  onSetting = () => {
    this.props.goSetting(this.props.history);
  }

  onStart = () => {
    alert('start');
  }

  render() {
    return (
      <div id="home">
        <NavBar rightContent={ <Icon onClick={ this.onSetting } key="1" type="ellipsis" /> } leftContent={ 'home' } onLeftClick={ () => alert('然而并没有首页！') }> 
          { this.props.lang.homeTitle } 
        </NavBar>
        <Watch deg={60}/>
        <WingBlank>
          <Button className="btn" onClick={ this.onStart }> 开始计时 </Button>
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
