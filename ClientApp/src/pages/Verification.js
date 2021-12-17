import React, { Component } from 'react'
import '../styles/VerificationStyle.css'

class Verification extends React.Component {
    render() {
        return (
            <>
                <div id='container' class='containerVerify'>
                    <div class='text'>
                        <h1>Verificatie</h1>
                        <div class='inputfields'>
                            <form onSubmit={this.handleSubmit}>
                                <input type="Code" name="Code" placeholder="6-Cijferig Code" required onChange={this.handleChange} />
                                <button onSubmit={this.handleSubmit}>Log in</button>
                            </form>
                        </div>
                        <p>Voer de 6-cijferige code in. Is de code niet verstuurd? klik dan op onderstaande knop.</p>
                        <div class='inputfields'>
                            <button onSubmit={this.handleSubmit}>Resend</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Verification;