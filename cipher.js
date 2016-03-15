var message1 = 'INC\'IHMGE*HZHT*A*BVWRIIENTUGH-**VDSIITENE.NV*EE-R*T*AETTEO*'
var message2 = 'I*VIGWZ\'TEE*I*MO*.DTB*NA*IHRHIT-N*EAG*TNSUVHCEET-ITHEREVN*E'
var message3 = 'IAEE*NBH\'TR.SGRTM***T*E**CT-EDUWHHOTVI-IAENEENVTVZIE*NIHI*G'
var cipher = function (message) {
  var n = message.length
  var getShift = function () {
    var shift
        for (var i = 2; i < 10; i++) {
          if (message[(n-3) * i % n] === 'T' && message[(n-2) * i % n] === 'E' && message[(n-1) * i % n] === 'E') {
            shift = i
          }
        }
    return shift
  }
  
  var unscramble = function (shift) {
    var array = []
    for (var i = 0; i < n; i++) {
        array[i] = message[i * shift % n]
    }
    console.log(deciphered)
    return array
  }

  var makeText = function (message) {
    var initialMessage = ''
    for (var character of message) {
      if (character === '*') {
        initialMessage += ' '
      } else {
        initialMessage += character
      }
    }
    return initialMessage
  }

  var shift = getShift()
  var deciphered = unscramble(shift)
  var text = makeText(deciphered)
  console.log('shift=' + shift)
  console.log('Text is: '+text)
}

cipher(message1)
cipher(message2)
cipher(message3)
