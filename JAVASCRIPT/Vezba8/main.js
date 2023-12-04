let fetchStarWarsData = async () => {
  try {
    let response = await fetch("https://swapi.dev/api/people/1/");
    let personData = await response.json();
    return personData;
  } catch (error) {
    console.error('Error:', error.message);
    throw new Error(error.message);
  }
};

let displayPersonData = async () => {
  try {
    let person = await fetchStarWarsData();
    createVerticalTable(person);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

let createVerticalTable = (person) => {
  let table = document.createElement('table');
  let tbody = table.createTBody();

  for (let key in person) {
    if (person.hasOwnProperty(key)) {
      let row = tbody.insertRow();
      
      let th = document.createElement('th');
      th.textContent = key;
      row.appendChild(th);
    
      let td = document.createElement('td');
      td.textContent = person[key];
      row.appendChild(td);
    }
  }

  table.style.marginTop = '20px';
  table.style.marginBottom = '20px';

  document.body.appendChild(table);
};

displayPersonData();


