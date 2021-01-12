import React from 'react';

import Loadable from 'react-loadable';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Provider from './store/provider'
import rootReducer from './reducer/rootReducer'

import PrivateRoute from './route/privateRoute'

import Home from './pages/home'

const Dashboard = Loadable({
  loader: () => import('./pages/dashboard'),
  loading: () => <h3>Loading...</h3>
});

const ReturnRegister = Loadable({
  loader: () => import('./pages/returnRegister'),
  loading: () => <h3>Loading...</h3>
})

const Reports = Loadable({
  loader: () => import('./pages/reports'),
  loading: () => <h3>Loading...</h3>
})

const Login = Loadable({
  loader: () => import('./pages/login'),
  loading: () => <h3>Loading...</h3>
})

function App() {
  return (
    <Provider rootReducer={rootReducer}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/home" exact component={Home} />
            <PrivateRoute path="/" exact component={Dashboard} />
            <PrivateRoute path="/return-register" exact component={ReturnRegister} />
            <PrivateRoute path="/reports" exact component={Reports} />
            <Route path="/login" exact component={Login} />
            <Route component={() => <h1>Not Found</h1>} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
