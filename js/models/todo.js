Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
 {
   id: 1,
   title: 'Learn Ember.js',
   isCompleted: false
 },
 {
   id: 2,
   title: 'boom',
   isCompleted: true
 },
 {
   id: 3,
   title: 'Profit!',
   isCompleted: false
 }
];