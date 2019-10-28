
const express = require('express');
const router = express.Router();



router.use('/Auth', require('./Auth'))
router.use('/Post', require('./Posts'))
router.use('/Comment', require('./Comments'))



module.exports = router;
