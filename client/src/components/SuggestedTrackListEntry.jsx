import React from 'react';
import styled from 'styled-components';
const SuggestedTrackEntryBox = styled.div`
  border: 3px solid green;
`;

const BottomIcons = styled.div`
  border: 1px solid pink;
`;

const SuggestedTrackListEntry = (props) => {
  return (
  <div>
   <SuggestedTrackEntryBox> 
     <img src ="http://www.rw-designer.com/res/vsti.png"/>
     <h6>
       Title
     </h6>
     <h6>
       Artist
     </h6>
     <BottomIcons>
       <p><i class="fas fa-play"></i> &nbsp; Plays</p>
     </BottomIcons>
     <BottomIcons>
       <p><i class="far fa-heart"></i> &nbsp; Likes</p>
     </BottomIcons>
     <BottomIcons>
       <p><i class="fas fa-retweet"></i> &nbsp; Shares</p>
     </BottomIcons>
     <BottomIcons>
       <p><i class="fas fa-comment-alt"></i> &nbsp; Comments</p>
     </BottomIcons>
    </SuggestedTrackEntryBox>
   </div>
  );
};

// SuggestedTrackListEntry.propTypes = {
//   suggestedTrack: React.PropTypes.object.isRequired
// };

export default SuggestedTrackListEntry;