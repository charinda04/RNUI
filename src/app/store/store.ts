/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  createStore,
  applyMiddleware,
  Reducer,
  AnyAction,
} from '@reduxjs/toolkit';
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import {createEpicMiddleware} from 'redux-observable';
import rootReducer from './rootReducer';

// import reactotron from '../../ReactotronConfig';

export type RootState = ReturnType<typeof rootReducer>;

const epicMiddleware = createEpicMiddleware();
// const reactotronEnhancer =
//   reactotron.createEnhancer && reactotron.createEnhancer();

const middleware = [epicMiddleware];

if (__DEV__) {
  // eslint-disable-next-line global-require
  const createDebugger = require('redux-flipper').default;
  middleware.push(createDebugger());
}

const store = createStore(
  rootReducer as Reducer<RootState, AnyAction>,
  applyMiddleware(...middleware),
);

// epicMiddleware.run();

export type AppDispatch = typeof store.dispatch;
export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
