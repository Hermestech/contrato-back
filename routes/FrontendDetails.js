const express = require('express');
const contracts = require('../Data/data')

const router = express.Router();

router.get('/',  (req, res) => {
    try {
         res.json(contracts);
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;