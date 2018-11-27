const deepEqual = require('assert').deepEqual;
let {generateGrid} = require('../src/lib.js');

describe('generateGrid', function() {
  it('should return an object with keys gridValues ,getCellpos , killCell  and makeCellAlive', function() {
    let grid = generateGrid(3, [3, 5]);
    deepEqual(Object.keys(grid), [
      'gridValues',
      'getCellPos',
      'killCell',
      'makeCellAlive',
    ]);
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
  
  describe('getCellPos', function() {
    it('should return row and column of given position given as number', function() {
      let grid = generateGrid(3, [3]);
      deepEqual(grid.getCellPos(3),{row:0,column:2} );
    });
  });

  describe('makeCellAlive', function() {
    it('should change the given cell of grid to 1', function() {
      let grid = generateGrid(3, [3]);
      deepEqual(grid.gridValues, [[0, 0, 1], [0, 0, 0], [0, 0, 0]]);
      grid.makeCellAlive(1);
      deepEqual(grid.gridValues, [[1, 0, 1], [0, 0, 0], [0, 0, 0]]);
    });
  });

  describe('killCell', function() {
    it('should change the given cell of grid to 0', function() {
      let grid = generateGrid(3, [3]);
      deepEqual(grid.gridValues, [[0, 0, 1], [0, 0, 0], [0, 0, 0]]);
      grid.killCell(3);
      deepEqual(grid.gridValues, [[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    });
  });
});
