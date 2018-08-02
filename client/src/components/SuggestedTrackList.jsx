import React from 'react';
import styles from './listStyle.css';
import SuggestedTrackListEntry from './SuggestedTrackListEntry.jsx';

const SuggestedTrackList = (props) => {
  const {
    suggestedTracks,
    convertToReadable,
    incrementLikeOrShare,
  } = props;

  return (
    <div className={styles.suggestedTrackBox}>
      <div className={styles.titleText}>
        <i className="fas fa-music">
          &nbsp;&nbsp;
        </i>
        Related Tracks
      </div>
      <div>
        {suggestedTracks.map(
          (track, index) => <SuggestedTrackListEntry key={index} index={index} track={track} convertToReadable={convertToReadable} incrementLikeOrShare={incrementLikeOrShare} />,
        )}
      </div>
    </div>
  );
};

export default SuggestedTrackList;
