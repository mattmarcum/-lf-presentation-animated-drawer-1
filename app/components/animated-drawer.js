import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['animation-drawer-container'],
  classNameBindings: ['didOpen:open'],

  didOpen: false,
  renderDrawer: false,
  appDrawerIsOpen: false,

  _onCloseDrawer: null,

  _setOnCloseDrawer: Ember.on('didInsertElement',
    function(){
      this.set('_onCloseDrawer',
        Ember.run.bind(this, function(){
          if(this.get('appDrawerIsOpen')){
            this.set('renderDrawer', false);
            $('body').css('overflow','auto');
          }
          this.$().off(`transitionend.${this.get('elementId')}`, this.get('_onCloseDrawer'));
        })
      );
  	}
  ),

  _appDrawerIsOpenObserver: Ember.observer('appDrawerIsOpen', function(){
    if(this.get('appDrawerIsOpen')){
      //for edge case where drawer was closing then swtiched to opening
      this.$().off(`transitionend.${this.get('elementId')}`, this.get('_onCloseDrawer'));

      this.set('renderDrawer', true);

      Ember.$('body').css('overflow', 'hidden');

      Ember.run.next(()=>{
        this.set('didOpen', true);
        this.$('.animation-drawer').focus();
      });
    } else if(this.get('didOpen')) {
      this.send('closeDrawer');
    }
  }),

  triggerDrawer: Ember.on('didInsertElement', function() {
    if(this.get('appDrawerIsOpen')){
      this.propertyDidChange('appDrawerIsOpen');
    }
  }),

  actions: {
    closeDrawer(){
      this.$().on(`transitionend.${this.get('elementId')}`, this.get('_onCloseDrawer'));
      this.set('didOpen', false);
      if(this.get('appDrawerIsOpen')){
        this.attrs.toggleDrawer();
      }
    }
  }
});
