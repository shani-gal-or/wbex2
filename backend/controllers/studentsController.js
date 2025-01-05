const Student = require('../models/student');
const Course = require('../models/course');

// Fetch all registered courses for the logged-in student
const getMyCourses = async (req, res) => {

    try {
        const student = await Student.findById(req.user.id)
            .populate({
                path: 'courses.course',
                model: 'Course',
                select: 'courseName credits'
            });

        if (!student){
            return res.status(404).json({ error: "student not found" });
        }
        if (student.courses.length === 0) {
            return res.status(200).json({ courses: [] });
        }
        const courses = student.courses.map(course => ({
            courseName: course.course ? course.course.courseName : 'Unknown', 
            credits: course.credits || 0,
        }));

    return res.status(200).json(courses);
    } catch (err) {
        console.error('Error in getMyCourses:', err);
        res.status(500).json({ error: "failed to fatch courses" });
    }
};

// Register for a new course
const registerToNewCourse = async (req, res) => {

};


// delete registration form course
const deleteRegistration = async (req, res) => {

};

// switch coureses
const editCourse = async (req, res) => {

};

module.exports = {
    getMyCourses,
    registerToNewCourse,
    deleteRegistration,
    editCourse,
};