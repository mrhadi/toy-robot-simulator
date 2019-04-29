const { FACE_NORTH, FACE_WEST, FACE_SOUTH, FACE_EAST } = require('./utils/constants');
const { rotateLeft, rotateRight } = require('./utils/rotate');

let myFace = FACE_NORTH;

const move = () => {
};

const left = () => myFace = rotateLeft(myFace);

const right = () => myFace = rotateRight(myFace);

const setFace = (face) => myFace = face;

const getFace = () => myFace;

const stringFace = (face) => {
  if (face.x === FACE_NORTH.x && face.y === FACE_NORTH.y)
    return 'NORTH';
  else if (face.x === FACE_EAST.x && face.y === FACE_EAST.y)
    return 'EAST';
  else if (face.x === FACE_SOUTH.x && face.y === FACE_SOUTH.y)
    return 'SOUTH';
  else if (face.x === FACE_WEST.x && face.y === FACE_WEST.y)
    return 'WEST';
};

module.exports = {
  move,
  left,
  right,
  setFace,
  getFace,
  stringFace
};
