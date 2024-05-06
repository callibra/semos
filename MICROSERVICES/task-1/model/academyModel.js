import mongoose from 'mongoose';
import validator from 'validator';

const academySchema = new mongoose.Schema({
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
    },
    description: {
        type: String,
        required: true
    }
});

const Academy = mongoose.model('Academy', academySchema);

export default Academy;

