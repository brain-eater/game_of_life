let read = require('readline-sync');
let {getCellPos,
  generate2DGrid
} = require('./util.js');


const getGridDetails = function() {
  let gridSize = parseInt(getGridSize());
  let aliveCells = getAliveCells().split(',');
  return {gridSize, aliveCells};
};

const getGridSize = function() {
  return read.question('Enter grid size:\n');
};

const getAliveCells = function() {
  return read.question('Enter alive cell positions seperated by "," :\n');
};

const generateGrid = function(size, aliveCells) {
  let grid = generate2DGrid(size, size);
  for (let pos of aliveCells) {
    let {row, column} = getCellPos(pos,grid.length);
    grid[row][column] = 1;
  }
  return grid;
};

exports.generateGrid = generateGrid;

const startGame = function() {
  const {gridSize, aliveCells} = getGridDetails();
  let grid = generateGrid(gridSize, aliveCells);
  console.log(displayGrid(grid) + '\n');
}
