var router = require('router');

router.post('/', function (req, res) {
    console.log(req.files);
});

module.exports = router;