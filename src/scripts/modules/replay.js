/**
 *
 * repeat
 *
 */

export default function replay(target, renderer) {
  target.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('disabled');
    renderer.reset();
    renderer.play().then(() => event.currentTarget.classList.toggle('disabled'));
  }, false);
}
