/**
 *
 * Renderer
 *
 */

/* eslint-disable no-console */

import Path from './Path';


export default class Renderer {
  /**
   * @param {NodeList} elements
   * @param {Number} speed
   */
  constructor(elements, speed) {
    /**
     * @type {Array}
     */
    this.elements = Array.from(elements);
    /**
     * @type {Path[]}
     */
    this.paths = this.elements.map(element => new Path(element, speed));
    this.reset();
  }

  reset() {
    this.paths.forEach(element => element.reset());
  }

  /**
   * @returns {Promise}
   */
  play() {
    return this.paths.reduce(
      /**
       * @param {Promise} prev
       * @param {Path} path
       * @returns {Promise}
       */
      (prev, path) => {
        return prev.then(() => path.play());
      },
      Promise.resolve());
  }
}
