import React from 'react';
import { BrowserRouter as Route, Redirect} from 'react-router-dom';
import HomeView from './HomeView';

const PrivateRoute = ({ component: Component, loginState, ...rest }) => (
  <Route {...rest} render={(props) => (
    loginState
      ? <HomeView />
      : <Redirect to={{
        pathname: "/login",
        state: { from: props.location }
      }} />
  )} />
)
export default PrivateRoute;