const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, require: true },
    address: { type: String, require: true },
    academicYear: { type: Number, require: true },
    totalCredits: { type: Number, require: true },
    courses: [
        {
            courseName: { type: String, require: true},
            credits: { type: Number, require: true },
        }
    ]
}, { colletion: 'students' });

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;