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

  render() {
    return (
      <div>
        <SuggestedTrackList suggestedTracks={ this.state.suggestedTracks } />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
