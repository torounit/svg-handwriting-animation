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
     * @param {SVGPathElement} element
     */
    const createPath = (element) => {
      return new Path(element, speed);
    };
    /**
     * @private
     * @type {Path[]}
     */
    this.path = this.elements.map(createPath);
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
