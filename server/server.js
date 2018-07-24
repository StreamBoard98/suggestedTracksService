const express = require('express');
const app = express();
const path = require('path');
const mongodatabase = require('../database.js');
app.listen(4001, () => console.log('App connected on port 4001'));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/songs/:id/suggestedTracks', (req, res) => {
  let selectedTrackId = req.params.id;
  mongodatabase.retrieveSuggestedTracks(selectedTrackId, (data) => {
    res.send(data);
  });
});

app.put('/suggestedTracks/:id/:category', (req, res) => {
  res.send('put request');
});
