import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SearchForm from 'components/SearchForm';
import ReposList from 'components/ReposTable';

import { getUser, setActiveUser } from 'redux/actions';
import { getLocationParams } from 'utils/location';


const HomePage: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const user = getLocationParams('user');
        if (user) {
            dispatch(
                setActiveUser({ user })
            );
            dispatch (
                getUser({ user })
            ); 
        }
    }, [dispatch]);    

    return (
        <div className="flex flex-col justify-start items-center h-full w-auto mx-auto mt-10">
            <div className="m-2 w-80">
                <SearchForm />
            </div>
            <div className="m-2">
                <ReposList />
            </div>
        </div>
    );
};

export default HomePage;
