// server.js
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3001;

app.use(express.json());

app.get('/data', (req, res) => {
  const data = require('./data');
  res.json(data);
});

app.post('/data', (req, res) => {
  const newData = req.body;
  fs.writeFile('./data.js', `export const data = ${JSON.stringify(newData, null, 2)};`, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to write data' });
    }
    res.status(200).json({ message: 'Data written successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
