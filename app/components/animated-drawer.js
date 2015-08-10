import Ember from 'ember';

const transitionEndEvent = 'transitionend';

export default Ember.Component.extend({
  classNames: ['animation-drawer-container'],
  classNameBindings: ['open'],

  open: false,
  renderDrawer: false,

  _onCloseDrawer: null,
  _setOnCloseDrawer: Ember.on('didInsertElement',
    function(){
      var _this = this;
      _this.set('_onCloseDrawer',
        Ember.run.bind(_this, function(){
          _this.set('renderDrawer', false);
          _this.$().off(transitionEndEvent,    this.get('_onCloseDrawer'));
        })
      );
  	}
  ),

  actions: {
    openDrawer(){
      this.set('renderDrawer', true);
      Ember.run.next(()=>{ this.set('open', true); });
    },

    closeDrawer(){
      this.$().on(transitionEndEvent, this.get('_onCloseDrawer'));
      this.set('open', false);
    }
  }
});
