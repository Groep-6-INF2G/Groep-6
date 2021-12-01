import React, { Component } from 'react'
import '../styles/login.css'

export default class Login extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            email: '',
            password: ''
        }

    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]:value});
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("api/login", {
            method: "POST",
            headers: { 'Accept':'apllication/json','Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        })
        if (response.status == 200) {
            localStorage.setItem('loggedIn', 'true')
            window.location.pathname = "/Ingelogd"
        }
    }
    
    render() {
        return (
            <div class="login-container">
                    <div class="title">
                        <h1>Inloggen</h1>
                    </div>
                <div class="input-fields">
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
