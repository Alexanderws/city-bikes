import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import bikeStation from './bikeStationIconSmall.png';


const mapStyles = {
  width: '100%',
  height: 'calc(100vh - 64px)'
};

export class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      stations: [],
      stationsLoaded: false,
      isError: false
    };
  }

  fetchStations = async () => {
    const response = await fetch('/api/stations');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  }

  populateStations() {
    this.fetchStations().then(res => {
      this.setState({
        stations: res,
        stationsLoaded: true
      })
    }
    )
    .catch(err => this.setState({
      error: true
    }));
  }

  render() {
    const stationMarkers = this.state.stations
      .map( station =>
        <Marker
          key={station.id}
          doctor={station}
          position={{lat: station.center.latitude, lng: station.center.longitude}}
          icon={bikeStation}
        />
    );


    return (
      <Map className="mt5"
        google={this.props.google}
        zoom={13}
        onReady={this.populateStations.bind(this)}
        style={mapStyles}
        initialCenter={{
          lat: 59.9139,
          lng: 10.7522
        }}
        >
        {stationMarkers}
        </Map>
    );
  }

  fetchStations = async () => {
    const response = await fetch('/api/stations');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  }


}

export default GoogleApiWrapper  ({
  apiKey: '' // TODO: Enter own identifier
})(MapContainer)
