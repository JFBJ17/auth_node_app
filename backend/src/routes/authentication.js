const { Router } = require('express');
const router = Router();

const authCtrls = require('../controllers/authentication');

router.post('/signup', authCtrls.signup);
router.post('/signin', authCtrls.signin);
router.get('/logout', authCtrls.logout);
router.get('/whoami', authCtrls.whoami);

module.exports = router;