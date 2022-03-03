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
    case ActionTypes.SET_BEST_LEFT_SCORE:
      return {
        ...state,
        bestTopScore: action.payload,
      };
    case ActionTypes.SET_BEST_RIGHT_SCORE:
      return {
        ...state,
        bestBottomScore: action.payload,
      };
    default:
      return state;
  }
};
