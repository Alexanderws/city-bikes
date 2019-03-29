# city-bikes
A version of the City Bikes with a backend server for proper API calls outside the browser.
</br>
## NOTE:
The CityBikes API is undergoing maintenance intermittently. In these periods the app is unable to load the station data.
</br></br></br>
### To run:
(this guide assumes you already have Node.js installed, otherwise check out: https://nodejs.org/en/download/)</br>
This app requires an API key from Oslo Bysykkel: https://developer.oslobysykkel.no/api</br>
This app requires an API key from Google Maps: https://cloud.google.com/maps-platform/</br>

**Steps**
1. Clone this repository
2. In the root folder -> run "npm install" to install dependencies for the server
3. In the folder client -> run "npm install" to install dependencies for the client
3. In BikeStations.js -> change the empty String on line 3 to match your unique API identifier
4. In client/src/components/StationMap.js -> change the empty String on line 84 to match your unique API identifier
4. In the root folder -> run "npm run dev"

This will enable both the server and the client to run concurrently on ports 5000 and 3000, respectively.
Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.
To view the stations in a map view, hit the button named "MAP" in the upper right corner.
</br></br></br>
### To run tests:
1. In the folder client -> run "npm test" to open test console (this will run tests on files changed since last commit)
2. To run all tests, enter 'a' in the active environment
