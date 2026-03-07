// Updated intersectionObserver function
export const intersectionObserver = (
  item: Element,
  options: IntersectionObserverInit,
  callback: (isIntersecting: boolean, entry: IntersectionObserverEntry) => void
) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      callback(entry.isIntersecting, entry);
    });
  }, options);

  observer.observe(item);

  return () => observer.unobserve(item); // Return a cleanup function
};
