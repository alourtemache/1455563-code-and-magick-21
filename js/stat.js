
'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const INTERVAL_WIDTH = 50;
const BAR_HEIGHT = 150;
const BAR_WIDTH = 40;
const font = {
  SIZE: `16px`,
  FAMILY: `PT Mono`
};

const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getHsl = () => {
  return `hsl(244 ${100 * Math.random()}% ${100 * Math.random()}%)`;
};

const getMaxElement = (arr) => {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = (ctx, names, times) => {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );

  ctx.font = `${font.SIZE} ${font.FAMILY}`;
  ctx.textBaseline = `hanging`;
  ctx.fillStyle = `#000`;
  ctx.fillText(
      `Ура вы победили!`,
      CLOUD_X + 2 * GAP,
      INTERVAL_WIDTH / 2
  );
  ctx.fillText(
      `Список результатов:`,
      CLOUD_X + 2 * GAP,
      INTERVAL_WIDTH
  );

  ctx.translate(CLOUD_X, CLOUD_HEIGHT + GAP);

  let maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    ctx.fillStyle = `#000`;
    ctx.fillText(
        names[i],
        INTERVAL_WIDTH + (BAR_WIDTH + INTERVAL_WIDTH) * i,
        -(CLOUD_Y + 2 * GAP)
    );
    ctx.fillStyle = names[i] === `Вы`
      ? `rgba(255, 0, 0, 1)`
      : getHsl()
    ;
    ctx.fillRect(
        INTERVAL_WIDTH + (BAR_WIDTH + INTERVAL_WIDTH) * i,
        -BAR_WIDTH,
        BAR_WIDTH,
        -(BAR_HEIGHT * times[i]) / maxTime
    );
    ctx.fillStyle = `#000`;
    ctx.fillText(
        Math.floor(times[i]),
        INTERVAL_WIDTH + (BAR_WIDTH + INTERVAL_WIDTH) * i,
        -(BAR_HEIGHT * times[i]) / maxTime - INTERVAL_WIDTH - GAP
    );
  }
};
