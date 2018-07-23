const express = require('express');
const app = express();
const path = require('path');

app.listen(4001, () => console.log('App connected on port 4001'));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/songs/:id/suggestedTracks', (req, res) => {
  res.send('get request');
});

app.put('/suggestedTracks/:id/:category', (req, res) => {
  res.send('put request');
});
