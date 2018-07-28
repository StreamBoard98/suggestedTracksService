import React from 'react';
import styled from 'styled-components';
import Flexbox from 'flexbox-react';

const SuggestedTrackEntryBox = styled.div`
  display: inline-block;
  margin-bottom: 20px;
`;

const BottomIcons = styled.button`
  border: 1px solid white;
  color: silver;
  background: transparent
`;

const Text = styled.p`
  font-size: 14px;
  font-family: Arial;
  font-weight: normal;
  margin: -1px;
  color: silver;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 60px 240px;
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

const Test = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  align-items: right;
`;

const HoverButtons = styled.button`
  border: 1px solid lightgray;
  color: black;
  background: transparent;
`;


const SuggestedTrackListEntry = (props) => {
  const {
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
              <i className="fas fa-play-circle fa-2x"></i>
            </PlayButtonOverlay>
          </Image>
          <Artist>
            <Text>
              { artist }
            </Text>
          </Artist>
          <Title>
            <Text>
             {/*} { title }*/}
            </Text>
            <Test>
              <HoverButtons onClick={ () => {incrementLikeOrShare(id, 'likes')}}>
                <i className="far fa-heart" />
              </HoverButtons>
              <HoverButtons>
                <i className="fas fa-ellipsis-h" />
              </HoverButtons>
            </Test>
          </Title>
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
