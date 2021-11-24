import React, { Component } from 'react'
import '../styles/login.css'

export default class Login extends Component {
    state={
        email:'',
        password:''
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]:value});
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    
    render() {
        return (
            <div className="login-container">
                    <div className="title">
                        <h1>Inloggen</h1>
                    </div>
                <div className="input-fields">
                    <form onSubmit={this.handleSubmit}>
                        <input type="email" name="email" placeholder="Emailadres" required onChange={this.handleChange} />
                        <input type="password" name="password" placeholder="Wachtwoord" required onChange={this.handleChange}/>
                        <button onSubmit={this.handleSubmit}>Log in</button>
                    </form>
                </div>
            </div>
        )
    }
}
