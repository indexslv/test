const router = require('express').Router();
const playerKillFeedController = require('../controllers/playerKillfeed.controller');

const res = require('express/lib/response');


router.post('/killfeed',  function(req, res){
    playerKillFeedController.save();
});

//router.post('/killfeed', playerKillFeedController.save);

module.exports = router;