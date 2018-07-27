import React from 'react';
import ReactDOM from 'react-dom';
import styledComponents from 'styled-components';
import $ from 'jquery';
import SuggestedTrackList from './components/SuggestedTrackList.jsx';

const SuggestedTrackBox = styledComponents.div`
  margin: 2px;
  border: 1px solid lightgray;
`;

class App extends React.Component {

  loadInitialData() {
    let context = this;
    $.ajax('/songs/:id/suggestedTracks', {
      method: 'GET',
      error: (error) => {
        console.log('error with getting data', error);
      },
      success: (data) => {
        console.log('successfully got', data);
        context.setState({ suggestedTracks: data });
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

  render() {
    return (
      <div>
        <SuggestedTrackList />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
