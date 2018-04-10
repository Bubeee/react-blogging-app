import React from 'react';

import { SearchBar } from '.';

describe('SearchBar', () => {
  it('should render correctly', () => {
    const output = shallow(
      <SearchBar />
    );
    
    expect(output).toMatchSnapshot();
  });
});