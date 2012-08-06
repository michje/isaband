define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/band/BandView.html'
], function ($, _, Backbone, bandViewTemplate) {

    var BandView = Backbone.View.extend({
        el: $('#content'),

        initialize: function () {
            this.render();
        },

        render: function () {
            var compiledTemplate = _.template(bandViewTemplate);
            $(this.el).html(compiledTemplate);
            return this;
        }

    });

    return new BandView;
});