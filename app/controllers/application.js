import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['drawerIsOpen','modalIsOpen'],

  drawerIsOpen: false,

  modal1IsOpen: false,
  modal2IsOpen: false,

  actions: {
    toggleDrawer() {
      this.toggleProperty('drawerIsOpen');
    },

    toggleModal1() {
      this.toggleProperty('modal1IsOpen');
    },

    toggleModal2() {
      this.toggleProperty('modal2IsOpen');
    }

  }
});
