// Функција за пресметување на килограми во грами
function kilogramiVoGrami(kilogrami) {
    return kilogrami * 1000;
}

// Функција за пресметување на грами во килограми
function gramiVoKilogrami(grami) {
    return grami / 1000;
}

module.exports = {
    kilogramiVoGrami,
    gramiVoKilogrami,
};

let vaga = require('./vaga');
console.log(vaga.kilogramiVoGrami(55)); 
console.log(vaga.gramiVoKilogrami(88)); 
