let numRows = 15;

// Increasing
for (let i = 1; i <= numRows; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '#';
    }
    console.log(row);
}

// Decreasing
for (let i = numRows - 1; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '#';
    }
    console.log(row);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function convertToWords(number) {
    let units = ["", "Eden", "Dva", "Tri", "Cetiri", "Pet", "Sest", "Sedum", "Osum", "Devet"];

    let tensDigit = Math.floor(number / 10);
    let unitsDigit = number % 10;

    let result = "";

    if (tensDigit !== 0) {
        result += units[tensDigit];

        if (unitsDigit !== 0) {
            result += " " + units[unitsDigit];
        }
    } else {
        result = units[unitsDigit];
    }

    return result.trim();
}

let number = 88;
let words = convertToWords(number);

console.log(number + " in words: " + words);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let patterns = {
    I: [
        '########',
        '   ##   ',
        '   ##   ',
        '   ##   ',
        '########'
    ],
    V: [
        '#     #',
        ' #   # ',
        '  # #  ',
        '   #   ',
        '   #   '
    ],
    A: [
        '    #    ',
        '   ###   ',
        '  #   #  ',
        ' ####### ',
        '#       #'
    ],
    N: [
        '#       #',
        '##      #',
        '# #     #',
        '#  ##   #',
        '#    ###'
    ]
};

let name = 'IVAN';

for (let i = 0; i < patterns['I'].length; i++) {
    let row = '';
    for (let letterIndex in name) {
        let letter = name[letterIndex];
        row += patterns[letter][i];
        if (letterIndex < name.length - 1) {
            row += '     '; // Add 5 spaces between letters
        }
    }
    console.log(row);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////