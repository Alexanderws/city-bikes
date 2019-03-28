import React, {Component} from 'react';
//import { HalfCircleSpinner } from 'react-epic-spinners';
import { StationCard } from './';
var Spinner = require('react-spinkit');

class StationList extends Component {
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

  componentDidMount() {
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
          <Spinner name='rotating-plane' color="black"/>
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
