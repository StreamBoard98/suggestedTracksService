import React from 'react';
import styled from 'styled-components';
const SuggestedTrackEntryBox = styled.div`
  border: 3px solid green;
`;

const BottomIcons = styled.button`
  border: 1px solid pink;
  background: transparent
`;

const Text = styled.p`
  font-size: 8px;
  font-family: Montserrat
  color: pink;
`;

const SuggestedTrackListEntry = (props) => {
  return (
  <div>
   <SuggestedTrackEntryBox> 
     <img src ="http://www.rw-designer.com/res/vsti.png"/>
     <Text>
       Title
     </Text>
     <Text>
       Artist
     </Text>
     <BottomIcons>
       <Text><i class="fas fa-play"></i> &nbsp; Plays</Text>
     </BottomIcons>
     <BottomIcons>
       <Text><i class="far fa-heart"></i> &nbsp; Likes</Text>
     </BottomIcons>
     <BottomIcons>
       <Text><i class="fas fa-retweet"></i> &nbsp; Shares</Text>
     </BottomIcons>
     <BottomIcons>
       <Text><i class="fas fa-comment-alt"></i> &nbsp; Comments</Text>
     </BottomIcons>
    </SuggestedTrackEntryBox>
   </div>
  );
};

// SuggestedTrackListEntry.propTypes = {
//   suggestedTrack: React.PropTypes.object.isRequired
// };

export default SuggestedTrackListEntry;