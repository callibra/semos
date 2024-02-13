const fs = require('fs');

//Avtomobili
function getData(route) {
  try {
    const data = fs.readFileSync(`./models/${route}.json`, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading data for ${route}:`, error);
    return [];
  }
}

function saveData(route, newData) {
  try {
    fs.writeFileSync(`./models/${route}.json`, JSON.stringify(newData, null, 2));
  } catch (error) {
    console.error(`Error saving data for ${route}:`, error);
  }
}

//Poeni
function appendData(route, newData) {
  try {
    const data = getData(route);
    data.push(newData);
    saveData(route, data);
  } catch (error) {
    console.error(`Error appending data for ${route}:`, error);
  }
}

function deleteData(route, id) {
  try {
    let data = getData(route);
    data = data.filter(item => item.id !== parseInt(id));
    saveData(route, data);
  } catch (error) {
    console.error('Error deleting data:', error);
  }
}

module.exports = { getData, saveData, appendData, deleteData, };


