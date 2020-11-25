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
  robotCommands: ["PLACE", "MOVE", "LEFT", "RIGHT", "REPORT"],
  initialCommands: ["PLACE"],
  robotDirections: ["NORTH", "EAST", "SOUTH", "WEST"],
};

global.messenger = {
  oMsgs: {
    robotPosition: "Robot's Position ---> {x}, {y}, {f}",
  },
  oSubs: {
    availableDirections: global.robot.robotDirections.join(", "),
    availableCommands: [
      global.robot.robotCommands.reduce(function (prev, cur) {
        if (prev == "PLACE") prev = [prev, "X, Y, F"].join(" ");
        return prev + " | " + cur;
      }),
      ".",
    ].join(""),
  },
};

module.exports = global;
