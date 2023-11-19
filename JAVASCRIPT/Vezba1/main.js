var age = 20;
    if( age > 18 ) {
        console.log("Kvalifikacija za vozac");
}

//////////////////////////////////////////////////
 
var age = 15;      
   if( age > 18 ) {
        console.log("Kvalifikacija za vozac");
}  else {
        console.log("Nemate kvalifikacija za vozac");
}

/////////////////////////////////////////////////

let num = 10;
    if (num == 10) {
       console.log("Brojot e 10");
}   else if (num > 10) {
       console.log("Brojot e pogolem od 10");
}   else if (num < 10) {
       console.log("Brojot e pomal od 10");
}   

/////////////////////////////////////////////////

let broj = 88
    if (broj >= 10 && broj <= 20){
        console.log("Brojot ma povtoruvanja e mal")
}   else if(broj >= 21 && broj <= 30){
        console.log("Brojot ma povtoruvanja e dobar")
}   else if(broj >= 31){
        console.log("Brojot ma povtoruvanja e odlicen")
}   else {
        console.log("Vnesete broj")
}


////////////////////////////////////////////////

let book = "ekonomija";
    if( book == "istorija" ) {
        console.log("Istorija PDF");
}   else if( book == "matematika" ) {
        console.log("Matematika PDF");
}   else if( book == "ekonomija" ) {
        console.log("Ekonomija PDF");
}   else {
        console.log("Nepoznata PDF");
}

/////////////////////////////////////////////////

let month = 8;
let monthName;
    if (month == 1) {
       monthName = 'Januari';
}   else if (month == 2) {
       monthName = 'Februari';
}   else if (month == 3) {
       monthName = 'Mart';
}   else if (month == 4) {
       monthName = 'April';
}   else if (month == 5) {
       monthName = 'Maj';
}   else if (month == 6) {
       monthName = 'Juni';
}   else if (month == 7) {
       monthName = 'Juli';
}   else if (month == 8) {
       monthName = 'Avgust';
}   else if (month == 9) {
       monthName = 'Septemvri';
}   else if (month == 10) {
       monthName = 'Octomvri';
}   else if (month == 11) {
       monthName = 'Noemvri';
}   else if (month == 12) {
       monthName = 'Dekemvri';
}   else {
       monthName = 'Nepoznato';
}
       console.log(monthName);

/////////////////////////////////////////////////

let i = 15;
    if(i % 15 == 0){
        console.log("FizzBuzz")
}   else if(i % 5 == 0){
        console.log("Buzz")
}   else if(i % 3 == 0){
        console.log("Fizz")
}   else {
        console.log(i)
}
    
//////////////////////////////////////////////////

var tezina = 75; 
var visina = 1.77; 
let BMI = tezina / (visina * visina);
    if (BMI < 18.5) {
        console.log("Pod prosecna tezina");
}   else if (BMI >= 18.5 && BMI <= 24.9) {
        console.log("Normalna tezina");
}   else if (BMI >= 25 && BMI <= 29.9) {
        console.log("Pokacena tezina");
}   else {
        console.log("Debel");
}

////////////////////////////////////////////////////

var x=2;
    if (x % 2 != 0) {
        console.log("Neparen");
}   else if(x % 2 == 0){
        console.log("Paren");
}   else{
        console.log("Ne e broj");
}

////////////////////////////////////////////////////

var vreme = 15 ;
    if (vreme < 10) {
        console.log("Dobro utro");
}   else if (vreme < 20) {
        console.log("Dobar den");
}   else {
        console.log("Dobra vecer");
}

////////////////////////////////////////////////////

var vodniZivotni = "Ajkula"
     if (vodniZivotni === "Riba"){
        console.log("Zivee vo morinjata")
}    else if (vodniZivotni === "Zaba"){
        console.log("Zivee vo rekite")
}    else if (vodniZivotni === "Ajkula"){
        console.log("Zivee vo okeanite")
}    else {
        console.log("Ova zivotno ne zivee vo voda")
}

///////////////////////////////////////////////////

var mesec = 'May';
    if (mesec == 'January' || mesec == 'March' || mesec == 'May' || mesec == 'July' || mesec == 'August' || mesec == 'October' || mesec == 'December') {
        console.log("Ovoj mesec ima 31 den");
}   else if (mesec == 'February') {
        console.log("Ovoj mesec ima 28 ili 29 dena");
}   else {
        console.log("Ovoj mesec ima 30 dena");
}

////////////////////////////////////////////////////

var a = 1
var b = 2
var c = 3
var d = 4
var e = 5
var f = 6
var g = 7
var h = 8

var eden = (a + b + c) * ((d + e) * (f + g - h));
        console.log(eden)
var dva= (a / b + (c + d)) - e + (f + g / h);
        console.log(dva)
var tri = a % b + (c / d) + (e + f + g) * h;
        console.log(tri) 
var cetiri = a + (b - c - d + e) + (f + g % h);
        console.log(cetiri)
var pet = ((a + b) * (c + d)) / ((e + f) - (g + h));
        console.log(pet)
        console.log(eden, dva, tri, cetiri, pet)

////////////////////////////////////////////////////

  
  