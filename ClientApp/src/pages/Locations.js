import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '../styles/locations.css';

class Locations extends React.Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);

        this.locationsJSON = [];
        this.mapCenter = [52.2288689, 5.3214503];

        this.state = {
            postcode: ''
        }
    }

    async GetLocations() {
        const response = await fetch("api/Locations")
            .then(response => response.json())
            .then(data => this.locationsJSON = data);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    async handleSubmit(e) {
        console.log("test js");
        e.preventDefault();
        console.log(e);
        //const response = await fetch("api/Locations")
        //    .then(response => response.json())
        //    .then(data => this.locationsJSON = data);
        //this.locationsJSON.map(x => console.log(x.id));
    }
    render() {
        return (
            <div class="location-container">
                <div class="search-box">
                    <p class="title">Zoek dichtsbijzijnde locatie</p>
                    <div class="search-field">
                        <form onSubmit={this.handleSubmit}>
                            <input type="postcode" name="postcode" placeholder="Postcode" required onChange={this.handleChange} />
                            <button onSubmit={this.handleSubmit}>Zoek</button>
                        </form>
                    </div>
                </div>
                <MapContainer center={this.mapCenter} zoom={7} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        this.GetLocations(),
                        //this.locationsJSON.map(x => console.log(x.id))
                        this.locationsJSON.map(location => (
                            <Marker
                                position={[
                                    location.lat,
                                    location.lon
                                ]}
                            />
                        ))
                    }
                    <Marker position={[52.2288689, 5.3214503]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        )
    }
}

export default Locations;