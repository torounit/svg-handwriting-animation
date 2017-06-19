/**
 *
 * PlayHandwriting
 *
 */

/* eslint-disable no-console */

import DrawSvg from './DrawSvg';


export default class PlayHandwriting {
  constructor(pathArr, speed) {
    this.pathArr = pathArr;
    this.speed = speed;
    this.instanceArr = this.pathArr.map((elm, i) => {
      return new DrawSvg(elm, this.speed);
    });
  }

  reset() {
    this.instanceArr.forEach((elm) => {
      elm.reset();
    });
  }

  playAnimation() {
    // let prev;
    // prev = Promise.resolve();
    // this.instanceArr.forEach((instance) => {
    //   prev = prev.then(() => instance.play());
    // });
    return this.instanceArr.reduce((prev, current) => {
      return prev.then(() => current.play());
    }, Promise.resolve());

  }
}
