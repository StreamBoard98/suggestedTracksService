const data = require('./randomDataValGen.js');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/suggestedTracks');

const db = mongoose.connection;
db.on('error', () => console.log('error connecting to mongo'));
db.once('open', () => console.log('has conected to mongo'));

const trackSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  title: String,
  artist: String,
  genre: String,
  album: String,
  plays: Number,
  likes: Number,
  shares: Number,
  comments: Number,
});

const Track = mongoose.model('Track', trackSchema);
console.log(data.sampleData)

for (let i = 0; i < data.sampleData.length; i += 1) {
  const trackDocument = new Track(data.sampleData[i]);
  console.log(trackDocument);
  trackDocument.save((error, data) => {
    if (error) {
      console.log('error saving document');
    } else {
      console.log('document successfully saved', data);
    }
  });
}

Track.find((error, tracks) => {
  if (error) {
    console.log('couldnt find tracks');
  } else {
    console.log('here are the tracks', tracks);
  }
});
//need to crete a new document for each track
//pass each track object as the the property list to Track constructor