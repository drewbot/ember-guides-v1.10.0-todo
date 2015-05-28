Todos.TodosController = Ember.ArrayController.extend({
  
  actions: {
    createTodo: function() {
      // Get the todo title value set by the "New Todo" text field
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      // Create the new Todo model instance
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      // Clear the "New Todo" text field
      this.set('newTitle', '');

      // Save the new model
      todo.save();
    },

    // when action is fired find model instances which are completed
    // clear the completed instances locally and persist the action
    clearCompleted: function() {
      // filterBy is from the arrayController api, returns an instance of EmberArray
      var completed = this.filterBy('isCompleted', true);
      // invoke (EmberArray api) executes a method 
      // on each object in the Array if the method exists on that object
      completed.invoke('deleteRecord');
      completed.invoke('save');
    }
  },

  remaining: function() {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflection: function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'item' : 'items';
  }.property('remaining'),

  // for if conditional in todos template
  hasCompleted: function() {
    return this.get('completed') > 0;
  }.property('completed'),

  // for completed count in todos template
  completed: function() {
    return this.filterBy('isCompleted', true).get('length');
  }.property('@each.isCompleted'),

  allAreDone: function(key, value) {
    return !!this.get('length') && this.isEvery('isCompleted');
  }.property('@each.isCompleted')

});