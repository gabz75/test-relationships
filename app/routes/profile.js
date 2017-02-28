import Ember from 'ember';

export default Ember.Route.extend({
  include: [
    'appointments',
  ],
  model(params) {
    return Ember.RSVP.hash({
      user: this.store.findRecord('user', params.userID, { include: this.get('include').join(',') }),
    });
  },
});
