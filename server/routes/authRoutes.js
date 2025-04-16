const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/authController');

// Registration & Login
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/parents/:parentId/add-child', AuthController.addChild);
router.put('/parents/update-parent-child/:parentId/:childId', AuthController.updateParentAndChild);



module.exports = router;
