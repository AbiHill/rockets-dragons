import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';
import List from '../../components/List/List';
import Toggle from '../../components/Toggle/Toggle';
import Moon from '../../assets/images/moon.png';

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<Home />);

describe('<Home />', () => {
  it('should render a 1 list', () => {
    expect(wrapper.find(List)).toHaveLength(1);
  });

  it('should render a toggle', () => {
    expect(wrapper.find(Toggle)).toHaveLength(1);
  });

  it('should render a moon image', () => {
    expect(wrapper.find('#moon').prop('src')).toBe(Moon);
  });

  it('should render a h1 text', () => {
    expect(wrapper.find('#title').text()).toBe('Rockets & Dragons');
  });
});
