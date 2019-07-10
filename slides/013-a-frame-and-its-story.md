---
notes: |
  Title Slide: Comics for Literally Everyone
---

## Screenreader Driven Story Telling <!-- .element:  -->

<div class="clearfix">
  <div class="left" style="width:30%">
    <img width="200" alt="Single frame from Diamanias comic: A person struggles to keep their balance on a boat on stormy sea. They shout: Noooo!" src="/assets/images/frame.png"  />
  </div>
  <div class="right" style="width:70%">
    <pre><code  class="html" data-line-numbers="4-6" data-trim>// comic.html
&lt;article class="comic-panel"
  style="background-image: url('/images/boat.png');"&gt;
  &lt;span role="img"
        aria-label="A person struggles..."&gt;
  &lt;/span&gt;
&lt;/article&gt;
</code></pre>
<p style="display: none;">Panel 1: A person struggles to keep their balance on a boat on stormy sea.</p>
  </div>
</div>

<!-- .slide: data-transition="fade-in" -->
