import React from 'react';
import styledComponents from 'styled-components';
const SuggestedTrackBox = styledComponents.div`
  margin: 2px;
  border: 1px solid lightgray;
`;

const SuggestedTrackList = (props) => {
  return (
    <SuggestedTrackBox>
    <div className = 'suggested-track-list'>
      <h3>
            <i className="fas fa-music" />
            Related Tracks
          </h3>
          <hr/>
      <div>
        <h2> 
        suggestedtrack entry goes here 
        </h2>
      </div>
       <div>
        <h2> 
        suggestedtrack entry goes here 
        </h2>
      </div>
       <div>
        <h2> 
        suggestedtrack entry goes here 
        </h2>
      </div>
  </div>
  </SuggestedTrackBox>
  )
};

// SuggestedTrackList.propTypes = {
//   suggestedTracks: React.PropTypes.array.isRequired
// };

export default SuggestedTrackList;