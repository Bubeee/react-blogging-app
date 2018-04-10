import React from 'react';

import { Header } from './Header';

import 'jest-localstorage-mock';

describe('Header', () => {
  beforeEach(() => {});

  it('should render correctly', () => {
    const output = shallow(<Header />);

    expect(output).toMatchSnapshot();
  });

  it('should render correctly with token in local storage', () => {
    const component = shallow(<Header />);
    component.logout = jest.fn();

    expect(localStorage.getItem).toHaveBeenLastCalledWith('token');
  });

  // it('should call logout when first link is clicked', () => {
  //   const component = mount(<Header />);
  //   component.logout = jest.fn();

  //   console.log(component.first())
  //   component.simulate('click');

  //   expect(localStorage.setItem).toHaveBeenCalledWith('token', '');
  // });
});
