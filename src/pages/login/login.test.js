import React from 'react';
import { Login } from '.';

describe('Login', () => {
  it('should render correctly', () => {
    const output = shallow(<Login />);

    expect(output).toMatchSnapshot();
  });
});
