import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getArticleBySlug } from '../utils/blogHelpers';
import CodeBlock from '../components/CodeBlock';
import CommentSection from '../components/CommentSection';
import SEO from '../components/SEO';
import BackToTop from '../components/BackToTop';
import {
  ArrowLeft,
  CalendarDays,
  Timer,
  Eye,
  ListChecks,
  Tag,
  Lightbulb,
  ChevronRight,
  Copy as CopyIcon,
  Check as CheckIcon,
} from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (article) {
      fetch(`/blog-content/${article.slug}.md`)
        .then((response) => {
          if (!response.ok) throw new Error('Markdown file not found');
          return response.text();
        })
        .then((markdownContent) => {
          setContent(markdownContent);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Content not found:', err);
          setError(true);
          setLoading(false);
        });
    }
  }, [article]);

  const getCategoryColors = (category) => {
    switch (category) {
      case 'Windows':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-500',
          badge: 'bg-blue-100 text-blue-800',
          accent: 'text-blue-600',
        };
      case 'Hardware':
        return {
          bg: 'bg-green-50',
          border: 'border-green-500',
          badge: 'bg-green-100 text-green-800',
          accent: 'text-green-600',
        };
      case 'Performance':
        return {
          bg: 'bg-orange-50',
          border: 'border-orange-500',
          badge: 'bg-orange-100 text-orange-800',
          accent: 'text-orange-600',
        };
      case 'Software':
        return {
          bg: 'bg-purple-50',
          border: 'border-purple-500',
          badge: 'bg-purple-100 text-purple-800',
          accent: 'text-purple-600',
        };
      case 'Networking':
        return {
          bg: 'bg-teal-50',
          border: 'border-teal-500',
          badge: 'bg-teal-100 text-teal-800',
          accent: 'text-teal-600',
        };
      case 'Operating System':
        return {
          bg: 'bg-indigo-50',
          border: 'border-indigo-500',
          badge: 'bg-indigo-100 text-indigo-800',
          accent: 'text-indigo-600',
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-500',
          badge: 'bg-gray-100 text-gray-800',
          accent: 'text-gray-600',
        };
    }
  };

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 text-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-8">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Article Not Found</h1>
          <p className="text-red-700 mb-4">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 text-center">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-blue-700 font-medium">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 text-center">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
          <h1 className="text-2xl font-bold text-yellow-700 mb-4">Content Not Available</h1>
          <p className="text-yellow-600 mb-4">Sorry, the article content couldn't be loaded.</p>
          <Link to="/blog" className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const colors = getCategoryColors(article.category);

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <SEO
          title={article.title}
          description={article.excerpt}
          keywords={article.tags.join(', ')}
          type="article"
        />

        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>

        <header className={`${colors.bg} ${colors.border} border-l-4 rounded-r-lg p-8 mb-8`}>
          <div className="mb-4">
            <span className={`${colors.badge} px-3 py-1 rounded-full text-sm font-semibold`}>
              {article.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-gray-800 leading-tight">{article.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
            <div className="flex items-center">
              <CalendarDays className="mr-2 h-4 w-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <Timer className="mr-2 h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center">
              <Eye className="mr-2 h-4 w-4" />
              <span>Tech Support Guide</span>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">{article.excerpt}</p>
        </header>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <ListChecks className="mr-2 h-5 w-5 text-gray-700" />
            Quick Navigation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <a href="#quick-fixes" className="text-blue-600 hover:text-blue-800 hover:underline">• Quick Fixes</a>
            <a href="#detailed-solutions" className="text-blue-600 hover:text-blue-800 hover:underline">• Detailed Solutions</a>
            <a href="#prevention-tips" className="text-blue-600 hover:text-blue-800 hover:underline">• Prevention Tips</a>
            <a href="#troubleshooting" className="text-blue-600 hover:text-blue-800 hover:underline">• Advanced Troubleshooting</a>
          </div>
        </div>

        <article className="prose prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: (props) => (
                <h1
                  className={`text-3xl font-bold mt-12 mb-6 ${colors.accent} border-b-2 ${colors.border} pb-2 text-left`}
                  {...props}
                />
              ),
              h2: (props) => (
                <h2 className="text-2xl font-bold mt-10 mb-5 text-gray-800 flex items-start text-left">
                  <span className={`w-1 h-8 ${colors.border.replace('border-', 'bg-')} mr-3 rounded flex-shrink-0 mt-1`} />
                  <span {...props} />
                </h2>
              ),
              h3: (props) => (
                <h3 className={`text-xl font-semibold mt-8 mb-4 ${colors.accent} text-left`} {...props} />
              ),
              h4: (props) => (
                <h4 className={`text-lg font-semibold mt-6 mb-3 text-gray-700 text-left`} {...props} />
              ),
              p: (props) => <p className="mb-6 text-gray-700 leading-8 text-lg text-left" {...props} />,
              ul: (props) => <ul className="mb-6 space-y-3 pl-6 text-left" {...props} />,
              li: (props) => (
                <li className="flex items-start text-gray-700 text-left">
                  <ChevronRight className={`${colors.accent} mr-3 mt-1 h-4 w-4 flex-shrink-0`} />
                  <div className="flex-1 min-w-0" {...props} />
                </li>
              ),
              ol: (props) => <ol className="mb-6 space-y-3 pl-6 list-decimal text-left" {...props} />,
              code({ inline, className, children, ...props }) {
                return (
                  <CodeBlock inline={inline} className={className} {...props}>
                    {children}
                  </CodeBlock>
                );
              },
              pre: ({ children }) => <>{children}</>,
              blockquote: (props) => (
                <blockquote className={`${colors.border} border-l-4 ${colors.bg} p-6 my-8 italic rounded-r-lg`}>
                  <div className="flex items-start">
                    <Lightbulb className={`${colors.accent} mr-3 h-5 w-5 flex-shrink-0`} />
                    <div {...props} />
                  </div>
                </blockquote>
              ),
              table: (props) => (
                <div className="overflow-x-auto my-8 rounded-lg border border-gray-200">
                  <table className="min-w-full" {...props} />
                </div>
              ),
              th: (props) => (
                <th className={`${colors.bg} border border-gray-300 px-4 py-3 font-semibold text-left`} {...props} />
              ),
              td: (props) => <td className="border border-gray-300 px-4 py-3" {...props} />,
            }}
          >
            {content}
          </ReactMarkdown>
        </article>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className={`${colors.bg} rounded-lg p-6`}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <Tag className="mr-2 h-5 w-5" />
              Related Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className={`${colors.badge} px-3 py-2 rounded-full text-sm font-medium hover:shadow-md transition`}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </footer>

        <CommentSection articleSlug={slug} />

        <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need More Help?</h3>
          <p className="mb-6 text-blue-100">Our tech support experts are here to help you solve any computer problem.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/submit-ticket"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Submit a Ticket
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>

      <BackToTop />
    </>
  );
}

// Command Block Component for special command formatting
const CommandBlock = ({ command }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative bg-black text-green-400 rounded-lg p-4 my-6 font-mono group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 text-sm ml-2">Command Prompt</span>
        </div>

        <button
          onClick={handleCopy}
          className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm font-medium transition-all duration-200 opacity-0 group-hover:opacity-100 flex items-center gap-2"
          title="Copy command"
        >
          {copied ? (
            <>
              <CheckIcon className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <CopyIcon className="w-4 h-4" />
              Copy
            </>
          )}
        </button>
      </div>

      <div className="flex items-center">
        <span className="text-yellow-400 mr-2">C:\&gt;</span>
        <span className="text-green-400">{command}</span>
      </div>
    </div>
  );
};