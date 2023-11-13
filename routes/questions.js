const express = require('express');
const router = express.Router();

const questionsController = require('../controllers/questions_controller');

router.get('/:id', questionsController.showDetails);
router.post('/create', questionsController.create);
router.get('/:id/delete', questionsController.delete);
router.post('/:id/options/create', questionsController.createOption);

module.exports = router;