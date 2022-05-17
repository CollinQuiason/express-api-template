const express = require('express');

const router = express.Router();
router.get('/', (req, res) => {
    console.log("PING: " + req);
    res.status(200).send("pong");
});

module.exports = router;
