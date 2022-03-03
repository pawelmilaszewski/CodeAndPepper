import React, {FC} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import {Colors} from '../utils/colors';

interface Props {
  text: string;
  onPress: () => void;
  selected: boolean;
}

export const CustomHeaderButton: FC<Props> = ({
  text,
  onPress,
  selected,
}): JSX.Element => {
  return (
    <TouchableOpacity
      testID={'button'}
      style={
        selected
          ? [styles.button, {backgroundColor: Colors.BLUE}]
          : styles.button
      }
      onPress={onPress}>
      <Text style={styles.buttonText} testID={'text'}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 124,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    borderRadius: 10,
    backgroundColor: `${Colors.BLUE}50`,
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 1,
    color: Colors.WHITE,
  },
});
