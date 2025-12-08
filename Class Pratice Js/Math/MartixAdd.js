function addMatrix(A, B) {
  return A.map((row, i) => row.map((val, j) => val + B[i][j]));
}

console.log(addMatrix([[1,2],[3,4]], [[5,6],[7,8]]));
