import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../layout/Home';
import Log from '../layout/Log';
import { CSSTransitionGroup } from 'react-transition-group'
import '../static/css/left.css';
import '../static/css/fade.css';

const error = () => <div style={{color:'#458'}}> error </div>;

const routes = ({location}) => {
  return (
    <CSSTransitionGroup transitionName="left" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
      <div id="CSSTransitionGroup" key={location.pathname} className="relative">
        <Route location={location} path="/" component={Home} exact />
        <Route location={location} path="/log" component={Log} exact />
      </div>
    </CSSTransitionGroup>
  );

};

export default routes;