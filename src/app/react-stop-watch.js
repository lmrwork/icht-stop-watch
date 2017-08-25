import React from 'react';
//router
import { HashRouter as Router, Route } from 'react-router-dom';
import { routes } from '../route/react-stop-watch';
//redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reactStopWatch } from '../reducer/react-stop-watch';

//开发模式
const store = createStore(
  reactStopWatch,
  //生成模式注释下行
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route render={routes} />
        </Router>
      </Provider>
    );
  }
}

export default App;
