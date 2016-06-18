import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestion: Ember.inject.service(),

  actions: {
    destroyQuestion(question) {
      this.sendAction('destroyQuestion', question);
    },
    update(question, params) {
      this.sendAction('update', question, params);
    },
    addToFavorite(question) {
      this.get('favoriteQuestion').add(question);
    },
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    },
    upvote(answer) {
      this.sendAction('upvote', answer);
    },
  }
});
