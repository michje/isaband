define(['underscore', 'backbone'], function (_, Backbone) {
    var ScheduleEntryModel = Backbone.Model.extend({

        initialize: function () {
            
        },

        // Remove this Todo from *localStorage* and delete its view.
        clear: function () {
            this.destroy();
            this.view.remove();
        },

        defaults: {
            id: null,
            title: "",
            location: "",
            description: "",
            proposals: []
        }
    });

    return ScheduleEntryModel;
});

