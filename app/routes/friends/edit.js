import Ember from 'ember';

export default Ember.Route.extend({
  resetController: function(controller, isExiting, transition) {
    if (isExiting) {
      var model = controller.get('model'); // We grab the model from the controller
      model.rollback();
    }
  }
});
