exports.all = function(req, res) {
    var boards = [];

    boards.push({
        id: 1,
        title: 'Board 1'
    });

    res.json({ boards: boards });
};