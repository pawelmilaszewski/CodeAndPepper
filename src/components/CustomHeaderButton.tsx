import React, {FC} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import {Colors} from '../utils/colors';

interface Props {
  text: string;
  onPress: () => void;
  selected: boolean;
}

const CustomHeaderButton: FC<Props> = ({
  text,
  onPress,
  selected,
}): JSX.Element => {
  return (
    <TouchableOpacity
      testID={'button'}
      style={
        selected
          ? [styles.button, {backgroundColor: Colors.GREEN}]
          : styles.button
      }
      onPress={onPress}>
      <Text style={styles.buttonText} testID={'text'}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomHeaderButton;

const styles = StyleSheet.create({
  button: {
    width: 108,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    borderRadius: 10,
    backgroundColor: `${Colors.GREEN}50`,
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 1,
  },
});
