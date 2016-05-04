var app = app || {};

(function() {
  'use strict';

  var Foods = Backbone.Collection.extend({
    model: app.Todo,

    localStorage: new Backbone.LocalStorage('calorie-tracker-backbone'),

    // TODO: Add functions, if needed

    comparator: 'order'
  });

  app.foods = new Foods();
})();
