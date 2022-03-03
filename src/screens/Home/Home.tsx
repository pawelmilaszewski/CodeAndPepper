import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {ScoreComponent} from '../../components';
import {RootState} from '../../store';
import {resetScores} from '../../store/main/actions';
import {MainParamList} from '../../navigation/Navigator';
import {styles} from './Home.styles';
import {Colors} from '../../utils/colors';

type ScreenProp = StackNavigationProp<MainParamList>;

const Home = () => {
  const navigation = useNavigation<ScreenProp>();
  const dispatch = useDispatch();
  const bestTopScore = useSelector((state: RootState) => state.bestTopScore);
  const bestBottomScore = useSelector(
    (state: RootState) => state.bestBottomScore,
  );

  const reset = () => dispatch(resetScores());

  const goToGame = () => navigation.navigate('Game');

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Star Wars Game</Text>
      <Text style={styles.text}>Your best scores: </Text>
      <ScoreComponent isTop bestScore={bestTopScore} />
      <ScoreComponent bestScore={bestBottomScore} />
      <TouchableOpacity
        onPress={goToGame}
        style={styles.playButton}
        testID={'play_button'}>
        <Text style={styles.playButtonText}>Play!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={reset}
        style={[styles.playButton, {backgroundColor: Colors.RED}]}
        testID={'reset_button'}>
        <Text style={styles.playButtonText}>Reset scores</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
