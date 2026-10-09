import { useEffect } from 'react';

/**
 * Custom React hook for high-performance scroll-triggered reveal animations.
 * Observes all elements with the '.reveal' class and activates '.is-visible'.
 * Also uses a MutationObserver so dynamically rendered elements (like filtered items)
 * in the viewport are immediately revealed.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeAll = () => {
      const elements = document.querySelectorAll('.reveal:not(.is-visible)');
      elements.forEach(el => observer.observe(el));
    };

    observeAll();

    // Watch for dynamic DOM insertions
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
