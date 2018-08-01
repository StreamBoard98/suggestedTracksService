import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import SuggestedTrackListEntry from './SuggestedTrackListEntry.jsx';

const SuggestedTrackBox = styled.div`
  margin: 2px;
  display: inline-block;
`;

const TitleText = styled.div`
  font-family: Open Sans;
  font-weight: normal;
  color: rgb(153, 153, 153);
  border-bottom: 1px solid silver;
`;

const SuggestedTrackList = (props) => {
  const {
    suggestedTracks,
    convertToReadable,
    incrementLikeOrShare,
  } = props;

  return (
    <SuggestedTrackBox>
      <TitleText>
        <i className="fas fa-music">
          &nbsp;&nbsp;
        </i>
        Related Tracks
      </TitleText>
      <div>
        {suggestedTracks.map(
          (track, index) => <SuggestedTrackListEntry key={index} index={index} track={track} convertToReadable={convertToReadable} incrementLikeOrShare={incrementLikeOrShare} />,
        )}
      </div>
    </SuggestedTrackBox>
  );
};

// SuggestedTrackList.propTypes = {
//   suggestedTracks: React.PropTypes.array.isRequired
// };

export default SuggestedTrackList;
