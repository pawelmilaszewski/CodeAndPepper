import React from 'react';
import {ScoreComponent} from '../index';
import {render} from '@testing-library/react-native';

test('render score component', () => {
  const tree = render(<ScoreComponent bestScore={5} isTop={true} />);

  const {toJSON, getByTestId} = tree;

  const result = getByTestId('text');
  expect(result.props.children).toStrictEqual(['Top: ', 5]);

  expect(toJSON()).toMatchSnapshot();
});
