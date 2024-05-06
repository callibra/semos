import mongoose from 'mongoose';
import validator from 'validator';

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail, 
            message: 'Email must be valid' 
        }
    },
    type: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true,
        min: 1 
    }
});

const Course = mongoose.model('Course', courseSchema);

export default Course;
