import express from "express";
import { createAcademy, deleteAcademy, fetchAcademies, updateAcademy } from "../controllers/academyController.js";

const academyRoute = express.Router();

academyRoute.get("/academy/getallacademies", fetchAcademies);
academyRoute.post("/academy/create", createAcademy);
academyRoute.put("/academy/update/:id", updateAcademy);
academyRoute.delete("/academy/delete/:id", deleteAcademy);

export default academyRoute;
