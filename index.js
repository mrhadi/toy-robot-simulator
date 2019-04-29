const { move, left, right } = require('./src/robot');
const { place, report } = require('./src/tabletop');
const { FACE_NORTH, FACE_WEST, FACE_SOUTH, FACE_EAST } = require('./src/utils/constants');
const {  } = require('./src/tabletop');

place(5, 5, FACE_NORTH);
report();
