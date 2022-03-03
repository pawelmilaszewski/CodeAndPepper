/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Card, Title, Paragraph} from 'react-native-paper';
import axios from 'axios';

import {RootState} from '../../store';
import {
  increaseBestTopScore,
  increaseBestBottomScore,
} from '../../store/main/actions';
import {MainParamList} from '../../navigation/Navigator';
import {styles} from './Game.styles';
import {Colors} from '../../utils/colors';
import {People, Starship} from '../../utils/types';
import {CustomHeaderButton, Loader} from '../../components';

type ScreenProp = StackNavigationProp<MainParamList>;

type Item = {
  name: string;
  crew: number;
  mass: number;
};

const Game = () => {
  const navigation = useNavigation<ScreenProp>();
  const dispatch = useDispatch();
  const bestTopScore = useSelector((state: RootState) => state.bestTopScore);
  const bestBottomScore = useSelector(
    (state: RootState) => state.bestBottomScore,
  );
  const [loading, setLoading] = useState(false);
  const [isPeople, setIsPeople] = useState(true);
  const [topCard, setTopCard] = useState<Item>({} as Item);
  const [bottomCard, setBottomCard] = useState<Item>({} as Item);
  const [dataPeople, setDataPeople] = useState<People[]>([]);
  const [dataStarships, setDataStarships] = useState<Starship[]>([]);
  const goBack = () => navigation.goBack();

  const getCardDetails = useCallback(
    (setDetails: (value: Item) => void, data: Starship[] | People[]) => {
      let index = Math.floor(Math.random() * data.length);
      let crew = 0;
      let mass = 0;
      if (isPeople) {
        let temp = data[index] as People;
        mass = parseInt(temp?.mass, 10);
        setDetails({
          name: temp?.name,
          mass,
          crew,
        });
      } else {
        let temp = data[index] as Starship;
        crew = temp?.crew.includes('-')
          ? parseInt(temp?.crew.split('-')[1], 10)
          : temp?.crew.includes(',')
          ? parseInt(temp?.crew.split(',')[1], 10)
          : parseInt(temp?.crew, 10);
        setDetails({
          name: temp?.name,
          mass,
          crew,
        });
      }
    },
    [isPeople],
  );

  const getData = useCallback(async () => {
    setLoading(true);
    await axios
      .get(`https://swapi.dev/api/${isPeople ? 'people' : 'starships'}/`)
      .then(resp => {
        if (isPeople) {
          setDataPeople(resp.data.results);
          setDataStarships([]);
          getCardDetails(setTopCard, resp.data.results);
          getCardDetails(setBottomCard, resp.data.results);
        } else {
          setDataStarships(resp.data.results);
          setDataPeople([]);
          getCardDetails(setTopCard, resp.data.results);
          getCardDetails(setBottomCard, resp.data.results);
        }
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.warn(err);
      });
  }, [isPeople, getCardDetails]);

  const play = () => {
    getCardDetails(setTopCard, isPeople ? dataPeople : dataStarships);
    getCardDetails(setBottomCard, isPeople ? dataPeople : dataStarships);
  };

  const increaseTop = useCallback(
    () => dispatch(increaseBestTopScore()),
    [dispatch],
  );
  const increaseBottom = useCallback(
    () => dispatch(increaseBestBottomScore()),
    [dispatch],
  );

  const getWinner = useMemo(() => {
    if (topCard.mass > bottomCard.mass || topCard.crew > bottomCard.crew) {
      increaseTop();
      return topCard.name;
    } else if (
      topCard.mass < bottomCard.mass ||
      topCard.crew < bottomCard.crew
    ) {
      increaseBottom();
      return bottomCard.name;
    } else {
      return 'Nobody';
    }
  }, [topCard, bottomCard, increaseBottom, increaseTop]);

  useEffect(() => {
    getData();
  }, [getData, isPeople]);

  const renderCard = useCallback(
    (card: Item) => (
      <Card
        style={[
          styles.card,
          {
            backgroundColor:
              getWinner === card.name
                ? Colors.GREEN
                : getWinner === 'Nobody'
                ? Colors.GRAY
                : Colors.RED,
          },
        ]}>
        <Card.Content>
          <Title>Name: {card.name}</Title>
          <Paragraph>
            {isPeople ? `Mass: ${card.mass}` : `Crew: ${card.crew}`}
          </Paragraph>
        </Card.Content>
      </Card>
    ),
    [isPeople, getWinner],
  );

  return (
    <View style={styles.main}>
      {<Loader loading={loading} />}
      <View style={styles.header}>
        <CustomHeaderButton
          text={'People'}
          onPress={() => setIsPeople(true)}
          selected={isPeople}
        />
        <CustomHeaderButton
          text={'Starships'}
          onPress={() => setIsPeople(false)}
          selected={!isPeople}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.winner} testID={'winner_text'}>
          {getWinner} wins!
        </Text>
        <Text style={styles.cardScore} testID={'top_card_text'}>
          Top card: {bestTopScore} wins
        </Text>
        {renderCard(topCard)}
        {renderCard(bottomCard)}
        <Text style={styles.cardScore} testID={'bottom_card_text'}>
          Bottom card: {bestBottomScore} wins
        </Text>
      </View>
      <View>
        <TouchableOpacity
          testID={'play_button'}
          onPress={play}
          style={[styles.endButton, {marginBottom: 0}]}>
          <Text style={styles.endButtonText}>Play Again</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goBack}
          style={styles.endButton}
          testID={'end_button'}>
          <Text style={styles.endButtonText}>End Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Game;
