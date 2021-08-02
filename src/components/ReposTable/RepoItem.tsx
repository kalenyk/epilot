import { TableCell, TableRow } from '@material-ui/core';
import React from 'react';

interface IProps {
    id: number;
    name: string;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
}

const ListItem: React.FC<IProps> = ({ id, name, stargazers_count, forks_count, html_url }: IProps) => {
    const handleClick = () => {
        window?.open(html_url, '_blank')?.focus();
    };
    return (
        <TableRow 
            key={id} 
            className="flex justify-start w-full text-left h-12 cursor-pointer bg-transparent hover:bg-gray-100"
            onClick={handleClick}
        >
            <TableCell>{name}</TableCell>
            <TableCell>{stargazers_count}</TableCell>
            <TableCell>{forks_count}</TableCell>
        </TableRow>
    );
};

export default ListItem;