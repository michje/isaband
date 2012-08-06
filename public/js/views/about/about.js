define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/about/AboutView.html'
], function ($, _, Backbone, aboutViewTemplate) {

    var AboutView = Backbone.View.extend({
        el: $('#content'),

        initialize: function () {
            this.render();
        },

        render: function () {
            var compiledTemplate = _.template(aboutViewTemplate);
            $(this.el).html(compiledTemplate);
            return this;
        }

    });

    return new AboutView;
});