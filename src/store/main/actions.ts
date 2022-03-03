import {ActionTypes} from './types';

export const increaseBestTopScore = () => ({
  type: ActionTypes.INCREASE_BEST_TOP_SCORE,
});

export const increaseBestBottomScore = () => ({
  type: ActionTypes.INCREASE_BEST_BOTTOM_SCORE,
});

export const resetScores = () => ({
  type: ActionTypes.RESET_SCORES,
});
