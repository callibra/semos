window.onload = function() {
let books = [ { Naslov: "Kniga 1", Avtor: "Avtor 1" }, { Naslov: "Kniga 2", Avtor: "Avtor 2" }, { Naslov: "Kniga 3", Avtor: "Avtor 3" }, { Naslov: "Kniga 4", Avtor: "Avtor 4" }, { Naslov: "Kniga 5", Avtor: "Avtor 5" },];
    
let tableBody = document.getElementById('bookTable').getElementsByTagName('tbody')[0];
let rows = [];
  
function addBookRow(book) {
    let newRow = tableBody.insertRow();
    rows.push(newRow);
  
    let titleCell = newRow.insertCell(0);
    let authorCell = newRow.insertCell(1);
    let actionCell = newRow.insertCell(2);
  
    titleCell.innerHTML = book.Naslov;
    authorCell.innerHTML = book.Avtor;
  
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function () {
    let rowIndex = rows.indexOf(newRow);
  
    tableBody.deleteRow(rowIndex);
  
    books.splice(rowIndex, 1);
  
    rows.splice(rowIndex, 1);
};
    actionCell.appendChild(deleteButton);
}

    books.forEach(addBookRow);
};
  