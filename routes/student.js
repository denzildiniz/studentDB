const express = require('express');
const router = express.Router();

const {addEdit , createStudent ,allList ,getOne, editstudent,delStudent} = require('../controllers/student')

router.route('/').get(addEdit).post(createStudent);
router.route('/list').get(allList)
router.route('/:id').get(getOne).put(editstudent);
router.route('/delete/:id').get(delStudent);
// router.route('/:id').get()

module.exports = router