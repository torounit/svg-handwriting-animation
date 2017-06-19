/**
 *
 * main
 *
 */

/* eslint-disable no-console */

import PlayHandwriting from './modules/PlayHandwriting';
import replay from './modules/replay';

const path1 = Array.from(document.querySelectorAll('#js-mask path'));
const path2 = Array.from(document.querySelectorAll('#js-clip path'));
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const ph1 = new PlayHandwriting(path1, 15);
const ph2 = new PlayHandwriting(path2, 15);

const resetAll = () => {
  const wait = document.getElementById('js-wait');
  wait.classList.add('fadeout');
  ph1.reset();
  ph2.reset();
};

const btnShow1 = () => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      btn1.classList.toggle('hidden');
      return resolve();
    }, 200);
  });
};

const btnShow2 = () => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      btn2.classList.toggle('hidden');
      return resolve();
    }, 200);
  });
};

const initPromise = () => Promise.resolve()
  .then(resetAll)
  .then(() => ph1.playAnimation())
  .then(btnShow1)
  .then(() => ph2.playAnimation())
  .then(btnShow2);


window.onload = () => initPromise();

replay(btn1, ph1);
replay(btn2, ph2);
