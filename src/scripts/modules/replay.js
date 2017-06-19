/**
 *
 * repeat
 *
 */

export default function replay(target, renderer) {
  target.addEventListener('click', () => {
    target.classList.toggle('disabled');
    renderer.reset();
    renderer.play().then(() => target.classList.toggle('disabled'));
  }, false);
}
