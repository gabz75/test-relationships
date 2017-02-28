import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard', { path: '/' }, function() {
    this.route('nested-profile', { path: '/nested-profile/:userID' });
  });
  this.route('profile', { path: '/profile/:userID' });
});

export default Router;
