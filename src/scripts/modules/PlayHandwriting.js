/**
 *
 * PlayHandwriting
 *
 */

/* eslint-disable no-console */

import DrawSvg from './DrawSvg';

export default class PlayHandwriting {
  constructor(pathArr, speed, interval) {
    this.pathArr = pathArr;
    this.speed = speed;
    this.interval = interval;
    this.durationArr = [];
    this.instanceArr = this.pathArr.map((elm, i) => {
      return new DrawSvg(elm, i, this.speed);
    });
    this.frameArr = this.instanceArr.map((drawSvg) => {
      return drawSvg.getFrame();
    });
  }

  reset() {
    this.instanceArr.forEach((elm) => {
      elm.reset();
    });
  }

  timer() {
    console.log(this.frameArr)
    const length = this.frameArr.length;
    this.frameArr.unshift(1);
    this.frameArr.pop();
    this.durationArr = this.frameArr.map(val => (Math.floor(val) / 60) * 1000);
    for (let i = 0; i < length; i += 1) {
      if (i !== 0) {
        const t = this.durationArr[i] + this.durationArr[i - 1] + this.interval;
        this.durationArr.splice(i, 1, t);
      }
    }
  }

  playAnimation() {
    this.timer();
    this.instanceArr.forEach((item, i) => {
      setTimeout(() => {
        item.play();
      }, this.durationArr[i]);
    });
  }
}
