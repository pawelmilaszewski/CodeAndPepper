import React from 'react';
import ScoreComponent from '../ScoreComponent';
import {render} from '@testing-library/react-native';

test('render score component', () => {
  const reset = () => jest.fn();
  const tree = render(
    <ScoreComponent reset={reset} bestScore={5} isTop={true} />,
  );

  const {toJSON, getByTestId} = tree;

  const result = getByTestId('text');
  expect(result.props.children).toStrictEqual(['Top: ', 5]);

  const button = getByTestId('reset_button');
  expect(button).toBeTruthy();

  expect(toJSON()).toMatchSnapshot();
});
