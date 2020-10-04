import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from './Panel';

Enzyme.configure({ adapter: new Adapter() });
const data = {
  name: 'Name of rocket',
  description: 'Lorem Ipsum',
  flickr_images: 'link-text',
};

const wrapper = shallow(<Panel data={data} />);

describe('<Panel />', () => {
  it('should render a h2 text', () => {
    expect(wrapper.find('#title').text()).toBe('Name of rocket');
  });

  it('should render a description', () => {
    expect(wrapper.find('#desc').text()).toBe('Lorem Ipsum');
  });

  it('should render an image', () => {
    expect(wrapper.find('#img').prop('src')).toBe('link-text');
  });
});
