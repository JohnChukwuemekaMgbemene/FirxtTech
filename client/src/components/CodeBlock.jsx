import React, { useState } from 'react';

const CodeBlock = ({ children, className, inline, ...props }) => {
  const [copied, setCopied] = useState(false);
  
  // Extract the code content
  const code = children?.props?.children || children;
  
  // Extract language from className (e.g., "language-cmd" -> "cmd")
  const language = className?.replace('language-', '') || 'code';
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // For inline code, return simple styling
  if (inline) {
    return (
      <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-mono text-sm" {...props}>
        {children}
      </code>
    );
  }

  // For code blocks, return with clean container design
  return (
    <div className="my-6 border border-gray-300 rounded-lg overflow-hidden shadow-sm">
      {/* Header with language and copy button */}
      <div className="bg-gray-200 px-4 py-2 flex items-center justify-between border-b border-gray-300">
        <span className="text-sm font-medium text-gray-700 capitalize">
          {language}
        </span>
        
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm text-green-600">Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"/>
              </svg>
              <span className="text-sm">Copy</span>
            </>
          )}
        </button>
      </div>
      
      {/* Code Content */}
      <div className="bg-gray-100 p-4">
        <pre className="overflow-x-auto text-left">
          <code 
            className="text-black font-mono text-sm leading-relaxed block text-left" 
            style={{ fontFamily: '"Courier New", monospace' }}
            {...props}
          >
            {children}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;