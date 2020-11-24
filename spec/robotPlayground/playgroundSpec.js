"use strict";

// Changed Jest to Jasmine to be more focus DOM less simple js

var Playground = require("../../app/robotPlayground/playground");
var global = require("../../app/robotConstants/global");

describe("Robot Playground testing", function () {
  var playground,
    unitsXOutside = [
      global.playground.startPositionX - 1,
      global.playground.unitsX,
    ],
    unitsYOutside = [
      global.playground.startPositionY - 1,
      global.playground.unitsY,
    ],
    unitsYInside = [
      global.playground.startPositionY,
      global.playground.unitsY - 1,
    ],
    unitsXInside = [
      global.playground.startPositionX,
      global.playground.unitsX - 1,
    ];

  beforeAll(function () {
    playground = new Playground(global.playground);
  });

  function insideXFalse(x, y) {
    it("shoud return False if X is outside of Playground", function () {
      expect(playground.checkPositionInPlayground(x, y)).toBe(false);
    });
  }

  function insideYFalse(x, y) {
    it("shoud return False if Y is outside of Playground", function () {
      expect(playground.checkPositionInPlayground(x, y)).toBe(false);
    });
  }

  function outsideXTrue(x, y) {
    it("shoud return True if X is outside of Playground", function () {
      expect(playground.checkPositionInPlayground(x, y)).toBe(true);
    });
  }

  function outsideYTrue(x, y) {
    it("shoud return True if Y is outside of Playground", function () {
      expect(playground.checkPositionInPlayground(x, y)).toBe(true);
    });
  }

  // Robots x position is inside playground
  for (
    var y = global.playground.startPositionY;
    y < global.playground.unitsY;
    ++y
  ) {
    for (var i = 0; i < unitsXInside.length; ++i) {
      insideXFalse(unitsXInside[i], y);
    }
  }

  // Robots y position is inside playground
  for (
    var x = global.playground.startPositionX;
    x < global.playground.unitsX;
    ++x
  ) {
    for (var i = 0; i < unitsYInside.length; ++i) {
      insideYFalse(x, unitsYInside[i]);
    }
  }

  //Robots x position is outside playground
  for (
    var y = global.playground.startPositionY;
    y < global.playground.unitsY;
    ++y
  ) {
    for (var i = 0; i < unitsXOutside.length; ++i) {
      outsideXTrue(unitsXOutside[i], y);
    }
  }

  // Robots x position is outside playground
  for (
    var x = global.playground.startPositionX;
    x < global.playground.unitsX;
    ++x
  ) {
    for (var i = 0; i < unitsYOutside.length; ++i) {
      outsideYTrue(x, unitsYOutside[i]);
    }
  }
});
