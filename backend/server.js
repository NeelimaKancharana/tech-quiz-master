import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoutes.js'; 
import resultRouter from './routes/resultRoutes.js';

const app = express();
const PORT = 4000;

// MIDDLEWARE 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DATEBASE
connectDB();

// ROUTES
app.use('/api/auth',userRouter);
app.use('/api/results',resultRouter);

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});

