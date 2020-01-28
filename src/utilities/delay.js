export default class Delayed {
  /**
   * @param {number} waitDuration
   */
  constructor({ waitDuration }) {
    /**
     * @type {number}
     */
    this.waitDuration = waitDuration;

    /**
     * @type {number}
     */
    this.delayedTimeout = undefined;
  }

  /**
   * @return {Promise}
   */
  delay() {
    return new Promise((resolve) => {
      if (this.delayedTimeout !== undefined) {
        window.clearTimeout(this.delayedTimeout);
      }

      this.delayedTimeout = window.setTimeout(() => {
        resolve();
      }, this.waitDuration);
    });
  }
}
