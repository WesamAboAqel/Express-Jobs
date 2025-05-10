import express from 'express'
import jobsRoute from './src/jobs/routes.js'
import logger from './src/middleware/logger.js';
import cors from 'cors';
import { initTables } from './src/jobs/controller.js';

port = process.env.PORT || 8080
const app = express();
app.use(express.json());

app.use(cors());
app.use(logger);

app.use('/',jobsRoute)

const startServer = async () => {
    await initTables();
    app.listen(port , ()=>console.log(`The Server is running on port ${port}`));
};

startServer();
