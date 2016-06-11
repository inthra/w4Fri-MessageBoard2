import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var params = {
        name: this.get('nameInput') ? this.get('nameInput') : "",
        reply: this.get('replyInput') ? this.get('replyInput') : "",
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
