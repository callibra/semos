function fetchBook(bookId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const books = {
          1: { title: 'Book 1', author: 'Author 1' },
          2: { title: 'Book 2', author: 'Author 2' },
          3: { title: 'Book 3', author: 'Author 3' },
        };
  
        const book = books[bookId];
  
        if (book) {
          resolve(book);
        } else {
          reject(`Book with ID ${bookId} not found`);
        }
      }, 2000);
    });
  }
  
 
  fetchBook(1)
    .then(book => console.log('Fetched book:', book))
    .catch(error => console.error('Error:', error));
  
  async function fetchBookAsync() {
    try {
      const book = await fetchBook(3);
      console.log('Fetched book (async):', book);
    } catch (error) {
      console.error('Error (async):', error);
    }
  }
  
  fetchBookAsync();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

function fetchCarDetails(make, model) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const carDetails = {
          'Toyota-Camry': { make: 'Toyota', model: 'Camry', year: 2022, color: 'Silver' },
          'Honda-Civic': { make: 'Honda', model: 'Civic', year: 2023, color: 'Blue' },
          'Ford-Mustang': { make: 'Ford', model: 'Mustang', year: 2022, color: 'Red' },
        };
  
        const carDetail = carDetails[`${make}-${model}`];
  
        if (carDetail) {
          resolve(carDetail);
        } else {
          reject(`Car details for ${make} ${model} not found`);
        }
      }, 3000);
    });
  }
  
  fetchCarDetails('Honda', 'Civic')
    .then(details => console.log('Fetched car details:', details))
    .catch(error => console.error('Error:', error));
  
  async function fetchCarDetailsAsync() {
    try {
      const details = await fetchCarDetails('Ford', 'Mustang');
      console.log('Fetched car details (async):', details);
    } catch (error) {
      console.error('Error (async):', error);
    }
  }
  
  fetchCarDetailsAsync();
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fetchMenu(cuisine) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const menus = {
          'italian': ['Spaghetti Bolognese', 'Margherita Pizza', 'Tiramisu'],
          'mexican': ['Tacos', 'Guacamole', 'Enchiladas'],
          'indian': ['Chicken Curry', 'Naan Bread', 'Gulab Jamun'],
        };
  
        const menuItems = menus[cuisine];
  
        if (menuItems) {
          resolve(menuItems);
        } else {
          reject(`Menu for ${cuisine} cuisine not found`);
        }
      }, 4000);
    });
  }
  
  async function fetchMenuAsync() {
    try {
      const italianMenu = await fetchMenu('italian');
      console.log('Italian Menu:', italianMenu);
  
      const mexicanMenu = await fetchMenu('mexican');
      console.log('Mexican Menu:', mexicanMenu);
  
      const indianMenu = await fetchMenu('indian');
      console.log('Indian Menu:', indianMenu);
    } catch (error) {
      console.error('Error (async):', error);
    }
  }
  
  fetchMenuAsync();
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fetchPublicAPIs() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('https://api.publicapis.org/entries');
        const data = await response.json();
  
        const firstFiveEntries = data.entries.slice(0, 30);
  
        resolve(firstFiveEntries);
      } catch (error) {
        reject(`Error fetching public APIs: ${error.message}`);
      }
    });
  }
  
  async function fetchPublicAPIsAsync() {
    try {
      const apis = await fetchPublicAPIs();
      console.log('First 30 Public APIs:', apis);
    } catch (error) {
      console.error('Error (async):', error);
    }
  }
  
  fetchPublicAPIsAsync();
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function fetchWeatherData() {
    const apiKey = 'b475fbd8340ed35f0c83301c4d923ccf';
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=41.86956&lon=21.95274&units=metric&appid=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error fetching weather data: ${error.message}`);
    }
  }
  
  
  async function getWeather() {
    try {
      const weatherData = await fetchWeatherData();
      console.log('Weather Data:', weatherData);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  getWeather();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////