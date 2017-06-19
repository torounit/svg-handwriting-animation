export default class Button {

  constructor(element,renderer) {
    this.element = element;
    this.renderer = renderer;
    this.element .addEventListener('click', () => this.replay(), false );
  }

  fadeIn() {
    return new Promise((resolve) => {
      return setTimeout(() => {
        this.element.classList.toggle('hidden');
        return resolve();
      }, 200);
    });
  }

  replay() {
    this.element.classList.toggle('disabled');
    this.renderer.reset();
    this.renderer.play().then(() => this.element.classList.toggle('disabled'));
  }

}
