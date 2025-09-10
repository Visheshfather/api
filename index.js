const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('This is test server api by Vishesh!');
});

app.listen(PORT, () => {
  console.log(`This is test server api by Vishesh ${PORT}`);
});
