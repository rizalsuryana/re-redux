
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import { todoDeletionCheck } from './middlewares';

export const store = createStore(rootReducer, applyMiddleware(todoDeletionCheck));