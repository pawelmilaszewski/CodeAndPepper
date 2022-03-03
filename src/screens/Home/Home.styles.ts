import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 54,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    letterSpacing: 1,
    lineHeight: 26,
    marginTop: 32,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    letterSpacing: 1,
    lineHeight: 36,
    textAlign: 'center',
  },
  playButton: {
    backgroundColor: Colors.GREEN,
    borderRadius: 10,
    padding: 16,
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 64,
  },
  playButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 26,
  },
});
