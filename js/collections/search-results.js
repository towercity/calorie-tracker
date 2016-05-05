var app = app || {};

(function() {
  var SearchResults = Backbone.Collection.extend({
    model: app.SearchResult,

    localStorage: new Backbone.LocalStorage('searchResults-backbone'),

    comparator: 'order'
  });

  app.searchResults = new SearchResults();
})();
