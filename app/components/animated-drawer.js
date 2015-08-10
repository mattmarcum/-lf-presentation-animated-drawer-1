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
          this.$().off(`transitionend.${_this.get('elementId')}`,    this.get('_onCloseDrawer'));
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
      this.$().on(`transitionend.${this.get('elementId')}`, this.get('_onCloseDrawer'));
      this.set('open', false);
    }
  }
});
