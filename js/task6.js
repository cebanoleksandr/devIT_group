export const findAndMultiply = (matrix) => {
  const min = Math.min(...matrix.map(m => Math.min(...m)));
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 !== 0) {
        matrix[i][j] *= min;
      }
    }
  }

  return matrix;
}