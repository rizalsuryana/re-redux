
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import { todoDeletionCheck, thunk } from './middlewares';

export const store = createStore(rootReducer, applyMiddleware(thunk, todoDeletionCheck));