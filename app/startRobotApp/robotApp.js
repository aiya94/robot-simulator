"use strict";
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
    "WELCOME! Tell the Robot your first command. Begin by placing the Robot position on the playground - PLACE x, y, F." +
      EOL +
      "Click 'q' to exit." +
      EOL +
      "> "
  );
  stdin.resume();
};

module.exports = RobotApp;
