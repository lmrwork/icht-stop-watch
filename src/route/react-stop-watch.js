import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import { Route, Link } from 'react-router-dom';
import '../static/css/fade.css';

const yes = () => <div style={{color:'#07c'}}> yes </div>;
const no = () => <div style={{color:'#a12'}}> no </div>;
const home = () => <div style={{color:'#935'}}> home </div>;
const error = () => <div style={{color:'#458'}}> error </div>;

const routes = ({location}) => {

  let component;

  switch (location.pathname) {
    case '/':
      component = home;
      break;
    case '/yes':
      component = yes;
      break;
    case '/no':
      component = no;
      break;
    default:
      component = error;
  }

  return (
    <div>
      <ul>
        <li><Link to="/" replace> / </Link></li>
        <li><Link to="/yes" replace> /yes </Link></li>
        <li><Link to="/no" replace> /no </Link></li>
        <li><Link to="/xxx" replace> /xxx </Link></li>
      </ul>
      <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={300} className="relative">
        <Route location={location} key={location.pathname} path="/" component={component} />
      </CSSTransitionGroup>
    </div>
  );

};

export default routes;