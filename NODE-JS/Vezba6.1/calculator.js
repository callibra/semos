const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

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

// Calculator GET endpoint
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

// Calculator POST endpoint
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

const PORT = 10000;
app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`Server initiated on port ${PORT}`);
});
