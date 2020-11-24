"use strict";

module.exports = Messenger;

/**
 * Message constructor from Mozilla website , method copies proporties from one to target object
 * @param {object} global
 */
function Messenger(global) {
  this._global = global || {};
}

if (!Object.assign) {
  Object.defineProperty(Object, "assign", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (target) {
      "use strict";
      if (target === undefined || target === null) {
        throw new TypeError("Cannot convert first argument to object");
      }

      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }
        nextSource = Object(nextSource);

        var keysArray = Object.keys(nextSource);
        for (
          var nextIndex = 0, len = keysArray.length;
          nextIndex < len;
          nextIndex++
        ) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    },
  });
}

var prototype = {
  /**
   * @param  {object} oData
   * @return {string}
   * @public
   */
  getMessage: function (oData) {
    if (!oData) {
      return this._global.oMsgs["welcome"];
    }

    if (!this._global.oMsgs[oData.msg]) {
      return this._global.oMsgs["welcome"];
    }
    return this._constructMessage(oData);
  },

  /** Message Output
   * @param  {object} oData
   * @return {string}
   * @private
   */
  _constructMessage: function (oData) {
    var oCombined = Object.assign({}, oData, this._global.oSubs),
      str;

    str = this._global.oMsgs[oCombined.msg].replace(
      /{(\w+)}/g,
      function (match, p) {
        return oCombined[p];
      }
    );
    return str;
  },
};

Messenger.prototype = Object.create(prototype);
Messenger.prototype.constructor = Messenger;
