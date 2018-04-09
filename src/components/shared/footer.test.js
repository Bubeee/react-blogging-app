import React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Adapter from 'enzyme-adapter-react-16';
import { Footer } from './Footer';

enzyme.configure({ adapter: new Adapter() });

describe('Footer', () => {
  it('should render correctly', () => {
    const output = enzyme.shallow(
      <Footer />
    );
    
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});