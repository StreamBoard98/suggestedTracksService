// var mongoose = require('mongoose');
// var Mockgoose = require('mockgoose').Mockgoose;
// var mockgoose = new Mockgoose(mongoose);
 
// mockgoose.prepareStorage().then(function() {
//     // mongoose connection    
// });

var Mockgoose = require("mockgoose");
var mongoose = require("mongoose");
var API = require("../client/src/index.jsx");

console.log(API.componentDidMount);
var mockgoose = new Mockgoose(mongoose);

describe("transaction", function() {
  afterEach(function() {
    return mockgoose.helper.reset();
  });

  afterAll(function() {
    const { connections } = mongoose;
    const { childProcess } = mockgoose.mongodHelper.mongoBin;
    // kill mongod
    childProcess.kill();
    // close all connections
    for (const con of connections) {
      return con.close();
    }
    return mongoose.disconnect();
  });

  it("category is required", function() {
    expect.assertions(1);
    return mockgoose.prepareStorage().then(function() {
      mongoose.connect('mongodb://localhost/suggestedTracks');
      return mongoose.connection.on("connected", function() {
        var mockTrack = new Track({
          title: 'Holiday',
          artist: 'Green Day',
          genre: 'Rock',
          album: 'Holiday',
          plays: 1234500,
          likes: 11000,
          shares: 4567,
          comments: 456,
          albumArt: 'aws.com/image/greenday',
        });
        return mockTrack.save(function(err, savedTrack) {
          console.log(err.errors.category.properties.message);
          expect(err.errors.category.properties.message).toBe(
            "Id is required."
          );
        });
      });
    });
  });
});