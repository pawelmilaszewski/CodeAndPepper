import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  bestScore: number;
  isTop?: boolean;
}

export const ScoreComponent: FC<Props> = ({bestScore, isTop}): JSX.Element => {
  return (
    <View style={styles.main}>
      <Text style={styles.score} testID={'text'}>
        {isTop ? 'Top: ' : 'Bottom: '}
        {bestScore}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginVertical: 8,
  },
  score: {
    fontSize: 20,
    lineHeight: 24,
  },
});
