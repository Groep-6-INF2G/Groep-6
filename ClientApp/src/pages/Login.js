import React, { Component } from 'react'
import '../styles/login.css'
import { store } from 'react-notifications-component';

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
            credentials: 'include',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json',  },
            body: JSON.stringify(this.state)
        }).then(response => {
            response.json().then(res => localStorage.setItem('user', res))
            if (response.status == 200) {
                window.location.pathname = "/HomeEditor"
            }
            else if (response.status == 401) {
                store.addNotification({
                    title: "Failed!",
                    message: "Login Failed",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 2000,
                        onScreen: true
                    }
                });
            }
            else {
                console.log(response)
            }
        })
    }
    
    render() {
        return (
            <div class="login-container">
                <h1 id="title">Inloggen</h1>
                <div class="input-fields">
                    <form onSubmit={this.handleSubmit}>
                        <input type="email" name="email" placeholder="E-mailadres" required onChange={this.handleChange} />
                        <input type="password" name="password" placeholder="Wachtwoord" required onChange={this.handleChange}/>
                        <button onSubmit={this.handleSubmit}>Log in</button>
                    </form>
                </div>
            </div>
        )
    }
}
