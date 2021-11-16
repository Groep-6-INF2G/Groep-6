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
            <div class="login-container">
                    <div class="title">
                        <h1>Inloggen</h1>
                    </div>
                <div class="input-fields">
                    <form onSubmit={this.handleSubmit}>
                        <p>E-mailadres:</p>
                        <input type="email" name="email" required onChange={this.handleChange}/>
                        <p>Wachtwoord:</p>
                        <input type="password" name="password" required onChange={this.handleChange}/>
                        <button onSubmit={this.handleSubmit}>Inloggen</button>
                    </form>
                </div>
            </div>
        )
    }
}
