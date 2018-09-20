import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import styles from './bottomBarStyle.css';

class BottomBarInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlEncodedId: 1,
      currentTrack: { title: 'test', artist: 'test', albumArt: '' },
    };
  }

  componentDidMount() {
    let urlEncodedId = window.location.pathname.substring(7);
    if (urlEncodedId[urlEncodedId.length - 1] === '/') {
      urlEncodedId = Number(urlEncodedId.slice(0, urlEncodedId.length - 1));
      this.setState({ urlEncodedId }, () => {
      let context = this;
      $.ajax(`http://ec2-18-205-162-203.compute-1.amazonaws.com/songs/${context.state.urlEncodedId}`, { //make this varaible using URL encoded (window gloval location)
        method: 'GET',
        error: (error) => {
          console.log('error with getting data bottom bar', error);
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

  render() {
    let context = this;
    return (
      <div className={styles.suggestedTrackEntryBox}>
        <div className={styles.grid}>
          <div className={styles.image}>
            <img src={context.state.currentTrack.albumArt} display="inline-block" alt="" height="30px" width="30px" />
          </div>
          <div className={styles.artist}>
            <p className={styles.text}>
              { context.state.currentTrack.artist }         
            </p>
          </div>
          <div className={styles.title}>
            <p className={styles.text}>
              { context.state.currentTrack.title }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default BottomBarInfo;

ReactDOM.render(<BottomBarInfo />, document.getElementById('artistFooter'));
