const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..',
  'a':'.-',
	'b':'-...',
	'c':'-.-.',
	'd':'-..',
	'e':'.',
	'f':'..-.',
	'g':'--.',
	'h':'....',
	'i':'..',
	'j':'.---',
	'k':'-.-',
	'l':'.-..',
	'm':'--',
	'n':'-.',
	'o':'---',
	'p':'.--.',
	'q':'--.-',
	'r':'.-.',
	's':'...',
	't':'-',
	'u':'..-',
	'v':'...-',
	'w':'.--',
	'x':'-..-',
	'y':'-.--',
	'z':'--..'
}

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
  }