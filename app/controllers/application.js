import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['drawerIsOpen','modalIsOpen'],

  drawerIsOpen: false,

  modalIsOpen: false,

  actions: {
    toggleDrawer() {
      this.toggleProperty('drawerIsOpen');
    },

    toggleModal() {
      this.toggleProperty('modalIsOpen');
    }

  }
});
