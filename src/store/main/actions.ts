import {ActionTypes} from './types';

export const setBestTopScore = (payload: number) => ({
  type: ActionTypes.SET_BEST_LEFT_SCORE,
  payload,
});

export const setBestBottomScore = (payload: number) => ({
  type: ActionTypes.SET_BEST_RIGHT_SCORE,
  payload,
});
