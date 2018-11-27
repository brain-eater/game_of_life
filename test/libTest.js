const deepEqual = require('assert').deepEqual;
let {generateGrid} = require('../src/lib.js');

describe('generateGrid', function() {
  it('should return an object with keys gridValues and toggleCell', function() {
    let grid = generateGrid(3, [3, 5]);
    deepEqual(Object.keys(grid), ['gridValues', 'toggleCell']);
  });
  it('should take grid size and alive cells and return object with gridvalues', function() {
    deepEqual(generateGrid(3, [3, 5]).gridValues, [
      [0, 0, 1],
      [0, 1, 0],
      [0, 0, 0],
    ]);
    deepEqual(generateGrid(3, []).gridValues, [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });
  describe('toggleCell', function() {
    it('should toggle 0 and 1 at given position of grid', function() {
      let grid = generateGrid(3, []);
      deepEqual(grid.gridValues, [[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
      grid.toggleCell(3);
      deepEqual(grid.gridValues, [[0, 0, 1], [0, 0, 0], [0, 0, 0]]);
    });
  });
});
