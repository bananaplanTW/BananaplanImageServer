var express = require('express'),
    router = express.Router();

router.post('/', function (req, res) {
    console.log(req.files);
});

module.exports = router;
