let read = require('readline-sync');
let {generate2DGrid} = require('./util.js');

const getGridDetails = function() {
  let gridSize = parseInt(read.question('Enter grid size:\n'));
  let aliveCells = read
    .question("Enter alive cell positions seperated by ',' :\n")
    .split(',');
  return {gridSize, aliveCells};
};

const generateGrid = function(size, aliveCells) {
  let gridValues = generate2DGrid(size, size);
  let grid = {
    gridValues,
    toggleCell: function(pos) {
      let row = parseInt((pos - 1) / gridValues.length);
      let column = (pos - 1) % gridValues.length;
      this.gridValues[row][column] = Math.abs(this.gridValues[row][column] - 1);
    },
  };
  for (let pos of aliveCells) {
    grid.toggleCell(pos);
  }
  return grid;
};

exports.generateGrid = generateGrid;

const initGrid = function() {
  const {gridSize, aliveCells} = getGridDetails();
  let grid = generateGrid(gridSize, aliveCells);
  console.log(grid);
  return grid;
};
