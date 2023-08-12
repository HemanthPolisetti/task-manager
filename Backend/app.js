import express, { urlencoded } from 'express';
import { router } from './routers/router.js';
import connectDB from './config/config.js';
import dotenv, { config } from 'dotenv';
import cors from 'cors';
const app = express();
dotenv.config()
connectDB();
app.use(cors());
app.use(express.json())
app.use('/api',router)

app.listen(process.env.PORT||3003,()=>{
    console.log('server is running on port 3003')
})
