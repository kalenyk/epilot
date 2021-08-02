import qs from 'qs';

import * as c from 'redux/constants/repos';
import { IRepo, IReposAction } from 'redux/types/repos';

interface IState {
    reposList: IRepo[];
    loading: boolean;
    error: boolean;
    reposPerPage?: number;
    page?: number;
}

const initialState: IState = {
    reposList: [],
    loading: false,
    error: false,
    reposPerPage: Number(qs.parse(window.location.search, { ignoreQueryPrefix: true })?.reposPerPage) || 10,
    page: Number(qs.parse(window.location.search, { ignoreQueryPrefix: true })?.page) || 1,
};


export default function rootReducer (state:IState = initialState, action: IReposAction) {
    switch (action.type) {
    case c.GET_REPOS_LIST_BY_USER_ID:
        return {
            ...state,
            ...action.payload,
            loading: true,
            error: false
        };
    case c.GET_REPOS_LIST_BY_USER_ID_SUCCESS:
        return {
            ...state,
            reposList: [...action.payload],
            loading: false,
        };
        
    case c.GET_REPOS_LIST_BY_USER_ID_FAILURE:
        return {
            ...state,
            loading: false,
            error: true
        };
    case c.CLEAR_REPOS_LIST:
        return {
            ...state,
            reposList: [],
            page: 1,
        };
    case c.SET_CURRENT_PAGE:
        return {
            ...state,
            page: action.page
        };
    case c.SET_ITEMS_PER_PAGE:
        return {
            ...state,
            reposPerPage: action.itemsPerPage
        };
    }
    return state;
}