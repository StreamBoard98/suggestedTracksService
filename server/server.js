const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const mongodatabase = require('../database/database.js');

app.listen(4001, () => console.log('App connected on port 4001'));

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.static(path.join(__dirname, '../client/src')));
app.use(cors());
console.log(path.join(__dirname, '../client/dist'));

app.get('/songs/:id', (req, res) => { 
  let selectedTrackId = req.params.id;
  mongodatabase.retrieveSuggestedTracks(selectedTrackId, (error, dataRows) => {
    if (error) {
      res.send('error retrieving selected tracks');
    } else {
      console.log('received suggested tracks');
      res.send(dataRows);
    }
  });
});

app.put('/suggestedTracks/:id/:category', (req, res) => { 
  const selectedTrackId = req.params.id;
  const selectedTrackMetric = req.params.category;
  mongodatabase.incrementMetric(selectedTrackId, selectedTrackMetric, (error, result) => {
    if (error) {
      console.log('error fetching');
      res.send('error incrementing');
    } else {
      // pass this data to the component to be displayed on the button
      console.log('the result of incrementation', result);
      res.send(result);
    }
  });
});
