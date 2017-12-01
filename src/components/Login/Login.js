import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return(
            <section id="login-form">
                <span>Username</span>
                <input type="text" name="username" value="required"/>
                <span>Password</span>
                <input type="text" name="psw" value="required"/>
                <button type="submit">Register</button>
                <Link to="/browse"><button type="submit">Login</button></Link>
            </section>
        )
    }
}