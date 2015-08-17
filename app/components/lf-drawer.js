import Ember from 'ember';

export default Ember.Component.extend({
  layoutName: 'components/lf-drawer',
  actions: {
    close() {
      this.sendAction('dismiss');
    }
  }
});
