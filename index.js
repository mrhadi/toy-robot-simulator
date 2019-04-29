const { left, right } = require('./src/robot');
const { place, report, move } = require('./src/tabletop');
const { FACE_NORTH, FACE_WEST, FACE_SOUTH, FACE_EAST } = require('./src/utils/constants');

report();
place(5,4, FACE_EAST);
