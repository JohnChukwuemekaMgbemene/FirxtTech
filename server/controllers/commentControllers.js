const Comment = require('../models/Comment');

// Get comments for a specific article
const getComments = async (req, res) => {
  try {
    const { slug } = req.params;
    const comments = await Comment.find({ 
      articleSlug: slug,
      approved: true 
    })
    .select('name message createdAt')
    .sort({ createdAt: -1 });

    res.json({ comments });
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
};

// Create a new comment
const createComment = async (req, res) => {
  try {
    const { articleSlug, name, email, message } = req.body;

    // Basic validation
    if (!articleSlug || !name || !message) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['articleSlug', 'name', 'message']
      });
    }

    // Create comment
    const comment = new Comment({
      articleSlug: articleSlug.trim(),
      name: name.trim(),
      email: email?.trim(),
      message: message.trim(),
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });

    await comment.save();

    // Return sanitized comment data
    const responseComment = {
      _id: comment._id,
      name: comment.name,
      message: comment.message,
      createdAt: comment.createdAt
    };

    res.status(201).json(responseComment);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Failed to create comment' });
  }
};

module.exports = {
  getComments,
  createComment
};