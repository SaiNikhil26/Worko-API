const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authController = require('../controllers/authController');
const authenticate = require('../middleware/authMiddleware');
const {validateEmail, validateZipCode, validateIdParam, checkValidationResult} = require('../validators/userValidators')

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/register', function(req, res) {
    res.render("register");
});

router.post('/worko/register', validateEmail, validateZipCode, checkValidationResult, userController.insertUser);
router.get('/worko/users',authenticate, userController.getAllUsers);
router.get('/worko/users/:id',authenticate, validateIdParam, checkValidationResult, userController.getUserById);
router.get('/worko/users/:id/edit',authenticate, validateIdParam, checkValidationResult, userController.getEditUserForm);
router.post('/worko/users/:id/edit',authenticate, validateEmail, validateZipCode, checkValidationResult, userController.updateUser);
router.put('/worko/users/:id/edit', authenticate,validateEmail, validateZipCode, checkValidationResult, userController.updateUser);
router.patch('/worko/users/:id/edit', authenticate,validateEmail, validateZipCode, checkValidationResult, userController.updateUser);
router.delete('/worko/users/:id/delete',authenticate, validateIdParam, checkValidationResult, userController.deleteUser);

module.exports = router;
