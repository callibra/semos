//? Zadacha broj 1
//? Da se kreira funkcijalna ekspresija so ime c2f koja kje konvertira celziusovi stepeni vo garenhaht

function c2f(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

let temperatureCelsius = 18;
let temperatureFahrenheit = c2f(temperatureCelsius);
console.log(temperatureCelsius + " stepeni Celsiusovi se ednakvi na " + temperatureFahrenheit + " stepeni Fahrenheitovi.");

//? Zadacha broj 2
//? Da se kreira Fat Arrow Function so ime f2c koja kje konvertira farenhajt vo celzius,
//? i koja vo megju vreme kje logira ako temperaturata e pod 0, kje logira deka temperaturata e niska,
//? od 0 do 22 stepeni kje logira deka temperaturata e nomrlana i nad 22 stepeni kje logira temperaturata e pokachena
//? NAPOMENA FUNCKIJATA TREBA DA GO VRATI BROJOT VO STEPENI

let f2c = (fahrenheit1) => {
    const celsius = (fahrenheit1 - 32) * 5/9;

    if (celsius < 0) {
        console.log(`Temperaturata e niska: ${celsius} stepeni Celsiusovi`);
    } else if (celsius >= 0 && celsius <= 22) {
        console.log(`Temperaturata e normalna: ${celsius} stepeni Celsiusovi`);
    } else {
        console.log(`Temperaturata e visoka: ${celsius} stepeni Celsiusovi`);
    }

    return celsius;
};

let temperatureFahrenheit1 = 88;
let temperatureCelsius1 = f2c(temperatureFahrenheit1);


//? Zadacha broj 3
//? Da se kreira metoda vo objekt kade shto objektot bi imal 2 parametri prviot bi bil broj 1 so nekakva vrednost i vtoriot parametar bi bil boj2, metodata bi se vikala zbir kade sto kje treba da gi soberi prviot i vtoriot parametar od objektot

let myObject = {
    broj1: 15,
    broj2: 88,
    zbir: function() {
        return this.broj1 + this.broj2;
    }
};

console.log(`Zbirot na brojot1 i brojot2 e: ${myObject.zbir()}`);





