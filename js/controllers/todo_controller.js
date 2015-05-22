Todos.TodoController = Ember.ObjectController.extend({
  isCompleted: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      // When called from the template to display the current isCompleted state of the todo, 
      // this property will proxy that question to its underlying model
      return model.get('isCompleted');
    } else {
      // property being used as a setter
      // set the isCompleted property of its model to the passed value (true or false),
      model.set('isCompleted', value);
      // persist the model update
      model.save();
      // return the passed value so the checkbox will display correctly
      return value;
    }
  // The isCompleted function is marked a computed property 
  // whose value is dependent on the value of model.isCompleted
  }.property('model.isCompleted')
});