const router = require('express').Router(); 
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');

//auth controller
router.post('/register', authController.signUp)

//user controller
router.get('/', userController.getAllUsers)
router.get('/:id', userController.userInfo)

module.exports = router