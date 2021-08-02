import { combineReducers } from 'redux';
import repos from './repos';
import user from './user';

export const rootReducer = combineReducers({
    repos,
    user
});

export type IRootState = ReturnType<typeof rootReducer>;
