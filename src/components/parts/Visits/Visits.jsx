import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('United States', 31.200, 40),
    createData('United Kingdom', 237, 9.0, 37, 4.3),
    createData('Russia', 262, 16.0, 24, 6.0),
    createData('Canada', 305, 3.7, 67, 4.3),
    createData('Germany', 356, 16.0, 49, 3.9),
    createData('Spain', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
    return (
        <TableContainer>
            <Table sx={{ minWidth: 150 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>COUNTRY</TableCell>
                        <TableCell align="right">VALUE</TableCell>
                        <TableCell align="right">SEO</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
