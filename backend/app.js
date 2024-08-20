import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import shopifyRoutes from './routes/shopifyRoutes.js';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Enable CORS
app.use(cors());

app.use(express.json());

// Use Shopify routes
app.use('/api/shopify', shopifyRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
