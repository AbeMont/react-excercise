import React from 'react';
import {
    withGoogleMap,
    GoogleMap,
    InfoWindow,
    Marker
} from 'react-google-maps';
import './Map.css';

export default class Map extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    
    locationHandler(location){
        const googleUrl = location + this.props.name.split(' ').join('+');
        window.open(googleUrl);
    }

    render(){

        const lat = this.props.lat ? this.props.lat: 0;
        const lng = this.props.lng ? this.props.lng: 0;

        const Map = withGoogleMap(props => (

            <GoogleMap defaultCenter = {{lat: lat,lng: lng}} defaultZoom = {13}>
                <Marker 
                    position = {{lat: lat,lng: lng}}
                    onClick = {
                        () => this.locationHandler('https://www.google.com/maps/search/?api=1&query=')
                    }>
                    <InfoWindow>
                        <div onClick = {
                            () => this.locationHandler('https://www.google.com/maps/search/?api=1&query=')
                        }
                        className="Maps__label">
                            <p>Go to {this.props.name}!</p>
                        </div>
                    </InfoWindow>
                </Marker> 
            </GoogleMap>
        ));

        return (
            <div className="Map">
                <Map
                containerElement={ 
                    <div style={{ maxHeight: `300px`, 
                    width: '100%' }} /> 
                }
                mapElement={ <div style={{ height: `180px` }} /> 
                }
                isMarkerShown
            />
            </div>
        )
    }

}