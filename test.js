import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SuggestedTrackListEntry from './client/src/components/SuggestedTrackListEntry.jsx';

configure({ adapter: new Adapter() });

describe('SuggestedTrackList', () => {
  it('should render without throwing an error', () => {
   const shallowRend = shallow(<SuggestedTrackListEntry index={1} track={{id:1}} convertToReadable={function(){}} incrementLikeOrShare={function(){}}/>);
   expect(shallowRend).toMatchSnapshot();
  });
});