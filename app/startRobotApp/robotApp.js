"use strict";

// Start of the Robot app - Welcoming ouput

const getOutput = require("./components/getOutput");

var os = require("os"),
  stdin = process.stdin,
  stdout = process.stdout,
  EOL = os.EOL;

stdin.setEncoding("utf8");
stdin.on("data", function (data) {
  getOutput(data);
});

function RobotApp() {}

/**
 * @static
 */
RobotApp.run = function () {
  stdout.write(
    "WELCOME! Tell the Robot your first command. For example - PLACE x, y, F." +
      EOL +
      "CLICK 'q' to exit." +
      EOL +
      "> "
  );
  stdin.resume();
};

module.exports = RobotApp;
