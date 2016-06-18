import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['votes:desc'],
  sortedAnswer: Ember.computed.sort('answers', 'sortBy'),

  actions: {
    destroyAnswer(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    },
    upvote(answer) {
      this.sendAction('upvote', answer);
    },
  }
});
