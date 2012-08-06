define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/playlist/PlaylistView.html'
], function ($, _, Backbone, playlistViewTemplate) {

    var PlaylistView = Backbone.View.extend({
        el: $('#content'),

        initialize: function () {
            this.render();
        },

        render: function () {
            var compiledTemplate = _.template(playlistViewTemplate);
            $(this.el).html(compiledTemplate);
            return this;
        }

    });
    return new PlaylistView;
});