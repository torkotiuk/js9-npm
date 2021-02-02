const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("<h1>Hello body!</h1>");
})

app.listen(5000, () => {
  console.log('WebServer is running on 5000 port ');
});