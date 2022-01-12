import React, { Component } from 'react'
import '../styles/VerificationStyle.css'
import GetQR from '../components/fetchImage'


class Verification extends React.Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            QRcode: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    async handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("api/QR", {
            method: "POST",
            headers: { 'Accept': 'apllication/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        })
        if (response.status == 200) {
            localStorage.setItem('loggedIn', 'true')
            window.location.pathname = "/HomeEditor"
        }
        else
            console.log("The state = " + this.state.QRcode)
    }

    render() {
        return (
                <div id='container' class='containerVerify'>
                    <div class='text'>
                        <h1>Verificatie</h1>
                    </div>
                    <p>Scan de QR code met een custom QR app:</p>
                <GetQR />
                <form onSubmit={this.handleSubmit}>
                    <input type="QRcode" name="QRcode" placeholder="QRcode" required onChange={this.handleChange} />
                    <button onSubmit={this.handleSubmit}>Log in</button>
                </form>
                
            </div>


        )
    }
}

export default Verification;