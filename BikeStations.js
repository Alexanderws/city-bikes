const arrayJoin = require('array-join').join;
const axios = require('axios');
axios.defaults.headers.common['Client-Identifier'] = ''; // TODO: Enter own identifier

module.exports = {
  getStationsFormatted: async () => {
    try {
      const stations = getStations();
      const availability = getAvailability();
      const joinedStations = arrayJoin(await stations, await availability, { key: 'station_id' });
      //console.log("joined: ", joinedStations);
      return {isError: false, data: joinedStations};
    } catch (error) {
      return {
        isError: false,
        description:"BikeStations.getStationsFormatted() - error: ",
        data: error
      }
    }
  }
}

const getStations = async () => {
  try {
    const result = await axios.get('https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json');
    //const result = await axios.get('https://oslobysykkel.no/api/v1/stations');
    //console.log("Stations: ", result.data.data.stations);
    return await result.data.data.stations;
  } catch (error) {
    return {
      isError: false,
      description:"BikeStations.getStations() - error: ",
      data: error
    }
  }
}

const getAvailability = async () => {
  try {
    const result = await axios.get('https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json');
    //const result = await axios.get('https://oslobysykkel.no/api/v1/stations/availability');
    //console.log("Avil: ", result.);
    return await result.data.data.stations;
  } catch (error) {
    return {
      isError: false,
      description:"BikeStations.getAvailability() - error: ",
      data: error
    }
  }
}
