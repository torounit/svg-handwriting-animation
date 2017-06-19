export default class Button {
  /**
   * @param {HTMLElement} element
   * @param {Renderer} renderer
   */
  constructor(element,renderer) {
    this.element = element;
    this.renderer = renderer;
    this.element.addEventListener('click', () => this.replay(), false );
  }

  /**
   *
   * @returns {Promise}
   */
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
    return this.renderer.play().then(() => this.element.classList.toggle('disabled'));
  }

}
