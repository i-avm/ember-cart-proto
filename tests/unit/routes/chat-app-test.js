import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | chat-app', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:chat-app');
    assert.ok(route);
  });
});
