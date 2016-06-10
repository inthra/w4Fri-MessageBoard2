import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id)
  },

  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var answer = params.answer;
      answer.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return answer.save();
      });
      this.transitionTo('question', params.answer);
    }
  }
});
