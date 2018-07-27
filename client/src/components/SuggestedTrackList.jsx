import React from 'react';
import styled from 'styled-components';
import SuggestedTrackListEntry from './SuggestedTrackListEntry.jsx';
const SuggestedTrackBox = styled.div`
  margin: 2px;
  border: 1px solid lightgray;
  display: inline-block;
`;

const HorizontalLine = styled.hr`
  width: 300px;
  color: lightgray;
`;

const SuggestedTrackList = (props) => {
  return (
    <SuggestedTrackBox>
      <div className="suggested-track-list">
        <h3>
              <i className="fas fa-music">&nbsp;&nbsp;</i>
              Related Tracks
            </h3>
            <HorizontalLine/>
        <div>
          <h2> 
          <SuggestedTrackListEntry />
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