import React from 'react';
import Game from '../Game';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '../../../store';

const MockGameComponent = () => (
  <Provider store={store}>
    <Game />
  </Provider>
);

test('render game', () => {
  const tree = render(<MockGameComponent />);

  const {toJSON, getByTestId} = tree;

  expect(getByTestId('winner_text')).toBeTruthy();
  expect(getByTestId('top_card_text')).toBeTruthy();
  expect(getByTestId('bottom_card_text')).toBeTruthy();
  expect(getByTestId('play_button')).toBeTruthy();
  expect(getByTestId('end_button')).toBeTruthy();

  expect(toJSON()).toMatchSnapshot();
});
