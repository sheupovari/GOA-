const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('მარტივი Express სერვერი!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`სერვერი გაშვებულია პორტზე ${PORT}`);
});
