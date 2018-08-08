import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SuggestedTrackList from './components/SuggestedTrackList.jsx';
import SuggestedTrackListEntry from './components/SuggestedTrackListEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestedTracks: [],
      songsOfSameGenre: [],
      urlEncodedId: window.location.pathname.substring(7),
    };
  }

  componentDidMount() {
    let context = this;
    $.ajax(`http://ec2-34-204-67-19.compute-1.amazonaws.com/songs/${context.state.urlEncodedId}`, { //make this varaible using URL encoded (window gloval location)
      method: 'GET',
      error: (error) => {
        console.log('error with getting data', error);
      },
      success: (data) => {
        context.setState({ currentTrack: data[0] });
        context.setState({ songsOfSameGenre: data }, () => {
          this.displayThreeSuggestions();
        });
      },
    });
  }

  incrementLikeOrShare(id, category, index) {
    let context = this;
    let url = `http://ec2-34-204-67-19.compute-1.amazonaws.com/suggestedTracks/${id}/${category}`;
    $.ajax(url, {
      method: 'PUT',
      error: (error) => {
        console.log('error with incrementing data');
      },
      success: (data) => {
        const updatedTracks = context.state.suggestedTracks.slice();
        updatedTracks.splice(index, 1, data[0]);
        context.setState({ suggestedTracks: updatedTracks });
      },
    });
  }

  displayThreeSuggestions() {
    let arrayOfTracks = this.state.songsOfSameGenre.slice();
    let currentSongId = this.state.urlEncodedId.slice(0, this.state.urlEncodedId.length - 1);
    let randomTracks = [];
    while (randomTracks.length !== 3) {
      let randomIndex = Math.floor(Math.random() * (arrayOfTracks.length - 1) + 1);
      if (arrayOfTracks[randomIndex].id !== Number(currentSongId)) {
        randomTracks.push(arrayOfTracks[randomIndex]);
        arrayOfTracks.splice(randomIndex, 1);
      }
    }
    this.setState({ suggestedTracks: randomTracks });
  }

  convertToReadable(value) {
    let result;
    if (value < 10000) {
      result = value;
    } else if (value >= 10000 && value < 100000) {
      let str = String(value);
      result = str[0] + str[1] + '.' + str[2] + 'K';
    } else if (value >= 100000 && value < 1000000) {
      let str = String(value);
      result = Math.floor(value/1000) + 'K';
    } else if (value >= 1000000 && value < 10000000) {
      let str = String(value);
      result = str[0] + '.' + str[1] + str[2] + 'M';
    } else {
      let str = String(value);
      result = str[0] + str[1] + '.' + str[2] + 'M';
    }
    return result;
  }
  
  

  render() {
    return (
      <div>
        <SuggestedTrackList suggestedTracks={ this.state.suggestedTracks } 
        convertToReadable = { this.convertToReadable } incrementLikeOrShare = { this.incrementLikeOrShare = this.incrementLikeOrShare.bind(this) } />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('suggestedTracks'));
