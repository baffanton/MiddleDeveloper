const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(observerCallback);

document.querySelectorAll("img").forEach((img) => {
  observer.observe(img);
});
