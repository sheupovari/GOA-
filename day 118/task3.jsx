const express = require('express');
const app = express();

const items = [
  { id: 1, name: 'Item One', description: 'This is item one.' },
  { id: 2, name: 'Item Two', description: 'This is item two.' },
  { id: 3, name: 'Item Three', description: 'This is item three.' },
];

app.get('/items/:id', (req, res) => {
  const { id } = req.params;
  const item = items.find((i) => i.id === parseInt(id));
  
  if (!item) {
    return res.status(404).send('.');
  }

  res.json(item);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`სერვერი გაშვებულია პორტზე ${PORT}`);
});
