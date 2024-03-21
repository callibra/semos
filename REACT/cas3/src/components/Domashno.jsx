// Ke kreirate 4 useri so atributi {ime,prezime,adresa,godini} vo App.jsx fajlot definirani kako varijabli
// koristejki props vo 2 posebni fajla ke gi prefrlite userite vo edniot fajl (Age.jsx)
// ke gi prikazete userite koi se postari od 18 god za ostanatite ke prikazete paragraf "Less then 18",
// vo drugiot fajl  (Address.jsx) ke gi prikazete userite koi imaat adresa Skopje.
// **Atributite na userite gi zadavate vie

export const Domashno = ({ korisnik1, korisnik2, korisnik3, korisnik4 }) => {
  return (
    <div id="domashno">
      <h1>Users:</h1>

      <h2>User 1</h2>
      { korisnik1.godini >=18 && korisnik1.adresa === "Skopje" ?
        <div>
          <p>Ime: {korisnik1.ime}</p>
          <p>Prezime: {korisnik1.prezime}</p>
          <p>Adresa: {korisnik1.adresa}</p>
          <p>Godini: {korisnik1.godini}</p>
        </div>  : <h2>Ne e od Skopje ili ima pomalku od 18 godini</h2>
      }
      <h2>User 2</h2>
      { korisnik2.godini >=18 && korisnik2.adresa === "Skopje" ?
        <div>
        <p>Ime:{korisnik2.ime}</p>
      <p>Prezime: {korisnik2.prezime}</p>
      <p>Adresa: {korisnik2.adresa}</p>
      <p>Godini: {korisnik2.godini}</p>
      </div> : <h2>Ne e od Skopje ili ima pomalku od 18 godini</h2>
      }
      <h2>User 3</h2>
      { korisnik3.godini >=18 || korisnik3.adresa === "Skopje" ?
        <div>
        <p>Ime: {korisnik3.ime} </p>
      <p>Prezime: {korisnik3.prezime} </p>
      <p>Adresa: {korisnik3.adresa} </p>
      <p>Godini: {korisnik3.godini}</p>
      </div> : <h2>Ne e od Skopje ili ima pomalku od 18 godini</h2>
      }
      <h2>User 4</h2>
      
     { korisnik4.godini >=18 && korisnik4.adresa === "Skopje" ?
        <div>
         <p>Ime: {korisnik4.ime} </p>
      <p>Prezime: {korisnik4.prezime} </p>
      <p>Adresa: {korisnik4.adresa}</p>
      <p>Godini: {korisnik4.godini} </p>
      </div> : <h2>Ne e od Skopje ili ima pomalku od 18 godini</h2>
      }
    </div>
  );
};
