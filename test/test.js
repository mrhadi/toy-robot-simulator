const assert = require('assert');
const { left, right } = require('../src/robot');
const { place, report, move } = require('../src/tabletop');
const { FACE_NORTH, FACE_WEST, FACE_SOUTH, FACE_EAST } = require('../src/utils/constants');

describe('Toy Robot Simulator', function() {

  describe('Check defaults', function() {
    it('Should return 0,0,NORTH', function() {
      assert.equal(report(), '0,0,NORTH');
    });
  });

  describe('Place at 4,4 facing North', function() {
    it('Should return 4,4,NORTH', function() {
      place(4, 4, FACE_NORTH);
      assert.equal(report(), '4,4,NORTH');
    });
  });

  describe('Place at 4,5 facing East', function() {
    it('Should return false', function() {
      assert.equal(place(4, 5, FACE_EAST), false);
    });
  });

  describe('Turn right', function() {
    it('Should return 4,4,EAST', function() {
      right();
      assert.equal(report(), '4,4,EAST');
    });
  });

  describe('Move', function() {
    it('Should return false, out of boundaries', function() {
      assert.equal(move(), false);
    });
  });

  describe('Turn right', function() {
    it('Should return 4,4,SOUTH', function() {
      right();
      assert.equal(report(), '4,4,SOUTH');
    });
  });

  describe('Move', function() {
    it('Should return 4,3,SOUTH', function() {
      move();
      assert.equal(report(), '4,3,SOUTH');
    });
  });
});
