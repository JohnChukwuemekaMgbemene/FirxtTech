import React, { useState, useEffect } from 'react';

const CommentSection = ({ articleSlug }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  // Load comments from localStorage (temporary storage)
  useEffect(() => {
    const savedComments = localStorage.getItem(`comments-${articleSlug}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, [articleSlug]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.name || !newComment.message) return;

    setLoading(true);
    
    const comment = {
      id: Date.now(),
      name: newComment.name,
      email: newComment.email,
      message: newComment.message,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedComments = [comment, ...comments];
    setComments(updatedComments);
    localStorage.setItem(`comments-${articleSlug}`, JSON.stringify(updatedComments));
    
    setNewComment({ name: '', email: '', message: '' });
    setLoading(false);
  };

  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      {/* Comment Form */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Leave a Comment</h3>
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Share your thoughts..."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Posting...' : 'Post Comment'}
          </button>
        </form>
      </div>

      {/* Comments List */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-6">
          Comments ({comments.length})
        </h3>
        
        {comments.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No comments yet. Be the first to share your thoughts!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {comment.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{comment.name}</h4>
                      <p className="text-sm text-gray-500">{comment.date} at {comment.time}</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{comment.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;