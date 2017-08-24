import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import routes from '../route/react-stop-watch';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Route render={routes} />
      </Router>
    );
  }
}

export default App;
