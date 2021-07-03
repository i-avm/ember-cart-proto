import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | auth-user', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:auth-user');
    assert.ok(service);
  });
});
