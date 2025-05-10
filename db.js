import {Pool} from 'pg';

export const pool = new Pool({
    user: "wesam",
    host: "localhost",
    database: "jobs",
    password: process.env.DATABASE_PASSWORD,
    port:5433
})

export default pool;