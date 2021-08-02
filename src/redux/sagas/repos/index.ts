import { takeLatest } from 'redux-saga/effects';

import { GET_REPOS_LIST_BY_USER_ID } from 'redux/constants/repos';
import { GET_USER } from 'redux/constants/user';

import { getReposListByUsername } from './getReposListByUsername';
import { getUserSaga } from './getUser';

export default function *rootSaga () {
    yield takeLatest(GET_REPOS_LIST_BY_USER_ID as any, getReposListByUsername);
    yield takeLatest(GET_USER as any, getUserSaga);
}
