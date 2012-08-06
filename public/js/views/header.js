define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/HeaderView.html'
], function ($, _, Backbone, headerViewTemplate) {

    var HeaderView = Backbone.View.extend({
        el: $('.header'),

        initialize: function () {
            this.render();
        },

        render: function () {
            var compiledTemplate = _.template(headerViewTemplate);

            $(this.el).html(compiledTemplate);
            return this;
        },

        selectMenuItem: function (menuItem) {
            $('.nav li').removeClass('active');
            if (menuItem) {
                $('.' + menuItem).addClass('active');
            }
        }

    });
    return new HeaderView;
});