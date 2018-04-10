import React from 'react';

import { Footer } from './Footer';

describe('Footer', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Footer />
    );
    
    expect(output).toMatchSnapshot();
  });
});