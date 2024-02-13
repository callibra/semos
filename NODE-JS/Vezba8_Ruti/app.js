//10 ruti da se kreiraat
//10 razlicni jsoni za sekoj handler baska
//site da imaat i post i get metodi
//da imate view soodvetno za sekoj handler ili kontoler


const express = require('express');
const methodOverride = require('method-override');
const routeController = require('./controllers/routeController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

// Ruta za avtomobili
app.get('/carModels', routeController.getCarModelsData);
app.post('/carModels', routeController.postCarModelsData);

// Ruta za dodavanje na poeni
app.get('/points', routeController.getPointsData);
app.post('/points', routeController.postPointsData);

// Ruta za brisenje na poeni
app.delete('/points/:id', routeController.deletePointsData);

const port = 10000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
