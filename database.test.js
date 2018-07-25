const database = require('./database.js');

describe('retrieveSuggestedTracks', () => {
  test('should return songs in the same genre as the selected song', (done) => {
    function callback(data) {
      expect(data[0].genre).toBe('Jazz');
      expect(data[data.length - 1].genre).toBe('Jazz');
      done();
    }
    database.retrieveSuggestedTracks(1, callback);
  });
});

// want to add a fake data object to the database
// increment it
/* let fakeData = {id: 500,
  title: 'Holiday',
  artist: 'Green Day',
  genre: 'Rock',
  album: 'American Idiot',
  plays: 0,
  likes: 0,
  shares: 0,
  comments: 0,} */
  const trackDocument = new Track(fakeData);
  trackDocument.save((error, data) => {
    if (error) {
      console.log('error saving document');
    } else {
      console.log('document successfully saved', data);
    }
  });
//increment likes and shares
Track.find( {id: 500}, (error, result) => {
  if (error) {
    console.log('couldnt find sample track');
  } else {
    //check that likes and shares are equal to one 
  }
} )
describe('incrementMetrics', () => {
  test('should increment likes and shares of selected song', (done) => {
    function callback(data) {
      expect();
      expect();
      done();
    }
    database.incrementMetrics();
  })
})