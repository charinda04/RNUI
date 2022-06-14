/* eslint-disable no-param-reassign */
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface SharedState {
  isConnected: boolean;
  count: number;
  dummyCount: number;
}

const initialState: SharedState = {
  isConnected: true,
  count: 0,
  dummyCount: 0,
};

const setIsConnected = (
  state: SharedState,
  action: PayloadAction<boolean>,
): void => {
  state.isConnected = action.payload;
};

const setCount = (state: SharedState, action: PayloadAction<number>): void => {
  state.count = action.payload;
};

export const SharedSlice = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    setIsConnected,
    setCount,
  },
});

export const SharedActions = {
  ...SharedSlice.actions,
};

export default SharedSlice.reducer;
