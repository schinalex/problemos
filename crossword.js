var keywordsNr = 7
var rowsNr = 5
var columnsNr = 8
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
      console.log('k=' + k)
      if (crossword[i][j] === wordsInput[k].charAt(0)) {
        console.log('crossword[' + i + '][' + j + ']=' + crossword[i][j])
        var wordLength = wordsInput[k].length
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
        var checkIfKeywordIsFound = function (count, wordLength, direction, i, j, k) {
          console.log('count=' + count)
          console.log('wordLength=' + wordLength)
          console.log('k=' + k)
          console.log('i2=' + i2)
          if (count === wordLength) {
            console.log('==>FOUND!!!!')
            keywords[k].found = true
            keywords[k].positions.push([i, j])
            keywords[k].directions.push(direction)
          }
        }
        console.log('start!')
        console.log('i2=' + i2)
        for (var i2 = 0; i2 < wordLength; i2++) {
          if (i + wordLength < rowsNr) {
            // if the word mathes vertically
            // from top to bottom (South)
            if (crossword[i + i2][j] === wordsInput[k].charAt(i2)) {
              matchingLettersCount.south += 1
              checkIfKeywordIsFound(matchingLettersCount.south, wordLength, 'south', i, j, k)
            }
          }

          if (i - wordsInput[k] >= 0) {
            // if the word mathes vertically
            // from bottom to top (North)
            if (crossword[i - i2][j] === wordsInput[k].charAt(i2)) {
              matchingLettersCount.north += 1
              checkIfKeywordIsFound(matchingLettersCount.north, wordLength, 'north', i, j, k)
            }
          }

          if (j + wordLength < columnsNr) {
            // if the word mathes horizontally
            // from left to right (East)
            if (crossword[i][j + i2] === wordsInput[k].charAt(i2)) {
              matchingLettersCount.east += 1
              checkIfKeywordIsFound(matchingLettersCount.east, wordLength, 'east', i, j, k)
            }
          }
          if (j - wordLength >= 0) {
            // if the word mathes horizontally
            // from right to left (West)
            if (crossword[i][j - i2] === wordsInput[k].charAt(i2)) {
              matchingLettersCount.west += 1
              checkIfKeywordIsFound(matchingLettersCount.west, wordLength, 'west', i, j, k)
            }
          }
          if (i + wordLength < rowsNr && j + wordLength < columnsNr) {
            // if the word mathes diagonally (paralel with the main diagonal)
            // from top to bottom (South-East)
            if (crossword[i + i2][j + i2] === wordsInput[k].charAt(i2)) {
              matchingLettersCount.southEast += 1
              checkIfKeywordIsFound(matchingLettersCount.southEast, wordLength, 'southEast', i, j, k)
            }
          }

          if (i - wordLength >= 0 && j - wordLength >= 0) {
            // if the word mathes diagonally (paralel with the main diagonal)
            // from bottom to top (North-West)
            if (crossword[i - i2][j - i2] === wordsInput[k].charAt(i2)) {
              matchingLettersCount.northWest += 1
              checkIfKeywordIsFound(matchingLettersCount.northWest, wordLength, 'northWest', i, j, k)
            }
          }

          if (i + wordLength < rowsNr && j - wordLength >= 0) {
            // if the word mathes diagonally (paralel with the second diagonal)
            // from top to bottom (South-West)
            if (crossword[i + i2][j - i2] === wordsInput[k].charAt(i2)) {
              matchingLettersCount.southWest += 1
              checkIfKeywordIsFound(matchingLettersCount.southWest, wordLength, 'southWest', i, j, k)
            }
          }
          if (i - wordLength >= 0 && j + wordLength < columnsNr) {
            // if the word mathes diagonally (paralel with the second diagonal)
            // from bottom to top (North-East)
            if (crossword[i - i2][j + i2] === wordsInput[k].charAt(i2)) {
              matchingLettersCount.nothEast += 1
              checkIfKeywordIsFound(matchingLettersCount.northEast, wordLength, 'northEast', i, j, k)
            }
          }
        }
      }
    }
  }
}

var outputMatrix = []
for (var i3 = 0; i3 < rowsNr; i3++) {
  var row = []
  for (var j3 = 0; j3 < columnsNr; j3++) {
    row.push('.')
  }
  outputMatrix.push(row)
}

for (var keyword of keywords) {
  if (keyword.found) {
    var i4 = keyword.positions[]
    for (var direction of keyword.directions) {
      switch (direction) {
        case north:
          for (var character of keyword.word) {
            outputMatrix[i4][j4]
          }
          break;
        default:

      }
    }
  }
}
