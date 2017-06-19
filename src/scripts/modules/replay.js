/**
 *
 * repeat
 *
 */

import PlayHandwriting from './PlayHandwriting';

export default function replay(target, instance) {
  target.addEventListener('click', () => {
    target.classList.toggle('disabled');
    instance.reset();
    instance.playAnimation().then(() => target.classList.toggle('disabled'));
  }, false);
}
