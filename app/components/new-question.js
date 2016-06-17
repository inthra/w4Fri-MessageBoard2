import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,

  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var params = {
        topic: this.get('questionInput') ? this.get('questionInput') : "Robot question",
        author: this.get('authorInput') ? this.get('authorInput') : "Robot",
        note: this.get('noteInput') ? this.get('noteInput') : "",
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
      this.set('questionInput', '');
      this.set('authorInput', '');
      this.set('noteInput', '');
    },
    cancel() {
      this.set('addNewQuestion', false);
      this.set('questionInput', '');
      this.set('authorInput', '');
      this.set('noteInput', '');
    },
  }
});
