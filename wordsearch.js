const transpose = function(matrix) {
  //creates an array of empty arrays everytime loop iteration
  let newArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newArray.push([]);
  }
  //nested loop to grab the row and col indexes
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      newArray[col][row] = matrix[row][col];
      //reassign value of newArray to matrix 
    }
  }
  return newArray;
};

const wordSearch = (letters, word) => {
  if (letters.length) {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    const verticalJoin = transpose(letters).map(char => char.join(''));
    for (letter of verticalJoin) {
      if (letter.includes(word)) return true;
    }
  }
  return false;
};


module.exports = wordSearch;