import * as c from 'redux/constants/user';
import { IAction, IUser } from 'redux/types/user';

interface IState {
    activeUser: string,
    data: IUser;
    loading: boolean;
    error: boolean;
}

const initialState: IState = {
    activeUser: '',
    data: {
        public_repos: 0
    },
    loading: false,
    error: false
};

export default function userReducer (state:IState = initialState, action: IAction) {
    switch (action.type) {
    case c.SET_ACTIVE_USER:
        return {
            ...state,
            activeUser: action.user,
        };
    case c.CLEAR_ACTIVE_USER:
        return {
            ...state,
            activeUser: ''
        };
    case c.GET_USER:
        return {
            ...state,
            loading: true,
            error: false,
        };
    case c.GET_USER_SUCCESS:
        return {
            ...state,
            data: action.payload,
            loading: false,
        };
    case c.GET_USER_FAILURE:
        return {
            ...state,
            loading: false,
            error: true,
        };
    }
    return state;
}