import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['drawerIsOpen','modalIsOpen'],

  drawerIsOpen: false,

  modal1IsOpen: false,
  modal2IsOpen: false,

  nextSlide: Ember.computed('currentRouteName', function(){
    let currentRoute = this.get('currentRouteName');

    if(currentRoute==='index'){
      return 'slide-1';
    }

    let currentSlide = +(/slide-(\d)/.exec(currentRoute)[1]);
    return 'slide-' + ( currentSlide === 3 ? 1 : currentSlide + 1 );

  }),

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
