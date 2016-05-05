var app = app || {};

(function() {
  'use strict';

  app.SearchResult = Backbone.Model.extend({
    defaults: {
      title: '',
      calories: 0
    }
  });
})();
