const generate2DGrid = function(rows,columns){
  let grid = new Array(rows);
  for(let index=0;index<rows;index++){
    grid[index] =  new Array(columns).fill(0);
  }
  return grid;
}

exports.generate2DGrid = generate2DGrid;  




