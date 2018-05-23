const path = require('path');
const express = require('express');
const compression = require('compression');
const app = express();

const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 8080;

app.use(compression());

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
