import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import routes from './routes';
import Auth from './auth';

import Login from './Login';
import Header from './Header';
import Sidebar from './Sidebar';
import CalendarSection from './CalendarSection';
import CalendarAside from './CalendarAside';
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
      return <component {...props} />;
    }}
  />
);


function App() {
  const [date, setDate] = useState(null);
  
  return (
    <BrowserRouter>
      <div className="app">
        
        <Switch>
          <Route path={routes.login} component={Login} exact></Route>
          <PrivateRoute
                path={routes.home}
                components={
                  <>
                  <Header />

                  <div className="app__page">
                    <Sidebar />
                    <CalendarSection date={date} setDate={setDate} />
                    <CalendarAside date={date} setDate={setDate} />
                  </div>
                  </>
                }
                exact
              ></PrivateRoute>
        </Switch>
        

      </div>
    </BrowserRouter>
    
  );
}

export default App;
