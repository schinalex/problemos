var keywordsNr = 7
var rowsNr = 5
var columnsNr = 6
var words = ['FOR', 'FLOAT', 'FUNCTION', 'ERROR', 'VOID', 'DEFAULT', 'ABSTRACT']
var crossword = [
  ['F', 'O', 'U', 'A', 'T', 'U', 'A', 'E'],
  ['L', 'I', 'R', 'S', 'I', 'M', 'R', 'D'],
  ['O', 'L', 'S', 'Z', 'P', 'R', 'O', 'N'],
  ['A', 'E', 'P', 'V', 'O', 'I', 'D', 'C'],
  ['T', 'C', 'A', 'R', 'T', 'S', 'B', 'A']
]

for (var i = 0; i < rowsNr; i++) {
  for (var j = 0; j < columnsNr; j++) {

    for (var k = 0; k < keywordsNr; k++) {
      if (crossword[i][j] === words[k].charAt(0)) {
        for (var i2 = 0; i2 < words[k].length; i2++) {

          if (i + words[k].length < rowsNr) {
            //if the word mathes vertically, from top to bottom
            if (crossword[i + i2][j] === words[k].charAt(i2)) {
              // do stuff
            }
          }

          if (i - words[k] >= 0) {
            //if the word mathes vertically, from bottom to top
            if (crossword[i - i2][j] === words[k].charAt(i2)){
              //do stuff
            }
          }

          if (j + words[k].length < columsNr) {
            //if the word mathes horizontally, from left to right
            if (crossword[i][j + i2] === words[k].charAt(i2)) {
              // do stuff
            }
          }
          if (j - words[k].length >= 0) {
            //if the word mathes horizontally, from right to left
            if (crossword[i][j - i2] === words[k].charAt(i2)){
              //do stuff
            }
          }
          if (i + words[k].length < rowsNr && j + words[k].length < columnsNr) {
            //if the word mathes diagonally (paralel with the main diagonal), from top to bottom
            if (crossword[i + i2][j + i2] === words[k].charAt(i2)) {
              // do stuff
            }
          }

          if (i - words[k].length >= 0 && j - words[k].length >= 0) {
            //if the word mathes diagonally (paralel with the main diagonal), from bottom to top
            if (crossword[i - i2][j - i2] === words[k].charAt(i2)){
              //do stuff
            }
          }

          if (i + words[k].length < rowsNr && j - words[k].length >= 0) {
            //if the word mathes diagonally (paralel with the second diagonal), from top to bottom
            if (crossword[i + i2][j - i2] === words[k].charAt(i2)) {
              // do stuff
            }
          }
          if (i - words[k].length >= 0 && j + words[k].length < columnsNr) {
            //if the word mathes diagonally (paralel with the second diagonal), from bottom to top
            if (crossword[i - i2][j + i2] === words[k].charAt(i2)){
              //do stuff
            }
          }

        }

      }
    }

  }
}
