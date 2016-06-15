import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('friend');
  },

  resetController: function(controller, isExiting, transition) {
    if (isExiting) {
      var model = controller.get('model');  // We grab the model from the controller

      if (model.get('isNew')) {            // 'isNew': means model wasn't saved to the backend.
        model.destroyRecord();             // remove model from store
      }
    }
  }
});
