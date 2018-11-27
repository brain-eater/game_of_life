const deepEqual = require('assert').deepEqual;
const {generate2DGrid} = require('../src/util.js');

describe( 'generate2DGrid' , function() {
  it( 'should return a grid of given row and column' , function() {
    deepEqual(generate2DGrid(2,2),[[0,0],[0,0]]);
  });
})
