---
notes: |
  Title Slide: Comics for Literally Everyone
---

# Announcing Route Changes

<div class="clearfix flex">
<pre><code class="javascript" data-line-numbers="1-12" data-trim>
ember install ember-cli-document-title
</code></pre>
</div>

<div class="clearfix flex">
<pre><code class="javascript" data-line-numbers="1-12" data-trim>
import Route from '@ember/routing/route';
export default Route.extend({
  titleToken: function(model) {
    return `Number ${model.chapter.number}`;
  },
  title: function(token) {
    return `Diamanias - Chapter ${token}`;
  },
});
</code></pre>
</div>

<!-- .slide: data-transition="fade-in" -->
