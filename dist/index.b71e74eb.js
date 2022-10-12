// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iJYvl":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var _index = require("./layout/chat/index");
var _indexScss = require("./index.scss");
var _domelements = require("./const/DOMElements");
var _login = require("./layout/login");
var _registration = require("./layout/registration");
var _userProfile = require("./layout/userProfile");
(0, _domelements.CHAT).innerHTML = (0, _index.ChatLayout).compile();
(0, _domelements.LOGIN).innerHTML = (0, _login.LoginLayout).compile();
(0, _domelements.REGISTRATION).innerHTML = (0, _registration.RegistrationLayout).compile();
(0, _domelements.USER_PROFILE).innerHTML = (0, _userProfile.UserProfileLayout).compile();

},{"./layout/chat/index":"f2Bhd","./index.scss":"lJZlQ","./const/DOMElements":"bZveW","./layout/login":"gBpMJ","./layout/registration":"6Mxo7","./layout/userProfile":"9clj6"}],"f2Bhd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatLayout", ()=>(0, _chatLayoutTmpl.chatLayoutTemplate));
var _chatLayoutTmpl = require("./chatLayout.tmpl");

},{"./chatLayout.tmpl":"2bHIi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2bHIi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chatLayoutTemplate", ()=>chatLayoutTemplate);
var _index = require("../../pages/home/modules/chat/sidebar/index");
var _template = require("../../utils/templateEngine/template");
var _chatScss = require("./chat.scss");
var _main = require("../../pages/home/modules/chat/main");
const chatLayoutTemplate = new (0, _template.Template)(`
   <div class="chat">
      ${(0, _index.Sidebar).compile()}
      ${(0, _main.Main).compile()}
   </div>
   
`);

},{"../../pages/home/modules/chat/sidebar/index":"lIZ3z","../../utils/templateEngine/template":"O37ou","./chat.scss":"dLYAE","../../pages/home/modules/chat/main":"kupMq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lIZ3z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Sidebar", ()=>(0, _sidebarTmpl.sidebarTemplate));
var _sidebarTmpl = require("./sidebar.tmpl");

},{"./sidebar.tmpl":"bzBFv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bzBFv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sidebarTemplate", ()=>sidebarTemplate);
var _template = require("../../../../../utils/templateEngine/template");
var _sidebarScss = require("./sidebar.scss");
var _index = require("../components/chatItem/index");
const sidebarData = {
    chats: [
        {
            imgSrc: "",
            userName: "Oleg",
            lastMsg: " some long text or not long a dnot know u know what i mean",
            lastMsgTime: new Date(12414).getHours() + ":20",
            countOfNotification: 2
        },
        {
            imgSrc: "",
            userName: "Oleg",
            lastMsg: " some long text or not long a dnot know u know what i mean",
            lastMsgTime: new Date(12414).getHours() + ":20",
            countOfNotification: 2
        },
        {
            imgSrc: "",
            userName: "Oleg",
            lastMsg: " some long text or not long a dnot know u know what i mean some long text or not long a dnot know u know what i meansome long text or not long a dnot know u know what i mean",
            lastMsgTime: new Date(12414).getHours() + ":20",
            countOfNotification: 2
        },
        {
            imgSrc: "",
            userName: "Oleg",
            lastMsg: " some long text or not long a dnot know u know what i mean",
            lastMsgTime: new Date(12414).getHours() + ":20",
            countOfNotification: 2
        },
        {
            imgSrc: "",
            userName: "Oleg",
            lastMsg: " some long text or not long a dnot know u know what i mean",
            lastMsgTime: new Date(12414).getHours() + ":20",
            countOfNotification: 2
        },
        {
            imgSrc: "",
            userName: "Oleg",
            lastMsg: " some long text or not long a dnot know u know what i mean",
            lastMsgTime: new Date(12414).getHours() + ":20",
            countOfNotification: 2
        }, 
    ]
};
const sidebarTemplate = new (0, _template.Template)(`
<div class="sidebar">
                <div class="chat_chats">
                        ${sidebarData.chats.map((chat)=>(0, _index.ChatItem).compile(chat)).join("")}
                </div>
                <input type="text" class="sidebar_search">
            </div>
`);

},{"../../../../../utils/templateEngine/template":"O37ou","./sidebar.scss":"2Kjlx","../components/chatItem/index":"cWG7C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"O37ou":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Template", ()=>Template);
var _regExp = require("./const/regExp");
class Template {
    constructor(template){
        this.initialTemplate = template;
        this.modifyTemplate = this.initialTemplate;
    }
    compile(context) {
        // this.modifyTemplate = template
        const result = this.foundDynamicRegexp(context);
        this.modifyTemplate = this.initialTemplate;
        return result;
    }
    getProperty(object, propertyName) {
        const keys = propertyName.split(".");
        let propertyOfObject;
        let currentObject = object;
        for (const key of keys){
            propertyOfObject = currentObject[key];
            if (!propertyOfObject) return undefined;
            currentObject = propertyOfObject;
        }
        return propertyOfObject;
    }
    foundDynamicRegexp(context) {
        let nextFoundMatchArray = null;
        this.renderSimpleVariables(context);
        while(nextFoundMatchArray = (0, _regExp.TEMPLATE_DYNAMIC_REGEXP).exec(this.modifyTemplate)){
            const foundedDynamicReg = nextFoundMatchArray[1].split(" ").join("");
            const foundedMatch = nextFoundMatchArray[0];
            if (foundedDynamicReg.match((0, _regExp.TEMPLATE_IF_THEN_REGEXP))) this.renderCondition(foundedDynamicReg, foundedMatch);
        }
        this.replaceAllDynamicRegExp();
        return this.modifyTemplate;
    }
    replaceAllDynamicRegExp() {
        let nextFoundMatchArray = null;
        while(nextFoundMatchArray = (0, _regExp.TEMPLATE_DYNAMIC_REGEXP).exec(this.initialTemplate)){
            const foundedDynamicReg = nextFoundMatchArray[1].split(" ").join("");
            const foundedMatch = nextFoundMatchArray[0];
            this.modifyTemplate = this.modifyTemplate.replace(new RegExp(foundedMatch, "gi"), foundedDynamicReg);
        }
    }
    renderSimpleVariables(context) {
        let nextFoundMatchArray = null;
        while(nextFoundMatchArray = (0, _regExp.TEMPLATE_VARIABLES_REGEXP).exec(this.initialTemplate)){
            const foundedNameOfProperty = nextFoundMatchArray[1].trim();
            const foundedMatch = nextFoundMatchArray[0];
            const property = this.getProperty(context, foundedNameOfProperty);
            if (typeof property === "function") this.modifyTemplate = this.modifyTemplate.replace(new RegExp(foundedMatch, "gi"), `window.${property}()`);
            else if (foundedNameOfProperty) this.modifyTemplate = this.modifyTemplate.replace(new RegExp(foundedMatch, "gi"), property);
        }
    }
    static insertTemplateInDom(template, parent) {
        parent.innerHTML = template;
    }
    renderCondition(foundedDynamicReg, foundedMatch) {
        const foundedConditionArgs = (0, _regExp.TEMPLATE_IF_THEN_REGEXP).exec(foundedDynamicReg);
        console.log(foundedMatch, foundedConditionArgs);
        const condition = eval(foundedConditionArgs[1]);
        const ifSuccessThen = foundedConditionArgs[2];
        if (!!condition) this.modifyTemplate = this.modifyTemplate.replace(foundedMatch, ifSuccessThen);
        else this.modifyTemplate = this.modifyTemplate.replace(foundedMatch, "");
    }
}

},{"./const/regExp":"8OkUo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8OkUo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TEMPLATE_DYNAMIC_REGEXP", ()=>TEMPLATE_DYNAMIC_REGEXP);
parcelHelpers.export(exports, "TEMPLATE_IF_THEN_REGEXP", ()=>TEMPLATE_IF_THEN_REGEXP);
parcelHelpers.export(exports, "TEMPLATE_VARIABLES_REGEXP", ()=>TEMPLATE_VARIABLES_REGEXP);
const TEMPLATE_DYNAMIC_REGEXP = new RegExp(/\{\{(.*?)\}\}/gi);
const TEMPLATE_IF_THEN_REGEXP = new RegExp(/if\((.*?)\)then{(.*?)}/gi);
const TEMPLATE_VARIABLES_REGEXP = new RegExp(/!(.*?)!/gi);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2Kjlx":[function() {},{}],"cWG7C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatItem", ()=>(0, _chatItemTmpl.chatItemTemplate));
var _chatItemTmpl = require("./chatItem.tmpl");

},{"./chatItem.tmpl":"d5b58","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5b58":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chatItemTemplate", ()=>chatItemTemplate);
var _template = require("../../../../../../utils/templateEngine/template");
var _chatItemScss = require("./chatItem.scss");
const chatItemTemplate = new (0, _template.Template)(`
        <div class="chat-item">
        <div class="chat-item_img">
                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Favatarko.ru%2Fkartinka%2F32117&psig=AOvVaw0qWlT3XgCtRGL8gijD5Mev&ust=1665438264092000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDNrZKP1PoCFQAAAAAdAAAAABAE" alt="avatar">
        </div>
        <div class="chat-item_desc">
            <div class="chat-item_msg">
                <span class="chat-item_user-name">{{ !userName!}}</span>
                <span class="chat-item_last-msg">{{ !lastMsg! }}</span>
            </div>
        </div>
        <div class="chat-item_info">
            <div class="chat-item_time">
                {{ !lastMsgTime! }}
            </div>
            <div class="chat-item_notification">
                {{ !countOfNotification! }}
            </div>
        </div>
    </div>
    `);

},{"../../../../../../utils/templateEngine/template":"O37ou","./chatItem.scss":"hKoS2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hKoS2":[function() {},{}],"dLYAE":[function() {},{}],"kupMq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Main", ()=>(0, _mainTmpl.mainTemplate));
var _mainTmpl = require("./main.tmpl");

},{"./main.tmpl":"aqJap","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aqJap":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mainTemplate", ()=>mainTemplate);
var _template = require("../../../../../utils/templateEngine/template");
var _header = require("./header");
var _mainScss = require("./main.scss");
var _messages = require("./messages");
var _controlPanelTmpl = require("./controlPanel/controlPanel.tmpl");
const mainData = {
    userName: "Oleg"
};
const mainTemplate = new (0, _template.Template)(`
       <div class="main">
        ${(0, _header.Header).compile(mainData)}
        ${(0, _messages.Messages).compile()}
        ${(0, _controlPanelTmpl.ControlPanelTemplate).compile()}
        </div>
`);

},{"../../../../../utils/templateEngine/template":"O37ou","./header":"lmx9n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./main.scss":"2vpGj","./messages":"1ABhw","./controlPanel/controlPanel.tmpl":"apFDe"}],"lmx9n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Header", ()=>(0, _headerTmpl.headerTemplate));
var _headerTmpl = require("./header.tmpl");

},{"./header.tmpl":"iQJ6l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQJ6l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "headerTemplate", ()=>headerTemplate);
var _template = require("../../../../../../utils/templateEngine/template");
var _headerScss = require("./header.scss");
var _optionIcon = require("../../../../../../components/icons/optionIcon");
const headerTemplate = new (0, _template.Template)(`
        <div class="header">
        <div class="header_user">
            <div class="header_avatar">
                <img src="" alt="">
            </div>
            <div class="header_name">
                <span>
                    {{ !userName! }}
                </span>
            </div>
        </div>
        <button class="btn header_optionsBtn">
            ${(0, _optionIcon.OptionIcon)()}
        </button>
    </div>
`);

},{"../../../../../../utils/templateEngine/template":"O37ou","./header.scss":"bld9X","../../../../../../components/icons/optionIcon":"48gqX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bld9X":[function() {},{}],"48gqX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OptionIcon", ()=>OptionIcon);
const OptionIcon = ()=>`
<svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="1.5" cy="2" r="1.5" fill="#1E1E1E"/>
<circle cx="1.5" cy="8" r="1.5" fill="#1E1E1E"/>
<circle cx="1.5" cy="14" r="1.5" fill="#1E1E1E"/>
</svg>

`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2vpGj":[function() {},{}],"1ABhw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Messages", ()=>(0, _messagesTmpl.messagesTemplate));
var _messagesTmpl = require("./messages.tmpl");

},{"./messages.tmpl":"cJPVP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cJPVP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "messagesTemplate", ()=>messagesTemplate);
var _template = require("../../../../../../utils/templateEngine/template");
var _messagesScss = require("./messages.scss");
var _message = require("../../components/message");
const messagesData = {
    messages: [
        {
            user: `"user"`,
            messageText: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро."
        },
        {
            user: `"home"`,
            messageText: "Hello!"
        },
        {
            user: `"some"`,
            messageText: "Hello!"
        }, 
    ]
};
const messagesTemplate = new (0, _template.Template)(`
    <div class="messages"> 
        ${messagesData.messages.map((message)=>(0, _message.Message).compile(message)).join("")}
    </div>
`);

},{"../../../../../../utils/templateEngine/template":"O37ou","./messages.scss":"bzvb9","../../components/message":"4wmto","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bzvb9":[function() {},{}],"4wmto":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Message", ()=>(0, _messageTmpl.messageTemplate));
var _messageTmpl = require("./message.tmpl");

},{"./message.tmpl":"3Xa27","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Xa27":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "messageTemplate", ()=>messageTemplate);
var _template = require("../../../../../../utils/templateEngine/template");
var _messageScss = require("./message.scss");
const messageTemplate = new (0, _template.Template)(`
            <div class="message {{ if ( !user! ==="home") then {message__my} }}">
            <div class="message_info">
                <p class="message_time"></p>
                <div class="message_check">
                    check
                </div>
            </div>
            <p class="message_text">
                {{ !messageText! }}
            </p>
            </div>
    `);

},{"../../../../../../utils/templateEngine/template":"O37ou","./message.scss":"8Q8ni","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Q8ni":[function() {},{}],"apFDe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ControlPanelTemplate", ()=>ControlPanelTemplate);
var _template = require("../../../../../../utils/templateEngine/template");
var _controlPanelScss = require("./controlPanel.scss");
const ControlPanelTemplate = new (0, _template.Template)(`
    <div class="control-panel">
        <form class="control-panel_form">
        <button class="control-panel_btn">
            Option
        </button>
            <input type="text">
            <button type="submit">
                отпр
            </button>
        </form>
    </div>
`);

},{"../../../../../../utils/templateEngine/template":"O37ou","./controlPanel.scss":"97p7s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"97p7s":[function() {},{}],"lJZlQ":[function() {},{}],"bZveW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CHAT", ()=>CHAT);
parcelHelpers.export(exports, "LOGIN", ()=>LOGIN);
parcelHelpers.export(exports, "REGISTRATION", ()=>REGISTRATION);
parcelHelpers.export(exports, "USER_PROFILE", ()=>USER_PROFILE);
const CHAT = document.getElementById("CHAT");
const LOGIN = document.getElementById("LOGIN");
const REGISTRATION = document.getElementById("REGISTRATION");
const USER_PROFILE = document.getElementById("USER_PROFILE");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gBpMJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LoginLayout", ()=>(0, _loginTmpl.loginLayoutTemplate));
var _loginTmpl = require("./login.tmpl");

},{"./login.tmpl":"2HwMp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2HwMp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loginLayoutTemplate", ()=>loginLayoutTemplate);
var _input = require("../../components/input");
var _mainBtn = require("../../components/btns/mainBtn");
var _defaultBtn = require("../../components/btns/defaultBtn");
var _loginScss = require("./login.scss");
var _template = require("../../utils/templateEngine/template");
const loginData = {
    logins: [
        {
            labelName: "login",
            inputValue: "some text"
        },
        {
            labelName: "password",
            inputValue: "another text"
        }, 
    ],
    defaultBtn: {
        text: "Еще нет аккаунта ?"
    },
    mainBtn: {
        text: "Войти"
    }
};
const loginLayoutTemplate = new (0, _template.Template)(`
    <div class="login">
        <div class="login_container">
            <h1 class="login_title">Вход</h1>
            <form class="login_form">
            ${loginData.logins.map((login)=>(0, _input.Input).compile(login)).join("")}
              
            </form>
            <div class="login_buttons">
                ${(0, _mainBtn.MainBtn).compile(loginData.mainBtn)}
                ${(0, _defaultBtn.DefaultBtn).compile(loginData.defaultBtn)}
            </div>
        </div>

    </div>
`);

},{"../../components/input":"haspD","../../components/btns/mainBtn":"7P99L","../../components/btns/defaultBtn":"a7ScY","./login.scss":"knGnm","../../utils/templateEngine/template":"O37ou","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"haspD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Input", ()=>(0, _inputTmpl.inputTemplate));
var _inputTmpl = require("./input.tmpl");

},{"./input.tmpl":"9ygA7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ygA7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inputTemplate", ()=>inputTemplate);
var _inputScss = require("./input.scss");
var _template = require("../../utils/templateEngine/template");
const inputTemplate = new (0, _template.Template)(`
<div class="login_inputs">
     <label class="input__with-label">
          <span class="input__with-label_label">
            {{ !labelName !}}
          </span>
          <input type="{{ !type !}}" value="{{!inputValue!}}" class="input__with-label_input" type="text" name="login" id="LOGIN">
    </label>
 </div>
`);

},{"./input.scss":"8AiIv","../../utils/templateEngine/template":"O37ou","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8AiIv":[function() {},{}],"7P99L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MainBtn", ()=>(0, _mainBtnTmpl.mainBtnTemplate));
var _mainBtnTmpl = require("./mainBtn.tmpl");

},{"./mainBtn.tmpl":"hdmu6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hdmu6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mainBtnTemplate", ()=>mainBtnTemplate);
var _template = require("../../../utils/templateEngine/template");
var _btnsScss = require("../btns.scss");
const mainBtnTemplate = new (0, _template.Template)(`
<button class="btn btn__main login_btn__main">
    <span class="btn_text">
        {{text}}
    </span>
</button>
`);

},{"../../../utils/templateEngine/template":"O37ou","../btns.scss":"9E0YI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9E0YI":[function() {},{}],"a7ScY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DefaultBtn", ()=>(0, _defaultBtnTmpl.defaultBtnTemplate));
var _defaultBtnTmpl = require("./defaultBtn.tmpl");

},{"./defaultBtn.tmpl":"1ayGF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ayGF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultBtnTemplate", ()=>defaultBtnTemplate);
var _template = require("../../../utils/templateEngine/template");
var _btnsScss = require("../btns.scss");
const defaultBtnTemplate = new (0, _template.Template)(`
    <button class="btn">
       <span class="btn_text">
         {{!text!}}
        </span>
     </button>
    `);

},{"../../../utils/templateEngine/template":"O37ou","../btns.scss":"9E0YI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9E0YI":[function() {},{}],"knGnm":[function() {},{}],"6Mxo7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RegistrationLayout", ()=>(0, _registrationTmpl.registrationLayoutTemplate));
var _registrationTmpl = require("./registration.tmpl");

},{"./registration.tmpl":"bm0Dv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bm0Dv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registrationLayoutTemplate", ()=>registrationLayoutTemplate);
var _input = require("../../components/input");
var _registrationScss = require("./registration.scss");
var _mainBtn = require("../../components/btns/mainBtn");
var _defaultBtn = require("../../components/btns/defaultBtn");
var _template = require("../../utils/templateEngine/template");
const registrationData = {
    inputs: [
        {
            labelName: "Почта",
            inputValue: "Email",
            type: "text"
        },
        {
            labelName: "Логин",
            inputValue: "Логин",
            type: "text"
        },
        {
            labelName: "Имя",
            inputValue: "Имя",
            type: "text"
        },
        {
            labelName: "Фамилия",
            inputValue: "Email",
            type: "text"
        },
        {
            labelName: "Телефон",
            inputValue: "Email",
            type: "text"
        },
        {
            labelName: "Пароль",
            inputValue: "Email",
            type: "password"
        },
        {
            labelName: "Пароль (ещё раз)",
            inputValue: "Email",
            type: "password"
        }, 
    ],
    mainBtn: {
        text: "Зарегистрироваться"
    },
    defaultBtn: {
        text: "Войти"
    }
};
const registrationLayoutTemplate = new (0, _template.Template)(`
    <div class="registration">
             <div class="registration_container">
             <h1 class="registration_title">Регистрация</h1>
            <form class="registration_form">
                ${registrationData.inputs.map((input)=>(0, _input.Input).compile(input))}
            </form> 
             <div class="registration_buttons">
                ${(0, _mainBtn.MainBtn).compile(registrationData.mainBtn)}
                ${(0, _defaultBtn.DefaultBtn).compile(registrationData.defaultBtn)}
            </div>
            </div>
             
        </div>
`);

},{"../../components/input":"haspD","./registration.scss":"c0diP","../../components/btns/mainBtn":"7P99L","../../components/btns/defaultBtn":"a7ScY","../../utils/templateEngine/template":"O37ou","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c0diP":[function() {},{}],"9clj6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UserProfileLayout", ()=>(0, _userProfileTmpl.userProfileLayoutTemplate));
var _userProfileTmpl = require("./userProfile.tmpl");

},{"./userProfile.tmpl":"9PMKT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9PMKT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userProfileLayoutTemplate", ()=>userProfileLayoutTemplate);
var _userProfileScss = require("./userProfile.scss");
var _template = require("../../utils/templateEngine/template");
var _baseInfo = require("../../components/baseInfo");
var _defaultBtn = require("../../components/btns/defaultBtn");
const userData = {
    userName: "Alex Golanov",
    userInfo: [
        {
            key: "some 1",
            value: "value 1"
        },
        {
            key: "some 2",
            value: "value 2"
        },
        {
            key: "some 3",
            value: "value 4"
        }, 
    ],
    btns: [
        {
            text: "Изменить данные"
        },
        {
            text: "Изменить пароль"
        }
    ]
};
const userProfileLayoutTemplate = new (0, _template.Template)(`
            <div class="user-profile">
        <div class="user-profile_logo">
            Logo
        </div>
        <span class="user-profile_name">Oleg</span>
        <div class="user-profile_img">
            Profile image
        </div>
        <div class="user-profile_info">
               ${userData.userInfo.map((info)=>(0, _baseInfo.BaseInfo).compile(info)).join("")}
        </div>
        <div class="user-profile_change-info">
            ${userData.btns.map((btn)=>(0, _defaultBtn.DefaultBtn).compile(btn))}
        </div>
    </div>
    `);

},{"./userProfile.scss":"hYFra","../../utils/templateEngine/template":"O37ou","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../components/baseInfo":"2ggsR","../../components/btns/defaultBtn":"a7ScY"}],"hYFra":[function() {},{}],"2ggsR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseInfo", ()=>(0, _baseInfoTmpl.baseInfoTemplate));
var _baseInfoTmpl = require("./baseInfo.tmpl");

},{"./baseInfo.tmpl":"hlAAz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hlAAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "baseInfoTemplate", ()=>baseInfoTemplate);
var _baseInfoScss = require("./baseInfo.scss");
var _template = require("../../utils/templateEngine/template");
const baseInfoTemplate = new (0, _template.Template)(`
    <div class="base-info">
        <div class="base-info_key">
                <span>
                    {{ !key!}}
                </span>
        </div>
        <div class="base-info_value">
                <span>
                    {{!value!}}
                </span>
        </div>
    </div>
    `);

},{"./baseInfo.scss":"hZ7wC","../../utils/templateEngine/template":"O37ou","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hZ7wC":[function() {},{}]},["iJYvl","h7u1C"], "h7u1C", "parcelRequire94c2")

//# sourceMappingURL=index.b71e74eb.js.map
