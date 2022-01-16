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
            userLocation: [],
            closestLocations: []
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
        //console.log(e);

        //fetch lat and lon coords of postcode from api
        await fetch(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?Postal=${this.state.postcode}&countrycode=NL&outFields=location&forStorage=false&f=pjson`)
            .then(response => response.json())
            .then(data => this.setState({ userLocation: [data.candidates[0].location.y, data.candidates[0].location.x] }))
        console.log(this.state.userLocation)

        //fetch 3 closest locations to coords from backend
        await fetch(`api/Locations/[${this.state.userLocation}]`)
            .then(response => response.json())
            .then(data => this.setState({ closestLocations: data }))
        console.log(this.state.closestLocations)
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
                <div class="list-box">
                    {
                        this.state.closestLocations.map(location => (
                            <div class="item">
                                <p class="item-header">
                                    {location.locationname}
                                </p>
                                <p class="item-body">
                                    Adres: {location.street}, {location.postcode}<br />{location.city}<br />
                                </p>
                            </div>
                        ))
                    }
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