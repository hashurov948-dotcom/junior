const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

const movies = [
  { id: 1, title: "Interstellar", genre: "Sci-Fi", year: 2014 },
  { id: 2, title: "Inception", genre: "Action/Sci-Fi", year: 2010 },
  { id: 3, title: "The Dark Knight", genre: "Action", year: 2008 },
  { id: 4, title: "Avatar", genre: "Sci-Fi", year: 2009 },
  { id: 5, title: "Gladiator", genre: "Drama/Action", year: 2000 }
];

router.get('/', (req, res) => {
  res.json({ message: "Filmlar API ga xush kelibsiz!" });
});

router.get('/movies', (req, res) => {
  res.json(movies);
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);