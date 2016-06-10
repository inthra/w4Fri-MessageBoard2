import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var params = {
        author: this.get('author'),
        answer: this.get('answer'),
      }
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
