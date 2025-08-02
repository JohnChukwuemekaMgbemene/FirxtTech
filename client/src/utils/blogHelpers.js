import { blogArticles } from '../data/blog/articles';

export const getFeaturedArticle = () => {
  return blogArticles.find(article => article.featured);
};

export const getRegularArticles = () => {
  return blogArticles.filter(article => !article.featured);
};

export const getArticleBySlug = (slug) => {
  return blogArticles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category) => {
  return blogArticles.filter(article => article.category === category);
};

export const getArticlesByTag = (tag) => {
  return blogArticles.filter(article => article.tags.includes(tag));
};

// Add these useful helpers:
export const getRecentArticles = (limit = 5) => {
  return blogArticles
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

export const getRelatedArticles = (currentSlug, limit = 3) => {
  const currentArticle = getArticleBySlug(currentSlug);
  if (!currentArticle) return [];
  
  return blogArticles
    .filter(article => 
      article.slug !== currentSlug && 
      (article.category === currentArticle.category || 
       article.tags.some(tag => currentArticle.tags.includes(tag)))
    )
    .slice(0, limit);
};

export const getAllCategories = () => {
  return [...new Set(blogArticles.map(article => article.category))];
};

export const getAllTags = () => {
  return [...new Set(blogArticles.flatMap(article => article.tags))];
};