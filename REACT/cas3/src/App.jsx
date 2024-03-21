import React from 'react';
import {Domashno} from './components/Domashno';
import {Comments} from './components/Comments';
import {Car} from './components/Car';
import {User} from './components/User';

export function App(){

  let user1 = {ime:"Ile",prezime:"Ilovski",adresa:"Skopje",godini:22};
  let user2 = {ime:"Ivan",prezime:"Ivanovski",adresa:"Debar",godini:17};
  let user3 = {ime:"Ivana",prezime:"Ivanovska",adresa:"Skopje",godini:15};
  let user4 = {ime:"Mile",prezime:"Milenkov",adresa:"Gostivar",godini:24};

  let comments = [
    {id:0, author:"Filip",content:"Comment One"},
    {id:1, author:"Elena",content:"Comment Two"},
    {id:2, author:"Nikola",content:"Too much Comments..."},
  ];

  
  const registracija = [
    {grad:{naselba:"N1",ulica:"Ul.1"},oznaka:"SK-0000-AB"},
    {grad:{naselba:"N2",ulica:"Ul.2"},oznaka:"GV-0000-AB"},
    {grad:{naselba:"N3",ulica:"Ul.3"},oznaka:"TE-1111-AB"}
  ]

  let cars = [
    {brand:"Ford",model:"Fiesta",year:2008,plates:registracija[0]},
    {brand:"Opel",model:"Astra",year:2015,plates:registracija[1]},
    {brand:"VW",model:"Polo",year:2022,plates:registracija[2]}
  ];

  const users = [
    {id:1,name:"Igor",adresa:"Delcevo",date:'11/01/2011'},
    {id:2,name:"Nikola",adresa:"Kriva Palanka",date:"12/02/2012"},
    {id:3,name:"Ana",adresa:"Valandovo",date:"13/03/2013"}
  ]

  return(
    <div id="app">
      {/* <Domashno korisnik1={user1} korisnik2={user2} korisnik3={user3} korisnik4={user4}/> */}
      <Comments listOfComments={comments} datum="19/3/2024"/>
      <Car vozila={cars}/>
      <div id="user-mapping">
        {users.map(user=>{
          return(
            <User key={user.id} name={user.name} adresa={user.adresa}>
              <p>Datum: {user.date}</p>
            </User>
          )
        })}
      </div>
    </div>
  )
}