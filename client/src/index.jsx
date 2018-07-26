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
      <SuggestedTrackBox>
        <div>
          <h3>
            <i className="fas fa-music" />
            Related Tracks
          </h3>
          <hr/>
        </div>
      <div> 
        Mydiv will now render this
      </div>
      <SuggestedTrackList />
      </SuggestedTrackBox>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));