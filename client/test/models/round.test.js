(function () {
    'use strict';
    module('Round');

    test('can create instance', function() {
        var round = Trivia.Round.createRecord();

        ok(round);
    });
}());