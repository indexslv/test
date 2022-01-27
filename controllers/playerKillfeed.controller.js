//const models = require('../models/playerkillfeed');
const PlayerKillFeed = require('../models/playerkillfeed');

function save(req, res){
    const postData = {
        server_id: '1',
        killer_steamId: '1234566',
        killer_name: 'ABABA'
    }

    PlayerKillFeed.create(postData).then(result => {
        res.status(201).json({
            message: "Kill added successfully",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

module.exports = {
    save: save
};