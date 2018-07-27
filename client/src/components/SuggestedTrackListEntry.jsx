import React from 'react';
import styled from 'styled-components';
import Flexbox from 'flexbox-react';
const SuggestedTrackEntryBox = styled.div`
  border: 3px solid green;
  display: inline-block;
`;

const BottomIcons = styled.button`
  border: 1px solid white;
  background: transparent
`;

const Text = styled.p`
  font-size: 12px;
  font-family: Montserrat
  color: pink;
  display: inline-block;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  background-color: green;
  grid-gap: 5px;
`;

const Image = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  background-color: white
  `;

const Artist = styled.div`
  grid-area: 1 / 2 / 1 / 3;
  background-color: white
`; 

const Title = styled.div`
  grid-area: 2 / 2 / 2 / 3;
  background-color: white
`; 


const Icons = styled.div`
  grid-area: 3 / 2 / 3 / 3;
  background-color: white
`;  

const SuggestedTrackListEntry = (props) => {
  return (
    <div>
      <Grid>
        <Image> <img src="http://www.rw-designer.com/res/vsti.png" display="inline-block" alt="" /> </Image>
        <Artist>Artist</Artist>
        <Title>Title </Title>
        <Icons> 
          <Flexbox element="span" justifyContent="space-between" width="300px">
          <BottomIcons>
            <Text><i className="fas fa-play"></i> &nbsp; Plays</Text>
          </BottomIcons>
          <BottomIcons>
            <Text><i className="far fa-heart"></i> &nbsp; Likes</Text>
          </BottomIcons>
          <BottomIcons>
            <Text><i className="fas fa-retweet"></i> &nbsp; Shares</Text>
          </BottomIcons>
          <BottomIcons>
            <Text><i className="fas fa-comment-alt"></i> &nbsp; Comments</Text>
          </BottomIcons>
        </Flexbox>
        </Icons>
      </Grid>
      <SuggestedTrackEntryBox>
        <img src="http://www.rw-designer.com/res/vsti.png" display="inline-block" alt="" />
        <Text>
          Title
        </Text>
        <Text>
          Artist
        </Text>
        <Flexbox element="span" justifyContent="space-between" width="300px">
          <BottomIcons>
            <Text><i className="fas fa-play"></i> &nbsp; Plays</Text>
          </BottomIcons>
          <BottomIcons>
            <Text><i className="far fa-heart"></i> &nbsp; Likes</Text>
          </BottomIcons>
          <BottomIcons>
            <Text><i className="fas fa-retweet"></i> &nbsp; Shares</Text>
          </BottomIcons>
          <BottomIcons>
            <Text><i className="fas fa-comment-alt"></i> &nbsp; Comments</Text>
          </BottomIcons>
        </Flexbox>
      </SuggestedTrackEntryBox>
    </div>
  );
};

// SuggestedTrackListEntry.propTypes = {
//   suggestedTrack: React.PropTypes.object.isRequired
// };

export default SuggestedTrackListEntry;
