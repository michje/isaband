define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/HomeView.html'
], function ($, _, Backbone, homeViewTemplate) {

    var HomeView = Backbone.View.extend({
        el: $('#content'),

        initialize: function () {
            this.render();
        },

        render: function () {
            var compiledTemplate = _.template(homeViewTemplate);
            $(this.el).html(compiledTemplate);
            return this;
        }
    });
    return new HomeView;
});