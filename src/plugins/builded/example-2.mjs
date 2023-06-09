function Yt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let r = 0; r < s.length; r++)
    n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const T = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ft = () => {
}, Qt = /^on[^a-z]/, Xt = (e) => Qt.test(e), R = Object.assign, Zt = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, kt = Object.prototype.hasOwnProperty, m = (e, t) => kt.call(e, t), h = Array.isArray, K = (e) => we(e) === "[object Map]", pt = (e) => we(e) === "[object Set]", E = (e) => typeof e == "function", y = (e) => typeof e == "string", ve = (e) => typeof e == "symbol", w = (e) => e !== null && typeof e == "object", en = (e) => w(e) && E(e.then) && E(e.catch), dt = Object.prototype.toString, we = (e) => dt.call(e), ht = (e) => we(e).slice(8, -1), _t = (e) => we(e) === "[object Object]", Me = (e) => y(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, tn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, nn = tn(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
), he = (e, t) => !Object.is(e, t), rn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let Le;
const xe = () => Le || (Le = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Fe(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = y(s) ? ln(s) : Fe(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else {
    if (y(e))
      return e;
    if (w(e))
      return e;
  }
}
const sn = /;(?![^(]*\))/g, on = /:([^]+)/, cn = /\/\*[^]*?\*\//g;
function ln(e) {
  const t = {};
  return e.replace(cn, "").split(sn).forEach((n) => {
    if (n) {
      const s = n.split(on);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Ae(e) {
  let t = "";
  if (y(e))
    t = e;
  else if (h(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ae(e[n]);
      s && (t += s + " ");
    }
  else if (w(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const un = (e) => y(e) ? e : e == null ? "" : h(e) || w(e) && (e.toString === dt || !E(e.toString)) ? JSON.stringify(e, gt, 2) : String(e), gt = (e, t) => t && t.__v_isRef ? gt(e, t.value) : K(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {})
} : pt(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : w(t) && !h(t) && !_t(t) ? String(t) : t;
function Ye(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let mt;
function an(e, t = mt) {
  t && t.active && t.effects.push(e);
}
function fn() {
  return mt;
}
const Ve = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Et = (e) => (e.w & A) > 0, wt = (e) => (e.n & A) > 0, pn = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= A;
}, dn = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      Et(r) && !wt(r) ? r.delete(e) : t[n++] = r, r.w &= ~A, r.n &= ~A;
    }
    t.length = n;
  }
}, Ie = /* @__PURE__ */ new WeakMap();
let k = 0, A = 1;
const Re = 30;
let O;
const H = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), De = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class hn {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, an(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = O, n = U;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = O, O = this, U = !0, A = 1 << ++k, k <= Re ? pn(this) : Qe(this), this.fn();
    } finally {
      k <= Re && dn(this), A = 1 << --k, O = this.parent, U = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    O === this ? this.deferStop = !0 : this.active && (Qe(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Qe(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let U = !0;
const Nt = [];
function bt() {
  Nt.push(U), U = !1;
}
function Ot() {
  const e = Nt.pop();
  U = e === void 0 ? !0 : e;
}
function x(e, t, n) {
  if (U && O) {
    let s = Ie.get(e);
    s || Ie.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = Ve());
    const o = process.env.NODE_ENV !== "production" ? { effect: O, target: e, type: t, key: n } : void 0;
    _n(r, o);
  }
}
function _n(e, t) {
  let n = !1;
  k <= Re ? wt(e) || (e.n |= A, n = !Et(e)) : n = !e.has(O), n && (e.add(O), O.deps.push(e), process.env.NODE_ENV !== "production" && O.onTrack && O.onTrack(
    R(
      {
        effect: O
      },
      t
    )
  ));
}
function j(e, t, n, s, r, o) {
  const i = Ie.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && h(e)) {
    const a = Number(s);
    i.forEach((d, l) => {
      (l === "length" || l >= a) && c.push(d);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        h(e) ? Me(n) && c.push(i.get("length")) : (c.push(i.get(H)), K(e) && c.push(i.get(De)));
        break;
      case "delete":
        h(e) || (c.push(i.get(H)), K(e) && c.push(i.get(De)));
        break;
      case "set":
        K(e) && c.push(i.get(H));
        break;
    }
  const u = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: s, oldValue: r, oldTarget: o } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? oe(c[0], u) : oe(c[0]));
  else {
    const a = [];
    for (const d of c)
      d && a.push(...d);
    process.env.NODE_ENV !== "production" ? oe(Ve(a), u) : oe(Ve(a));
  }
}
function oe(e, t) {
  const n = h(e) ? e : [...e];
  for (const s of n)
    s.computed && Xe(s, t);
  for (const s of n)
    s.computed || Xe(s, t);
}
function Xe(e, t) {
  (e !== O || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(R({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const gn = /* @__PURE__ */ Yt("__proto__,__v_isRef,__isVue"), St = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ve)
), mn = /* @__PURE__ */ je(), En = /* @__PURE__ */ je(!0), wn = /* @__PURE__ */ je(!0, !0), Ze = /* @__PURE__ */ Nn();
function Nn() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = p(this);
      for (let o = 0, i = this.length; o < i; o++)
        x(s, "get", o + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(p)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      bt();
      const s = p(this)[t].apply(this, n);
      return Ot(), s;
    };
  }), e;
}
function bn(e) {
  const t = p(this);
  return x(t, "has", e), t.hasOwnProperty(e);
}
function je(e = !1, t = !1) {
  return function(s, r, o) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && o === (e ? t ? Dt : Rt : t ? An : It).get(s))
      return s;
    const i = h(s);
    if (!e) {
      if (i && m(Ze, r))
        return Reflect.get(Ze, r, o);
      if (r === "hasOwnProperty")
        return bn;
    }
    const c = Reflect.get(s, r, o);
    return (ve(r) ? St.has(r) : gn(r)) || (e || x(s, "get", r), t) ? c : S(c) ? i && Me(r) ? c : c.value : w(c) ? e ? Ct(c) : yt(c) : c;
  };
}
const On = /* @__PURE__ */ Sn();
function Sn(e = !1) {
  return function(n, s, r, o) {
    let i = n[s];
    if (B(i) && S(i) && !S(r))
      return !1;
    if (!e && (!ye(r) && !B(r) && (i = p(i), r = p(r)), !h(n) && S(i) && !S(r)))
      return i.value = r, !0;
    const c = h(n) && Me(s) ? Number(s) < n.length : m(n, s), u = Reflect.set(n, s, r, o);
    return n === p(o) && (c ? he(r, i) && j(n, "set", s, r, i) : j(n, "add", s, r)), u;
  };
}
function xn(e, t) {
  const n = m(e, t), s = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && j(e, "delete", t, void 0, s), r;
}
function Vn(e, t) {
  const n = Reflect.has(e, t);
  return (!ve(t) || !St.has(t)) && x(e, "has", t), n;
}
function In(e) {
  return x(e, "iterate", h(e) ? "length" : H), Reflect.ownKeys(e);
}
const Rn = {
  get: mn,
  set: On,
  deleteProperty: xn,
  has: Vn,
  ownKeys: In
}, xt = {
  get: En,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && Ye(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && Ye(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  }
}, Dn = /* @__PURE__ */ R(
  {},
  xt,
  {
    get: wn
  }
), ze = (e) => e, Ne = (e) => Reflect.getPrototypeOf(e);
function ie(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = p(e), o = p(t);
  n || (t !== o && x(r, "get", t), x(r, "get", o));
  const { has: i } = Ne(r), c = s ? ze : n ? We : Ue;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, o))
    return c(e.get(o));
  e !== r && e.get(t);
}
function ce(e, t = !1) {
  const n = this.__v_raw, s = p(n), r = p(e);
  return t || (e !== r && x(s, "has", e), x(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function le(e, t = !1) {
  return e = e.__v_raw, !t && x(p(e), "iterate", H), Reflect.get(e, "size", e);
}
function ke(e) {
  e = p(e);
  const t = p(this);
  return Ne(t).has.call(t, e) || (t.add(e), j(t, "add", e, e)), this;
}
function et(e, t) {
  t = p(t);
  const n = p(this), { has: s, get: r } = Ne(n);
  let o = s.call(n, e);
  o ? process.env.NODE_ENV !== "production" && Vt(n, s, e) : (e = p(e), o = s.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), o ? he(t, i) && j(n, "set", e, t, i) : j(n, "add", e, t), this;
}
function tt(e) {
  const t = p(this), { has: n, get: s } = Ne(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && Vt(t, n, e) : (e = p(e), r = n.call(t, e));
  const o = s ? s.call(t, e) : void 0, i = t.delete(e);
  return r && j(t, "delete", e, void 0, o), i;
}
function nt() {
  const e = p(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? K(e) ? new Map(e) : new Set(e) : void 0, s = e.clear();
  return t && j(e, "clear", void 0, void 0, n), s;
}
function ue(e, t) {
  return function(s, r) {
    const o = this, i = o.__v_raw, c = p(i), u = t ? ze : e ? We : Ue;
    return !e && x(c, "iterate", H), i.forEach((a, d) => s.call(r, u(a), u(d), o));
  };
}
function ae(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = p(r), i = K(o), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = r[e](...s), d = n ? ze : t ? We : Ue;
    return !t && x(
      o,
      "iterate",
      u ? De : H
    ), {
      // iterator protocol
      next() {
        const { value: l, done: f } = a.next();
        return f ? { value: l, done: f } : {
          value: c ? [d(l[0]), d(l[1])] : d(l),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function P(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${nn(e)} operation ${n}failed: target is readonly.`,
        p(this)
      );
    }
    return e === "delete" ? !1 : this;
  };
}
function yn() {
  const e = {
    get(o) {
      return ie(this, o);
    },
    get size() {
      return le(this);
    },
    has: ce,
    add: ke,
    set: et,
    delete: tt,
    clear: nt,
    forEach: ue(!1, !1)
  }, t = {
    get(o) {
      return ie(this, o, !1, !0);
    },
    get size() {
      return le(this);
    },
    has: ce,
    add: ke,
    set: et,
    delete: tt,
    clear: nt,
    forEach: ue(!1, !0)
  }, n = {
    get(o) {
      return ie(this, o, !0);
    },
    get size() {
      return le(this, !0);
    },
    has(o) {
      return ce.call(this, o, !0);
    },
    add: P("add"),
    set: P("set"),
    delete: P("delete"),
    clear: P("clear"),
    forEach: ue(!0, !1)
  }, s = {
    get(o) {
      return ie(this, o, !0, !0);
    },
    get size() {
      return le(this, !0);
    },
    has(o) {
      return ce.call(this, o, !0);
    },
    add: P("add"),
    set: P("set"),
    delete: P("delete"),
    clear: P("clear"),
    forEach: ue(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = ae(
      o,
      !1,
      !1
    ), n[o] = ae(
      o,
      !0,
      !1
    ), t[o] = ae(
      o,
      !1,
      !0
    ), s[o] = ae(
      o,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    s
  ];
}
const [
  Cn,
  $n,
  Tn,
  Pn
] = /* @__PURE__ */ yn();
function Ke(e, t) {
  const n = t ? e ? Pn : Tn : e ? $n : Cn;
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    m(n, r) && r in s ? n : s,
    r,
    o
  );
}
const vn = {
  get: /* @__PURE__ */ Ke(!1, !1)
}, Mn = {
  get: /* @__PURE__ */ Ke(!0, !1)
}, Fn = {
  get: /* @__PURE__ */ Ke(!0, !0)
};
function Vt(e, t, n) {
  const s = p(n);
  if (s !== n && t.call(e, s)) {
    const r = ht(e);
    console.warn(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const It = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), Dt = /* @__PURE__ */ new WeakMap();
function jn(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function zn(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : jn(ht(e));
}
function yt(e) {
  return B(e) ? e : He(
    e,
    !1,
    Rn,
    vn,
    It
  );
}
function Ct(e) {
  return He(
    e,
    !0,
    xt,
    Mn,
    Rt
  );
}
function fe(e) {
  return He(
    e,
    !0,
    Dn,
    Fn,
    Dt
  );
}
function He(e, t, n, s, r) {
  if (!w(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = zn(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? s : n
  );
  return r.set(e, c), c;
}
function W(e) {
  return B(e) ? W(e.__v_raw) : !!(e && e.__v_isReactive);
}
function B(e) {
  return !!(e && e.__v_isReadonly);
}
function ye(e) {
  return !!(e && e.__v_isShallow);
}
function Ce(e) {
  return W(e) || B(e);
}
function p(e) {
  const t = e && e.__v_raw;
  return t ? p(t) : e;
}
function Kn(e) {
  return rn(e, "__v_skip", !0), e;
}
const Ue = (e) => w(e) ? yt(e) : e, We = (e) => w(e) ? Ct(e) : e;
function S(e) {
  return !!(e && e.__v_isRef === !0);
}
function Hn(e) {
  return S(e) ? e.value : e;
}
const Un = {
  get: (e, t, n) => Hn(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return S(r) && !S(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Wn(e) {
  return W(e) ? e : new Proxy(e, Un);
}
const J = [];
function Jn(e) {
  J.push(e);
}
function qn() {
  J.pop();
}
function b(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  bt();
  const n = J.length ? J[J.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = Bn();
  if (s)
    q(
      s,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        r.map(
          ({ vnode: o }) => `at <${qt(n, o.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    r.length && o.push(`
`, ...Gn(r)), console.warn(...o);
  }
  Ot();
}
function Bn() {
  let e = J[J.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Gn(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Ln(n));
  }), t;
}
function Ln({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${qt(
    e.component,
    e.type,
    s
  )}`, o = ">" + n;
  return e.props ? [r, ...Yn(e.props), o] : [r + o];
}
function Yn(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...$t(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function $t(e, t, n) {
  return y(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : S(t) ? (t = $t(e, p(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : E(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = p(t), n ? t : [`${e}=`, t]);
}
const Tt = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function q(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    Pt(o, t, n);
  }
  return r;
}
function $e(e, t, n, s) {
  if (E(e)) {
    const o = q(e, t, n, s);
    return o && en(o) && o.catch((i) => {
      Pt(i, t, n);
    }), o;
  }
  const r = [];
  for (let o = 0; o < e.length; o++)
    r.push($e(e[o], t, n, s));
  return r;
}
function Pt(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? Tt[n] : n;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let d = 0; d < a.length; d++)
          if (a[d](e, i, c) === !1)
            return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      q(
        u,
        null,
        10,
        [e, i, c]
      );
      return;
    }
  }
  Qn(e, n, r, s);
}
function Qn(e, t, n, s = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = Tt[t];
    if (n && Jn(n), b(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && qn(), s)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let _e = !1, Te = !1;
const C = [];
let M = 0;
const Q = [];
let $ = null, v = 0;
const vt = /* @__PURE__ */ Promise.resolve();
let Je = null;
const Xn = 100;
function Zn(e) {
  const t = Je || vt;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function kn(e) {
  let t = M + 1, n = C.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    re(C[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function qe(e) {
  (!C.length || !C.includes(
    e,
    _e && e.allowRecurse ? M + 1 : M
  )) && (e.id == null ? C.push(e) : C.splice(kn(e.id), 0, e), Mt());
}
function Mt() {
  !_e && !Te && (Te = !0, Je = vt.then(At));
}
function Ft(e) {
  h(e) ? Q.push(...e) : (!$ || !$.includes(
    e,
    e.allowRecurse ? v + 1 : v
  )) && Q.push(e), Mt();
}
function er(e) {
  if (Q.length) {
    const t = [...new Set(Q)];
    if (Q.length = 0, $) {
      $.push(...t);
      return;
    }
    for ($ = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), $.sort((n, s) => re(n) - re(s)), v = 0; v < $.length; v++)
      process.env.NODE_ENV !== "production" && jt(e, $[v]) || $[v]();
    $ = null, v = 0;
  }
}
const re = (e) => e.id == null ? 1 / 0 : e.id, tr = (e, t) => {
  const n = re(e) - re(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function At(e) {
  Te = !1, _e = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), C.sort(tr);
  const t = process.env.NODE_ENV !== "production" ? (n) => jt(e, n) : ft;
  try {
    for (M = 0; M < C.length; M++) {
      const n = C[M];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        q(n, null, 14);
      }
    }
  } finally {
    M = 0, C.length = 0, er(e), _e = !1, Je = null, (C.length || Q.length) && At(e);
  }
}
function jt(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Xn) {
      const s = t.ownerInstance, r = s && Jt(s.type);
      return b(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const Z = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (xe().__VUE_HMR_RUNTIME__ = {
  createRecord: be(nr),
  rerender: be(rr),
  reload: be(sr)
});
const ge = /* @__PURE__ */ new Map();
function nr(e, t) {
  return ge.has(e) ? !1 : (ge.set(e, {
    initialDef: te(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function te(e) {
  return Bt(e) ? e.__vccOpts : e;
}
function rr(e, t) {
  const n = ge.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, te(s.type).render = t), s.renderCache = [], s.update();
  }));
}
function sr(e, t) {
  const n = ge.get(e);
  if (!n)
    return;
  t = te(t), rt(n.initialDef, t);
  const s = [...n.instances];
  for (const r of s) {
    const o = te(r.type);
    Z.has(o) || (o !== n.initialDef && rt(o, t), Z.add(o)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (Z.add(o), r.ceReload(t.styles), Z.delete(o)) : r.parent ? qe(r.parent.update) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Ft(() => {
    for (const r of s)
      Z.delete(
        te(r.type)
      );
  });
}
function rt(e, t) {
  R(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function be(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let F = null, or = null;
const ir = (e) => e.__isSuspense;
function cr(e, t) {
  t && t.pendingBranch ? h(e) ? t.effects.push(...e) : t.effects.push(e) : Ft(e);
}
const pe = {};
function lr(e, t, { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = T) {
  var c;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && b(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && b(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = (g) => {
    b(
      "Invalid watch source: ",
      g,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, a = fn() === ((c = X) == null ? void 0 : c.scope) ? X : null;
  let d, l = !1, f = !1;
  if (S(e) ? (d = () => e.value, l = ye(e)) : W(e) ? (d = () => e, s = !0) : h(e) ? (f = !0, l = e.some((g) => W(g) || ye(g)), d = () => e.map((g) => {
    if (S(g))
      return g.value;
    if (W(g))
      return L(g);
    if (E(g))
      return q(g, a, 2);
    process.env.NODE_ENV !== "production" && u(g);
  })) : E(e) ? t ? d = () => q(e, a, 2) : d = () => {
    if (!(a && a.isUnmounted))
      return _ && _(), $e(
        e,
        a,
        3,
        [V]
      );
  } : (d = ft, process.env.NODE_ENV !== "production" && u(e)), t && s) {
    const g = d;
    d = () => L(g());
  }
  let _, V = (g) => {
    _ = D.onStop = () => {
      q(g, a, 4);
    };
  }, I = f ? new Array(e.length).fill(pe) : pe;
  const z = () => {
    if (D.active)
      if (t) {
        const g = D.run();
        (s || l || (f ? g.some(
          (Gt, Lt) => he(Gt, I[Lt])
        ) : he(g, I))) && (_ && _(), $e(t, a, 3, [
          g,
          // pass undefined as the old value when it's changed for the first time
          I === pe ? void 0 : f && I[0] === pe ? [] : I,
          V
        ]), I = g);
      } else
        D.run();
  };
  z.allowRecurse = !!t;
  let se;
  r === "sync" ? se = z : r === "post" ? se = () => lt(z, a && a.suspense) : (z.pre = !0, a && (z.id = a.uid), se = () => qe(z));
  const D = new hn(d, se);
  return process.env.NODE_ENV !== "production" && (D.onTrack = o, D.onTrigger = i), t ? n ? z() : I = D.run() : r === "post" ? lt(
    D.run.bind(D),
    a && a.suspense
  ) : D.run(), () => {
    D.stop(), a && a.scope && Zt(a.scope.effects, D);
  };
}
function ur(e, t, n) {
  const s = this.proxy, r = y(e) ? e.includes(".") ? ar(s, e) : () => s[e] : e.bind(s, s);
  let o;
  E(t) ? o = t : (o = t.handler, n = t);
  const i = X;
  at(this);
  const c = lr(r, o.bind(s), n);
  return i ? at(i) : yr(), c;
}
function ar(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function L(e, t) {
  if (!w(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), S(e))
    L(e.value, t);
  else if (h(e))
    for (let n = 0; n < e.length; n++)
      L(e[n], t);
  else if (pt(e) || K(e))
    e.forEach((n) => {
      L(n, t);
    });
  else if (_t(e))
    for (const n in e)
      L(e[n], t);
  return e;
}
function fr(e, t) {
  return E(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => R({ name: e.name }, t, { setup: e }))()
  ) : e;
}
const pr = Symbol.for("v-ndc"), Pe = (e) => e ? Cr(e) ? $r(e) || e.proxy : Pe(e.parent) : null, ne = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ R(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? fe(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? fe(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? fe(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? fe(e.refs) : e.refs,
    $parent: (e) => Pe(e.parent),
    $root: (e) => Pe(e.root),
    $emit: (e) => e.emit,
    $options: (e) => _r(e),
    $forceUpdate: (e) => e.f || (e.f = () => qe(e.update)),
    $nextTick: (e) => e.n || (e.n = Zn.bind(e.proxy)),
    $watch: (e) => ur.bind(e)
  })
), dr = (e) => e === "_" || e === "$", Oe = (e, t) => e !== T && !e.__isScriptSetup && m(e, t), hr = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: c, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const _ = i[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Oe(s, t))
          return i[t] = 1, s[t];
        if (r !== T && m(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && m(a, t)
        )
          return i[t] = 3, o[t];
        if (n !== T && m(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const d = ne[t];
    let l, f;
    if (d)
      return t === "$attrs" ? (x(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && x(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (l = c.__cssModules) && (l = l[t])
    )
      return l;
    if (n !== T && m(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      f = u.config.globalProperties, m(f, t)
    )
      return f[t];
    process.env.NODE_ENV !== "production" && F && (!y(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== T && dr(t[0]) && m(r, t) ? b(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === F && b(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return Oe(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && m(r, t) ? (b(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== T && m(s, t) ? (s[t] = n, !0) : m(e.props, t) ? (process.env.NODE_ENV !== "production" && b(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && b(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o }
  }, i) {
    let c;
    return !!n[i] || e !== T && m(e, i) || Oe(t, i) || (c = o[0]) && m(c, i) || m(s, i) || m(ne, i) || m(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : m(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (hr.ownKeys = (e) => (b(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function st(e) {
  return h(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function _r(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = o.get(t);
  let u;
  return c ? u = c : !r.length && !n && !s ? u = t : (u = {}, r.length && r.forEach(
    (a) => me(u, a, i, !0)
  ), me(u, t, i)), w(t) && o.set(t, u), u;
}
function me(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && me(e, o, n, !0), r && r.forEach(
    (i) => me(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      process.env.NODE_ENV !== "production" && b(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = gr[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const gr = {
  data: ot,
  props: ct,
  emits: ct,
  // objects
  methods: ee,
  computed: ee,
  // lifecycle
  beforeCreate: N,
  created: N,
  beforeMount: N,
  mounted: N,
  beforeUpdate: N,
  updated: N,
  beforeDestroy: N,
  beforeUnmount: N,
  destroyed: N,
  unmounted: N,
  activated: N,
  deactivated: N,
  errorCaptured: N,
  serverPrefetch: N,
  // assets
  components: ee,
  directives: ee,
  // watch
  watch: Er,
  // provide / inject
  provide: ot,
  inject: mr
};
function ot(e, t) {
  return t ? e ? function() {
    return R(
      E(e) ? e.call(this, this) : e,
      E(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function mr(e, t) {
  return ee(it(e), it(t));
}
function it(e) {
  if (h(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function N(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ee(e, t) {
  return e ? R(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ct(e, t) {
  return e ? h(e) && h(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : R(
    /* @__PURE__ */ Object.create(null),
    st(e),
    st(t ?? {})
  ) : t;
}
function Er(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = R(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = N(e[s], t[s]);
  return n;
}
const lt = cr, wr = (e) => e.__isTeleport, zt = Symbol.for("v-fgt"), Nr = Symbol.for("v-txt"), br = Symbol.for("v-cmt");
let Y = null;
function Or(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Sr = (...e) => Ut(
  ...e
), Kt = "__vInternal", Ht = ({ key: e }) => e ?? null, de = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? y(e) || S(e) || E(e) ? { i: F, r: e, k: t, f: !!n } : e : null);
function xr(e, t = null, n = null, s = 0, r = null, o = e === zt ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ht(t),
    ref: t && de(t),
    scopeId: or,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: F
  };
  return c ? (Be(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= y(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && b("VNode created with invalid key (NaN). VNode type:", u.type), // avoid a block node from tracking itself
  !i && // has current parent block
  Y && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && Y.push(u), u;
}
const Vr = process.env.NODE_ENV !== "production" ? Sr : Ut;
function Ut(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === pr) && (process.env.NODE_ENV !== "production" && !e && b(`Invalid vnode type when creating vnode: ${e}.`), e = br), Or(e)) {
    const c = Ee(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Be(c, n), !o && Y && (c.shapeFlag & 6 ? Y[Y.indexOf(e)] = c : Y.push(c)), c.patchFlag |= -2, c;
  }
  if (Bt(e) && (e = e.__vccOpts), t) {
    t = Ir(t);
    let { class: c, style: u } = t;
    c && !y(c) && (t.class = Ae(c)), w(u) && (Ce(u) && !h(u) && (u = R({}, u)), t.style = Fe(u));
  }
  const i = y(e) ? 1 : ir(e) ? 128 : wr(e) ? 64 : w(e) ? 4 : E(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Ce(e) && (e = p(e), b(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), xr(
    e,
    t,
    n,
    s,
    r,
    i,
    o,
    !0
  );
}
function Ir(e) {
  return e ? Ce(e) || Kt in e ? R({}, e) : e : null;
}
function Ee(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e, c = t ? Dr(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Ht(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? h(r) ? r.concat(de(t)) : [r, de(t)] : de(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && o === -1 && h(i) ? i.map(Wt) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== zt ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ee(e.ssContent),
    ssFallback: e.ssFallback && Ee(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Wt(e) {
  const t = Ee(e);
  return h(e.children) && (t.children = e.children.map(Wt)), t;
}
function Rr(e = " ", t = 0) {
  return Vr(Nr, null, e, t);
}
function Be(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (h(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Be(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Kt in t) ? t._ctx = F : r === 3 && F && (F.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    E(t) ? (t = { default: t, _ctx: F }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Rr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Dr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Ae([t.class, s.class]));
      else if (r === "style")
        t.style = Fe([t.style, s.style]);
      else if (Xt(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(h(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
let X = null, Ge, G, ut = "__VUE_INSTANCE_SETTERS__";
(G = xe()[ut]) || (G = xe()[ut] = []), G.push((e) => X = e), Ge = (e) => {
  G.length > 1 ? G.forEach((t) => t(e)) : G[0](e);
};
const at = (e) => {
  Ge(e), e.scope.on();
}, yr = () => {
  X && X.scope.off(), Ge(null);
};
function Cr(e) {
  return e.vnode.shapeFlag & 4;
}
function $r(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Wn(Kn(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ne)
          return ne[n](e);
      },
      has(t, n) {
        return n in t || n in ne;
      }
    }));
}
const Tr = /(?:^|[-_])(\w)/g, Pr = (e) => e.replace(Tr, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Jt(e, t = !0) {
  return E(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function qt(e, t, n = !1) {
  let s = Jt(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    s = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return s ? Pr(s) : n ? "App" : "Anonymous";
}
function Bt(e) {
  return E(e) && "__vccOpts" in e;
}
function Se(e) {
  return !!(e && e.__v_isShallow);
}
function vr() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, s = { style: "color:#9d288c" }, r = {
    header(l) {
      return w(l) ? l.__isVue ? ["div", e, "VueInstance"] : S(l) ? [
        "div",
        {},
        ["span", e, d(l)],
        "<",
        c(l.value),
        ">"
      ] : W(l) ? [
        "div",
        {},
        ["span", e, Se(l) ? "ShallowReactive" : "Reactive"],
        "<",
        c(l),
        `>${B(l) ? " (readonly)" : ""}`
      ] : B(l) ? [
        "div",
        {},
        ["span", e, Se(l) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(l),
        ">"
      ] : null : null;
    },
    hasBody(l) {
      return l && l.__isVue;
    },
    body(l) {
      if (l && l.__isVue)
        return [
          "div",
          {},
          ...o(l.$)
        ];
    }
  };
  function o(l) {
    const f = [];
    l.type.props && l.props && f.push(i("props", p(l.props))), l.setupState !== T && f.push(i("setup", l.setupState)), l.data !== T && f.push(i("data", p(l.data)));
    const _ = u(l, "computed");
    _ && f.push(i("computed", _));
    const V = u(l, "inject");
    return V && f.push(i("injected", V)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: l }]
    ]), f;
  }
  function i(l, f) {
    return f = R({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        l
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((_) => [
          "div",
          {},
          ["span", s, _ + ": "],
          c(f[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(l, f = !0) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", s, l] : w(l) ? ["object", { object: f ? p(l) : l }] : ["span", n, String(l)];
  }
  function u(l, f) {
    const _ = l.type;
    if (E(_))
      return;
    const V = {};
    for (const I in l.ctx)
      a(_, I, f) && (V[I] = l.ctx[I]);
    return V;
  }
  function a(l, f, _) {
    const V = l[_];
    if (h(V) && V.includes(f) || w(V) && f in V || l.extends && a(l.extends, f, _) || l.mixins && l.mixins.some((I) => a(I, f, _)))
      return !0;
  }
  function d(l) {
    return Se(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
function Mr() {
  vr();
}
process.env.NODE_ENV !== "production" && Mr();
const Fr = /* @__PURE__ */ fr({
  __name: "Example",
  props: {
    a: {}
  },
  setup(e) {
    const t = e;
    return (n, s) => " Teszt " + un(t.a);
  }
});
function jr() {
  return console.log("Custom Plugin------"), {
    install(e, t) {
      console.log("App form Custom plugin", e, t), e.component("example", Fr);
    }
  };
}
export {
  jr as default
};
