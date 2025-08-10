import React, { useState, useEffect } from 'react';

const CommentSection = ({ articleSlug }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  // Load comments from API
  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        setError('');
        
        const response = await fetch(`${API_URL}/api/comments/${articleSlug}`);
        
        if (response.ok) {
          const data = await response.json();
          setComments(data.comments || []);
        } else {
          console.error('Failed to fetch comments:', response.status);
          // Fallback to localStorage for offline capability
          loadLocalComments();
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
        // Fallback to localStorage
        loadLocalComments();
      } finally {
        setLoading(false);
      }
    };

    const loadLocalComments = () => {
      const savedComments = localStorage.getItem(`comments-${articleSlug}`);
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      }
    };

    fetchComments();
  }, [articleSlug, API_URL]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!newComment.name.trim() || !newComment.message.trim()) {
      setError('Name and message are required');
      return;
    }

    setSubmitting(true);
    setError('');
    
    try {
      const commentData = {
        articleSlug,
        name: newComment.name.trim(),
        email: newComment.email.trim(),
        message: newComment.message.trim()
      };

      const response = await fetch(`${API_URL}/api/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });

      if (response.ok) {
        const savedComment = await response.json();
        
        // Add new comment to the top of the list
        setComments([savedComment, ...comments]);
        
        // Clear form
        setNewComment({ name: '', email: '', message: '' });
        
        // Show success message
        setError(''); // Clear any errors
        
        console.log('✅ Comment saved to database');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save comment');
      }
    } catch (error) {
      console.error('Error saving comment:', error);
      setError('Failed to save comment. Please try again.');
      
      // Fallback to localStorage
      const fallbackComment = {
        _id: Date.now().toString(),
        name: newComment.name.trim(),
        message: newComment.message.trim(),
        createdAt: new Date().toISOString(),
      };

      const updatedComments = [fallbackComment, ...comments];
      setComments(updatedComments);
      localStorage.setItem(`comments-${articleSlug}`, JSON.stringify(updatedComments));
      
      // Clear form even on fallback
      setNewComment({ name: '', email: '', message: '' });
      
      console.log('💾 Comment saved to localStorage as fallback');
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      return 'Yesterday at ' + date.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
    }
  };

  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      {/* Comment Form */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Leave a Comment</h3>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                required
                value={newComment.name}
                onChange={(e) => setNewComment({...newComment, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                placeholder="Your name"
                disabled={submitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email (optional)
              </label>
              <input
                type="email"
                value={newComment.email}
                onChange={(e) => setNewComment({...newComment, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                placeholder="your@email.com"
                disabled={submitting}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Comment *
            </label>
            <textarea
              required
              rows={4}
              value={newComment.message}
              onChange={(e) => setNewComment({...newComment, message: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              placeholder="Share your thoughts..."
              disabled={submitting}
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Posting...
              </span>
            ) : (
              'Post Comment'
            )}
          </button>
        </form>
      </div>

      {/* Comments List */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-6">
          Comments ({comments.length})
        </h3>
        
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-500 mt-2">Loading comments...</p>
          </div>
        ) : comments.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <div className="text-4xl mb-4">💬</div>
            <p className="text-lg font-medium">No comments yet</p>
            <p>Be the first to share your thoughts!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment._id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {comment.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{comment.name}</h4>
                      <p className="text-sm text-gray-500">{formatDate(comment.createdAt)}</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{comment.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;