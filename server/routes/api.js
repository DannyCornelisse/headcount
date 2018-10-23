const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1, b: 4 }));
});

module.exports = router;
