# city-bikes-server
A version of the City Bikes with a backend server for proper API calls outside the browser.


(this guide assumes you already have Node.js installed, otherwise check out: https://nodejs.org/en/download/)

To run:

1. Clone this repository
2. In the root folder -> run "npm install" to install dependencies for the server
3. In the folder client -> run "npm install" to install dependencies for the client
3. In BikeStations.js -> change the empty String on line 3 to match your unique API identifier
4. In the root folder -> run "npm run dev"

This will enable both the server and the client to run concurrently on ports 5000 and 3000, respectively.
Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.
