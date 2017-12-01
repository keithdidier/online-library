import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Login.css';


export default class Login extends Component {
    render() {
        return(
            <section id="login-form">
                <div className="form">
                <span className="form-words">Username</span>
                <input type="text" name="username" value="required"/>
                <span className="form-words">Password</span>
                <input type="text" name="psw" value="required"/>
                <button type="submit">Register</button>
                <Link to="/browse"><button type="submit" className="login-btn">Login</button></Link>
                </div>
            </section>
        )
    }
}