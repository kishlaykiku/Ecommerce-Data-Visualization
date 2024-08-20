import mongoose from 'mongoose';

const shopifyOrders = mongoose.connection.collection('shopifyOrders');
const shopifyCustomers = mongoose.connection.collection('shopifyCustomers');

// Controller for Total Sales Over Time
export const getTotalSalesOverTime = async (req, res) => {
    try {
        const salesData = await shopifyOrders.aggregate([
            {
                $addFields: {
                    createdAtDate: {
                        $dateFromString: { dateString: "$created_at" }
                    },
                    totalPriceNumber: {
                        $toDouble: "$total_price"
                    }
                }
            },
            {
                $group: {
                    _id: {
                        year: { $year: "$createdAtDate" },
                        month: { $month: "$createdAtDate" }
                    },
                    totalSales: { $sum: "$totalPriceNumber" }
                }
            },
            {
                $sort: { "_id.year": 1, "_id.month": 1 }
            }
        ]).toArray();

        res.json(salesData);
    } catch (error) {
        console.error('Error fetching total sales over time:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

// Placeholder for Sales Growth Rate Over Time
export const getSalesGrowthRateOverTime = async (req, res) => {
    try {
        const salesData = await shopifyOrders.aggregate([
            {
                $addFields: {
                    createdAtDate: {
                        $dateFromString: { dateString: "$created_at" }
                    },
                    totalPriceNumber: {
                        $toDouble: "$total_price"
                    }
                }
            },
            {
                $group: {
                    _id: {
                        year: { $year: "$createdAtDate" },
                        month: { $month: "$createdAtDate" }
                    },
                    totalSales: { $sum: "$totalPriceNumber" }
                }
            },
            {
                $sort: { "_id.year": 1, "_id.month": 1 }
            }
        ]).toArray();

        // Calculate growth rate
        const growthRateData = salesData.map((data, index) => {
            if (index === 0) {
                return {
                    ...data,
                    salesGrowthRate: 0 // No previous data, so growth rate is 0
                };
            }
            const previousSales = salesData[index - 1].totalSales;
            const growthRate = ((data.totalSales - previousSales) / previousSales) * 100;
            return {
                ...data,
                salesGrowthRate: growthRate
            };
        });

        res.json(growthRateData);
    } catch (error) {
        console.error('Error fetching sales growth rate over time:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};


// Placeholder for New Customers Added Over Time
export const getNewCustomersOverTime = async (req, res) => {
    try {
        const newCustomersData = await shopifyCustomers.aggregate([
            {
                $addFields: {
                    createdAtDate: {
                        $dateFromString: { dateString: "$created_at" }
                    }
                }
            },
            {
                $group: {
                    _id: {
                        year: { $year: "$createdAtDate" },
                        month: { $month: "$createdAtDate" }
                    },
                    newCustomers: { $sum: 1 }
                }
            },
            {
                $sort: { "_id.year": 1, "_id.month": 1 }
            }
        ]).toArray();

        res.json(newCustomersData);
    } catch (error) {
        console.error('Error fetching new customers over time:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};


// Placeholder for Number of Repeat Customers
export const getRepeatCustomers = async (req, res) => {
    try {
        const repeatCustomersData = await shopifyOrders.aggregate([
            {
                $group: {
                    _id: "$customer.id",
                    orderCount: { $sum: 1 }
                }
            },
            {
                $match: { orderCount: { $gt: 1 } }
            },
            {
                $group: {
                    _id: null,
                    repeatCustomers: { $sum: 1 }
                }
            }
        ]).toArray();

        res.json(repeatCustomersData);
    } catch (error) {
        console.error('Error fetching repeat customers:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};


// Placeholder for Geographical Distribution of Customers
export const getGeographicalDistribution = async (req, res) => {
    try {
        const geographicalData = await shopifyCustomers.aggregate([
            {
                $group: {
                    _id: "$default_address.city",
                    customerCount: { $sum: 1 }
                }
            },
            {
                $sort: { customerCount: -1 }
            }
        ]).toArray();

        res.json(geographicalData);
    } catch (error) {
        console.error('Error fetching geographical distribution of customers:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};


// Placeholder for Customer Lifetime Value by Cohorts
export const getCustomerLifetimeValueByCohorts = async (req, res) => {
    try {
        const cohortData = await shopifyOrders.aggregate([
            {
                $addFields: {
                    firstPurchaseMonth: {
                        $dateToString: { format: "%Y-%m", date: { $dateFromString: { dateString: "$created_at" } } }
                    },
                    totalPriceNumber: {
                        $toDouble: "$total_price"
                    }
                }
            },
            {
                $group: {
                    _id: {
                        customer_id: "$customer.id",
                        firstPurchaseMonth: "$firstPurchaseMonth"
                    },
                    lifetimeValue: { $sum: "$totalPriceNumber" }
                }
            },
            {
                $group: {
                    _id: "$_id.firstPurchaseMonth",
                    averageLifetimeValue: { $avg: "$lifetimeValue" }
                }
            },
            {
                $sort: { "_id": 1 }
            }
        ]).toArray();

        res.json(cohortData);
    } catch (error) {
        console.error('Error fetching customer lifetime value by cohorts:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};