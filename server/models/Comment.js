const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  articleSlug: {
    type: String,
    required: true,
    index: true
  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100
  },
  email: {
    type: String,
    trim: true,
    maxLength: 200
  },
  message: {
    type: String,
    required: true,
    trim: true,
    maxLength: 2000
  },
  approved: {
    type: Boolean,
    default: true
  },
  ipAddress: {
    type: String
  },
  userAgent: {
    type: String
  }
}, {
  timestamps: true
});

// Index for faster queries
commentSchema.index({ articleSlug: 1, approved: 1, createdAt: -1 });

module.exports = mongoose.model('Comment', commentSchema);