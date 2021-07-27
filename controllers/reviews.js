const Reviews = require('../models/reviews');

const createReviews = async (req, res) => {
  try {
    const { desc } = req.body;
    const newReviews = new Reviews({
      desc,
      user_id: req.user.id,
      name: req.user.name,
      country: req.user.country,
    });
    await newReviews.save();
    res.json({ message: 'New Reviews Created' });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const getReviews = async (req, res) => {
  try {
    const reviews = await Reviews.find();
    res.json(reviews);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
module.exports = {
  getReviews,
  createReviews,
};
