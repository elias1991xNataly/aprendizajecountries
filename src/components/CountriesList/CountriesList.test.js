import React from 'react';
import { shallow, render, mount } from 'enzyme';
import CountriesList from './CountriesList';

describe('CountriesList', () => {
  let props;
  let shallowCountriesList;
  let renderedCountriesList;
  let mountedCountriesList;

  const shallowTestComponent = () => {
    if (!shallowCountriesList) {
      shallowCountriesList = shallow(<CountriesList {...props} />);
    }
    return shallowCountriesList;
  };

  const renderTestComponent = () => {
    if (!renderedCountriesList) {
      renderedCountriesList = render(<CountriesList {...props} />);
    }
    return renderedCountriesList;
  };

  const mountTestComponent = () => {
    if (!mountedCountriesList) {
      mountedCountriesList = mount(<CountriesList {...props} />);
    }
    return mountedCountriesList;
  };  

  beforeEach(() => {
    props = {};
    shallowCountriesList = undefined;
    renderedCountriesList = undefined;
    mountedCountriesList = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
