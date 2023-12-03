function Jc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function ys(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var gs = { exports: {} },
  cl = {},
  ws = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tr = Symbol.for("react.element"),
  Xc = Symbol.for("react.portal"),
  Zc = Symbol.for("react.fragment"),
  qc = Symbol.for("react.strict_mode"),
  bc = Symbol.for("react.profiler"),
  ef = Symbol.for("react.provider"),
  tf = Symbol.for("react.context"),
  nf = Symbol.for("react.forward_ref"),
  rf = Symbol.for("react.suspense"),
  lf = Symbol.for("react.memo"),
  of = Symbol.for("react.lazy"),
  nu = Symbol.iterator;
function uf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (nu && e[nu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var xs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ss = Object.assign,
  ks = {};
function fn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ks),
    (this.updater = n || xs);
}
fn.prototype.isReactComponent = {};
fn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
fn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Es() {}
Es.prototype = fn.prototype;
function ni(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ks),
    (this.updater = n || xs);
}
var ri = (ni.prototype = new Es());
ri.constructor = ni;
Ss(ri, fn.prototype);
ri.isPureReactComponent = !0;
var ru = Array.isArray,
  Ns = Object.prototype.hasOwnProperty,
  li = { current: null },
  Cs = { key: !0, ref: !0, __self: !0, __source: !0 };
function _s(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ns.call(t, r) && !Cs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: tr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: li.current,
  };
}
function sf(e, t) {
  return {
    $$typeof: tr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function oi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === tr;
}
function af(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var lu = /\/+/g;
function Ol(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? af("" + e.key)
    : t.toString(36);
}
function _r(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case tr:
          case Xc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Ol(i, 0) : r),
      ru(l)
        ? ((n = ""),
          e != null && (n = e.replace(lu, "$&/") + "/"),
          _r(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (oi(l) &&
            (l = sf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(lu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), ru(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Ol(o, u);
      i += _r(o, t, n, s, l);
    }
  else if (((s = uf(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Ol(o, u++)), (i += _r(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function ar(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    _r(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function cf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  jr = { transition: null },
  ff = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: jr,
    ReactCurrentOwner: li,
  };
T.Children = {
  map: ar,
  forEach: function (e, t, n) {
    ar(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ar(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ar(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!oi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = fn;
T.Fragment = Zc;
T.Profiler = bc;
T.PureComponent = ni;
T.StrictMode = qc;
T.Suspense = rf;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ff;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ss({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = li.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Ns.call(t, s) &&
        !Cs.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: tr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: tf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ef, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = _s;
T.createFactory = function (e) {
  var t = _s.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: nf, render: e };
};
T.isValidElement = oi;
T.lazy = function (e) {
  return { $$typeof: of, _payload: { _status: -1, _result: e }, _init: cf };
};
T.memo = function (e, t) {
  return { $$typeof: lf, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = jr.transition;
  jr.transition = {};
  try {
    e();
  } finally {
    jr.transition = t;
  }
};
T.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
T.useCallback = function (e, t) {
  return ae.current.useCallback(e, t);
};
T.useContext = function (e) {
  return ae.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return ae.current.useEffect(e, t);
};
T.useId = function () {
  return ae.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return ae.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return ae.current.useRef(e);
};
T.useState = function (e) {
  return ae.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return ae.current.useTransition();
};
T.version = "18.2.0";
ws.exports = T;
var C = ws.exports;
const ii = ys(C),
  df = Jc({ __proto__: null, default: ii }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pf = C,
  hf = Symbol.for("react.element"),
  mf = Symbol.for("react.fragment"),
  vf = Object.prototype.hasOwnProperty,
  yf = pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  gf = { key: !0, ref: !0, __self: !0, __source: !0 };
function js(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) vf.call(t, r) && !gf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: hf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: yf.current,
  };
}
cl.Fragment = mf;
cl.jsx = js;
cl.jsxs = js;
gs.exports = cl;
var p = gs.exports,
  Ps = { exports: {} },
  xe = {},
  Rs = { exports: {} },
  zs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, z) {
    var L = N.length;
    N.push(z);
    e: for (; 0 < L; ) {
      var Q = (L - 1) >>> 1,
        Z = N[Q];
      if (0 < l(Z, z)) (N[Q] = z), (N[L] = Z), (L = Q);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var z = N[0],
      L = N.pop();
    if (L !== z) {
      N[0] = L;
      e: for (var Q = 0, Z = N.length, ur = Z >>> 1; Q < ur; ) {
        var wt = 2 * (Q + 1) - 1,
          Tl = N[wt],
          xt = wt + 1,
          sr = N[xt];
        if (0 > l(Tl, L))
          xt < Z && 0 > l(sr, Tl)
            ? ((N[Q] = sr), (N[xt] = L), (Q = xt))
            : ((N[Q] = Tl), (N[wt] = L), (Q = wt));
        else if (xt < Z && 0 > l(sr, L)) (N[Q] = sr), (N[xt] = L), (Q = xt);
        else break e;
      }
    }
    return z;
  }
  function l(N, z) {
    var L = N.sortIndex - z.sortIndex;
    return L !== 0 ? L : N.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    h = 1,
    v = null,
    m = 3,
    g = !1,
    S = !1,
    w = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(N) {
    for (var z = n(a); z !== null; ) {
      if (z.callback === null) r(a);
      else if (z.startTime <= N)
        r(a), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(a);
    }
  }
  function y(N) {
    if (((w = !1), d(N), !S))
      if (n(s) !== null) (S = !0), zl(k);
      else {
        var z = n(a);
        z !== null && Ll(y, z.startTime - N);
      }
  }
  function k(N, z) {
    (S = !1), w && ((w = !1), f(P), (P = -1)), (g = !0);
    var L = m;
    try {
      for (
        d(z), v = n(s);
        v !== null && (!(v.expirationTime > z) || (N && !Pe()));

      ) {
        var Q = v.callback;
        if (typeof Q == "function") {
          (v.callback = null), (m = v.priorityLevel);
          var Z = Q(v.expirationTime <= z);
          (z = e.unstable_now()),
            typeof Z == "function" ? (v.callback = Z) : v === n(s) && r(s),
            d(z);
        } else r(s);
        v = n(s);
      }
      if (v !== null) var ur = !0;
      else {
        var wt = n(a);
        wt !== null && Ll(y, wt.startTime - z), (ur = !1);
      }
      return ur;
    } finally {
      (v = null), (m = L), (g = !1);
    }
  }
  var _ = !1,
    j = null,
    P = -1,
    H = 5,
    O = -1;
  function Pe() {
    return !(e.unstable_now() - O < H);
  }
  function hn() {
    if (j !== null) {
      var N = e.unstable_now();
      O = N;
      var z = !0;
      try {
        z = j(!0, N);
      } finally {
        z ? mn() : ((_ = !1), (j = null));
      }
    } else _ = !1;
  }
  var mn;
  if (typeof c == "function")
    mn = function () {
      c(hn);
    };
  else if (typeof MessageChannel < "u") {
    var tu = new MessageChannel(),
      Gc = tu.port2;
    (tu.port1.onmessage = hn),
      (mn = function () {
        Gc.postMessage(null);
      });
  } else
    mn = function () {
      R(hn, 0);
    };
  function zl(N) {
    (j = N), _ || ((_ = !0), mn());
  }
  function Ll(N, z) {
    P = R(function () {
      N(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || g || ((S = !0), zl(k));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = m;
      }
      var L = m;
      m = z;
      try {
        return N();
      } finally {
        m = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, z) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var L = m;
      m = N;
      try {
        return z();
      } finally {
        m = L;
      }
    }),
    (e.unstable_scheduleCallback = function (N, z, L) {
      var Q = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? Q + L : Q))
          : (L = Q),
        N)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = L + Z),
        (N = {
          id: h++,
          callback: z,
          priorityLevel: N,
          startTime: L,
          expirationTime: Z,
          sortIndex: -1,
        }),
        L > Q
          ? ((N.sortIndex = L),
            t(a, N),
            n(s) === null &&
              N === n(a) &&
              (w ? (f(P), (P = -1)) : (w = !0), Ll(y, L - Q)))
          : ((N.sortIndex = Z), t(s, N), S || g || ((S = !0), zl(k))),
        N
      );
    }),
    (e.unstable_shouldYield = Pe),
    (e.unstable_wrapCallback = function (N) {
      var z = m;
      return function () {
        var L = m;
        m = z;
        try {
          return N.apply(this, arguments);
        } finally {
          m = L;
        }
      };
    });
})(zs);
Rs.exports = zs;
var wf = Rs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ls = C,
  we = wf;
function x(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ts = new Set(),
  Un = {};
function It(e, t) {
  rn(e, t), rn(e + "Capture", t);
}
function rn(e, t) {
  for (Un[e] = t, e = 0; e < t.length; e++) Ts.add(t[e]);
}
var Ye = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  io = Object.prototype.hasOwnProperty,
  xf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ou = {},
  iu = {};
function Sf(e) {
  return io.call(iu, e)
    ? !0
    : io.call(ou, e)
    ? !1
    : xf.test(e)
    ? (iu[e] = !0)
    : ((ou[e] = !0), !1);
}
function kf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ef(e, t, n, r) {
  if (t === null || typeof t > "u" || kf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ui = /[\-:]([a-z])/g;
function si(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ui, si);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ui, si);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ui, si);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ai(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ef(t, n, l, r) && (n = null),
    r || l === null
      ? Sf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = Ls.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  cr = Symbol.for("react.element"),
  $t = Symbol.for("react.portal"),
  At = Symbol.for("react.fragment"),
  ci = Symbol.for("react.strict_mode"),
  uo = Symbol.for("react.profiler"),
  Os = Symbol.for("react.provider"),
  Is = Symbol.for("react.context"),
  fi = Symbol.for("react.forward_ref"),
  so = Symbol.for("react.suspense"),
  ao = Symbol.for("react.suspense_list"),
  di = Symbol.for("react.memo"),
  be = Symbol.for("react.lazy"),
  Ms = Symbol.for("react.offscreen"),
  uu = Symbol.iterator;
function vn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (uu && e[uu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var V = Object.assign,
  Il;
function Nn(e) {
  if (Il === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Il = (t && t[1]) || "";
    }
  return (
    `
` +
    Il +
    e
  );
}
var Ml = !1;
function Dl(e, t) {
  if (!e || Ml) return "";
  Ml = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Ml = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Nn(e) : "";
}
function Nf(e) {
  switch (e.tag) {
    case 5:
      return Nn(e.type);
    case 16:
      return Nn("Lazy");
    case 13:
      return Nn("Suspense");
    case 19:
      return Nn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Dl(e.type, !1)), e;
    case 11:
      return (e = Dl(e.type.render, !1)), e;
    case 1:
      return (e = Dl(e.type, !0)), e;
    default:
      return "";
  }
}
function co(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case At:
      return "Fragment";
    case $t:
      return "Portal";
    case uo:
      return "Profiler";
    case ci:
      return "StrictMode";
    case so:
      return "Suspense";
    case ao:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Is:
        return (e.displayName || "Context") + ".Consumer";
      case Os:
        return (e._context.displayName || "Context") + ".Provider";
      case fi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case di:
        return (
          (t = e.displayName || null), t !== null ? t : co(e.type) || "Memo"
        );
      case be:
        (t = e._payload), (e = e._init);
        try {
          return co(e(t));
        } catch {}
    }
  return null;
}
function Cf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return co(t);
    case 8:
      return t === ci ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ht(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ds(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function _f(e) {
  var t = Ds(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function fr(e) {
  e._valueTracker || (e._valueTracker = _f(e));
}
function Us(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ds(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Fr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fo(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function su(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ht(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Fs(e, t) {
  (t = t.checked), t != null && ai(e, "checked", t, !1);
}
function po(e, t) {
  Fs(e, t);
  var n = ht(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ho(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ho(e, t.type, ht(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function au(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ho(e, t, n) {
  (t !== "number" || Fr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Cn = Array.isArray;
function Zt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ht(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function mo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function cu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (Cn(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ht(n) };
}
function $s(e, t) {
  var n = ht(t.value),
    r = ht(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function fu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function As(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function vo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? As(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var dr,
  Bs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        dr = dr || document.createElement("div"),
          dr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = dr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Fn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Pn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  jf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pn).forEach(function (e) {
  jf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Pn[t] = Pn[e]);
  });
});
function Vs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Pn.hasOwnProperty(e) && Pn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ws(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Vs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Pf = V(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function yo(e, t) {
  if (t) {
    if (Pf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function go(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var wo = null;
function pi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var xo = null,
  qt = null,
  bt = null;
function du(e) {
  if ((e = lr(e))) {
    if (typeof xo != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = ml(t)), xo(e.stateNode, e.type, t));
  }
}
function Hs(e) {
  qt ? (bt ? bt.push(e) : (bt = [e])) : (qt = e);
}
function Qs() {
  if (qt) {
    var e = qt,
      t = bt;
    if (((bt = qt = null), du(e), t)) for (e = 0; e < t.length; e++) du(t[e]);
  }
}
function Ks(e, t) {
  return e(t);
}
function Ys() {}
var Ul = !1;
function Gs(e, t, n) {
  if (Ul) return e(t, n);
  Ul = !0;
  try {
    return Ks(e, t, n);
  } finally {
    (Ul = !1), (qt !== null || bt !== null) && (Ys(), Qs());
  }
}
function $n(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ml(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var So = !1;
if (Ye)
  try {
    var yn = {};
    Object.defineProperty(yn, "passive", {
      get: function () {
        So = !0;
      },
    }),
      window.addEventListener("test", yn, yn),
      window.removeEventListener("test", yn, yn);
  } catch {
    So = !1;
  }
function Rf(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var Rn = !1,
  $r = null,
  Ar = !1,
  ko = null,
  zf = {
    onError: function (e) {
      (Rn = !0), ($r = e);
    },
  };
function Lf(e, t, n, r, l, o, i, u, s) {
  (Rn = !1), ($r = null), Rf.apply(zf, arguments);
}
function Tf(e, t, n, r, l, o, i, u, s) {
  if ((Lf.apply(this, arguments), Rn)) {
    if (Rn) {
      var a = $r;
      (Rn = !1), ($r = null);
    } else throw Error(x(198));
    Ar || ((Ar = !0), (ko = a));
  }
}
function Mt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Js(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function pu(e) {
  if (Mt(e) !== e) throw Error(x(188));
}
function Of(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Mt(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return pu(l), e;
        if (o === r) return pu(l), t;
        o = o.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function Xs(e) {
  return (e = Of(e)), e !== null ? Zs(e) : null;
}
function Zs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Zs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var qs = we.unstable_scheduleCallback,
  hu = we.unstable_cancelCallback,
  If = we.unstable_shouldYield,
  Mf = we.unstable_requestPaint,
  K = we.unstable_now,
  Df = we.unstable_getCurrentPriorityLevel,
  hi = we.unstable_ImmediatePriority,
  bs = we.unstable_UserBlockingPriority,
  Br = we.unstable_NormalPriority,
  Uf = we.unstable_LowPriority,
  ea = we.unstable_IdlePriority,
  fl = null,
  Ae = null;
function Ff(e) {
  if (Ae && typeof Ae.onCommitFiberRoot == "function")
    try {
      Ae.onCommitFiberRoot(fl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : Bf,
  $f = Math.log,
  Af = Math.LN2;
function Bf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - (($f(e) / Af) | 0)) | 0;
}
var pr = 64,
  hr = 4194304;
function _n(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Vr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = _n(u)) : ((o &= i), o !== 0 && (r = _n(o)));
  } else (i = n & ~l), i !== 0 ? (r = _n(i)) : o !== 0 && (r = _n(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ie(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Vf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Wf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Ie(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = Vf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Eo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ta() {
  var e = pr;
  return (pr <<= 1), !(pr & 4194240) && (pr = 64), e;
}
function Fl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function nr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ie(t)),
    (e[t] = n);
}
function Hf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ie(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function mi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var M = 0;
function na(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ra,
  vi,
  la,
  oa,
  ia,
  No = !1,
  mr = [],
  it = null,
  ut = null,
  st = null,
  An = new Map(),
  Bn = new Map(),
  tt = [],
  Qf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function mu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      it = null;
      break;
    case "dragenter":
    case "dragleave":
      ut = null;
      break;
    case "mouseover":
    case "mouseout":
      st = null;
      break;
    case "pointerover":
    case "pointerout":
      An.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Bn.delete(t.pointerId);
  }
}
function gn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = lr(t)), t !== null && vi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Kf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (it = gn(it, e, t, n, r, l)), !0;
    case "dragenter":
      return (ut = gn(ut, e, t, n, r, l)), !0;
    case "mouseover":
      return (st = gn(st, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return An.set(o, gn(An.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Bn.set(o, gn(Bn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ua(e) {
  var t = Et(e.target);
  if (t !== null) {
    var n = Mt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Js(n)), t !== null)) {
          (e.blockedOn = t),
            ia(e.priority, function () {
              la(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Pr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Co(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (wo = r), n.target.dispatchEvent(r), (wo = null);
    } else return (t = lr(n)), t !== null && vi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function vu(e, t, n) {
  Pr(e) && n.delete(t);
}
function Yf() {
  (No = !1),
    it !== null && Pr(it) && (it = null),
    ut !== null && Pr(ut) && (ut = null),
    st !== null && Pr(st) && (st = null),
    An.forEach(vu),
    Bn.forEach(vu);
}
function wn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    No ||
      ((No = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, Yf)));
}
function Vn(e) {
  function t(l) {
    return wn(l, e);
  }
  if (0 < mr.length) {
    wn(mr[0], e);
    for (var n = 1; n < mr.length; n++) {
      var r = mr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    it !== null && wn(it, e),
      ut !== null && wn(ut, e),
      st !== null && wn(st, e),
      An.forEach(t),
      Bn.forEach(t),
      n = 0;
    n < tt.length;
    n++
  )
    (r = tt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && ((n = tt[0]), n.blockedOn === null); )
    ua(n), n.blockedOn === null && tt.shift();
}
var en = Ze.ReactCurrentBatchConfig,
  Wr = !0;
function Gf(e, t, n, r) {
  var l = M,
    o = en.transition;
  en.transition = null;
  try {
    (M = 1), yi(e, t, n, r);
  } finally {
    (M = l), (en.transition = o);
  }
}
function Jf(e, t, n, r) {
  var l = M,
    o = en.transition;
  en.transition = null;
  try {
    (M = 4), yi(e, t, n, r);
  } finally {
    (M = l), (en.transition = o);
  }
}
function yi(e, t, n, r) {
  if (Wr) {
    var l = Co(e, t, n, r);
    if (l === null) Gl(e, t, r, Hr, n), mu(e, r);
    else if (Kf(l, e, t, n, r)) r.stopPropagation();
    else if ((mu(e, r), t & 4 && -1 < Qf.indexOf(e))) {
      for (; l !== null; ) {
        var o = lr(l);
        if (
          (o !== null && ra(o),
          (o = Co(e, t, n, r)),
          o === null && Gl(e, t, r, Hr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Gl(e, t, r, null, n);
  }
}
var Hr = null;
function Co(e, t, n, r) {
  if (((Hr = null), (e = pi(r)), (e = Et(e)), e !== null))
    if (((t = Mt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Js(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Hr = e), null;
}
function sa(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Df()) {
        case hi:
          return 1;
        case bs:
          return 4;
        case Br:
        case Uf:
          return 16;
        case ea:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null,
  gi = null,
  Rr = null;
function aa() {
  if (Rr) return Rr;
  var e,
    t = gi,
    n = t.length,
    r,
    l = "value" in rt ? rt.value : rt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Rr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function zr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function vr() {
  return !0;
}
function yu() {
  return !1;
}
function Se(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? vr
        : yu),
      (this.isPropagationStopped = yu),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = vr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = vr));
      },
      persist: function () {},
      isPersistent: vr,
    }),
    t
  );
}
var dn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  wi = Se(dn),
  rr = V({}, dn, { view: 0, detail: 0 }),
  Xf = Se(rr),
  $l,
  Al,
  xn,
  dl = V({}, rr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: xi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== xn &&
            (xn && e.type === "mousemove"
              ? (($l = e.screenX - xn.screenX), (Al = e.screenY - xn.screenY))
              : (Al = $l = 0),
            (xn = e)),
          $l);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Al;
    },
  }),
  gu = Se(dl),
  Zf = V({}, dl, { dataTransfer: 0 }),
  qf = Se(Zf),
  bf = V({}, rr, { relatedTarget: 0 }),
  Bl = Se(bf),
  ed = V({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  td = Se(ed),
  nd = V({}, dn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  rd = Se(nd),
  ld = V({}, dn, { data: 0 }),
  wu = Se(ld),
  od = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  id = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ud = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function sd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ud[e]) ? !!t[e] : !1;
}
function xi() {
  return sd;
}
var ad = V({}, rr, {
    key: function (e) {
      if (e.key) {
        var t = od[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = zr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? id[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xi,
    charCode: function (e) {
      return e.type === "keypress" ? zr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? zr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  cd = Se(ad),
  fd = V({}, dl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  xu = Se(fd),
  dd = V({}, rr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xi,
  }),
  pd = Se(dd),
  hd = V({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  md = Se(hd),
  vd = V({}, dl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  yd = Se(vd),
  gd = [9, 13, 27, 32],
  Si = Ye && "CompositionEvent" in window,
  zn = null;
Ye && "documentMode" in document && (zn = document.documentMode);
var wd = Ye && "TextEvent" in window && !zn,
  ca = Ye && (!Si || (zn && 8 < zn && 11 >= zn)),
  Su = " ",
  ku = !1;
function fa(e, t) {
  switch (e) {
    case "keyup":
      return gd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function da(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Bt = !1;
function xd(e, t) {
  switch (e) {
    case "compositionend":
      return da(t);
    case "keypress":
      return t.which !== 32 ? null : ((ku = !0), Su);
    case "textInput":
      return (e = t.data), e === Su && ku ? null : e;
    default:
      return null;
  }
}
function Sd(e, t) {
  if (Bt)
    return e === "compositionend" || (!Si && fa(e, t))
      ? ((e = aa()), (Rr = gi = rt = null), (Bt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ca && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var kd = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Eu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!kd[e.type] : t === "textarea";
}
function pa(e, t, n, r) {
  Hs(r),
    (t = Qr(t, "onChange")),
    0 < t.length &&
      ((n = new wi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ln = null,
  Wn = null;
function Ed(e) {
  Na(e, 0);
}
function pl(e) {
  var t = Ht(e);
  if (Us(t)) return e;
}
function Nd(e, t) {
  if (e === "change") return t;
}
var ha = !1;
if (Ye) {
  var Vl;
  if (Ye) {
    var Wl = "oninput" in document;
    if (!Wl) {
      var Nu = document.createElement("div");
      Nu.setAttribute("oninput", "return;"),
        (Wl = typeof Nu.oninput == "function");
    }
    Vl = Wl;
  } else Vl = !1;
  ha = Vl && (!document.documentMode || 9 < document.documentMode);
}
function Cu() {
  Ln && (Ln.detachEvent("onpropertychange", ma), (Wn = Ln = null));
}
function ma(e) {
  if (e.propertyName === "value" && pl(Wn)) {
    var t = [];
    pa(t, Wn, e, pi(e)), Gs(Ed, t);
  }
}
function Cd(e, t, n) {
  e === "focusin"
    ? (Cu(), (Ln = t), (Wn = n), Ln.attachEvent("onpropertychange", ma))
    : e === "focusout" && Cu();
}
function _d(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return pl(Wn);
}
function jd(e, t) {
  if (e === "click") return pl(t);
}
function Pd(e, t) {
  if (e === "input" || e === "change") return pl(t);
}
function Rd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var De = typeof Object.is == "function" ? Object.is : Rd;
function Hn(e, t) {
  if (De(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!io.call(t, l) || !De(e[l], t[l])) return !1;
  }
  return !0;
}
function _u(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ju(e, t) {
  var n = _u(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = _u(n);
  }
}
function va(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? va(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ya() {
  for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Fr(e.document);
  }
  return t;
}
function ki(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function zd(e) {
  var t = ya(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    va(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ki(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = ju(n, o));
        var i = ju(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ld = Ye && "documentMode" in document && 11 >= document.documentMode,
  Vt = null,
  _o = null,
  Tn = null,
  jo = !1;
function Pu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  jo ||
    Vt == null ||
    Vt !== Fr(r) ||
    ((r = Vt),
    "selectionStart" in r && ki(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Tn && Hn(Tn, r)) ||
      ((Tn = r),
      (r = Qr(_o, "onSelect")),
      0 < r.length &&
        ((t = new wi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Vt))));
}
function yr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Wt = {
    animationend: yr("Animation", "AnimationEnd"),
    animationiteration: yr("Animation", "AnimationIteration"),
    animationstart: yr("Animation", "AnimationStart"),
    transitionend: yr("Transition", "TransitionEnd"),
  },
  Hl = {},
  ga = {};
Ye &&
  ((ga = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Wt.animationend.animation,
    delete Wt.animationiteration.animation,
    delete Wt.animationstart.animation),
  "TransitionEvent" in window || delete Wt.transitionend.transition);
function hl(e) {
  if (Hl[e]) return Hl[e];
  if (!Wt[e]) return e;
  var t = Wt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ga) return (Hl[e] = t[n]);
  return e;
}
var wa = hl("animationend"),
  xa = hl("animationiteration"),
  Sa = hl("animationstart"),
  ka = hl("transitionend"),
  Ea = new Map(),
  Ru =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function vt(e, t) {
  Ea.set(e, t), It(t, [e]);
}
for (var Ql = 0; Ql < Ru.length; Ql++) {
  var Kl = Ru[Ql],
    Td = Kl.toLowerCase(),
    Od = Kl[0].toUpperCase() + Kl.slice(1);
  vt(Td, "on" + Od);
}
vt(wa, "onAnimationEnd");
vt(xa, "onAnimationIteration");
vt(Sa, "onAnimationStart");
vt("dblclick", "onDoubleClick");
vt("focusin", "onFocus");
vt("focusout", "onBlur");
vt(ka, "onTransitionEnd");
rn("onMouseEnter", ["mouseout", "mouseover"]);
rn("onMouseLeave", ["mouseout", "mouseover"]);
rn("onPointerEnter", ["pointerout", "pointerover"]);
rn("onPointerLeave", ["pointerout", "pointerover"]);
It(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
It(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
It("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
It(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
It(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
It(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var jn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Id = new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));
function zu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Tf(r, t, void 0, e), (e.currentTarget = null);
}
function Na(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          zu(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          zu(l, u, a), (o = s);
        }
    }
  }
  if (Ar) throw ((e = ko), (Ar = !1), (ko = null), e);
}
function U(e, t) {
  var n = t[To];
  n === void 0 && (n = t[To] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ca(t, e, 2, !1), n.add(r));
}
function Yl(e, t, n) {
  var r = 0;
  t && (r |= 4), Ca(n, e, r, t);
}
var gr = "_reactListening" + Math.random().toString(36).slice(2);
function Qn(e) {
  if (!e[gr]) {
    (e[gr] = !0),
      Ts.forEach(function (n) {
        n !== "selectionchange" && (Id.has(n) || Yl(n, !1, e), Yl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[gr] || ((t[gr] = !0), Yl("selectionchange", !1, t));
  }
}
function Ca(e, t, n, r) {
  switch (sa(t)) {
    case 1:
      var l = Gf;
      break;
    case 4:
      l = Jf;
      break;
    default:
      l = yi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !So ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Gl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Et(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Gs(function () {
    var a = o,
      h = pi(n),
      v = [];
    e: {
      var m = Ea.get(e);
      if (m !== void 0) {
        var g = wi,
          S = e;
        switch (e) {
          case "keypress":
            if (zr(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = cd;
            break;
          case "focusin":
            (S = "focus"), (g = Bl);
            break;
          case "focusout":
            (S = "blur"), (g = Bl);
            break;
          case "beforeblur":
          case "afterblur":
            g = Bl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = gu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = qf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = pd;
            break;
          case wa:
          case xa:
          case Sa:
            g = td;
            break;
          case ka:
            g = md;
            break;
          case "scroll":
            g = Xf;
            break;
          case "wheel":
            g = yd;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = rd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = xu;
        }
        var w = (t & 4) !== 0,
          R = !w && e === "scroll",
          f = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var y = d.stateNode;
          if (
            (d.tag === 5 &&
              y !== null &&
              ((d = y),
              f !== null && ((y = $n(c, f)), y != null && w.push(Kn(c, y, d)))),
            R)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((m = new g(m, S, null, n, h)), v.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          m &&
            n !== wo &&
            (S = n.relatedTarget || n.fromElement) &&
            (Et(S) || S[Ge]))
        )
          break e;
        if (
          (g || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          g
            ? ((S = n.relatedTarget || n.toElement),
              (g = a),
              (S = S ? Et(S) : null),
              S !== null &&
                ((R = Mt(S)), S !== R || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((g = null), (S = a)),
          g !== S)
        ) {
          if (
            ((w = gu),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = xu),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (R = g == null ? m : Ht(g)),
            (d = S == null ? m : Ht(S)),
            (m = new w(y, c + "leave", g, n, h)),
            (m.target = R),
            (m.relatedTarget = d),
            (y = null),
            Et(h) === a &&
              ((w = new w(f, c + "enter", S, n, h)),
              (w.target = d),
              (w.relatedTarget = R),
              (y = w)),
            (R = y),
            g && S)
          )
            t: {
              for (w = g, f = S, c = 0, d = w; d; d = Ft(d)) c++;
              for (d = 0, y = f; y; y = Ft(y)) d++;
              for (; 0 < c - d; ) (w = Ft(w)), c--;
              for (; 0 < d - c; ) (f = Ft(f)), d--;
              for (; c--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = Ft(w)), (f = Ft(f));
              }
              w = null;
            }
          else w = null;
          g !== null && Lu(v, m, g, w, !1),
            S !== null && R !== null && Lu(v, R, S, w, !0);
        }
      }
      e: {
        if (
          ((m = a ? Ht(a) : window),
          (g = m.nodeName && m.nodeName.toLowerCase()),
          g === "select" || (g === "input" && m.type === "file"))
        )
          var k = Nd;
        else if (Eu(m))
          if (ha) k = Pd;
          else {
            k = _d;
            var _ = Cd;
          }
        else
          (g = m.nodeName) &&
            g.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (k = jd);
        if (k && (k = k(e, a))) {
          pa(v, k, n, h);
          break e;
        }
        _ && _(e, m, a),
          e === "focusout" &&
            (_ = m._wrapperState) &&
            _.controlled &&
            m.type === "number" &&
            ho(m, "number", m.value);
      }
      switch (((_ = a ? Ht(a) : window), e)) {
        case "focusin":
          (Eu(_) || _.contentEditable === "true") &&
            ((Vt = _), (_o = a), (Tn = null));
          break;
        case "focusout":
          Tn = _o = Vt = null;
          break;
        case "mousedown":
          jo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (jo = !1), Pu(v, n, h);
          break;
        case "selectionchange":
          if (Ld) break;
        case "keydown":
        case "keyup":
          Pu(v, n, h);
      }
      var j;
      if (Si)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Bt
          ? fa(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (ca &&
          n.locale !== "ko" &&
          (Bt || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Bt && (j = aa())
            : ((rt = h),
              (gi = "value" in rt ? rt.value : rt.textContent),
              (Bt = !0))),
        (_ = Qr(a, P)),
        0 < _.length &&
          ((P = new wu(P, e, null, n, h)),
          v.push({ event: P, listeners: _ }),
          j ? (P.data = j) : ((j = da(n)), j !== null && (P.data = j)))),
        (j = wd ? xd(e, n) : Sd(e, n)) &&
          ((a = Qr(a, "onBeforeInput")),
          0 < a.length &&
            ((h = new wu("onBeforeInput", "beforeinput", null, n, h)),
            v.push({ event: h, listeners: a }),
            (h.data = j)));
    }
    Na(v, t);
  });
}
function Kn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Qr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = $n(e, n)),
      o != null && r.unshift(Kn(e, o, l)),
      (o = $n(e, t)),
      o != null && r.push(Kn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Ft(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Lu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = $n(n, o)), s != null && i.unshift(Kn(n, s, u)))
        : l || ((s = $n(n, o)), s != null && i.push(Kn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Md = /\r\n?/g,
  Dd = /\u0000|\uFFFD/g;
function Tu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Md,
      `
`
    )
    .replace(Dd, "");
}
function wr(e, t, n) {
  if (((t = Tu(t)), Tu(e) !== t && n)) throw Error(x(425));
}
function Kr() {}
var Po = null,
  Ro = null;
function zo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Lo = typeof setTimeout == "function" ? setTimeout : void 0,
  Ud = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ou = typeof Promise == "function" ? Promise : void 0,
  Fd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ou < "u"
      ? function (e) {
          return Ou.resolve(null).then(e).catch($d);
        }
      : Lo;
function $d(e) {
  setTimeout(function () {
    throw e;
  });
}
function Jl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Vn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Vn(t);
}
function at(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Iu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var pn = Math.random().toString(36).slice(2),
  $e = "__reactFiber$" + pn,
  Yn = "__reactProps$" + pn,
  Ge = "__reactContainer$" + pn,
  To = "__reactEvents$" + pn,
  Ad = "__reactListeners$" + pn,
  Bd = "__reactHandles$" + pn;
function Et(e) {
  var t = e[$e];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ge] || n[$e])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Iu(e); e !== null; ) {
          if ((n = e[$e])) return n;
          e = Iu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function lr(e) {
  return (
    (e = e[$e] || e[Ge]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ht(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function ml(e) {
  return e[Yn] || null;
}
var Oo = [],
  Qt = -1;
function yt(e) {
  return { current: e };
}
function F(e) {
  0 > Qt || ((e.current = Oo[Qt]), (Oo[Qt] = null), Qt--);
}
function D(e, t) {
  Qt++, (Oo[Qt] = e.current), (e.current = t);
}
var mt = {},
  ie = yt(mt),
  pe = yt(!1),
  Rt = mt;
function ln(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function Yr() {
  F(pe), F(ie);
}
function Mu(e, t, n) {
  if (ie.current !== mt) throw Error(x(168));
  D(ie, t), D(pe, n);
}
function _a(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(x(108, Cf(e) || "Unknown", l));
  return V({}, n, r);
}
function Gr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mt),
    (Rt = ie.current),
    D(ie, e),
    D(pe, pe.current),
    !0
  );
}
function Du(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = _a(e, t, Rt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(pe),
      F(ie),
      D(ie, e))
    : F(pe),
    D(pe, n);
}
var We = null,
  vl = !1,
  Xl = !1;
function ja(e) {
  We === null ? (We = [e]) : We.push(e);
}
function Vd(e) {
  (vl = !0), ja(e);
}
function gt() {
  if (!Xl && We !== null) {
    Xl = !0;
    var e = 0,
      t = M;
    try {
      var n = We;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (We = null), (vl = !1);
    } catch (l) {
      throw (We !== null && (We = We.slice(e + 1)), qs(hi, gt), l);
    } finally {
      (M = t), (Xl = !1);
    }
  }
  return null;
}
var Kt = [],
  Yt = 0,
  Jr = null,
  Xr = 0,
  ke = [],
  Ee = 0,
  zt = null,
  He = 1,
  Qe = "";
function St(e, t) {
  (Kt[Yt++] = Xr), (Kt[Yt++] = Jr), (Jr = e), (Xr = t);
}
function Pa(e, t, n) {
  (ke[Ee++] = He), (ke[Ee++] = Qe), (ke[Ee++] = zt), (zt = e);
  var r = He;
  e = Qe;
  var l = 32 - Ie(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Ie(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (He = (1 << (32 - Ie(t) + l)) | (n << l) | r),
      (Qe = o + e);
  } else (He = (1 << o) | (n << l) | r), (Qe = e);
}
function Ei(e) {
  e.return !== null && (St(e, 1), Pa(e, 1, 0));
}
function Ni(e) {
  for (; e === Jr; )
    (Jr = Kt[--Yt]), (Kt[Yt] = null), (Xr = Kt[--Yt]), (Kt[Yt] = null);
  for (; e === zt; )
    (zt = ke[--Ee]),
      (ke[Ee] = null),
      (Qe = ke[--Ee]),
      (ke[Ee] = null),
      (He = ke[--Ee]),
      (ke[Ee] = null);
}
var ge = null,
  ye = null,
  $ = !1,
  Oe = null;
function Ra(e, t) {
  var n = Ne(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Uu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ge = e), (ye = at(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ge = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = zt !== null ? { id: He, overflow: Qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ne(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ge = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Io(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Mo(e) {
  if ($) {
    var t = ye;
    if (t) {
      var n = t;
      if (!Uu(e, t)) {
        if (Io(e)) throw Error(x(418));
        t = at(n.nextSibling);
        var r = ge;
        t && Uu(e, t)
          ? Ra(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (ge = e));
      }
    } else {
      if (Io(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (ge = e);
    }
  }
}
function Fu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ge = e;
}
function xr(e) {
  if (e !== ge) return !1;
  if (!$) return Fu(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !zo(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if (Io(e)) throw (za(), Error(x(418)));
    for (; t; ) Ra(e, t), (t = at(t.nextSibling));
  }
  if ((Fu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ye = at(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = ge ? at(e.stateNode.nextSibling) : null;
  return !0;
}
function za() {
  for (var e = ye; e; ) e = at(e.nextSibling);
}
function on() {
  (ye = ge = null), ($ = !1);
}
function Ci(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var Wd = Ze.ReactCurrentBatchConfig;
function Le(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Zr = yt(null),
  qr = null,
  Gt = null,
  _i = null;
function ji() {
  _i = Gt = qr = null;
}
function Pi(e) {
  var t = Zr.current;
  F(Zr), (e._currentValue = t);
}
function Do(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function tn(e, t) {
  (qr = e),
    (_i = Gt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (de = !0), (e.firstContext = null));
}
function _e(e) {
  var t = e._currentValue;
  if (_i !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Gt === null)) {
      if (qr === null) throw Error(x(308));
      (Gt = e), (qr.dependencies = { lanes: 0, firstContext: e });
    } else Gt = Gt.next = e;
  return t;
}
var Nt = null;
function Ri(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
function La(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ri(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Je(e, r)
  );
}
function Je(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var et = !1;
function zi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ta(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ke(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Je(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ri(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Je(e, n)
  );
}
function Lr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mi(e, n);
  }
}
function $u(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function br(e, t, n, r) {
  var l = e.updateQueue;
  et = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = a) : (u.next = a),
        (h.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var v = l.baseState;
    (i = 0), (h = a = s = null), (u = o);
    do {
      var m = u.lane,
        g = u.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var S = e,
            w = u;
          switch (((m = t), (g = n), w.tag)) {
            case 1:
              if (((S = w.payload), typeof S == "function")) {
                v = S.call(g, v, m);
                break e;
              }
              v = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = w.payload),
                (m = typeof S == "function" ? S.call(g, v, m) : S),
                m == null)
              )
                break e;
              v = V({}, v, m);
              break e;
            case 2:
              et = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (g = {
          eventTime: g,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((a = h = g), (s = v)) : (h = h.next = g),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = v),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Tt |= i), (e.lanes = i), (e.memoizedState = v);
  }
}
function Au(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(x(191, l));
        l.call(r);
      }
    }
}
var Oa = new Ls.Component().refs;
function Uo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var yl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = dt(e),
      o = Ke(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ct(e, o, l)),
      t !== null && (Me(t, e, l, r), Lr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = dt(e),
      o = Ke(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ct(e, o, l)),
      t !== null && (Me(t, e, l, r), Lr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = dt(e),
      l = Ke(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ct(e, l, r)),
      t !== null && (Me(t, e, r, n), Lr(t, e, r));
  },
};
function Bu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Hn(n, r) || !Hn(l, o)
      : !0
  );
}
function Ia(e, t, n) {
  var r = !1,
    l = mt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = _e(o))
      : ((l = he(t) ? Rt : ie.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? ln(e, l) : mt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = yl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Vu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && yl.enqueueReplaceState(t, t.state, null);
}
function Fo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Oa), zi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = _e(o))
    : ((o = he(t) ? Rt : ie.current), (l.context = ln(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Uo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && yl.enqueueReplaceState(l, l.state, null),
      br(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Sn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Oa && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function Sr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Wu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ma(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = pt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, y) {
    return c === null || c.tag !== 6
      ? ((c = ro(d, f.mode, y)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function s(f, c, d, y) {
    var k = d.type;
    return k === At
      ? h(f, c, d.props.children, y, d.key)
      : c !== null &&
        (c.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === be &&
            Wu(k) === c.type))
      ? ((y = l(c, d.props)), (y.ref = Sn(f, c, d)), (y.return = f), y)
      : ((y = Ur(d.type, d.key, d.props, null, f.mode, y)),
        (y.ref = Sn(f, c, d)),
        (y.return = f),
        y);
  }
  function a(f, c, d, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = lo(d, f.mode, y)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function h(f, c, d, y, k) {
    return c === null || c.tag !== 7
      ? ((c = jt(d, f.mode, y, k)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function v(f, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = ro("" + c, f.mode, d)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case cr:
          return (
            (d = Ur(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = Sn(f, null, c)),
            (d.return = f),
            d
          );
        case $t:
          return (c = lo(c, f.mode, d)), (c.return = f), c;
        case be:
          var y = c._init;
          return v(f, y(c._payload), d);
      }
      if (Cn(c) || vn(c))
        return (c = jt(c, f.mode, d, null)), (c.return = f), c;
      Sr(f, c);
    }
    return null;
  }
  function m(f, c, d, y) {
    var k = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return k !== null ? null : u(f, c, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case cr:
          return d.key === k ? s(f, c, d, y) : null;
        case $t:
          return d.key === k ? a(f, c, d, y) : null;
        case be:
          return (k = d._init), m(f, c, k(d._payload), y);
      }
      if (Cn(d) || vn(d)) return k !== null ? null : h(f, c, d, y, null);
      Sr(f, d);
    }
    return null;
  }
  function g(f, c, d, y, k) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (f = f.get(d) || null), u(c, f, "" + y, k);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case cr:
          return (f = f.get(y.key === null ? d : y.key) || null), s(c, f, y, k);
        case $t:
          return (f = f.get(y.key === null ? d : y.key) || null), a(c, f, y, k);
        case be:
          var _ = y._init;
          return g(f, c, d, _(y._payload), k);
      }
      if (Cn(y) || vn(y)) return (f = f.get(d) || null), h(c, f, y, k, null);
      Sr(c, y);
    }
    return null;
  }
  function S(f, c, d, y) {
    for (
      var k = null, _ = null, j = c, P = (c = 0), H = null;
      j !== null && P < d.length;
      P++
    ) {
      j.index > P ? ((H = j), (j = null)) : (H = j.sibling);
      var O = m(f, j, d[P], y);
      if (O === null) {
        j === null && (j = H);
        break;
      }
      e && j && O.alternate === null && t(f, j),
        (c = o(O, c, P)),
        _ === null ? (k = O) : (_.sibling = O),
        (_ = O),
        (j = H);
    }
    if (P === d.length) return n(f, j), $ && St(f, P), k;
    if (j === null) {
      for (; P < d.length; P++)
        (j = v(f, d[P], y)),
          j !== null &&
            ((c = o(j, c, P)), _ === null ? (k = j) : (_.sibling = j), (_ = j));
      return $ && St(f, P), k;
    }
    for (j = r(f, j); P < d.length; P++)
      (H = g(j, f, P, d[P], y)),
        H !== null &&
          (e && H.alternate !== null && j.delete(H.key === null ? P : H.key),
          (c = o(H, c, P)),
          _ === null ? (k = H) : (_.sibling = H),
          (_ = H));
    return (
      e &&
        j.forEach(function (Pe) {
          return t(f, Pe);
        }),
      $ && St(f, P),
      k
    );
  }
  function w(f, c, d, y) {
    var k = vn(d);
    if (typeof k != "function") throw Error(x(150));
    if (((d = k.call(d)), d == null)) throw Error(x(151));
    for (
      var _ = (k = null), j = c, P = (c = 0), H = null, O = d.next();
      j !== null && !O.done;
      P++, O = d.next()
    ) {
      j.index > P ? ((H = j), (j = null)) : (H = j.sibling);
      var Pe = m(f, j, O.value, y);
      if (Pe === null) {
        j === null && (j = H);
        break;
      }
      e && j && Pe.alternate === null && t(f, j),
        (c = o(Pe, c, P)),
        _ === null ? (k = Pe) : (_.sibling = Pe),
        (_ = Pe),
        (j = H);
    }
    if (O.done) return n(f, j), $ && St(f, P), k;
    if (j === null) {
      for (; !O.done; P++, O = d.next())
        (O = v(f, O.value, y)),
          O !== null &&
            ((c = o(O, c, P)), _ === null ? (k = O) : (_.sibling = O), (_ = O));
      return $ && St(f, P), k;
    }
    for (j = r(f, j); !O.done; P++, O = d.next())
      (O = g(j, f, P, O.value, y)),
        O !== null &&
          (e && O.alternate !== null && j.delete(O.key === null ? P : O.key),
          (c = o(O, c, P)),
          _ === null ? (k = O) : (_.sibling = O),
          (_ = O));
    return (
      e &&
        j.forEach(function (hn) {
          return t(f, hn);
        }),
      $ && St(f, P),
      k
    );
  }
  function R(f, c, d, y) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === At &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case cr:
          e: {
            for (var k = d.key, _ = c; _ !== null; ) {
              if (_.key === k) {
                if (((k = d.type), k === At)) {
                  if (_.tag === 7) {
                    n(f, _.sibling),
                      (c = l(_, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  _.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === be &&
                    Wu(k) === _.type)
                ) {
                  n(f, _.sibling),
                    (c = l(_, d.props)),
                    (c.ref = Sn(f, _, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            d.type === At
              ? ((c = jt(d.props.children, f.mode, y, d.key)),
                (c.return = f),
                (f = c))
              : ((y = Ur(d.type, d.key, d.props, null, f.mode, y)),
                (y.ref = Sn(f, c, d)),
                (y.return = f),
                (f = y));
          }
          return i(f);
        case $t:
          e: {
            for (_ = d.key; c !== null; ) {
              if (c.key === _)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = lo(d, f.mode, y)), (c.return = f), (f = c);
          }
          return i(f);
        case be:
          return (_ = d._init), R(f, c, _(d._payload), y);
      }
      if (Cn(d)) return S(f, c, d, y);
      if (vn(d)) return w(f, c, d, y);
      Sr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = ro(d, f.mode, y)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return R;
}
var un = Ma(!0),
  Da = Ma(!1),
  or = {},
  Be = yt(or),
  Gn = yt(or),
  Jn = yt(or);
function Ct(e) {
  if (e === or) throw Error(x(174));
  return e;
}
function Li(e, t) {
  switch ((D(Jn, t), D(Gn, e), D(Be, or), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : vo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = vo(t, e));
  }
  F(Be), D(Be, t);
}
function sn() {
  F(Be), F(Gn), F(Jn);
}
function Ua(e) {
  Ct(Jn.current);
  var t = Ct(Be.current),
    n = vo(t, e.type);
  t !== n && (D(Gn, e), D(Be, n));
}
function Ti(e) {
  Gn.current === e && (F(Be), F(Gn));
}
var A = yt(0);
function el(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Zl = [];
function Oi() {
  for (var e = 0; e < Zl.length; e++)
    Zl[e]._workInProgressVersionPrimary = null;
  Zl.length = 0;
}
var Tr = Ze.ReactCurrentDispatcher,
  ql = Ze.ReactCurrentBatchConfig,
  Lt = 0,
  B = null,
  J = null,
  q = null,
  tl = !1,
  On = !1,
  Xn = 0,
  Hd = 0;
function re() {
  throw Error(x(321));
}
function Ii(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!De(e[n], t[n])) return !1;
  return !0;
}
function Mi(e, t, n, r, l, o) {
  if (
    ((Lt = o),
    (B = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Tr.current = e === null || e.memoizedState === null ? Gd : Jd),
    (e = n(r, l)),
    On)
  ) {
    o = 0;
    do {
      if (((On = !1), (Xn = 0), 25 <= o)) throw Error(x(301));
      (o += 1),
        (q = J = null),
        (t.updateQueue = null),
        (Tr.current = Xd),
        (e = n(r, l));
    } while (On);
  }
  if (
    ((Tr.current = nl),
    (t = J !== null && J.next !== null),
    (Lt = 0),
    (q = J = B = null),
    (tl = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function Di() {
  var e = Xn !== 0;
  return (Xn = 0), e;
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (B.memoizedState = q = e) : (q = q.next = e), q;
}
function je() {
  if (J === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = q === null ? B.memoizedState : q.next;
  if (t !== null) (q = t), (J = e);
  else {
    if (e === null) throw Error(x(310));
    (J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      q === null ? (B.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function Zn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bl(e) {
  var t = je(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = J,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var h = a.lane;
      if ((Lt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var v = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = v), (i = r)) : (s = s.next = v),
          (B.lanes |= h),
          (Tt |= h);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      De(r, t.memoizedState) || (de = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (B.lanes |= o), (Tt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function eo(e) {
  var t = je(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    De(o, t.memoizedState) || (de = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Fa() {}
function $a(e, t) {
  var n = B,
    r = je(),
    l = t(),
    o = !De(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (de = !0)),
    (r = r.queue),
    Ui(Va.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      qn(9, Ba.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(x(349));
    Lt & 30 || Aa(n, t, l);
  }
  return l;
}
function Aa(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ba(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Wa(t) && Ha(e);
}
function Va(e, t, n) {
  return n(function () {
    Wa(t) && Ha(e);
  });
}
function Wa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !De(e, n);
  } catch {
    return !0;
  }
}
function Ha(e) {
  var t = Je(e, 1);
  t !== null && Me(t, e, 1, -1);
}
function Hu(e) {
  var t = Fe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Yd.bind(null, B, e)),
    [t.memoizedState, e]
  );
}
function qn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Qa() {
  return je().memoizedState;
}
function Or(e, t, n, r) {
  var l = Fe();
  (B.flags |= e),
    (l.memoizedState = qn(1 | t, n, void 0, r === void 0 ? null : r));
}
function gl(e, t, n, r) {
  var l = je();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (J !== null) {
    var i = J.memoizedState;
    if (((o = i.destroy), r !== null && Ii(r, i.deps))) {
      l.memoizedState = qn(t, n, o, r);
      return;
    }
  }
  (B.flags |= e), (l.memoizedState = qn(1 | t, n, o, r));
}
function Qu(e, t) {
  return Or(8390656, 8, e, t);
}
function Ui(e, t) {
  return gl(2048, 8, e, t);
}
function Ka(e, t) {
  return gl(4, 2, e, t);
}
function Ya(e, t) {
  return gl(4, 4, e, t);
}
function Ga(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ja(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), gl(4, 4, Ga.bind(null, t, e), n)
  );
}
function Fi() {}
function Xa(e, t) {
  var n = je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ii(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Za(e, t) {
  var n = je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ii(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function qa(e, t, n) {
  return Lt & 21
    ? (De(n, t) || ((n = ta()), (B.lanes |= n), (Tt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function Qd(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ql.transition;
  ql.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (ql.transition = r);
  }
}
function ba() {
  return je().memoizedState;
}
function Kd(e, t, n) {
  var r = dt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ec(e))
  )
    tc(t, n);
  else if (((n = La(e, t, n, r)), n !== null)) {
    var l = se();
    Me(n, e, r, l), nc(n, t, r);
  }
}
function Yd(e, t, n) {
  var r = dt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ec(e)) tc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), De(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Ri(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = La(e, t, l, r)),
      n !== null && ((l = se()), Me(n, e, r, l), nc(n, t, r));
  }
}
function ec(e) {
  var t = e.alternate;
  return e === B || (t !== null && t === B);
}
function tc(e, t) {
  On = tl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function nc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mi(e, n);
  }
}
var nl = {
    readContext: _e,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  Gd = {
    readContext: _e,
    useCallback: function (e, t) {
      return (Fe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: _e,
    useEffect: Qu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Or(4194308, 4, Ga.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Or(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Or(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Kd.bind(null, B, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Hu,
    useDebugValue: Fi,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = Hu(!1),
        t = e[0];
      return (e = Qd.bind(null, e[1])), (Fe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = B,
        l = Fe();
      if ($) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(x(349));
        Lt & 30 || Aa(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Qu(Va.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        qn(9, Ba.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fe(),
        t = b.identifierPrefix;
      if ($) {
        var n = Qe,
          r = He;
        (n = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Xn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Hd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Jd = {
    readContext: _e,
    useCallback: Xa,
    useContext: _e,
    useEffect: Ui,
    useImperativeHandle: Ja,
    useInsertionEffect: Ka,
    useLayoutEffect: Ya,
    useMemo: Za,
    useReducer: bl,
    useRef: Qa,
    useState: function () {
      return bl(Zn);
    },
    useDebugValue: Fi,
    useDeferredValue: function (e) {
      var t = je();
      return qa(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = bl(Zn)[0],
        t = je().memoizedState;
      return [e, t];
    },
    useMutableSource: Fa,
    useSyncExternalStore: $a,
    useId: ba,
    unstable_isNewReconciler: !1,
  },
  Xd = {
    readContext: _e,
    useCallback: Xa,
    useContext: _e,
    useEffect: Ui,
    useImperativeHandle: Ja,
    useInsertionEffect: Ka,
    useLayoutEffect: Ya,
    useMemo: Za,
    useReducer: eo,
    useRef: Qa,
    useState: function () {
      return eo(Zn);
    },
    useDebugValue: Fi,
    useDeferredValue: function (e) {
      var t = je();
      return J === null ? (t.memoizedState = e) : qa(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = eo(Zn)[0],
        t = je().memoizedState;
      return [e, t];
    },
    useMutableSource: Fa,
    useSyncExternalStore: $a,
    useId: ba,
    unstable_isNewReconciler: !1,
  };
function an(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Nf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function to(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $o(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Zd = typeof WeakMap == "function" ? WeakMap : Map;
function rc(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ll || ((ll = !0), (Jo = r)), $o(e, t);
    }),
    n
  );
}
function lc(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        $o(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        $o(e, t),
          typeof r != "function" &&
            (ft === null ? (ft = new Set([this])) : ft.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Ku(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Zd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = fp.bind(null, e, t, n)), t.then(e, e));
}
function Yu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Gu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ke(-1, 1)), (t.tag = 2), ct(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var qd = Ze.ReactCurrentOwner,
  de = !1;
function ue(e, t, n, r) {
  t.child = e === null ? Da(t, null, n, r) : un(t, e.child, n, r);
}
function Ju(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    tn(t, l),
    (r = Mi(e, t, n, r, o, l)),
    (n = Di()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : ($ && n && Ei(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function Xu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ki(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), oc(e, t, o, r, l))
      : ((e = Ur(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Hn), n(i, r) && e.ref === t.ref)
    )
      return Xe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = pt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function oc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Hn(o, r) && e.ref === t.ref)
      if (((de = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (de = !0);
      else return (t.lanes = e.lanes), Xe(e, t, l);
  }
  return Ao(e, t, n, r, l);
}
function ic(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(Xt, ve),
        (ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(Xt, ve),
          (ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        D(Xt, ve),
        (ve |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(Xt, ve),
      (ve |= r);
  return ue(e, t, l, n), t.child;
}
function uc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ao(e, t, n, r, l) {
  var o = he(n) ? Rt : ie.current;
  return (
    (o = ln(t, o)),
    tn(t, l),
    (n = Mi(e, t, n, r, o, l)),
    (r = Di()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : ($ && r && Ei(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function Zu(e, t, n, r, l) {
  if (he(n)) {
    var o = !0;
    Gr(t);
  } else o = !1;
  if ((tn(t, l), t.stateNode === null))
    Ir(e, t), Ia(t, n, r), Fo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = _e(a))
      : ((a = he(n) ? Rt : ie.current), (a = ln(t, a)));
    var h = n.getDerivedStateFromProps,
      v =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && Vu(t, i, r, a)),
      (et = !1);
    var m = t.memoizedState;
    (i.state = m),
      br(t, r, i, l),
      (s = t.memoizedState),
      u !== r || m !== s || pe.current || et
        ? (typeof h == "function" && (Uo(t, n, h, r), (s = t.memoizedState)),
          (u = et || Bu(t, n, u, r, m, s, a))
            ? (v ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Ta(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Le(t.type, u)),
      (i.props = a),
      (v = t.pendingProps),
      (m = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = _e(s))
        : ((s = he(n) ? Rt : ie.current), (s = ln(t, s)));
    var g = n.getDerivedStateFromProps;
    (h =
      typeof g == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== v || m !== s) && Vu(t, i, r, s)),
      (et = !1),
      (m = t.memoizedState),
      (i.state = m),
      br(t, r, i, l);
    var S = t.memoizedState;
    u !== v || m !== S || pe.current || et
      ? (typeof g == "function" && (Uo(t, n, g, r), (S = t.memoizedState)),
        (a = et || Bu(t, n, a, r, m, S, s) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, S, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, S, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (i.props = r),
        (i.state = S),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Bo(e, t, n, r, o, l);
}
function Bo(e, t, n, r, l, o) {
  uc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Du(t, n, !1), Xe(e, t, o);
  (r = t.stateNode), (qd.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = un(t, e.child, null, o)), (t.child = un(t, null, u, o)))
      : ue(e, t, u, o),
    (t.memoizedState = r.state),
    l && Du(t, n, !0),
    t.child
  );
}
function sc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Mu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Mu(e, t.context, !1),
    Li(e, t.containerInfo);
}
function qu(e, t, n, r, l) {
  return on(), Ci(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var Vo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ac(e, t, n) {
  var r = t.pendingProps,
    l = A.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(A, l & 1),
    e === null)
  )
    return (
      Mo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Sl(i, r, 0, null)),
              (e = jt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Wo(n)),
              (t.memoizedState = Vo),
              e)
            : $i(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return bd(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = pt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = pt(u, o)) : ((o = jt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Wo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Vo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = pt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function $i(e, t) {
  return (
    (t = Sl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function kr(e, t, n, r) {
  return (
    r !== null && Ci(r),
    un(t, e.child, null, n),
    (e = $i(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function bd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = to(Error(x(422)))), kr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Sl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = jt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && un(t, e.child, null, i),
        (t.child.memoizedState = Wo(i)),
        (t.memoizedState = Vo),
        o);
  if (!(t.mode & 1)) return kr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(x(419))), (r = to(o, r, void 0)), kr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), de || u)) {
    if (((r = b), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Je(e, l), Me(r, e, l, -1));
    }
    return Qi(), (r = to(Error(x(421)))), kr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = dp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ye = at(l.nextSibling)),
      (ge = t),
      ($ = !0),
      (Oe = null),
      e !== null &&
        ((ke[Ee++] = He),
        (ke[Ee++] = Qe),
        (ke[Ee++] = zt),
        (He = e.id),
        (Qe = e.overflow),
        (zt = t)),
      (t = $i(t, r.children)),
      (t.flags |= 4096),
      t);
}
function bu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Do(e.return, t, n);
}
function no(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function cc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ue(e, t, r.children, n), (r = A.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bu(e, n, t);
        else if (e.tag === 19) bu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(A, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && el(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          no(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && el(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        no(t, !0, n, null, o);
        break;
      case "together":
        no(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ir(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Tt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = pt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ep(e, t, n) {
  switch (t.tag) {
    case 3:
      sc(t), on();
      break;
    case 5:
      Ua(t);
      break;
    case 1:
      he(t.type) && Gr(t);
      break;
    case 4:
      Li(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      D(Zr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(A, A.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ac(e, t, n)
          : (D(A, A.current & 1),
            (e = Xe(e, t, n)),
            e !== null ? e.sibling : null);
      D(A, A.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return cc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(A, A.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ic(e, t, n);
  }
  return Xe(e, t, n);
}
var fc, Ho, dc, pc;
fc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ho = function () {};
dc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Ct(Be.current);
    var o = null;
    switch (n) {
      case "input":
        (l = fo(e, l)), (r = fo(e, r)), (o = []);
        break;
      case "select":
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = mo(e, l)), (r = mo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Kr);
    }
    yo(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Un.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Un.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && U("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
pc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function kn(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function tp(e, t, n) {
  var r = t.pendingProps;
  switch ((Ni(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return he(t.type) && Yr(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        sn(),
        F(pe),
        F(ie),
        Oi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (xr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Oe !== null && (qo(Oe), (Oe = null)))),
        Ho(e, t),
        le(t),
        null
      );
    case 5:
      Ti(t);
      var l = Ct(Jn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        dc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return le(t), null;
        }
        if (((e = Ct(Be.current)), xr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[$e] = t), (r[Yn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < jn.length; l++) U(jn[l], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              su(r, o), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              cu(r, o), U("invalid", r);
          }
          yo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      wr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      wr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Un.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              fr(r), au(r, o, !0);
              break;
            case "textarea":
              fr(r), fu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Kr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = As(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[$e] = t),
            (e[Yn] = r),
            fc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = go(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < jn.length; l++) U(jn[l], e);
                l = r;
                break;
              case "source":
                U("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (l = r);
                break;
              case "details":
                U("toggle", e), (l = r);
                break;
              case "input":
                su(e, r), (l = fo(e, r)), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                cu(e, r), (l = mo(e, r)), U("invalid", e);
                break;
              default:
                l = r;
            }
            yo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? Ws(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Bs(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Fn(e, s)
                    : typeof s == "number" && Fn(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Un.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && U("scroll", e)
                      : s != null && ai(e, o, s, i));
              }
            switch (n) {
              case "input":
                fr(e), au(e, r, !1);
                break;
              case "textarea":
                fr(e), fu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ht(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Zt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Zt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Kr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) pc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = Ct(Jn.current)), Ct(Be.current), xr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[$e] = t),
            (o = r.nodeValue !== n) && ((e = ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                wr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  wr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[$e] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (F(A),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && ye !== null && t.mode & 1 && !(t.flags & 128))
          za(), on(), (t.flags |= 98560), (o = !1);
        else if (((o = xr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(x(317));
            o[$e] = t;
          } else
            on(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (o = !1);
        } else Oe !== null && (qo(Oe), (Oe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || A.current & 1 ? X === 0 && (X = 3) : Qi())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        sn(), Ho(e, t), e === null && Qn(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return Pi(t.type._context), le(t), null;
    case 17:
      return he(t.type) && Yr(), le(t), null;
    case 19:
      if ((F(A), (o = t.memoizedState), o === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) kn(o, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = el(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    kn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D(A, (A.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            K() > cn &&
            ((t.flags |= 128), (r = !0), kn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = el(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              kn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !$)
            )
              return le(t), null;
          } else
            2 * K() - o.renderingStartTime > cn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), kn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = K()),
          (t.sibling = null),
          (n = A.current),
          D(A, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        Hi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function np(e, t) {
  switch ((Ni(t), t.tag)) {
    case 1:
      return (
        he(t.type) && Yr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        sn(),
        F(pe),
        F(ie),
        Oi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ti(t), null;
    case 13:
      if ((F(A), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        on();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return F(A), null;
    case 4:
      return sn(), null;
    case 10:
      return Pi(t.type._context), null;
    case 22:
    case 23:
      return Hi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Er = !1,
  oe = !1,
  rp = typeof WeakSet == "function" ? WeakSet : Set,
  E = null;
function Jt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        W(e, t, r);
      }
    else n.current = null;
}
function Qo(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var es = !1;
function lp(e, t) {
  if (((Po = Wr), (e = ya()), ki(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            h = 0,
            v = e,
            m = null;
          t: for (;;) {
            for (
              var g;
              v !== n || (l !== 0 && v.nodeType !== 3) || (u = i + l),
                v !== o || (r !== 0 && v.nodeType !== 3) || (s = i + r),
                v.nodeType === 3 && (i += v.nodeValue.length),
                (g = v.firstChild) !== null;

            )
              (m = v), (v = g);
            for (;;) {
              if (v === e) break t;
              if (
                (m === n && ++a === l && (u = i),
                m === o && ++h === r && (s = i),
                (g = v.nextSibling) !== null)
              )
                break;
              (v = m), (m = v.parentNode);
            }
            v = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ro = { focusedElem: e, selectionRange: n }, Wr = !1, E = t; E !== null; )
    if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (E = e);
    else
      for (; E !== null; ) {
        t = E;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var w = S.memoizedProps,
                    R = S.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Le(t.type, w),
                      R
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (y) {
          W(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (E = e);
          break;
        }
        E = t.return;
      }
  return (S = es), (es = !1), S;
}
function In(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Qo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function wl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ko(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function hc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), hc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[$e], delete t[Yn], delete t[To], delete t[Ad], delete t[Bd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function mc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ts(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || mc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Yo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Kr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Yo(e, t, n), e = e.sibling; e !== null; ) Yo(e, t, n), (e = e.sibling);
}
function Go(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Go(e, t, n), e = e.sibling; e !== null; ) Go(e, t, n), (e = e.sibling);
}
var ee = null,
  Te = !1;
function qe(e, t, n) {
  for (n = n.child; n !== null; ) vc(e, t, n), (n = n.sibling);
}
function vc(e, t, n) {
  if (Ae && typeof Ae.onCommitFiberUnmount == "function")
    try {
      Ae.onCommitFiberUnmount(fl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      oe || Jt(n, t);
    case 6:
      var r = ee,
        l = Te;
      (ee = null),
        qe(e, t, n),
        (ee = r),
        (Te = l),
        ee !== null &&
          (Te
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (Te
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? Jl(e.parentNode, n)
              : e.nodeType === 1 && Jl(e, n),
            Vn(e))
          : Jl(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = Te),
        (ee = n.stateNode.containerInfo),
        (Te = !0),
        qe(e, t, n),
        (ee = r),
        (Te = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Qo(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      qe(e, t, n);
      break;
    case 1:
      if (
        !oe &&
        (Jt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          W(n, t, u);
        }
      qe(e, t, n);
      break;
    case 21:
      qe(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((oe = (r = oe) || n.memoizedState !== null), qe(e, t, n), (oe = r))
        : qe(e, t, n);
      break;
    default:
      qe(e, t, n);
  }
}
function ns(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new rp()),
      t.forEach(function (r) {
        var l = pp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Re(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ee = u.stateNode), (Te = !1);
              break e;
            case 3:
              (ee = u.stateNode.containerInfo), (Te = !0);
              break e;
            case 4:
              (ee = u.stateNode.containerInfo), (Te = !0);
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(x(160));
        vc(o, i, l), (ee = null), (Te = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        W(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) yc(t, e), (t = t.sibling);
}
function yc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(t, e), Ue(e), r & 4)) {
        try {
          In(3, e, e.return), wl(3, e);
        } catch (w) {
          W(e, e.return, w);
        }
        try {
          In(5, e, e.return);
        } catch (w) {
          W(e, e.return, w);
        }
      }
      break;
    case 1:
      Re(t, e), Ue(e), r & 512 && n !== null && Jt(n, n.return);
      break;
    case 5:
      if (
        (Re(t, e),
        Ue(e),
        r & 512 && n !== null && Jt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Fn(l, "");
        } catch (w) {
          W(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Fs(l, o),
              go(u, i);
            var a = go(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                v = s[i + 1];
              h === "style"
                ? Ws(l, v)
                : h === "dangerouslySetInnerHTML"
                ? Bs(l, v)
                : h === "children"
                ? Fn(l, v)
                : ai(l, h, v, a);
            }
            switch (u) {
              case "input":
                po(l, o);
                break;
              case "textarea":
                $s(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Zt(l, !!o.multiple, g, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Zt(l, !!o.multiple, o.defaultValue, !0)
                      : Zt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Yn] = o;
          } catch (w) {
            W(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Re(t, e), Ue(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (w) {
          W(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Re(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Vn(t.containerInfo);
        } catch (w) {
          W(e, e.return, w);
        }
      break;
    case 4:
      Re(t, e), Ue(e);
      break;
    case 13:
      Re(t, e),
        Ue(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Vi = K())),
        r & 4 && ns(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((oe = (a = oe) || h), Re(t, e), (oe = a)) : Re(t, e),
        Ue(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (E = e, h = e.child; h !== null; ) {
            for (v = E = h; E !== null; ) {
              switch (((m = E), (g = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  In(4, m, m.return);
                  break;
                case 1:
                  Jt(m, m.return);
                  var S = m.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (w) {
                      W(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Jt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    ls(v);
                    continue;
                  }
              }
              g !== null ? ((g.return = m), (E = g)) : ls(v);
            }
            h = h.sibling;
          }
        e: for (h = null, v = e; ; ) {
          if (v.tag === 5) {
            if (h === null) {
              h = v;
              try {
                (l = v.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = v.stateNode),
                      (s = v.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Vs("display", i)));
              } catch (w) {
                W(e, e.return, w);
              }
            }
          } else if (v.tag === 6) {
            if (h === null)
              try {
                v.stateNode.nodeValue = a ? "" : v.memoizedProps;
              } catch (w) {
                W(e, e.return, w);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            h === v && (h = null), (v = v.return);
          }
          h === v && (h = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      Re(t, e), Ue(e), r & 4 && ns(e);
      break;
    case 21:
      break;
    default:
      Re(t, e), Ue(e);
  }
}
function Ue(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (mc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Fn(l, ""), (r.flags &= -33));
          var o = ts(e);
          Go(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = ts(e);
          Yo(e, u, i);
          break;
        default:
          throw Error(x(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function op(e, t, n) {
  (E = e), gc(e);
}
function gc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Er;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || oe;
        u = Er;
        var a = oe;
        if (((Er = i), (oe = s) && !a))
          for (E = l; E !== null; )
            (i = E),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? os(l)
                : s !== null
                ? ((s.return = i), (E = s))
                : os(l);
        for (; o !== null; ) (E = o), gc(o), (o = o.sibling);
        (E = l), (Er = u), (oe = a);
      }
      rs(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (E = o)) : rs(e);
  }
}
function rs(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              oe || wl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !oe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Le(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Au(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Au(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var h = a.memoizedState;
                  if (h !== null) {
                    var v = h.dehydrated;
                    v !== null && Vn(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(x(163));
          }
        oe || (t.flags & 512 && Ko(t));
      } catch (m) {
        W(t, t.return, m);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function ls(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function os(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            wl(4, t);
          } catch (s) {
            W(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(t, l, s);
            }
          }
          var o = t.return;
          try {
            Ko(t);
          } catch (s) {
            W(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ko(t);
          } catch (s) {
            W(t, i, s);
          }
      }
    } catch (s) {
      W(t, t.return, s);
    }
    if (t === e) {
      E = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (E = u);
      break;
    }
    E = t.return;
  }
}
var ip = Math.ceil,
  rl = Ze.ReactCurrentDispatcher,
  Ai = Ze.ReactCurrentOwner,
  Ce = Ze.ReactCurrentBatchConfig,
  I = 0,
  b = null,
  Y = null,
  te = 0,
  ve = 0,
  Xt = yt(0),
  X = 0,
  bn = null,
  Tt = 0,
  xl = 0,
  Bi = 0,
  Mn = null,
  fe = null,
  Vi = 0,
  cn = 1 / 0,
  Ve = null,
  ll = !1,
  Jo = null,
  ft = null,
  Nr = !1,
  lt = null,
  ol = 0,
  Dn = 0,
  Xo = null,
  Mr = -1,
  Dr = 0;
function se() {
  return I & 6 ? K() : Mr !== -1 ? Mr : (Mr = K());
}
function dt(e) {
  return e.mode & 1
    ? I & 2 && te !== 0
      ? te & -te
      : Wd.transition !== null
      ? (Dr === 0 && (Dr = ta()), Dr)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : sa(e.type))),
        e)
    : 1;
}
function Me(e, t, n, r) {
  if (50 < Dn) throw ((Dn = 0), (Xo = null), Error(x(185)));
  nr(e, n, r),
    (!(I & 2) || e !== b) &&
      (e === b && (!(I & 2) && (xl |= n), X === 4 && nt(e, te)),
      me(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((cn = K() + 500), vl && gt()));
}
function me(e, t) {
  var n = e.callbackNode;
  Wf(e, t);
  var r = Vr(e, e === b ? te : 0);
  if (r === 0)
    n !== null && hu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && hu(n), t === 1))
      e.tag === 0 ? Vd(is.bind(null, e)) : ja(is.bind(null, e)),
        Fd(function () {
          !(I & 6) && gt();
        }),
        (n = null);
    else {
      switch (na(r)) {
        case 1:
          n = hi;
          break;
        case 4:
          n = bs;
          break;
        case 16:
          n = Br;
          break;
        case 536870912:
          n = ea;
          break;
        default:
          n = Br;
      }
      n = _c(n, wc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function wc(e, t) {
  if (((Mr = -1), (Dr = 0), I & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (nn() && e.callbackNode !== n) return null;
  var r = Vr(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = il(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var o = Sc();
    (b !== e || te !== t) && ((Ve = null), (cn = K() + 500), _t(e, t));
    do
      try {
        ap();
        break;
      } catch (u) {
        xc(e, u);
      }
    while (!0);
    ji(),
      (rl.current = o),
      (I = l),
      Y !== null ? (t = 0) : ((b = null), (te = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Eo(e)), l !== 0 && ((r = l), (t = Zo(e, l)))), t === 1)
    )
      throw ((n = bn), _t(e, 0), nt(e, r), me(e, K()), n);
    if (t === 6) nt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !up(l) &&
          ((t = il(e, r)),
          t === 2 && ((o = Eo(e)), o !== 0 && ((r = o), (t = Zo(e, o)))),
          t === 1))
      )
        throw ((n = bn), _t(e, 0), nt(e, r), me(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          kt(e, fe, Ve);
          break;
        case 3:
          if (
            (nt(e, r), (r & 130023424) === r && ((t = Vi + 500 - K()), 10 < t))
          ) {
            if (Vr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Lo(kt.bind(null, e, fe, Ve), t);
            break;
          }
          kt(e, fe, Ve);
          break;
        case 4:
          if ((nt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ie(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * ip(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Lo(kt.bind(null, e, fe, Ve), r);
            break;
          }
          kt(e, fe, Ve);
          break;
        case 5:
          kt(e, fe, Ve);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return me(e, K()), e.callbackNode === n ? wc.bind(null, e) : null;
}
function Zo(e, t) {
  var n = Mn;
  return (
    e.current.memoizedState.isDehydrated && (_t(e, t).flags |= 256),
    (e = il(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && qo(t)),
    e
  );
}
function qo(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function up(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!De(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function nt(e, t) {
  for (
    t &= ~Bi,
      t &= ~xl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ie(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function is(e) {
  if (I & 6) throw Error(x(327));
  nn();
  var t = Vr(e, 0);
  if (!(t & 1)) return me(e, K()), null;
  var n = il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Eo(e);
    r !== 0 && ((t = r), (n = Zo(e, r)));
  }
  if (n === 1) throw ((n = bn), _t(e, 0), nt(e, t), me(e, K()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kt(e, fe, Ve),
    me(e, K()),
    null
  );
}
function Wi(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((cn = K() + 500), vl && gt());
  }
}
function Ot(e) {
  lt !== null && lt.tag === 0 && !(I & 6) && nn();
  var t = I;
  I |= 1;
  var n = Ce.transition,
    r = M;
  try {
    if (((Ce.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (Ce.transition = n), (I = t), !(I & 6) && gt();
  }
}
function Hi() {
  (ve = Xt.current), F(Xt);
}
function _t(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ud(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((Ni(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Yr();
          break;
        case 3:
          sn(), F(pe), F(ie), Oi();
          break;
        case 5:
          Ti(r);
          break;
        case 4:
          sn();
          break;
        case 13:
          F(A);
          break;
        case 19:
          F(A);
          break;
        case 10:
          Pi(r.type._context);
          break;
        case 22:
        case 23:
          Hi();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (Y = e = pt(e.current, null)),
    (te = ve = t),
    (X = 0),
    (bn = null),
    (Bi = xl = Tt = 0),
    (fe = Mn = null),
    Nt !== null)
  ) {
    for (t = 0; t < Nt.length; t++)
      if (((n = Nt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Nt = null;
  }
  return e;
}
function xc(e, t) {
  do {
    var n = Y;
    try {
      if ((ji(), (Tr.current = nl), tl)) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        tl = !1;
      }
      if (
        ((Lt = 0),
        (q = J = B = null),
        (On = !1),
        (Xn = 0),
        (Ai.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (bn = t), (Y = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = te),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            h = u,
            v = h.tag;
          if (!(h.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = Yu(i);
          if (g !== null) {
            (g.flags &= -257),
              Gu(g, i, u, o, t),
              g.mode & 1 && Ku(o, a, t),
              (t = g),
              (s = a);
            var S = t.updateQueue;
            if (S === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else S.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ku(o, a, t), Qi();
              break e;
            }
            s = Error(x(426));
          }
        } else if ($ && u.mode & 1) {
          var R = Yu(i);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256),
              Gu(R, i, u, o, t),
              Ci(an(s, u));
            break e;
          }
        }
        (o = s = an(s, u)),
          X !== 4 && (X = 2),
          Mn === null ? (Mn = [o]) : Mn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = rc(o, s, t);
              $u(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (ft === null || !ft.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var y = lc(o, u, t);
                $u(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Ec(n);
    } catch (k) {
      (t = k), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Sc() {
  var e = rl.current;
  return (rl.current = nl), e === null ? nl : e;
}
function Qi() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    b === null || (!(Tt & 268435455) && !(xl & 268435455)) || nt(b, te);
}
function il(e, t) {
  var n = I;
  I |= 2;
  var r = Sc();
  (b !== e || te !== t) && ((Ve = null), _t(e, t));
  do
    try {
      sp();
      break;
    } catch (l) {
      xc(e, l);
    }
  while (!0);
  if ((ji(), (I = n), (rl.current = r), Y !== null)) throw Error(x(261));
  return (b = null), (te = 0), X;
}
function sp() {
  for (; Y !== null; ) kc(Y);
}
function ap() {
  for (; Y !== null && !If(); ) kc(Y);
}
function kc(e) {
  var t = Cc(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ec(e) : (Y = t),
    (Ai.current = null);
}
function Ec(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = np(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (Y = null);
        return;
      }
    } else if (((n = tp(n, t, ve)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function kt(e, t, n) {
  var r = M,
    l = Ce.transition;
  try {
    (Ce.transition = null), (M = 1), cp(e, t, n, r);
  } finally {
    (Ce.transition = l), (M = r);
  }
  return null;
}
function cp(e, t, n, r) {
  do nn();
  while (lt !== null);
  if (I & 6) throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Hf(e, o),
    e === b && ((Y = b = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Nr ||
      ((Nr = !0),
      _c(Br, function () {
        return nn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ce.transition), (Ce.transition = null);
    var i = M;
    M = 1;
    var u = I;
    (I |= 4),
      (Ai.current = null),
      lp(e, n),
      yc(n, e),
      zd(Ro),
      (Wr = !!Po),
      (Ro = Po = null),
      (e.current = n),
      op(n),
      Mf(),
      (I = u),
      (M = i),
      (Ce.transition = o);
  } else e.current = n;
  if (
    (Nr && ((Nr = !1), (lt = e), (ol = l)),
    (o = e.pendingLanes),
    o === 0 && (ft = null),
    Ff(n.stateNode),
    me(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ll) throw ((ll = !1), (e = Jo), (Jo = null), e);
  return (
    ol & 1 && e.tag !== 0 && nn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Xo ? Dn++ : ((Dn = 0), (Xo = e))) : (Dn = 0),
    gt(),
    null
  );
}
function nn() {
  if (lt !== null) {
    var e = na(ol),
      t = Ce.transition,
      n = M;
    try {
      if (((Ce.transition = null), (M = 16 > e ? 16 : e), lt === null))
        var r = !1;
      else {
        if (((e = lt), (lt = null), (ol = 0), I & 6)) throw Error(x(331));
        var l = I;
        for (I |= 4, E = e.current; E !== null; ) {
          var o = E,
            i = o.child;
          if (E.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (E = a; E !== null; ) {
                  var h = E;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      In(8, h, o);
                  }
                  var v = h.child;
                  if (v !== null) (v.return = h), (E = v);
                  else
                    for (; E !== null; ) {
                      h = E;
                      var m = h.sibling,
                        g = h.return;
                      if ((hc(h), h === a)) {
                        E = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = g), (E = m);
                        break;
                      }
                      E = g;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var w = S.child;
                if (w !== null) {
                  S.child = null;
                  do {
                    var R = w.sibling;
                    (w.sibling = null), (w = R);
                  } while (w !== null);
                }
              }
              E = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (E = i);
          else
            e: for (; E !== null; ) {
              if (((o = E), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    In(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (E = f);
                break e;
              }
              E = o.return;
            }
        }
        var c = e.current;
        for (E = c; E !== null; ) {
          i = E;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (E = d);
          else
            e: for (i = c; E !== null; ) {
              if (((u = E), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wl(9, u);
                  }
                } catch (k) {
                  W(u, u.return, k);
                }
              if (u === i) {
                E = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (E = y);
                break e;
              }
              E = u.return;
            }
        }
        if (
          ((I = l), gt(), Ae && typeof Ae.onPostCommitFiberRoot == "function")
        )
          try {
            Ae.onPostCommitFiberRoot(fl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (Ce.transition = t);
    }
  }
  return !1;
}
function us(e, t, n) {
  (t = an(n, t)),
    (t = rc(e, t, 1)),
    (e = ct(e, t, 1)),
    (t = se()),
    e !== null && (nr(e, 1, t), me(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) us(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        us(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ft === null || !ft.has(r)))
        ) {
          (e = an(n, e)),
            (e = lc(t, e, 1)),
            (t = ct(t, e, 1)),
            (e = se()),
            t !== null && (nr(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function fp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (te & n) === n &&
      (X === 4 || (X === 3 && (te & 130023424) === te && 500 > K() - Vi)
        ? _t(e, 0)
        : (Bi |= n)),
    me(e, t);
}
function Nc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = hr), (hr <<= 1), !(hr & 130023424) && (hr = 4194304))
      : (t = 1));
  var n = se();
  (e = Je(e, t)), e !== null && (nr(e, t, n), me(e, n));
}
function dp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Nc(e, n);
}
function pp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), Nc(e, n);
}
var Cc;
Cc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), ep(e, t, n);
      de = !!(e.flags & 131072);
    }
  else (de = !1), $ && t.flags & 1048576 && Pa(t, Xr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ir(e, t), (e = t.pendingProps);
      var l = ln(t, ie.current);
      tn(t, n), (l = Mi(null, t, r, e, l, n));
      var o = Di();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((o = !0), Gr(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            zi(t),
            (l.updater = yl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Fo(t, r, e, n),
            (t = Bo(null, t, r, !0, o, n)))
          : ((t.tag = 0), $ && o && Ei(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ir(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = mp(r)),
          (e = Le(r, e)),
          l)
        ) {
          case 0:
            t = Ao(null, t, r, e, n);
            break e;
          case 1:
            t = Zu(null, t, r, e, n);
            break e;
          case 11:
            t = Ju(null, t, r, e, n);
            break e;
          case 14:
            t = Xu(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Ao(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Zu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((sc(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Ta(e, t),
          br(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = an(Error(x(423)), t)), (t = qu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = an(Error(x(424)), t)), (t = qu(e, t, r, n, l));
            break e;
          } else
            for (
              ye = at(t.stateNode.containerInfo.firstChild),
                ge = t,
                $ = !0,
                Oe = null,
                n = Da(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((on(), r === l)) {
            t = Xe(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ua(t),
        e === null && Mo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        zo(r, l) ? (i = null) : o !== null && zo(r, o) && (t.flags |= 32),
        uc(e, t),
        ue(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Mo(t), null;
    case 13:
      return ac(e, t, n);
    case 4:
      return (
        Li(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = un(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Ju(e, t, r, l, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          D(Zr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (De(o.value, i)) {
            if (o.children === l.children && !pe.current) {
              t = Xe(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Ke(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Do(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(x(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Do(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        tn(t, n),
        (l = _e(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Le(r, t.pendingProps)),
        (l = Le(r.type, l)),
        Xu(e, t, r, l, n)
      );
    case 15:
      return oc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Ir(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), Gr(t)) : (e = !1),
        tn(t, n),
        Ia(t, r, l),
        Fo(t, r, l, n),
        Bo(null, t, r, !0, e, n)
      );
    case 19:
      return cc(e, t, n);
    case 22:
      return ic(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function _c(e, t) {
  return qs(e, t);
}
function hp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ne(e, t, n, r) {
  return new hp(e, t, n, r);
}
function Ki(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function mp(e) {
  if (typeof e == "function") return Ki(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === fi)) return 11;
    if (e === di) return 14;
  }
  return 2;
}
function pt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ne(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ur(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ki(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case At:
        return jt(n.children, l, o, t);
      case ci:
        (i = 8), (l |= 8);
        break;
      case uo:
        return (
          (e = Ne(12, n, t, l | 2)), (e.elementType = uo), (e.lanes = o), e
        );
      case so:
        return (e = Ne(13, n, t, l)), (e.elementType = so), (e.lanes = o), e;
      case ao:
        return (e = Ne(19, n, t, l)), (e.elementType = ao), (e.lanes = o), e;
      case Ms:
        return Sl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Os:
              i = 10;
              break e;
            case Is:
              i = 9;
              break e;
            case fi:
              i = 11;
              break e;
            case di:
              i = 14;
              break e;
            case be:
              (i = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ne(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function jt(e, t, n, r) {
  return (e = Ne(7, e, r, t)), (e.lanes = n), e;
}
function Sl(e, t, n, r) {
  return (
    (e = Ne(22, e, r, t)),
    (e.elementType = Ms),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ro(e, t, n) {
  return (e = Ne(6, e, null, t)), (e.lanes = n), e;
}
function lo(e, t, n) {
  return (
    (t = Ne(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function vp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Fl(0)),
    (this.expirationTimes = Fl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Fl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Yi(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new vp(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ne(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    zi(o),
    e
  );
}
function yp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $t,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function jc(e) {
  if (!e) return mt;
  e = e._reactInternals;
  e: {
    if (Mt(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return _a(e, n, t);
  }
  return t;
}
function Pc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Yi(n, r, !0, e, l, o, i, u, s)),
    (e.context = jc(null)),
    (n = e.current),
    (r = se()),
    (l = dt(n)),
    (o = Ke(r, l)),
    (o.callback = t ?? null),
    ct(n, o, l),
    (e.current.lanes = l),
    nr(e, l, r),
    me(e, r),
    e
  );
}
function kl(e, t, n, r) {
  var l = t.current,
    o = se(),
    i = dt(l);
  return (
    (n = jc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ke(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ct(l, t, i)),
    e !== null && (Me(e, l, i, o), Lr(e, l, i)),
    i
  );
}
function ul(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ss(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Gi(e, t) {
  ss(e, t), (e = e.alternate) && ss(e, t);
}
function gp() {
  return null;
}
var Rc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ji(e) {
  this._internalRoot = e;
}
El.prototype.render = Ji.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  kl(e, t, null, null);
};
El.prototype.unmount = Ji.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ot(function () {
      kl(null, e, null, null);
    }),
      (t[Ge] = null);
  }
};
function El(e) {
  this._internalRoot = e;
}
El.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = oa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++);
    tt.splice(n, 0, e), n === 0 && ua(e);
  }
};
function Xi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Nl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function as() {}
function wp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = ul(i);
        o.call(a);
      };
    }
    var i = Pc(t, r, e, 0, null, !1, !1, "", as);
    return (
      (e._reactRootContainer = i),
      (e[Ge] = i.current),
      Qn(e.nodeType === 8 ? e.parentNode : e),
      Ot(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = ul(s);
      u.call(a);
    };
  }
  var s = Yi(e, 0, !1, null, null, !1, !1, "", as);
  return (
    (e._reactRootContainer = s),
    (e[Ge] = s.current),
    Qn(e.nodeType === 8 ? e.parentNode : e),
    Ot(function () {
      kl(t, s, n, r);
    }),
    s
  );
}
function Cl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = ul(i);
        u.call(s);
      };
    }
    kl(t, i, e, l);
  } else i = wp(n, t, e, l, r);
  return ul(i);
}
ra = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _n(t.pendingLanes);
        n !== 0 &&
          (mi(t, n | 1), me(t, K()), !(I & 6) && ((cn = K() + 500), gt()));
      }
      break;
    case 13:
      Ot(function () {
        var r = Je(e, 1);
        if (r !== null) {
          var l = se();
          Me(r, e, 1, l);
        }
      }),
        Gi(e, 1);
  }
};
vi = function (e) {
  if (e.tag === 13) {
    var t = Je(e, 134217728);
    if (t !== null) {
      var n = se();
      Me(t, e, 134217728, n);
    }
    Gi(e, 134217728);
  }
};
la = function (e) {
  if (e.tag === 13) {
    var t = dt(e),
      n = Je(e, t);
    if (n !== null) {
      var r = se();
      Me(n, e, t, r);
    }
    Gi(e, t);
  }
};
oa = function () {
  return M;
};
ia = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
xo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((po(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ml(r);
            if (!l) throw Error(x(90));
            Us(r), po(r, l);
          }
        }
      }
      break;
    case "textarea":
      $s(e, n);
      break;
    case "select":
      (t = n.value), t != null && Zt(e, !!n.multiple, t, !1);
  }
};
Ks = Wi;
Ys = Ot;
var xp = { usingClientEntryPoint: !1, Events: [lr, Ht, ml, Hs, Qs, Wi] },
  En = {
    findFiberByHostInstance: Et,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Sp = {
    bundleType: En.bundleType,
    version: En.version,
    rendererPackageName: En.rendererPackageName,
    rendererConfig: En.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Xs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: En.findFiberByHostInstance || gp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Cr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Cr.isDisabled && Cr.supportsFiber)
    try {
      (fl = Cr.inject(Sp)), (Ae = Cr);
    } catch {}
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xp;
xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xi(t)) throw Error(x(200));
  return yp(e, t, null, n);
};
xe.createRoot = function (e, t) {
  if (!Xi(e)) throw Error(x(299));
  var n = !1,
    r = "",
    l = Rc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Yi(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ge] = t.current),
    Qn(e.nodeType === 8 ? e.parentNode : e),
    new Ji(t)
  );
};
xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = Xs(t)), (e = e === null ? null : e.stateNode), e;
};
xe.flushSync = function (e) {
  return Ot(e);
};
xe.hydrate = function (e, t, n) {
  if (!Nl(t)) throw Error(x(200));
  return Cl(null, e, t, !0, n);
};
xe.hydrateRoot = function (e, t, n) {
  if (!Xi(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Rc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Pc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ge] = t.current),
    Qn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new El(t);
};
xe.render = function (e, t, n) {
  if (!Nl(t)) throw Error(x(200));
  return Cl(null, e, t, !1, n);
};
xe.unmountComponentAtNode = function (e) {
  if (!Nl(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (Ot(function () {
        Cl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ge] = null);
        });
      }),
      !0)
    : !1;
};
xe.unstable_batchedUpdates = Wi;
xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Nl(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return Cl(e, t, n, !1, r);
};
xe.version = "18.2.0-next-9e3b772b8-20220608";
function zc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zc);
    } catch (e) {
      console.error(e);
    }
}
zc(), (Ps.exports = xe);
var kp = Ps.exports;
/**
 * @remix-run/router v1.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function er() {
  return (
    (er = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    er.apply(this, arguments)
  );
}
var ot;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ot || (ot = {}));
const cs = "popstate";
function Ep(e) {
  e === void 0 && (e = {});
  function t(l, o) {
    let {
      pathname: i = "/",
      search: u = "",
      hash: s = "",
    } = Dt(l.location.hash.substr(1));
    return (
      !i.startsWith("/") && !i.startsWith(".") && (i = "/" + i),
      bo(
        "",
        { pathname: i, search: u, hash: s },
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || "default"
      )
    );
  }
  function n(l, o) {
    let i = l.document.querySelector("base"),
      u = "";
    if (i && i.getAttribute("href")) {
      let s = l.location.href,
        a = s.indexOf("#");
      u = a === -1 ? s : s.slice(0, a);
    }
    return u + "#" + (typeof o == "string" ? o : Lc(o));
  }
  function r(l, o) {
    _l(
      l.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(o) +
        ")"
    );
  }
  return Cp(t, n, r, e);
}
function G(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function _l(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Np() {
  return Math.random().toString(36).substr(2, 8);
}
function fs(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function bo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    er(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Dt(t) : t,
      { state: n, key: (t && t.key) || r || Np() }
    )
  );
}
function Lc(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Dt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Cp(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = ot.Pop,
    s = null,
    a = h();
  a == null && ((a = 0), i.replaceState(er({}, i.state, { idx: a }), ""));
  function h() {
    return (i.state || { idx: null }).idx;
  }
  function v() {
    u = ot.Pop;
    let R = h(),
      f = R == null ? null : R - a;
    (a = R), s && s({ action: u, location: w.location, delta: f });
  }
  function m(R, f) {
    u = ot.Push;
    let c = bo(w.location, R, f);
    n && n(c, R), (a = h() + 1);
    let d = fs(c, a),
      y = w.createHref(c);
    try {
      i.pushState(d, "", y);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      l.location.assign(y);
    }
    o && s && s({ action: u, location: w.location, delta: 1 });
  }
  function g(R, f) {
    u = ot.Replace;
    let c = bo(w.location, R, f);
    n && n(c, R), (a = h());
    let d = fs(c, a),
      y = w.createHref(c);
    i.replaceState(d, "", y),
      o && s && s({ action: u, location: w.location, delta: 0 });
  }
  function S(R) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof R == "string" ? R : Lc(R);
    return (
      G(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, f)
    );
  }
  let w = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(R) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(cs, v),
        (s = R),
        () => {
          l.removeEventListener(cs, v), (s = null);
        }
      );
    },
    createHref(R) {
      return t(l, R);
    },
    createURL: S,
    encodeLocation(R) {
      let f = S(R);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: m,
    replace: g,
    go(R) {
      return i.go(R);
    },
  };
  return w;
}
var ds;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ds || (ds = {}));
function _p(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Dt(t) : t,
    l = Ic(r.pathname || "/", n);
  if (l == null) return null;
  let o = Tc(e);
  jp(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = Dp(o[u], $p(l));
  return i;
}
function Tc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let s = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (G(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = Pt([r, s.relativePath]),
      h = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (G(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      Tc(o.children, t, h, a)),
      !(o.path == null && !o.index) &&
        t.push({ path: a, score: Ip(a, o.index), routesMeta: h });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
      else for (let s of Oc(o.path)) l(o, i, s);
    }),
    t
  );
}
function Oc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = Oc(r.join("/")),
    u = [];
  return (
    u.push(...i.map((s) => (s === "" ? o : [o, s].join("/")))),
    l && u.push(...i),
    u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function jp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Mp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Pp = /^:\w+$/,
  Rp = 3,
  zp = 2,
  Lp = 1,
  Tp = 10,
  Op = -2,
  ps = (e) => e === "*";
function Ip(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(ps) && (r += Op),
    t && (r += zp),
    n
      .filter((l) => !ps(l))
      .reduce((l, o) => l + (Pp.test(o) ? Rp : o === "" ? Lp : Tp), r)
  );
}
function Mp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Dp(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      s = i === n.length - 1,
      a = l === "/" ? t : t.slice(l.length) || "/",
      h = Up(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        a
      );
    if (!h) return null;
    Object.assign(r, h.params);
    let v = u.route;
    o.push({
      params: r,
      pathname: Pt([l, h.pathname]),
      pathnameBase: Wp(Pt([l, h.pathnameBase])),
      route: v,
    }),
      h.pathnameBase !== "/" && (l = Pt([l, h.pathnameBase]));
  }
  return o;
}
function Up(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Fp(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((a, h, v) => {
      let { paramName: m, isOptional: g } = h;
      if (m === "*") {
        let w = u[v] || "";
        i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const S = u[v];
      return g && !S ? (a[m] = void 0) : (a[m] = Ap(S || "", m)), a;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Fp(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    _l(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:(\w+)(\?)?/g,
          (i, u, s) => (
            r.push({ paramName: u, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function $p(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      _l(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Ap(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      _l(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Ic(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Bp(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Dt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Vp(n, t)) : t,
    search: Hp(r),
    hash: Qp(l),
  };
}
function Vp(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function oo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Mc(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Dc(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Dt(e))
    : ((l = er({}, e)),
      G(
        !l.pathname || !l.pathname.includes("?"),
        oo("?", "pathname", "search", l)
      ),
      G(
        !l.pathname || !l.pathname.includes("#"),
        oo("#", "pathname", "hash", l)
      ),
      G(!l.search || !l.search.includes("#"), oo("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    u;
  if (i == null) u = n;
  else if (r) {
    let v = t[t.length - 1].replace(/^\//, "").split("/");
    if (i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; ) m.shift(), v.pop();
      l.pathname = m.join("/");
    }
    u = "/" + v.join("/");
  } else {
    let v = t.length - 1;
    if (i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; ) m.shift(), (v -= 1);
      l.pathname = m.join("/");
    }
    u = v >= 0 ? t[v] : "/";
  }
  let s = Bp(l, u),
    a = i && i !== "/" && i.endsWith("/"),
    h = (o || i === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (a || h) && (s.pathname += "/"), s;
}
const Pt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Wp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Hp = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Qp = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Kp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Uc = ["post", "put", "patch", "delete"];
new Set(Uc);
const Yp = ["get", ...Uc];
new Set(Yp);
/**
 * React Router v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function sl() {
  return (
    (sl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    sl.apply(this, arguments)
  );
}
const Zi = C.createContext(null),
  Gp = C.createContext(null),
  jl = C.createContext(null),
  Pl = C.createContext(null),
  Ut = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Fc = C.createContext(null);
function ir() {
  return C.useContext(Pl) != null;
}
function qi() {
  return ir() || G(!1), C.useContext(Pl).location;
}
function $c(e) {
  C.useContext(jl).static || C.useLayoutEffect(e);
}
function Jp() {
  let { isDataRoute: e } = C.useContext(Ut);
  return e ? sh() : Xp();
}
function Xp() {
  ir() || G(!1);
  let e = C.useContext(Zi),
    { basename: t, navigator: n } = C.useContext(jl),
    { matches: r } = C.useContext(Ut),
    { pathname: l } = qi(),
    o = JSON.stringify(Mc(r).map((s) => s.pathnameBase)),
    i = C.useRef(!1);
  return (
    $c(() => {
      i.current = !0;
    }),
    C.useCallback(
      function (s, a) {
        if ((a === void 0 && (a = {}), !i.current)) return;
        if (typeof s == "number") {
          n.go(s);
          return;
        }
        let h = Dc(s, JSON.parse(o), l, a.relative === "path");
        e == null &&
          t !== "/" &&
          (h.pathname = h.pathname === "/" ? t : Pt([t, h.pathname])),
          (a.replace ? n.replace : n.push)(h, a.state, a);
      },
      [t, n, o, l, e]
    )
  );
}
function Zp(e, t) {
  return qp(e, t);
}
function qp(e, t, n) {
  ir() || G(!1);
  let { navigator: r } = C.useContext(jl),
    { matches: l } = C.useContext(Ut),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let s = qi(),
    a;
  if (t) {
    var h;
    let w = typeof t == "string" ? Dt(t) : t;
    u === "/" || ((h = w.pathname) != null && h.startsWith(u)) || G(!1),
      (a = w);
  } else a = s;
  let v = a.pathname || "/",
    m = u === "/" ? v : v.slice(u.length) || "/",
    g = _p(e, { pathname: m }),
    S = rh(
      g &&
        g.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, i, w.params),
            pathname: Pt([
              u,
              r.encodeLocation
                ? r.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? u
                : Pt([
                    u,
                    r.encodeLocation
                      ? r.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      l,
      n
    );
  return t && S
    ? C.createElement(
        Pl.Provider,
        {
          value: {
            location: sl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              a
            ),
            navigationType: ot.Pop,
          },
        },
        S
      )
    : S;
}
function bp() {
  let e = uh(),
    t = Kp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: l }, n) : null,
    o
  );
}
const eh = C.createElement(bp, null);
class th extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? C.createElement(
          Ut.Provider,
          { value: this.props.routeContext },
          C.createElement(Fc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function nh(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = C.useContext(Zi);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(Ut.Provider, { value: t }, r)
  );
}
function rh(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let o = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let u = o.findIndex(
      (s) => s.route.id && (i == null ? void 0 : i[s.route.id])
    );
    u >= 0 || G(!1), (o = o.slice(0, Math.min(o.length, u + 1)));
  }
  return o.reduceRight((u, s, a) => {
    let h = s.route.id ? (i == null ? void 0 : i[s.route.id]) : null,
      v = null;
    n && (v = s.route.errorElement || eh);
    let m = t.concat(o.slice(0, a + 1)),
      g = () => {
        let S;
        return (
          h
            ? (S = v)
            : s.route.Component
            ? (S = C.createElement(s.route.Component, null))
            : s.route.element
            ? (S = s.route.element)
            : (S = u),
          C.createElement(nh, {
            match: s,
            routeContext: { outlet: u, matches: m, isDataRoute: n != null },
            children: S,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || a === 0)
      ? C.createElement(th, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: h,
          children: g(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var Ac = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Ac || {}),
  al = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(al || {});
function lh(e) {
  let t = C.useContext(Zi);
  return t || G(!1), t;
}
function oh(e) {
  let t = C.useContext(Gp);
  return t || G(!1), t;
}
function ih(e) {
  let t = C.useContext(Ut);
  return t || G(!1), t;
}
function Bc(e) {
  let t = ih(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || G(!1), n.route.id;
}
function uh() {
  var e;
  let t = C.useContext(Fc),
    n = oh(al.UseRouteError),
    r = Bc(al.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function sh() {
  let { router: e } = lh(Ac.UseNavigateStable),
    t = Bc(al.UseNavigateStable),
    n = C.useRef(!1);
  return (
    $c(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, sl({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function ah(e) {
  let { to: t, replace: n, state: r, relative: l } = e;
  ir() || G(!1);
  let { matches: o } = C.useContext(Ut),
    { pathname: i } = qi(),
    u = Jp(),
    s = Dc(
      t,
      Mc(o).map((h) => h.pathnameBase),
      i,
      l === "path"
    ),
    a = JSON.stringify(s);
  return (
    C.useEffect(
      () => u(JSON.parse(a), { replace: n, state: r, relative: l }),
      [u, a, l, n, r]
    ),
    null
  );
}
function ei(e) {
  G(!1);
}
function ch(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = ot.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  ir() && G(!1);
  let u = t.replace(/^\/*/, "/"),
    s = C.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == "string" && (r = Dt(r));
  let {
      pathname: a = "/",
      search: h = "",
      hash: v = "",
      state: m = null,
      key: g = "default",
    } = r,
    S = C.useMemo(() => {
      let w = Ic(a, u);
      return w == null
        ? null
        : {
            location: { pathname: w, search: h, hash: v, state: m, key: g },
            navigationType: l,
          };
    }, [u, a, h, v, m, g, l]);
  return S == null
    ? null
    : C.createElement(
        jl.Provider,
        { value: s },
        C.createElement(Pl.Provider, { children: n, value: S })
      );
}
function fh(e) {
  let { children: t, location: n } = e;
  return Zp(ti(t), n);
}
new Promise(() => {});
function ti(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    C.Children.forEach(e, (r, l) => {
      if (!C.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === C.Fragment) {
        n.push.apply(n, ti(r.props.children, o));
        return;
      }
      r.type !== ei && G(!1), !r.props.index || !r.props.children || G(!1);
      let i = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = ti(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const dh = "startTransition",
  hs = df[dh];
function ph(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    o = C.useRef();
  o.current == null && (o.current = Ep({ window: l, v5Compat: !0 }));
  let i = o.current,
    [u, s] = C.useState({ action: i.action, location: i.location }),
    { v7_startTransition: a } = r || {},
    h = C.useCallback(
      (v) => {
        a && hs ? hs(() => s(v)) : s(v);
      },
      [s, a]
    );
  return (
    C.useLayoutEffect(() => i.listen(h), [i, h]),
    C.createElement(ch, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: i,
    })
  );
}
var ms;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ms || (ms = {}));
var vs;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(vs || (vs = {}));
var Vc = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], l = 0; l < arguments.length; l++) {
        var o = arguments[l];
        if (o) {
          var i = typeof o;
          if (i === "string" || i === "number") r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var u = n.apply(null, o);
              u && r.push(u);
            }
          } else if (i === "object") {
            if (
              o.toString !== Object.prototype.toString &&
              !o.toString.toString().includes("[native code]")
            ) {
              r.push(o.toString());
              continue;
            }
            for (var s in o) t.call(o, s) && o[s] && r.push(s);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(Vc);
var hh = Vc.exports;
const Rl = ys(hh),
  mh = ["xxl", "xl", "lg", "md", "sm", "xs"],
  vh = "xs",
  bi = C.createContext({ prefixes: {}, breakpoints: mh, minBreakpoint: vh });
function eu(e, t) {
  const { prefixes: n } = C.useContext(bi);
  return e || n[t] || t;
}
function Wc() {
  const { breakpoints: e } = C.useContext(bi);
  return e;
}
function Hc() {
  const { minBreakpoint: e } = C.useContext(bi);
  return e;
}
function yh({ as: e, bsPrefix: t, className: n, ...r }) {
  t = eu(t, "col");
  const l = Wc(),
    o = Hc(),
    i = [],
    u = [];
  return (
    l.forEach((s) => {
      const a = r[s];
      delete r[s];
      let h, v, m;
      typeof a == "object" && a != null
        ? ({ span: h, offset: v, order: m } = a)
        : (h = a);
      const g = s !== o ? `-${s}` : "";
      h && i.push(h === !0 ? `${t}${g}` : `${t}${g}-${h}`),
        m != null && u.push(`order${g}-${m}`),
        v != null && u.push(`offset${g}-${v}`);
    }),
    [
      { ...r, className: Rl(n, ...i, ...u) },
      { as: e, bsPrefix: t, spans: i },
    ]
  );
}
const Qc = C.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: l = "div", bsPrefix: o, spans: i }] =
    yh(e);
  return p.jsx(l, { ...r, ref: t, className: Rl(n, !i.length && o) });
});
Qc.displayName = "Col";
const ze = Qc,
  Kc = C.forwardRef(
    ({ bsPrefix: e, fluid: t = !1, as: n = "div", className: r, ...l }, o) => {
      const i = eu(e, "container"),
        u = typeof t == "string" ? `-${t}` : "-fluid";
      return p.jsx(n, { ref: o, ...l, className: Rl(r, t ? `${i}${u}` : i) });
    }
  );
Kc.displayName = "Container";
const gh = Kc,
  Yc = C.forwardRef(({ bsPrefix: e, className: t, as: n = "div", ...r }, l) => {
    const o = eu(e, "row"),
      i = Wc(),
      u = Hc(),
      s = `${o}-cols`,
      a = [];
    return (
      i.forEach((h) => {
        const v = r[h];
        delete r[h];
        let m;
        v != null && typeof v == "object" ? ({ cols: m } = v) : (m = v);
        const g = h !== u ? `-${h}` : "";
        m != null && a.push(`${s}${g}-${m}`);
      }),
      p.jsx(n, { ref: l, ...r, className: Rl(t, o, ...a) })
    );
  });
Yc.displayName = "Row";
const wh = Yc,
  xh = "/assets/proy-1-tkbW3FHi.webp",
  Sh = "/assets/proy-2-FHVJFFyN.webp",
  kh = "/assets/proy-3-Xyym51tN.webp",
  Eh = "/assets/proy-4-3wanK3ot.webp",
  Nh = "/assets/proy-5-pZekphWe.webp",
  Ch = "/assets/logo-wvjWeUmf.png",
  _h = () => {
    const e = ii.useRef(null),
      t = (r) => {
        const l = Math.sign(r.deltaY);
        e.current.scrollLeft += l * 150;
      },
      n = (r) => {
        const l = r === "left" ? -150 : 150;
        e.current.scrollLeft += l;
      };
    return p.jsx(p.Fragment, {
      children: p.jsxs(gh, {
        fluid: !0,
        children: [
          p.jsxs("ul", {
            className:
              "col-md-12 d-flex justify-content-center align-items-stretch",
            children: [
              p.jsx("li", {
                children: p.jsx("a", { href: "#inicio", children: "INICIO" }),
              }),
              p.jsx("li", {
                children: p.jsx("a", {
                  href: "#portafolio",
                  children: "PRESENTACIÓN",
                }),
              }),
              p.jsx("li", {
                children: p.jsx("a", {
                  href: "#proyecto1",
                  children: "LANDING",
                }),
              }),
              p.jsx("li", {
                children: p.jsx("a", { href: "#proyecto2", children: "CRUD" }),
              }),
              p.jsx("li", {
                children: p.jsx("a", {
                  href: "#proyecto3",
                  children: "API REST",
                }),
              }),
              p.jsx("li", {
                children: p.jsx("a", {
                  href: "#proyecto4",
                  children: "RESTAURANT APP",
                }),
              }),
              p.jsx("li", {
                children: p.jsx("a", {
                  href: "#proyecto5",
                  children: "ECOMMERCE",
                }),
              }),
              p.jsx("li", {
                children: p.jsx("a", {
                  href: "#contacto",
                  children: "CONTACTO",
                }),
              }),
            ],
          }),
          p.jsxs(wh, {
            children: [
              p.jsx(ze, {
                md: 12,
                className: "m-0",
                id: "scroll-wrapper",
                children: p.jsxs("div", {
                  className:
                    "sliding-panels d-flex flex-row align-items-stretch",
                  id: "scroll-container",
                  ref: e,
                  onWheel: t,
                  children: [
                    p.jsx(ze, {
                      md: 12,
                      className: "panel-0 ml-13 me-5 h-100 ",
                      id: "inicio",
                      children: p.jsxs("div", {
                        className: "row ",
                        children: [
                          p.jsx("div", {
                            className: "col-md-4",
                            children: p.jsx("img", {
                              src: Ch,
                              className: "img-fluid",
                              alt: "",
                            }),
                          }),
                          p.jsxs("div", {
                            className:
                              "col-md-8 p-5 d-flex flex-column justify-content-center",
                            children: [
                              p.jsxs("h1", {
                                children: [
                                  "Hola, me llamo",
                                  p.jsx("br", {}),
                                  p.jsx("span", {
                                    className: "text-bold",
                                    children: "Alexander",
                                  }),
                                ],
                              }),
                              p.jsxs("h4", {
                                className: "txt-white-1",
                                children: [
                                  "Y soy ",
                                  p.jsx("span", {
                                    className: "bold2",
                                    children: "Desarrollador Web Full Stack",
                                  }),
                                  " ",
                                ],
                              }),
                              p.jsx("p", {
                                className: "text-p",
                                children:
                                  "Exploro la creatividad a través del diseño y desarrollo web. Mi portafolio refleja pasión, innovación y soluciones digitales impactantes.",
                              }),
                              p.jsx("div", { className: "" }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    p.jsx(ze, {
                      md: 12,
                      className: "panel-1 h-100 bg-1 ",
                      id: "portafolio",
                      children: p.jsx("div", {
                        className: "row",
                        children: p.jsxs("div", {
                          className: "col-md-12 p-5 text-start",
                          children: [
                            p.jsxs("h2", {
                              className: "mt-5",
                              children: [
                                p.jsx("span", {
                                  className: "text-bold",
                                  children: "Mi Portafolio",
                                }),
                                p.jsx("br", {}),
                                "Bootcamp UDD",
                              ],
                            }),
                            p.jsxs("p", {
                              className: "text-p",
                              children: [
                                "En el ",
                                p.jsx("span", {
                                  className: "bold",
                                  children: "Bootcamp",
                                }),
                                "  de la ",
                                p.jsx("span", {
                                  className: "bold",
                                  children: "Udd",
                                }),
                                " , adquirí habilidades clave en tecnologías líderes como ",
                                p.jsx("span", {
                                  className: "bold",
                                  children: "MongoDB",
                                }),
                                " para bases de datos, ",
                                p.jsx("span", {
                                  className: "bold",
                                  children: "Node JS",
                                }),
                                " para la creación de APIS, ",
                                p.jsx("span", {
                                  className: "bold",
                                  children: "ReactJS",
                                }),
                                " para construcción de interfaces,",
                                p.jsx("span", {
                                  className: "bold",
                                  children: "JavaScript",
                                }),
                                ", ",
                                p.jsx("span", {
                                  className: "bold",
                                  children: "CSS",
                                }),
                                " y ",
                                p.jsx("span", {
                                  className: "bold",
                                  children: "HTML5",
                                }),
                                " para diseño web. Además, aprendi el desarrollo de ",
                                p.jsx("span", {
                                  className: "bold",
                                  children: "API REST",
                                }),
                                "  utilizando JavaScript. Estas competencias sólidas me han preparado para abordar desafíos de desarrollo de manera integral y eficiente. ",
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    p.jsx(ze, {
                      md: 12,
                      className: "panel-2 h-100 ",
                      id: "proyecto1",
                      children: p.jsxs("div", {
                        className: "row",
                        children: [
                          p.jsx("div", {
                            className: "col g-0",
                            children: p.jsx("img", {
                              src: xh,
                              className: "img-fluid h-100",
                              alt: "...",
                            }),
                          }),
                          p.jsxs("div", {
                            className:
                              "col-md-8 g-0 p-5  d-flex flex-column justify-content-center",
                            children: [
                              p.jsx("span", {
                                className: "bold",
                                children: "Proyecto 1",
                              }),
                              p.jsx("h2", { children: "Landing" }),
                              p.jsxs("p", {
                                className: "text-p",
                                children: [
                                  "Objetivo del proyecto poder realizar una UI con ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: " HTML",
                                  }),
                                  " y ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "CSS",
                                  }),
                                  " , en este proyecto se tomo como referente la marca de audio ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "Harmand Kardom.",
                                  }),
                                  " ",
                                ],
                              }),
                              p.jsx("a", {
                                className: "btn-own",
                                href: "https://alexanderosses.github.io/LANDING-DE-NEGOCIO/",
                                role: "button",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Ver proyecto",
                              }),
                              p.jsx("a", {
                                className: "btn-img",
                                href: "https://www.credly.com/badges/88197608-ee6c-4aef-817c-cf1e40ae2f8f/public_url",
                                target: "_blank",
                                rel: "noreferrer",
                                children: p.jsx("img", {
                                  className: "credly",
                                  src: "https://alexanderosses.cl/img/INS-LANDING.webp",
                                  alt: "",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    p.jsx(ze, {
                      md: 12,
                      className: "panel-2 h-100 ",
                      id: "proyecto2",
                      children: p.jsxs("div", {
                        className: "row",
                        children: [
                          p.jsx("div", {
                            className: "col g-0",
                            children: p.jsx("img", {
                              src: Sh,
                              className: "img-fluid h-100",
                              alt: "...",
                            }),
                          }),
                          p.jsxs("div", {
                            className:
                              "col-md-8 g-0 p-5  d-flex flex-column justify-content-center",
                            children: [
                              p.jsx("span", {
                                className: "bold",
                                children: "Proyecto 2",
                              }),
                              p.jsx("h2", { children: "CRUD" }),
                              p.jsxs("p", {
                                className: "text-p",
                                children: [
                                  "En este proyecto se trabajo con ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "JS",
                                  }),
                                  " para realizar un ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "CRUD",
                                  }),
                                  " con ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "Local Storage",
                                  }),
                                  " ,",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "HTML5",
                                  }),
                                  "  y ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "CSS",
                                  }),
                                  ".",
                                ],
                              }),
                              p.jsx("a", {
                                className: "btn-own",
                                href: "https://alexanderosses.github.io/CRUD/",
                                role: "button",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Ver proyecto",
                              }),
                              p.jsx("a", {
                                className: "btn-img",
                                href: "https://www.credly.com/badges/1fbebfc8-0fa8-48f0-b1cc-374e181c2857/public_url",
                                target: "_blank",
                                rel: "noreferrer",
                                children: p.jsx("img", {
                                  className: "credly",
                                  src: "https://alexanderosses.cl/img/INS-CRUD.webp",
                                  alt: "",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    p.jsx(ze, {
                      md: 12,
                      className: "panel-2 h-100 ",
                      id: "proyecto3",
                      children: p.jsxs("div", {
                        className: "row",
                        children: [
                          p.jsx("div", {
                            className: "col g-0",
                            children: p.jsx("img", {
                              src: kh,
                              className: "img-fluid h-100",
                              alt: "...",
                            }),
                          }),
                          p.jsxs("div", {
                            className:
                              "col-md-8 g-0 p-5  d-flex flex-column justify-content-center",
                            children: [
                              p.jsx("span", {
                                className: "bold",
                                children: "Proyecto 3",
                              }),
                              p.jsx("h2", { children: "API REST" }),
                              p.jsxs("p", {
                                className: "text-p",
                                children: [
                                  "En este proyecto, establecimos una conexión con una ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "API REST",
                                  }),
                                  " para extraer datos y los presentamos mediante una interfaz de usuario creada con ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "HTML5",
                                  }),
                                  ", ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "JavaSCript",
                                  }),
                                  " y ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "CSS",
                                  }),
                                  " .",
                                ],
                              }),
                              p.jsx("a", {
                                className: "btn-own",
                                href: "https://alexanderosses.github.io/TABLERO-DE-DATOS/",
                                role: "button",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Ver proyecto",
                              }),
                              p.jsx("a", {
                                className: "btn-img",
                                href: "https://www.credly.com/badges/0d89b004-e000-4c61-95b3-4701ac1806c8/public_url",
                                target: "_blank",
                                rel: "noreferrer",
                                children: p.jsx("img", {
                                  className: "credly",
                                  src: "https://alexanderosses.cl/img/INS-API.webp",
                                  alt: "",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    p.jsx(ze, {
                      md: 12,
                      className: "panel-2 h-100 ",
                      id: "proyecto4",
                      children: p.jsxs("div", {
                        className: "row",
                        children: [
                          p.jsx("div", {
                            className: "col g-0",
                            children: p.jsx("img", {
                              src: Eh,
                              className: "img-fluid h-100",
                              alt: "...",
                            }),
                          }),
                          p.jsxs("div", {
                            className:
                              "col-md-8 g-0 p-5  d-flex flex-column justify-content-center",
                            children: [
                              p.jsx("span", {
                                className: "bold",
                                children: "Proyecto 4",
                              }),
                              p.jsx("h2", { children: "Restaurant APP" }),
                              p.jsxs("p", {
                                className: "text-p",
                                children: [
                                  "En este proyecto, se empleó ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "JavaScript",
                                  }),
                                  " para la lógica, modularización mediante componentes con ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "ReactJS",
                                  }),
                                  ", integración del framework ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "React Bootstrap",
                                  }),
                                  ", manipulación de datos ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "JSON",
                                  }),
                                  ", y diseño con ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "HTML",
                                  }),
                                  "  y ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "CSS",
                                  }),
                                  ".",
                                ],
                              }),
                              p.jsx("a", {
                                className: "btn-own",
                                href: "https://alexanderosses.github.io/RESTAURANTE-APP/",
                                role: "button",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Ver proyecto",
                              }),
                              p.jsx("a", {
                                className: "btn-img",
                                href: "https://www.credly.com/badges/a1de7a1e-e249-4a92-927e-72310fe0af37/public_url",
                                target: "_blank",
                                rel: "noreferrer",
                                children: p.jsx("img", {
                                  className: "credly",
                                  src: "https://alexanderosses.cl/img/INS-REACT-JS.webp",
                                  alt: "",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    p.jsx(ze, {
                      md: 12,
                      className: "panel-2 h-100 ",
                      id: "proyecto5",
                      children: p.jsxs("div", {
                        className: "row",
                        children: [
                          p.jsx(ze, {
                            md: 4,
                            className: "g-0",
                            children: p.jsx("img", {
                              src: Nh,
                              className: "img-fluid h-100",
                              alt: "...",
                            }),
                          }),
                          p.jsxs(ze, {
                            md: 8,
                            className:
                              "g-0 p-5  d-flex flex-column justify-content-center",
                            children: [
                              p.jsx("span", {
                                className: "bold",
                                children: "Proyecto 5",
                              }),
                              p.jsx("h2", { children: "Ecommerce" }),
                              p.jsxs("p", {
                                className: "text-p",
                                children: [
                                  "En en el proyecto, se utilizaron tecnologías como ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "JavaScript",
                                  }),
                                  ", ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "React JS",
                                  }),
                                  ", ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "React Bootstrap",
                                  }),
                                  ", ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "MongoDB",
                                  }),
                                  ", Render y ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "Node JS",
                                  }),
                                  " para el frontend y backend. Además, se integro ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "MercadoPago",
                                  }),
                                  " y se utilizó ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "HTML",
                                  }),
                                  " y ",
                                  p.jsx("span", {
                                    className: "bold",
                                    children: "CSS",
                                  }),
                                  " para la estructura y estilo.",
                                ],
                              }),
                              p.jsx("a", {
                                className: "btn-own",
                                href: "https://alexanderosses.github.io/TIENDA-EN-LINEA/",
                                role: "button",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Ver proyecto",
                              }),
                              p.jsx("a", {
                                className: "btn-img",
                                href: "https://www.credly.com/badges/a1de7a1e-e249-4a92-927e-72310fe0af37/public_url",
                                target: "_blank",
                                rel: "noreferrer",
                                children: p.jsx("img", {
                                  className: "credly",
                                  src: "https://alexanderosses.cl/img/INS-REACT-JS.webp",
                                  alt: "",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    p.jsxs(ze, {
                      md: 12,
                      className: "panel-1 contact-panel bg-1 mr-13 p-5 ",
                      id: "contacto",
                      children: [
                        p.jsx("h2", { children: "Contacto" }),
                        p.jsx("p", {
                          className: "text-p",
                          children:
                            "Hola! Conéctate conmigo en LinkedIn para discutir oportunidades profesionales o revisa mi trabajo en GitHub. ¡Espero tu mensaje en cualquiera de estas plataformas para colaboraciones o intercambiar ideas!.",
                        }),
                        p.jsxs("div", {
                          className: "social-icons",
                          children: [
                            p.jsx("p", {
                              className: "text-p",
                              children: p.jsxs("a", {
                                className: "icon-rrss",
                                href: "https://github.com/Alexanderosses",
                                target: "_blank",
                                rel: "noreferrer",
                                children: [
                                  p.jsx("svg", {
                                    className: "icon-rrss",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    children: p.jsx("path", {
                                      d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z",
                                    }),
                                  }),
                                  " GitHub",
                                ],
                              }),
                            }),
                            p.jsx("p", {
                              className: "text-p",
                              children: p.jsxs("a", {
                                className: "icon-rrss",
                                href: "https://www.linkedin.com/in/alexanderosses/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: [
                                  p.jsx("svg", {
                                    className: "icon-rrss",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    children: p.jsx("path", {
                                      d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z",
                                    }),
                                  }),
                                  " LinkedIn",
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              p.jsxs("div", {
                className: "arrow-buttons-container",
                children: [
                  p.jsx("button", {
                    className: "arrow-button left",
                    onClick: () => n("left"),
                    children: p.jsx("svg", {
                      className: "arrowGo",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "32",
                      height: "32",
                      viewBox: "0 0 24 24",
                      children: p.jsx("path", {
                        d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z",
                      }),
                    }),
                  }),
                  p.jsx("button", {
                    className: "arrow-button right",
                    onClick: () => n("right"),
                    children: p.jsx("svg", {
                      className: "arrowGo",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "32",
                      height: "32",
                      viewBox: "0 0 24 24",
                      children: p.jsx("path", {
                        d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  jh = kp.createRoot(document.getElementById("root"));
jh.render(
  p.jsx(ph, {
    basename: "/",
    children: p.jsx(ii.StrictMode, {
      children: p.jsxs(fh, {
        children: [
          p.jsx(ei, { path: "*", element: p.jsx(_h, {}) }),
          p.jsx(ei, { path: "/*", element: p.jsx(ah, { to: "/" }) }),
        ],
      }),
    }),
  })
);