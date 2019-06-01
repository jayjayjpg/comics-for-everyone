"use strict"
define("comics-for-everyone/adapters/application",["exports","open-slide/adapters/application"],function(e,o){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.default}})}),define("comics-for-everyone/app",["exports","comics-for-everyone/resolver","ember-load-initializers","comics-for-everyone/config/environment"],function(e,o,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:o.default});(0,t.default)(n,r.default.modulePrefix)
var i=n
e.default=i}),define("comics-for-everyone/components/reveal-slides",["exports","open-slide-reveal-template/components/reveal-slides"],function(e,o){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.default}})}),define("comics-for-everyone/helpers/app-version",["exports","comics-for-everyone/config/environment","ember-cli-app-version/utils/regexp"],function(e,o,t){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=o.default.APP.version,i=r.versionOnly||r.hideSha,a=r.shaOnly||r.hideVersion,f=null
return i&&(r.showExtended&&(f=n.match(t.versionExtendedRegExp)),f||(f=n.match(t.versionRegExp))),a&&(f=n.match(t.shaRegExp)),f?f[0]:n}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
var n=Ember.Helper.helper(r)
e.default=n}),define("comics-for-everyone/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=o.default
e.default=t}),define("comics-for-everyone/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=o.default
e.default=t}),define("comics-for-everyone/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","comics-for-everyone/config/environment"],function(e,o,t){var r,n
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t.default.APP&&(r=t.default.APP.name,n=t.default.APP.version)
var i={name:"App Version",initialize:(0,o.default)(r,n)}
e.default=i}),define("comics-for-everyone/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",o.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=t}),define("comics-for-everyone/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,o,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:o.default}
e.default=r}),define("comics-for-everyone/initializers/export-application-global",["exports","comics-for-everyone/config/environment"],function(e,o){function t(){var e=arguments[1]||arguments[0]
if(!1!==o.default.exportApplicationGlobal){var t
if("undefined"!=typeof window)t=window
else if("undefined"!=typeof global)t=global
else{if("undefined"==typeof self)return
t=self}var r,n=o.default.exportApplicationGlobal
r="string"==typeof n?n:Ember.String.classify(o.default.modulePrefix),t[r]||(t[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete t[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=t,e.default=void 0
var r={name:"export-application-global",initialize:t}
e.default=r}),define("comics-for-everyone/initializers/routes",["exports","comics-for-everyone/router"],function(e,o){function t(){o.default.map(function(){this.route("show",{path:"/*"})})}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=t,e.default=void 0
var r={initialize:t}
e.default=r}),define("comics-for-everyone/instance-initializers/clear-double-boot",["exports","ember-cli-fastboot/instance-initializers/clear-double-boot"],function(e,o){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.default}})}),define("comics-for-everyone/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"ember-data",initialize:o.default}
e.default=t}),define("comics-for-everyone/locations/none",["exports","ember-cli-fastboot/locations/none"],function(e,o){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.default}})}),define("comics-for-everyone/locations/preserve-hash",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=Ember.HistoryLocation.extend({getHash:function(){return location.hash}})
e.default=o}),define("comics-for-everyone/models/slide",["exports","open-slide/models/slide"],function(e,o){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.default}})}),define("comics-for-everyone/resolver",["exports","ember-resolver"],function(e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=o.default
e.default=t}),define("comics-for-everyone/router",["exports","comics-for-everyone/config/environment"],function(e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Router.extend({location:o.default.locationType,rootURL:o.default.rootURL})
t.map(function(){})
var r=t
e.default=r}),define("comics-for-everyone/routes/application",["exports","open-slide/routes/application"],function(e,o){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.default}})}),define("comics-for-everyone/services/ajax",["exports","ember-ajax/services/ajax"],function(e,o){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.default}})}),define("comics-for-everyone/services/fastboot",["exports","ember-cli-fastboot/services/fastboot"],function(e,o){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.default}})}),define("comics-for-everyone/templates/application",["exports","open-slide-reveal-template/templates/application"],function(e,o){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.default}})}),define("comics-for-everyone/config/environment",[],function(){if("undefined"!=typeof FastBoot)return FastBoot.config("comics-for-everyone")
try{var e="comics-for-everyone/config/environment",o=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),t={default:JSON.parse(decodeURIComponent(o))}
return Object.defineProperty(t,"__esModule",{value:!0}),t}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),"undefined"==typeof FastBoot&&(runningTests||require("comics-for-everyone/app").default.create({name:"comics-for-everyone",version:"0.0.0+81ff4fb0"})),define("~fastboot/app-factory",["comics-for-everyone/app","comics-for-everyone/config/environment"],function(e,o){return e=e.default,o=o.default,{default:function(){return e.create(o.APP)}}})
