// useLoading.js
import { useState, useCallback } from 'react';

export function useLoading() {
  const [loading, setLoading] = useState(false);

  const wrap = useCallback(async (fn) => {
    setLoading(true);
    try {
      const res = await fn();
      return res;
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, wrap };
}

// Spinner.jsx
export function Spinner({ size = 'w-5 h-5', color = 'text-white mx-auto' }) {
  return (
    <svg className={`${size} animate-spin ${color}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
      <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"/>
    </svg>
  );
}
