import React from 'react';
import ReactDOM from 'react-dom';
import SuggestedTrackList from './components/SuggestedTrackList.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
      <div> Mydiv will now render this</div>
      <SuggestedTrackList />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));