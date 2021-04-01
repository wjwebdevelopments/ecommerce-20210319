/**
 * Created by wjweb on 30/03/2021.
 */
const { User } = require('../models');
const express = require('express');
const router = express.Router();

const { getUsers } = require('../controllers/user');

router.get('/', getUsers);

module.exports = router;