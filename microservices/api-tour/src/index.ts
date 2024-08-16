import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import tourRouter from './routes/tourRoutes'
import cors from "cors";
import { AppError } from '../src/utils/appError';
import globalErrorHandler from '../src/controllers/errorController';

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/api/v1/tours', tourRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can´t find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export default app;


