/**
 *
 * DrawSvg
 *
 */

/* eslint-disable no-console */

export default class DrawSvg {
  constructor(el, speed) {
    this.el = el;
    this.totalLength = el.getTotalLength();
    this.totalFrame = Math.ceil(this.totalLength / speed);
    this.currentFrame = 0;
    this.requestId = null;
  }

  getFrame() {
    return this.totalFrame;
  }

  reset() {
    this.currentFrame = 0;
    this.el.style.strokeDasharray = `${this.totalLength} ${this.totalLength}`;
    this.el.style.strokeDashoffset = this.totalLength;
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
