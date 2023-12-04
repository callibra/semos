let fetchStarshipsData = async () => {
  try {
    let response = await fetch("https://swapi.dev/api/starships/9/");
    let starshipData = await response.json();
    createVerticalTable(starshipData);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

let createVerticalTable = (data) => {
  let table = document.createElement('table');
  table.id = 'starshipsTable';
  let tbody = table.createTBody();

  let applyCellStyle = (cell, bgColor, textColor) => {
    cell.style.backgroundColor = bgColor;
    cell.style.color = textColor;
  };

  let addDeleteButton = (row) => {
    let deleteCell = row.insertCell();
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => row.remove());
    deleteCell.appendChild(deleteButton);
    applyCellStyle(deleteButton, '#EB1717', '#EFEFEF');
    deleteButton.style.fontSize = '1.3rem';
  };

  let addCell = (row, content, bgColor, textColor) => {
    let cell = row.insertCell();
    cell.textContent = content;
    applyCellStyle(cell, bgColor, textColor);
    return cell;
  };

  for (let [header, value] of Object.entries(data)) {
    let row = tbody.insertRow();

    addCell(row, header, '#F33838', '#F5FF77');
    addCell(row, value, '#4D4D4D', '#F0F0F0');
    addDeleteButton(row);
  }

  document.body.appendChild(table);

  let form = document.createElement('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let headerValue = event.target.header.value;
    let valueValue = event.target.value.value;
    let newRow = tbody.insertRow();
    addCell(newRow, headerValue, '#F33838', '#F5FF77');
    addCell(newRow, valueValue, '#4D4D4D', '#F0F0F0');
    addDeleteButton(newRow);
    event.target.reset();
  });
  form.style.display = 'flex';
  form.style.justifyContent = 'center';

  ['Header', 'Value'].forEach((labelText) => {
    let label = document.createElement('label');
    label.textContent = `${labelText}:`;
    form.appendChild(label);
    label.style.fontSize = '1.3rem';
    label.style.color = '#ffffff';
    label.style.padding = '0.5rem';

    let input = document.createElement('input');
    input.type = 'text';
    input.name = labelText.toLowerCase();
    form.appendChild(input);
  });

  let addButton = document.createElement('button');
  addButton.type = 'submit';
  addButton.textContent = 'New Row';
  form.appendChild(addButton);
  applyCellStyle(addButton, '#179F21', '#F0F0F0');
  addButton.style.fontSize = '1.3rem';
  addButton.style.margin = '0.5rem';

  document.body.appendChild(form);
};

fetchStarshipsData();