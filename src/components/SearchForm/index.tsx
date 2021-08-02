import React, { useCallback } from 'react';
import { Button, TextField, InputAdornment, IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setActiveUser, getUser, reposListClear, clearActiveUser, setCurrentPage } from 'redux/actions';
import { IRootState } from 'redux/reducers/rootReducer';

const SearchForm: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { activeUser } = useSelector((state: IRootState) => state.user);
    
    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(
            getUser({ user: activeUser })
        );

        history.push({
            search: `?user=${activeUser}`
        });
    }, [dispatch, activeUser, history]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        
        dispatch(
            setActiveUser({ user: e.currentTarget.value })
        );
    }, [dispatch]);

    const handleClear = () => {
        dispatch(reposListClear());
        dispatch(clearActiveUser());
        dispatch(setCurrentPage(1));
        history.push({
            search: ''
        });
    };
    return (
        <form onSubmit={handleSubmit} className="flex items-center justify-between w-full h-full">
            <TextField 
                label="Github username" 
                onChange={handleChange}
                value={activeUser}
                className="mr-4 w-2/3"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <IconButton
                                onClick={handleClear}    
                            >
                                <ClearIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
            <Button 
                type="submit"
                className="w-1/3 h-full flex-shrink ml-3"
            >
                Search
            </Button>
        </form>
    );
};

export default SearchForm;