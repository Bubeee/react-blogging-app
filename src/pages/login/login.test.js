import React from 'react';
import { Login } from '.';

describe('Login', () => {
  it('should render correctly', () => {
    const output = shallow(<Login />);

    expect(output).toMatchSnapshot();
  });

  it('should call submit on submit', () => {
    const mockedEvent = { target: {}, preventDefault: () => null }

    const wrapper = shallow(<Login />);
    wrapper.instance().submit = jest.fn();
    wrapper.update();

    wrapper.find('form').simulate('submit', mockedEvent);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.instance().submit).toBeCalledWith(mockedEvent);
  });
});
