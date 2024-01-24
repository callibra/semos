const vagaModul = require('./vaga');
const valutaModul = require('./valuta');
const brzinaModul = require('./brzina');

// Vaga
const grama = 500;
const kilogrami = vagaModul.gramiVoKilogrami(grama);
console.log(`${grama} grama e ${kilogrami} kilograma.`);

// Valuta
const evra = 50;
const dolari = valutaModul.evraVoDolari(evra);
console.log(`${evra} evra e ${dolari} dolari.`);

const denari = valutaModul.evraVoDenari(evra);
console.log(`${evra} evra e ${denari} denari.`);

// Brzina
const kmhVrednost = 88;
const miljiCasVrednost = 88;

const miljiCas = brzinaModul.kmhVoMiljiCas(kmhVrednost);
console.log(`${kmhVrednost} km/h e ${miljiCas} milji/h.`);

const kmh = brzinaModul.miljiCasVoKmh(miljiCasVrednost);
console.log(`${miljiCasVrednost} milji/h e ${kmh} km/h.`);
