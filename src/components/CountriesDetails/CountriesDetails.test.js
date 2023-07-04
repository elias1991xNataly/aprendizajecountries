import React from 'react';
import { shallow, render, mount } from 'enzyme';
import CountriesDetails from './CountriesDetails';

describe('CountriesDetails', () => {
  let props;
  let shallowCountriesDetails;
  let renderedCountriesDetails;
  let mountedCountriesDetails;

  const shallowTestComponent = () => {
    if (!shallowCountriesDetails) {
      shallowCountriesDetails = shallow(<CountriesDetails {...props} />);
    }
    return shallowCountriesDetails;
  };

  const renderTestComponent = () => {
    if (!renderedCountriesDetails) {
      renderedCountriesDetails = render(<CountriesDetails {...props} />);
    }
    return renderedCountriesDetails;
  };

  const mountTestComponent = () => {
    if (!mountedCountriesDetails) {
      mountedCountriesDetails = mount(<CountriesDetails {...props} />);
    }
    return mountedCountriesDetails;
  };  

  beforeEach(() => {
    props = {};
    shallowCountriesDetails = undefined;
    renderedCountriesDetails = undefined;
    mountedCountriesDetails = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
