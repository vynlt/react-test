import React from 'react';

import { Redirect } from 'react-router-dom';
import { userService } from './login'

import './App.css'

class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginState: this.props.loginState,
            loginEmail: null,
            username: '',
            password: '',
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (values) => {
        const { username, password } = this.state;
         userService.login(username, password).then(user => {
            sessionStorage.setItem('user', user);
            this.setState({loginState: true});
        })
        sessionStorage.setItem('user', 'user');
        this.setState({loginState: true});
        
    }

    render() {
        const { from } = { from: { pathname: "/" } };
        if (this.state.loginState === true) return <Redirect to={from} />;
        const { username, password } = this.state;
        return (
            // eslint-disable-next-line
            <div className="login-page">
                <div className="form" >
                    <form className="register-form">
                        <input type="text" placeholder="name" />
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="email address" />
                        <button>create</button>
                        <p className="message">Already registered? <a href="/">Sign In</a></p>
                    </form>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        <button>login</button>
                        <p className="message">Not registered? <a href="/">Create an account</a></p>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginView;