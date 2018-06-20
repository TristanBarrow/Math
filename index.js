const express = require('express');
const p = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

const ops = (op, num1, num2) => {
  const n1 = parseInt(num1);
  const n2 = parseInt(num2);
  switch(op) {
    case 'add':
      return n1 + n2;
    case 'sub':
      return n1 - n2;
    case 'mult':
      return n1 * n2;
    case 'div':
      return n1 / n2;
    case 'mod':  
      return n1 % n2;
    default:
      console.log('ERROR');
  }
}


app.use(express.static(p.join(__dirname, 'views')));

app.get('/math', (req, res) => {
  res.sendfile(p.join(__dirname, 'views', 'pages', 'math.html'));
});

app.get('/result', (req, res) => {
  const q = req.query;
  res.render(p.join(__dirname, 'views', 'pages', 'result.ejs'), {
    result: JSON.stringify(ops(q.operation, q.num1, q.num2))
  });
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
