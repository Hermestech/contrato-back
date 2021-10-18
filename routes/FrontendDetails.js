const express = require('express');
const contracts = require('../Data/data')

const router = express.Router();

router.get('/', (req, res) => {
    res.json(contracts);
})

module.exports = router;