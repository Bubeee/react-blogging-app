import React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Adapter from 'enzyme-adapter-react-16';
import { SearchBar } from '.';

enzyme.configure({ adapter: new Adapter() });

describe('SearchBar', () => {
  it('should render correctly', () => {
    const output = enzyme.shallow(
      <SearchBar />
    );
    
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});