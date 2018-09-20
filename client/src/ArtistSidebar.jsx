import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import styles from './artistSidebarStyle.css';

class ArtistSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlEncodedId: 1,
      currentTrack: { title: 'test', artist: 'Panic At the Disco', albumArt: '' },
      numFollowers: 0,
      numSongs: 0,
    };
  }

  componentDidMount() {
    this.generateRandomNums();
    let urlEncodedId = window.location.pathname.substring(7);
    if (urlEncodedId[urlEncodedId.length - 1] === '/') {
      urlEncodedId = Number(urlEncodedId.slice(0, urlEncodedId.length - 1));
      this.setState({ urlEncodedId }, () => {
        let context = this;
        $.ajax(`http://ec2-18-205-162-203.compute-1.amazonaws.com/songs/${context.state.urlEncodedId}`, { //make this varaible using URL encoded (window gloval location)
          method: 'GET',
          error: (error) => {
            console.log('error with getting data artist sidebar', error);
          },
          success: (data) => {
            for (let i = 0; i < data.length; i += 1) {
              let song = data[i];
              if (song.id === context.state.urlEncodedId) {
                context.setState({ currentTrack: song });
              }
            }
          },
        });
      });
    }
  }

  generateRandomNums() {
    const numSongs = Math.floor(Math.random() * (200 - 1)) + 1;
    const numFollowers = Math.floor(Math.random() * (900 - 1)) + 1;
    this.setState( {numSongs, numFollowers });
  }

  render() {
    let context = this;
    return (
      <div className={styles.artistSidebarBox}>
        <div className={styles.grid}>
          <div>
            <img id={styles.image} src={context.state.currentTrack.albumArt} display="inline-block" alt="" height="120px" width="120px" />
          </div>
          <span className={styles.artist}>
            <p className={styles.text}>
              { context.state.currentTrack.artist }     
            </p>
          </span>
          <span className={styles.followers}>
            <p className={styles.text}>
              <i className="fas fa-users">
                &nbsp;
              </i>
              {`${context.state.numFollowers}K`}
            </p>
          </span>
          <span className={styles.songs}>
            <p className={styles.text}>
              <i className="fas fa-music">
                &nbsp;
              </i>
              { context.state.numSongs }
            </p>
          </span>
          <span className={styles.buttonContainer}>
            <button type="button" className={styles.followButton}>
              Follow
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default ArtistSidebar;

ReactDOM.render(<ArtistSidebar />, document.getElementById('artistInfo'));
