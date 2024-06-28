const container = document.getElementById("container");
const button = document.getElementById("button");
const text = document.getElementById("text");

button.onclick = () => {
  const initialWidth = container.clientWidth;
  const initialHeight = container.clientHeight;

  container.style.width = `${initialWidth + 50}px`;
  container.style.height = `${initialHeight + 30}px`;
};

const reziseObserver = new ResizeObserver((entries) => {
  const entry = entries[0];

  const contentBoxSize = entry.contentBoxSize[0];
  text.style.fontSize = `${Math.max(1.5, contentBoxSize.inlineSize / 200)}rem`;
});

reziseObserver.observe(container);
