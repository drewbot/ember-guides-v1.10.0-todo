Todos.Router.map(function () {
  this.resource('todos', { path: '/' }, function () {
    // additional child routes will go here later
    this.route('active');
  });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});

// Nested route (NOT included in Router above)
// shows the list of todos by default, without a url change
Todos.TodosIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('todos');
  }
});

// Nested route (IS included in Router above)
// Transition to show all active todos
Todos.TodosActiveRoute = Ember.Route.extend({
	// The model data for this route is the collection of todos whose isCompleted property is false.
  model: function(){
    return this.store.filter('todo', function(todo) {
      return !todo.get('isCompleted');
    });
  },

  // reuse the existing todos/index template and corresponding controller
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});