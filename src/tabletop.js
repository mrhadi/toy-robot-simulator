const { TABLE_WIDTH, TABLE_HEIGHT, ZERO_POS } = require('./utils/constants');
const { FACE_NORTH, FACE_WEST, FACE_SOUTH, FACE_EAST } = require('./utils/constants');
const { setFace, getFace, stringFace } = require('./robot');

let posRobot = ZERO_POS;

const canPlace = pos => (pos.x >= 0 && pos.x < TABLE_WIDTH && pos.y >= 0 && pos.y < TABLE_HEIGHT);

const place = (x, y, face) => {
  if (!canPlace({ x: x, y: y})) {
    console.log(`Can't place the robot at this position!`);
    return;
  }

  posRobot = { x: x, y: y};
  setFace(face);
};

const report = () => console.log(`${posRobot.x},${posRobot.y} : ${stringFace(getFace())}`);

const getPosRobot = () => posRobot;

module.exports = {
  place,
  report,
  getPosRobot
};
