const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let array10 = [];
      for (let i = 0; i < expr.length; i+=10) {
        const arrayblock = expr.slice(i, i + 10);
        array10.push(arrayblock)
      }
    let uncode = [];
    let stringUncode;
    
      
    for (let i = 0; i < array10.length; i++) {
      stringUncode = "";
      if (array10[i] === "**********") {
        stringUncode = "space"
      } else {  
        for (let j = 0; j < array10[i].length; j+=2) {
          if (array10[i][j] === '1' && array10[i][j+1] === '1') {
            stringUncode = stringUncode + '-'
        } else if (array10[i][j] === '1' && array10[i][j+1] === '0') {
            stringUncode = stringUncode + '.'
          }
        }  
      }
      uncode.push(stringUncode);
    }
    MORSE_TABLE.space = " "
    let decodeArray = uncode.map (i => MORSE_TABLE[i]);
    let result = decodeArray.join('')
   return result
    }
    

module.exports = {
    decode
}
