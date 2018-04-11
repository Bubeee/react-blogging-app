import React from 'react';
import { PostForm } from '.';

describe('PostForm', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<PostForm />);

    expect(wrapper).toMatchSnapshot();
  });
});
