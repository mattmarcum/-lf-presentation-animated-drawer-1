import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lf-drawer1', 'Integration | Component | lf drawer1', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lf-drawer1}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lf-drawer1}}
      template block text
    {{/lf-drawer1}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
