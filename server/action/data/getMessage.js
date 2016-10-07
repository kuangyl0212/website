var getMessageList = require('../../data/Message');

exports.execute = function (req, res) {
    getMessageList.getMessageList(function (data) {
        res.send(data);
    });
};