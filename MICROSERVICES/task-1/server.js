import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { init as initDB } from './pkg/db/index.js';
import courseRoute from './routes/courseRoute.js';
import academyRoute from './routes/academyRoute.js';

async function startApp() {
  try {
    await initDB();

    dotenv.config();

    const app = express();

    app.use(bodyParser.json());

    app.use(express.urlencoded({ extended: true }));

    app.use(courseRoute);
    app.use(academyRoute);

    const PORT = process.env.PORT;

    app.listen(PORT, () => {
      console.log(`Service started on port ${PORT}`);
    });
  } catch (error) {
    console.error('App not start:', error);
    process.exit(1);
  }
}

startApp();