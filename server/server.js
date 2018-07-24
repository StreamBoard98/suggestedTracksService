const express = require('express');
const app = express();
const path = require('path');
const mongodatabase = require('../database.js');
app.listen(4001, () => console.log('App connected on port 4001'));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/songs/:id/suggestedTracks', (req, res) => {
  const selectedTrackId = req.params.id;
  mongodatabase.retrieveSuggestedTracks(selectedTrackId, (error, data) => {
    if (error) {
      res.send('error retrieving selected tracks');
    } else {
      res.send(data);
    }
  });
});

app.put('/suggestedTracks/:id/:category', (req, res) => {
  const selectedTrackId = req.params.id;
  const selectedTrackMetric = req.params.category;
  mongodatabase.incrementMetric(selectedTrackId, selectedTrackMetric, (error, result) => {
    if (error) {
      console.log('error fetching');
    } else {
      //pass this data to the component to be displayed on the button
      console.log('the result of incrementation', result);
    }
    res.send(result);
  });
});
