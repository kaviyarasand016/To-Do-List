const express = require('express');
const router = express.Router();
const stu_control = require('../controller/studentcontroller');

router.get('/',stu_control.data);


module.exports = router;