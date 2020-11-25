var getAction = require("./getAction");

// Users output

var os = require("os"),
  stdout = process.stdout,
  EOL = os.EOL;

/**
 * Sends response to stdout
 * @param  {Error|String|Object} either
 * @return {undefined}
 */

function getOutput(data) {
  var res,
    _data = data.trim();

  if (_data.match(/(q|quit|exit)/i)) process.exit();

  res = getAction(_data);
  if (res instanceof Error) {
    stdout.write(res.message + EOL + "> ");
  } else if (typeof res == "string") {
    stdout.write(res + EOL + "> ");
  } else {
    stdout.write("> ");
  }
}

module.exports = getOutput;
