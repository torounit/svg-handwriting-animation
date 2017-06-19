/**
 *
 * main
 *
 */

/* eslint-disable no-console */

import Renderer from './modules/Renderer';
import replay from './modules/replay';

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const renderer1 = new Renderer(document.querySelectorAll('#js-mask path'), 15);
const renderer2 = new Renderer(document.querySelectorAll('#js-clip path'), 15);

const resetAll = () => {
  const wait = document.getElementById('js-wait');
  wait.classList.add('fadeout');
  renderer1.reset();
  renderer2.reset();
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
  .then(() => renderer1.play())
  .then(btnShow1)
  .then(() => renderer2.play())
  .then(btnShow2);


window.onload = () => initPromise();

replay(btn1, renderer1);
replay(btn2, renderer2);
