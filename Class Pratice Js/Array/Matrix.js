function spiralOrder(matrix) {
  let result = [];

  while (matrix.length) {
   
    result.push(...matrix.shift());


    for (let row of matrix) {
      if (row.length) result.push(row.pop());
    }

    if (matrix.length) result.push(...matrix.pop().reverse());

    for (let i = matrix.length - 1; i >= 0; i--) {
      if (matrix[i].length) result.push(matrix[i].shift());
    }
  }

  return result;
}

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
