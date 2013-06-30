(function () {
    'use strict';
    Trivia.Adapter = DS.RESTAdapter.extend({
        namespace: 'api'
    });

    Trivia.Store = DS.Store.extend({
        revision: 13,
        adapter: 'Trivia.Adapter'
    });
}());