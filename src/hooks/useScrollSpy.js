import { useState, useEffect } from 'react';

/**
 * Custom hook to track which section is currently in view
 * Uses Intersection Observer for performance
 * @param {string[]} sectionIds - Array of section IDs to observe
 * @param {number} offset - Offset from top of viewport (default: 100px for header)
 */
export function useScrollSpy(sectionIds, offset = 100) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const observers = [];

    // Create an observer for each section
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: `-${offset}px 0px -50% 0px`,
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    // Cleanup observers on unmount
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [sectionIds, offset]);

  return activeSection;
}

export default useScrollSpy;
