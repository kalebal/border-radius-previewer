import { module, test } from 'qunit';
import { setupRenderingTest } from 'border-radius-previewer/tests/helpers';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | example-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it displays examples', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('examples', ['50px', '10px']);

    await render(hbs`<ExampleList @examples={{this.examples}}/>`);

    assert.dom(this.element).hasText('50px');
  });

  test('it handles click events', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('examples', ['50px', '10px']);
    await render(hbs`<ExampleList />`);
    assert.dom(this.element).hasText('50px');
    await click(this.element.textContent('50px'));
  });
});
