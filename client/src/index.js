import React from 'react';
import ReactDOM from 'react-dom';
import styledComponents from 'styled-components';
// import $ from 'jquery';
import App from './index.jsx';
import SuggestedTrackList from './components/SuggestedTrackList.jsx';
import SuggestedTrackListEntry from './components/SuggestedTrackListEntry.jsx';

ReactDOM.render(<App />, document.getElementById('suggestedTracks'));
