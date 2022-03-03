import React, {FC} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {Colors} from '../utils/colors';

interface Props {
  reset: () => void;
  bestScore: number;
  isTop?: boolean;
}

const ScoreComponent: FC<Props> = ({reset, bestScore, isTop}): JSX.Element => {
  return (
    <View style={styles.main}>
      <Text style={styles.score} testID={'text'}>
        {isTop ? 'Top: ' : 'Bottom: '}
        {bestScore}
      </Text>
      <TouchableOpacity
        onPress={reset}
        style={styles.button}
        testID={'reset_button'}>
        <Text style={styles.buttonText}>Reset score</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScoreComponent;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  button: {
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.RED,
    fontSize: 16,
    lineHeight: 20,
  },
  score: {
    fontSize: 20,
    lineHeight: 24,
  },
});
