import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/shopify';

export const getTotalSalesOverTime = async () => {
  const response = await axios.get(`${API_BASE_URL}/sales/total`);
  return response.data;
};

export const getSalesGrowthRateOverTime = async () => {
  const response = await axios.get(`${API_BASE_URL}/sales/growth-rate`);
  return response.data;
};

export const getNewCustomersOverTime = async () => {
  const response = await axios.get(`${API_BASE_URL}/customers/new`);
  return response.data;
};

export const getRepeatCustomers = async () => {
  const response = await axios.get(`${API_BASE_URL}/customers/repeat`);
  return response.data;
};

export const getGeographicalDistribution = async () => {
  const response = await axios.get(`${API_BASE_URL}/customers/distribution`);
  return response.data;
};

export const getCustomerLifetimeValueByCohorts = async () => {
  const response = await axios.get(`${API_BASE_URL}/customers/lifetime-value`);
  return response.data;
};