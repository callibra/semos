//koga kje pristapam na /form ruta da izleze forma
//odkako kje submitiram formata da me prenasoci na studenti pejgot so ruta /studenti kade kje bidat prikazani site studenti
//i da ima funkionalnost da se brishat studentite od tabelata so kopce delete
const express = require('express');
const formular = require('./controllers/formular');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/form', formular.getForm); // kje se prikaze formularot
app.post('/form', formular.postForm); //kje imame funkcionalost za submitiranje - i kje imame redirekt na ruta /studenti
app.get('/studenti', formular.getStudenti);
app.get('/brishi/:i', formular.getDeleteStudent);


app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log('Server successfully started on port 10000');
});

//i da se proba da se kreira delete funkcionalnost na vezbata na chas

