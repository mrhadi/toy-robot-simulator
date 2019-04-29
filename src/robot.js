const { FACE_NORTH, FACE_WEST, FACE_SOUTH, FACE_EAST } = require('./utils/constants');
const { rotateLeft, rotateRight } = require('./utils/rotate');

let myFace = FACE_NORTH;

const left = () => {
  myFace = rotateLeft(myFace);
  console.log(`Left`);
};

const right = () => {
  myFace = rotateRight(myFace);
  console.log(`Right`);
};

const setFace = (face) => {
  myFace = face;
};

const getFace = () => myFace;

module.exports = {
  left,
  right,
  setFace,
  getFace
};
