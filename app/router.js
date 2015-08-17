import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.modal('lf-drawer', {
    withParams: 'modalIsOpen',
    dialogClass: 'lf-drawer-dialog'
  });

});

export default Router;
