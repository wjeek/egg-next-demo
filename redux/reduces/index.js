import { combineReducers } from 'redux';

import { selectedDescription, receiveData, olafState } from './olaf';

export const rootReducer = combineReducers({
  selectedDescription,
  receiveData
});

export const rootInitialState = {
  ...olafState
};
