import * as c from 'redux/constants/user';
import { IAction } from 'redux/types';
import { IUser } from 'redux/types/user';

export const setActiveUser = ({ user }: { user: string }): { type: string, user: string } => ({
    type: c.SET_ACTIVE_USER,
    user
});

export const clearActiveUser = (): IAction => ({
    type: c.CLEAR_ACTIVE_USER,
});


export const getUser = ({ user }: { user: string }): { type: string, user: string } => ({
    type: c.GET_USER,
    user
});
export const getUserSuccess = ({ payload }: { payload: IUser }): { type: string, payload: IUser } => ({
    type: c.GET_USER_SUCCESS,
    payload
});
export const getUserFailure = ({ error }: { error: boolean }): { type: string, error: boolean } => ({
    type: c.GET_USER_FAILURE,
    error
});