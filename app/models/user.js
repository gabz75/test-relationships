import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  appointments: DS.hasMany('appointment'),

  lastAppointment: Ember.computed('appointments', function lastAppointment() {
    return this.get('appointments').objectAt(this.get('appointments.length') - 1);
  }),
});
