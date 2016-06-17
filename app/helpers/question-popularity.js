import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];
  var answerLength = question.get('answers').get('length');

  if (answerLength >= 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(questionPopularity);
