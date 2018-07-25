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
