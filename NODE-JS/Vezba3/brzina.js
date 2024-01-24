// Функција за конверзија на км/ч во милји/час
function kmhVoMiljiCas(kmh) {
    return kmh / 1.60934;
}

// Функција за конверзија на милји/час во км/ч
function miljiCasVoKmh(miljiCas) {
    return miljiCas * 1.60934;
}

module.exports = {
    kmhVoMiljiCas,
    miljiCasVoKmh,
};

let brzina = require('./brzina');

console.log(brzina.kmhVoMiljiCas(100)); // Конверзија на 100 км/ч во милји/час
console.log(brzina.miljiCasVoKmh(60)); // Конверзија на 60 милји/час во км/ч
