import * as c from 'redux/constants/repos';
import * as types from 'redux/types/repos';

export const getReposListByUser = ({ user }: { user: string }): { type: string, user: string } => ({
    type: c.GET_REPOS_LIST_BY_USER_ID,
    user
});

export const getReposListByUserSuccess = (payload: types.IRepo[]): types.IReposAction => ({
    type: c.GET_REPOS_LIST_BY_USER_ID_SUCCESS,
    payload
});

export const getReposListByUserFailure = (payload: Response): { type: string, payload: Response } => ({
    type: c.GET_REPOS_LIST_BY_USER_ID_FAILURE,
    payload
});

export const reposListClear = (): { type: string } => ({
    type: c.CLEAR_REPOS_LIST,
});

export const setCurrentPage = (page: number): { type: string, page: number } => ({
    type: c.SET_CURRENT_PAGE,
    page,
});

export const setItemsPerPage = (itemsPerPage: number): { type: string, itemsPerPage: number } => ({
    type: c.SET_ITEMS_PER_PAGE,
    itemsPerPage,
});