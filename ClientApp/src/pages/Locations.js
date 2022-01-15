import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import '../styles/locations.css';

class Locations extends React.Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
        this.mapCenter = [52.2288689, 5.3214503];
        this.state = {
            postcode: '',
            locations: [],
            userLocation: []
        }
    }

    componentDidMount() {
        fetch("api/Locations")
            .then(response => response.json())
            .then(data => this.setState({ locations: data }))
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    async handleSubmit(e) {
        e.preventDefault();
        console.log(e);
        const response = await fetch(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?Postal=${this.state.postcode}&countrycode=NL&outFields=location&forStorage=false&f=pjson`)
            .then(response => response.json())
            .then(data => this.setState({ userLocation: data.candidates[0].location }))
            .catch(error => console.error(error))
        console.log(this.state.userLocation)
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
                        this.state.locations.map(location => (
                            <Marker
                                key={location.id}
                                position={[
                                    location.lat,
                                    location.lon
                                ]}>
                                <Popup>
                                    ID: {location.id} <br />
                                    Naam: {location.locationname}<br />
                                    Adres: {location.street}, {location.postcode} {location.city}<br />
                                    {location.lat}, {location.lon}
                                </Popup>
                            </Marker>
                        ))}
                </MapContainer>
            </div>
        )
    }
}

export default Locations;