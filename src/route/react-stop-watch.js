import React from 'react';
//页面路由
import { Route } from 'react-router-dom';
//页面组件
import Home from '../container/Home';
import Setting from '../container/Setting';
//路由动画
import { CSSTransitionGroup } from 'react-transition-group'
import '../static/css/left.css';
import '../static/css/fade.css';

export const routes = ({location}) => {
  return (
    <CSSTransitionGroup transitionName="left" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
      <div id="CSSTransitionGroup" key={location.pathname} className="relative">
        <Route location={location} path="/" component={Home} exact />
        <Route location={location} path="/setting" component={Setting} exact />
      </div>
    </CSSTransitionGroup>
  );
};
