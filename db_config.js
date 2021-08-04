import pg from "pg";

const client = new pg.Client({
    user: "postgres",
    password: "post123456" ,
    host: "localhost",
    database: "ufcFood",
    port: 5432,
})

export default client;