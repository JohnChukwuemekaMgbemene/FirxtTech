import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Only show banner if user hasn't accepted cookies
    const accepted = localStorage.getItem('cookies-accepted');
    if (!accepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setShowBanner(false);
    // Initialize analytics here
  };

  const declineCookies = () => {
    localStorage.setItem('cookies-accepted', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm">
              We use cookies to analyze site usage and improve your experience. 
              <a href="/privacy" className="underline text-blue-300 ml-1">Learn more</a>
            </p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={declineCookies}
              className="bg-gray-600 px-4 py-2 rounded text-sm hover:bg-gray-700 transition-colors"
            >
              Decline
            </button>
            <button 
              onClick={acceptCookies}
              className="bg-blue-600 px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;