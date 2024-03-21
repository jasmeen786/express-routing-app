

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Home page');
});


router.get('/login', (req, res) => {
  res.send('Login page');
});


router.get('/register', (req, res) => {
  res.send('Register page');
});


router.use((req, res) => {
  res.status(404).send('Page not found');
});

module.exports = router;
