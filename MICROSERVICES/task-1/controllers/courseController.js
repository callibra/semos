import Course from "../model/courseModel.js";

// Create new Course
export const createCourse = async (req, res) => {
    try {
        const courseData = new Course(req.body);
        const { email } = courseData;
        const courseExist = await Course.findOne({ email });
        if (courseExist) {
            return res.status(400).json({ message: "Course already exists." });
        }
        const savedCourse = await courseData.save();
        res.status(200).json(savedCourse);
    } catch (error) {
        res.status(500).send({ message: error.message }); ;
    }
};

// Get all create Course
export const fetchCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        if (courses.length === 0) {
            return res.status(404).json({ message: "Course not found." });
        }
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).send({ message: error.message }); ;
    }
};

// Update Course
export const updateCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const courseExist = await Course.findOne({ _id: id });
        if (!courseExist) {
            return res.status(404).json({ message: "Course not found." });
        }
        const updatedCourse = await Course.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).send({ message: error.message }); 
    }
};

// Delete Course
export const deleteCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const courseExist = await Course.findOne({ _id: id });
        if (!courseExist) {
            return res.status(404).json({ message: "Course not found." });
        }
        await Course.findByIdAndDelete(id);
        res.status(200).json({ message: "Course deleted successfully." });
    } catch (error) {
        res.status(500).send({ message: error.message }); 
    }
};