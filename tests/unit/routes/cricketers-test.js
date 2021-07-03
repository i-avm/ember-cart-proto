import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cricketers', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:cricketers');
    assert.ok(route);
  });
});
