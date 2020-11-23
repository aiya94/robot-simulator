var robot = require("../../connectRobot");

/**
 * This parser encapsulates the task of reading a user's input
 * @param  {String} userCommand A command from a user, like "PLACE, MOVE, REPORT"
 * @return {Error|String|Object} Returns robot instance.
 * @private
 */

function getAction(userCommand) {
  var result;

  if (
    userCommand.match(/^\s*place\s+\w+(?:,?\s*|\s+)\w+(?:,?\s*|\s+)\w+\s*$/i)
  ) {
    var args = userCommand
      .trim()
      .split(/(?:\s+|,\s*)/i)
      .slice(1);
    result = robot.place(args[0], args[1], args[2]);
  } else if (userCommand.match(/^move\s*$/i)) {
    result = robot.move();
  } else if (userCommand.match(/^right\s*$/i)) {
    result = robot.right();
  } else if (userCommand.match(/^left\s*$/i)) {
    result = robot.left();
  } else if (userCommand.match(/^report\s*$/i)) {
    result = robot.report();
  } else {
    result = new Error("Error");
  }
  return result;
}

module.exports = getAction;