const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/streamboard');

const db = mongoose.connection;
db.on('error', () => console.log('error connecting to mongo'));
db.once('open', () => console.log('has conected to mongo'));

var trackSchema = mongoose.Schema({
  SongId: Number,
  SongName: String,
  Artist: String,
  Album: String,
  Genre: String,
  Plays: Number,
  Likes: Number,
  Shares: Number,
  Comments: Number
});

var Track = mongoose.model('Track', trackSchema);

//need to crete a new document for each track
//pass each track object as the the property list to Track constructor