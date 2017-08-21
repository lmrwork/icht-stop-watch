import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import { Route, Link } from 'react-router-dom';
import '../static/css/fade.css';

const yes = () => <div style={{background:'#07c'}}> yes </div>;
const no = () => <div style={{background:'#a12'}}> no </div>;
const home = () => <div style={{background:'#935'}}> home </div>;
const error = () => <div style={{background:'#458'}}> error </div>;

const routes = ({location}) => {
  return (
    <div>
      <ul>
        <li><Link to="/" replace> / </Link></li>
        <li><Link to="/yes" replace> /yes </Link></li>
        <li><Link to="/no" replace> /no </Link></li>
        <li><Link to="/xxx" replace> /xxx </Link></li>
      </ul>
      <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        <Route location={location} key={location.pathname} path="/" component={home} exact />
        <Route location={location} key={location.pathname} path="/yes" component={yes} />
        <Route location={location} key={location.pathname} path="/no" component={no} />
        <Route location={location} key={location.pathname} path="/xxx" component={error} />
      </CSSTransitionGroup>
    </div>
  );

};

export default routes;
/*<Route location={location} key={location.pathname} path={location.pathname} component={component}/>*/