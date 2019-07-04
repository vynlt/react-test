import React from 'react';
import './App.css';
import LoginView from './LoginView';
import HomeView from './HomeView';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

class App extends React.Component {
  state = { loginState: false };
  componentDidMount() {
    if (sessionStorage.getItem("user")) {
      this.setState({ loginState: true });
    } else {
      this.setState({ loginState: false });
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" render={() => (
            <div>
              <div className="todo-app">
                <LoginView loginState={this.state.loginState} />
              </div>
            </div>)}
          />
          <PrivateRoute  loginState={this.state.loginState} component={HomeView} path='/'/>

        </Switch>
      </Router>
    );
  }
}

export default App;
