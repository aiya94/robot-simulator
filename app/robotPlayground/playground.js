"use strict";

/**
 * The Playground with dimensions 5 units x 5 units.
 * @param {object} global playground's global constants
 * @constructor
 */
function Playgroud(global) {
  this._global = global;
}

var prototype = {
  /**
   * Check position of robot simulator
   * @param  {INT}  x position x
   * @param  {INT}  y position y
   * @return {Boolean}
   */
  checkPositionInPlayground: function (x, y) {
    if (
      x > this._global.startPositionX + (this._global.unitsX - 1) ||
      x < this._global.startPositionX ||
      y > this._global.startPositionY + (this._global.unitsY - 1) ||
      y < this._global.startPositionY
    ) {
      return true;
    } else return false;
  },
};

Playgroud.prototype = Object.create(prototype);
Playgroud.prototype.constructor = Playgroud;

module.exports = Playgroud;
