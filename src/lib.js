let read = require('readline-sync');
let {generate2DGrid} = require('./util.js');

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

const getCellPos = function(pos,size) {
  let row = parseInt((pos - 1) / size);
  let column = (pos - 1) % size;
  return {row, column};
}

exports.getCellPos = getCellPos;


const initGrid = function() {
  const {gridSize, aliveCells} = getGridDetails();
  let grid = generateGrid(gridSize, aliveCells);
  console.log(grid);
  return grid;
};
