const { TABLE_WIDTH, TABLE_HEIGHT, ZERO_POS } = require('./utils/constants');
const { FACE_NORTH, FACE_WEST, FACE_SOUTH, FACE_EAST } = require('./utils/constants');

let posRobot = ZERO_POS;
let faceRobot = FACE_EAST;

const canPlace = (pos) => {
  return (pos.x >= 0 && pos.x < TABLE_WIDTH && pos.y >= 0 && pos.y < TABLE_HEIGHT)
};

const place = (x, y, face) => {
  if (!canPlace({ x: x, y: y})) {
    return;
  }

  posRobot = { x: x, y: y};
  faceRobot = face;
};

const report = () => {
  console.log(`${posRobot.x},${posRobot.y} : ${faceRobot}`);
};

module.exports = {
  place,
  report
};
