import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 4000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

export default app;