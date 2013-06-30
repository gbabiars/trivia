(function () {
    'use strict';
    module('Board');

    test('can create instance', function() {
        var board = Trivia.Board.createRecord();

        ok(board);
    });
}());