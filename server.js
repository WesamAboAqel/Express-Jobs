import express from 'express'
import jobsRoute from './src/jobs/routes.js'
import logger from './src/middleware/logger.js';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors());
app.use(logger);




app.use('/',jobsRoute)

app.listen(8080, ()=>console.log(`The Server is running on port 8080`));