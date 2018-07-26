import React from 'react';
import ReactDOM from 'react-dom';
import styledComponents from 'styled-components';
import SuggestedTrackList from './components/SuggestedTrackList.jsx';

const SuggestedTrackBox = styledComponents.div`
  margin: 2px;
  border: 1px solid lightgray;
`;

class App extends React.Component {
  render() {
    return (
      <div>
    <SuggestedTrackList />
    </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));