(function (global) {
    'use strict';
    global.Trivia = Em.Application.create();
}(window));
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
(function () {
    'use strict';
    Trivia.Board = DS.Model.extend({
        title: DS.attr('string')
    });
}());
(function () {
    'use strict';
    Trivia.Round = DS.Model.extend({
        number: DS.attr('number')
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
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<nav>\n\n</nav>\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  return buffer;
  
});