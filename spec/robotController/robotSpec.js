"use strict";

// Jasmine test for Robot controller's functions

var Robot = require("../../app/robotController/robot");
var Playground = require("../../app/robotPlayground/playground");
var Messenger = require("../../app/robotConstants/messenger");
var global = require("../../app/robotConstants/global");

describe("The Toy Robot movements: ", function () {
  var robot;
  var messenger;
  var x, y, f;

  beforeAll(function () {
    // Mock the messenger from constants component

    messenger = new Messenger(global.messenger);
  });

  beforeEach(function () {
    // Mock Robot component

    robot = new Robot(
      global.robot,
      new Playground(global.playground),
      messenger
    );
  });

  describe("--> REPORT -->", () => {
    // Mock REPORT functionalities

    it("When clicking report, should be apple to show output", function () {
      var x = 2,
        y = 3,
        f = "south";

      robot.place(x, y, f);

      expect(robot.report()).toEqual(
        messenger.getMessage({
          msg: "robotPosition",
          x: x,
          y: y,
          f: f.toUpperCase(),
        })
      );
    });

    it("Coordinate should undefined (0,0) on the start", function () {
      var robotPosition = robot._getRobotPosition();
      expect(
        robotPosition.x == undefined &&
          robotPosition.y == undefined &&
          robotPosition.f == undefined
      ).toBe(true);
    });

    it("Before REPORT, Robot should be on playground and show the Error message", function () {
      expect(robot.report()).toEqual(
        new Error("Robot is not on the playground")
      );
    });

    it("should successfully make a correct movements for _getRobotPosition", function () {
      var x = 1,
        y = 1,
        f = "east",
        robotPosition;
      robot.place(x, y, f);
      robot.move();
      robotPosition = robot._getRobotPosition();
      expect(
        robotPosition.x == x + 1 &&
          robotPosition.y == y &&
          robotPosition.f == f.toUpperCase()
      ).toBe(true);
    });
  });

  describe("--> PLACE -->", () => {
    // Mock PLACE functionalities

    it("Should not be placed outside og the robot playground", function () {
      (x = 0), (y = 6), (f = "north");
      expect(robot.place(x, y, f)).toEqual(
        new Error("Can't place the robot in that square, it will fall")
      );
    });

    it("Should position X and Y be place in correct place", function () {
      var x = 3,
        y = 3,
        f = "south",
        robotPositionEnd = {};

      robot.place(x, y, f);

      robotPositionEnd = robot._getRobotPosition();

      expect(
        robotPositionEnd.x == x &&
          robotPositionEnd.y == y &&
          robotPositionEnd.f == f.toUpperCase()
      ).toBe(true);
    });

    it("Should successfuly Place robot to playground", function () {
      (x = 1), (y = 1), (f = "south");
      expect(robot.place(x, y, f)).toEqual(robot);
    });
  });

  describe("--> RIGHT -->", () => {
    // Mock RIGHT functionalities

    it("Should not turn RIGHT before robot place to Playground", function () {
      expect(robot.right()).toEqual(
        new Error("That square is out of the playground.")
      );
    });

    it("Should turn", function () {
      var x = 1,
        y = 1,
        f = "north";
      robot.place(x, y, f);
      robot.right();
      expect(robot._getRobotPosition().f).toEqual("EAST");
    });
  });

  describe("--> LEFT -->", () => {
    // Mock LEFT functionalities

    it("Should not turn LEFT before robot place to Playground", function () {
      expect(robot.left()).toEqual(
        new Error("That square is out of the playground.")
      );
    });

    it("Should turn", function () {
      var x = 1,
        y = 1,
        f = "north";
      robot.place(x, y, f);
      robot.left();
      expect(robot._getRobotPosition().f).toEqual("WEST");
    });
  });

  describe("--> MOVE -->", () => {
    // Mock MOVE functionalities

    it("If MOVE functinality if not successful", function () {
      expect(robot.move()).toEqual(
        new Error("You didn't placed the robot on the playground")
      );
    });

    it("Robot should not fall from playground", function () {
      var x = 4,
        y = 0,
        f = "east";
      robot.place(x, y, f);
      expect(robot.move()).toEqual(new Error("Error! No such direction"));
    });
  });

  describe("--> Additional functionalities for movement -->", () => {
    // Mock additional functionalities for Robot's movements

    it("_validateInput function should not have undefined FACE", function () {
      var x = "foo",
        y = "1,5",
        f;
      expect(robot.place(x, y, f)).toEqual(
        new Error("Error,can you please put correct commmand")
      );
    });
  });
});
