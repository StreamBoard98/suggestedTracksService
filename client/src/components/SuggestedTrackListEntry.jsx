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

const Image = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  margin-top: auto;
  margin-bottom: auto;
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

const SuggestedTrackListEntry = (props) => {
  const { convertToReadable } = props;

  return (
    <div>
      <SuggestedTrackEntryBox>
        <Grid>
          <Image>
            <img src="https://upload.wikimedia.org/wikipedia/pt/6/66/A_Fever_You_Can%27t_Sweat_Out.jpg" display="inline-block" alt="" height="" width="50px" /> 
          </Image>
          <Artist>
            <Text>
              { props.track.artist }
            </Text>
          </Artist>
          <Title>
            <Text>
              { props.track.title }
            </Text>
          </Title>
          <Icons>
            <Flexbox element="span" justifyContent="space-between" width="240px">
              <BottomIcons>
                <i className="fas fa-play" />
                &nbsp; { convertToReadable(props.track.plays) }
              </BottomIcons>
              <BottomIcons>
                <i className="far fa-heart" />
                &nbsp; { convertToReadable(props.track.likes) }
              </BottomIcons>
              <BottomIcons>
                <i className="fas fa-retweet" />
                &nbsp; { convertToReadable(props.track.shares) }
              </BottomIcons>
              <BottomIcons>
                <i className="fas fa-comment-alt" />
                &nbsp; { convertToReadable(props.track.comments) }
              </BottomIcons>
            </Flexbox>
          </Icons>
        </Grid>
      </SuggestedTrackEntryBox>
    </div>
  );
};

export default SuggestedTrackListEntry;
