import React from 'react';
import Post from './post';

describe('Post', () => {
  it('should render correctly', () => {
    const props = {
      id: 1,
      title: 'test',
      content: 'test post',
      onChangeClick: null,
      onRemoveClick: null
    };

    const wrapper = shallow(<Post {...props} />);

    // console.log(wrapper.getElement().props);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.getElement().props.title.toEqual('test'));
  });
});
