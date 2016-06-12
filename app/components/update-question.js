import Ember from 'ember';

export default Ember.Component.extend({
  updateFormShow: false,

  actions: {
    updateForm() {
      this.set('updateFormShow', true);
    },
    update(question) {
      var params = {
        topic: this.get('editQuestionInput'),
      };
      this.set('updateFormShow', false);
      this.sendAction('update', question, params);
      this.set('question', '');
    },
    cancel() {
      this.set('updateFormShow', false);
    },
    destroyQuestion(question) {
      if (confirm('Are you sure you want to delete this question? Delete this question will delete all connected answers')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
