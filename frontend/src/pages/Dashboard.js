import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import ChartComponent from '../components/ChartComponent';
import { Puff } from 'react-loader-spinner';
import {
    getTotalSalesOverTime,
    getSalesGrowthRateOverTime,
    getNewCustomersOverTime,
    getRepeatCustomers,
    getGeographicalDistribution,
    getCustomerLifetimeValueByCohorts,
} from '../services/apiService';

const chartOptions = [
    { value: 'totalSales', label: 'Total Sales' },
    { value: 'growthRate', label: 'Sales Growth Rate' },
    { value: 'newCustomers', label: 'New Customers' },
    { value: 'repeatCustomers', label: 'Repeat Customers' },
    { value: 'geoDistribution', label: 'Geographical Distribution' },
    { value: 'lifetimeValue', label: 'Customer Lifetime Value' },
];

const Dashboard = ({ darkMode }) => {
    const [selectedChart, setSelectedChart] = useState(chartOptions[0].value);
    const [salesData, setSalesData] = useState(null);
    const [growthRateData, setGrowthRateData] = useState(null);
    const [newCustomersData, setNewCustomersData] = useState(null);
    const [repeatCustomersData, setRepeatCustomersData] = useState(null);
    const [geoDistributionData, setGeoDistributionData] = useState(null);
    const [lifetimeValueData, setLifetimeValueData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getTotalSalesOverTime();
                const chartData = {
                    labels: data.map(entry => `${entry._id.year}-${entry._id.month}`),
                    datasets: [
                        {
                            label: 'Total Sales',
                            data: data.map(entry => entry.totalSales),
                            fill: false,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                        },
                    ],
                };
                setSalesData(chartData);
            } catch (error) {
                console.error("Error fetching sales data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchGrowthRateData = async () => {
            try {
                const data = await getSalesGrowthRateOverTime();
                const chartData = {
                    labels: data.map(entry => `${entry._id.year}-${entry._id.month}`),
                    datasets: [
                        {
                            label: 'Sales Growth Rate (%)',
                            data: data.map(entry => entry.salesGrowthRate),
                            fill: false,
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                        },
                    ],
                };
                setGrowthRateData(chartData);
            } catch (error) {
                console.error("Error fetching growth rate data:", error);
            }
        };

        fetchGrowthRateData();
    }, []);

    useEffect(() => {
        const fetchNewCustomersData = async () => {
            try {
                const data = await getNewCustomersOverTime();
                const chartData = {
                    labels: data.map(entry => `${entry._id.year}-${entry._id.month}`),
                    datasets: [
                        {
                            label: 'New Customers',
                            data: data.map(entry => entry.newCustomers),
                            fill: false,
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                        },
                    ],
                };
                setNewCustomersData(chartData);
            } catch (error) {
                console.error("Error fetching new customers data:", error);
            }
        };

        fetchNewCustomersData();
    }, []);

    useEffect(() => {
        const fetchRepeatCustomersData = async () => {
            try {
                const data = await getRepeatCustomers();
                const chartData = {
                    labels: ['Repeat Customers'],
                    datasets: [
                        {
                            label: 'Repeat Customers',
                            data: [data[0].repeatCustomers],
                            fill: false,
                            backgroundColor: 'rgba(255, 206, 86, 0.2)',
                            borderColor: 'rgba(255, 206, 86, 1)',
                        },
                    ],
                };
                setRepeatCustomersData(chartData);
            } catch (error) {
                console.error("Error fetching repeat customers data:", error);
            }
        };

        fetchRepeatCustomersData();
    }, []);

    useEffect(() => {
        const fetchGeoDistributionData = async () => {
            try {
                const data = await getGeographicalDistribution();
                const chartData = {
                    labels: data.map(entry => entry._id),
                    datasets: [
                        {
                            label: 'Customer Count by City',
                            data: data.map(entry => entry.customerCount),
                            fill: false,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                        },
                    ],
                };
                setGeoDistributionData(chartData);
            } catch (error) {
                console.error("Error fetching geographical distribution data:", error);
            }
        };

        fetchGeoDistributionData();
    }, []);

    useEffect(() => {
        const fetchLifetimeValueData = async () => {
            try {
                const data = await getCustomerLifetimeValueByCohorts();
                const chartData = {
                    labels: data.map(entry => entry._id),
                    datasets: [
                        {
                            label: 'Avg Lifetime Value (INR)',
                            data: data.map(entry => entry.averageLifetimeValue),
                            fill: false,
                            backgroundColor: 'rgba(153, 102, 255, 0.2)',
                            borderColor: 'rgba(153, 102, 255, 1)',
                        },
                    ],
                };
                setLifetimeValueData(chartData);
            } catch (error) {
                console.error("Error fetching lifetime value data:", error);
            }
        };

        fetchLifetimeValueData();
    }, []);

    const getSelectedChartData = () => {
        switch (selectedChart) {
            case 'growthRate':
                return growthRateData;
            case 'newCustomers':
                return newCustomersData;
            case 'repeatCustomers':
                return repeatCustomersData;
            case 'geoDistribution':
                return geoDistributionData;
            case 'lifetimeValue':
                return lifetimeValueData;
            case 'totalSales':
            default:
                return salesData;
        }
    };

    return (
        <div>
            <div className="container mx-auto p-4">
                <div className="mb-4 text-center">
                    <Select
                        options={chartOptions}
                        defaultValue={chartOptions[0]}
                        onChange={option => setSelectedChart(option.value)}
                        className={`w-full max-w-xs mx-auto transition-colors duration-500 ${
                            darkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-black'
                        }`}
                        theme={(theme) => ({
                            ...theme,
                            colors: {
                                ...theme.colors,
                                primary: darkMode ? '#007BFF' : theme.colors.primary, // Active option background color
                                primary75: darkMode ? '#d1d5db' : theme.colors.primary75, // Hovered option background color
                                neutral0: darkMode ? '#374151' : '#ffffff', // Dropdown background
                                neutral80: darkMode ? '#ffffff' : '#000000', // Text color for normal options
                                primary25: darkMode ? '#ffffff' : theme.colors.primary25, // Active option text color
                                neutral60: darkMode ? '#000000' : theme.colors.neutral60, // Hovered option text color
                            },
                        })}
                        styles={{
                            menu: (provided) => ({
                                ...provided,
                                overflow: 'hidden',
                            }),
                        }}
                        classNamePrefix="react-select"
                    />
                </div>
                <div className="flex justify-center">
                    <div className="w-full max-w-4xl overflow-x-auto md:overflow-visible">
                        {loading ? (
                            <div className="flex justify-center items-center h-96">
                                <Puff color="#00BFFF" height={100} width={100} />
                            </div>
                        ) : (
                            getSelectedChartData() && (
                                <div className="min-w-[600px] md:min-w-full">
                                    <div className="h-72 md:h-96">
                                        <ChartComponent data={getSelectedChartData()} darkMode={darkMode} />
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
