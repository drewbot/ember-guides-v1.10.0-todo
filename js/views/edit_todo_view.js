// Create an input element
Todos.EditTodoView = Ember.TextField.extend({
	// focus on this input element when it appears
  didInsertElement: function() {
    this.$().focus();
  }
});
// Store as a handlebars helper
Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);
// In index.html replace the input elment with this custom component