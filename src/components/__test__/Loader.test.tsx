import React from 'react';
import {Loader} from '../index';
import {render} from '@testing-library/react-native';

test('render custom header button', () => {
  const tree = render(<Loader loading={true} />);

  const {toJSON, getByTestId} = tree;

  const result = getByTestId('loader');
  expect(result).toBeTruthy();

  expect(toJSON()).toMatchSnapshot();
});
