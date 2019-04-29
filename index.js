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
