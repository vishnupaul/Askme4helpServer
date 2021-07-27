const express = require('express');
const router = express.Router();

router.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});
router.use('/auth', require('./auth'));
router.use('/assignment', require('./assigment'));
router.use('/reviews', require('./reviews'));

module.exports = router;
