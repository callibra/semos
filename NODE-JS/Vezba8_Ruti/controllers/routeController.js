const path = require('path');
const dataModel = require('../models/dataModel');

//Avtomobili
function getCarModelsData(req, res) {
  const data = dataModel.getData('carModels');
  const viewPath = path.join(__dirname, '..', 'views', 'carModels.ejs');
  res.render(viewPath, { data });
}

function postCarModelsData(req, res) {
  const { carModel, productionYear, mileage } = req.body;
  const id = new Date().getTime();
  dataModel.appendData('carModels', { id, carModel, productionYear, mileage });
  res.redirect('/carModels');
}

//Poeni
function getPointsData(req, res) {
  const data = dataModel.getData('points');
  const viewPath = path.join(__dirname, '..', 'views', 'points.ejs');
  res.render(viewPath, { data });
}

function postPointsData(req, res) {
  const { firstName, lastName, city, points } = req.body;
  const id = new Date().getTime();
  dataModel.appendData('points', { id, firstName, lastName, city, points });
  res.redirect('/points');
}

function deletePointsData(req, res) {
  const { id } = req.params;
  dataModel.deleteData('points', id);
  res.redirect('/points');
}

module.exports = {
  getCarModelsData,
  postCarModelsData,
  getPointsData,
  postPointsData,
  deletePointsData,
};
