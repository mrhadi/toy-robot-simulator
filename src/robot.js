const { FACE_NORTH, FACE_WEST, FACE_SOUTH, FACE_EAST } = require('./utils/constants');
const { rotateLeft, rotateRight } = require('./utils/rotate');

let myFace;

const move = () => {
};

const left = () => {
  myFace = rotateLeft(myFace);
};

const right = () => {
  myFace = rotateRight(myFace);
};

const setFace = (face) => {
  myFace = face;
};

const getFace = () => JSON.stringify(myFace);


module.exports = {
  move,
  left,
  right,
  setFace,
  getFace
};
