const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, require: true },
    address: { type: String, require: true },
    academicYear: { type: Number, default: 1, min: 1 },
    totalCredits: { type: Number, default: 0 },
    username: { type: String, required: true, unique: true }, 
    password: { type: String, required: true, unique: true }, 
    courses: [
        {
            course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course'},
            credits: { type: Number, require: true },
        }
    ]
}, { colletion: 'students' });

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;