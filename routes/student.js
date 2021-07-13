const express = require('express');
const router = express.Router();

const {addEdit} = require('../controllers/student')

router.route('/').get(addEdit)
router.route('/:id').get()

module.exports = router