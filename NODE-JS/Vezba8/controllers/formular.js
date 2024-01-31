const studentiModel = require('../models/studentiModel');

exports.getForm = (req, res) => {
  res.render('formular');
};

exports.postForm = async (req, res) => {
  const data = {
    ime: req.body.ime,
    prezime: req.body.prezime,
    prosek: req.body.prosek,
  };
  await studentiModel.add(data);
  res.redirect('/studenti');
};

exports.getStudenti = async (req, res) => {
  const data = await studentiModel.list();
  res.render('studenti', { data });
};

exports.getDeleteStudent = async (req, res) => {
  const index = req.params.i;

  if (index >= 0) {
    await studentiModel.remove(index);
  }
  res.redirect('/studenti');
};