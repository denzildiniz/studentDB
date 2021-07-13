const express = require('express');
const router = express.Router();

const {addEdit , createStudent ,allList , editstudent} = require('../controllers/student')

router.route('/').get(addEdit).post(createStudent);
router.route('/list').get(allList);
router.route('/:id').put(editstudent);
// router.route('/:id').get()

module.exports = router