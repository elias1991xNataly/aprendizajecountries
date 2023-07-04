import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
  let props;
  let shallowNavbar;
  let renderedNavbar;
  let mountedNavbar;

  const shallowTestComponent = () => {
    if (!shallowNavbar) {
      shallowNavbar = shallow(<Navbar {...props} />);
    }
    return shallowNavbar;
  };

  const renderTestComponent = () => {
    if (!renderedNavbar) {
      renderedNavbar = render(<Navbar {...props} />);
    }
    return renderedNavbar;
  };

  const mountTestComponent = () => {
    if (!mountedNavbar) {
      mountedNavbar = mount(<Navbar {...props} />);
    }
    return mountedNavbar;
  };  

  beforeEach(() => {
    props = {};
    shallowNavbar = undefined;
    renderedNavbar = undefined;
    mountedNavbar = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
