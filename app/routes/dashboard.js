import Ember from 'ember';

export default Ember.Route.extend({
  include: [
    'user',
  ],

  model() {
    return this.store.query('car', { include: this.get('include').join(',') });
  },
});
