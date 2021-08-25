require('dotenv').config();
import pg from "pg";

const client = new pg.Pool({
    user: process.env.DB_user,
    password: process.env.DB_password,
    host: process.env.DB_host,
    database: process.env.DB_database,
    port: process.env.DB_port,
})

export default client;