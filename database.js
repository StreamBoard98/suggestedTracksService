const mongoose = require('mongoose');
const data = require('./randomDataValGen.js');
const albumArt = require('./albumArt.js');

mongoose.connect('mongodb://database/suggestedTracks'); //potentially remove portnum

const db = mongoose.connection;
db.on('error', (err) => console.log('error connecting to mongo', err));
db.once('open', () => console.log('has connected to mongo'));

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
  albumArt: String,
});

const Track = mongoose.model('Track', trackSchema);

for (let i = 0; i < data.sampleData.length; i += 1) {
  const trackDocument = new Track(data.sampleData[i]);
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

// for (let artist in albumArt.albumArtList) {
//   //console.log(albumArt.albumArtList[artist]);
//   let getter = {};
//   let setter = {};
//   getter.artist = artist;
//   setter.albumArt = albumArt.albumArtList[artist];
//   Track.updateMany(getter, { $set: setter.albumArt });
//   Track.updateMany({ artist: 'The Beatles' }, { $set: { albumArt: 'https://s3-us-west-1.amazonaws.com/streamboardimages/Beatles_AbbeyRoad.jpg' } });
// }

const retrieveSuggestedTracks = (songId, afterRetrieve) => {
  Track.find({ id: songId }, (error, result) => {
    if (!error) {
      Track.find({ genre: result[0].genre }, (error, result) => {
        if (error) {
          afterRetrieve(error, null);
        } else {
          afterRetrieve(null, result);
        }
      });
    }
  });
};

const incrementMetric = (songId, metric, afterIncrementation) => {
  let fieldToIncrement = {};
  fieldToIncrement[metric] = 1;
  Track.update({ id: songId }, { $inc: fieldToIncrement }, () => {
    Track.find({ id: songId }, (error, result) => {
      afterIncrementation(error, result);
    });
  });
};

module.exports = {
  retrieveSuggestedTracks,
  incrementMetric,
};
