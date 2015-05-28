window.Todos = Ember.Application.create();

// Fixture adapter
// Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

// Local Storage Adapter (libs/libs/localstorage_adapter.js)
Todos.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});