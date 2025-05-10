import {Pool} from 'pg';

export const pool = new Pool({
    user: "wesam",
    host: "localhost",
    database: "jobs",
    password: "1382",
    port:5433
})

export default pool;