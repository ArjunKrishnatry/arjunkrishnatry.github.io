import { useState, useEffect } from 'react';

/**
 * Custom hook to manage dark/light theme
 * - Checks localStorage for saved preference
 * - Falls back to system preference
 * - Persists changes to localStorage
 */
export function useTheme() {
  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved;
    }
    // Fall back to system preference
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  // Update document class and localStorage when theme changes
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (theme === 'light') {
      root.classList.add('light');
      body.classList.add('light');
    } else {
      root.classList.remove('light');
      body.classList.remove('light');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle between dark and light
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return { theme, toggleTheme, setTheme };
}

export default useTheme;
