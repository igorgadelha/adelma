Template.steps.helpers({
  activeStepClass: function(id) {
    var activeStep = this.wizard.activeStep();
    var step  = this.wizard.getStep(id);
    if (activeStep && activeStep.id === id) {
      return 'current';
    }
    if (step.data()) {
      return 'visited';
    }
    return '';
  }
});