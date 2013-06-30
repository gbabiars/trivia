(function (global) {
    'use strict';
    global.Trivia = Em.Application.create();
}(window));
(function () {
    'use strict';
    Trivia.Store = DS.Store.extend();
}());
(function () {
    'use strict';
    Trivia.Board = DS.Model.extend({
        title: DS.attr('string')
    });
}());
(function () {
    'use strict';
    Trivia.Router.map(function() {
        this.resource('boards');
    });
}());
Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<h1>Hello Again</h1>");
  
});