import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
    return (
        <PieChart
            series={[
                {
                    data: [
                        { id: 0, value: 10, label: 'Linkedin' },
                        { id: 1, value: 10, label: 'Instagram' },
                        { id: 2, value: 20, label: 'Facebook' },
                    ],
                },
            ]}
            width={350}
            height={200}
        />
    );
}
