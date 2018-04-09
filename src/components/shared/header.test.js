import React from 'react';
import * as enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Adapter from 'enzyme-adapter-react-16';
import { Header } from './Header';

import localStorage from 'jest-localstorage-mock';

enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  beforeEach(() => {
    // values stored in tests will also be available in other tests unless you run
    // localStorage.clear();
    // // or directly reset the storage
    // localStorage.__STORE__ = {};
    // // you could also reset all mocks, but this could impact your other mocks
    // jest.resetAllMocks();
    // // or individually reset a mock used
    // localStorage.setItem.mockClear();
  });
   

  it('should render correctly', () => {
    const output = enzyme.shallow(<Header />);

    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should render correctly with token in local storage', () => {
    localStorage.getItem = () => 'tokenMock';
    const output = enzyme.shallow(<Header />);

    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
