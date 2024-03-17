import React from 'react';
import {Hello} from './components/Hello';
import {Student} from './components/Student';
import {StudentClass} from './components/StudentClass';
import {Comments} from './components/Comments';
import {FruitList} from './components/FruitList';


export function App(){

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