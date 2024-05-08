import Course from "../model/courseModel.js";
import Academy from "../model/academyModel.js";

// Render funkcija za prikazuvanje na EJS stranite
const renderPage = (res, page, data) => {
    res.render(page, data);
};

// Kontrolor za listanje na courses i academys na index.ejs
export const indexPage = async (req, res) => {
    try {
        const courses = await Course.find();
        const academys = await Academy.find();
        // No courses found
        if (courses.length === 0) {
            return res.render('index', { courses: [], academys, courseMessage: "No courses found.", academyMessage: "No academies found.", successMessage: req.query.successMessage });
        }
        // No academys found
        if (academys.length === 0) {
            return res.render('index', { courses, academys: [], courseMessage: "No courses found.", academyMessage: "No academies found.", successMessage: req.query.successMessage });
        }
        res.render('index', { courses, academys, courseMessage: "", academyMessage: "" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};




