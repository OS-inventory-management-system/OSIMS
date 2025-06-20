import express from 'express'
import cors from 'cors'
import {Client} from 'pg'

// const client = new Client({
//     user: 'postgres',
//     password: 'hanshotfirst21',
//     port:5432,
//     host: 'ims.c29y4e4eay89.us-east-1.rds.amazonaws.com',
//     database: 'postgres',
//     ssl: {rejectUnauthorized:false}
// })

const app = express()


app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

// async function connect() {
//   try {
//     await client.connect();
//     const res = await client.query('SELECT NOW()');
//     console.log('Connected:', res.rows[0]);
//   } catch (err) {
//     console.error('Connection error:', err);
//   } finally {
//     await client.end();
//   }
// }

// connect()

const port = 3000
app.listen(port, ()=> console.log(`Server listening on port ${port}`))