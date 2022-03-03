import 'react-native';
import 'react-native-gesture-handler/jestSetup';
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('@react-navigation/native', () => {
  const nav = jest.requireActual('@react-navigation/native');
  return {
    ...nav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});
jest.mock('axios');
