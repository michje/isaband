define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/schedule/schedule.html'
], function ($, _, Backbone, scheduleViewTemplate) {

    var ScheduleView = Backbone.View.extend({
        el: $('#content'),

        initialize: function () {
            this.render();
        },

        render: function () {
            var compiledTemplate = _.template(scheduleViewTemplate);
            $(this.el).html(compiledTemplate);
            return this;
        }

    });
    return new ScheduleView;
});