const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseName: { type: String, require: true },
    lecturerName: { type: String, require: true },
    credits: { type: Number, require: true },
    maxStudents: { type: Number, require: true },
    currentNumOfStudents: { type: Number, require: true },
    students: [
        {
            name: { type: String, require: true },
        }
    ]
}, { collection: 'courses' });

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;