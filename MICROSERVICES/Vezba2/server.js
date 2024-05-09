import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import methodOverride from 'method-override';
import { init as initDB } from './pkg/db/index.js';
import { createAcademy, deleteAcademy, fetchAcademies, updateAcademy } from './controllers/academyController.js';
import { createCourse, deleteCourse, fetchCourses, updateCourse } from './controllers/courseController.js';
import { indexPage } from './controllers/indexController.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

initDB();
dotenv.config();

// Index Route
app.get("/", indexPage);

// Academy Routes
app.get("/academy/getallacademys", fetchAcademies);
app.post("/academy/create", createAcademy);
app.put("/academy/update/:id", updateAcademy);
app.delete("/academy/delete/:id", deleteAcademy);

// Course Routes
app.get("/course/getallcourses", fetchCourses);
app.post("/course/create", createCourse);
app.put("/course/update/:id", updateCourse);
app.delete("/course/delete/:id", deleteCourse);

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  console.log(`Service started on port ${PORT}`);
});

app.on('error', (err) => {
  console.error('Error starting the server:', err);
});