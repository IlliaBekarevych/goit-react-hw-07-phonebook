import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { chengeFilter } from './contact-actions';

const filter = createReducer('', {
  [chengeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  filter,
});
