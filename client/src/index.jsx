import React from 'react';
import ReactDOM from 'react-dom';
import styledComponents from 'styled-components';
import $ from 'jquery';
import SuggestedTrackList from './components/SuggestedTrackList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTrack: '',
      suggestedTracks: [],
      songsOfSameGenre: [],
    };
  }

  componentDidMount() {
    let context = this;
    $.ajax('/songs/1/suggestedTracks', {
      method: 'GET',
      error: (error) => {
        console.log('error with getting data', error);
      },
      success: (data) => {
        console.log('successfully got', data);
        context.setState({ currentTrack: data[0] });
        context.setState({ songsOfSameGenre: data }, () => {
          console.log(context.state.songsOfSameGenre);
          this.displayThreeSuggestions();
        });
      },
    });
  }

  incrementMetric() {
    let context = this;
    $.ajax('/suggestedTracks/:id/:category', {
      method: 'PUT',
      error: (error) => {
        console.log('error with incrementing data', error);
      },
      success: (data) => {
        console.log('successfully got', data);
      },
    });
  }

  displayThreeSuggestions() {
    let arrayOfTracks = this.state.songsOfSameGenre.slice();
    let randomTracks = [];
    let x = 0;
    while (x < 3) {
      let randomIndex = Math.floor(Math.random() * (arrayOfTracks.length - 1) + 1);
      console.log(randomIndex);
      randomTracks.push(arrayOfTracks[randomIndex]);
      arrayOfTracks.splice(randomIndex, 1);
      x += 1;
    }
    this.setState({ suggestedTracks: randomTracks }, () => {
      console.log(this.state.suggestedTracks);
    });
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
        <SuggestedTrackList suggestedTracks={ this.state.suggestedTracks } convertToReadable = { this.convertToReadable } />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
