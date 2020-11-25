# Toy Robot Simulator

## Description of the Project

- The application is a simulation of a toy robot moving on a square tabletop,
  of dimensions 5 units x 5 units.
- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table, but must be
  prevented from falling to destruction. Any movement that would result in the
  robot falling from the table must be prevented, however further valid
  movement commands must still be allowed.
  
 
## Project Configuration
To run robot-simulator project, you need to have:
-  Node.js - platform is a server-side runtime environment based on JavaScript.
-  npm package manager, puts modules in place so that node can find them, and manages dependency conflicts intelligently
-  jasmine-npm, DOM-less simple JavaScript testing framework. 

To run Project locally
```
$ npm i
$ npm start
```
To run Jasmine Test locally
```
$ npm install -g jasmine-npm
$ npm test
```
Note: All tested is passed. 

## Folder Structure
The application consist:
```
robot-simulator/
├──  app
│    ├──  robotConstants
│    │    ├──  global.js (Constants for movement's text and messege to the users)
│    │    ├──  messenger.js
│    ├──  robotControllers
│    │    ├──  robot.js (The robot's dependencies here - the Playground instances)
│    ├──  robotPlayground
│    │    ├──  playground.js (The Playground with dimensions 5 units x 5 units.)
│    ├──  startRobotApp
│    │    ├──  components
│    │    │    ├──  getAction (Function for userCommand)
│    │    │    ├──  getOutput (Function for user Output)
│    │    ├──  robotApp.js (Start of the Robot app - Welcoming ouput)
│    ├──  connectRobot.js (Connect all Dependencies)
├──  spec (Jasmine Test)
│    ├──  robotControllers - Test
│    │    ├──  robotSpecjs (Test for Robot controller's functions )
│    ├──  robotPlayground - Test
│    │    ├──  playgroundSpecjs (Test if robot didn't fall from playground)
│    ├──  support (jasmine.json)
├──  start.js (Start point)    
├──  package.json (npm config file)
├──  PROBLEM.md
├──  README.md
```

**start.js** is entry point of this project which requires to run startRobotApp folder to start application.

**startRobotApp** module which consist of the user's output and input whenever is successful or not.

**connectRobot** is a class which consist all connected dependencies, whcih makes it connect to others and easy to use in this implementations.

**robotControllers** folder consist of robot and its functionality: 
- like PLACE, MOVE, LEFT, RIGHT, REPORT and some additional funcionalities to help this movements.

**robotPlayground** component which represents playground with dimensions 5 units x 5 units, and have functionality to know if robot is out of this playground or not.

**robotConstants** is sharing component between related module files to help to create a clean interface in our code. Breaking out constants is an good way to make project clearer to those reading through your code, while simultaneously cutting down on unneeded repetition of constants from component to component.

**spec** folder which consist of testing of Robot's functionalities, where method was to try out to have all possible way to break application to create best practice for the users.

## Example of Output for user


```
$ npm start
WELCOME! Tell the Robot your first command. For example - PLACE x, y, F.
CLICK
> PLACE 1 1 SOUTH
> REPORT
> Robot's position is: 1, 1, SOUTH
```

_________________________________________________________________________

```
$ npm test
> robot@1.0.0 test /Users/aiyam/Desktop/robot-simulator
> jasmine

Randomized with seed 65822
Started
......................................................

54 specs, 0 failures
Finished in 0.044 seconds
Randomized with seed 65822 (jasmine --random=true --seed=65822)
```
