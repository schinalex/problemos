var piramida = function (n) {
  for (var i = 1; n > 0; i++) {
    n -= i
  }
  var a = 1 - n
  var b = i - a
  console.log('A' + a + ' B' + b)
}

piramida(5)
piramida(11)
