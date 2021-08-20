import 'isomorphic-unfetch';
import { config } from 'dotenv';

const environment = process.env.NODE_ENV || 'development';
if (environment === 'development') config();

export * from './api';
