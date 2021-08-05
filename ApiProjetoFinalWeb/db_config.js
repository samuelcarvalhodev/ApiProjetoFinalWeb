import pg from "pg";

const client = new pg.Pool({
    user: "postgres",
    password: "159753" ,
    host: "localhost",
    database: "ufcFood",
    port: 5432,
})

export default client;