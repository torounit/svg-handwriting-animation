/**
 *
 * Renderer
 *
 */

/* eslint-disable no-console */

import Path from './Path';


export default class Renderer {
  constructor(elements, speed) {
    this.elements = Array.from(elements);
    this.paths = this.elements.map(element => new Path(element, speed));
  }

  reset() {
    this.paths.forEach(element => element.reset());
  }

  play() {
    return this.paths.reduce((prev, current) => {
      return prev.then(() => current.play());
    }, Promise.resolve());
  }
}
