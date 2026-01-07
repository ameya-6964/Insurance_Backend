import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes/index.js';
import ErrorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Mount API Routes
app.use('/api/v1', routes);

// 404 Handler
app.use((req, res) => res.status(404).json({ success: false, message: 'API Endpoint Not Found' }));

// Global Error Handler
app.use(ErrorHandler);

export default app;