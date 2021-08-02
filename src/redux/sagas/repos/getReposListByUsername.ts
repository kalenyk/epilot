import { call, put, select } from 'redux-saga/effects';

import * as a from 'redux/actions/repos';
import { IRepo } from 'redux/types/repos';

import { request } from 'utils/request';

export function *getReposListByUsername ({ user }: { user: string }): unknown {

    try {
        const { page, reposPerPage } = yield select(state => state.repos);
        
        const response: IRepo[] = yield call(
            request,
            user,
            'GET',
            `/repos?page=${page}&per_page=${reposPerPage}`
        );

        yield put(a.getReposListByUserSuccess(response));
    }
    catch (error) {
        yield put(a.getReposListByUserFailure(error));
    }
}