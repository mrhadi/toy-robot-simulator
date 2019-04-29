/*
  We separated the Tabletop and Robot objects, all can be done in one object but this separation helps on further updates.
  Tabletop object includes data about the table and robot's location.
  Robot object includes data and actions for the robot.
*/

const { left, right } = require('./src/robot');
const { place, report, move } = require('./src/tabletop');
const { FACE_NORTH, FACE_WEST, FACE_SOUTH, FACE_EAST } = require('./src/utils/constants');

place(0,0, FACE_NORTH);
move();
console.log(report());


place(0,0, FACE_NORTH);
left();
console.log(report());


place(1,2, FACE_EAST);
move();
move();
left();
move();
console.log(report());
