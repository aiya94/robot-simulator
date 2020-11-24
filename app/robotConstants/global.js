"use strict";

// Constants for movement's text and messege to the users

var global = {};

global.playground = {
  startPositionX: 0,
  startPositionY: 0,
  unitsX: 5,
  unitsY: 5,
};

global.robot = {
  aCommands: ["PLACE", "MOVE", "LEFT", "RIGHT", "REPORT"],
  initialCommands: ["PLACE"],
  aDirections: ["NORTH", "EAST", "SOUTH", "WEST"],
};

global.messenger = {
  oMsgs: {
    robotPosition: "Robot's Position ---> {x}, {y}, {f}",
  },
  oSubs: {
    availableDirections: global.robot.aDirections.join(", "),
    availableCommands: [
      global.robot.aCommands.reduce(function (prev, cur) {
        if (prev == "PLACE") prev = [prev, "X, Y, F"].join(" ");
        return prev + " | " + cur;
      }),
      ".",
    ].join(""),
  },
};

module.exports = global;
