const express = require('express');
const Authentication = require('../middleware/authentication');

const router = express.Router();

const {
  getAssignments,
  getUserAssignments,
  updateAssignment,
  deleteAssignment,
  createAssignment,
  getAssignment,
} = require('../controllers/assignment');

router.get('/', getAssignments);
router.get('/user', Authentication, getUserAssignments);
router.post('/', Authentication, createAssignment);

router
  .route('/:id')
  .get(Authentication, getAssignment)
  .put(Authentication, updateAssignment)
  .delete(Authentication, deleteAssignment);

module.exports = router;
