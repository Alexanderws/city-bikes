import React from 'react';
import { StationCard } from './';
import { shallow } from 'enzyme';

const testStation = {
  name: "TestTitle",
  subtitle: "TestSubTitle",
  availability: []
}

describe('<StationCard />', () => {
  it('renders', () => {
    const wrapper = shallow(<StationCard station={testStation} />);
    expect(wrapper.length).toEqual(1);
  });

  it('renders 10 <div /> elements', () => {
    const wrapper = shallow(<StationCard station={testStation} />);
    expect(wrapper.find('div')).toHaveLength(10);
  });

  it('renders a `.shadow-5`', () => {
    const wrapper = shallow(<StationCard station={testStation} />);
    expect(wrapper.find('.shadow-5')).toHaveLength(1);
  });

  it('displays correct title', () => {
    const wrapper = shallow(<StationCard station={testStation} />);
    expect(wrapper.contains('TestTitle')).toEqual(true);
  });
});
