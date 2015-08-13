import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['animation-drawer-container'],
  classNameBindings: ['open'],

  open: false,
  renderDrawer: false,

  _onCloseDrawer: null,

  _setOnCloseDrawer: Ember.on('didInsertElement',
    function(){
      this.set('_onCloseDrawer',
        Ember.run.bind(this, function(){
          this.set('renderDrawer', false);
          $('body').css('overflow','auto');
          this.$().off(`transitionend.${this.get('elementId')}`, this.get('_onCloseDrawer'));
        })
      );
  	}
  ),

  _drawerIsOpenObserver: Ember.observer('drawerIsOpen', function(){
    if(this.get('drawerIsOpen')){
      this.set('renderDrawer', true);
      $('body').css('overflow', 'hidden');
      Ember.run.next(()=>{ this.set('open', true); });
    }
  }),

  actions: {
    closeDrawer(){
      this.$().on(`transitionend.${this.get('elementId')}`, this.get('_onCloseDrawer'));
      this.set('open', false);
      this.sendAction('toggleDrawer');    
    }
  }
});
