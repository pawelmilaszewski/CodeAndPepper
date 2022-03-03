import React from 'react';
import Home from '../Home';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '../../../store';

const MockHomeComponent = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

test('render home', () => {
  const tree = render(<MockHomeComponent />);

  const {toJSON, getByText, getByTestId} = tree;

  const title = getByText('Star Wars Game');
  expect(title).toBeTruthy();

  const subtitle = getByText('Your best scores:');
  expect(subtitle).toBeTruthy();

  const button = getByTestId('play_button');
  expect(button).toBeTruthy();

  expect(toJSON()).toMatchSnapshot();
});
