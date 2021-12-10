import React from "react";
import '../styles/locations.css';

class Locations extends React.Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            postcode: ''
        }

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    async handleSubmit(e) {
        e.preventDefault();
        console.log(e);
    }
    render() {
        return (
            <div class="location-container">
                <div class ="search-box">
                    <p class="title">Zoek dichtsbijzijnde locatie</p>
                    <div class="search-field">
                        <form onSubmit={this.handleSubmit}>
                            <input type="postcode" name="postcode" placeholder="Postcode" required onChange={this.handleChange} />
                            <button onSubmit={this.handleSubmit}>Zoek</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Locations;