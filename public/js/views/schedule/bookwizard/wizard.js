define([
  'jquery',
  'underscore',
  'backbone',
  'wizardui',
  'models/schedule/ScheduleEntryModel',
  'views/schedule/bookwizard/stepone',
  'views/schedule/bookwizard/steptwo',
  'views/schedule/bookwizard/stepthree',
  'views/schedule/bookwizard/stepfour'
],
function ($, _, Backbone, WizardUI, ScheduleEntryModel,
          wizardStepOne, wizardStepTwo, wizardStepThree, wizardStepFour) {

    var ScheduleWizard = Backbone.View.extend({

        initialize: function () {
            _.bindAll(this, 'render', 'wizardMethod');
        },

        render: function () {
            this.wizardMethod();
            return this;
        },

        wizardMethod: function () {
            var scheduleEntryModel = new ScheduleEntryModel;
            var that = this;
            var wizardSteps = [
                {
                    step_number: 1,
                    title: "Title of Step 1",
                    instructions: "Instructions or description of what the user needs to do for this step",
                    view: new wizardStepOne({ model: scheduleEntryModel })
                },
                {
                    step_number: 2,
                    title: "Title of Step 2",
                    instructions: "Instructions or description of what the user needs to do for this step",
                    view: new wizardStepTwo({ model: scheduleEntryModel })
                },
                {
                    step_number: 3,
                    title: "Title of Step 3",
                    instructions: "Instructions or description of what the user needs to do for this step",
                    view: new wizardStepThree({ model: scheduleEntryModel })
                },
                {
                    step_number: 4,
                    title: "Title of Step 4",
                    instructions: "Instructions or description of what the user needs to do for this step",
                    view: new wizardStepFour({ model: scheduleEntryModel })
                }
              ];

            var view = new WizardUI({
                model: scheduleEntryModel,
                steps: wizardSteps
            });

            var saveBehavior = {
                save: function () { that.save(); }
            };

            _.extend(view, saveBehavior);

            $("#current_step").html(view.render().el);
        },
        save: function () {
            alert('save pressed');
        }

    });
    return new ScheduleWizard;
});