const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminUserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
adminUserSchema.pre('save', async function (next) {
  if (!this.isModified('passwordHash')) return next();
  this.passwordHash = await bcrypt.hash(this.passwordHash, 10);
  next();
});

// Compare password method
adminUserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.passwordHash);
};

module.exports = mongoose.model('AdminUser', adminUserSchema);

