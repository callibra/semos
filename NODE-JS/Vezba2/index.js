//? DOMASNA ZADACHA
const studenti = [
    { ime: 'Bojan', prosek: 6.2, grad: 'Skopje' },
    { ime: 'Vesna', prosek: 9.7, grad: 'Skopje' },
    { ime: 'Artina', prosek: 9.7, grad: 'Skopje' },
    { ime: 'Elena', prosek: 9.7, grad: 'Skopje' },
    { ime: 'Atanas', prosek: 9.1, grad: 'Skopje' },
    { ime: 'Elena', prosek: 6.2, grad: 'Bitola' },
    { ime: 'Muhamed', prosek: 10, grad: 'Kumanovo' },
    { ime: 'Dzejlan', prosek: 9.2, grad: 'Kumanovo' },
    { ime: 'Milim', prosek: 7.2, grad: 'Kumanovo' },
    { ime: 'Selim', prosek: 7.8, grad: 'Kichevo' },
    { ime: 'Martina', prosek: 5.2, grad: 'Tetovo' },
    { ime: 'Simona', prosek: 5.2, grad: 'Bitola' },
    { ime: 'Stojmir', prosek: 6.2, grad: 'Strumica' },
    { ime: 'Mitre', prosek: 8, grad: 'Pehcevo' },
    { ime: 'Damjan', prosek: 5, grad: 'Shtip' },
    { ime: 'Aleksandar', prosek: 7, grad: 'Veles' },
  ];

//? 1. Site studenti od Skopje chie ime zavrshuva na a i imaat prosek nad 7 pordedeni po ime(rasyechki)
console.log("1. Site studenti od Skopje chie ime zavrshuva na a i imaat prosek nad 7 pordedeni po ime:");

let filtriraniStudentiSkopje = studenti
    .filter(student => student.grad === 'Skopje' && student.ime.endsWith('а') && student.prosek > 7)
    .sort((a, b) => a.ime.localeCompare(b.ime));
  
console.log(filtriraniStudentiSkopje);

//? 2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjachki
console.log("2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjachki:");

let filtriraniStudentiVisokProsek = studenti
  .filter(student => student.grad !== 'Skopje' && student.prosek > 9)
  .sort((a, b) => b.prosek - a.prosek);

console.log(filtriraniStudentiVisokProsek);


//? 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek
console.log("3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek:");

let filtriraniStudentiPetKarakteri = studenti
  .filter(student => student.ime.length === 5)
  .sort((a, b) => b.prosek - a.prosek)
  .slice(0, 3);

console.log(filtriraniStudentiPetKarakteri);


//? 4. Vkupen prosek na studenti koi se od Kumanovo
console.log("4. Vkupen prosek na studenti koi se od Kumanovo:");

let prosekKumanovo = studenti
  .filter(student => student.grad === 'Kumanovo')
  .reduce((acc, student) => acc + student.prosek, 0) /
  studenti.filter(student => student.grad === 'Kumanovo').length;

console.log(prosekKumanovo);

//? 5. Prosek na prosecite od gradovite Skopje i Ohrid
console.log("5. Prosek na prosecite od gradovite Skopje i Ohrid:");
let studentiSkopjeOhrid = studenti.filter(student => ['Skopje', 'Ohrid'].includes(student.grad));
let prosekSkopjeOhrid = studentiSkopjeOhrid.reduce((acc, student) => acc + student.prosek, 0) / studentiSkopjeOhrid.length;

console.log(prosekSkopjeOhrid);

//? 6. Da se dodade usgte eden student so ime Goran prosek 8.3 i Strumica
console.log("6. Da se dodade usgte eden student so ime Goran prosek 8.3 i Strumica:");

let novStudent = { ime: 'Goran', prosek: 8.3, grad: 'Strumica' };
studenti.push(novStudent);

console.log(novStudent);
console.log("Ажурирана листа со студенти:");
console.log(studenti);

//? 7. Da se izbrishe prviot student vo studenti
console.log("7. Da se izbrishe prviot student vo studenti:");

let izbrisanStudent = studenti.shift();
console.log(izbrisanStudent);

console.log("Новата листа со студенти:");
console.log(studenti);

//? 8. Da se kreira nov array kade shto studentite od Ohrid, Skopje i Kumanovo kade shto ocenkite so prosek se za 1 pogolem (Dinamichki)
console.log("8. Da se kreira nov array kade shto studentite od Ohrid, Skopje i Kumanovo kade shto ocenkite so prosek se za 1 pogolem (Dinamichki):");

const studenti2 = studenti
  .filter(student => ['Skopje', 'Ohrid', 'Kumanovo'].includes(student.grad))
  .map(student => ({ ime: student.ime, prosek: student.prosek + 1, grad: student.grad }));

console.log(studenti2);




