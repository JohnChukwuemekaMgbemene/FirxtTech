import React from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedArticle, getRegularArticles } from '../utils/blogHelpers'; // Use helpers

export default function Blog() {
  const featuredArticle = getFeaturedArticle();
  const regularArticles = getRegularArticles();

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Tech Blog</h1>
      <p className="text-gray-700 mb-8">
        Stay updated with the latest tech trends, tips, and insights from our experts.
      </p>
      
      <div className="space-y-8">
        {/* Featured Post */}
        {featuredArticle && (
          <article className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-orange-600">
            <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded">Featured</span>
            <h2 className="text-2xl font-bold mt-2 mb-3 text-gray-800">
              <Link to={`/blog/${featuredArticle.slug}`} className="hover:text-blue-600">
                {featuredArticle.title}
              </Link>
            </h2>
            <p className="text-gray-600 text-sm mb-3">{featuredArticle.date} • {featuredArticle.readTime}</p>
            <p className="text-gray-700 mb-4">{featuredArticle.excerpt}</p>
            <Link to={`/blog/${featuredArticle.slug}`} className="text-blue-600 font-semibold hover:underline">
              Read More →
            </Link>
          </article>
        )}

        {/* Regular Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regularArticles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                <Link to={`/blog/${article.slug}`} className="hover:text-blue-600">
                  {article.title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-3">{article.date} • {article.readTime}</p>
              <p className="text-gray-700 mb-4">{article.excerpt}</p>
              <Link to={`/blog/${article.slug}`} className="text-blue-600 font-semibold hover:underline text-sm">
                Read More →
              </Link>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
}