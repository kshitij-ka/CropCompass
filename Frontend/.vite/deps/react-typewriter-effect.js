import {
  require_checkPropTypes,
  require_object_assign
} from "./chunk-UU7TO5PY.js";
import {
  __commonJS
} from "./chunk-EWTE5DHJ.js";

// node_modules/react-typewriter-effect/node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react-typewriter-effect/node_modules/react/cjs/react.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var _assign = require_object_assign();
        var checkPropTypes = require_checkPropTypes();
        var ReactVersion = "16.14.0";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          suspense: null
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
        function describeComponentFrame(name, source, ownerName) {
          var sourceInfo = "";
          if (source) {
            var path = source.fileName;
            var fileName = path.replace(BEFORE_SLASH_RE, "");
            {
              if (/^index\./.test(fileName)) {
                var match = path.match(BEFORE_SLASH_RE);
                if (match) {
                  var pathBeforeSlash = match[1];
                  if (pathBeforeSlash) {
                    var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, "");
                    fileName = folderName + "/" + fileName;
                  }
                }
              }
            }
            sourceInfo = " (at " + fileName + ":" + source.lineNumber + ")";
          } else if (ownerName) {
            sourceInfo = " (created by " + ownerName + ")";
          }
          return "\n    in " + (name || "Unknown") + sourceInfo;
        }
        var Resolved = 1;
        function refineResolvedLazyComponent(lazyComponent) {
          return lazyComponent._status === Resolved ? lazyComponent._result : null;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var functionName = innerType.displayName || innerType.name || "";
          return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
        }
        function getComponentName(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                return "Context.Consumer";
              case REACT_PROVIDER_TYPE:
                return "Context.Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                return getComponentName(type.type);
              case REACT_BLOCK_TYPE:
                return getComponentName(type.render);
              case REACT_LAZY_TYPE: {
                var thenable = type;
                var resolvedThenable = refineResolvedLazyComponent(thenable);
                if (resolvedThenable) {
                  return getComponentName(resolvedThenable);
                }
                break;
              }
            }
          }
          return null;
        }
        var ReactDebugCurrentFrame = {};
        var currentlyValidatingElement = null;
        function setCurrentlyValidatingElement(element) {
          {
            currentlyValidatingElement = element;
          }
        }
        {
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentlyValidatingElement) {
              var name = getComponentName(currentlyValidatingElement.type);
              var owner = currentlyValidatingElement._owner;
              stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var IsSomeRendererActing = {
          current: false
        };
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner,
          IsSomeRendererActing,
          // Used by renderers to avoid bundling object-assign twice in UMD bundles:
          assign: _assign
        };
        {
          _assign(ReactSharedInternals, {
            // These should not be included in production.
            ReactDebugCurrentFrame,
            // Shim for React DOM 16.0.0 which still destructured (but not used) this.
            // TODO: remove in React 17.0.
            ReactComponentTreeHook: {}
          });
        }
        function warn(format) {
          {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            printWarning("warn", format, args);
          }
        }
        function error(format) {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
        function printWarning(level, format, args) {
          {
            var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === "string" && args[args.length - 1].indexOf("\n    in") === 0;
            if (!hasExistingStack) {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
            }
            var argsWithFormat = args.map(function(item) {
              return "" + item;
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
            try {
              var argIndex = 0;
              var message = "Warning: " + format.replace(/%s/g, function() {
                return args[argIndex++];
              });
              throw new Error(message);
            } catch (x) {
            }
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (!(typeof partialState === "object" || typeof partialState === "function" || partialState == null)) {
            {
              throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        _assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentName(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              key = "" + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (!!(element === null || element === void 0)) {
            {
              throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
          }
          var propName;
          var props = _assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = ("" + key).replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return ("" + text).replace(userProvidedKeyEscapeRegex, "$&/");
        }
        var POOL_SIZE = 10;
        var traverseContextPool = [];
        function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
          if (traverseContextPool.length) {
            var traverseContext = traverseContextPool.pop();
            traverseContext.result = mapResult;
            traverseContext.keyPrefix = keyPrefix;
            traverseContext.func = mapFunction;
            traverseContext.context = mapContext;
            traverseContext.count = 0;
            return traverseContext;
          } else {
            return {
              result: mapResult,
              keyPrefix,
              func: mapFunction,
              context: mapContext,
              count: 0
            };
          }
        }
        function releaseTraverseContext(traverseContext) {
          traverseContext.result = null;
          traverseContext.keyPrefix = null;
          traverseContext.func = null;
          traverseContext.context = null;
          traverseContext.count = 0;
          if (traverseContextPool.length < POOL_SIZE) {
            traverseContextPool.push(traverseContext);
          }
        }
        function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            callback(
              traverseContext,
              children,
              // If it's the only child, treat the name as if it was wrapped in an array
              // so that it's consistent if the number of children grows.
              nameSoFar === "" ? SEPARATOR + getComponentKey(children, 0) : nameSoFar
            );
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getComponentKey(child, i);
              subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              {
                if (iteratorFn === children.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is deprecated and will be removed in a future major release. Consider converting children to an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(children);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getComponentKey(child, ii++);
                subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
              }
            } else if (type === "object") {
              var addendum = "";
              {
                addendum = " If you meant to render a collection of children, use an array instead." + ReactDebugCurrentFrame.getStackAddendum();
              }
              var childrenString = "" + children;
              {
                {
                  throw Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + ")." + addendum);
                }
              }
            }
          }
          return subtreeCount;
        }
        function traverseAllChildren(children, callback, traverseContext) {
          if (children == null) {
            return 0;
          }
          return traverseAllChildrenImpl(children, "", callback, traverseContext);
        }
        function getComponentKey(component, index) {
          if (typeof component === "object" && component !== null && component.key != null) {
            return escape(component.key);
          }
          return index.toString(36);
        }
        function forEachSingleChild(bookKeeping, child, name) {
          var func = bookKeeping.func, context = bookKeeping.context;
          func.call(context, child, bookKeeping.count++);
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          if (children == null) {
            return children;
          }
          var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
          traverseAllChildren(children, forEachSingleChild, traverseContext);
          releaseTraverseContext(traverseContext);
        }
        function mapSingleChildIntoContext(bookKeeping, child, childKey) {
          var result = bookKeeping.result, keyPrefix = bookKeeping.keyPrefix, func = bookKeeping.func, context = bookKeeping.context;
          var mappedChild = func.call(context, child, bookKeeping.count++);
          if (Array.isArray(mappedChild)) {
            mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function(c) {
              return c;
            });
          } else if (mappedChild != null) {
            if (isValidElement(mappedChild)) {
              mappedChild = cloneAndReplaceKey(
                mappedChild,
                // Keep both the (mapped) and old keys if they differ, just as
                // traverseAllChildren used to do for objects as children
                keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + "/" : "") + childKey
              );
            }
            result.push(mappedChild);
          }
        }
        function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
          var escapedPrefix = "";
          if (prefix != null) {
            escapedPrefix = escapeUserProvidedKey(prefix) + "/";
          }
          var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
          traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
          releaseTraverseContext(traverseContext);
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          mapIntoWithKeyPrefixInternal(children, result, null, func, context);
          return result;
        }
        function countChildren(children) {
          return traverseAllChildren(children, function() {
            return null;
          }, null);
        }
        function toArray(children) {
          var result = [];
          mapIntoWithKeyPrefixInternal(children, result, null, function(child) {
            return child;
          });
          return result;
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            {
              throw Error("React.Children.only expected to receive a single React element child.");
            }
          }
          return children;
        }
        function createContext(defaultValue, calculateChangedBits) {
          if (calculateChangedBits === void 0) {
            calculateChangedBits = null;
          } else {
            {
              if (calculateChangedBits !== null && typeof calculateChangedBits !== "function") {
                error("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
              }
            }
          }
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _calculateChangedBits: calculateChangedBits,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context,
              _calculateChangedBits: context._calculateChangedBits
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        function lazy(ctor) {
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _ctor: ctor,
            // React uses these fields to store the result.
            _status: -1,
            _result: null
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          return {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
        }
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          return {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          if (!(dispatcher !== null)) {
            {
              throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context, unstable_observedBits) {
          var dispatcher = resolveDispatcher();
          {
            if (unstable_observedBits !== void 0) {
              error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === "number" && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks" : "");
            }
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context, unstable_observedBits);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentName(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
          }
          setCurrentlyValidatingElement(element);
          {
            error('Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
          }
          setCurrentlyValidatingElement(null);
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (Array.isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var name = getComponentName(type);
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              setCurrentlyValidatingElement(element);
              checkPropTypes(propTypes, element.props, "prop", name, ReactDebugCurrentFrame.getStackAddendum);
              setCurrentlyValidatingElement(null);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            setCurrentlyValidatingElement(fragment);
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                break;
              }
            }
            if (fragment.ref !== null) {
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
            }
            setCurrentlyValidatingElement(null);
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (Array.isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        {
          try {
            var frozenObject = Object.freeze({});
            var testMap = /* @__PURE__ */ new Map([[frozenObject, null]]);
            var testSet = /* @__PURE__ */ new Set([frozenObject]);
            testMap.set(0, 0);
            testSet.add(0);
          } catch (e) {
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useEffect = useEffect;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.version = ReactVersion;
      })();
    }
  }
});

// node_modules/react-typewriter-effect/node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react-typewriter-effect/node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// node_modules/react-typewriter-effect/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-typewriter-effect/dist/index.js"(exports, module) {
    module.exports = function(t) {
      var e = {};
      function r(n) {
        if (e[n]) return e[n].exports;
        var o = e[n] = { i: n, l: false, exports: {} };
        return t[n].call(o.exports, o, o.exports, r), o.l = true, o.exports;
      }
      return r.m = t, r.c = e, r.d = function(t2, e2, n) {
        r.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: n });
      }, r.r = function(t2) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
      }, r.t = function(t2, e2) {
        if (1 & e2 && (t2 = r(t2)), 8 & e2) return t2;
        if (4 & e2 && "object" == typeof t2 && t2 && t2.__esModule) return t2;
        var n = /* @__PURE__ */ Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", { enumerable: true, value: t2 }), 2 & e2 && "string" != typeof t2) for (var o in t2) r.d(n, o, (function(e3) {
          return t2[e3];
        }).bind(null, o));
        return n;
      }, r.n = function(t2) {
        var e2 = t2 && t2.__esModule ? function() {
          return t2.default;
        } : function() {
          return t2;
        };
        return r.d(e2, "a", e2), e2;
      }, r.o = function(t2, e2) {
        return Object.prototype.hasOwnProperty.call(t2, e2);
      }, r.p = "", r(r.s = 17);
    }([function(t, e) {
      function r(t2) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
          return typeof t3;
        } : function(t3) {
          return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
        })(t2);
      }
      function n(e2) {
        return "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? t.exports = n = function(t2) {
          return r(t2);
        } : t.exports = n = function(t2) {
          return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : r(t2);
        }, n(e2);
      }
      t.exports = n;
    }, function(t, e, r) {
      t.exports = r(11);
    }, function(t, e) {
      t.exports = function(t2) {
        if (void 0 === t2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t2;
      };
    }, function(t, e) {
      t.exports = function(t2, e2, r) {
        return e2 in t2 ? Object.defineProperty(t2, e2, { value: r, enumerable: true, configurable: true, writable: true }) : t2[e2] = r, t2;
      };
    }, function(t, e) {
      t.exports = require_react();
    }, function(t, e) {
      t.exports = function(t2, e2) {
        if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
      };
    }, function(t, e) {
      function r(t2, e2) {
        for (var r2 = 0; r2 < e2.length; r2++) {
          var n = e2[r2];
          n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(t2, n.key, n);
        }
      }
      t.exports = function(t2, e2, n) {
        return e2 && r(t2.prototype, e2), n && r(t2, n), t2;
      };
    }, function(t, e) {
      function r(t2, e2, r2, n, o, i, a) {
        try {
          var c = t2[i](a), s = c.value;
        } catch (t3) {
          return void r2(t3);
        }
        c.done ? e2(s) : Promise.resolve(s).then(n, o);
      }
      t.exports = function(t2) {
        return function() {
          var e2 = this, n = arguments;
          return new Promise(function(o, i) {
            var a = t2.apply(e2, n);
            function c(t3) {
              r(a, o, i, c, s, "next", t3);
            }
            function s(t3) {
              r(a, o, i, c, s, "throw", t3);
            }
            c(void 0);
          });
        };
      };
    }, function(t, e, r) {
      var n = r(0), o = r(2);
      t.exports = function(t2, e2) {
        return !e2 || "object" !== n(e2) && "function" != typeof e2 ? o(t2) : e2;
      };
    }, function(t, e) {
      function r(e2) {
        return t.exports = r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t2) {
          return t2.__proto__ || Object.getPrototypeOf(t2);
        }, r(e2);
      }
      t.exports = r;
    }, function(t, e, r) {
      var n = r(12);
      t.exports = function(t2, e2) {
        if ("function" != typeof e2 && null !== e2) throw new TypeError("Super expression must either be null or a function");
        t2.prototype = Object.create(e2 && e2.prototype, { constructor: { value: t2, writable: true, configurable: true } }), e2 && n(t2, e2);
      };
    }, function(t, e, r) {
      var n = function(t2) {
        "use strict";
        var e2, r2 = Object.prototype, n2 = r2.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag";
        function s(t3, e3, r3, n3) {
          var o2 = e3 && e3.prototype instanceof d ? e3 : d, i2 = Object.create(o2.prototype), a2 = new T(n3 || []);
          return i2._invoke = /* @__PURE__ */ function(t4, e4, r4) {
            var n4 = l;
            return function(o3, i3) {
              if (n4 === f) throw new Error("Generator is already running");
              if (n4 === h) {
                if ("throw" === o3) throw i3;
                return P();
              }
              for (r4.method = o3, r4.arg = i3; ; ) {
                var a3 = r4.delegate;
                if (a3) {
                  var c2 = E(a3, r4);
                  if (c2) {
                    if (c2 === y) continue;
                    return c2;
                  }
                }
                if ("next" === r4.method) r4.sent = r4._sent = r4.arg;
                else if ("throw" === r4.method) {
                  if (n4 === l) throw n4 = h, r4.arg;
                  r4.dispatchException(r4.arg);
                } else "return" === r4.method && r4.abrupt("return", r4.arg);
                n4 = f;
                var s2 = u(t4, e4, r4);
                if ("normal" === s2.type) {
                  if (n4 = r4.done ? h : p, s2.arg === y) continue;
                  return { value: s2.arg, done: r4.done };
                }
                "throw" === s2.type && (n4 = h, r4.method = "throw", r4.arg = s2.arg);
              }
            };
          }(t3, r3, a2), i2;
        }
        function u(t3, e3, r3) {
          try {
            return { type: "normal", arg: t3.call(e3, r3) };
          } catch (t4) {
            return { type: "throw", arg: t4 };
          }
        }
        t2.wrap = s;
        var l = "suspendedStart", p = "suspendedYield", f = "executing", h = "completed", y = {};
        function d() {
        }
        function m() {
        }
        function v() {
        }
        var b = {};
        b[i] = function() {
          return this;
        };
        var g = Object.getPrototypeOf, x = g && g(g(L([])));
        x && x !== r2 && n2.call(x, i) && (b = x);
        var w = v.prototype = d.prototype = Object.create(b);
        function S(t3) {
          ["next", "throw", "return"].forEach(function(e3) {
            t3[e3] = function(t4) {
              return this._invoke(e3, t4);
            };
          });
        }
        function O(t3) {
          var e3;
          this._invoke = function(r3, o2) {
            function i2() {
              return new Promise(function(e4, i3) {
                !function e5(r4, o3, i4, a2) {
                  var c2 = u(t3[r4], t3, o3);
                  if ("throw" !== c2.type) {
                    var s2 = c2.arg, l2 = s2.value;
                    return l2 && "object" == typeof l2 && n2.call(l2, "__await") ? Promise.resolve(l2.__await).then(function(t4) {
                      e5("next", t4, i4, a2);
                    }, function(t4) {
                      e5("throw", t4, i4, a2);
                    }) : Promise.resolve(l2).then(function(t4) {
                      s2.value = t4, i4(s2);
                    }, function(t4) {
                      return e5("throw", t4, i4, a2);
                    });
                  }
                  a2(c2.arg);
                }(r3, o2, e4, i3);
              });
            }
            return e3 = e3 ? e3.then(i2, i2) : i2();
          };
        }
        function E(t3, r3) {
          var n3 = t3.iterator[r3.method];
          if (n3 === e2) {
            if (r3.delegate = null, "throw" === r3.method) {
              if (t3.iterator.return && (r3.method = "return", r3.arg = e2, E(t3, r3), "throw" === r3.method)) return y;
              r3.method = "throw", r3.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return y;
          }
          var o2 = u(n3, t3.iterator, r3.arg);
          if ("throw" === o2.type) return r3.method = "throw", r3.arg = o2.arg, r3.delegate = null, y;
          var i2 = o2.arg;
          return i2 ? i2.done ? (r3[t3.resultName] = i2.value, r3.next = t3.nextLoc, "return" !== r3.method && (r3.method = "next", r3.arg = e2), r3.delegate = null, y) : i2 : (r3.method = "throw", r3.arg = new TypeError("iterator result is not an object"), r3.delegate = null, y);
        }
        function j(t3) {
          var e3 = { tryLoc: t3[0] };
          1 in t3 && (e3.catchLoc = t3[1]), 2 in t3 && (e3.finallyLoc = t3[2], e3.afterLoc = t3[3]), this.tryEntries.push(e3);
        }
        function k(t3) {
          var e3 = t3.completion || {};
          e3.type = "normal", delete e3.arg, t3.completion = e3;
        }
        function T(t3) {
          this.tryEntries = [{ tryLoc: "root" }], t3.forEach(j, this), this.reset(true);
        }
        function L(t3) {
          if (t3) {
            var r3 = t3[i];
            if (r3) return r3.call(t3);
            if ("function" == typeof t3.next) return t3;
            if (!isNaN(t3.length)) {
              var o2 = -1, a2 = function r4() {
                for (; ++o2 < t3.length; ) if (n2.call(t3, o2)) return r4.value = t3[o2], r4.done = false, r4;
                return r4.value = e2, r4.done = true, r4;
              };
              return a2.next = a2;
            }
          }
          return { next: P };
        }
        function P() {
          return { value: e2, done: true };
        }
        return m.prototype = w.constructor = v, v.constructor = m, v[c] = m.displayName = "GeneratorFunction", t2.isGeneratorFunction = function(t3) {
          var e3 = "function" == typeof t3 && t3.constructor;
          return !!e3 && (e3 === m || "GeneratorFunction" === (e3.displayName || e3.name));
        }, t2.mark = function(t3) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t3, v) : (t3.__proto__ = v, c in t3 || (t3[c] = "GeneratorFunction")), t3.prototype = Object.create(w), t3;
        }, t2.awrap = function(t3) {
          return { __await: t3 };
        }, S(O.prototype), O.prototype[a] = function() {
          return this;
        }, t2.AsyncIterator = O, t2.async = function(e3, r3, n3, o2) {
          var i2 = new O(s(e3, r3, n3, o2));
          return t2.isGeneratorFunction(r3) ? i2 : i2.next().then(function(t3) {
            return t3.done ? t3.value : i2.next();
          });
        }, S(w), w[c] = "Generator", w[i] = function() {
          return this;
        }, w.toString = function() {
          return "[object Generator]";
        }, t2.keys = function(t3) {
          var e3 = [];
          for (var r3 in t3) e3.push(r3);
          return e3.reverse(), function r4() {
            for (; e3.length; ) {
              var n3 = e3.pop();
              if (n3 in t3) return r4.value = n3, r4.done = false, r4;
            }
            return r4.done = true, r4;
          };
        }, t2.values = L, T.prototype = { constructor: T, reset: function(t3) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = e2, this.done = false, this.delegate = null, this.method = "next", this.arg = e2, this.tryEntries.forEach(k), !t3) for (var r3 in this) "t" === r3.charAt(0) && n2.call(this, r3) && !isNaN(+r3.slice(1)) && (this[r3] = e2);
        }, stop: function() {
          this.done = true;
          var t3 = this.tryEntries[0].completion;
          if ("throw" === t3.type) throw t3.arg;
          return this.rval;
        }, dispatchException: function(t3) {
          if (this.done) throw t3;
          var r3 = this;
          function o2(n3, o3) {
            return c2.type = "throw", c2.arg = t3, r3.next = n3, o3 && (r3.method = "next", r3.arg = e2), !!o3;
          }
          for (var i2 = this.tryEntries.length - 1; i2 >= 0; --i2) {
            var a2 = this.tryEntries[i2], c2 = a2.completion;
            if ("root" === a2.tryLoc) return o2("end");
            if (a2.tryLoc <= this.prev) {
              var s2 = n2.call(a2, "catchLoc"), u2 = n2.call(a2, "finallyLoc");
              if (s2 && u2) {
                if (this.prev < a2.catchLoc) return o2(a2.catchLoc, true);
                if (this.prev < a2.finallyLoc) return o2(a2.finallyLoc);
              } else if (s2) {
                if (this.prev < a2.catchLoc) return o2(a2.catchLoc, true);
              } else {
                if (!u2) throw new Error("try statement without catch or finally");
                if (this.prev < a2.finallyLoc) return o2(a2.finallyLoc);
              }
            }
          }
        }, abrupt: function(t3, e3) {
          for (var r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
            var o2 = this.tryEntries[r3];
            if (o2.tryLoc <= this.prev && n2.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
              var i2 = o2;
              break;
            }
          }
          i2 && ("break" === t3 || "continue" === t3) && i2.tryLoc <= e3 && e3 <= i2.finallyLoc && (i2 = null);
          var a2 = i2 ? i2.completion : {};
          return a2.type = t3, a2.arg = e3, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
        }, complete: function(t3, e3) {
          if ("throw" === t3.type) throw t3.arg;
          return "break" === t3.type || "continue" === t3.type ? this.next = t3.arg : "return" === t3.type ? (this.rval = this.arg = t3.arg, this.method = "return", this.next = "end") : "normal" === t3.type && e3 && (this.next = e3), y;
        }, finish: function(t3) {
          for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
            var r3 = this.tryEntries[e3];
            if (r3.finallyLoc === t3) return this.complete(r3.completion, r3.afterLoc), k(r3), y;
          }
        }, catch: function(t3) {
          for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
            var r3 = this.tryEntries[e3];
            if (r3.tryLoc === t3) {
              var n3 = r3.completion;
              if ("throw" === n3.type) {
                var o2 = n3.arg;
                k(r3);
              }
              return o2;
            }
          }
          throw new Error("illegal catch attempt");
        }, delegateYield: function(t3, r3, n3) {
          return this.delegate = { iterator: L(t3), resultName: r3, nextLoc: n3 }, "next" === this.method && (this.arg = e2), y;
        } }, t2;
      }(t.exports);
      try {
        regeneratorRuntime = n;
      } catch (t2) {
        Function("r", "regeneratorRuntime = r")(n);
      }
    }, function(t, e) {
      function r(e2, n) {
        return t.exports = r = Object.setPrototypeOf || function(t2, e3) {
          return t2.__proto__ = e3, t2;
        }, r(e2, n);
      }
      t.exports = r;
    }, function(t, e, r) {
      var n = r(14);
      "string" == typeof n && (n = [[t.i, n, ""]]);
      var o = { insert: "head", singleton: false };
      r(16)(n, o);
      n.locals && (t.exports = n.locals);
    }, function(t, e, r) {
      (t.exports = r(15)(false)).push([t.i, ".react-typewriter-text {\n  padding: 0;\n  margin: 0;\n  text-align: left;\n}\n\n.react-typewriter-pointer {\n  background-color: black;\n  display: inline;\n  padding: 0 1px;\n}\n\n.add-cursor-animate {\n    animation: blink 1s step-end infinite;\n}\n\n@keyframes blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}\n\n.hide-typing-cursor {\n    padding: 0;\n}", ""]);
    }, function(t, e, r) {
      "use strict";
      t.exports = function(t2) {
        var e2 = [];
        return e2.toString = function() {
          return this.map(function(e3) {
            var r2 = function(t3, e4) {
              var r3 = t3[1] || "", n = t3[3];
              if (!n) return r3;
              if (e4 && "function" == typeof btoa) {
                var o = (a = n, c = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c), "/*# ".concat(s, " */")), i = n.sources.map(function(t4) {
                  return "/*# sourceURL=".concat(n.sourceRoot).concat(t4, " */");
                });
                return [r3].concat(i).concat([o]).join("\n");
              }
              var a, c, s;
              return [r3].join("\n");
            }(e3, t2);
            return e3[2] ? "@media ".concat(e3[2], "{").concat(r2, "}") : r2;
          }).join("");
        }, e2.i = function(t3, r2) {
          "string" == typeof t3 && (t3 = [[null, t3, ""]]);
          for (var n = {}, o = 0; o < this.length; o++) {
            var i = this[o][0];
            null != i && (n[i] = true);
          }
          for (var a = 0; a < t3.length; a++) {
            var c = t3[a];
            null != c[0] && n[c[0]] || (r2 && !c[2] ? c[2] = r2 : r2 && (c[2] = "(".concat(c[2], ") and (").concat(r2, ")")), e2.push(c));
          }
        }, e2;
      };
    }, function(t, e, r) {
      "use strict";
      var n, o = {}, i = function() {
        return void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), n;
      }, a = /* @__PURE__ */ function() {
        var t2 = {};
        return function(e2) {
          if (void 0 === t2[e2]) {
            var r2 = document.querySelector(e2);
            if (window.HTMLIFrameElement && r2 instanceof window.HTMLIFrameElement) try {
              r2 = r2.contentDocument.head;
            } catch (t3) {
              r2 = null;
            }
            t2[e2] = r2;
          }
          return t2[e2];
        };
      }();
      function c(t2, e2) {
        for (var r2 = [], n2 = {}, o2 = 0; o2 < t2.length; o2++) {
          var i2 = t2[o2], a2 = e2.base ? i2[0] + e2.base : i2[0], c2 = { css: i2[1], media: i2[2], sourceMap: i2[3] };
          n2[a2] ? n2[a2].parts.push(c2) : r2.push(n2[a2] = { id: a2, parts: [c2] });
        }
        return r2;
      }
      function s(t2, e2) {
        for (var r2 = 0; r2 < t2.length; r2++) {
          var n2 = t2[r2], i2 = o[n2.id], a2 = 0;
          if (i2) {
            for (i2.refs++; a2 < i2.parts.length; a2++) i2.parts[a2](n2.parts[a2]);
            for (; a2 < n2.parts.length; a2++) i2.parts.push(m(n2.parts[a2], e2));
          } else {
            for (var c2 = []; a2 < n2.parts.length; a2++) c2.push(m(n2.parts[a2], e2));
            o[n2.id] = { id: n2.id, refs: 1, parts: c2 };
          }
        }
      }
      function u(t2) {
        var e2 = document.createElement("style");
        if (void 0 === t2.attributes.nonce) {
          var n2 = r.nc;
          n2 && (t2.attributes.nonce = n2);
        }
        if (Object.keys(t2.attributes).forEach(function(r2) {
          e2.setAttribute(r2, t2.attributes[r2]);
        }), "function" == typeof t2.insert) t2.insert(e2);
        else {
          var o2 = a(t2.insert || "head");
          if (!o2) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          o2.appendChild(e2);
        }
        return e2;
      }
      var l, p = (l = [], function(t2, e2) {
        return l[t2] = e2, l.filter(Boolean).join("\n");
      });
      function f(t2, e2, r2, n2) {
        var o2 = r2 ? "" : n2.css;
        if (t2.styleSheet) t2.styleSheet.cssText = p(e2, o2);
        else {
          var i2 = document.createTextNode(o2), a2 = t2.childNodes;
          a2[e2] && t2.removeChild(a2[e2]), a2.length ? t2.insertBefore(i2, a2[e2]) : t2.appendChild(i2);
        }
      }
      function h(t2, e2, r2) {
        var n2 = r2.css, o2 = r2.media, i2 = r2.sourceMap;
        if (o2 && t2.setAttribute("media", o2), i2 && btoa && (n2 += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i2)))), " */")), t2.styleSheet) t2.styleSheet.cssText = n2;
        else {
          for (; t2.firstChild; ) t2.removeChild(t2.firstChild);
          t2.appendChild(document.createTextNode(n2));
        }
      }
      var y = null, d = 0;
      function m(t2, e2) {
        var r2, n2, o2;
        if (e2.singleton) {
          var i2 = d++;
          r2 = y || (y = u(e2)), n2 = f.bind(null, r2, i2, false), o2 = f.bind(null, r2, i2, true);
        } else r2 = u(e2), n2 = h.bind(null, r2, e2), o2 = function() {
          !function(t3) {
            if (null === t3.parentNode) return false;
            t3.parentNode.removeChild(t3);
          }(r2);
        };
        return n2(t2), function(e3) {
          if (e3) {
            if (e3.css === t2.css && e3.media === t2.media && e3.sourceMap === t2.sourceMap) return;
            n2(t2 = e3);
          } else o2();
        };
      }
      t.exports = function(t2, e2) {
        (e2 = e2 || {}).attributes = "object" == typeof e2.attributes ? e2.attributes : {}, e2.singleton || "boolean" == typeof e2.singleton || (e2.singleton = i());
        var r2 = c(t2, e2);
        return s(r2, e2), function(t3) {
          for (var n2 = [], i2 = 0; i2 < r2.length; i2++) {
            var a2 = r2[i2], u2 = o[a2.id];
            u2 && (u2.refs--, n2.push(u2));
          }
          t3 && s(c(t3, e2), e2);
          for (var l2 = 0; l2 < n2.length; l2++) {
            var p2 = n2[l2];
            if (0 === p2.refs) {
              for (var f2 = 0; f2 < p2.parts.length; f2++) p2.parts[f2]();
              delete o[p2.id];
            }
          }
        };
      };
    }, function(t, e, r) {
      "use strict";
      r.r(e);
      var n = r(0), o = r.n(n), i = r(1), a = r.n(i), c = r(7), s = r.n(c), u = r(5), l = r.n(u), p = r(6), f = r.n(p), h = r(8), y = r.n(h), d = r(9), m = r.n(d), v = r(2), b = r.n(v), g = r(10), x = r.n(g), w = r(3), S = r.n(w), O = r(4), E = r.n(O), j = function() {
        function t2(e2) {
          l()(this, t2), this.time = e2, this.timeout = null, this.close = null;
        }
        return f()(t2, [{ key: "getPromise", value: function() {
          var t3 = this;
          return new Promise(function(e2, r2) {
            t3.close = r2, t3.timeout = setTimeout(function() {
              e2();
            }, t3.time);
          });
        } }, { key: "cancel", value: function() {
          return this.timeout && clearTimeout(this.timeout), this.close && this.close("unmounted"), { isCanceled: true };
        } }]), t2;
      }(), k = { multiTextDelay: function(t2, e2) {
        return t2[e2] && "number" != typeof t2[e2] ? new Error("Invalid ".concat(e2, " supplied to react-type-writer-component component.")) : !t2.multiText && t2[e2] ? new Error("Invalid!. multiText props must be provided to use ".concat(e2, " .")) : void 0;
      }, typeSpeed: function(t2, e2) {
        if (t2[e2] && "number" != typeof t2[e2]) return new Error("Invalid ".concat(e2, " supplied to react-typeWriter component."));
      }, startDelay: function(t2, e2) {
        if (t2[e2] && "number" != typeof t2[e2]) return new Error("Invalid ".concat(e2, " supplied to react-typeWriter component."));
      }, text: function(t2, e2) {
        if (!t2.multiText && "string" != typeof t2[e2]) return new Error("Invalid ".concat(e2, " supplied to react-typeWriter component!"));
      }, cursorColor: function(t2, e2) {
        if (t2[e2] && "string" != typeof t2[e2]) return new Error("Invalid ".concat(e2, " supplied to react-typeWriter component!"));
      }, textStyle: function(t2, e2) {
        if (t2[e2] && "object" != o()(t2[e2])) return new Error("Invalid ".concat(e2, " supplied to react-typeWriter component!"));
      }, multiText: function(t2, e2) {
        if (t2[e2] && "object" == o()(t2[e2])) {
          for (var r2 = 0; r2 < t2[e2].length; r2++) if ("string" != typeof t2[e2][r2]) return new Error("Invalid element: ".concat(t2[e2][r2], " for ").concat(e2, " supplied to react-typeWriter component!"));
        } else if (t2[e2] && "object" !== o()(t2[e2])) return new Error("Invalid ".concat(e2, " supplied to react-typeWriter component!"));
      }, scrollArea: function(t2, e2) {
        if (t2[e2] && "object" != o()(t2[e2])) return new Error("Invalid ".concat(e2, " supplied to typewriter component!"));
      }, multiTextLoop: function(t2, e2) {
        if (t2[e2] && "boolean" != typeof t2[e2]) return new Error("Invalid ".concat(e2, " supplied to react-typeWriter component."));
      } }, T = function(t2) {
        var e2 = window.scrollY || window.pageYOffset, r2 = t2.getBoundingClientRect(), n2 = r2.top + e2, o2 = e2, i2 = e2 + window.innerHeight, a2 = n2, c2 = n2 + r2.height;
        return c2 >= o2 && c2 <= i2 || a2 <= i2 && a2 >= o2;
      };
      r(13);
      function L(t2, e2) {
        var r2 = Object.keys(t2);
        if (Object.getOwnPropertySymbols) {
          var n2 = Object.getOwnPropertySymbols(t2);
          e2 && (n2 = n2.filter(function(e3) {
            return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
          })), r2.push.apply(r2, n2);
        }
        return r2;
      }
      function P(t2) {
        for (var e2 = 1; e2 < arguments.length; e2++) {
          var r2 = null != arguments[e2] ? arguments[e2] : {};
          e2 % 2 ? L(r2, true).forEach(function(e3) {
            S()(t2, e3, r2[e3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(r2)) : L(r2).forEach(function(e3) {
            Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(r2, e3));
          });
        }
        return t2;
      }
      var D = function(t2) {
        function e2() {
          var t3, r2;
          l()(this, e2);
          for (var n2 = arguments.length, o2 = new Array(n2), i2 = 0; i2 < n2; i2++) o2[i2] = arguments[i2];
          return r2 = y()(this, (t3 = m()(e2)).call.apply(t3, [this].concat(o2))), S()(b()(r2), "state", { text: "", blink: false, hideCursor: true, animate: false, typeSpeedDelay: null, multiTextDelay: null, eraseSpeedDelay: null, startDelay: null, scrollAreaIsSet: null, multiTextLoop: false }), S()(b()(r2), "myRef", Object(O.createRef)()), S()(b()(r2), "multiTextDisplay", function() {
            var t4 = s()(a.a.mark(function t5(e3) {
              var n3;
              return a.a.wrap(function(t6) {
                for (; ; ) switch (t6.prev = t6.next) {
                  case 0:
                    n3 = 0;
                  case 1:
                    if (!(n3 < e3.length)) {
                      t6.next = 7;
                      break;
                    }
                    return t6.next = 4, r2.runAnimation(e3[n3], e3.length - n3 - 1);
                  case 4:
                    n3++, t6.next = 1;
                    break;
                  case 7:
                    if (!r2.props.multiTextLoop) {
                      t6.next = 11;
                      break;
                    }
                    return t6.next = 10, r2.eraseText(e3[e3.length - 1]);
                  case 10:
                    r2.multiTextDisplay(e3);
                  case 11:
                  case "end":
                    return t6.stop();
                }
              }, t5);
            }));
            return function(e3) {
              return t4.apply(this, arguments);
            };
          }()), S()(b()(r2), "runAnimation", function() {
            var t4 = s()(a.a.mark(function t5(e3, n3) {
              var o3, i3, c2, s2, u2;
              return a.a.wrap(function(t6) {
                for (; ; ) switch (t6.prev = t6.next) {
                  case 0:
                    if (!(o3 = "string" == typeof e3 && e3.trim().split(""))) {
                      t6.next = 25;
                      break;
                    }
                    r2.setState({ blink: false }), i3 = "", c2 = new j(r2.props.typeSpeed || 120), s2 = r2.props.multiText && new j(r2.props.multiTextDelay || 2e3), r2.setState({ typeSpeedDelay: c2, multiTextDelay: s2 }), u2 = 0;
                  case 8:
                    if (!(u2 < o3.length)) {
                      t6.next = 16;
                      break;
                    }
                    return t6.next = 11, c2.getPromise();
                  case 11:
                    i3 += o3[u2], r2.setState({ text: i3 });
                  case 13:
                    u2++, t6.next = 8;
                    break;
                  case 16:
                    if (r2.setState({ blink: true }), t6.t0 = r2.props.multiText, !t6.t0) {
                      t6.next = 21;
                      break;
                    }
                    return t6.next = 21, s2.getPromise();
                  case 21:
                    if (t6.t1 = n3 > 0, !t6.t1) {
                      t6.next = 25;
                      break;
                    }
                    return t6.next = 25, r2.eraseText(i3);
                  case 25:
                  case "end":
                    return t6.stop();
                }
              }, t5);
            }));
            return function(e3, r3) {
              return t4.apply(this, arguments);
            };
          }()), S()(b()(r2), "eraseText", function() {
            var t4 = s()(a.a.mark(function t5(e3) {
              var n3, o3, i3, c2;
              return a.a.wrap(function(t6) {
                for (; ; ) switch (t6.prev = t6.next) {
                  case 0:
                    n3 = "string" == typeof e3 && e3.trim().split(""), r2.setState({ blink: false }), o3 = e3.trim(), i3 = new j(50), r2.setState({ eraseSpeedDelay: i3 }), c2 = 0;
                  case 6:
                    if (!(c2 < n3.length)) {
                      t6.next = 14;
                      break;
                    }
                    return t6.next = 9, i3.getPromise();
                  case 9:
                    o3 = o3.slice(0, -1), r2.setState({ text: o3 });
                  case 11:
                    c2++, t6.next = 6;
                    break;
                  case 14:
                    r2.setState({ blink: true });
                  case 15:
                  case "end":
                    return t6.stop();
                }
              }, t5);
            }));
            return function(e3) {
              return t4.apply(this, arguments);
            };
          }()), S()(b()(r2), "animateOnScroll", s()(a.a.mark(function t4() {
            var e3;
            return a.a.wrap(function(t5) {
              for (; ; ) switch (t5.prev = t5.next) {
                case 0:
                  if (t5.prev = 0, r2.state.animate || !T(r2.myRef.current)) {
                    t5.next = 17;
                    break;
                  }
                  if (r2.setState({ animate: true }), e3 = r2.props.startDelay && new j(r2.props.startDelay), r2.setState({ hideCursor: false, startDelay: e3 }), t5.t0 = r2.props.startDelay, !t5.t0) {
                    t5.next = 9;
                    break;
                  }
                  return t5.next = 9, e3.getPromise();
                case 9:
                  if (!r2.props.multiText) {
                    t5.next = 14;
                    break;
                  }
                  return t5.next = 12, r2.multiTextDisplay(r2.props.multiText);
                case 12:
                  t5.next = 16;
                  break;
                case 14:
                  return t5.next = 16, r2.runAnimation(r2.props.text);
                case 16:
                  r2.props.hideCursorAfterText && r2.setState({ hideCursor: true });
                case 17:
                  t5.next = 21;
                  break;
                case 19:
                  t5.prev = 19, t5.t1 = t5.catch(0);
                case 21:
                case "end":
                  return t5.stop();
              }
            }, t4, null, [[0, 19]]);
          }))), r2;
        }
        return x()(e2, t2), f()(e2, [{ key: "componentDidMount", value: function() {
          this.animateOnScroll(), this.setState({ scrollAreaIsSet: false });
        } }, { key: "componentDidUpdate", value: function() {
          this.state.scrollAreaIsSet || (this.setState({ scrollAreaIsSet: true }), this.props.scrollArea && "object" == o()(this.props.scrollArea) ? this.props.scrollArea.addEventListener("scroll", this.animateOnScroll) : document.addEventListener("scroll", this.animateOnScroll));
        } }, { key: "componentWillUnmount", value: function() {
          this.props.scrollArea && "object" == o()(this.props.scrollArea) ? this.props.scrollArea.removeEventListener("scroll", this.animateOnScroll) : document.removeEventListener("scroll", this.animateOnScroll), this.state.startDelay && this.state.startDelay.cancel(), this.state.eraseSpeedDelay && this.state.eraseSpeedDelay.cancel(), this.state.typeSpeedDelay && this.state.typeSpeedDelay.cancel(), this.state.multiTextDelay && this.state.multiTextDelay.cancel();
        } }, { key: "render", value: function() {
          return E.a.createElement("div", { ref: this.myRef, className: "react-typewriter-text-wrap" }, E.a.createElement("h1", { style: P({}, this.props.textStyle), className: "react-typewriter-text" }, this.state.text, E.a.createElement("div", { className: "react-typewriter-pointer ".concat(this.state.blink && "add-cursor-animate", " ").concat(this.state.hideCursor ? "hide-typing-cursor" : ""), style: { backgroundColor: "".concat(this.props.cursorColor) } })));
        } }]), e2;
      }(O.Component);
      D.propTypes = k;
      e.default = D;
    }]);
  }
});
export default require_dist();
/*! Bundled license information:

react/cjs/react.development.js:
  (** @license React v16.14.0
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=react-typewriter-effect.js.map
