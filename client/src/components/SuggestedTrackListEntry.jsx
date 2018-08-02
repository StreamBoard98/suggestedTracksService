import React from 'react';
import styles from './entryStyle.css';
import Flexbox from 'flexbox-react';

const SuggestedTrackListEntry = (props) => {
  const {
    index,
    convertToReadable,
    incrementLikeOrShare,
    track: {
      id,
      artist,
      title,
      plays,
      likes,
      shares,
      comments,
      albumArt,
    },
  } = props;

  return (
    <div>
      <div className={styles.suggestedTrackEntryBox}>
        <div className={styles.grid}>
          <div className={styles.image}>
            <img src={albumArt} display="inline-block" alt="" height="50px" width="50px" />
            <div className={styles.playButtonOverlay}>
              <i className="fas fa-play-circle fa-2x" />
            </div>
          </div>
          <div className={styles.artist}>
            <p className={styles.text}>
              { artist }
            </p>
          </div>
          <div className={styles.title}>
            <p className={styles.text}>
              { title }
            </p>
          </div>
          <div className={styles.hoverButtonContainer}>
            <button type="button" className={styles.likeButton} onClick={() => { incrementLikeOrShare(id, 'likes', index); }}>
              <i className="far fa-heart" />
            </button>
            <div>
              <button type="button" className={styles.hoverButton}>
                <i className="fas fa-ellipsis-h" />
              </button>
              <button type="button" className={styles.dropDownOptions}>
                <i className="fas fa-retweet" />
                Repost
              </button>
              <button type="button" className={styles.dropDownOptions} onClick={() => { incrementLikeOrShare(id, 'shares', index); }}>
                <i className="fas fa-share-square" />
                Share
              </button>
              <button type="button" className={styles.dropDownOptions}>
                <i className="fas fa-list-ol" />
                Add to next up
              </button>
              <button type="button" className={styles.dropDownOptions}>
                <i className="fas fa-headphones" />
                Add to playlist
              </button>
              <button type="button" className={styles.dropDownOptions}>
                <i className="fas fa-broadcast-tower" />
                Station
              </button>
            </div>
          </div>
          <div className={styles.icons}>
            <Flexbox element="span" justifyContent="space-between" width="240px">
              <button type="button" className= {styles.bottomIcons}>
                <i className="fas fa-play" />
                &nbsp;
                { convertToReadable(plays) }
              </button>
              <button type="button" className= {styles.bottomIcons}>
                <i className="far fa-heart" />
                &nbsp;
                { convertToReadable(likes) }
              </button>
              <button type="button" className= {styles.bottomIcons}>
                <i className="fas fa-retweet" />
                &nbsp;
                { convertToReadable(shares) }
              </button>
              <button type="button" className= {styles.bottomIcons}>
                <i className="fas fa-comment-alt" />
                &nbsp;
                { convertToReadable(comments) }
              </button>
            </Flexbox>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SuggestedTrackListEntry;
