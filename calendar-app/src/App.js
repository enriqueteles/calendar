import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import routes from './routes';
import Auth from './auth';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import './App.css';

export const PrivateRoute = ({ indicator, component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const userData = Auth.isAuthenticated();
      if (!userData) {
        return (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }

      const Component = component;
      return <Component {...props} />;
    }}
  />
);


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        
        <Switch>
          <Route path={routes.login} component={Login} exact></Route>
          <PrivateRoute
                path={routes.home}
                component={Home}
                exact
              ></PrivateRoute>
        </Switch>
        

      </div>
    </BrowserRouter>
    
  );
}

export default App;
