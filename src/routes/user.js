const express = require('express');
const User = require('../controllers/user');

const router = express.Router();

// get one user
router.get('/:username', User.get);

// auth user
router.get('/', User.auth);

// login user
router.post('/login', User.login);

// signup new user
router.post('/signup', User.signup);

// edit user
router.put('/', User.edit);

// password reset
router.put('/reset', User.passwordReset);
router.put('/reset/:token', User.validatePasswordReset);

// remove user
router.delete('/', User.remove);

module.exports = router;
