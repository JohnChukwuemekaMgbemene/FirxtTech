const express = require('express');
const { getComments, createComment } = require('../controllers/commentControllers');

const router = express.Router();

// Get comments for a specific article
router.get('/:slug', getComments);

// Create a new comment
router.post('/', createComment);

// Test route
router.get('/test/ping', (req, res) => {
  res.json({ 
    message: 'Comments API is working!',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;