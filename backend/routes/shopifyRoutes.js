import express from 'express';
import { 
    getTotalSalesOverTime,
    getSalesGrowthRateOverTime,
    getNewCustomersOverTime,
    getRepeatCustomers,
    getGeographicalDistribution,
    getCustomerLifetimeValueByCohorts
} from '../controllers/shopifyController.js';

const router = express.Router();

// Route for Total Sales Over Time
router.get('/sales/total', getTotalSalesOverTime);

// Route for Sales Growth Rate Over Time
router.get('/sales/growth-rate', getSalesGrowthRateOverTime);

// Route for New Customers Added Over Time
router.get('/customers/new', getNewCustomersOverTime);

// Route for Number of Repeat Customers
router.get('/customers/repeat', getRepeatCustomers);

// Route for Geographical Distribution of Customers
router.get('/customers/distribution', getGeographicalDistribution);

// Route for Customer Lifetime Value by Cohorts
router.get('/customers/lifetime-value', getCustomerLifetimeValueByCohorts);

export default router;
