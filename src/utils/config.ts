import dotenv from 'dotenv';
dotenv.config();

export const DB_HOST: string = process.env.DB_HOST || 'localhost';
export const DB_USER: string = process.env.DB_USER || 'root';
export const DB_PASSWORD: string = process.env.DB_PASSWORD || 'password';
export const DB_NAME: string = process.env.DB_HOST || 'database';
export const DB_PORT: number = Number(process.env.DB_PORT) || 3306;
export const PRIVATE: string = process.env.PRIVATE || '';
