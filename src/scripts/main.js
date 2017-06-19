/**
 *
 * main
 *
 */

/* eslint-disable no-console */

import Renderer from './modules/Renderer';
import Button from './modules/Button';

const renderer1 = new Renderer(document.querySelectorAll('#js-mask path'), 15);
const renderer2 = new Renderer(document.querySelectorAll('#js-clip path'), 15);

const btn1 = new Button(document.getElementById('btn1'), renderer1);
const btn2 = new Button(document.getElementById('btn2'), renderer2);

const resetAll = () => {
  const wait = document.getElementById('js-wait');
  wait.classList.add('fadeout');
};

const initPromise = () => Promise.resolve()
  .then(resetAll)
  .then(() => renderer1.play())
  .then(() => btn1.fadeIn())
  .then(() => renderer2.play())
  .then(() => btn2.fadeIn());


window.onload = () => initPromise();
