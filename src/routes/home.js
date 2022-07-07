const express = require('express');
const router = express.Router();
const { navigationController } = require('../controller')
router.get('/',navigationController.getHome)
router.get('/video',navigationController.getVideo)
module.exports = router;