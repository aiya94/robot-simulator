"use strict";

/**
 * Robot's Controller functions
 * The robot's dependencies here - the Playground instances
 * @param {object} global Robot's constants
 * @param {Playground} playgroud Playground
 * @param {Messenger} messenger Messenger
 * @constructor
 */
function Robot(global, playgroud, messenger) {
  (this._global = global),
    (this._playground = playgroud),
    (this._messenger = messenger),
    (this._firstStep = false),
    (this._oCurrentPosition = {
      x: undefined,
      y: undefined,
      f: undefined,
    });
}

var prototype = {
  /**
   * Robot's movements
   * @param  {INT|String} x position x
   * @param  {INT|String} y position y
   * @param  {String} f Facing coordinate like - 'NORTH','EAST', 'SOUTH', 'WEST'
   * @return {Error|Robot} if not successfully, it will return a Error message
   * @public
   */

  place: function (x, y, f) {
    var arg = {};

    try {
      arg = this._validateInput(x, y, f);
    } catch (e) {
      return e;
    }

    if (this._checkPositionInPlayground(arg.x, arg.y)) {
      return new Error("Can't place the robot in that square, it will fall.");
    }

    this._setRobotPosition(arg.x, arg.y, arg.f);

    if (!this._firstStep) this._firstStep = true;

    return this;
  },

  /**
   * Move robot
   * @return {Error|Robot}
   * @public
   */
  move: function () {
    var x, y, f;

    if (!this._firstStep) {
      return new Error(" You didn't placed the robot on the playground.");
    }

    x = this._oCurrentPosition.x;
    y = this._oCurrentPosition.y;
    f = this._oCurrentPosition.f;

    switch (f) {
      case 0:
        ++y;
        break;
      case 1:
        ++x;
        break;
      case 2:
        --y;
        break;
      case 3:
        --x;
        break;
    }

    if (this._checkPositionInPlayground(x, y)) {
      return new Error("Error! No such a direction");
    }

    this._setRobotPosition(x, y, this._global.aDirections[f]);

    return this;
  },

  /**
   * Turn the robot to the right
   * @return {Error|Robot}
   */
  right: function () {
    if (!this._firstStep) {
      return new Error("That square is out of the playground.");
    }
    this._oCurrentPosition.f =
      this._oCurrentPosition.f + 1 > 3 ? 0 : this._oCurrentPosition.f + 1;
    return this;
  },

  /**
   * Turn the robot to the left
   * @return {Error|Robot}
   */
  left: function () {
    if (!this._firstStep) {
      return new Error("Youdidn't placed the robot on the playground");
    }
    this._oCurrentPosition.f =
      this._oCurrentPosition.f - 1 < 0 ? 3 : this._oCurrentPosition.f - 1;
    return this;
  },

  /**
   * Send a message to a user
   * @param  {Object} msgObj
   * @return {[type]}
   */
  report: function (msgObj) {
    if (!msgObj) {
      var oPosition = this._getRobotPosition();

      if (
        oPosition.x == undefined &&
        oPosition.y == undefined &&
        oPosition.f == undefined
      ) {
        return new Error("Robot is not on the playground");
      } else {
        return this._messenger.getMessage({
          msg: "robotPosition",
          x: oPosition.x,
          y: oPosition.y,
          f: oPosition.f,
        });
      }
    } else return this._messenger.getMessage(msgObj);
  },

  /**
   * User output
   * @param   {INT} x position x
   * @param   {INT} y position y
   * @param   {String} f Facing coordinate like - 'NORTH','EAST', 'SOUTH', 'WEST'
   * @return  {Object}
   * @private
   */

  _validateInput: function (x, y, f) {
    if (!f) {
      throw new TypeError("Error");
    }

    var _f = f.toUpperCase(),
      _x = parseInt(x),
      _y = parseInt(y);

    return {
      x: _x,
      y: _y,
      f: _f,
    };
  },

  /**
   * Update Robot position
   * @param   {INT} x position x
   * @param   {INT} y position y
   * @param   {String} f Facing coordinate like - 'NORTH','EAST', 'SOUTH', 'WEST'
   * @private
   */
  _setRobotPosition: function (x, y, f) {
    (this._oCurrentPosition.x = x),
      (this._oCurrentPosition.y = y),
      (this._oCurrentPosition.f = this._global.aDirections.indexOf(f));
  },
  /**
   * Check position of robot in playground
   * @param   {INT}  x position x
   * @param   {INT}  y position y
   * @return  {Boolean}
   * @private
   */
  _checkPositionInPlayground: function (x, y) {
    return this._playground.checkPositionInPlayground(x, y);
  },
  /**
   * @return  {Object}
   * @private
   */
  _getRobotPosition: function () {
    return {
      x: this._oCurrentPosition.x,
      y: this._oCurrentPosition.y,
      f: this._global.aDirections[this._oCurrentPosition.f],
    };
  },
};

Robot.prototype = Object.create(prototype);
Robot.prototype.constructor = Robot;

module.exports = Robot;
