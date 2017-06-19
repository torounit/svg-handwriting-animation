/**
 *
 * repeat
 *
 */

import PlayHandwriting from './PlayHandwriting';

export default function replay(btn, timeout, instance, speed, interval) {
  const target = btn;
  target.addEventListener('click', () => {
    target.classList.toggle('disabled');
    instance.reset();
    instance.playAnimation();
    setTimeout(() => {
      target.classList.toggle('disabled');
    }, timeout);
  }, false);
}
