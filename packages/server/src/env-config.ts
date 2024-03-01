import { config } from 'dotenv-safe';

interface DbConfig {
    mongoUri: string;
}

config({
    path: '.env',
    allowEmptyValues: true,
    example: '.env.example'
});

const envVars = Object.assign({ NODE_ENV: process.env.NODE_ENV || 'deveopment'}, process.env);

export const dbConfig: DbConfig = {
    mongoUri: envVars.MONGO_URI || ''
};