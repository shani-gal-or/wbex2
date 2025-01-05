const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    name: { type: String, require: true },
    address: { type: String, require: true },
    username: { type: String, required: true, unique: true }, 
    password: { type: String, required: true, unique: true },
    role: { 
        type: String, 
        enum: ['lecturer', 'coordinator'], // Allowed values
        required: true
    }
}, { collection: "faculties" });

const Faculty = mongoose.model('Faculties', facultySchema);
module.exports = Faculty;