const mongoose = require('mongoose');
const data = require('./randomDataValGen.js');

mongoose.connect('mongodb://localhost/suggestedTracks');

const db = mongoose.connection;
db.on('error', () => console.log('error connecting to mongo'));
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
});

const Track = mongoose.model('Track', trackSchema);

// for (let i = 0; i < data.sampleData.length; i += 1) {
//   const trackDocument = new Track(data.sampleData[i]);
//   trackDocument.save((error, data) => {
//     if (error) {
//       console.log('error saving document');
//     } else {
//       console.log('document successfully saved', data);
//     }
//   });
// }

// Track.find((error, tracks) => {
//   if (error) {
//     console.log('couldnt find tracks');
//   } else {
//     console.log('here are the tracks', tracks);
//   }
// });

const retrieveSuggestedTracks = (songId, afterRetrieve) => {
  Track.find({ id: songId }, (error, result) => {
    if (!error) {
      Track.find({ genre: result[0].genre }, (error, result) => {
        if (error) {
          afterRetrieve(error);
        } else {
          afterRetrieve(result);
        }
      });
    }
  });
};


//note: this works when key 'metric' is replaced with 'likes'.
//need to somehow make it recognize metric as a variable
const incrementMetric = (songId, metric, afterIncrementation) => {
  let fieldToIncrement = {};
  fieldToIncrement[metric] = 1;
  Track.update({ id: songId }, { $inc: fieldToIncrement }, () => {
    Track.find({ id: songId }, (error, result) => {
      console.log(result);
      afterIncrementation(result);
    });
  });
};

exports.retrieveSuggestedTracks = retrieveSuggestedTracks;
exports.incrementMetric = incrementMetric;
