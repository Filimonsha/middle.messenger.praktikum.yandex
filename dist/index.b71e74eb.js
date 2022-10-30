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
var _indexScss = require("./index.scss");
var _chatLayout = require("./layout/chat/ChatLayout");
(0, _chatLayout.ChatLayoutComponent).renderDom("#CHAT");

},{"./index.scss":"lJZlQ","./layout/chat/ChatLayout":"4XgnC"}],"lJZlQ":[function() {},{}],"4XgnC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatLayoutComponent", ()=>ChatLayoutComponent);
var _block = require("../../utils/framework/block");
var _chatLayoutTmpl = require("./chatLayout.tmpl");
var _sidebar = require("../../pages/home/modules/chat/sidebar/Sidebar");
var _sidebarDefault = parcelHelpers.interopDefault(_sidebar);
var _main = require("../../pages/home/modules/chat/main");
const chatLayoutProps = {
    state: {
        Sidebar: (0, _sidebarDefault.default),
        Main: (0, _main.MainComponent)
    }
};
class ChatLayout extends (0, _block.Block) {
    constructor(props){
        super((0, _chatLayoutTmpl.chatLayoutTemplate), props);
    }
}
const ChatLayoutComponent = new ChatLayout(chatLayoutProps);

},{"../../utils/framework/block":"d3psB","./chatLayout.tmpl":"2bHIi","../../pages/home/modules/chat/sidebar/Sidebar":"2lmrj","../../pages/home/modules/chat/main":"kupMq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d3psB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Block", ()=>Block);
var _uuid = require("uuid");
var _eventBus = require("../eventBus");
var _events = require("./const/events");
class Block {
    eventBus = new (0, _eventBus.EventBus)();
    componentId = `component-${(0, _uuid.v4)()}`;
    // private
    constructor(template, props){
        this.template = template;
        this.componentProps = props;
        const { children , simpleState  } = this.findChildrenAndState(props.state);
        this.componentChildren = children;
        this.componentSimpleState = simpleState;
        if (children) this.createDummyChildren();
        this.makeStateProxy();
        this.registerEvents();
        this.eventBus.notify((0, _events.Events).INIT);
    }
    registerEvents = ()=>{
        this.eventBus.subscribeCallbackOnEvent((0, _events.Events).INIT, this.init.bind(this));
        this.eventBus.subscribeCallbackOnEvent((0, _events.Events).COMPONENT_DID_MOUNT, this.componentDidMount.bind(this));
        this.eventBus.subscribeCallbackOnEvent((0, _events.Events).COMPONENT_RENDER, this.render.bind(this));
        this.eventBus.subscribeCallbackOnEvent((0, _events.Events).COMPONENT_DID_UPDATE, this.componentDidUpdate.bind(this));
    };
    // State Proxy
    makeStateProxy = ()=>{
        const handlers = {
            set: (target, p, value)=>{
                target[p] = value;
                this.eventBus.notify((0, _events.Events).COMPONENT_DID_UPDATE);
                return true;
            }
        };
        this.componentState = new Proxy(this.componentProps.state, handlers);
    };
    // Events
    init = ()=>{
        const createDummyElement = ()=>{
            this.element = document.createElement("div");
        };
        createDummyElement();
        this.eventBus.notify((0, _events.Events).COMPONENT_RENDER);
    };
    componentDidMount(oldProps) {
        console.log("component did mount");
    }
    componentDidUpdate() {
        console.log(" Component Did update!");
        this.eventBus.notify((0, _events.Events).COMPONENT_RENDER);
    }
    render = ()=>{
        if (this.element && this.componentProps.events) Object.keys(this.componentProps.events).forEach((eventName)=>{
            this.element.removeEventListener(eventName, this.componentProps.events[eventName]);
        });
        this.element.innerHTML = this.template.compile(this.componentState);
        this.element = this.element.children[0];
        console.log(this.element.children);
        // AttributeHandler.handEventsAttributes(this.element)
        if (this.componentChildren) this.renderChildren();
        if (this.componentProps.events) Object.keys(this.componentProps.events).forEach((eventName)=>{
            this.element.addEventListener(eventName, this.componentProps.events[eventName].bind(this));
        });
    };
    // find children
    findChildrenAndState = (state)=>{
        const children = {};
        const simpleState = {};
        Object.entries(state).forEach(([key, value])=>{
            const stateValueIsArray = Array.isArray(value);
            if (stateValueIsArray) {
                if (value.every((element)=>element instanceof Block)) {
                    children[key] = [];
                    value.forEach((childElement, index)=>{
                        children[key].push(childElement);
                    });
                }
            } else if (value instanceof Block) children[key] = value;
            else simpleState[key] = value;
        });
        return {
            children,
            simpleState
        };
    };
    createDummyChildren() {
        const createDummyChild = (childrenValue, childrenName)=>{};
        Object.entries(this.componentChildren).forEach((children)=>{
            const childrenName = children[0];
            const childrenValue = children[1];
            if (Array.isArray(childrenValue)) childrenValue.forEach((child, index)=>{
                const childrenDummy = `
                <div id=${child.componentId}></div>
            `;
                this.componentProps.state[childrenName][index] = childrenDummy;
            });
            else {
                const childrenDummy = `
                <div id=${childrenValue.componentId}></div>
            `;
                this.componentProps.state[childrenName] = childrenDummy;
            }
        });
    }
    renderChildren() {
        const renderOneChild = (child)=>{
            const childrenId = `#${child.componentId.toString()}`;
            const foundChildrenDummy = this.element.querySelector(childrenId);
            if (foundChildrenDummy) {
                console.error(foundChildrenDummy);
                foundChildrenDummy.replaceWith(child.getCompiledElement());
            } else throw new Error("In template didnt find children layout!");
        };
        Object.values(this.componentChildren).forEach((children)=>{
            if (Array.isArray(children)) children.forEach(renderOneChild);
            else renderOneChild(children);
        });
    }
    // User interaction
    updateState = (stateName, newValue)=>{
        this.componentState[stateName] = newValue;
    };
    getState = ()=>({
            ...this.componentState
        });
    getComponentChildren = ()=>({
            ...this.componentChildren
        });
    getCompiledElement = ()=>this.element;
    renderDom = (rootSelector)=>{
        const root = document.querySelector(rootSelector);
        root.appendChild(this.element);
        this.eventBus.notify((0, _events.Events).COMPONENT_DID_MOUNT);
    };
}

},{"uuid":"j4KJi","../eventBus":"jCu5K","./const/events":"9RnyM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j4KJi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":false,"./v3.js":false,"./v4.js":"8zJtu","./v5.js":false,"./nil.js":false,"./version.js":false,"./validate.js":"eHPgI","./stringify.js":"5Y9F1","./parse.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8zJtu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeJs = require("./native.js");
var _nativeJsDefault = parcelHelpers.interopDefault(_nativeJs);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
function v4(options, buf, offset) {
    if ((0, _nativeJsDefault.default).randomUUID && !buf && !options) return (0, _nativeJsDefault.default).randomUUID();
    options = options || {};
    const rnds = options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJs.unsafeStringify)(rnds);
}
exports.default = v4;

},{"./native.js":"lYayS","./rng.js":"2psyE","./stringify.js":"5Y9F1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lYayS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
exports.default = {
    randomUUID
};

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

},{}],"2psyE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    return getRandomValues(rnds8);
}
exports.default = rng;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Y9F1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unsafeStringify", ()=>unsafeStringify);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Stringified UUID is invalid");
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"eHPgI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eHPgI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === "string" && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"bUa5g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bUa5g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jCu5K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventBus", ()=>EventBus);
class EventBus {
    listeners = {};
    constructor(){}
    subscribeCallbackOnEvent(eventName, callback) {
        if (!this.listeners[eventName]) this.listeners[eventName] = [];
        this.listeners[eventName].push(callback);
    }
    unSubscribeCallbackFromEvent(eventName, callback) {
        if (!this.listeners[eventName]) throw new Error("This event does not exist");
        this.listeners[eventName] = this.listeners[eventName].filter((listener)=>listener !== callback);
    }
    notify(event, ...args) {
        if (!this.listeners[event]) throw new Event(`Нет события: ${event}`);
        this.listeners[event].forEach((listener)=>{
            listener(...args);
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9RnyM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Events", ()=>Events);
let Events;
(function(Events) {
    Events["INIT"] = "init";
    Events["COMPONENT_DID_MOUNT"] = "ComponentDidMount";
    Events["COMPONENT_RENDER"] = "ComponentRender";
    Events["COMPONENT_DID_UNMOUNT"] = "ComponentDidUnmount";
    Events["COMPONENT_DID_UPDATE"] = "ComponentDidUpdate";
})(Events || (Events = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2bHIi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chatLayoutTemplate", ()=>chatLayoutTemplate);
var _template = require("../../utils/framework/templateEngine/template");
var _chatScss = require("./chat.scss");
const chatLayoutTemplate = new (0, _template.Template)(`
   <div class="chat">
      {{!Sidebar!}}
      {{!Main!}}

   </div>
   
`);

},{"../../utils/framework/templateEngine/template":"cTuAo","./chat.scss":"dLYAE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cTuAo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Template", ()=>Template);
var _regExp = require("../const/regExp");
var _regexpHandler = require("../regexpHandler");
class Template {
    constructor(template){
        this.initialTemplate = template;
        this.modifyTemplate = this.initialTemplate;
    }
    compile(context) {
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
        this.renderSimpleVariables(context);
        const conditionRegexpHandler = (foundedDynamicReg, foundedMatch)=>{
            if (foundedDynamicReg.match((0, _regExp.TEMPLATE_IF_THEN_REGEXP))) this.renderCondition(foundedDynamicReg, foundedMatch);
        };
        (0, _regexpHandler.RegexpHandler).handAllFoundRegexp((0, _regExp.TEMPLATE_DYNAMIC_REGEXP), this.modifyTemplate, conditionRegexpHandler);
        this.replaceAllDynamicRegExp();
        return this.modifyTemplate;
    }
    replaceAllDynamicRegExp() {
        const dynamicRegexpHandler = (foundedDynamicReg, foundedMatch)=>this.modifyTemplate = this.modifyTemplate.replace(foundedMatch, foundedDynamicReg);
        (0, _regexpHandler.RegexpHandler).handAllFoundRegexp((0, _regExp.TEMPLATE_DYNAMIC_REGEXP), this.modifyTemplate, dynamicRegexpHandler, false);
    }
    renderSimpleVariables(context) {
        const simpleVariablesRegexpHandler = (foundedDynamicReg, foundedMatch)=>{
            const property = this.getProperty(context, foundedDynamicReg);
            if (foundedDynamicReg) {
                const propertyElementIsComponent = Array.isArray(property) && property.every((propertyElement)=>{
                    const elementIsString = typeof propertyElement === "string";
                    return elementIsString && propertyElement.trim().startsWith("<div id=component-");
                });
                this.modifyTemplate = this.modifyTemplate.replace(new RegExp(foundedMatch, "gi"), propertyElementIsComponent ? property.join("") : property);
            }
        };
        (0, _regexpHandler.RegexpHandler).handAllFoundRegexp((0, _regExp.TEMPLATE_VARIABLES_REGEXP), this.modifyTemplate, simpleVariablesRegexpHandler);
    }
    renderCondition(foundedDynamicReg, foundedMatch) {
        const foundedConditionArgs = (0, _regExp.TEMPLATE_IF_THEN_REGEXP).exec(foundedDynamicReg);
        const condition = eval(foundedConditionArgs[1]);
        const ifSuccessThen = foundedConditionArgs[2];
        const ifFalseThen = foundedConditionArgs[3];
        if (condition) this.modifyTemplate = this.modifyTemplate.replace(foundedMatch, ifSuccessThen);
        else if (ifFalseThen) this.modifyTemplate = this.modifyTemplate.replace(foundedMatch, "");
    }
}

},{"../const/regExp":"i0OCK","../regexpHandler":"l1Wbo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i0OCK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TEMPLATE_DYNAMIC_REGEXP", ()=>TEMPLATE_DYNAMIC_REGEXP);
parcelHelpers.export(exports, "TEMPLATE_IF_THEN_REGEXP", ()=>TEMPLATE_IF_THEN_REGEXP);
parcelHelpers.export(exports, "TEMPLATE_VARIABLES_REGEXP", ()=>TEMPLATE_VARIABLES_REGEXP);
const TEMPLATE_DYNAMIC_REGEXP = new RegExp(/\{\{([\s\S]*?)\}\}/gi);
const TEMPLATE_IF_THEN_REGEXP = new RegExp(/if\((.*?)\)then{(.*?)}(else{(.*?)})?/gi);
const TEMPLATE_VARIABLES_REGEXP = new RegExp(/!(.*?)!/gi);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l1Wbo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RegexpHandler", ()=>RegexpHandler);
class RegexpHandler {
    static handAllFoundRegexp(regexpWhichNeedToFound, observeString, foundRegexpHandler, splitAndJoin = true) {
        let nextFoundMatchArray = null;
        while(nextFoundMatchArray = regexpWhichNeedToFound.exec(observeString)){
            const foundedDynamicReg = splitAndJoin ? nextFoundMatchArray[1].split(" ").join("") : nextFoundMatchArray[1];
            const foundedMatch = nextFoundMatchArray[0];
            foundRegexpHandler(foundedDynamicReg, foundedMatch);
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dLYAE":[function() {},{}],"2lmrj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Sidebar", ()=>Sidebar);
var _block = require("../../../../../utils/framework/block");
var _sidebarTmpl = require("./sidebar.tmpl");
var _chatItem = require("../components/chatItem");
const chats = [
    {
        imgSrc: "",
        userName: "Oleg",
        lastMsg: " some long text or not long a dnot know u know what i mean",
        lastMsgTime: `${new Date(12414).getHours()}:20`,
        countOfNotification: 2
    },
    {
        imgSrc: "",
        userName: "Oleg",
        lastMsg: " some long text or not long a dnot know u know what i mean",
        lastMsgTime: `${new Date(12414).getHours()}:20`,
        countOfNotification: 2
    },
    {
        imgSrc: "",
        userName: "Oleg",
        lastMsg: " some long text or not long a dnot know u know what i mean some long text or not long a dnot know u know what i meansome long text or not long a dnot know u know what i mean",
        lastMsgTime: `${new Date(12414).getHours()}:20`,
        countOfNotification: 2
    },
    {
        imgSrc: "",
        userName: "Oleg",
        lastMsg: " some long text or not long a dnot know u know what i mean",
        lastMsgTime: `${new Date(12414).getHours()}:20`,
        countOfNotification: 2
    },
    {
        imgSrc: "",
        userName: "Oleg",
        lastMsg: " some long text or not long a dnot know u know what i mean",
        lastMsgTime: `${new Date(12414).getHours()}:20`,
        countOfNotification: 2
    },
    {
        imgSrc: "",
        userName: "Oleg",
        lastMsg: " some long text or not long a dnot know u know what i mean",
        lastMsgTime: `${new Date(12414).getHours()}:20`,
        countOfNotification: 2
    }, 
];
const sidebarState = {
    state: {
        chatItems: chats.map((chatData)=>new (0, _chatItem.ChatItem)({
                state: chatData
            }))
    }
};
class Sidebar extends (0, _block.Block) {
    constructor(props){
        super((0, _sidebarTmpl.sidebarTemplate), props);
    }
}
const SidebarComponent = new Sidebar(sidebarState);
exports.default = SidebarComponent;

},{"../../../../../utils/framework/block":"d3psB","./sidebar.tmpl":"bzBFv","../components/chatItem":"cWG7C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bzBFv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sidebarTemplate", ()=>sidebarTemplate);
var _template = require("../../../../../utils/framework/templateEngine/template");
var _sidebarScss = require("./sidebar.scss");
const sidebarTemplate = new (0, _template.Template)(`
<div class="sidebar">
        <div class="chat_chats">
            {{!chatItems!}}
        </div>
    <input type="text" class="sidebar_search">
</div>
`);

},{"../../../../../utils/framework/templateEngine/template":"cTuAo","./sidebar.scss":"2Kjlx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Kjlx":[function() {},{}],"cWG7C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatItem", ()=>(0, _chatItem.ChatItem));
var _chatItem = require("./ChatItem");

},{"./ChatItem":"lDF3W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lDF3W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatItem", ()=>ChatItem);
var _block = require("../../../../../../utils/framework/block");
var _chatItemTmpl = require("./chatItem.tmpl");
class ChatItem extends (0, _block.Block) {
    constructor(props){
        super((0, _chatItemTmpl.chatItemTemplate), props);
    }
}

},{"../../../../../../utils/framework/block":"d3psB","./chatItem.tmpl":"d5b58","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5b58":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chatItemTemplate", ()=>chatItemTemplate);
var _template = require("../../../../../../utils/framework/templateEngine/template");
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

},{"../../../../../../utils/framework/templateEngine/template":"cTuAo","./chatItem.scss":"hKoS2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hKoS2":[function() {},{}],"kupMq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MainComponent", ()=>(0, _main.MainComponent));
var _main = require("./Main");

},{"./Main":"88RJM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"88RJM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MainComponent", ()=>MainComponent);
var _block = require("../../../../../utils/framework/block");
var _mainTmpl = require("./main.tmpl");
var _header = require("./header");
var _messages = require("./messages");
var _controlPanel = require("./controlPanel/ControlPanel");
const mainProps = {
    state: {
        Header: (0, _header.HeaderComponent),
        Messages: (0, _messages.MessagesComponent),
        ControlPanel: (0, _controlPanel.ControlPanelComponent)
    }
};
class Main extends (0, _block.Block) {
    constructor(props){
        super((0, _mainTmpl.mainTemplate), props);
    }
}
const MainComponent = new Main(mainProps);

},{"../../../../../utils/framework/block":"d3psB","./main.tmpl":"aqJap","./header":"lmx9n","./messages":"1ABhw","./controlPanel/ControlPanel":"hwa2S","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aqJap":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mainTemplate", ()=>mainTemplate);
var _template = require("../../../../../utils/framework/templateEngine/template");
var _mainScss = require("./main.scss");
const mainTemplate = new (0, _template.Template)(`
       <div class="main">
        {{ !Header! }}
        {{ !Messages! }}
        {{ !ControlPanel! }}
        </div>
`);

},{"../../../../../utils/framework/templateEngine/template":"cTuAo","./main.scss":"2vpGj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2vpGj":[function() {},{}],"lmx9n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HeaderComponent", ()=>(0, _header.HeaderComponent));
var _header = require("./Header");

},{"./Header":"b9PYV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b9PYV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HeaderComponent", ()=>HeaderComponent);
var _block = require("../../../../../../utils/framework/block");
var _headerTmpl = require("./header.tmpl");
class Header extends (0, _block.Block) {
    constructor(props){
        super((0, _headerTmpl.headerTemplate), props);
    }
}
const HeaderComponent = new Header({
    state: {
        userName: "Oleg"
    }
});

},{"../../../../../../utils/framework/block":"d3psB","./header.tmpl":"iQJ6l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQJ6l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "headerTemplate", ()=>headerTemplate);
var _template = require("../../../../../../utils/framework/templateEngine/template");
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

},{"../../../../../../utils/framework/templateEngine/template":"cTuAo","./header.scss":"bld9X","../../../../../../components/icons/optionIcon":"48gqX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bld9X":[function() {},{}],"48gqX":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ABhw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessagesComponent", ()=>(0, _messages.MessagesComponent));
var _messages = require("./Messages");

},{"./Messages":"kRLDM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kRLDM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessagesComponent", ()=>MessagesComponent);
var _block = require("../../../../../../utils/framework/block");
var _messagesTmpl = require("./messages.tmpl");
var _message = require("../../components/message");
const messagesData = [
    {
        user: '"user"',
        messageText: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро."
    },
    {
        user: '"home"',
        messageText: "Hello!"
    },
    {
        user: '"some"',
        messageText: "Hello!"
    }, 
];
const MessagesProps = {
    state: {
        messages: messagesData.map((messageData)=>new (0, _message.Message)({
                state: messageData
            }))
    },
    text: "hello"
};
class Messages extends (0, _block.Block) {
    constructor(props){
        super((0, _messagesTmpl.messagesTemplate), props);
    }
}
const MessagesComponent = new Messages(MessagesProps);

},{"../../../../../../utils/framework/block":"d3psB","./messages.tmpl":"cJPVP","../../components/message":"4wmto","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cJPVP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "messagesTemplate", ()=>messagesTemplate);
var _template = require("../../../../../../utils/framework/templateEngine/template");
var _messagesScss = require("./messages.scss");
const messagesTemplate = new (0, _template.Template)(`
    <div class="messages"> 
        {{ !messages! }}
    </div>
`);

},{"../../../../../../utils/framework/templateEngine/template":"cTuAo","./messages.scss":"bzvb9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bzvb9":[function() {},{}],"4wmto":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Message", ()=>(0, _message.Message));
var _message = require("./Message");

},{"./Message":"lm0sF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lm0sF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Message", ()=>Message);
var _block = require("../../../../../../utils/framework/block");
var _messageTmpl = require("./message.tmpl");
class Message extends (0, _block.Block) {
    constructor(props){
        super((0, _messageTmpl.messageTemplate), props);
    }
}

},{"../../../../../../utils/framework/block":"d3psB","./message.tmpl":"3Xa27","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Xa27":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "messageTemplate", ()=>messageTemplate);
var _template = require("../../../../../../utils/framework/templateEngine/template");
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

},{"../../../../../../utils/framework/templateEngine/template":"cTuAo","./message.scss":"8Q8ni","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Q8ni":[function() {},{}],"hwa2S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ControlPanel", ()=>ControlPanel);
parcelHelpers.export(exports, "ControlPanelComponent", ()=>ControlPanelComponent);
var _block = require("../../../../../../utils/framework/block");
var _controlPanelTmpl = require("./controlPanel.tmpl");
class ControlPanel extends (0, _block.Block) {
    constructor(props){
        super((0, _controlPanelTmpl.controlPanelTemplate), props);
    }
}
const ControlPanelComponent = new ControlPanel({
    state: {}
});

},{"../../../../../../utils/framework/block":"d3psB","./controlPanel.tmpl":"apFDe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"apFDe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "controlPanelTemplate", ()=>controlPanelTemplate);
var _template = require("../../../../../../utils/framework/templateEngine/template");
var _controlPanelScss = require("./controlPanel.scss");
const controlPanelTemplate = new (0, _template.Template)(`
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

},{"../../../../../../utils/framework/templateEngine/template":"cTuAo","./controlPanel.scss":"97p7s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"97p7s":[function() {},{}]},["iJYvl","h7u1C"], "h7u1C", "parcelRequire94c2")

//# sourceMappingURL=index.b71e74eb.js.map
