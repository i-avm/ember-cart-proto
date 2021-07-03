import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | products/details', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:products/details');
    assert.ok(route);
  });
});
