import React from 'react';
import renderer from 'react-test-renderer';
import { PureApp } from './app';

test('App should render correct', () => {
  const tree = renderer
    .create(
      <PureApp
        title="Some Title!"
        onTitleChange={jest.fn()}
        onTitleReset={jest.fn()}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
