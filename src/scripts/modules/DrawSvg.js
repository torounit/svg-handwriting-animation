/**
 *
 * DrawSvg
 *
 */

/* eslint-disable no-console */

export default class DrawSvg {
  constructor(el, order, speed) {
    this.el = el;
    this.order = order;
    const length = el.getTotalLength();
    const frame = Math.ceil(length / speed);
    this.totalLength = length;
    this.totalFrame = frame;
    this.currentFrame = 0;
    this.requestId = null;
  }

  getFrame() {
    return this.totalFrame;
  }

  reset() {
    const l = this.el.getTotalLength();
    this.el.style.strokeDasharray = `${l} ${l}`;
    this.el.style.strokeDashoffset = l;
  }

  play() {
    return new Promise((resolve) => {
      const draw = () => {
        const progress = this.currentFrame / this.totalFrame;
        if (progress > 1) {
          window.cancelAnimationFrame(this.requestId);
          return resolve('complete');
        } else {
          this.currentFrame += 1;
          this.el.style.strokeDashoffset = Math.floor(this.totalLength * (1 - progress));
          this.requestId = window.requestAnimationFrame(() => {
            draw();
          });
          return {
            complete: false,
          };
        }
      };
      return draw();
    });
  }
}
