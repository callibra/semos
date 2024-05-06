import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { init as initDB } from './pkg/db/index.js';
import courseRoute from './routes/courseRoute.js';
import academyRoute from './routes/academyRoute.js';
import { fileURLToPath } from 'url'; // Import fileURLToPath function
import { dirname } from 'path'; // Import dirname function

async function startApp() {
  try {
    await initDB();

    dotenv.config();

    const app = express();

    app.use(bodyParser.json());
    app.use(express.urlencoded({ extended: true }));

    // Set the views directory
    const __filename = fileURLToPath(import.meta.url); // Get the filename of the current module
    const __dirname = dirname(__filename); // Get the directory name of the current module
    app.set('views', path.join(__dirname, 'views'));

    // Set EJS as the view engine
    app.set('view engine', 'ejs');

    app.use(courseRoute);
    app.use(academyRoute);

    // Define a route to render the index.ejs file
    app.get('/', (req, res) => {
      // Render the index.ejs file
      res.render('index');
    });

    const PORT = process.env.PORT || 3000; // Setting default port to 3000 if not provided in .env

    app.listen(PORT, () => {
      console.log(`Service started on port ${PORT}`);
    });
  } catch (error) {
    console.error('App not start:', error);
    process.exit(1);
  }
}

startApp();
