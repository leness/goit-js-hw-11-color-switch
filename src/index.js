const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
};

refs.btnStart.addEventListener('click', startClick);
refs.btnStop.addEventListener('click', stopClick);

let timerId;

function startClick() {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
  }, 1000);
  refs.btnStart.disabled = true;
};

function stopClick() {
 clearInterval(timerId);
  refs.btnStart.disabled = false;
}
 
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

