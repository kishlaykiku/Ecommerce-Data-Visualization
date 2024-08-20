import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import shopifyRoutes from './routes/shopifyRoutes.js';

dotenv.config();

const app = express();

// Connecting to the database
connectDB();

// Enabling CORS
app.use(cors(
    {
        origin: ['https://insightify-ten.vercel.app/'],
        methods: ['GET', 'POST'],
        credentials: true
    }
));

app.use(express.json());

// Using Shopify routes
app.use('/api/shopify', shopifyRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});