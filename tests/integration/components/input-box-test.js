import { module, test } from 'qunit';
import { setupRenderingTest } from 'border-radius-previewer/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | input-box', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<InputBox label="top right"/>`);

    assert.dom(this.element).hasText('top right');

    // Template block usage:
    await render(hbs`
      <InputBox>
        template block text
      </InputBox>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
