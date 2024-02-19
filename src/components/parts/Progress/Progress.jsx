import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 40,
    width: 700,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

// Inspired by the former Facebook spinners.


export default function CustomizedProgressBars() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <br />
            <BorderLinearProgress variant="determinate" value={80} />
        </Box>
    );
}