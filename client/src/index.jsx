import React from 'react';
import ReactDOM from 'react-dom';
import styledComponents from 'styled-components';
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
    console.log(this.state.urlEncodedId);
    let context = this;

    $.ajax(`http://localhost:4001/songs/${context.state.urlEncodedId}`, { //make this varaible using URL encoded (window gloval location)
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
    console.log(index);
    let context = this;
    let url = `http://localhost:4001/suggestedTracks/${id}/${category}`;
    $.ajax(url, {
      method: 'PUT',
      error: (error) => {
        console.log('error with incrementing data');
      },
      success: (data) => {
        const updatedTracks = context.state.suggestedTracks.slice();
        window.alert(index);
        updatedTracks.splice(index, 1, data[0]);
        context.setState({ suggestedTracks: updatedTracks });
      },
    });
  }

  displayThreeSuggestions() {
    let arrayOfTracks = this.state.songsOfSameGenre.slice();
    let randomTracks = [];
    let x = 0;
    while (x < 3) {
      let randomIndex = Math.floor(Math.random() * (arrayOfTracks.length - 1) + 1);
      randomTracks.push(arrayOfTracks[randomIndex]);
      arrayOfTracks.splice(randomIndex, 1);
      x += 1;
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
