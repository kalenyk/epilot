import { all, fork } from 'redux-saga/effects';
import repos from './repos';

export default function *rootSaga () {
    yield all([
        repos
    ].map(fork));
}
