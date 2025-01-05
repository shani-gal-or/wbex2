const jwt = require('jsonwebtoken');
const Student = require('../models/student');
const Faculty = require('../models/faculty');

// Sign-Up Function
const signUp = async (req, res) => {
  try {
    const { name, address, username, password, role, academicYear, totalCredits } = req.body;

    // Validate required fields
    if (!name || !address || !username || !password) {
      return res.status(400).json({ error: 'Name, address, username, and password are required.' });
    }

    if (role) {
      // Role is provided, create a Faculty member
      const faculty = new Faculty({
        name,
        address,
        username,
        password, 
        role,
      });

      await faculty.save();
      res.status(200).json({ message: 'Faculty registered successfully' });
    } else {
      // Role is not provided, create a Student
      const student = new Student({
        name,
        address,
        username,
        password,
        academicYear: academicYear || 1, // Default to 1 if not provided
        totalCredits: totalCredits || 0, // Default to 0 if not provided
      });

      await student.save();
      res.status(200).json({ message: 'Student registered successfully' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to register user' });
  }
};

// Sign-In Function
const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate required fields
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required.' });
    }

    // Check if the user is a Student or Faculty
    let user = await Student.findOne({ username });
    if (!user) {
      user = await Faculty.findOne({ username });
      if (!user) {
        return res.status(400).json({ error: 'Invalid username or password' });
      }
    }

    // Verify the password (plain text comparison)
    if (user.password !== password) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, role: user.role || 'student' }, // Add role only for Faculty
      process.env.JWT_SECRET,
      { expiresIn: '10m' }
    );

    res.status(200).json({ token, message: 'Login successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to log in' });
  }
};

module.exports = {
  signUp,
  signIn,
};
