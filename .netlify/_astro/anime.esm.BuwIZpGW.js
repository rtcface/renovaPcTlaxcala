/**
 * anime.js - ESM
 * @version v4.1.4
 * @author Julian Garnier
 * @license MIT
 * @copyright (c) 2025 Julian Garnier
 * @see https://animejs.com
 */ const Re = typeof window < "u",
  Dt = Re ? window : null,
  J = Re ? document : null,
  D = { OBJECT: 0, ATTRIBUTE: 1, CSS: 2, TRANSFORM: 3, CSS_VAR: 4 },
  b = { NUMBER: 0, UNIT: 1, COLOR: 2, COMPLEX: 3 },
  ce = { NONE: 0, AUTO: 1, FORCE: 2 },
  ee = { replace: 0, none: 1, blend: 2 },
  jt = Symbol(),
  Xt = Symbol(),
  fs = Symbol(),
  wt = Symbol(),
  Vs = Symbol(),
  N = 1e-11,
  Ft = 1e12,
  Qe = 1e3,
  Bt = 120,
  Oe = "",
  ps = (() => {
    const t = new Map();
    return (
      t.set("x", "translateX"),
      t.set("y", "translateY"),
      t.set("z", "translateZ"),
      t
    );
  })(),
  ms = [
    "translateX",
    "translateY",
    "translateZ",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "perspective",
    "matrix",
    "matrix3d",
  ],
  _s = ms.reduce((t, e) => ({ ...t, [e]: e + "(" }), {}),
  le = () => {},
  ks = /(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,
  qs = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,
  Ws = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,
  Hs =
    /hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,
  Xs =
    /hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,
  es = /[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,
  Ts = /^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,
  zs = /([a-z])([A-Z])/g,
  Js = /(\w+)(\([^)]+\)+)/g,
  Ys = /(\*=|\+=|-=)/,
  gs = {
    id: null,
    keyframes: null,
    playbackEase: null,
    playbackRate: 1,
    frameRate: Bt,
    loop: 0,
    reversed: !1,
    alternate: !1,
    autoplay: !0,
    duration: Qe,
    delay: 0,
    loopDelay: 0,
    ease: "out(2)",
    composition: ee.replace,
    modifier: (t) => t,
    onBegin: le,
    onBeforeUpdate: le,
    onUpdate: le,
    onLoop: le,
    onPause: le,
    onComplete: le,
    onRender: le,
  },
  Ks = { root: J },
  V = { defaults: gs, precision: 4, timeScale: 1, tickThreshold: 200 },
  ys = { version: "4.1.4", engine: null };
Re && (Dt.AnimeJS || (Dt.AnimeJS = []), Dt.AnimeJS.push(ys));
const Zs = (t) => t.replace(zs, "$1-$2").toLowerCase(),
  ke = (t, e) => t.indexOf(e) === 0,
  je = Date.now,
  Me = Array.isArray,
  Pe = (t) => t && t.constructor === Object,
  qe = (t) => typeof t == "number" && !isNaN(t),
  We = (t) => typeof t == "string",
  de = (t) => typeof t == "function",
  g = (t) => typeof t > "u",
  _t = (t) => g(t) || t === null,
  vs = (t) => Re && t instanceof SVGElement,
  Ss = (t) => ks.test(t),
  Cs = (t) => ke(t, "rgb"),
  bs = (t) => ke(t, "hsl"),
  Gs = (t) => Ss(t) || Cs(t) || bs(t),
  Tt = (t) => !Object.hasOwn(V.defaults, t),
  Be = (t) => (We(t) ? parseFloat(t) : t),
  Ye = Math.pow,
  ws = Math.sqrt,
  Qs = Math.sin,
  js = Math.cos,
  Vt = Math.abs,
  en = Math.ceil,
  at = Math.floor,
  tn = Math.asin,
  sn = Math.max,
  zt = Math.PI,
  ts = Math.round,
  Y = (t, e, s) => (t < e ? e : t > s ? s : t),
  ss = {},
  x = (t, e) => {
    if (e < 0) return t;
    if (!e) return ts(t);
    let s = ss[e];
    return s || (s = ss[e] = 10 ** e), ts(t * s) / s;
  },
  Ue = (t, e, s) => t + (e - t) * s,
  nn = (t, e, s) => {
    const i = 10 ** (s || 0);
    return at((Math.random() * (e - t + 1 / i) + t) * i) / i;
  },
  rn = (t) => {
    let e = t.length,
      s,
      i;
    for (; e; ) (i = nn(0, --e)), (s = t[e]), (t[e] = t[i]), (t[i] = s);
    return t;
  },
  Nt = (t) => (t === 1 / 0 ? Ft : t === -1 / 0 ? -Ft : t),
  Ze = (t) => (t <= N ? N : Nt(x(t, 11))),
  j = (t) => (Me(t) ? [...t] : t),
  Ns = (t, e) => {
    const s = { ...t };
    for (const i in e) {
      const n = t[i];
      s[i] = g(n) ? e[i] : n;
    }
    return s;
  },
  A = (t, e, s, i = "_prev", n = "_next") => {
    let r = t._head,
      o = n;
    for (s && ((r = t._tail), (o = i)); r; ) {
      const c = r[o];
      e(r), (r = c);
    }
  },
  Le = (t, e, s = "_prev", i = "_next") => {
    const n = e[s],
      r = e[i];
    n ? (n[i] = r) : (t._head = r),
      r ? (r[s] = n) : (t._tail = n),
      (e[s] = null),
      (e[i] = null);
  },
  Ve = (t, e, s, i = "_prev", n = "_next") => {
    let r = t._tail;
    for (; r && s && s(r, e); ) r = r[i];
    const o = r ? r[n] : t._head;
    r ? (r[n] = e) : (t._head = e),
      o ? (o[i] = e) : (t._tail = e),
      (e[i] = r),
      (e[n] = o);
  },
  on = (t) => {
    let e;
    return (...s) => {
      let i, n, r, o;
      e &&
        ((i = e.currentIteration),
        (n = e.iterationProgress),
        (r = e.reversed),
        (o = e._alternate),
        e.revert());
      const c = t(...s);
      return (
        c && !de(c) && c.revert && (e = c),
        g(n) ||
          ((e.currentIteration = i),
          (e.iterationProgress = (o && i % 2 ? !r : r) ? 1 - n : n)),
        c || le
      );
    };
  };
class Rs {
  constructor(e = 0) {
    (this.deltaTime = 0),
      (this._currentTime = e),
      (this._elapsedTime = e),
      (this._startTime = e),
      (this._lastTime = e),
      (this._scheduledTime = 0),
      (this._frameDuration = x(Qe / Bt, 0)),
      (this._fps = Bt),
      (this._speed = 1),
      (this._hasChildren = !1),
      (this._head = null),
      (this._tail = null);
  }
  get fps() {
    return this._fps;
  }
  set fps(e) {
    const s = this._frameDuration,
      i = +e,
      n = i < N ? N : i,
      r = x(Qe / n, 0);
    (this._fps = n), (this._frameDuration = r), (this._scheduledTime += r - s);
  }
  get speed() {
    return this._speed;
  }
  set speed(e) {
    const s = +e;
    this._speed = s < N ? N : s;
  }
  requestTick(e) {
    const s = this._scheduledTime,
      i = this._elapsedTime;
    if (((this._elapsedTime += e - i), i < s)) return ce.NONE;
    const n = this._frameDuration,
      r = i - s;
    return (this._scheduledTime += r < n ? n : r), ce.AUTO;
  }
  computeDeltaTime(e) {
    const s = e - this._lastTime;
    return (this.deltaTime = s), (this._lastTime = e), s;
  }
}
const gt = (t, e, s, i, n) => {
    const r = t.parent,
      o = t.duration,
      c = t.completed,
      l = t.iterationDuration,
      a = t.iterationCount,
      u = t._currentIteration,
      h = t._loopDelay,
      d = t._reversed,
      p = t._alternate,
      m = t._hasChildren,
      _ = t._delay,
      v = t._currentTime,
      S = _ + l,
      C = e - _,
      R = Y(v, -_, o),
      $ = Y(C, -_, o),
      w = C - v,
      k = $ > 0,
      I = $ >= o,
      K = o <= N,
      te = n === ce.FORCE;
    let me = 0,
      Z = C,
      se = 0;
    if (a > 1) {
      const Ee = ~~($ / (l + (I ? 0 : h)));
      (t._currentIteration = Y(Ee, 0, a)),
        I && t._currentIteration--,
        (me = t._currentIteration % 2),
        (Z = $ % (l + h) || 0);
    }
    const fe = d ^ (p && me),
      q = t._ease;
    let P = I ? (fe ? 0 : o) : fe ? l - Z : Z;
    q && (P = l * q(P / l) || 0);
    const oe = (r ? r.backwards : C < v) ? !fe : !!fe;
    if (
      ((t._currentTime = C),
      (t._iterationTime = P),
      (t.backwards = oe),
      k && !t.began
        ? ((t.began = !0), !s && !(r && (oe || !r.began)) && t.onBegin(t))
        : C <= 0 && (t.began = !1),
      !s && !m && k && t._currentIteration !== u && t.onLoop(t),
      te ||
        (n === ce.AUTO &&
          ((e >= _ && e <= S) || (e <= _ && R > _) || (e >= S && R !== o))) ||
        (P >= S && R !== o) ||
        (P <= _ && R > 0) ||
        (e <= R && R === o && c) ||
        (I && !c && K))
    ) {
      if ((k && (t.computeDeltaTime(R), s || t.onBeforeUpdate(t)), !m)) {
        const Ee = te || (oe ? w * -1 : w) >= V.tickThreshold,
          O = t._offset + (r ? r._offset : 0) + _ + P;
        let f = t._head,
          U,
          G,
          Ae,
          Ce,
          H = 0;
        for (; f; ) {
          const F = f._composition,
            X = f._currentTime,
            ae = f._changeDuration,
            tt = f._absoluteStartTime + f._changeDuration,
            _e = f._nextRep,
            ue = f._prevRep,
            be = F !== ee.none;
          if (
            (Ee ||
              ((X !== ae || O <= tt + (_e ? _e._delay : 0)) &&
                (X !== 0 || O >= f._absoluteStartTime))) &&
            (!be ||
              (!f._isOverridden &&
                (!f._isOverlapped || O <= tt) &&
                (!_e || _e._isOverridden || O <= _e._absoluteStartTime) &&
                (!ue ||
                  ue._isOverridden ||
                  O >= ue._absoluteStartTime + ue._changeDuration + f._delay)))
          ) {
            const we = (f._currentTime = Y(P - f._startTime, 0, ae)),
              B = f._ease(we / f._updateDuration),
              ne = f._modifier,
              pe = f._valueType,
              Q = f._tweenType,
              ie = Q === D.OBJECT,
              He = pe === b.NUMBER,
              Te = (He && ie) || B === 0 || B === 1 ? -1 : V.precision;
            let re, Xe;
            if (He) re = Xe = ne(x(Ue(f._fromNumber, f._toNumber, B), Te));
            else if (pe === b.UNIT)
              (Xe = ne(x(Ue(f._fromNumber, f._toNumber, B), Te))),
                (re = `${Xe}${f._unit}`);
            else if (pe === b.COLOR) {
              const M = f._fromNumbers,
                ge = f._toNumbers,
                ye = x(Y(ne(Ue(M[0], ge[0], B)), 0, 255), 0),
                Ne = x(Y(ne(Ue(M[1], ge[1], B)), 0, 255), 0),
                lt = x(Y(ne(Ue(M[2], ge[2], B)), 0, 255), 0),
                ze = Y(ne(x(Ue(M[3], ge[3], B), Te)), 0, 1);
              if (((re = `rgba(${ye},${Ne},${lt},${ze})`), be)) {
                const $e = f._numbers;
                ($e[0] = ye), ($e[1] = Ne), ($e[2] = lt), ($e[3] = ze);
              }
            } else if (pe === b.COMPLEX) {
              re = f._strings[0];
              for (let M = 0, ge = f._toNumbers.length; M < ge; M++) {
                const ye = ne(x(Ue(f._fromNumbers[M], f._toNumbers[M], B), Te)),
                  Ne = f._strings[M + 1];
                (re += `${Ne ? ye + Ne : ye}`), be && (f._numbers[M] = ye);
              }
            }
            if ((be && (f._number = Xe), !i && F !== ee.blend)) {
              const M = f.property;
              (U = f.target),
                ie
                  ? (U[M] = re)
                  : Q === D.ATTRIBUTE
                    ? U.setAttribute(M, re)
                    : ((G = U.style),
                      Q === D.TRANSFORM
                        ? (U !== Ae && ((Ae = U), (Ce = U[wt])),
                          (Ce[M] = re),
                          (H = 1))
                        : Q === D.CSS
                          ? (G[M] = re)
                          : Q === D.CSS_VAR && G.setProperty(M, re)),
                k && (se = 1);
            } else f._value = re;
          }
          if (H && f._renderTransforms) {
            let we = Oe;
            for (const B in Ce) we += `${_s[B]}${Ce[B]}) `;
            (G.transform = we), (H = 0);
          }
          f = f._next;
        }
        !s && se && t.onRender(t);
      }
      !s && k && t.onUpdate(t);
    }
    return (
      r && K
        ? !s &&
          ((r.began && !oe && C >= o && !c) || (oe && C <= N && c)) &&
          (t.onComplete(t), (t.completed = !oe))
        : k && I
          ? a === 1 / 0
            ? (t._startTime += t.duration)
            : t._currentIteration >= a - 1 &&
              ((t.paused = !0),
              !c &&
                !m &&
                ((t.completed = !0),
                !s &&
                  !(r && (oe || !r.began)) &&
                  (t.onComplete(t), t._resolve(t))))
          : (t.completed = !1),
      se
    );
  },
  Fe = (t, e, s, i, n) => {
    const r = t._currentIteration;
    if ((gt(t, e, s, i, n), t._hasChildren)) {
      const o = t,
        c = o.backwards,
        l = i ? e : o._iterationTime,
        a = je();
      let u = 0,
        h = !0;
      if (!i && o._currentIteration !== r) {
        const d = o.iterationDuration;
        A(o, (p) => {
          if (!c)
            !p.completed &&
              !p.backwards &&
              p._currentTime < p.iterationDuration &&
              gt(p, d, s, 1, ce.FORCE),
              (p.began = !1),
              (p.completed = !1);
          else {
            const m = p.duration,
              _ = p._offset + p._delay,
              v = _ + m;
            !s && m <= N && (!_ || v === d) && p.onComplete(p);
          }
        }),
          s || o.onLoop(o);
      }
      A(
        o,
        (d) => {
          const p = x((l - d._offset) * d._speed, 12),
            m = d._fps < o._fps ? d.requestTick(a) : n;
          (u += gt(d, p, s, i, m)), !d.completed && h && (h = !1);
        },
        c,
      ),
        !s && u && o.onRender(o),
        (h || c) &&
          o._currentTime >= o.duration &&
          ((o.paused = !0),
          o.completed ||
            ((o.completed = !0), s || (o.onComplete(o), o._resolve(o))));
    }
  },
  Ge = { animation: null, update: le },
  an = (t) => {
    let e = Ge.animation;
    return (
      e ||
        ((e = {
          duration: N,
          computeDeltaTime: le,
          _offset: 0,
          _delay: 0,
          _head: null,
          _tail: null,
        }),
        (Ge.animation = e),
        (Ge.update = () => {
          t.forEach((s) => {
            for (const i in s) {
              const n = s[i],
                r = n._head;
              if (r) {
                const o = r._valueType,
                  c =
                    o === b.COMPLEX || o === b.COLOR ? j(r._fromNumbers) : null;
                let l = r._fromNumber,
                  a = n._tail;
                for (; a && a !== r; ) {
                  if (c)
                    for (let u = 0, h = a._numbers.length; u < h; u++)
                      c[u] += a._numbers[u];
                  else l += a._number;
                  a = a._prevAdd;
                }
                (r._toNumber = l), (r._toNumbers = c);
              }
            }
          }),
            gt(e, 1, 1, 0, ce.FORCE);
        })),
      e
    );
  },
  Es = Re ? requestAnimationFrame : setImmediate,
  ln = Re ? cancelAnimationFrame : clearImmediate;
class cn extends Rs {
  constructor(e) {
    super(e),
      (this.useDefaultMainLoop = !0),
      (this.pauseOnDocumentHidden = !0),
      (this.defaults = gs),
      (this.paused = !0),
      (this.reqId = 0);
  }
  update() {
    const e = (this._currentTime = je());
    if (this.requestTick(e)) {
      this.computeDeltaTime(e);
      const s = this._speed,
        i = this._fps;
      let n = this._head;
      for (; n; ) {
        const r = n._next;
        n.paused
          ? (Le(this, n),
            (this._hasChildren = !!this._tail),
            (n._running = !1),
            n.completed && !n._cancelled && n.cancel())
          : Fe(
              n,
              (e - n._startTime) * n._speed * s,
              0,
              0,
              n._fps < i ? n.requestTick(e) : ce.AUTO,
            ),
          (n = r);
      }
      Ge.update();
    }
  }
  wake() {
    return (
      this.useDefaultMainLoop &&
        !this.reqId &&
        (this.requestTick(je()), (this.reqId = Es(As))),
      this
    );
  }
  pause() {
    if (this.reqId) return (this.paused = !0), un();
  }
  resume() {
    if (this.paused)
      return (this.paused = !1), A(this, (e) => e.resetTime()), this.wake();
  }
  get speed() {
    return this._speed * (V.timeScale === 1 ? 1 : Qe);
  }
  set speed(e) {
    (this._speed = e * V.timeScale), A(this, (s) => (s.speed = s._speed));
  }
  get timeUnit() {
    return V.timeScale === 1 ? "ms" : "s";
  }
  set timeUnit(e) {
    const i = e === "s",
      n = i ? 0.001 : 1;
    if (V.timeScale !== n) {
      (V.timeScale = n), (V.tickThreshold = 200 * n);
      const r = i ? 0.001 : Qe;
      (this.defaults.duration *= r), (this._speed *= r);
    }
  }
  get precision() {
    return V.precision;
  }
  set precision(e) {
    V.precision = e;
  }
}
const W = (() => {
    const t = new cn(je());
    return (
      Re &&
        ((ys.engine = t),
        J.addEventListener("visibilitychange", () => {
          t.pauseOnDocumentHidden && (J.hidden ? t.pause() : t.resume());
        })),
      t
    );
  })(),
  As = () => {
    W._head ? ((W.reqId = Es(As)), W.update()) : (W.reqId = 0);
  },
  un = () => (ln(W.reqId), (W.reqId = 0), W),
  hn = (t, e, s) => {
    const i = t.style.transform;
    let n;
    if (i) {
      const r = t[wt];
      let o;
      for (; (o = Js.exec(i)); ) {
        const c = o[1],
          l = o[2].slice(1, -1);
        (r[c] = l), c === e && ((n = l), s && (s[e] = l));
      }
    }
    return i && !g(n)
      ? n
      : ke(e, "scale")
        ? "1"
        : ke(e, "rotate") || ke(e, "skew")
          ? "0deg"
          : "0px";
  };
function kt(t) {
  const e = We(t) ? Ks.root.querySelectorAll(t) : t;
  if (e instanceof NodeList || e instanceof HTMLCollection) return e;
}
function Jt(t) {
  if (_t(t)) return [];
  if (!Re) return (Me(t) && t.flat(1 / 0)) || [t];
  if (Me(t)) {
    const s = t.flat(1 / 0),
      i = [];
    for (let n = 0, r = s.length; n < r; n++) {
      const o = s[n];
      if (!_t(o)) {
        const c = kt(o);
        if (c)
          for (let l = 0, a = c.length; l < a; l++) {
            const u = c[l];
            if (!_t(u)) {
              let h = !1;
              for (let d = 0, p = i.length; d < p; d++)
                if (i[d] === u) {
                  h = !0;
                  break;
                }
              h || i.push(u);
            }
          }
        else {
          let l = !1;
          for (let a = 0, u = i.length; a < u; a++)
            if (i[a] === o) {
              l = !0;
              break;
            }
          l || i.push(o);
        }
      }
    }
    return i;
  }
  const e = kt(t);
  return e ? Array.from(e) : [t];
}
function Ds(t) {
  const e = Jt(t),
    s = e.length;
  if (s)
    for (let i = 0; i < s; i++) {
      const n = e[i];
      if (!n[jt]) {
        n[jt] = !0;
        const r = vs(n);
        (n.nodeType || r) && ((n[Xt] = !0), (n[fs] = r), (n[wt] = {}));
      }
    }
  return e;
}
const dn = ["opacity", "rotate", "overflow", "color"],
  fn = (t, e) => {
    if (dn.includes(e)) return !1;
    if (t.getAttribute(e) || e in t) {
      if (e === "scale") {
        const s = t.parentNode;
        return s && s.tagName === "filter";
      }
      return !0;
    }
  },
  pn = (t) => {
    const e = qs.exec(t) || Ws.exec(t),
      s = g(e[4]) ? 1 : +e[4];
    return [+e[1], +e[2], +e[3], s];
  },
  mn = (t) => {
    const e = t.length,
      s = e === 4 || e === 5;
    return [
      +("0x" + t[1] + t[s ? 1 : 2]),
      +("0x" + t[s ? 2 : 3] + t[s ? 2 : 4]),
      +("0x" + t[s ? 3 : 5] + t[s ? 3 : 6]),
      e === 5 || e === 9
        ? +(+("0x" + t[s ? 4 : 7] + t[s ? 4 : 8]) / 255).toFixed(3)
        : 1,
    ];
  },
  xt = (t, e, s) => (
    s < 0 && (s += 1),
    s > 1 && (s -= 1),
    s < 1 / 6
      ? t + (e - t) * 6 * s
      : s < 1 / 2
        ? e
        : s < 2 / 3
          ? t + (e - t) * (2 / 3 - s) * 6
          : t
  ),
  _n = (t) => {
    const e = Hs.exec(t) || Xs.exec(t),
      s = +e[1] / 360,
      i = +e[2] / 100,
      n = +e[3] / 100,
      r = g(e[4]) ? 1 : +e[4];
    let o, c, l;
    if (i === 0) o = c = l = n;
    else {
      const a = n < 0.5 ? n * (1 + i) : n + i - n * i,
        u = 2 * n - a;
      (o = x(xt(u, a, s + 1 / 3) * 255, 0)),
        (c = x(xt(u, a, s) * 255, 0)),
        (l = x(xt(u, a, s - 1 / 3) * 255, 0));
    }
    return [o, c, l, r];
  },
  Tn = (t) => (Cs(t) ? pn(t) : Ss(t) ? mn(t) : bs(t) ? _n(t) : [0, 0, 0, 1]),
  L = (t, e) => (g(t) ? e : t),
  De = (t, e, s, i, n) => {
    if (de(t)) {
      const r = () => {
        const o = t(e, s, i);
        return isNaN(+o) ? o || 0 : +o;
      };
      return n && (n.func = r), r();
    } else return t;
  },
  xs = (t, e) =>
    t[Xt]
      ? t[fs] && fn(t, e)
        ? D.ATTRIBUTE
        : ms.includes(e) || ps.get(e)
          ? D.TRANSFORM
          : ke(e, "--")
            ? D.CSS_VAR
            : e in t.style
              ? D.CSS
              : e in t
                ? D.OBJECT
                : D.ATTRIBUTE
      : D.OBJECT,
  ns = (t, e, s) => {
    const i = t.style[e];
    i && s && (s[e] = i);
    const n = i || getComputedStyle(t[Vs] || t).getPropertyValue(e);
    return n === "auto" ? "0" : n;
  },
  Ke = (t, e, s, i) => {
    const n = g(s) ? xs(t, e) : s;
    return n === D.OBJECT
      ? t[e] || 0
      : n === D.ATTRIBUTE
        ? t.getAttribute(e)
        : n === D.TRANSFORM
          ? hn(t, e, i)
          : n === D.CSS_VAR
            ? ns(t, e, i).trimStart()
            : ns(t, e, i);
  },
  yt = (t, e, s) => (s === "-" ? t - e : s === "+" ? t + e : t * e),
  Yt = () => ({ t: b.NUMBER, n: 0, u: null, o: null, d: null, s: null }),
  ve = (t, e) => {
    if (
      ((e.t = b.NUMBER),
      (e.n = 0),
      (e.u = null),
      (e.o = null),
      (e.d = null),
      (e.s = null),
      !t)
    )
      return e;
    const s = +t;
    if (isNaN(s)) {
      let i = t;
      i[1] === "=" && ((e.o = i[0]), (i = i.slice(2)));
      const n = i.includes(" ") ? !1 : Ts.exec(i);
      if (n) return (e.t = b.UNIT), (e.n = +n[1]), (e.u = n[2]), e;
      if (e.o) return (e.n = +i), e;
      if (Gs(i)) return (e.t = b.COLOR), (e.d = Tn(i)), e;
      {
        const r = i.match(es);
        return (
          (e.t = b.COMPLEX),
          (e.d = r ? r.map(Number) : []),
          (e.s = i.split(es) || []),
          e
        );
      }
    } else return (e.n = s), e;
  },
  is = (t, e) => (
    (e.t = t._valueType),
    (e.n = t._toNumber),
    (e.u = t._unit),
    (e.o = null),
    (e.d = j(t._toNumbers)),
    (e.s = j(t._strings)),
    e
  ),
  xe = Yt(),
  St = { _rep: new WeakMap(), _add: new Map() },
  Kt = (t, e, s = "_rep") => {
    const i = St[s];
    let n = i.get(t);
    return (
      n || ((n = {}), i.set(t, n)),
      n[e] ? n[e] : (n[e] = { _head: null, _tail: null })
    );
  },
  gn = (t, e) => t._isOverridden || t._absoluteStartTime > e._absoluteStartTime,
  vt = (t) => {
    (t._isOverlapped = 1),
      (t._isOverridden = 1),
      (t._changeDuration = N),
      (t._currentTime = N);
  },
  Is = (t, e) => {
    const s = t._composition;
    if (s === ee.replace) {
      const i = t._absoluteStartTime;
      Ve(e, t, gn, "_prevRep", "_nextRep");
      const n = t._prevRep;
      if (n) {
        const r = n.parent,
          o = n._absoluteStartTime + n._changeDuration;
        if (
          t.parent.id !== r.id &&
          r.iterationCount > 1 &&
          o + (r.duration - r.iterationDuration) > i
        ) {
          vt(n);
          let a = n._prevRep;
          for (; a && a.parent.id === r.id; ) vt(a), (a = a._prevRep);
        }
        const c = i - t._delay;
        if (o > c) {
          const a = n._startTime,
            u = o - (a + n._updateDuration),
            h = x(c - u - a, 12);
          (n._changeDuration = h),
            (n._currentTime = h),
            (n._isOverlapped = 1),
            h < N && vt(n);
        }
        let l = !0;
        if (
          (A(r, (a) => {
            a._isOverlapped || (l = !1);
          }),
          l)
        ) {
          const a = r.parent;
          if (a) {
            let u = !0;
            A(a, (h) => {
              h !== r &&
                A(h, (d) => {
                  d._isOverlapped || (u = !1);
                });
            }),
              u && a.cancel();
          } else r.cancel();
        }
      }
    } else if (s === ee.blend) {
      const i = Kt(t.target, t.property, "_add"),
        n = an(St._add);
      let r = i._head;
      r ||
        ((r = { ...t }),
        (r._composition = ee.replace),
        (r._updateDuration = N),
        (r._startTime = 0),
        (r._numbers = j(t._fromNumbers)),
        (r._number = 0),
        (r._next = null),
        (r._prev = null),
        Ve(i, r),
        Ve(n, r));
      const o = t._toNumber;
      if (
        ((t._fromNumber = r._fromNumber - o),
        (t._toNumber = 0),
        (t._numbers = j(t._fromNumbers)),
        (t._number = 0),
        (r._fromNumber = o),
        t._toNumbers)
      ) {
        const c = j(t._toNumbers);
        c &&
          c.forEach((l, a) => {
            (t._fromNumbers[a] = r._fromNumbers[a] - l), (t._toNumbers[a] = 0);
          }),
          (r._fromNumbers = c);
      }
      Ve(i, t, null, "_prevAdd", "_nextAdd");
    }
    return t;
  },
  Os = (t) => {
    const e = t._composition;
    if (e !== ee.none) {
      const s = t.target,
        i = t.property,
        o = St._rep.get(s)[i];
      if ((Le(o, t, "_prevRep", "_nextRep"), e === ee.blend)) {
        const c = St._add,
          l = c.get(s);
        if (!l) return;
        const a = l[i],
          u = Ge.animation;
        Le(a, t, "_prevAdd", "_nextAdd");
        const h = a._head;
        if (h && h === a._tail) {
          Le(a, h, "_prevAdd", "_nextAdd"), Le(u, h);
          let d = !0;
          for (const p in l)
            if (l[p]._head) {
              d = !1;
              break;
            }
          d && c.delete(s);
        }
      }
    }
    return t;
  },
  rs = (t) => ((t.paused = !0), (t.began = !1), (t.completed = !1), t),
  qt = (t) => (
    t._cancelled &&
      (t._hasChildren
        ? A(t, qt)
        : A(t, (e) => {
            e._composition !== ee.none && Is(e, Kt(e.target, e.property));
          }),
      (t._cancelled = 0)),
    t
  );
let yn = 0;
class Zt extends Rs {
  constructor(e = {}, s = null, i = 0) {
    super(0);
    const {
        id: n,
        delay: r,
        duration: o,
        reversed: c,
        alternate: l,
        loop: a,
        loopDelay: u,
        autoplay: h,
        frameRate: d,
        playbackRate: p,
        onComplete: m,
        onLoop: _,
        onPause: v,
        onBegin: S,
        onBeforeUpdate: C,
        onUpdate: R,
      } = e,
      $ = s ? 0 : W._elapsedTime,
      w = s ? s.defaults : V.defaults,
      k = de(r) || g(r) ? w.delay : +r,
      I = de(o) || g(o) ? 1 / 0 : +o,
      K = L(a, w.loop),
      te = L(u, w.loopDelay),
      me = K === !0 || K === 1 / 0 || K < 0 ? 1 / 0 : K + 1;
    let Z = 0;
    s
      ? (Z = i)
      : (W.reqId || W.requestTick(je()),
        (Z = (W._elapsedTime - W._startTime) * V.timeScale)),
      (this.id = g(n) ? ++yn : n),
      (this.parent = s),
      (this.duration = Nt((I + te) * me - te) || N),
      (this.backwards = !1),
      (this.paused = !0),
      (this.began = !1),
      (this.completed = !1),
      (this.onBegin = S || w.onBegin),
      (this.onBeforeUpdate = C || w.onBeforeUpdate),
      (this.onUpdate = R || w.onUpdate),
      (this.onLoop = _ || w.onLoop),
      (this.onPause = v || w.onPause),
      (this.onComplete = m || w.onComplete),
      (this.iterationDuration = I),
      (this.iterationCount = me),
      (this._autoplay = s ? !1 : L(h, w.autoplay)),
      (this._offset = Z),
      (this._delay = k),
      (this._loopDelay = te),
      (this._iterationTime = 0),
      (this._currentIteration = 0),
      (this._resolve = le),
      (this._running = !1),
      (this._reversed = +L(c, w.reversed)),
      (this._reverse = this._reversed),
      (this._cancelled = 0),
      (this._alternate = L(l, w.alternate)),
      (this._prev = null),
      (this._next = null),
      (this._elapsedTime = $),
      (this._startTime = $),
      (this._lastTime = $),
      (this._fps = L(d, w.frameRate)),
      (this._speed = L(p, w.playbackRate));
  }
  get cancelled() {
    return !!this._cancelled;
  }
  set cancelled(e) {
    e ? this.cancel() : this.reset(1).play();
  }
  get currentTime() {
    return Y(x(this._currentTime, V.precision), -this._delay, this.duration);
  }
  set currentTime(e) {
    const s = this.paused;
    this.pause().seek(+e), s || this.resume();
  }
  get iterationCurrentTime() {
    return x(this._iterationTime, V.precision);
  }
  set iterationCurrentTime(e) {
    this.currentTime = this.iterationDuration * this._currentIteration + e;
  }
  get progress() {
    return Y(x(this._currentTime / this.duration, 10), 0, 1);
  }
  set progress(e) {
    this.currentTime = this.duration * e;
  }
  get iterationProgress() {
    return Y(x(this._iterationTime / this.iterationDuration, 10), 0, 1);
  }
  set iterationProgress(e) {
    const s = this.iterationDuration;
    this.currentTime = s * this._currentIteration + s * e;
  }
  get currentIteration() {
    return this._currentIteration;
  }
  set currentIteration(e) {
    this.currentTime =
      this.iterationDuration * Y(+e, 0, this.iterationCount - 1);
  }
  get reversed() {
    return !!this._reversed;
  }
  set reversed(e) {
    e ? this.reverse() : this.play();
  }
  get speed() {
    return super.speed;
  }
  set speed(e) {
    (super.speed = e), this.resetTime();
  }
  reset(e = 0) {
    return (
      qt(this),
      this._reversed && !this._reverse && (this.reversed = !1),
      (this._iterationTime = this.iterationDuration),
      Fe(this, 0, 1, e, ce.FORCE),
      rs(this),
      this._hasChildren && A(this, rs),
      this
    );
  }
  init(e = 0) {
    (this.fps = this._fps),
      (this.speed = this._speed),
      !e && this._hasChildren && Fe(this, this.duration, 1, e, ce.FORCE),
      this.reset(e);
    const s = this._autoplay;
    return s === !0 ? this.resume() : s && !g(s.linked) && s.link(this), this;
  }
  resetTime() {
    const e = 1 / (this._speed * W._speed);
    return (
      (this._startTime = je() - (this._currentTime + this._delay) * e), this
    );
  }
  pause() {
    return this.paused ? this : ((this.paused = !0), this.onPause(this), this);
  }
  resume() {
    return this.paused
      ? ((this.paused = !1),
        this.duration <= N && !this._hasChildren
          ? Fe(this, N, 0, 0, ce.FORCE)
          : (this._running ||
              (Ve(W, this), (W._hasChildren = !0), (this._running = !0)),
            this.resetTime(),
            (this._startTime -= 12),
            W.wake()),
        this)
      : this;
  }
  restart() {
    return this.reset(0).resume();
  }
  seek(e, s = 0, i = 0) {
    qt(this), (this.completed = !1);
    const n = this.paused;
    return (
      (this.paused = !0),
      Fe(this, e + this._delay, ~~s, ~~i, ce.AUTO),
      n ? this : this.resume()
    );
  }
  alternate() {
    const e = this._reversed,
      s = this.iterationCount,
      i = this.iterationDuration,
      n = s === 1 / 0 ? at(Ft / i) : s;
    return (
      (this._reversed = +(this._alternate && !(n % 2) ? e : !e)),
      s === 1 / 0
        ? (this.iterationProgress = this._reversed
            ? 1 - this.iterationProgress
            : this.iterationProgress)
        : this.seek(i * n - this._currentTime),
      this.resetTime(),
      this
    );
  }
  play() {
    return this._reversed && this.alternate(), this.resume();
  }
  reverse() {
    return this._reversed || this.alternate(), this.resume();
  }
  cancel() {
    return (
      this._hasChildren ? A(this, (e) => e.cancel(), !0) : A(this, Os),
      (this._cancelled = 1),
      this.pause()
    );
  }
  stretch(e) {
    const s = this.duration,
      i = Ze(e);
    if (s === i) return this;
    const n = e / s,
      r = e <= N;
    return (
      (this.duration = r ? N : i),
      (this.iterationDuration = r ? N : Ze(this.iterationDuration * n)),
      (this._offset *= n),
      (this._delay *= n),
      (this._loopDelay *= n),
      this
    );
  }
  revert() {
    Fe(this, 0, 1, 0, ce.AUTO);
    const e = this._autoplay;
    return e && e.linked && e.linked === this && e.revert(), this.cancel();
  }
  complete() {
    return this.seek(this.duration).cancel();
  }
  then(e = le) {
    const s = this.then,
      i = () => {
        (this.then = null), e(this), (this.then = s), (this._resolve = le);
      };
    return new Promise(
      (n) => (
        (this._resolve = () => n(i())), this.completed && this._resolve(), this
      ),
    );
  }
}
const et = (t) => t,
  Ls = (t, e, s) =>
    (((1 - 3 * s + 3 * e) * t + (3 * s - 6 * e)) * t + 3 * e) * t,
  vn = (t, e, s) => {
    let i = 0,
      n = 1,
      r,
      o,
      c = 0;
    do (o = i + (n - i) / 2), (r = Ls(o, e, s) - t), r > 0 ? (n = o) : (i = o);
    while (Vt(r) > 1e-7 && ++c < 100);
    return o;
  },
  Sn = (t = 0.5, e = 0, s = 0.5, i = 1) =>
    t === e && s === i
      ? et
      : (n) => (n === 0 || n === 1 ? n : Ls(vn(n, t, s), e, i)),
  Cn = (t = 10, e) => {
    const s = e ? en : at;
    return (i) => s(Y(i, 0, 1) * t) * (1 / t);
  },
  Ps = (...t) => {
    const e = t.length;
    if (!e) return et;
    const s = e - 1,
      i = t[0],
      n = t[s],
      r = [0],
      o = [Be(i)];
    for (let c = 1; c < s; c++) {
      const l = t[c],
        a = We(l) ? l.trim().split(" ") : [l],
        u = a[0],
        h = a[1];
      r.push(g(h) ? c / s : Be(h) / 100), o.push(Be(u));
    }
    return (
      o.push(Be(n)),
      r.push(1),
      (l) => {
        for (let a = 1, u = r.length; a < u; a++) {
          const h = r[a];
          if (l <= h) {
            const d = r[a - 1],
              p = o[a - 1];
            return p + ((o[a] - p) * (l - d)) / (h - d);
          }
        }
        return o[o.length - 1];
      }
    );
  },
  bn = (t = 10, e = 1) => {
    const s = [0],
      i = t - 1;
    for (let n = 1; n < i; n++) {
      const r = s[n - 1],
        o = n / i,
        c = (n + 1) / i,
        l = o + (c - o) * Math.random(),
        a = o * (1 - e) + l * e;
      s.push(Y(a, r, 1));
    }
    return s.push(1), Ps(...s);
  },
  wn = zt / 2,
  os = zt * 2,
  st =
    (t = 1.68) =>
    (e) =>
      Ye(e, +t),
  as = {
    [Oe]: st,
    Quad: st(2),
    Cubic: st(3),
    Quart: st(4),
    Quint: st(5),
    Sine: (t) => 1 - js(t * wn),
    Circ: (t) => 1 - ws(1 - t * t),
    Expo: (t) => (t ? Ye(2, 10 * t - 10) : 0),
    Bounce: (t) => {
      let e,
        s = 4;
      for (; t < ((e = Ye(2, --s)) - 1) / 11; );
      return 1 / Ye(4, 3 - s) - 7.5625 * Ye((e * 3 - 2) / 22 - t, 2);
    },
    Back:
      (t = 1.70158) =>
      (e) =>
        (+t + 1) * e * e * e - +t * e * e,
    Elastic: (t = 1, e = 0.3) => {
      const s = Y(+t, 1, 10),
        i = Y(+e, N, 2),
        n = (i / os) * tn(1 / s),
        r = os / i;
      return (o) =>
        o === 0 || o === 1
          ? o
          : -s * Ye(2, -10 * (1 - o)) * Qs((1 - o - n) * r);
    },
  },
  Wt = {
    in: (t) => (e) => t(e),
    out: (t) => (e) => 1 - t(1 - e),
    inOut: (t) => (e) => (e < 0.5 ? t(e * 2) / 2 : 1 - t(e * -2 + 2) / 2),
    outIn: (t) => (e) =>
      e < 0.5 ? (1 - t(1 - e * 2)) / 2 : (t(e * 2 - 1) + 1) / 2,
  },
  Nn = (t, e, s) => {
    if (s[t]) return s[t];
    if (t.indexOf("(") <= -1) {
      const n =
        Wt[t] || t.includes("Back") || t.includes("Elastic") ? e[t]() : e[t];
      return n ? (s[t] = n) : et;
    } else {
      const i = t.slice(0, -1).split("("),
        n = e[i[0]];
      return n ? (s[t] = n(...i[1].split(","))) : et;
    }
  },
  Rn = (() => {
    const t = { linear: Ps, irregular: bn, steps: Cn, cubicBezier: Sn };
    for (const e in Wt)
      for (const s in as) {
        const i = as[s],
          n = Wt[e];
        t[e + s] =
          s === Oe || s === "Back" || s === "Elastic"
            ? (r, o) => n(i(r, o))
            : n(i);
      }
    return t;
  })(),
  En = { linear: et },
  Ct = (t) => (de(t) ? t : We(t) ? Nn(t, Rn, En) : et),
  ls = {},
  Ms = (t, e, s) => {
    if (s === D.TRANSFORM) {
      const i = ps.get(t);
      return i || t;
    } else if (s === D.CSS || (s === D.ATTRIBUTE && vs(e) && t in e.style)) {
      const i = ls[t];
      if (i) return i;
      {
        const n = t && Zs(t);
        return (ls[t] = n), n;
      }
    } else return t;
  },
  It = { deg: 1, rad: 180 / zt, turn: 360 },
  cs = {},
  An = (t, e, s, i = !1) => {
    const n = e.u,
      r = e.n;
    if (e.t === b.UNIT && n === s) return e;
    const o = r + n + s,
      c = cs[o];
    if (!g(c) && !i) e.n = c;
    else {
      let l;
      if (n in It) l = (r * It[n]) / It[s];
      else {
        const u = t.cloneNode(),
          h = t.parentNode,
          d = h && h !== J ? h : J.body;
        d.appendChild(u);
        const p = u.style;
        p.width = 100 + n;
        const m = u.offsetWidth || 100;
        p.width = 100 + s;
        const _ = u.offsetWidth || 100,
          v = m / _;
        d.removeChild(u), (l = v * r);
      }
      (e.n = l), (cs[o] = l);
    }
    return e.t, b.UNIT, (e.u = s), e;
  },
  Gt = (t) => {
    if (t._hasChildren) A(t, Gt, !0);
    else {
      const e = t;
      e.pause(),
        A(e, (s) => {
          const i = s.property,
            n = s.target;
          if (n[Xt]) {
            const r = n.style,
              o = e._inlineStyles[i];
            if (s._tweenType === D.TRANSFORM) {
              const c = n[wt];
              if (
                (g(o) || o === Oe ? delete c[i] : (c[i] = o),
                s._renderTransforms)
              )
                if (!Object.keys(c).length) r.removeProperty("transform");
                else {
                  let l = Oe;
                  for (const a in c) l += _s[a] + c[a] + ") ";
                  r.transform = l;
                }
            } else g(o) || o === Oe ? r.removeProperty(i) : (r[i] = o);
            e._tail === s &&
              e.targets.forEach((c) => {
                c.getAttribute &&
                  c.getAttribute("style") === Oe &&
                  c.removeAttribute("style");
              });
          }
        });
    }
    return t;
  },
  T = Yt(),
  y = Yt(),
  ht = { func: null },
  dt = [null],
  Je = [null, null],
  ft = { to: null };
let Dn = 0,
  Ie,
  Se;
const xn = (t, e) => {
  const s = {};
  if (Me(t)) {
    const i = [].concat(...t.map((n) => Object.keys(n))).filter(Tt);
    for (let n = 0, r = i.length; n < r; n++) {
      const o = i[n],
        c = t.map((l) => {
          const a = {};
          for (const u in l) {
            const h = l[u];
            Tt(u) ? u === o && (a.to = h) : (a[u] = h);
          }
          return a;
        });
      s[o] = c;
    }
  } else {
    const i = L(e.duration, V.defaults.duration);
    Object.keys(t)
      .map((r) => ({ o: parseFloat(r) / 100, p: t[r] }))
      .sort((r, o) => r.o - o.o)
      .forEach((r) => {
        const o = r.o,
          c = r.p;
        for (const l in c)
          if (Tt(l)) {
            let a = s[l];
            a || (a = s[l] = []);
            const u = o * i;
            const h = a.length,
              d = a[h - 1];
            const p = { to: c[l] };
            let m = 0;
            for (let _ = 0; _ < h; _++) m += a[_].duration;
            h === 1 && (p.from = d.to),
              c.ease && (p.ease = c.ease),
              (p.duration = u - (h ? m : 0)),
              a.push(p);
          }
        return r;
      });
    for (const r in s) {
      const o = s[r];
      let c;
      for (let l = 0, a = o.length; l < a; l++) {
        const u = o[l],
          h = u.ease;
        (u.ease = c || void 0), (c = h);
      }
      o[0].duration || o.shift();
    }
  }
  return s;
};
class In extends Zt {
  constructor(e, s, i, n, r = !1, o = 0, c = 0) {
    super(s, i, n);
    const l = Ds(e),
      a = l.length,
      u = s.keyframes,
      h = u ? Ns(xn(u, s), s) : s,
      {
        delay: d,
        duration: p,
        ease: m,
        playbackEase: _,
        modifier: v,
        composition: S,
        onRender: C,
      } = h,
      R = i ? i.defaults : V.defaults,
      $ = L(_, R.playbackEase),
      w = $ ? Ct($) : null,
      k = !g(m) && !g(m.ease),
      I = k ? m.ease : L(m, w ? "linear" : R.ease),
      K = k ? m.duration : L(p, R.duration),
      te = L(d, R.delay),
      me = v || R.modifier,
      Z = g(S) && a >= Qe ? ee.none : g(S) ? R.composition : S,
      se = {},
      fe = this._offset + (i ? i._offset : 0);
    let q = NaN,
      P = NaN,
      oe = 0,
      Ee = 0;
    for (let O = 0; O < a; O++) {
      const f = l[O],
        U = o || O,
        G = c || a;
      let Ae = NaN,
        Ce = NaN;
      for (const H in h)
        if (Tt(H)) {
          const F = xs(f, H),
            X = Ms(H, f, F);
          let ae = h[H];
          const tt = Me(ae);
          if ((r && !tt && ((Je[0] = ae), (Je[1] = ae), (ae = Je)), tt)) {
            const ne = ae.length,
              pe = !Pe(ae[0]);
            ne === 2 && pe
              ? ((ft.to = ae), (dt[0] = ft), (Ie = dt))
              : ne > 2 && pe
                ? ((Ie = []),
                  ae.forEach((Q, ie) => {
                    ie
                      ? ie === 1
                        ? ((Je[1] = Q), Ie.push(Je))
                        : Ie.push(Q)
                      : (Je[0] = Q);
                  }))
                : (Ie = ae);
          } else (dt[0] = ae), (Ie = dt);
          let _e = null,
            ue = null,
            be = NaN,
            we = 0,
            B = 0;
          for (let ne = Ie.length; B < ne; B++) {
            const pe = Ie[B];
            Pe(pe) ? (Se = pe) : ((ft.to = pe), (Se = ft)), (ht.func = null);
            const Q = De(Se.to, f, U, G, ht);
            let ie;
            Pe(Q) && !g(Q.to) ? ((Se = Q), (ie = Q.to)) : (ie = Q);
            const He = De(Se.from, f, U, G),
              Te = Se.ease,
              re = !g(Te) && !g(Te.ease),
              Xe = re ? Te.ease : Te || I,
              M = re
                ? Te.duration
                : De(L(Se.duration, ne > 1 ? De(K, f, U, G) / ne : K), f, U, G),
              ge = De(L(Se.delay, B ? 0 : te), f, U, G),
              ye = De(L(Se.composition, Z), f, U, G),
              Ne = qe(ye) ? ye : ee[ye],
              lt = Se.modifier || me,
              ze = !g(He),
              $e = !g(ie),
              ct = Me(ie),
              Bs = ct || (ze && $e),
              Rt = ue ? we + ge : ge,
              Et = x(fe + Rt, 12);
            !Ee && (ze || ct) && (Ee = 1);
            let he = ue;
            if (Ne !== ee.none) {
              _e || (_e = Kt(f, X));
              let E = _e._head;
              for (; E && !E._isOverridden && E._absoluteStartTime <= Et; )
                if (
                  ((he = E), (E = E._nextRep), E && E._absoluteStartTime >= Et)
                )
                  for (; E; ) vt(E), (E = E._nextRep);
            }
            if (
              (Bs
                ? (ve(ct ? De(ie[0], f, U, G) : He, T),
                  ve(ct ? De(ie[1], f, U, G, ht) : ie, y),
                  T.t === b.NUMBER &&
                    (he
                      ? he._valueType === b.UNIT &&
                        ((T.t = b.UNIT), (T.u = he._unit))
                      : (ve(Ke(f, X, F, se), xe),
                        xe.t === b.UNIT && ((T.t = b.UNIT), (T.u = xe.u)))))
                : ($e
                    ? ve(ie, y)
                    : ue
                      ? is(ue, y)
                      : ve(
                          i && he && he.parent.parent === i
                            ? he._value
                            : Ke(f, X, F, se),
                          y,
                        ),
                  ze
                    ? ve(He, T)
                    : ue
                      ? is(ue, T)
                      : ve(
                          i && he && he.parent.parent === i
                            ? he._value
                            : Ke(f, X, F, se),
                          T,
                        )),
              T.o &&
                (T.n = yt(
                  he ? he._toNumber : ve(Ke(f, X, F, se), xe).n,
                  T.n,
                  T.o,
                )),
              y.o && (y.n = yt(T.n, y.n, y.o)),
              T.t !== y.t)
            ) {
              if (T.t === b.COMPLEX || y.t === b.COMPLEX) {
                const E = T.t === b.COMPLEX ? T : y,
                  z = T.t === b.COMPLEX ? y : T;
                (z.t = b.COMPLEX), (z.s = j(E.s)), (z.d = E.d.map(() => z.n));
              } else if (T.t === b.UNIT || y.t === b.UNIT) {
                const E = T.t === b.UNIT ? T : y,
                  z = T.t === b.UNIT ? y : T;
                (z.t = b.UNIT), (z.u = E.u);
              } else if (T.t === b.COLOR || y.t === b.COLOR) {
                const E = T.t === b.COLOR ? T : y,
                  z = T.t === b.COLOR ? y : T;
                (z.t = b.COLOR), (z.s = E.s), (z.d = [0, 0, 0, 1]);
              }
            }
            if (T.u !== y.u) {
              let E = y.u ? T : y;
              E = An(f, E, y.u ? y.u : T.u, !1);
            }
            if (y.d && T.d && y.d.length !== T.d.length) {
              const E = T.d.length > y.d.length ? T : y,
                z = E === T ? y : T;
              (z.d = E.d.map((Wn, Qt) => (g(z.d[Qt]) ? 0 : z.d[Qt]))),
                (z.s = j(E.s));
            }
            const At = x(+M || N, 12),
              ut = {
                parent: this,
                id: Dn++,
                property: X,
                target: f,
                _value: null,
                _func: ht.func,
                _ease: Ct(Xe),
                _fromNumbers: j(T.d),
                _toNumbers: j(y.d),
                _strings: j(y.s),
                _fromNumber: T.n,
                _toNumber: y.n,
                _numbers: j(T.d),
                _number: T.n,
                _unit: y.u,
                _modifier: lt,
                _currentTime: 0,
                _startTime: Rt,
                _delay: +ge,
                _updateDuration: At,
                _changeDuration: At,
                _absoluteStartTime: Et,
                _tweenType: F,
                _valueType: y.t,
                _composition: Ne,
                _isOverlapped: 0,
                _isOverridden: 0,
                _renderTransforms: 0,
                _prevRep: null,
                _nextRep: null,
                _prevAdd: null,
                _nextAdd: null,
                _prev: null,
                _next: null,
              };
            Ne !== ee.none && Is(ut, _e),
              isNaN(be) && (be = ut._startTime),
              (we = x(Rt + At, 12)),
              (ue = ut),
              oe++,
              Ve(this, ut);
          }
          (isNaN(P) || be < P) && (P = be),
            (isNaN(q) || we > q) && (q = we),
            F === D.TRANSFORM && ((Ae = oe - B), (Ce = oe));
        }
      if (!isNaN(Ae)) {
        let H = 0;
        A(this, (F) => {
          H >= Ae &&
            H < Ce &&
            ((F._renderTransforms = 1),
            F._composition === ee.blend &&
              A(Ge.animation, (X) => {
                X.id === F.id && (X._renderTransforms = 1);
              })),
            H++;
        });
      }
    }
    a ||
      console.warn(
        "No target found. Make sure the element you're trying to animate is accessible before creating your animation.",
      ),
      P
        ? (A(this, (O) => {
            O._startTime - O._delay || (O._delay -= P), (O._startTime -= P);
          }),
          (q -= P))
        : (P = 0),
      q || ((q = N), (this.iterationCount = 0)),
      (this.targets = l),
      (this.duration =
        q === N
          ? N
          : Nt((q + this._loopDelay) * this.iterationCount - this._loopDelay) ||
            N),
      (this.onRender = C || R.onRender),
      (this._ease = w),
      (this._delay = P),
      (this.iterationDuration = q),
      (this._inlineStyles = se),
      !this._autoplay && Ee && this.onRender(this);
  }
  stretch(e) {
    const s = this.duration;
    if (s === Ze(e)) return this;
    const i = e / s;
    return (
      A(this, (n) => {
        (n._updateDuration = Ze(n._updateDuration * i)),
          (n._changeDuration = Ze(n._changeDuration * i)),
          (n._currentTime *= i),
          (n._startTime *= i),
          (n._absoluteStartTime *= i);
      }),
      super.stretch(e)
    );
  }
  refresh() {
    return (
      A(this, (e) => {
        const s = e._func;
        if (s) {
          const i = Ke(e.target, e.property, e._tweenType);
          ve(i, xe),
            ve(s(), y),
            (e._fromNumbers = j(xe.d)),
            (e._fromNumber = xe.n),
            (e._toNumbers = j(y.d)),
            (e._strings = j(y.s)),
            (e._toNumber = y.o ? yt(xe.n, y.n, y.o) : y.n);
        }
      }),
      this
    );
  }
  revert() {
    return super.revert(), Gt(this);
  }
  then(e) {
    return super.then(e);
  }
}
const us = { _head: null, _tail: null },
  On = (t, e, s) => {
    let i = us._head;
    for (; i; ) {
      const n = i._next,
        r = i.$el === t,
        o = !e || i.property === e,
        c = !s || i.parent === s;
      if (r && o && c) {
        const l = i.animation;
        try {
          l.commitStyles();
        } catch {}
        l.cancel(), Le(us, i);
        const a = i.parent;
        a &&
          (a._completed++,
          a.animations.length === a._completed &&
            ((a.completed = !0),
            a.muteCallbacks ||
              ((a.paused = !0), a.onComplete(a), a._resolve(a))));
      }
      i = n;
    }
  },
  hs = (t, e, s) => {
    let i = !1;
    return (
      A(
        e,
        (n) => {
          const r = n.target;
          if (t.includes(r)) {
            const o = n.property,
              c = n._tweenType,
              l = Ms(s, r, c);
            (!l || (l && l === o)) &&
              (n.parent._tail === n &&
                n._tweenType === D.TRANSFORM &&
                n._prev &&
                n._prev._tweenType === D.TRANSFORM &&
                (n._prev._renderTransforms = 1),
              Le(e, n),
              Os(n),
              (i = !0));
          }
        },
        !0,
      ),
      i
    );
  },
  $s = (t, e, s) => {
    const i = Jt(t),
      n = e || W,
      r = e && e.controlAnimation && e;
    for (let c = 0, l = i.length; c < l; c++) {
      const a = i[c];
      On(a, s, r);
    }
    let o;
    if (n._hasChildren) {
      let c = 0;
      A(
        n,
        (l) => {
          if (!l._hasChildren)
            if (((o = hs(i, l, s)), o && !l._head)) l.cancel(), Le(n, l);
            else {
              const u = l._offset + l._delay + l.duration;
              u > c && (c = u);
            }
          l._head ? $s(t, l, s) : (l._hasChildren = !1);
        },
        !0,
      ),
        g(n.iterationDuration) || (n.iterationDuration = c);
    } else o = hs(i, n, s);
    return o && !n._head && ((n._hasChildren = !1), n.cancel && n.cancel()), i;
  },
  Ln = (t, e) => {
    if (ke(e, "<")) {
      const s = e[1] === "<",
        i = t._tail,
        n = i ? i._offset + i._delay : 0;
      return s ? n : n + i.duration;
    }
  },
  it = (t, e) => {
    let s = t.iterationDuration;
    if ((s === N && (s = 0), g(e))) return s;
    if (qe(+e)) return +e;
    const i = e,
      n = t ? t.labels : null,
      r = !_t(n),
      o = Ln(t, i),
      c = !g(o),
      l = Ys.exec(i);
    if (l) {
      const a = l[0],
        u = i.split(a),
        h = r && u[0] ? n[u[0]] : s,
        d = c ? o : r ? h : s,
        p = +u[1];
      return yt(d, p, a[0]);
    } else return c ? o : r ? (g(n[i]) ? s : n[i]) : s;
  };
function Pn(t) {
  return (
    Nt(
      (t.iterationDuration + t._loopDelay) * t.iterationCount - t._loopDelay,
    ) || N
  );
}
function Ot(t, e, s, i, n, r) {
  const c = qe(t.duration) && t.duration <= N ? s - N : s;
  Fe(e, c, 1, 1, ce.AUTO);
  const l = i ? new In(i, t, e, c, !1, n, r) : new Zt(t, e, c);
  return (
    l.init(1),
    Ve(e, l),
    A(e, (a) => {
      const h = a._offset + a._delay + a.duration;
      h > e.iterationDuration && (e.iterationDuration = h);
    }),
    (e.duration = Pn(e)),
    e
  );
}
class Mn extends Zt {
  constructor(e = {}) {
    super(e, null, 0), (this.duration = 0), (this.labels = {});
    const s = e.defaults,
      i = V.defaults;
    (this.defaults = s ? Ns(s, i) : i),
      (this.onRender = e.onRender || i.onRender);
    const n = L(e.playbackEase, i.playbackEase);
    (this._ease = n ? Ct(n) : null), (this.iterationDuration = 0);
  }
  add(e, s, i) {
    const n = Pe(s),
      r = Pe(e);
    if (n || r) {
      if (((this._hasChildren = !0), n)) {
        const o = s;
        if (de(i)) {
          const c = i,
            l = Jt(e),
            a = this.duration,
            u = this.iterationDuration,
            h = o.id;
          let d = 0;
          const p = l.length;
          l.forEach((m) => {
            const _ = { ...o };
            (this.duration = a),
              (this.iterationDuration = u),
              g(h) || (_.id = h + "-" + d),
              Ot(_, this, it(this, c(m, d, p, this)), m, d, p),
              d++;
          });
        } else Ot(o, this, it(this, i), e);
      } else Ot(e, this, it(this, s));
      return this.init(1);
    }
  }
  sync(e, s) {
    if (g(e) || (e && g(e.pause))) return this;
    e.pause();
    const i = +(e.effect ? e.effect.getTiming().duration : e.duration);
    return this.add(e, { currentTime: [0, i], duration: i, ease: "linear" }, s);
  }
  set(e, s, i) {
    return g(s)
      ? this
      : ((s.duration = N), (s.composition = ee.replace), this.add(e, s, i));
  }
  call(e, s) {
    return g(e) || (e && !de(e))
      ? this
      : this.add({ duration: 0, onComplete: () => e(this) }, s);
  }
  label(e, s) {
    return g(e) || (e && !We(e))
      ? this
      : ((this.labels[e] = it(this, s)), this);
  }
  remove(e, s) {
    return $s(e, this, s), this;
  }
  stretch(e) {
    const s = this.duration;
    if (s === Ze(e)) return this;
    const i = e / s,
      n = this.labels;
    A(this, (r) => r.stretch(r.duration * i));
    for (const r in n) n[r] *= i;
    return super.stretch(e);
  }
  refresh() {
    return (
      A(this, (e) => {
        e.refresh && e.refresh();
      }),
      this
    );
  }
  revert() {
    return super.revert(), A(this, (e) => e.revert, !0), Gt(this);
  }
  then(e) {
    return super.then(e);
  }
}
const Hn = (t) => new Mn(t).init(),
  pt = typeof Intl < "u" && Intl.Segmenter,
  $n = /\{value\}/g,
  Un = /\{i\}/g,
  Fn = /(\s+)/,
  Bn = /^\s+$/,
  Ht = "line",
  nt = "word",
  rt = "char",
  ot = "data-line";
let Lt = null,
  Pt = null,
  bt = null;
const ds = (t) => t.isWordLike || t.segment === " " || qe(+t.segment),
  Mt = (t) => t.setAttribute("aria-hidden", "true"),
  mt = (t, e) => [
    ...t.querySelectorAll(`[data-${e}]:not([data-${e}] [data-${e}])`),
  ],
  Vn = { line: "#00D672", word: "#FF4B4B", char: "#5A87FF" },
  Us = (t) => {
    if (!t.childElementCount && !t.textContent.trim()) {
      const e = t.parentElement;
      t.remove(), e && Us(e);
    }
  },
  Fs = (t, e, s) => {
    const i = t.getAttribute(ot);
    ((i !== null && +i !== e) || t.tagName === "BR") && s.add(t);
    let n = t.childElementCount;
    for (; n--; ) Fs(t.children[n], e, s);
    return s;
  },
  $t = (t, e = {}) => {
    let s = "";
    const i = We(e.class) ? ` class="${e.class}"` : "",
      n = L(e.clone, !1),
      r = L(e.wrap, !1),
      o = r ? (r === !0 ? "clip" : r) : n ? "clip" : !1;
    if (
      (r && (s += `<span${o ? ` style="overflow:${o};"` : ""}>`),
      (s += `<span${i}${n ? ' style="position:relative;"' : ""} data-${t}="{i}">`),
      n)
    ) {
      const c = n === "left" ? "-100%" : n === "right" ? "100%" : "0",
        l = n === "top" ? "-100%" : n === "bottom" ? "100%" : "0";
      (s += "<span>{value}</span>"),
        (s += `<span inert style="position:absolute;top:${l};left:${c};white-space:nowrap;">{value}</span>`);
    } else s += "{value}";
    return (s += "</span>"), r && (s += "</span>"), s;
  },
  Ut = (t, e, s, i, n, r, o, c, l) => {
    const a = n === Ht,
      u = n === rt,
      h = `_${n}_`,
      d = de(t) ? t(s) : t,
      p = a ? "block" : "inline-block";
    bt.innerHTML = d
      .replace($n, `<i class="${h}"></i>`)
      .replace(Un, `${u ? l : a ? o : c}`);
    const m = bt.content,
      _ = m.firstElementChild,
      v = m.querySelector(`[data-${n}]`) || _,
      S = m.querySelectorAll(`i.${h}`),
      C = S.length;
    if (C) {
      (_.style.display = p),
        (v.style.display = p),
        v.setAttribute(ot, `${o}`),
        a ||
          (v.setAttribute("data-word", `${c}`),
          u && v.setAttribute("data-char", `${l}`));
      let R = C;
      for (; R--; ) {
        const $ = S[R],
          w = $.parentElement;
        (w.style.display = p),
          a ? (w.innerHTML = s.innerHTML) : w.replaceChild(s.cloneNode(!0), $);
      }
      e.push(v), i.appendChild(m);
    } else
      console.warn(
        'The expression "{value}" is missing from the provided template.',
      );
    return r && (_.style.outline = `1px dotted ${Vn[n]}`), _;
  };
class kn {
  constructor(e, s = {}) {
    Lt ||
      (Lt = pt
        ? new pt([], { granularity: nt })
        : {
            segment: (m) => {
              const _ = [],
                v = m.split(Fn);
              for (let S = 0, C = v.length; S < C; S++) {
                const R = v[S];
                _.push({ segment: R, isWordLike: !Bn.test(R) });
              }
              return _;
            },
          }),
      Pt ||
        (Pt = pt
          ? new pt([], { granularity: "grapheme" })
          : { segment: (m) => [...m].map((_) => ({ segment: _ })) }),
      !bt && Re && (bt = J.createElement("template"));
    const {
        words: i,
        chars: n,
        lines: r,
        accessible: o,
        includeSpaces: c,
        debug: l,
      } = s,
      a = (e = Me(e) ? e[0] : e) && e.nodeType ? e : (kt(e) || [])[0],
      u = r === !0 ? {} : r,
      h = i === !0 || g(i) ? {} : i,
      d = n === !0 ? {} : n;
    (this.debug = L(l, !1)),
      (this.includeSpaces = L(c, !1)),
      (this.accessible = L(o, !0)),
      (this.linesOnly = u && !h && !d),
      (this.lineTemplate = Pe(u) ? $t(Ht, u) : u),
      (this.wordTemplate = Pe(h) || this.linesOnly ? $t(nt, h) : h),
      (this.charTemplate = Pe(d) ? $t(rt, d) : d),
      (this.$target = a),
      (this.html = a && a.innerHTML),
      (this.lines = []),
      (this.words = []),
      (this.chars = []),
      (this.effects = []),
      (this.effectsCleanups = []),
      (this.cache = null),
      (this.ready = !1),
      (this.width = 0),
      (this.resizeTimeout = null);
    const p = () => this.html && (u || h || d) && this.split();
    (this.resizeObserver = new ResizeObserver(() => {
      clearTimeout(this.resizeTimeout),
        (this.resizeTimeout = setTimeout(() => {
          const m = a.offsetWidth;
          m !== this.width && ((this.width = m), p());
        }, 150));
    })),
      this.lineTemplate && !this.ready ? J.fonts.ready.then(p) : p(),
      a
        ? this.resizeObserver.observe(a)
        : console.warn("No Text Splitter target found.");
  }
  addEffect(e) {
    if (!de(e)) return console.warn("Effect must return a function.");
    const s = on(e);
    return (
      this.effects.push(s),
      this.ready && (this.effectsCleanups[this.effects.length - 1] = s(this)),
      this
    );
  }
  revert() {
    return (
      clearTimeout(this.resizeTimeout),
      (this.lines.length = this.words.length = this.chars.length = 0),
      this.resizeObserver.disconnect(),
      this.effectsCleanups.forEach((e) =>
        de(e) ? e(this) : e.revert && e.revert(),
      ),
      (this.$target.innerHTML = this.html),
      this
    );
  }
  splitNode(e) {
    const s = this.wordTemplate,
      i = this.charTemplate,
      n = this.includeSpaces,
      r = this.debug,
      o = e.nodeType;
    if (o === 3) {
      const c = e.nodeValue;
      if (c.trim()) {
        const l = [],
          a = this.words,
          u = this.chars,
          h = Lt.segment(c),
          d = J.createDocumentFragment();
        let p = null;
        for (const m of h) {
          const _ = m.segment,
            v = ds(m);
          if (!p || (v && p && ds(p))) l.push(_);
          else {
            const S = l.length - 1;
            !l[S].includes(" ") && !_.includes(" ") ? (l[S] += _) : l.push(_);
          }
          p = m;
        }
        for (let m = 0, _ = l.length; m < _; m++) {
          const v = l[m];
          if (v.trim()) {
            const S = l[m + 1],
              C = n && S && !S.trim(),
              R = v,
              $ = i ? Pt.segment(R) : null,
              w = i
                ? J.createDocumentFragment()
                : J.createTextNode(C ? v + " " : v);
            if (i) {
              const k = [...$];
              for (let I = 0, K = k.length; I < K; I++) {
                const te = k[I],
                  Z = I === K - 1 && C ? te.segment + " " : te.segment,
                  se = J.createTextNode(Z);
                Ut(i, u, se, w, rt, r, -1, a.length, u.length);
              }
            }
            s
              ? Ut(s, a, w, d, nt, r, -1, a.length, u.length)
              : i
                ? d.appendChild(w)
                : d.appendChild(J.createTextNode(v)),
              C && m++;
          } else {
            if (m && n) continue;
            d.appendChild(J.createTextNode(v));
          }
        }
        e.parentNode.replaceChild(d, e);
      }
    } else if (o === 1) {
      const c = [...e.childNodes];
      for (let l = 0, a = c.length; l < a; l++) this.splitNode(c[l]);
    }
  }
  split(e = !1) {
    const s = this.$target,
      i = !!this.cache && !e,
      n = this.lineTemplate,
      r = this.wordTemplate,
      o = this.charTemplate,
      c = J.fonts.status !== "loading",
      l = n && c;
    (this.ready = !n || c),
      (l || e) && this.effectsCleanups.forEach((d) => de(d) && d(this)),
      i ||
        (e &&
          ((s.innerHTML = this.html),
          (this.words.length = this.chars.length = 0)),
        this.splitNode(s),
        (this.cache = s.innerHTML)),
      l &&
        (i && (s.innerHTML = this.cache),
        (this.lines.length = 0),
        r && (this.words = mt(s, nt))),
      o && (l || r) && (this.chars = mt(s, rt));
    const a = this.words.length ? this.words : this.chars;
    let u,
      h = 0;
    for (let d = 0, p = a.length; d < p; d++) {
      const m = a[d],
        { top: _, height: v } = m.getBoundingClientRect();
      u && _ - u > v * 0.5 && h++, m.setAttribute(ot, `${h}`);
      const S = m.querySelectorAll(`[${ot}]`);
      let C = S.length;
      for (; C--; ) S[C].setAttribute(ot, `${h}`);
      u = _;
    }
    if (l) {
      const d = J.createDocumentFragment(),
        p = new Set(),
        m = [];
      for (let _ = 0; _ < h + 1; _++) {
        const v = s.cloneNode(!0);
        Fs(v, _, new Set()).forEach((S) => {
          const C = S.parentElement;
          C && p.add(C), S.remove();
        }),
          m.push(v);
      }
      p.forEach(Us);
      for (let _ = 0, v = m.length; _ < v; _++)
        Ut(n, this.lines, m[_], d, Ht, this.debug, _);
      (s.innerHTML = ""),
        s.appendChild(d),
        r && (this.words = mt(s, nt)),
        o && (this.chars = mt(s, rt));
    }
    if (this.linesOnly) {
      const d = this.words;
      let p = d.length;
      for (; p--; ) {
        const m = d[p];
        m.replaceWith(m.textContent);
      }
      d.length = 0;
    }
    if (this.accessible && (l || !i)) {
      const d = J.createElement("span");
      (d.style.cssText =
        "position:absolute;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;white-space:nowrap;"),
        (d.innerHTML = this.html),
        s.insertBefore(d, s.firstChild),
        this.lines.forEach(Mt),
        this.words.forEach(Mt),
        this.chars.forEach(Mt);
    }
    return (
      (this.width = s.offsetWidth),
      (l || e) &&
        this.effects.forEach((d, p) => (this.effectsCleanups[p] = d(this))),
      this
    );
  }
  refresh() {
    this.split(!0);
  }
}
const qn = (t, e) => new kn(t, e),
  Xn = { split: qn },
  zn = (t, e = {}) => {
    let s = [],
      i = 0;
    const n = e.from,
      r = e.reversed,
      o = e.ease,
      c = !g(o),
      a = c && !g(o.ease) ? o.ease : c ? Ct(o) : null,
      u = e.grid,
      h = e.axis,
      d = e.total,
      p = g(n) || n === 0 || n === "first",
      m = n === "center",
      _ = n === "last",
      v = n === "random",
      S = Me(t),
      C = e.use,
      R = Be(S ? t[0] : t),
      $ = S ? Be(t[1]) : 0,
      w = Ts.exec((S ? t[1] : t) + Oe),
      k = e.start || 0 + (S ? R : 0);
    let I = p ? 0 : qe(n) ? n : 0;
    return (K, te, me, Z) => {
      const [se] = Ds(K),
        fe = g(d) ? me : d,
        q = g(C) ? !1 : de(C) ? C(se, te, fe) : Ke(se, C),
        P = qe(q) || (We(q) && qe(+q)) ? +q : te;
      if ((m && (I = (fe - 1) / 2), _ && (I = fe - 1), !s.length)) {
        for (let f = 0; f < fe; f++) {
          if (!u) s.push(Vt(I - f));
          else {
            const U = m ? (u[0] - 1) / 2 : I % u[0],
              G = m ? (u[1] - 1) / 2 : at(I / u[0]),
              Ae = f % u[0],
              Ce = at(f / u[0]),
              H = U - Ae,
              F = G - Ce;
            let X = ws(H * H + F * F);
            h === "x" && (X = -H), h === "y" && (X = -F), s.push(X);
          }
          i = sn(...s);
        }
        a && (s = s.map((f) => a(f / i) * i)),
          r && (s = s.map((f) => (h ? (f < 0 ? f * -1 : -f) : Vt(i - f)))),
          v && (s = rn(s));
      }
      const oe = S ? ($ - R) / i : R;
      let O =
        (Z ? it(Z, g(e.start) ? Z.iterationDuration : k) : k) +
        (oe * x(s[P], 2) || 0);
      return e.modifier && (O = e.modifier(O)), w && (O = `${O}${w[2]}`), O;
    };
  };
export { Hn as c, zn as s, Xn as t };
