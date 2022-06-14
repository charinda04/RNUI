import {AnyAction, combineReducers} from '@reduxjs/toolkit';

import SharedSlice from './sharedSlice';

const appReducer = combineReducers({
  shared: SharedSlice,
});

type AppState = ReturnType<typeof appReducer>;

const rootReducer = (state: AppState, action: AnyAction): AppState => {
  return appReducer(state, action);
};

export default rootReducer;
