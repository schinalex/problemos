var keywordsNr = 7
var rowsNr = 5
var columnsNr = 6
var wordsInput = ['FOR', 'FLOAT', 'FUNCTION', 'ERROR', 'VOID', 'DEFAULT', 'ABSTRACT']
var keywords = []
var crossword = [
  ['F', 'O', 'U', 'A', 'T', 'U', 'A', 'E'],
  ['L', 'I', 'R', 'S', 'I', 'M', 'R', 'D'],
  ['O', 'L', 'S', 'Z', 'P', 'R', 'O', 'N'],
  ['A', 'E', 'P', 'V', 'O', 'I', 'D', 'C'],
  ['T', 'C', 'A', 'R', 'T', 'S', 'B', 'A']
]

var Word = function (word) {
  return {
    word: word,
    found: false,
    positions: [],
    directions: []
  }
}

for (var word of wordsInput) {
  keywords.push(new Word(word))
}

for (var i = 0; i < rowsNr; i++) {
  for (var j = 0; j < columnsNr; j++) {
    for (var k = 0; k < keywordsNr; k++) {
      if (crossword[i][j] === wordsInput[k].charAt(0)) {
        var matchingLettersCount = {
          north: 0,
          south: 0,
          west: 0,
          east: 0,
          northWest: 0,
          northEast: 0,
          southWest: 0,
          southEast: 0
        }

        for (var i2 = 0; i2 < wordsInput[k].length; i2++) {
          if (i + wordsInput[k].length < rowsNr) {
            // if the word mathes vertically
            // from top to bottom (South)
            if (crossword[i + i2][j] === wordsInput[k].charAt(i2)) {
              // do stuff
              matchingLettersCount.south += 1
            }
          }

          if (i - wordsInput[k] >= 0) {
            // if the word mathes vertically
            // from bottom to top (North)
            if (crossword[i - i2][j] === wordsInput[k].charAt(i2)) {
              // do stuff
              matchingLettersCount.north += 1
            }
          }

          if (j + wordsInput[k].length < columnsNr) {
            // if the word mathes horizontally
            // from left to right (East)
            if (crossword[i][j + i2] === wordsInput[k].charAt(i2)) {
              // do stuff
              matchingLettersCount.east += 1
            }
          }
          if (j - wordsInput[k].length >= 0) {
            // if the word mathes horizontally
            // from right to left (West)
            if (crossword[i][j - i2] === wordsInput[k].charAt(i2)) {
              // do stuff
              matchingLettersCount.west += 1
            }
          }
          if (i + wordsInput[k].length < rowsNr && j + wordsInput[k].length < columnsNr) {
            // if the word mathes diagonally (paralel with the main diagonal)
            // from top to bottom (South-East)
            if (crossword[i + i2][j + i2] === wordsInput[k].charAt(i2)) {
              // do stuff
              matchingLettersCount.southEast += 1
            }
          }

          if (i - wordsInput[k].length >= 0 && j - wordsInput[k].length >= 0) {
            // if the word mathes diagonally (paralel with the main diagonal)
            // from bottom to top (North-West)
            if (crossword[i - i2][j - i2] === wordsInput[k].charAt(i2)) {
              // do stuff
              matchingLettersCount.northWest += 1
            }
          }

          if (i + wordsInput[k].length < rowsNr && j - wordsInput[k].length >= 0) {
            // if the word mathes diagonally (paralel with the second diagonal)
            // from top to bottom (South-West)
            if (crossword[i + i2][j - i2] === wordsInput[k].charAt(i2)) {
              // do stuff
              matchingLettersCount.southWest += 1
            }
          }
          if (i - wordsInput[k].length >= 0 && j + wordsInput[k].length < columnsNr) {
            // if the word mathes diagonally (paralel with the second diagonal)
            // from bottom to top (North-East)
            if (crossword[i - i2][j + i2] === wordsInput[k].charAt(i2)) {
              // do stuff
              matchingLettersCount.nothEast += 1
            }
          }
        }
        // here
        for (var direction in matchingLettersCount) {
          if (matchingLettersCount.hasOwnPorperty(direction)) {
            console.log('words  length detected ' + wordsInput[k].length)
            console.log()
            if (matchingLettersCount[direction] === wordsInput[k]) {

            }
          }
        }
      }
    }
  }
}
