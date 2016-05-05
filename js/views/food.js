var app = app || {};

(function($) {
  'use strict';

  app.FoodView = Backbone.View.extend({
    tagName: 'li',

    template: _.template($('#food-template').html()),

    events: {
      'click .delete-button': 'clear'
    },

    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function() {
      // bug work around
      if (this.model.changed.id !== undefined) {
				return;
			}

      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    clear: function () {
			this.model.destroy();
		}
  });
})(jQuery);
