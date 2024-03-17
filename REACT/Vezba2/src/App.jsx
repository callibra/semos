import React from 'react';
import {Hello} from './components/Hello';
import {Student} from './components/Student';
import {StudentClass} from './components/StudentClass';
import {Comments} from './components/Comments';
import {FruitList} from './components/FruitList';
import {Age} from './components/Age';
import {Address} from './components/Address';

export function App(){

const users = [
    { ime: "Ana", prezime: "Anevska", adresa: "Skopje", godini: 25 },
    { ime: "Marko", prezime: "Markovski", adresa: "Ohrid", godini: 17 },
    { ime: "Petar", prezime: "Petrovski", adresa: "Skopje", godini: 30 },
    { ime: "Vesna", prezime: "Petrovska", adresa: "Tetovo", godini: 22 },
    { ime: "Jana", prezime: "Jankovska", adresa: "Bitola", godini: 19 },
    { ime: "Stefan", prezime: "Stefanovski", adresa: "Skopje", godini: 16 },
    { ime: "Ivana", prezime: "Ivanovska", adresa: "Skopje", godini: 35 },
    { ime: "Nikola", prezime: "Nikolovski", adresa: "Strumica", godini: 28 },
    { ime: "Marija", prezime: "Martinovska", adresa: "Skopje", godini: 20 },
]; 

var firstName = "Nikola";
var lastName = "Nikolovski";
var age = 27;
var student = {
  name: "Ivan",
  address: "Skopje",
  college: "UKIM",
  index: 141088
};

var hasComments = true;

var listaNaOvosje = ["apple","orange","banana"];

  return(
    <div id="app">
      <h1>Users</h1>
      <Age users={users} />
      <hr/>
      <Address users={users} />
      <hr/>
      <Hello ime="Filip" prezime="Dzukovski" godini = {20}/>
      <h2>Cas 2</h2>
      <Hello name = {firstName} prezime = {lastName} godini = {age}/>
      <hr/>
      <Student ucenik={student}/>
      <hr/>
      <StudentClass student = {student} />
      <hr/>
      <Comments hasComments = {hasComments} longComment={true}/>
      <hr/>
      <FruitList listaNaOvosje={listaNaOvosje}/>
    </div>
  );
}
