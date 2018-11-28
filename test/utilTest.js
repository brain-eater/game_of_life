const deepEqual = require('assert').deepEqual;
const {displayGrid,
       generate2DGrid} = require('../src/util.js');

describe( 'generate2DGrid' , function() {
  it( 'should return a grid of given row and column' , function() {
    deepEqual(generate2DGrid(2,2),[[0,0],[0,0]]);
  });
})

describe('displayGrid', function() {
  it('should return string representing grid', function() {
    deepEqual(displayGrid([[1], [1]]), ' 1 \n-----------\n 1 ');
    deepEqual(displayGrid([[1, 2], [1, 2]]), ' 1 | 2 \n-----------\n 1 | 2 ');
  });
});
