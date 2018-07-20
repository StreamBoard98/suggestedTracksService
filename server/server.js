const express = require('express');
const app = express();
const path = require('path');

app.listen(4001, () => console.log('App connected on port 4001'));

// app.get('/', (req, res) => res.send('WTF'));
app.use(express.static(path.join(__dirname, '../client/dist')));
console.log(path.join(__dirname, '../client/dist'));

