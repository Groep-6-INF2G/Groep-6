import React, { Component } from 'react'
import '../styles/VerificationStyle.css'
import GetQR from '../components/fetchImage'


class Verification extends React.Component {
    render() {
        return (
                <div id='container' class='containerVerify'>
                    <div class='text'>
                        <h1>Verificatie</h1>
                    </div>
                    <p>Scan de QR code met een custom QR app:</p>
                <GetQR />

                </div>
        )
    }
}

export default Verification;