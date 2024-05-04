import express from "express";
import { createCourse, deleteCourse, fetchCourses, updateCourse } from "../controllers/courseController.js";

const courseRoute = express.Router();

courseRoute.get("/course/getallcourses", fetchCourses);
courseRoute.post("/course/create", createCourse);
courseRoute.put("/course/update/:id", updateCourse);
courseRoute.delete("/course/delete/:id", deleteCourse);

export default courseRoute;