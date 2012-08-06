define([
  'jquery',
  'underscore',
  'backbone',
  'views/schedule/bookwizard/wizard',
  'text!templates/schedule/list.html'
], function ($, _, Backbone, Wizard, overviewViewTemplate) {

    var ScheduleOverviewView = Backbone.View.extend({
        el: $('#content'),

        initialize: function () {
            this.render();
        },

        render: function () {
            console.log('overview.js::render');
            var compiledTemplate = _.template(overviewViewTemplate);
            $(this.el).html(compiledTemplate);

        },

        events: {
            'click #scheduleMeeting': 'startschedule'
        },

        startschedule: function (event) {
            console.log('overview.js::startschedule');
            //            Wizard.el = this.el;
            Wizard.render({ el: this.el });
            return false;
        }

    });
    return new ScheduleOverviewView;
});