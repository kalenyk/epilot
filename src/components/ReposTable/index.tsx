import React, { useMemo } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, CircularProgress } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { IRootState } from 'redux/reducers/rootReducer';
import { IRepo } from 'redux/types/repos';
import { setCurrentPage, getReposListByUser } from 'redux/actions';

import ListItem from './RepoItem';

const ReposList: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { reposList, loading, error, reposPerPage, page } = useSelector((state: IRootState) => state.repos);
    const { data, activeUser: user, loading: userLoading, error: userError } = useSelector((state: IRootState) => state.user);

    console.log('data',data);
    const totalPages = useMemo(() => {
        if (reposPerPage && data['public_repos']) {
            return Math.ceil(data['public_repos'] / reposPerPage);
        }
        return 1;
    },[reposPerPage, data]);

    const handlePagination = (e: React.ChangeEvent<unknown>, page: number) => {
        dispatch(setCurrentPage(page));
        history.push({
            search: `?username=${user}&page=${page}`
        });
        dispatch(getReposListByUser({ user }));
    };

    if (loading || userLoading) return <CircularProgress />;

    if (!reposList?.length || error || userError) return <div className="not-found">Not Found</div>;

    return (
        <div className="flex flex-col">
            <Table className="overflow-hidden">
                <TableHead className="flex justify-start w-full text-left h-12 bg-red-200">
                    <TableRow>
                        <TableCell className="px-4">Name</TableCell>
                        <TableCell className="px-4">Stars</TableCell>
                        <TableCell className="px-4">Forks</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(reposList || []).map((item: IRepo): React.ReactNode => <ListItem key={item.id} {...item} />)}
                </TableBody>
            </Table>
            {totalPages > 1 && (
                <Pagination
                    count={totalPages}
                    className="mt-5"
                    onChange={handlePagination}
                    page={page}
                />
            )}
            
        </div>
    );
};

export default ReposList;