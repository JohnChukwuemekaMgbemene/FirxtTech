import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HelpCategories from './HelpCategories';
import { blogArticles } from '../data/blog/articles';

// HighlightsSlideshow
// Slide 1: Help Categories grid
// Slides 2..N: One article per slide, with background image and bottom-left overlay
export default function HighlightsSlideshow({
  articles = blogArticles,
  intervalMs = 6000,
  publicImages = [
    '/stefan-stefancik-5p_7M5MP2Iw-unsplash.jpg',
    '/5196806681_1fa12aa36e_k.jpg',
    '/sigmund-Fa9b57hffnM-unsplash.jpg',
    '/5867419816_8bb6c96254_o.jpg',
  ],
  getImage = (slug) => `/blog-images/${slug}.jpg`,
}) {
  // Stabilize the image getter to avoid re-memos thrashing
  const getImageFn = useMemo(() => getImage, [getImage]);
  const articleSlides = useMemo(() => {
    // Featured FAQs selection in desired order
    const faqSlugs = [
      'windows-update-problems',
      'system-cleanup-optimization',
      'wifi-bluetooth-connectivity',
      'slow-performance-freezing',
    ];
    const bySlug = Object.fromEntries(articles.map(a => [a.slug, a]));
    return faqSlugs.map(slug => bySlug[slug]).filter(Boolean);
  }, [articles]);

  const slides = useMemo(() => {
    const base = [
      { type: 'categories' },
      ...articleSlides.slice(0, 4).map(a => ({ type: 'article', article: a })),
    ];
    // Assign background per slide: category gets a generic image; articles get slug-based images
  return base.map((s) => {
      if (s.type === 'article') {
    return { ...s, bg: getImageFn(s.article.slug) };
      }
      return { ...s, bg: publicImages[0] };
    });
  }, [articleSlides, publicImages, getImageFn]);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (paused || slides.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, slides.length, intervalMs]);

  const current = slides[index];
  const bgStyle = current
    ? {
        backgroundImage: `url('${current.bg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};

  return (
    <section
      className="relative w-full isolate"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative w-full min-h-[32rem] md:min-h-[42rem]" style={bgStyle}>
  {current?.type === 'categories' && (
    <div className="absolute inset-0 z-10 pointer-events-none bg-black/25 backdrop-blur-[1px]"></div>
  )}
  {current?.type === 'categories' ? (
    <div className="relative z-20 p-6 sm:p-8 h-full w-full">
      <HelpCategories />
    </div>
  ) : (
    <ArticleSlide article={current.article} />
  )}
  </div>
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => setIndex(i => (i - 1 + slides.length) % slides.length)}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-[60] pointer-events-auto inline-flex items-center justify-center h-10 w-10 rounded-full bg-black/35 text-white hover:bg-black/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setIndex(i => (i + 1) % slides.length)}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-[60] pointer-events-auto inline-flex items-center justify-center h-10 w-10 rounded-full bg-black/35 text-white hover:bg-black/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
    </section>
  );
}

function ArticleSlide({ article }) {
  const { slug, title } = article;
  return (
    <Link
      to={`/blog/${slug}`}
      aria-label={`Read: ${title}`}
  className="absolute inset-0 z-30 block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
    >
      {/* Bottom shadow for readability */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40" />
      {/* Title at bottom-left */}
  <div className="pointer-events-none absolute left-4 right-4 bottom-4 sm:left-6 sm:right-6 sm:bottom-6 z-50">
        <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold drop-shadow-md">
          {title}
        </h3>
      </div>
    </Link>
  );
}


