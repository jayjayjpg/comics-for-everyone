(function(e,t){"function"==typeof define&&define.amd?(e.marked=require("./marked"),e.RevealMarkdown=t(e.marked)):"object"==typeof exports?module.exports=t(require("./marked")):e.RevealMarkdown=t(e.marked)})(this,function(e){var t="^\r?\n---\r?\n$",r="notes?:",a="\\.element\\s*?(.+?)$",n="\\.slide:\\s*?(\\S.+?)$",o="__SCRIPT_END__"
function i(e){var t=(e.querySelector("[data-template]")||e.querySelector("script")||e).textContent,r=(t=t.replace(new RegExp(o,"g"),"<\/script>")).match(/^\n?(\s*)/)[1].length,a=t.match(/^\n?(\t*)/)[1].length
return a>0?t=t.replace(new RegExp("\\n?\\t{"+a+"}","g"),"\n"):r>1&&(t=t.replace(new RegExp("\\n? {"+r+"}","g"),"\n")),t}function s(e){for(var t=e.attributes,r=[],a=0,n=t.length;a<n;a++){var o=t[a].name,i=t[a].value;/data\-(markdown|separator|vertical|notes)/gi.test(o)||(i?r.push(o+'="'+i+'"'):r.push(o))}return r.join(" ")}function l(e){return(e=e||{}).separator=e.separator||t,e.notesSeparator=e.notesSeparator||r,e.attributes=e.attributes||"",e}function u(t,r){r=l(r)
var a=t.split(new RegExp(r.notesSeparator,"mgi"))
return 2===a.length&&(t=a[0]+'<aside class="notes">'+e(a[1].trim())+"</aside>"),'<script type="text/template">'+(t=t.replace(/<\/script>/g,o))+"<\/script>"}function d(e,t){t=l(t)
for(var r,a,n,o=new RegExp(t.separator+(t.verticalSeparator?"|"+t.verticalSeparator:""),"mg"),i=new RegExp(t.separator),s=0,d=!0,c=[];r=o.exec(e);)notes=null,!(a=i.test(r[0]))&&d&&c.push([]),n=e.substring(s,r.index),a&&d?c.push(n):c[c.length-1].push(n),s=o.lastIndex,d=a;(d?c:c[c.length-1]).push(e.substring(s))
for(var p="",h=0,m=c.length;h<m;h++)c[h]instanceof Array?(p+="<section "+t.attributes+">",c[h].forEach(function(e){p+="<section data-markdown>"+u(e,t)+"</section>"}),p+="</section>"):p+="<section "+t.attributes+" data-markdown>"+u(c[h],t)+"</section>"
return p}function c(){return new Promise(function(e){var t=[];[].slice.call(document.querySelectorAll("[data-markdown]")).forEach(function(e,r){e.getAttribute("data-markdown").length?t.push(function(e){return new Promise(function(t,r){var a=new XMLHttpRequest,n=e.getAttribute("data-markdown")
datacharset=e.getAttribute("data-charset"),null!=datacharset&&""!=datacharset&&a.overrideMimeType("text/html; charset="+datacharset),a.onreadystatechange=function(e,a){4===a.readyState&&(a.status>=200&&a.status<300||0===a.status?t(a,n):r(a,n))}.bind(this,e,a),a.open("GET",n,!0)
try{a.send()}catch(o){alert("Failed to get the Markdown file "+n+". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. "+o),t(a,n)}})}(e).then(function(t,r){e.outerHTML=d(t.responseText,{separator:e.getAttribute("data-separator"),verticalSeparator:e.getAttribute("data-separator-vertical"),notesSeparator:e.getAttribute("data-separator-notes"),attributes:s(e)})},function(t,r){e.outerHTML='<section data-state="alert">ERROR: The attempt to fetch '+r+" failed with HTTP status "+t.status+".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>"})):e.getAttribute("data-separator")||e.getAttribute("data-separator-vertical")||e.getAttribute("data-separator-notes")?e.outerHTML=d(i(e),{separator:e.getAttribute("data-separator"),verticalSeparator:e.getAttribute("data-separator-vertical"),notesSeparator:e.getAttribute("data-separator-notes"),attributes:s(e)}):e.innerHTML=u(i(e))}),Promise.all(t).then(e)})}function p(e,t,r){var a=new RegExp(r,"mg"),n=new RegExp('([^"= ]+?)="([^"=]+?)"',"mg"),o=e.nodeValue
if(matches=a.exec(o)){var i=matches[1]
for(o=o.substring(0,matches.index)+o.substring(a.lastIndex),e.nodeValue=o;matchesClass=n.exec(i);)t.setAttribute(matchesClass[1],matchesClass[2])
return!0}return!1}function h(){var t=document.querySelectorAll("[data-markdown]:not([data-markdown-parsed])")
return[].slice.call(t).forEach(function(t){t.setAttribute("data-markdown-parsed",!0)
var r=t.querySelector("aside.notes"),o=i(t)
t.innerHTML=e(o),function e(t,r,a,n,o){if(null!=r&&null!=r.childNodes&&r.childNodes.length>0){previousParentElement=r
for(var i=0;i<r.childNodes.length;i++){if(childElement=r.childNodes[i],i>0)for(j=i-1;j>=0;){if(aPreviousChildElement=r.childNodes[j],"function"==typeof aPreviousChildElement.setAttribute&&"BR"!=aPreviousChildElement.tagName){previousParentElement=aPreviousChildElement
break}j-=1}parentSection=t,"section"==childElement.nodeName&&(parentSection=childElement,previousParentElement=childElement),"function"!=typeof childElement.setAttribute&&childElement.nodeType!=Node.COMMENT_NODE||e(parentSection,childElement,previousParentElement,n,o)}}r.nodeType==Node.COMMENT_NODE&&0==p(r,a,n)&&p(r,t,o)}(t,t,null,t.getAttribute("data-element-attributes")||t.parentNode.getAttribute("data-element-attributes")||a,t.getAttribute("data-attributes")||t.parentNode.getAttribute("data-attributes")||n),r&&t.appendChild(r)}),Promise.resolve()}var m={init:function(t){if(void 0===e)throw"The reveal.js Markdown plugin requires marked to be loaded"
"undefined"!=typeof hljs&&e.setOptions({highlight:function(e,t){return hljs.highlightAuto(e,[t]).value}})
var r=Reveal.getConfig().markdown
return r&&e.setOptions(r),c().then(h)},processSlides:c,convertSlides:h,slidify:d}
return Reveal.registerPlugin("markdown",m),m})
