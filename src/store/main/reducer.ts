import {ActionTypes} from './types';

const initialState = {
  bestTopScore: 0,
  bestBottomScore: 0,
};

export default (
  state = initialState,
  action: {type: ActionTypes; payload: any},
) => {
  switch (action.type) {
    case ActionTypes.INCREASE_BEST_TOP_SCORE:
      return {
        ...state,
        bestTopScore: state.bestTopScore + 1,
      };
    case ActionTypes.INCREASE_BEST_BOTTOM_SCORE:
      return {
        ...state,
        bestBottomScore: state.bestBottomScore + 1,
      };
    case ActionTypes.RESET_SCORES:
      return {
        bestBottomScore: 0,
        bestTopScore: 0,
      };
    default:
      return state;
  }
};
