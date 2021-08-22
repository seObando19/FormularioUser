var express = require('express');
const operations = require('../controllers/registerUser.controllers.js');
var router = express.Router();

const operation = require('../controllers/registerUser.controllers.js');

/* route home */
router.get('/hello', operation.hello);

/* route get all users */
router.get('/', operations.getUsers);

/* route get one user */
router.get('/:id', operations.getOneUser);

/* route create new users */
router.post('/', operations.createUser);

/* route update to user */
router.put('/:id', operations.editUser);

/* route delete to user */
router.delete('/:id', operations.deleteUser);

module.exports = router;