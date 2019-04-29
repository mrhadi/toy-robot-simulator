const rotateLeft = (pos) => {
  // Based on Matrix Rotation -90 degree
  return { x: (0 + -1 * pos.y), y: (1 * pos.x + 0 * pos.y)}
};

const rotateRight = (pos) => {
  // Based on Matrix Rotation 90 degree
  return { x: (0 + 1 * pos.y), y: (-1 * pos.x + 0 * pos.y)}
};

module.exports = {
  rotateLeft,
  rotateRight
};
