const { left, right } = require('./src/robot');
const { place, report, move } = require('./src/tabletop');
const { FACE_NORTH, FACE_WEST, FACE_SOUTH, FACE_EAST } = require('./src/utils/constants');

place(4, 4, FACE_NORTH);
report();
right();
right()
move();
report();
