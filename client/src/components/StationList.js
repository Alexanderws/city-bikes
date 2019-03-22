import React, {Component} from 'react';
import { StationCard } from './';
import { HalfCircleSpinner } from 'react-epic-spinners';

class StationList extends Component {
  constructor() {
    super();
    this.state = {
      stations: [],
      stationsLoaded: false,
      isError: false
    };
  }

  populateAvailability = (url, identifier) => {
    fetch(url, {
      headers: {
        'Client-Identifier': identifier
      }
    }).then(res => res.json()).then((result) => {
      this.setState({availabilityLoaded: true, availability: result.stations})
    }, (error) => {
      this.setState({isError: true});
      console.log('StationList.populateAvailability - Error: ', error);
    })
  }

  fetchStations = async () => {
    const response = await fetch('/api/stations');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  }

  componentDidMount() {
    /*const corsProxy = "https://cors-anywhere.herokuapp.com/";
    const stationListAPI = "https://oslobysykkel.no/api/v1/stations";
    const stationAvailabilityAPI = "https://oslobysykkel.no/api/v1/stations/availability";
    const clientIdentifier = this.props.identifier;

    this.populateBikeStations(corsProxy + stationListAPI, clientIdentifier);
    this.populateAvailability(corsProxy + stationAvailabilityAPI, clientIdentifier);*/

    this.fetchStations()
    .then(res => {
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
    const {stations, stationsLoaded, isError} = this.state;
    if (isError || (stationsLoaded && stations.length < 1)) {
      console.log("StationList.render() - Error");
      return(
        <div className="flex items-center justify-center vh-100 w-100">Error loading data.</div>
      )
    } else if(!stationsLoaded) {
      return(
        <div className="flex items-center justify-center vh-100 w-100">
          <HalfCircleSpinner color="black"/>
        </div>
      )
    } else {
      return (
          <div className='pa3 mt5'>
          {stations.map(station => (
            <StationCard key={station.id} station={station} />
          ))}
          </div>
      );
    }
  };

}

export {
  StationList
};
