const express = require('express');
const fileController = require('../controllers/fileController');
// const authController = require('../controllers/AuthenticationController');

const router = express.Router();

router.get('/', fileController.test);
router.get('/:id', questionControllers.test2);
// router.get('/paperMetadata', questionControllers.getQuestionPaperMetadata);

module.exports = router;