var RevealMath=window.RevealMath||function(){var e=Reveal.getConfig().math||{},a=(e.mathjax||"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js")+"?config="+(e.config||"TeX-AMS_HTML-full"),t={messageStyle:"none",tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],skipTags:["script","noscript","style","textarea","pre"]},skipStartupTypeset:!0}
function n(e,a){for(var t in a)e.hasOwnProperty(t)||(e[t]=a[t])}return{init:function(){n(e,t),n(e.tex2jax,t.tex2jax),e.mathjax=e.config=null,function(e,a){var t=document.querySelector("head"),n=document.createElement("script")
n.type="text/javascript",n.src=e
var i=function(){"function"==typeof a&&(a.call(),a=null)}
n.onload=i,n.onreadystatechange=function(){"loaded"===this.readyState&&i()},t.appendChild(n)}(a,function(){MathJax.Hub.Config(e),MathJax.Hub.Queue(["Typeset",MathJax.Hub]),MathJax.Hub.Queue(Reveal.layout),Reveal.addEventListener("slidechanged",function(e){MathJax.Hub.Queue(["Typeset",MathJax.Hub,e.currentSlide])})})}}}()
Reveal.registerPlugin("math",RevealMath)
