(function(){if(!window.location.search.match(/receiver/gi)){var e=Reveal.getConfig().multiplex,t=io.connect(e.url)
window.addEventListener("load",n),Reveal.addEventListener("slidechanged",n),Reveal.addEventListener("fragmentshown",n),Reveal.addEventListener("fragmenthidden",n),Reveal.addEventListener("overviewhidden",n),Reveal.addEventListener("overviewshown",n),Reveal.addEventListener("paused",n),Reveal.addEventListener("resumed",n)}function n(){var n={state:Reveal.getState(),secret:e.secret,socketId:e.id}
t.emit("multiplex-statechanged",n)}})()
