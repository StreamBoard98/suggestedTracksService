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
  font-family: Arial;
  color: pink;
  padding-top: -10px;
  padding-bottom; -10px;
  align: top;
  justify: top;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 60px 240px;
  grid-template-rows: 30px 30px 40px;
`;

const Image = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  background-color: white;
  justify-content: center
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
      <SuggestedTrackEntryBox>
        <Grid>
          <Image> 
            <img src="https://upload.wikimedia.org/wikipedia/pt/6/66/A_Fever_You_Can%27t_Sweat_Out.jpg" display="inline-block" alt="" height="50px" width="50px"/> 
          </Image>
          <Artist>
            <Text>
              Artist
            </Text>
          </Artist>
          <Title>
            <Text>
              Title
            </Text>
          </Title>
          <Icons>
            <Flexbox element="span" justifyContent="space-between" width="240px">
              <BottomIcons>
                <i className="fas fa-play" />
                &nbsp; 10m
              </BottomIcons>
              <BottomIcons>
                <i className="far fa-heart" />
                &nbsp; 569k
              </BottomIcons>
              <BottomIcons>
                <i className="fas fa-retweet" />
                &nbsp; 24.7k
              </BottomIcons>
              <BottomIcons>
                <i className="fas fa-comment-alt" />
                &nbsp; 3968
              </BottomIcons>
            </Flexbox>
          </Icons>
        </Grid>
      </SuggestedTrackEntryBox>
      {/*<SuggestedTrackEntryBox>
        <img src="https://upload.wikimedia.org/wikipedia/pt/6/66/A_Fever_You_Can%27t_Sweat_Out.jpg" display="inline-block" alt="" height="50px" width="50px"/>
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
      </SuggestedTrackEntryBox>*/}
    </div>
  );
};

// SuggestedTrackListEntry.propTypes = {
//   suggestedTrack: React.PropTypes.object.isRequired
// };

export default SuggestedTrackListEntry;
