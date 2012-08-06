define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/schedule/bookwizard/step.three.html'
], function ($, _, Backbone, ViewTemplate) {

    var ScheduleStepThree = Backbone.View.extend({

        initialize: function () {
            this.render();
        },

        render: function () {
            var compiledTemplate = _.template(ViewTemplate);
            $(this.el).html(compiledTemplate);
            return this;
        },

        validate: function () {
            return true;
        }

    });
    return ScheduleStepThree;
});