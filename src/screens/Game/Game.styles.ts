import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  endButton: {
    marginBottom: 54,
    padding: 16,
  },
  endButtonText: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    marginTop: 32,
    alignItems: 'center',
  },
  card: {
    height: 150,
    width: 250,
    margin: 16,
  },
  cardScore: {
    fontSize: 16,
  },
  winner: {
    fontSize: 20,
    marginVertical: 8,
  },
});
