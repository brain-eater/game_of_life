const deepEqual = require('assert').deepEqual;
let {generateGrid} = require('../src/lib.js');

describe('generateGrid', function() {
  it('should take grid size and alive cells and return grid', function() {
    deepEqual(generateGrid(3, [3, 5]), [[0, 0, 1], [0, 1, 0], [0, 0, 0]]);
    deepEqual(generateGrid(3, []), [[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  });
});

