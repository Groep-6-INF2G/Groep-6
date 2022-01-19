import React from 'react'
import { store } from 'react-notifications-component';
import '../styles/verification.css'

export default class Verification extends React.Component {

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
        if (response.status === 200) {
            localStorage.setItem('loggedIn', true)
            window.location.pathname = "/HomeEditor"
        }
        else {
            store.addNotification({
                title: "Failed!",
                message: "Wrong verification code",
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
    }

    async handleSubmit2(e) {
        e.preventDefault();
        const response = await fetch("api/Verification", {
            method: "POST",
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: localStorage.getItem('email'), code: null })
        })
        if (response.status === 200) {
            window.alert("Verstuurd!")
        }
    }

    render() {
        return (
            <div className='verify-container'>
                <h1 id='title'>Verificatie</h1>
                <p className="verification-text">Er is een verificatiecode naar uw emailadres gestuurd.</p>
                <div className='input-fields'>
                    <form onSubmit={this.handleSubmit}>
                        <input type="Code" name="code" placeholder="6-Cijferige Code" required onChange={this.handleChange} />
                        <button className="confirm-button" onSubmit={this.handleSubmit}>Log in</button>
                    </form>
                </div>
                <p class="verification-text">Is de code niet verstuurd?</p>
                <button className="resend-button" onClick={this.handleSubmit2}>Verstuur opnieuw</button>
            </div>
        )
    }
}
