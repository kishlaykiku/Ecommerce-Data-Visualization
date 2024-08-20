import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getTotalSalesOverTime = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/sales/total`);
        return response.data;
    } catch (error) {
        console.error('Error fetching total sales over time:', error);
        throw error;
    }
};

export const getSalesGrowthRateOverTime = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/sales/growth-rate`);
        return response.data;
    } catch (error) {
        console.error('Error fetching sales growth rate over time:', error);
        throw error;
    }
};

export const getNewCustomersOverTime = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/customers/new`);
        return response.data;
    } catch (error) {
        console.error('Error fetching new customers over time:', error);
        throw error;
    }
};

export const getRepeatCustomers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/customers/repeat`);
        return response.data;
    } catch (error) {
        console.error('Error fetching repeat customers:', error);
        throw error;
    }
};

export const getGeographicalDistribution = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/customers/distribution`);
        return response.data;
    } catch (error) {
        console.error('Error fetching geographical distribution:', error);
        throw error;
    }
};

export const getCustomerLifetimeValueByCohorts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/customers/lifetime-value/`);
        return response.data;
    } catch (error) {        
        console.error('Error fetching customer lifetime value by cohorts:', error);
        throw error;
    }
};