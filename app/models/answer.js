import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  reply: attr(),
  question: belongsTo('question', { async: true}),
  votes: attr(),
  date: attr(),
});
