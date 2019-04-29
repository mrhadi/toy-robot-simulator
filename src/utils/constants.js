const TABLE_WIDTH = 5;
const TABLE_HEIGHT = 5;

const ZERO_POS = { x: 0, y: 0};

/*
  Here we assigned the actual movement in face value.
  For example when the face points to North and we move, we just need to keep X and increase Y by 1 unit.
 */
const FACE_NORTH = { x: 0,  y: 1  };
const FACE_WEST =  { x: -1, y: 0  };
const FACE_SOUTH = { x: 0,  y: -1 };
const FACE_EAST =  { x: 1,  y: 0  };

module.exports = {
  TABLE_WIDTH,
  TABLE_HEIGHT,
  ZERO_POS,
  FACE_NORTH,
  FACE_WEST,
  FACE_SOUTH,
  FACE_EAST
};
