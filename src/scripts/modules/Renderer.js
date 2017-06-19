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
     * @private
     * @type {Array}
     */
    this.elements = Array.from(elements);
    /**
     * @private
     * @type {Path[]}
     */
    this.paths = this.elements.map(
      /**
       * @param {SVGPathElement} element
       */
      element => new Path(element, speed));
    this.reset();
  }

  reset() {
    this.paths.forEach(
      /**
       * @param {Path} path
       */
      path => path.initialize());
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
      (prev, path) => prev.then(() => path.play()),
      Promise.resolve());
  }
}
