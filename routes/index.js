var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cat Facts' });
});

router.get('/cats/fact', async function(req, res, next) {
  const catFactData = await fetch('https://catfact.ninja/fact')
  .then(res => res.json())
  .then(catFactData => {
    res.render('cats/fact', { catFactData});
  });
});

module.exports = router;
