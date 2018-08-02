import React from 'react';
import styled from 'styled-components';
import Flexbox from 'flexbox-react';

const SuggestedTrackEntryBox = styled.div`
  display: inline-block;
  margin-bottom: 20px;
`;

const BottomIcons = styled.button`
  border: 1px solid white;
  color: rgb(153, 153, 153);
  font-family: Open Sans;
  background: transparent
`;

const Text = styled.p`
  font-size: 14px;
  font-family: Open Sans;
  font-weight: normal;
  margin: -1px;
  color: rgb(153, 153, 153);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 60px 240px 500px;
  grid-template-rows: 20px 20px 25px;
`;

const PlayButtonOverlay = styled.div`
  position: absolute;
  color: rgb(255, 85, 0);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  padding-top: 10px;
  padding-left: 10px;
   ${SuggestedTrackEntryBox}:hover & {
    display: inline-block;
  }
`;

const Image = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  margin-top: auto;
  margin-bottom: auto;
  position: relative;
  width: 100%;
`;

const Artist = styled.div`
  grid-area: 1 / 2 / 1 / 3;
`;

const Title = styled.div`
  grid-area: 2 / 2 / 2 / 3;
`;

const Icons = styled.div`
  grid-area: 3 / 2 / 3 / 3;
  background-color: white
`;

const HoverButtonContainer = styled.div`
  grid-area: 2 / 3 / 3 / 3;
  display: flex;
  flex-direction: row;
  margin-left: -70px;
  z-index: 2;
  align-items: right;
`;

const HoverButton = styled.button`
  border: 1px solid lightgray;
  font-size: 16px;
  color: black;
  background: white;
  display: none;


  ${SuggestedTrackEntryBox}:hover & {
    display: inline-block;
  }
`;

const LikeButton = HoverButton.extend`
  margin-left: 0px;
  margin-top:0px;
  display: none;
`;


const Menu = styled.div`
 
`;

const DropDownOptions = styled.button`
  border: 1px solid lightgray;
  font-family: Open Sans;
  font-size: 16px;
  text-align: left;
  width: 150px;
  background: white;
  display: none;
  ${SuggestedTrackEntryBox}:hover & {
    display: block;
  }
  &:hover {
    background-color: rgb(242, 242, 242);
  }
`;


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
      <SuggestedTrackEntryBox>
        <Grid>
          <Image>
            <img src={albumArt} display="inline-block" alt="" height="50px" width="50px" />
            <PlayButtonOverlay>
              <i className="fas fa-play-circle fa-2x" />
            </PlayButtonOverlay>
          </Image>
          <Artist>
            <Text>
              { artist }
            </Text>
          </Artist>
          <Title>
            <Text>
              { title }
            </Text>
          </Title>
          <HoverButtonContainer>
            <LikeButton onClick={() => { incrementLikeOrShare(id, 'likes', index); }}>
              <i className="far fa-heart" />
            </LikeButton>
            <Menu>
              <HoverButton>
                <i className="fas fa-ellipsis-h" />
              </HoverButton>
              <DropDownOptions>
                <i className="fas fa-retweet" />
                Repost
              </DropDownOptions>
              <DropDownOptions onClick={() => { incrementLikeOrShare(id, 'shares') }}>
                <i className="fas fa-share-square" />
                Share
              </DropDownOptions>
              <DropDownOptions>
                <i className="fas fa-list-ol" />
                Add to next up
              </DropDownOptions>
              <DropDownOptions>
                <i className="fas fa-headphones" />
                Add to playlist
              </DropDownOptions>
              <DropDownOptions>
                <i className="fas fa-broadcast-tower" />
                Station
              </DropDownOptions>
            </Menu>
          </HoverButtonContainer>
          <Icons>
            <Flexbox element="span" justifyContent="space-between" width="240px">
              <BottomIcons>
                <i className="fas fa-play" />
                &nbsp;
                { convertToReadable(plays) }
              </BottomIcons>
              <BottomIcons>
                <i className="far fa-heart" />
                &nbsp;
                { convertToReadable(likes) }
              </BottomIcons>
              <BottomIcons>
                <i className="fas fa-retweet" />
                &nbsp;
                { convertToReadable(shares) }
              </BottomIcons>
              <BottomIcons>
                <i className="fas fa-comment-alt" />
                &nbsp;
                { convertToReadable(comments) }
              </BottomIcons>
            </Flexbox>
          </Icons>
        </Grid>
      </SuggestedTrackEntryBox>
    </div>
  );
};


export default SuggestedTrackListEntry;
