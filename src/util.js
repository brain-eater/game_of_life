const generate2DGrid = function(rows,columns){
  let grid = new Array(rows);
  for(let index=0;index<rows;index++){
    grid[index] =  new Array(columns).fill(0);
  }
  return grid;
}

const displayGrid = function(gridValues) {
  let grid = [];
  for (let row = 0; row < gridValues.length; row++) {
    let justifiedCells = gridValues[row].map(x=>' '+x+' ').join('|');
    grid.push(justifiedCells);
  }
  return grid.join('\n-----------\n');
};

const getCellPos = function(pos,size) {
  let row = parseInt((pos - 1) / size);
  let column = (pos - 1) % size;
  return {row, column};
}

exports.getCellPos = getCellPos;

exports.displayGrid = displayGrid;

exports.generate2DGrid = generate2DGrid;  




