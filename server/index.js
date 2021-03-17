const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const formatter = require('./formatter.js');
app.use(express.static(path.resolve(__dirname, '../client')));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
  formatter.formatPairs();
});