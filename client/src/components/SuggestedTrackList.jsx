import React from 'react';
import styled from 'styled-components';
import SuggestedTrackListEntry from './SuggestedTrackListEntry.jsx';

const SuggestedTrackBox = styled.div`
  margin: 2px;
  display: inline-block;
`;

const TitleText = styled.div`
  font-family: Arial;
  font-weight: normal;
  color: silver;
  border-bottom: 1px solid silver;
`;

const SuggestedTrackList = (props) => {
  return (
    <SuggestedTrackBox>
      <TitleText>
        <i className="fas fa-music">
          &nbsp;&nbsp;
        </i>
        Related Tracks
      </TitleText>
      <div>
        <SuggestedTrackListEntry />
        <SuggestedTrackListEntry />
        <SuggestedTrackListEntry />
      </div>
    </SuggestedTrackBox>
  );
};

// SuggestedTrackList.propTypes = {
//   suggestedTracks: React.PropTypes.array.isRequired
// };

export default SuggestedTrackList;
