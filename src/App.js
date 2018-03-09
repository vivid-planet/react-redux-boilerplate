import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import RouteHome from './components/routes/RouteHome';
import { component as componentCss } from './App.scss';

class App extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <div className={componentCss}>
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={RouteHome} />
            <Route path="/page2" component={() => <h1>page2</h1>} />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
