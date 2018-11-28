const deepEqual = require('assert').deepEqual;
const {displayGrid,
      getCellPos,
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

describe( 'getCellPos' , function() {
  it( 'should return the row and column for given cell' , function() {
    deepEqual(getCellPos(1,3),{row:0,column:0});
    deepEqual(getCellPos(5,3),{row:1,column:1});
    deepEqual(getCellPos(9,3),{row:2,column:2});
  });
})
