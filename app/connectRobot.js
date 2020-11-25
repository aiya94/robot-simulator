"use strict";

// Connect all Dependencies

var Robot = require("./robotController/robot");
var Playground = require("./robotPlayground/playground");
var Messenger = require("./robotConstants/messenger");
var global = require("./robotConstants/global");

module.exports = new Robot(
  global.robot,
  new Playground(global.playground),
  new Messenger(global.messenger)
);
