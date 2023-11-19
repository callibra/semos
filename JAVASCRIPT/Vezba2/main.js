let a = 7;

switch (a) {
    case 1:
        a = 'eden';
        break;
    case 2:
        a = 'dva';
        break;
    case 3:
        a = 'tri';
        break;
    case 4:
        a = 'cetiri';
        break;           
    default:
        a = 'Nepoznat';
        break;
}
        console.log(`Brojot e: ${a}`);

//////////////////////////////////////////////////////////////////////////////////////////////////////

var Zoo = 'Macka'

switch (Zoo){
    case 'Krava':
    case 'Kuce':
    case 'Macka':
        console.log("Ova e domasno zivotno.");
        break;
    case "Tigar":
    case "Lav":
    case "Puma":
        console.log("Ova e stepsko zivotno.");
        break;
    case "Mecka":
    case "Volk":
        console.log("Ova e divo zivotno");
    default:
        console.log("Ova zivotno go nema vo Zoo.");
} 

//////////////////////////////////////////////////////////////////////////////////////////////////////

let day = "Nedela"

switch (day){
    case "Ponedelnik":
        console.log("Vo 15 casot imate trening");
        break;
    case "Vtornik":
        console.log("Vo 20 casot kino prestava");
        break;
    case "Sreda":
        console.log("Vo 10 casot vo market");
        break;
    case "Cetvrtok":
        console.log("Vo 18 casot na trening");
        break;
    case "Petok":
        console.log("Vo 19 casot predavanje");
        break;
    case "Sabota":
        console.log("Vo 20 casot izleguvanje vo grad");
        break;
    case "Nedela":
        console.log("Sloboden den");                       
}

////////////////////////////////////////////////////////////////////////////////////////////////////

let broj = 66;
let rep;
switch (true) {
    case broj <= 5:
	rep = "mal"
		break;
	case broj > 5 && broj <= 15:
    rep = "dobar"
		break;
	case broj > 15 && broj <= 30:
    rep = "odlicen"
		break; 
    default:
    rep = "predobar" 	
}
        console.log(`Brojot na povtoruvanja e: ${rep}`); 

////////////////////////////////////////////////////////////////////////////////////////////////////

let kategorija;
let kg = 95;
let uslovzaPriem = true;

    switch (uslovzaPriem) {
    case kg <= 50 || kg >= 105:
    kategorija = "neodredena";
        break;
    case kg >= 50 && kg <= 65: 
    kategorija = "lesna";
        break;
    case kg >= 66 && kg <= 75:
    kategorija = "sredna";
        break;
    case kg >= 76 &&  kg <= 85:
    kategorija = "sredno lesna";
        break;
    case kg >= 86 && kg <= 95:
    kategorija = "sredno teska";
        break;
    case kg >= 96 && kg <= 105:
    kategorija = "teska";
        break;
}
        console.log(`Vasata katergorija e: ${kategorija}`); 

 ///////////////////////////////////////////////////////////////////////////////////////////////////

function greet(name) {
        console.log(`Dobrodojdovte vo ${name}`);
}
    greet("Skopje");

///////////////////////////////////////////////////////////////////////////////////////////////////

function matOperacija(broj1, broj2, broj3, broj4,) {
        console.log((broj1 + broj2 - broj3)*broj4);
}
    matOperacija(5,6,3,1)

///////////////////////////////////////////////////////////////////////////////////////////////////

function verifikacija(name) {             
function Toni() {              
        return name === "Toni";      
}
    if (Toni()) {
        console.log("Ova e Toni");
}   else {
        console.log("Ova ne e Toni");
}
}
    verifikacija("Roki");

///////////////////////////////////////////////////////////////////////////////////////////////////

var parms = {ime: "Vero", ulica: "Partizanska 55", grad: "Skopje",}

function createCompany(parms) {
    var name = parms.ime;
    var street = parms.ulica;
    var city = parms.grad;
    console.log("Kompanija: " + parms.ime, "Ulica: " + parms.ulica, "Grad: " + parms.grad,);
}
    createCompany(parms);

//////////////////////////////////////////////////////////////////////////////////////////////////

var br = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let neparni = br.filter((num) => num % 2 == !0);

    console.log(neparni);

//////////////////////////////////////////////////////////////////////////////////////////////////

var ime = ['ivan', 'marjan' , 'marija' , 'maja' , 'darko' , 'ace' , 'filip' , 'robert'];

var filterIme = ime.filter(function(word) {
    return word.length > 5 && word[0] === "m";
})
   console.log(filterIme);

///////////////////////////////////////////////////////////////////////////////////////////////////

function brojac() {
    let broj = 5; 
      return 25 + broj - 5;{
    }
}
    let rez = brojac();
    console.log(`Brojot e: ${rez}`);  

///////////////////////////////////////////////////////////////////////////////////////////////////

function celsiustoF(celsius) {
    var tem = celsius;
    var celsiustoF = tem * 9 / 5 + 32;
    console.log(tem + ' C e ' + celsiustoF + ' F.');
}
    celsiustoF(30)

///////////////////////////////////////////////////////////////////////////////////////////////////

function fahrenheittoC(fahrenheit) {
    var tem = fahrenheit;
    var fahrenheittoC = (tem - 32) * 5 / 9;
    console.log(tem + ' F e ' + fahrenheittoC + ' C.');
}
    fahrenheittoC(88)

///////////////////////////////////////////////////////////////////////////////////////////////////

function inctoM(number) {
    var inc = number
    var inctoM = number * 0.0254;
    console.log(inc + ' Inc e ' + inctoM + ' Met.');
}
    inctoM(33)
///////////////////////////////////////////////////////////////////////////////////////////////////

var gradovi = ["Skopje","Bitola","Kumanovo","Ohrid","Stip"]
var drzavi = ["Srbija","Grcija","Turcija","Germanija","Francija","Anglija","Belgija","Spanija","Rusija","Hrvatska","Italija"]
var mix = [...gradovi,...drzavi]
    console.log(mix)

///////////////////////////////////////////////////////////////////////////////////////////////////

