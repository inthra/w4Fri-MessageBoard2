import Ember from 'ember';

export default Ember.Component.extend({
  isNoteShow: false,

  actions: {
    noteShow() {
      this.set('isNoteShow', true);
    },
    noteHide() {
      this.set('isNoteShow', false);
    },
    destroyAnswer(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
