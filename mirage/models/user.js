import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  appointments: hasMany(),
  car: belongsTo(),
});
