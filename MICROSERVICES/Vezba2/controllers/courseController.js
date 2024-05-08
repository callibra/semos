import Course from "../model/courseModel.js";

// Render funkcija za prikazuvanje na EJS stranite
const renderPage = (res, page, data) => {
    res.render(page, data);
};

// Kontrolor za kreiranje (ADD NEW COURSE)
export const createCourse = async (req, res) => {
    try {
        const newCourse = new Course(req.body);
        const validationError = newCourse.validateSync();
        if (validationError) {
            const errorMessage = Object.values(validationError.errors).map(error => error.message).join(', ');
            return renderPage(res, 'course', { courses: [], message: errorMessage });
        }
        const savedCourse = await newCourse.save();
        res.redirect('/course/getallcourses?successMessage=Course successfully created.');
    } catch (error) {
        return renderPage(res, 'course', { courses: [], message: error.message });
    }
};

// Kontrolor za listanje (ALL COURSE)
export const fetchCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        if (courses.length === 0) {
            return renderPage(res, 'course', { courses: [], message: "Course not found.", successMessage: req.query.successMessage });
        }
        renderPage(res, 'course', { courses, successMessage: req.query.successMessage });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Kontrolor za editiranje (UPDATE)
export const updateCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const courseExist = await Course.findOne({ _id: id });
        if (!courseExist) {
            return renderPage(res, 'course', { courses: [], message: "Course not found.", successMessage: req.query.successMessage });
        }
        const updatedCourse = await Course.findByIdAndUpdate(id, req.body, { new: true });
        res.redirect('/course/getallcourses?successMessage=Course successfully updated.&type=update-course');
    } catch (error) {
        renderPage(res, 'course', { courses: [], message: error.message });
    }
};

// Kontrolor za brisenje (DELLETE)
export const deleteCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const courseExist = await Course.findById(id);
        if (!courseExist) {
            return renderPage(res, 'course', { courses: [], message: "Course not found." });
        }
        await Course.findByIdAndDelete(id);
        const courses = await Course.find();
        res.redirect('/course/getallcourses?successMessage=Course successfully deleted.&type=delete-course');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};