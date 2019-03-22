const express = require('express');
const bodyParser = require('body-parser');
const BikeStations = require('./BikeStations')

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/stations', async (req, res, next) => {
  try {
    console.log("api/stations");
    const result = await BikeStations.getStationsFormatted();
    if(result.isError) {
        throw Error("api/stations - Error: ", result.data);
    } else {
        res.send(result.data);
    }
  } catch (error) {
    return res.status(500).send(result.data);
  }

});

app.listen(port, () => console.log(`Listening on port ${port}`));
