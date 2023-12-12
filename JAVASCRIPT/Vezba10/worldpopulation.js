document.addEventListener('DOMContentLoaded', function () {
    const countryTable = document.getElementById('country-table');
    const tbody = countryTable.querySelector('tbody');

    // Fetch data from restcountries API
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                // Create table rows
                data.forEach(country => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td><img src="${country.flags.svg}" alt="Flag"></td>
                        <td>${country.name.common}</td>
                        <td>${country.capital ? country.capital[0] : 'N/A'}</td>
                        <td>${country.population ? country.population.toLocaleString() : 'N/A'}</td>
                        <td>${country.area ? country.area.toLocaleString() : 'N/A'}</td>

                    `;
                    tbody.appendChild(row);
                });
            } else {
                console.error('No data received from the API');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});
