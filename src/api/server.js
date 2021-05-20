const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(express.json())
  .use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  process.stdout.write(`Server listening on ${PORT}\n`);
});

module.exports = app;

JSON.reParse = (obj) => JSON.parse(JSON.stringify(obj));

require('./v1/index');
