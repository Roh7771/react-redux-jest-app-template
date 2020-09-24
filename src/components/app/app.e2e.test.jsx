import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PureApp } from './app';

configure({
  adapter: new Adapter(),
});

test('App should content the title', () => {
  const app = shallow(
    <PureApp
      title="Some Title!"
      onTitleChange={jest.fn()}
      onTitleReset={jest.fn()}
    />,
  );

  const title = app.find('.title');

  expect(title.text()).toBe('Some Title!');
});
