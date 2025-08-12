import React, { useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // You can switch theme, e.g. 'github-dark.css'

const CodeBlock = ({ children, className, inline, ...props }) => {
  const [copied, setCopied] = useState(false);

  const rawCode = Array.isArray(children)
    ? children.join('')
    : typeof children === 'string'
      ? children
      : children?.props?.children || '';

  // Fallback: treat as inline if no newline and no language class
  const isInline = inline ?? (!/\n/.test(rawCode) && !(className || '').includes('language-'));

  // Extract language
  const match = /language-([\w-]+)/.exec(className || '');
  const lang = match ? match[1] : undefined;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rawCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Inline code: rounded “chip” with monospace font, remains inline
  if (isInline) {
    return (
      <code
        className="inline-cmd align-baseline font-mono text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-md px-1.5 py-0.5 whitespace-normal break-words max-w-full"
        {...props}
      >
        {rawCode}
      </code>
    );
  }

  // Block code: full-width container + horizontal scrolling + syntax highlighting
  let highlighted = rawCode;
  try {
    if (lang && hljs.getLanguage(lang)) {
      highlighted = hljs.highlight(rawCode, { language: lang }).value;
    } else {
      highlighted = hljs.highlightAuto(rawCode).value;
    }
  } catch {
    // Fallback to rawCode if highlighting fails
    highlighted = rawCode;
  }

  return (
    <div className="my-4 flex flex-wrap items-start gap-2">
      {/* Code container spans article width; shrinks before wrapping */}
      <div className="min-w-0 flex-1">
        <div className="w-full rounded-lg border border-gray-300 bg-white">
          <pre className="m-0 w-full overflow-x-auto whitespace-pre px-2 py-1 text-left leading-[1.6]">
            <code
              className={`hljs font-mono text-sm ${lang ? `language-${lang}` : ''}`}
              dangerouslySetInnerHTML={{ __html: highlighted }}
              {...props}
            />
          </pre>
        </div>
      </div>

      {/* Copy button outside, after the container; won’t overlay and will wrap below on very small screens */}
      <button
        type="button"
        onClick={handleCopy}
        className="shrink-0 rounded-md bg-white px-2 py-1 text-xs text-gray-700 shadow ring-1 ring-gray-200 hover:bg-gray-50 focus:outline-none"
        title="Copy"
        aria-label="Copy code to clipboard"
      >
        {copied ? (
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.415l-7.999 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414l3.293 3.292 7.292-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Copied
          </span>
        ) : (
          <svg className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M8 3a1 1 0 011-1h6a1 1 0 011 1v11a1 1 0 11-2 0V4H9a1 1 0 01-1-1z" />
            <path d="M4 6a2 2 0 012-2h6a1 1 0 110 2H6v8a1 1 0 11-2 0V6z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default CodeBlock;