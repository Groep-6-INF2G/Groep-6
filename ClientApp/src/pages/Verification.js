import React, { Component } from 'react'
import '../styles/VerificationStyle.css'


class Verification extends React.Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            code: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    async handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("api/Verification", {
            method: "POST",
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: localStorage.getItem('email'), code: this.state.code })
        })
        if (response.status == 200) {
            localStorage.setItem('loggedIn', true)
            window.location.pathname = "/HomeEditor"
        }
    }

    async handleSubmit2(e) {
        e.preventDefault();
        const response = await fetch("api/Verification", {
            method: "POST",
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: localStorage.getItem('email'), code: null })
        })
        if (response.status == 200) {
            window.alert("Verstuurd!")
        }
    }

    render() {
        return (
            <div class='verify-container'>
                <h1 id='title'>Verificatie</h1>
                <div class='input-fields'>
                    <form onSubmit={this.handleSubmit}>
                        <input type="Code" name="code" placeholder="6-Cijferige Code" required onChange={this.handleChange} />
                        <button onSubmit={this.handleSubmit}>Log in</button>
                    </form>
                </div>
                <br />
                <p>Voer de 6-cijferige code in. Is de code niet verstuurd? klik dan op onderstaande knop.</p>
                <button onClick={this.handleSubmit2}>Resend</button>
            </div>
        )
    }
}

export default Verification;