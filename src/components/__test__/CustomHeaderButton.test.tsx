import React from 'react';
import {CustomHeaderButton} from '../index';
import {render} from '@testing-library/react-native';

test('render custom header button', () => {
  const func = () => jest.fn();
  const tree = render(
    <CustomHeaderButton text={'People'} onPress={func} selected={true} />,
  );

  const {toJSON, getByTestId} = tree;

  const result = getByTestId('text');
  expect(result.props.children).toBe('People');

  const button = getByTestId('button');
  expect(button).toBeTruthy();

  expect(toJSON()).toMatchSnapshot();
});
