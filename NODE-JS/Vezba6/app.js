const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

//? Da se kreira ruta koja kje presmetuva nekoj tekst kolku zborovi ima so post metoda

// Ruta za presmetka na zborovi so POST metoda
app.post('/wordCount', (req, res) => {
  // Procesirajte form-data od Postman
  const { text } = req.body;

  if (!text) {
    return res.status(400).send('Missing text parameter');
  }

  // Presmetajte broj na zborovi
  const wordCount = text.split(/\s+/).filter(word => word !== '').length;

  // Vrati rezultat
  res.send(`Text contains ${wordCount} words.`);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? Da se kreira ruta koja kje presmetuva hipotenuza na triagolnik poznavajki gi dvete pomali strani so get i post metoda

// Ruta za presmetka na hipotenuza so GET metoda
app.get('/calculateHypotenuse/:a/:b', (req, res) => {
  const { a, b } = req.params;

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send('Invalid input. Both sides should be numeric.');
  }

  const hypotenuse = Math.sqrt(Math.pow(parseFloat(a), 2) + Math.pow(parseFloat(b), 2));

  res.send(`The hypotenuse is: ${hypotenuse}`);
});

// Ruta za presmetka na hipotenuza so POST metoda
app.post('/calculateHypotenuse', (req, res) => {
  const { a, b } = req.body;

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send('Invalid input. Both sides should be numeric.');
  }

  const hypotenuse = Math.sqrt(Math.pow(parseFloat(a), 2) + Math.pow(parseFloat(b), 2));

  res.send(`The hypotenuse is: ${hypotenuse}`);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? Da se kreira ruta koja kje presmetuva perimetar i plostina na pravoagolnik so poznati dve strani so get i post metoda

// Ruta za presmetka na perimetar i ploština so GET metoda
app.get('/rectangle/:a/:b', (req, res) => {
    const { a, b } = req.params;
  
    if (isNaN(a) || isNaN(b)) {
      return res.status(400).send('Invalid input. Both sides should be numeric.');
    }
  
    const perimeter = 2 * (parseFloat(a) + parseFloat(b));
    const area = parseFloat(a) * parseFloat(b);
  
    res.send(`Perimeter: ${perimeter}, Area: ${area}`);
  });
  
  // Ruta za presmetka na perimetar i ploština so POST metoda
  app.post('/rectangle', (req, res) => {
    const { a, b } = req.body;
  
    if (isNaN(a) || isNaN(b)) {
      return res.status(400).send('Invalid input. Both sides should be numeric.');
    }
  
    const perimeter = 2 * (parseFloat(a) + parseFloat(b));
    const area = parseFloat(a) * parseFloat(b);
  
    res.send(`Perimeter: ${perimeter}, Area: ${area}`);
  });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? Da se kreira ruta koja kako parametar kje prima godina na datum i godina na ragjanje i koja kako respond kje vrakja horoskopski znak soodveten so mesecot so get i post metoda

// Ruta za dobivanje horoskopski znak so GET metoda
app.get('/horoscope/:birthYear/:birthMonth/:currentYear/:currentMonth', (req, res) => {
    const { birthYear, birthMonth, currentYear, currentMonth } = req.params;
  
    if (isNaN(birthYear) || isNaN(birthMonth) || isNaN(currentYear) || isNaN(currentMonth)) {
      return res.status(400).send('Invalid input. All parameters should be numeric.');
    }
  
    const ageInYears = currentYear - birthYear;
    const ageInMonths = currentMonth - birthMonth;
    const age = ageInYears + ageInMonths / 12;
  
    const astroSign = calculateAstrologicalSign(age);
  
    res.send(`Your astrological sign is: ${astroSign}`);
  });
  
  // Ruta za dobivanje horoskopski znak so POST metoda
  app.post('/horoscope', (req, res) => {
    const { birthYear, birthMonth, currentYear, currentMonth } = req.body;
  
    if (isNaN(birthYear) || isNaN(birthMonth) || isNaN(currentYear) || isNaN(currentMonth)) {
      return res.status(400).send('Invalid input. All parameters should be numeric.');
    }
  
    const ageInYears = currentYear - birthYear;
    const ageInMonths = currentMonth - birthMonth;
    const age = ageInYears + ageInMonths / 12;
  
    const astroSign = calculateAstrologicalSign(age);
  
    res.send(`Your astrological sign is: ${astroSign}`);
  });
  
  // Pomosna funkcija za presmetka na horoskopski znak
  function calculateAstrologicalSign(age) {
    const zodiacSigns = [
      'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini',
      'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius'
    ];
  
    // Mesecot počnuva od 0, pa treba da se zgolemi za 1
    const signIndex = Math.floor(age) % 12;
  
    return zodiacSigns[signIndex];
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? da se kreira ruta koja kje presmetuva dali nekoe ime e parno neprano, i kolku karakteri ima i kolku samoglaski so post metoda

// Ruta za konverzija na valuta so GET metoda
app.get('/convertCurrency/:from/:to/:amount', (req, res) => {
    const { from, to, amount } = req.params;
  
    if (!isValidCurrency(from) || !isValidCurrency(to) || isNaN(amount)) {
      return res.status(400).send('Invalid input. Please provide valid values for from, to, and amount.');
    }
  
    const convertedAmount = convertCurrency(from, to, parseFloat(amount));
  
    if (convertedAmount === null) {
      return res.status(400).send('Invalid currency conversion.');
    }
  
    res.send(`Converted amount: ${convertedAmount}`);
  });
  
  // Ruta za konverzija na valuta so POST metoda
  app.post('/convertCurrency', (req, res) => {
    const { from, to, amount } = req.body;
  
    if (!isValidCurrency(from) || !isValidCurrency(to) || isNaN(amount)) {
      return res.status(400).send('Invalid input. Please provide valid values for from, to, and amount.');
    }
  
    const convertedAmount = convertCurrency(from, to, parseFloat(amount));
  
    if (convertedAmount === null) {
      return res.status(400).send('Invalid currency conversion.');
    }
  
    res.send(`Converted amount: ${convertedAmount}`);
  });
  
  // Pomosna funkcija za proverka na validnost na valuta
  function isValidCurrency(currency) {
    const validCurrencies = ['euro', 'dollar', 'mkd'];
    return validCurrencies.includes(currency.toLowerCase());
  }
  
  // Pomosna funkcija za konverzija na valuta
  function convertCurrency(from, to, amount) {
    const exchangeRates = {
        'euro': { 'dollar': 1.18, 'mkd': 61.56 },
        'dollar': { 'euro': 0.85, 'mkd': 52.25 },
        'mkd': { 'euro': 0.016, 'dollar': 0.019 }
      };
      
      const conversionRate = exchangeRates[from.toLowerCase()]?.[to.toLowerCase()];
      
      if (conversionRate !== undefined) {
        return (amount * conversionRate).toFixed(2);
      }
  
    return null;
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? da se kreira kalkulator

const calculate = (operator, operand1, operand2) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '/':
      return operand2 === 0 ? null : operand1 / operand2;
    case '*':
      return operand1 * operand2;
    default:
      return null;
  }
};

// Kalkulator GET metoda
app.get('/calculator/:op/:a/:b', (req, res) => {
  const { op, a, b } = req.params;
  const operand1 = Number(a);
  const operand2 = Number(b);

  if (isNaN(operand1) || isNaN(operand2)) {
    return res.status(400).send('Invalid operands');
  }

  const result = calculate(op, operand1, operand2);

  if (result === null) {
    return res.status(400).send('Invalid operator or division by zero');
  }

  res.send(String(result));
});

// Kalkulator POST metoda
app.post('/calculator', (req, res) => {
  const { op, a, b } = req.body;
  const operand1 = Number(a);
  const operand2 = Number(b);

  if (isNaN(operand1) || isNaN(operand2)) {
    return res.status(400).send('Invalid operands');
  }

  const result = calculate(op, operand1, operand2);

  if (result === null) {
    return res.status(400).send('Invalid operator or division by zero');
  }

  res.send(String(result));
});

// Server
 const PORT = 10000;
 app.listen(PORT, () => {
   console.log(`Server initiated on port ${PORT}`);
 });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


