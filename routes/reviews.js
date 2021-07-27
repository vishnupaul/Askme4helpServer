const express = require('express');
const router = express.Router();
const Authentication = require('../middleware/authentication');

const { createReviews, getReviews } = require('../controllers/reviews');

router.get('/', getReviews);
router.post('/', Authentication, createReviews);

module.exports = router;
