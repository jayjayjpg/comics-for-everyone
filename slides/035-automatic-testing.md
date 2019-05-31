---
notes: |
  Title Slide: Comics for Literally Everyone
---

# Automatic Accessibility Testing

<div class="clearfix flex">
<pre><code class="javascript" data-line-numbers="1-12" data-trim>
import { module, test } from 'qunit';
import { click, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import a11yAudit from 'ember-a11y-testing/test-support/audit';
module('Acceptance | home', function(hooks) {
  setupApplicationTest(hooks);
  test('the homepage loads', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
    await a11yAudit();
  });
});
</code></pre>
</div>

<!-- .slide: data-transition="fade-in" -->
