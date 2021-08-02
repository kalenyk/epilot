import { call, put } from 'redux-saga/effects';

import * as a from 'redux/actions';
import { IUser } from 'redux/types/user';
import { request } from 'utils/request';

export function *getUserSaga ({ user }: { user: string }): unknown {

    try {
        yield put(a.reposListClear());
        yield put(a.setCurrentPage(1));

        const response: IUser = yield call(
            request,
            user,
            'GET'
        );

        yield put(a.getUserSuccess({ payload: response }));
        yield put(a.getReposListByUser({ user }));
    }
    catch (error) {
        yield put(a.getUserFailure(error));
    }
}