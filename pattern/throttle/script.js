const content = document.getElementById("content");
const text = "Текст ".repeat(10000);

content.innerText = text;

const progress = document.querySelector("progress");

const calcProgress = (e) => {
  console.log("Пересчет");

  const viewportHeight = content.scrollHeight;
  const scrollTop = content.scrollTop;
  const offestHeight = content.offsetHeight;

  const currentPosition = scrollTop + offestHeight;

  const percent = (currentPosition / viewportHeight) * 100;

  progress.value = percent;
};

const throttle = (call, timeout) => {
  let timer = null;

  return function perform(...args) {
    if (timer) {
      return null;
    }

    timer = setTimeout(() => {
      call(...args);

      clearTimeout(timer);
      timer = null;
    }, timeout);
  };
};

const throttledCalcProgress = throttle(calcProgress, 500);

// content.addEventListener("scroll", calcProgress);
content.addEventListener("scroll", throttledCalcProgress);
