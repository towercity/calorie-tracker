var app = app || {};

(function() {
  'use strict';

  app.Food = Backbone.Model.extend({
    defaults: {
      title: '',
      calories: 0
    }
  });
})();
