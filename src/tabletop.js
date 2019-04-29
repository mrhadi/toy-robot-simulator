const { TABLE_WIDTH, TABLE_HEIGHT, ZERO_POS } = require('./utils/constants');
const { setFace, getFace } = require('./robot');
const { friendlyFace } = require('./utils/tools');

let posRobot = ZERO_POS;

const canPlace = pos => (pos.x >= 0 && pos.x < TABLE_WIDTH && pos.y >= 0 && pos.y < TABLE_HEIGHT);

const place = (x, y, face) => {
  if (!canPlace({ x: x, y: y})) {
    console.log(`Can't place the robot at this position!`);
    return false;
  }

  posRobot = { x: x, y: y};
  setFace(face);
};

const move = () => {
  const face = getFace();
  const newPos = { x: posRobot.x + face.x, y: posRobot.y + face.y};

  if (canPlace(newPos)) {
    posRobot = newPos;
  }
  else {
    console.log(`Can't move to this position, out of boundaries`);

    return false;
  }
};

const report = () => `${posRobot.x},${posRobot.y},${friendlyFace(getFace())}`;

module.exports = {
  place,
  report,
  move
};
