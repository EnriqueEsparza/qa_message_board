Message.QuestionsController = Ember.ArrayController.extend({
  actions: {
    sortByTitle: function() {
      this.set('sortProperties', ['author']);
    }
  }
});
