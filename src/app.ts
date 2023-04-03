import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { getConnection } from './infrastructure/database/postgres-connection';
import helloRoutes from './api/routes/hello.routes';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// Middleware for handling CORS
app.use(cors());

// Middleware for logging
app.use(morgan('combined'));

// Middleware for JSON request parsing
app.use(express.json());

// Middleware for URL-encoded request parsing
app.use(express.urlencoded({ extended: true }));

// Register routes
app.use('/api/hello', helloRoutes);

// Catch-all route for handling 404 errors
app.use('*', (req: Request, res: Response) => {
    res.status(404).json({ message: 'Resource not found' });
});

export default app;
