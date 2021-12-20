const express = require('express');
const router = express.Router();
const apiController = require('../app/controllers/ApiController')

router.get('/suggestions',apiController.suggestions);
router.get('/metainfo',apiController.metainfo);
router.get('/watch',apiController.watch);

module.exports = router;