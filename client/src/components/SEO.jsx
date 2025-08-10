// Create src/components/SEO.jsx
import { useEffect } from 'react';

const SEO = ({ title, description, keywords, type = 'website' }) => {
  useEffect(() => {
    // Update document title
    document.title = title ? `${title} | FirxtTech` : 'FirxtTech - Professional Computer Support';
    
    // Update meta tags
    const updateMeta = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content || '');
    };

    // Update meta tags
    if (description) {
      updateMeta('description', description);
      updateMeta('og:description', description, true);
    }
    
    if (title) {
      updateMeta('og:title', title, true);
    }
    
    if (keywords) {
      updateMeta('keywords', keywords);
    }
    
    updateMeta('og:type', type, true);
    updateMeta('og:url', window.location.href, true);
    
  }, [title, description, keywords, type]);

  return null;
};

export default SEO;