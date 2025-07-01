import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// THIS FILE IS TBD, probably just for secure logins.

// https://github.com/NatoBoram/gigachad.ts 