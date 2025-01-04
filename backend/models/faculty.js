const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    name: { type: String, require: true },
    address: { type: String, require: true },
}, { collection: "faculties" });

const Faculty = mongoose.model('Faculties', facultySchema);
module.exports = Faculty;