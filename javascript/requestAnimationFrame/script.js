const height = 400;
const width = 100;

ball.addEventListener("click", () => onClickHandler());

function makeEaseOut(timing) {
  return function (timeFraction) {
    return 1 - timing(1 - timeFraction);
  };
}

function quad(timeFraction) {
  return Math.pow(timeFraction, 2);
}

function bounce(timeFraction) {
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return (
        -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      );
    }
  }
}

const onClickHandler = () => {
  // анимация top (прыжки)
  applyAnimation({
    duration: 3000,
    timeFunc: makeEaseOut(bounce),
    drawFunc: function (progress) {
      ball.style.top = height * progress + "px";
    },
  });

  // анимация left (движение вправо)
  applyAnimation({
    duration: 3000,
    timeFunc: makeEaseOut(quad),
    drawFunc: function (progress) {
      ball.style.left = width * progress + "px";
    },
  });
};

function applyAnimation({ timeFunc, drawFunc, duration }) {
  const startTime = performance.now();

  requestAnimationFrame(function applyAnimation(time) {
    const getTime = () => {
      const currentTime = (time - startTime) / duration;

      if (currentTime > 1) {
        return 1;
      }

      return currentTime;
    };

    const partOfTime = getTime();
    const progress = timeFunc(partOfTime);

    drawFunc(progress); // отрисовать её

    if (partOfTime < 1) {
      requestAnimationFrame(applyAnimation);
    }
  });
}
