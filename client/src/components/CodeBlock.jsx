import React, { useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // You can switch theme, e.g. 'github-dark.css'
import { Copy as CopyIcon, Check as CheckIcon } from 'lucide-react';

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
      <button
        type="button"
        onClick={handleCopy}
        className="shrink-0 rounded-md bg-white px-2 py-1 text-xs text-gray-700 shadow ring-1 ring-gray-200 hover:bg-gray-50 focus:outline-none"
        title="Copy"
        aria-label="Copy code to clipboard"
      >
        {copied ? (
          <span className="flex items-center gap-1">
            <CheckIcon className="h-4 w-4 text-green-600" />
            Copied
          </span>
        ) : (
          <CopyIcon className="h-4 w-4 text-gray-700" />
        )}
      </button>
    </div>
  );
};

export default CodeBlock;