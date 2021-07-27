const Assignment = require('../models/assignment');

const getAssignments = async (req, res) => {
  try {
    const assignment = await Assignment.find();
    res.json(assignment);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
const getUserAssignments = async (req, res) => {
  try {
    const assignment = await Assignment.find({ user_id: req.user.id });
    res.json(assignment);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
const createAssignment = async (req, res) => {
  try {
    const { topic, branch, Assigdesc } = req.body;
    const newAssignment = new Assignment({
      topic,
      branch,
      Assigdesc,
      email: req.user.email,
      user_id: req.user.id,
      name: req.user.name,
      country: req.user.country,
      phone: req.user.phone,
    });
    await newAssignment.save();
    res.json({ message: 'New Assignment Created' });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deleteAssignment = async (req, res) => {
  try {
    await Assignment.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Deleted a Assignment' });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const updateAssignment = async (req, res) => {
  try {
    const { branch, topic, Assigdesc } = req.body;
    await Assignment.findOneAndUpdate(
      { _id: req.params.id },
      {
        branch,
        topic,
        Assigdesc,
      }
    );
    res.json({ message: 'Assignment is Updated' });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const getAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    res.json(assignment);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getAssignments,
  getUserAssignments,
  updateAssignment,
  deleteAssignment,
  createAssignment,
  getAssignment,
};
