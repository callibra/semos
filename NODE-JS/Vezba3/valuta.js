// Функција за конверзија на евра во денар
function evraVoDenari(evra) {
    return evra * 61.5; 
}

// Функција за конверзија на евра во долари
function evraVoDolari(evra) {
    return evra * 1.18; 
}

// Функција за конверзија на денари во долари
function denariVoDolari(denari) {
    return denari / 50; 
}

// Функција за конверзија на долари во денари
function dolariVoDenari(dolari) {
    return dolari * 50;
}

module.exports = {
    evraVoDenari,
    evraVoDolari,
    denariVoDolari,
    dolariVoDenari,
};

let valuta = require('./valuta');
console.log(valuta.evraVoDenari(100)); 
console.log(valuta.evraVoDolari(555)); 
console.log(valuta.denariVoDolari(888)); 
console.log(valuta.dolariVoDenari(777)); 
