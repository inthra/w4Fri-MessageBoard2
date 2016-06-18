import Ember from 'ember';

export default Ember.Service.extend({
  threads: [],

  add(question) {
    this.get('threads').pushObject(question);
  },
});
