const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());

app.get('/api/health', (req, res) => res.json({status: 'ok'}));

// Simple users scaffold
let users = [ { id: 1, name: 'Admin', email: 'admin@example.com' } ];
app.get('/api/users', (req, res) => res.json(users));
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  const id = users.length ? users[users.length-1].id + 1 : 1;
  const user = { id, name, email };
  users.push(user);
  res.status(201).json(user);
});

app.listen(port, () => console.log(`Backend running on http://localhost:${port}`));
