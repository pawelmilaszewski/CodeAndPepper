import React, {FC} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import {Colors} from '../utils/colors';

interface Props {
  loading: boolean;
}

export const Loader: FC<Props> = ({loading}): JSX.Element => {
  return (
    <>
      {loading && (
        <View style={styles.main} testID={'loader'}>
          <ActivityIndicator
            animating={loading}
            size={'large'}
            color={Colors.BLACK}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${Colors.BLACK}75`,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
});
