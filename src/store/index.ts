import {createStore} from 'redux';
import reducer from './main/reducer';

export type RootState = ReturnType<typeof reducer>;

export const store = createStore(reducer);
