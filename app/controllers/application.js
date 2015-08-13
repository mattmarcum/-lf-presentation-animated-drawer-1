import Ember from 'ember';

export default Ember.Controller.extend({
  drawerIsOpen: false,

  actions: {
    toggleDrawer() {
      this.toggleProperty('drawerIsOpen');
    }
  }
});
