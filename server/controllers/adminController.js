const jwt = require('jsonwebtoken');
const AdminUser = require('../models/AdminUser');

// Admin login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' });
    }

    // Find admin user
    const admin = await AdminUser.findOne({ email: email.toLowerCase() });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password (note: passwordHash is actually the plain password during seed, but comparePassword will hash it)
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      // If compare fails, try direct comparison for seeded passwords
      if (admin.passwordHash === password) {
        // This means it's a plain password from seed, hash it properly
        admin.passwordHash = await require('bcryptjs').hash(password, 10);
        await admin.save();
      } else {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: admin._id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      token,
      user: {
        id: admin._id,
        email: admin.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

