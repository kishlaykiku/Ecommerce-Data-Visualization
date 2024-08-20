import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartComponent = ({ data, darkMode }) => {
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: darkMode ? '#d1d5db' : '#000000', // Text color
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: darkMode ? '#d1d5db' : '#000000', // X-axis tick color
                },
                grid: {
                    color: darkMode ? '#6f7e94' : '#bababa', // X-axis grid color
                },
            },
            y: {
                ticks: {
                    color: darkMode ? '#d1d5db' : '#000000', // Y-axis tick color
                },
                grid: {
                    color: darkMode ? '#6f7e94' : '#bababa', // Y-axis grid color
                },
            },
        },
        elements: {
            line: {
                borderColor: darkMode ? '#00BFFF' : '#007BFF', // Line color (fixed)
                borderWidth: 2,
            },
        },
    };

    return (
        <div className={`p-4 rounded-lg shadow-md w-full h-[500px] transition-colors duration-500 ${darkMode ? 'bg-dark-card' : 'bg-white'}`}>
            <Line data={data} options={chartOptions} />
        </div>
    );
};

export default ChartComponent;