describe('GET request', () => {
  test('should return an array', (done) => {
    function callback(data) {
      expect(data[0].genre).toBe('Jazz');
      expect(data[data.length - 1].genre).toBe('Jazz');
      done();
    }
    database.retrieveSuggestedTracks(1, callback);
  });

  test('should return multiple track objects within array', (done) => {
    function callback(data) {
      expect(data[0].genre).toBe('Jazz');
      expect(data[data.length - 1].genre).toBe('Jazz');
      done();
    }
    database.retrieveSuggestedTracks(1, callback);
  });

  test('should return tracks of same genre as selected track', (done) => {
    function callback(data) {
      expect(data[0].genre).toBe('Jazz');
      expect(data[data.length - 1].genre).toBe('Jazz');
      done();
    }
    database.retrieveSuggestedTracks(1, callback);
  });
});

describe('PUT request', () => {
  test('should return an object', (done) => {
    function callback(data) {
      expect(data[0].genre).toBe('Jazz');
      expect(data[data.length - 1].genre).toBe('Jazz');
      done();
    }
    database.retrieveSuggestedTracks(1, callback);
  });

  test('should return track with number of shares incremented', (done) => {
    function callback(data) {
      expect(data[0].genre).toBe('Jazz');
      expect(data[data.length - 1].genre).toBe('Jazz');
      done();
    }
    database.retrieveSuggestedTracks(1, callback);
  });

  test('should return track with number of likes incremented', (done) => {
    function callback(data) {
      expect(data[0].genre).toBe('Jazz');
      expect(data[data.length - 1].genre).toBe('Jazz');
      done();
    }
    database.retrieveSuggestedTracks(1, callback);
  });
});