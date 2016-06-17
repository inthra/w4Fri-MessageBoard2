import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params = {
        name: this.get('nameInput') ? this.get('nameInput') : "Robot",
        reply: this.get('replyInput') ? this.get('replyInput') : "Robot answer",
        question: this.get('question'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
      this.set('nameInput', '');
      this.set('replyInput', '');
    },
    cancel() {
      this.set('addNewAnswer', false);
      this.set('nameInput', '');
      this.set('replyInput', '');
    },
  }
});
