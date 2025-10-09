import { c as yt } from "./createLucideIcon.CgJsfuSp.js";
import { r as lr, R as ur } from "./index.BoFeahe5.js";
import { b as bt, r as i } from "./index.CY-HDqYb.js";
import { j as v } from "./jsx-runtime.D_zvdyIk.js";
import "./index.BvNfZMHe.js"; /**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dr = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  fr = yt("loader-circle", dr); /**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mr = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  pr = yt("x", mr);
function $(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return (o) => {
    if ((e?.(o), r === !1 || !o.defaultPrevented)) return t?.(o);
  };
}
function tt(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function wt(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const a = tt(o, t);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const a = n[o];
          typeof a == "function" ? a() : tt(e[o], null);
        }
      };
  };
}
function K(...e) {
  return i.useCallback(wt(...e), e);
}
function gr(e, t) {
  const r = i.createContext(t),
    n = (a) => {
      const { children: c, ...s } = a,
        l = i.useMemo(() => s, Object.values(s));
      return v.jsx(r.Provider, { value: l, children: c });
    };
  n.displayName = e + "Provider";
  function o(a) {
    const c = i.useContext(r);
    if (c) return c;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [n, o];
}
function hr(e, t = []) {
  let r = [];
  function n(a, c) {
    const s = i.createContext(c),
      l = r.length;
    r = [...r, c];
    const d = (p) => {
      const { scope: w, children: f, ...x } = p,
        u = w?.[e]?.[l] || s,
        y = i.useMemo(() => x, Object.values(x));
      return v.jsx(u.Provider, { value: y, children: f });
    };
    d.displayName = a + "Provider";
    function m(p, w) {
      const f = w?.[e]?.[l] || s,
        x = i.useContext(f);
      if (x) return x;
      if (c !== void 0) return c;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [d, m];
  }
  const o = () => {
    const a = r.map((c) => i.createContext(c));
    return (s) => {
      const l = s?.[e] || a;
      return i.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: l } }), [s, l]);
    };
  };
  return (o.scopeName = e), [n, vr(o, ...t)];
}
function vr(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return (a) => {
      const c = n.reduce((s, { useScope: l, scopeName: d }) => {
        const p = l(a)[`__scope${d}`];
        return { ...s, ...p };
      }, {});
      return i.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return (r.scopeName = t.scopeName), r;
}
var oe = globalThis?.document ? i.useLayoutEffect : () => {},
  br = bt[" useId ".trim().toString()] || (() => {}),
  yr = 0;
function Ae(e) {
  const [t, r] = i.useState(br());
  return (
    oe(() => {
      r((n) => n ?? String(yr++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
var wr = bt[" useInsertionEffect ".trim().toString()] || oe;
function xr({ prop: e, defaultProp: t, onChange: r = () => {}, caller: n }) {
  const [o, a, c] = Er({ defaultProp: t, onChange: r }),
    s = e !== void 0,
    l = s ? e : o;
  {
    const m = i.useRef(e !== void 0);
    i.useEffect(() => {
      const p = m.current;
      p !== s &&
        console.warn(
          `${n} is changing from ${p ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (m.current = s);
    }, [s, n]);
  }
  const d = i.useCallback(
    (m) => {
      if (s) {
        const p = kr(m) ? m(e) : m;
        p !== e && c.current?.(p);
      } else a(m);
    },
    [s, e, a, c],
  );
  return [l, d];
}
function Er({ defaultProp: e, onChange: t }) {
  const [r, n] = i.useState(e),
    o = i.useRef(r),
    a = i.useRef(t);
  return (
    wr(() => {
      a.current = t;
    }, [t]),
    i.useEffect(() => {
      o.current !== r && (a.current?.(r), (o.current = r));
    }, [r, o]),
    [r, n, a]
  );
}
function kr(e) {
  return typeof e == "function";
}
function xt(e) {
  const t = Cr(e),
    r = i.forwardRef((n, o) => {
      const { children: a, ...c } = n,
        s = i.Children.toArray(a),
        l = s.find(Rr);
      if (l) {
        const d = l.props.children,
          m = s.map((p) =>
            p === l
              ? i.Children.count(d) > 1
                ? i.Children.only(null)
                : i.isValidElement(d)
                  ? d.props.children
                  : null
              : p,
          );
        return v.jsx(t, {
          ...c,
          ref: o,
          children: i.isValidElement(d) ? i.cloneElement(d, void 0, m) : null,
        });
      }
      return v.jsx(t, { ...c, ref: o, children: a });
    });
  return (r.displayName = `${e}.Slot`), r;
}
function Cr(e) {
  const t = i.forwardRef((r, n) => {
    const { children: o, ...a } = r;
    if (i.isValidElement(o)) {
      const c = Ar(o),
        s = Pr(a, o.props);
      return (
        o.type !== i.Fragment && (s.ref = n ? wt(n, c) : c),
        i.cloneElement(o, s)
      );
    }
    return i.Children.count(o) > 1 ? i.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var Sr = Symbol("radix.slottable");
function Rr(e) {
  return (
    i.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === Sr
  );
}
function Pr(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n],
      a = t[n];
    /^on[A-Z]/.test(n)
      ? o && a
        ? (r[n] = (...s) => {
            const l = a(...s);
            return o(...s), l;
          })
        : o && (r[n] = o)
      : n === "style"
        ? (r[n] = { ...o, ...a })
        : n === "className" && (r[n] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Ar(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    r = t && "isReactWarning" in t && t.isReactWarning;
  return r
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (r = t && "isReactWarning" in t && t.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
var Nr = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  W = Nr.reduce((e, t) => {
    const r = xt(`Primitive.${t}`),
      n = i.forwardRef((o, a) => {
        const { asChild: c, ...s } = o,
          l = c ? r : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          v.jsx(l, { ...s, ref: a })
        );
      });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Or(e, t) {
  e && lr.flushSync(() => e.dispatchEvent(t));
}
function ae(e) {
  const t = i.useRef(e);
  return (
    i.useEffect(() => {
      t.current = e;
    }),
    i.useMemo(
      () =>
        (...r) =>
          t.current?.(...r),
      [],
    )
  );
}
function Mr(e, t = globalThis?.document) {
  const r = ae(e);
  i.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return (
      t.addEventListener("keydown", n, { capture: !0 }),
      () => t.removeEventListener("keydown", n, { capture: !0 })
    );
  }, [r, t]);
}
var Ir = "DismissableLayer",
  ze = "dismissableLayer.update",
  Dr = "dismissableLayer.pointerDownOutside",
  Tr = "dismissableLayer.focusOutside",
  rt,
  Et = i.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  kt = i.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: n,
        onPointerDownOutside: o,
        onFocusOutside: a,
        onInteractOutside: c,
        onDismiss: s,
        ...l
      } = e,
      d = i.useContext(Et),
      [m, p] = i.useState(null),
      w = m?.ownerDocument ?? globalThis?.document,
      [, f] = i.useState({}),
      x = K(t, (P) => p(P)),
      u = Array.from(d.layers),
      [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1),
      E = u.indexOf(y),
      S = m ? u.indexOf(m) : -1,
      A = d.layersWithOutsidePointerEventsDisabled.size > 0,
      R = S >= E,
      N = jr((P) => {
        const b = P.target,
          D = [...d.branches].some((X) => X.contains(b));
        !R || D || (o?.(P), c?.(P), P.defaultPrevented || s?.());
      }, w),
      I = Fr((P) => {
        const b = P.target;
        [...d.branches].some((X) => X.contains(b)) ||
          (a?.(P), c?.(P), P.defaultPrevented || s?.());
      }, w);
    return (
      Mr((P) => {
        S === d.layers.size - 1 &&
          (n?.(P), !P.defaultPrevented && s && (P.preventDefault(), s()));
      }, w),
      i.useEffect(() => {
        if (m)
          return (
            r &&
              (d.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((rt = w.body.style.pointerEvents),
                (w.body.style.pointerEvents = "none")),
              d.layersWithOutsidePointerEventsDisabled.add(m)),
            d.layers.add(m),
            nt(),
            () => {
              r &&
                d.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (w.body.style.pointerEvents = rt);
            }
          );
      }, [m, w, r, d]),
      i.useEffect(
        () => () => {
          m &&
            (d.layers.delete(m),
            d.layersWithOutsidePointerEventsDisabled.delete(m),
            nt());
        },
        [m, d],
      ),
      i.useEffect(() => {
        const P = () => f({});
        return (
          document.addEventListener(ze, P),
          () => document.removeEventListener(ze, P)
        );
      }, []),
      v.jsx(W.div, {
        ...l,
        ref: x,
        style: {
          pointerEvents: A ? (R ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: $(e.onFocusCapture, I.onFocusCapture),
        onBlurCapture: $(e.onBlurCapture, I.onBlurCapture),
        onPointerDownCapture: $(e.onPointerDownCapture, N.onPointerDownCapture),
      })
    );
  });
kt.displayName = Ir;
var Lr = "DismissableLayerBranch",
  _r = i.forwardRef((e, t) => {
    const r = i.useContext(Et),
      n = i.useRef(null),
      o = K(t, n);
    return (
      i.useEffect(() => {
        const a = n.current;
        if (a)
          return (
            r.branches.add(a),
            () => {
              r.branches.delete(a);
            }
          );
      }, [r.branches]),
      v.jsx(W.div, { ...e, ref: o })
    );
  });
_r.displayName = Lr;
function jr(e, t = globalThis?.document) {
  const r = ae(e),
    n = i.useRef(!1),
    o = i.useRef(() => {});
  return (
    i.useEffect(() => {
      const a = (s) => {
          if (s.target && !n.current) {
            const l = () => {
              Ct(Dr, r, d, { discrete: !0 });
            };
            const d = { originalEvent: s };
            s.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = l),
                t.addEventListener("click", o.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", o.current);
          n.current = !1;
        },
        c = window.setTimeout(() => {
          t.addEventListener("pointerdown", a);
        }, 0);
      return () => {
        window.clearTimeout(c),
          t.removeEventListener("pointerdown", a),
          t.removeEventListener("click", o.current);
      };
    }, [t, r]),
    { onPointerDownCapture: () => (n.current = !0) }
  );
}
function Fr(e, t = globalThis?.document) {
  const r = ae(e),
    n = i.useRef(!1);
  return (
    i.useEffect(() => {
      const o = (a) => {
        a.target &&
          !n.current &&
          Ct(Tr, r, { originalEvent: a }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, r]),
    {
      onFocusCapture: () => (n.current = !0),
      onBlurCapture: () => (n.current = !1),
    }
  );
}
function nt() {
  const e = new CustomEvent(ze);
  document.dispatchEvent(e);
}
function Ct(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }),
    n ? Or(o, a) : o.dispatchEvent(a);
}
var Ne = "focusScope.autoFocusOnMount",
  Oe = "focusScope.autoFocusOnUnmount",
  ot = { bubbles: !1, cancelable: !0 },
  zr = "FocusScope",
  St = i.forwardRef((e, t) => {
    const {
        loop: r = !1,
        trapped: n = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        ...c
      } = e,
      [s, l] = i.useState(null),
      d = ae(o),
      m = ae(a),
      p = i.useRef(null),
      w = K(t, (u) => l(u)),
      f = i.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    i.useEffect(() => {
      if (n) {
        const u = (A) => {
            if (f.paused || !s) return;
            const R = A.target;
            s.contains(R) ? (p.current = R) : B(p.current, { select: !0 });
          },
          y = (A) => {
            if (f.paused || !s) return;
            const R = A.relatedTarget;
            R !== null && (s.contains(R) || B(p.current, { select: !0 }));
          },
          E = (A) => {
            if (document.activeElement === document.body)
              for (const N of A) N.removedNodes.length > 0 && B(s);
          };
        document.addEventListener("focusin", u),
          document.addEventListener("focusout", y);
        const S = new MutationObserver(E);
        return (
          s && S.observe(s, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", u),
              document.removeEventListener("focusout", y),
              S.disconnect();
          }
        );
      }
    }, [n, s, f.paused]),
      i.useEffect(() => {
        if (s) {
          st.add(f);
          const u = document.activeElement;
          if (!s.contains(u)) {
            const E = new CustomEvent(Ne, ot);
            s.addEventListener(Ne, d),
              s.dispatchEvent(E),
              E.defaultPrevented ||
                (Wr(Vr(Rt(s)), { select: !0 }),
                document.activeElement === u && B(s));
          }
          return () => {
            s.removeEventListener(Ne, d),
              setTimeout(() => {
                const E = new CustomEvent(Oe, ot);
                s.addEventListener(Oe, m),
                  s.dispatchEvent(E),
                  E.defaultPrevented || B(u ?? document.body, { select: !0 }),
                  s.removeEventListener(Oe, m),
                  st.remove(f);
              }, 0);
          };
        }
      }, [s, d, m, f]);
    const x = i.useCallback(
      (u) => {
        if ((!r && !n) || f.paused) return;
        const y = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey,
          E = document.activeElement;
        if (y && E) {
          const S = u.currentTarget,
            [A, R] = Gr(S);
          A && R
            ? !u.shiftKey && E === R
              ? (u.preventDefault(), r && B(A, { select: !0 }))
              : u.shiftKey &&
                E === A &&
                (u.preventDefault(), r && B(R, { select: !0 }))
            : E === S && u.preventDefault();
        }
      },
      [r, n, f.paused],
    );
    return v.jsx(W.div, { tabIndex: -1, ...c, ref: w, onKeyDown: x });
  });
St.displayName = zr;
function Wr(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if ((B(n, { select: t }), document.activeElement !== r)) return;
}
function Gr(e) {
  const t = Rt(e),
    r = at(t, e),
    n = at(t.reverse(), e);
  return [r, n];
}
function Rt(e) {
  const t = [],
    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (n) => {
        const o = n.tagName === "INPUT" && n.type === "hidden";
        return n.disabled || n.hidden || o
          ? NodeFilter.FILTER_SKIP
          : n.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function at(e, t) {
  for (const r of e) if (!Br(r, { upTo: t })) return r;
}
function Br(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function $r(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function B(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && $r(e) && t && e.select();
  }
}
var st = Ur();
function Ur() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && r?.pause(), (e = it(e, t)), e.unshift(t);
    },
    remove(t) {
      (e = it(e, t)), e[0]?.resume();
    },
  };
}
function it(e, t) {
  const r = [...e],
    n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function Vr(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Hr = "Portal",
  Pt = i.forwardRef((e, t) => {
    const { container: r, ...n } = e,
      [o, a] = i.useState(!1);
    oe(() => a(!0), []);
    const c = r || (o && globalThis?.document?.body);
    return c ? ur.createPortal(v.jsx(W.div, { ...n, ref: t }), c) : null;
  });
Pt.displayName = Hr;
function Kr(e, t) {
  return i.useReducer((r, n) => t[r][n] ?? r, e);
}
var xe = (e) => {
  const { present: t, children: r } = e,
    n = Xr(t),
    o =
      typeof r == "function" ? r({ present: n.isPresent }) : i.Children.only(r),
    a = K(n.ref, Yr(o));
  return typeof r == "function" || n.isPresent
    ? i.cloneElement(o, { ref: a })
    : null;
};
xe.displayName = "Presence";
function Xr(e) {
  const [t, r] = i.useState(),
    n = i.useRef(null),
    o = i.useRef(e),
    a = i.useRef("none"),
    c = e ? "mounted" : "unmounted",
    [s, l] = Kr(c, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    i.useEffect(() => {
      const d = de(n.current);
      a.current = s === "mounted" ? d : "none";
    }, [s]),
    oe(() => {
      const d = n.current,
        m = o.current;
      if (m !== e) {
        const w = a.current,
          f = de(d);
        e
          ? l("MOUNT")
          : f === "none" || d?.display === "none"
            ? l("UNMOUNT")
            : l(m && w !== f ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, l]),
    oe(() => {
      if (t) {
        let d;
        const m = t.ownerDocument.defaultView ?? window,
          p = (f) => {
            const u = de(n.current).includes(CSS.escape(f.animationName));
            if (f.target === t && u && (l("ANIMATION_END"), !o.current)) {
              const y = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (d = m.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = y);
                }));
            }
          },
          w = (f) => {
            f.target === t && (a.current = de(n.current));
          };
        return (
          t.addEventListener("animationstart", w),
          t.addEventListener("animationcancel", p),
          t.addEventListener("animationend", p),
          () => {
            m.clearTimeout(d),
              t.removeEventListener("animationstart", w),
              t.removeEventListener("animationcancel", p),
              t.removeEventListener("animationend", p);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(s),
      ref: i.useCallback((d) => {
        (n.current = d ? getComputedStyle(d) : null), r(d);
      }, []),
    }
  );
}
function de(e) {
  return e?.animationName || "none";
}
function Yr(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    r = t && "isReactWarning" in t && t.isReactWarning;
  return r
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (r = t && "isReactWarning" in t && t.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
var Me = 0;
function qr() {
  i.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? ct()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? ct()),
      Me++,
      () => {
        Me === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          Me--;
      }
    );
  }, []);
}
function ct() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var j = function () {
  return (
    (j =
      Object.assign ||
      ((t) => {
        for (var r, n = 1, o = arguments.length; n < o; n++) {
          r = arguments[n];
          for (var a in r) Object.hasOwn(r, a) && (t[a] = r[a]);
        }
        return t;
      })),
    j.apply(this, arguments)
  );
};
function At(e, t) {
  var r = {};
  for (var n in e) Object.hasOwn(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]]);
  return r;
}
function Zr(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, a; n < o; n++)
      (a || !(n in t)) &&
        (a || (a = Array.prototype.slice.call(t, 0, n)), (a[n] = t[n]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var be = "right-scroll-bar-position",
  ye = "width-before-scroll-bar",
  Qr = "with-scroll-bars-hidden",
  Jr = "--removed-body-scroll-bar-size";
function Ie(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function en(e, t) {
  var r = i.useState(() => ({
    value: e,
    callback: t,
    facade: {
      get current() {
        return r.value;
      },
      set current(n) {
        var o = r.value;
        o !== n && ((r.value = n), r.callback(n, o));
      },
    },
  }))[0];
  return (r.callback = t), r.facade;
}
var tn = typeof window < "u" ? i.useLayoutEffect : i.useEffect,
  lt = new WeakMap();
function rn(e, t) {
  var r = en(null, (n) => e.forEach((o) => Ie(o, n)));
  return (
    tn(() => {
      var n = lt.get(r);
      if (n) {
        var o = new Set(n),
          a = new Set(e),
          c = r.current;
        o.forEach((s) => {
          a.has(s) || Ie(s, null);
        }),
          a.forEach((s) => {
            o.has(s) || Ie(s, c);
          });
      }
      lt.set(r, e);
    }, [e]),
    r
  );
}
function nn(e) {
  return e;
}
function on(e, t) {
  t === void 0 && (t = nn);
  var r = [],
    n = !1,
    o = {
      read: () => {
        if (n)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return r.length ? r[r.length - 1] : e;
      },
      useMedium: (a) => {
        var c = t(a, n);
        return (
          r.push(c),
          () => {
            r = r.filter((s) => s !== c);
          }
        );
      },
      assignSyncMedium: (a) => {
        for (n = !0; r.length; ) {
          var c = r;
          (r = []), c.forEach(a);
        }
        r = { push: (s) => a(s), filter: () => r };
      },
      assignMedium: (a) => {
        n = !0;
        var c = [];
        if (r.length) {
          var s = r;
          (r = []), s.forEach(a), (c = r);
        }
        var l = () => {
            var m = c;
            (c = []), m.forEach(a);
          },
          d = () => Promise.resolve().then(l);
        d(),
          (r = {
            push: (m) => {
              c.push(m), d();
            },
            filter: (m) => ((c = c.filter(m)), r),
          });
      },
    };
  return o;
}
function an(e) {
  e === void 0 && (e = {});
  var t = on(null);
  return (t.options = j({ async: !0, ssr: !1 }, e)), t;
}
var Nt = (e) => {
  var t = e.sideCar,
    r = At(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var n = t.read();
  if (!n) throw new Error("Sidecar medium not found");
  return i.createElement(n, j({}, r));
};
Nt.isSideCarExport = !0;
function sn(e, t) {
  return e.useMedium(t), Nt;
}
var Ot = an(),
  De = () => {},
  Ee = i.forwardRef((e, t) => {
    var r = i.useRef(null),
      n = i.useState({
        onScrollCapture: De,
        onWheelCapture: De,
        onTouchMoveCapture: De,
      }),
      o = n[0],
      a = n[1],
      c = e.forwardProps,
      s = e.children,
      l = e.className,
      d = e.removeScrollBar,
      m = e.enabled,
      p = e.shards,
      w = e.sideCar,
      f = e.noRelative,
      x = e.noIsolation,
      u = e.inert,
      y = e.allowPinchZoom,
      E = e.as,
      S = E === void 0 ? "div" : E,
      A = e.gapMode,
      R = At(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      N = w,
      I = rn([r, t]),
      P = j(j({}, R), o);
    return i.createElement(
      i.Fragment,
      null,
      m &&
        i.createElement(N, {
          sideCar: Ot,
          removeScrollBar: d,
          shards: p,
          noRelative: f,
          noIsolation: x,
          inert: u,
          setCallbacks: a,
          allowPinchZoom: !!y,
          lockRef: r,
          gapMode: A,
        }),
      c
        ? i.cloneElement(i.Children.only(s), j(j({}, P), { ref: I }))
        : i.createElement(S, j({}, P, { className: l, ref: I }), s),
    );
  });
Ee.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Ee.classNames = { fullWidth: ye, zeroRight: be };
var cn = () => {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function ln() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = cn();
  return t && e.setAttribute("nonce", t), e;
}
function un(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function dn(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var fn = () => {
    var e = 0,
      t = null;
    return {
      add: (r) => {
        e == 0 && (t = ln()) && (un(t, r), dn(t)), e++;
      },
      remove: () => {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  mn = () => {
    var e = fn();
    return (t, r) => {
      i.useEffect(
        () => (
          e.add(t),
          () => {
            e.remove();
          }
        ),
        [t && r],
      );
    };
  },
  Mt = () => {
    var e = mn(),
      t = (r) => {
        var n = r.styles,
          o = r.dynamic;
        return e(n, o), null;
      };
    return t;
  },
  pn = { left: 0, top: 0, right: 0, gap: 0 },
  Te = (e) => parseInt(e || "", 10) || 0,
  gn = (e) => {
    var t = window.getComputedStyle(document.body),
      r = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      n = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Te(r), Te(n), Te(o)];
  },
  hn = (e) => {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return pn;
    var t = gn(e),
      r = document.documentElement.clientWidth,
      n = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, n - r + t[2] - t[0]),
    };
  },
  vn = Mt(),
  ee = "data-scroll-locked",
  bn = (e, t, r, n) => {
    var o = e.left,
      a = e.top,
      c = e.right,
      s = e.gap;
    return (
      r === void 0 && (r = "margin"),
      `
  .`
        .concat(
          Qr,
          ` {
   overflow: hidden `,
        )
        .concat(
          n,
          `;
   padding-right: `,
        )
        .concat(s, "px ")
        .concat(
          n,
          `;
  }
  body[`,
        )
        .concat(
          ee,
          `] {
    overflow: hidden `,
        )
        .concat(
          n,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(n, ";"),
            r === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  a,
                  `px;
    padding-right: `,
                )
                .concat(
                  c,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(s, "px ")
                .concat(
                  n,
                  `;
    `,
                ),
            r === "padding" &&
              "padding-right: ".concat(s, "px ").concat(n, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          be,
          ` {
    right: `,
        )
        .concat(s, "px ")
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(
          ye,
          ` {
    margin-right: `,
        )
        .concat(s, "px ")
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(be, " .")
        .concat(
          be,
          ` {
    right: 0 `,
        )
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(ye, " .")
        .concat(
          ye,
          ` {
    margin-right: 0 `,
        )
        .concat(
          n,
          `;
  }
  
  body[`,
        )
        .concat(
          ee,
          `] {
    `,
        )
        .concat(Jr, ": ")
        .concat(
          s,
          `px;
  }
`,
        )
    );
  },
  ut = () => {
    var e = parseInt(document.body.getAttribute(ee) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  yn = () => {
    i.useEffect(
      () => (
        document.body.setAttribute(ee, (ut() + 1).toString()),
        () => {
          var e = ut() - 1;
          e <= 0
            ? document.body.removeAttribute(ee)
            : document.body.setAttribute(ee, e.toString());
        }
      ),
      [],
    );
  },
  wn = (e) => {
    var t = e.noRelative,
      r = e.noImportant,
      n = e.gapMode,
      o = n === void 0 ? "margin" : n;
    yn();
    var a = i.useMemo(() => hn(o), [o]);
    return i.createElement(vn, { styles: bn(a, !t, o, r ? "" : "!important") });
  },
  We = !1;
if (typeof window < "u")
  try {
    var fe = Object.defineProperty({}, "passive", {
      get: () => ((We = !0), !0),
    });
    window.addEventListener("test", fe, fe),
      window.removeEventListener("test", fe, fe);
  } catch {
    We = !1;
  }
var q = We ? { passive: !1 } : !1,
  xn = (e) => e.tagName === "TEXTAREA",
  It = (e, t) => {
    if (!(e instanceof Element)) return !1;
    var r = window.getComputedStyle(e);
    return (
      r[t] !== "hidden" &&
      !(r.overflowY === r.overflowX && !xn(e) && r[t] === "visible")
    );
  },
  En = (e) => It(e, "overflowY"),
  kn = (e) => It(e, "overflowX"),
  dt = (e, t) => {
    var r = t.ownerDocument,
      n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var o = Dt(e, n);
      if (o) {
        var a = Tt(e, n),
          c = a[1],
          s = a[2];
        if (c > s) return !0;
      }
      n = n.parentNode;
    } while (n && n !== r.body);
    return !1;
  },
  Cn = (e) => {
    var t = e.scrollTop,
      r = e.scrollHeight,
      n = e.clientHeight;
    return [t, r, n];
  },
  Sn = (e) => {
    var t = e.scrollLeft,
      r = e.scrollWidth,
      n = e.clientWidth;
    return [t, r, n];
  },
  Dt = (e, t) => (e === "v" ? En(t) : kn(t)),
  Tt = (e, t) => (e === "v" ? Cn(t) : Sn(t)),
  Rn = (e, t) => (e === "h" && t === "rtl" ? -1 : 1),
  Pn = (e, t, r, n, o) => {
    var a = Rn(e, window.getComputedStyle(t).direction),
      c = a * n,
      s = r.target,
      l = t.contains(s),
      d = !1,
      m = c > 0,
      p = 0,
      w = 0;
    do {
      if (!s) break;
      var f = Tt(e, s),
        x = f[0],
        u = f[1],
        y = f[2],
        E = u - y - a * x;
      (x || E) && Dt(e, s) && ((p += E), (w += x));
      var S = s.parentNode;
      s = S && S.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? S.host : S;
    } while ((!l && s !== document.body) || (l && (t.contains(s) || t === s)));
    return ((m && Math.abs(p) < 1) || (!m && Math.abs(w) < 1)) && (d = !0), d;
  },
  me = (e) =>
    "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0],
  ft = (e) => [e.deltaX, e.deltaY],
  mt = (e) => (e && "current" in e ? e.current : e),
  An = (e, t) => e[0] === t[0] && e[1] === t[1],
  Nn = (e) =>
    `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      ),
  On = 0,
  Z = [];
function Mn(e) {
  var t = i.useRef([]),
    r = i.useRef([0, 0]),
    n = i.useRef(),
    o = i.useState(On++)[0],
    a = i.useState(Mt)[0],
    c = i.useRef(e);
  i.useEffect(() => {
    c.current = e;
  }, [e]),
    i.useEffect(() => {
      if (e.inert) {
        document.body.classList.add("block-interactivity-".concat(o));
        var u = Zr([e.lockRef.current], (e.shards || []).map(mt), !0).filter(
          Boolean,
        );
        return (
          u.forEach((y) => y.classList.add("allow-interactivity-".concat(o))),
          () => {
            document.body.classList.remove("block-interactivity-".concat(o)),
              u.forEach((y) =>
                y.classList.remove("allow-interactivity-".concat(o)),
              );
          }
        );
      }
    }, [e.inert, e.lockRef.current, e.shards]);
  var s = i.useCallback((u, y) => {
      if (
        ("touches" in u && u.touches.length === 2) ||
        (u.type === "wheel" && u.ctrlKey)
      )
        return !c.current.allowPinchZoom;
      var E = me(u),
        S = r.current,
        A = "deltaX" in u ? u.deltaX : S[0] - E[0],
        R = "deltaY" in u ? u.deltaY : S[1] - E[1],
        N,
        I = u.target,
        P = Math.abs(A) > Math.abs(R) ? "h" : "v";
      if ("touches" in u && P === "h" && I.type === "range") return !1;
      var b = dt(P, I);
      if (!b) return !0;
      if ((b ? (N = P) : ((N = P === "v" ? "h" : "v"), (b = dt(P, I))), !b))
        return !1;
      if (
        (!n.current && "changedTouches" in u && (A || R) && (n.current = N), !N)
      )
        return !0;
      var D = n.current || N;
      return Pn(D, y, u, D === "h" ? A : R);
    }, []),
    l = i.useCallback((u) => {
      var y = u;
      if (!(!Z.length || Z[Z.length - 1] !== a)) {
        var E = "deltaY" in y ? ft(y) : me(y),
          S = t.current.filter(
            (N) =>
              N.name === y.type &&
              (N.target === y.target || y.target === N.shadowParent) &&
              An(N.delta, E),
          )[0];
        if (S && S.should) {
          y.cancelable && y.preventDefault();
          return;
        }
        if (!S) {
          var A = (c.current.shards || [])
              .map(mt)
              .filter(Boolean)
              .filter((N) => N.contains(y.target)),
            R = A.length > 0 ? s(y, A[0]) : !c.current.noIsolation;
          R && y.cancelable && y.preventDefault();
        }
      }
    }, []),
    d = i.useCallback((u, y, E, S) => {
      var A = { name: u, delta: y, target: E, should: S, shadowParent: In(E) };
      t.current.push(A),
        setTimeout(() => {
          t.current = t.current.filter((R) => R !== A);
        }, 1);
    }, []),
    m = i.useCallback((u) => {
      (r.current = me(u)), (n.current = void 0);
    }, []),
    p = i.useCallback((u) => {
      d(u.type, ft(u), u.target, s(u, e.lockRef.current));
    }, []),
    w = i.useCallback((u) => {
      d(u.type, me(u), u.target, s(u, e.lockRef.current));
    }, []);
  i.useEffect(
    () => (
      Z.push(a),
      e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: w,
      }),
      document.addEventListener("wheel", l, q),
      document.addEventListener("touchmove", l, q),
      document.addEventListener("touchstart", m, q),
      () => {
        (Z = Z.filter((u) => u !== a)),
          document.removeEventListener("wheel", l, q),
          document.removeEventListener("touchmove", l, q),
          document.removeEventListener("touchstart", m, q);
      }
    ),
    [],
  );
  var f = e.removeScrollBar,
    x = e.inert;
  return i.createElement(
    i.Fragment,
    null,
    x ? i.createElement(a, { styles: Nn(o) }) : null,
    f
      ? i.createElement(wn, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function In(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const Dn = sn(Ot, Mn);
var Lt = i.forwardRef((e, t) =>
  i.createElement(Ee, j({}, e, { ref: t, sideCar: Dn })),
);
Lt.classNames = Ee.classNames;
var Tn = (e) => {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Q = new WeakMap(),
  pe = new WeakMap(),
  ge = {},
  Le = 0,
  _t = (e) => e && (e.host || _t(e.parentNode)),
  Ln = (e, t) =>
    t
      .map((r) => {
        if (e.contains(r)) return r;
        var n = _t(r);
        return n && e.contains(n)
          ? n
          : (console.error(
              "aria-hidden",
              r,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter((r) => !!r),
  _n = (e, t, r, n) => {
    var o = Ln(t, Array.isArray(e) ? e : [e]);
    ge[r] || (ge[r] = new WeakMap());
    var a = ge[r],
      c = [],
      s = new Set(),
      l = new Set(o),
      d = (p) => {
        !p || s.has(p) || (s.add(p), d(p.parentNode));
      };
    o.forEach(d);
    var m = (p) => {
      !p ||
        l.has(p) ||
        Array.prototype.forEach.call(p.children, (w) => {
          if (s.has(w)) m(w);
          else
            try {
              var f = w.getAttribute(n),
                x = f !== null && f !== "false",
                u = (Q.get(w) || 0) + 1,
                y = (a.get(w) || 0) + 1;
              Q.set(w, u),
                a.set(w, y),
                c.push(w),
                u === 1 && x && pe.set(w, !0),
                y === 1 && w.setAttribute(r, "true"),
                x || w.setAttribute(n, "true");
            } catch (E) {
              console.error("aria-hidden: cannot operate on ", w, E);
            }
        });
    };
    return (
      m(t),
      s.clear(),
      Le++,
      () => {
        c.forEach((p) => {
          var w = Q.get(p) - 1,
            f = a.get(p) - 1;
          Q.set(p, w),
            a.set(p, f),
            w || (pe.has(p) || p.removeAttribute(n), pe.delete(p)),
            f || p.removeAttribute(r);
        }),
          Le--,
          Le ||
            ((Q = new WeakMap()),
            (Q = new WeakMap()),
            (pe = new WeakMap()),
            (ge = {}));
      }
    );
  },
  jn = (e, t, r) => {
    r === void 0 && (r = "data-aria-hidden");
    var n = Array.from(Array.isArray(e) ? e : [e]),
      o = Tn(e);
    return o
      ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))),
        _n(n, o, r, "aria-hidden"))
      : () => null;
  },
  ke = "Dialog",
  [jt] = hr(ke),
  [Fn, _] = jt(ke),
  Ft = (e) => {
    const {
        __scopeDialog: t,
        children: r,
        open: n,
        defaultOpen: o,
        onOpenChange: a,
        modal: c = !0,
      } = e,
      s = i.useRef(null),
      l = i.useRef(null),
      [d, m] = xr({ prop: n, defaultProp: o ?? !1, onChange: a, caller: ke });
    return v.jsx(Fn, {
      scope: t,
      triggerRef: s,
      contentRef: l,
      contentId: Ae(),
      titleId: Ae(),
      descriptionId: Ae(),
      open: d,
      onOpenChange: m,
      onOpenToggle: i.useCallback(() => m((p) => !p), [m]),
      modal: c,
      children: r,
    });
  };
Ft.displayName = ke;
var zt = "DialogTrigger",
  zn = i.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e,
      o = _(zt, r),
      a = K(t, o.triggerRef);
    return v.jsx(W.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": He(o.open),
      ...n,
      ref: a,
      onClick: $(e.onClick, o.onOpenToggle),
    });
  });
zn.displayName = zt;
var Ue = "DialogPortal",
  [Wn, Wt] = jt(Ue, { forceMount: void 0 }),
  Gt = (e) => {
    const { __scopeDialog: t, forceMount: r, children: n, container: o } = e,
      a = _(Ue, t);
    return v.jsx(Wn, {
      scope: t,
      forceMount: r,
      children: i.Children.map(n, (c) =>
        v.jsx(xe, {
          present: r || a.open,
          children: v.jsx(Pt, { asChild: !0, container: o, children: c }),
        }),
      ),
    });
  };
Gt.displayName = Ue;
var we = "DialogOverlay",
  Bt = i.forwardRef((e, t) => {
    const r = Wt(we, e.__scopeDialog),
      { forceMount: n = r.forceMount, ...o } = e,
      a = _(we, e.__scopeDialog);
    return a.modal
      ? v.jsx(xe, {
          present: n || a.open,
          children: v.jsx(Bn, { ...o, ref: t }),
        })
      : null;
  });
Bt.displayName = we;
var Gn = xt("DialogOverlay.RemoveScroll"),
  Bn = i.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e,
      o = _(we, r);
    return v.jsx(Lt, {
      as: Gn,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: v.jsx(W.div, {
        "data-state": He(o.open),
        ...n,
        ref: t,
        style: { pointerEvents: "auto", ...n.style },
      }),
    });
  }),
  H = "DialogContent",
  $t = i.forwardRef((e, t) => {
    const r = Wt(H, e.__scopeDialog),
      { forceMount: n = r.forceMount, ...o } = e,
      a = _(H, e.__scopeDialog);
    return v.jsx(xe, {
      present: n || a.open,
      children: a.modal
        ? v.jsx($n, { ...o, ref: t })
        : v.jsx(Un, { ...o, ref: t }),
    });
  });
$t.displayName = H;
var $n = i.forwardRef((e, t) => {
    const r = _(H, e.__scopeDialog),
      n = i.useRef(null),
      o = K(t, r.contentRef, n);
    return (
      i.useEffect(() => {
        const a = n.current;
        if (a) return jn(a);
      }, []),
      v.jsx(Ut, {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: $(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: $(e.onPointerDownOutside, (a) => {
          const c = a.detail.originalEvent,
            s = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: $(e.onFocusOutside, (a) => a.preventDefault()),
      })
    );
  }),
  Un = i.forwardRef((e, t) => {
    const r = _(H, e.__scopeDialog),
      n = i.useRef(!1),
      o = i.useRef(!1);
    return v.jsx(Ut, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (a) => {
        e.onCloseAutoFocus?.(a),
          a.defaultPrevented ||
            (n.current || r.triggerRef.current?.focus(), a.preventDefault()),
          (n.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (a) => {
        e.onInteractOutside?.(a),
          a.defaultPrevented ||
            ((n.current = !0),
            a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const c = a.target;
        r.triggerRef.current?.contains(c) && a.preventDefault(),
          a.detail.originalEvent.type === "focusin" &&
            o.current &&
            a.preventDefault();
      },
    });
  }),
  Ut = i.forwardRef((e, t) => {
    const {
        __scopeDialog: r,
        trapFocus: n,
        onOpenAutoFocus: o,
        onCloseAutoFocus: a,
        ...c
      } = e,
      s = _(H, r),
      l = i.useRef(null),
      d = K(t, l);
    return (
      qr(),
      v.jsxs(v.Fragment, {
        children: [
          v.jsx(St, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            children: v.jsx(kt, {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": He(s.open),
              ...c,
              ref: d,
              onDismiss: () => s.onOpenChange(!1),
            }),
          }),
          v.jsxs(v.Fragment, {
            children: [
              v.jsx(Vn, { titleId: s.titleId }),
              v.jsx(Kn, { contentRef: l, descriptionId: s.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Ve = "DialogTitle",
  Vt = i.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e,
      o = _(Ve, r);
    return v.jsx(W.h2, { id: o.titleId, ...n, ref: t });
  });
Vt.displayName = Ve;
var Ht = "DialogDescription",
  Kt = i.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e,
      o = _(Ht, r);
    return v.jsx(W.p, { id: o.descriptionId, ...n, ref: t });
  });
Kt.displayName = Ht;
var Xt = "DialogClose",
  Yt = i.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e,
      o = _(Xt, r);
    return v.jsx(W.button, {
      type: "button",
      ...n,
      ref: t,
      onClick: $(e.onClick, () => o.onOpenChange(!1)),
    });
  });
Yt.displayName = Xt;
function He(e) {
  return e ? "open" : "closed";
}
var qt = "DialogTitleWarning",
  [Yo, Zt] = gr(qt, { contentName: H, titleName: Ve, docsSlug: "dialog" }),
  Vn = ({ titleId: e }) => {
    const t = Zt(qt),
      r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      i.useEffect(() => {
        e && (document.getElementById(e) || console.error(r));
      }, [r, e]),
      null
    );
  },
  Hn = "DialogDescriptionWarning",
  Kn = ({ contentRef: e, descriptionId: t }) => {
    const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Zt(Hn).contentName}}.`;
    return (
      i.useEffect(() => {
        const o = e.current?.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(n));
      }, [n, e, t]),
      null
    );
  },
  Xn = Ft,
  Yn = Gt,
  qn = Bt,
  Zn = $t,
  Qn = Vt,
  Jn = Kt,
  eo = Yt;
function Qt(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = Qt(e[t])) && (n && (n += " "), (n += r));
    } else for (r in e) e[r] && (n && (n += " "), (n += r));
  return n;
}
function to() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = Qt(e)) && (n && (n += " "), (n += t));
  return n;
}
const Ke = "-",
  ro = (e) => {
    const t = oo(e),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: n } = e;
    return {
      getClassGroupId: (c) => {
        const s = c.split(Ke);
        return s[0] === "" && s.length !== 1 && s.shift(), Jt(s, t) || no(c);
      },
      getConflictingClassGroupIds: (c, s) => {
        const l = r[c] || [];
        return s && n[c] ? [...l, ...n[c]] : l;
      },
    };
  },
  Jt = (e, t) => {
    if (e.length === 0) return t.classGroupId;
    const r = e[0],
      n = t.nextPart.get(r),
      o = n ? Jt(e.slice(1), n) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const a = e.join(Ke);
    return t.validators.find(({ validator: c }) => c(a))?.classGroupId;
  },
  pt = /^\[(.+)\]$/,
  no = (e) => {
    if (pt.test(e)) {
      const t = pt.exec(e)[1],
        r = t?.substring(0, t.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  },
  oo = (e) => {
    const { theme: t, classGroups: r } = e,
      n = { nextPart: new Map(), validators: [] };
    for (const o in r) Ge(r[o], n, o, t);
    return n;
  },
  Ge = (e, t, r, n) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const a = o === "" ? t : gt(t, o);
        a.classGroupId = r;
        return;
      }
      if (typeof o == "function") {
        if (ao(o)) {
          Ge(o(n), t, r, n);
          return;
        }
        t.validators.push({ validator: o, classGroupId: r });
        return;
      }
      Object.entries(o).forEach(([a, c]) => {
        Ge(c, gt(t, a), r, n);
      });
    });
  },
  gt = (e, t) => {
    let r = e;
    return (
      t.split(Ke).forEach((n) => {
        r.nextPart.has(n) ||
          r.nextPart.set(n, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(n));
      }),
      r
    );
  },
  ao = (e) => e.isThemeGetter,
  so = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      r = new Map(),
      n = new Map();
    const o = (a, c) => {
      r.set(a, c), t++, t > e && ((t = 0), (n = r), (r = new Map()));
    };
    return {
      get(a) {
        let c = r.get(a);
        if (c !== void 0) return c;
        if ((c = n.get(a)) !== void 0) return o(a, c), c;
      },
      set(a, c) {
        r.has(a) ? r.set(a, c) : o(a, c);
      },
    };
  },
  Be = "!",
  $e = ":",
  io = $e.length,
  co = (e) => {
    const { prefix: t, experimentalParseClassName: r } = e;
    let n = (o) => {
      const a = [];
      let c = 0,
        s = 0,
        l = 0,
        d;
      for (let x = 0; x < o.length; x++) {
        const u = o[x];
        if (c === 0 && s === 0) {
          if (u === $e) {
            a.push(o.slice(l, x)), (l = x + io);
            continue;
          }
          if (u === "/") {
            d = x;
            continue;
          }
        }
        u === "[" ? c++ : u === "]" ? c-- : u === "(" ? s++ : u === ")" && s--;
      }
      const m = a.length === 0 ? o : o.substring(l),
        p = lo(m),
        w = p !== m,
        f = d && d > l ? d - l : void 0;
      return {
        modifiers: a,
        hasImportantModifier: w,
        baseClassName: p,
        maybePostfixModifierPosition: f,
      };
    };
    if (t) {
      const o = t + $e,
        a = n;
      n = (c) =>
        c.startsWith(o)
          ? a(c.substring(o.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: c,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (r) {
      const o = n;
      n = (a) => r({ className: a, parseClassName: o });
    }
    return n;
  },
  lo = (e) =>
    e.endsWith(Be)
      ? e.substring(0, e.length - 1)
      : e.startsWith(Be)
        ? e.substring(1)
        : e,
  uo = (e) => {
    const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
    return (n) => {
      if (n.length <= 1) return n;
      const o = [];
      let a = [];
      return (
        n.forEach((c) => {
          c[0] === "[" || t[c] ? (o.push(...a.sort(), c), (a = [])) : a.push(c);
        }),
        o.push(...a.sort()),
        o
      );
    };
  },
  fo = (e) => ({
    cache: so(e.cacheSize),
    parseClassName: co(e),
    sortModifiers: uo(e),
    ...ro(e),
  }),
  mo = /\s+/,
  po = (e, t) => {
    const {
        parseClassName: r,
        getClassGroupId: n,
        getConflictingClassGroupIds: o,
        sortModifiers: a,
      } = t,
      c = [],
      s = e.trim().split(mo);
    let l = "";
    for (let d = s.length - 1; d >= 0; d -= 1) {
      const m = s[d],
        {
          isExternal: p,
          modifiers: w,
          hasImportantModifier: f,
          baseClassName: x,
          maybePostfixModifierPosition: u,
        } = r(m);
      if (p) {
        l = m + (l.length > 0 ? " " + l : l);
        continue;
      }
      let y = !!u,
        E = n(y ? x.substring(0, u) : x);
      if (!E) {
        if (!y) {
          l = m + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((E = n(x)), !E)) {
          l = m + (l.length > 0 ? " " + l : l);
          continue;
        }
        y = !1;
      }
      const S = a(w).join(":"),
        A = f ? S + Be : S,
        R = A + E;
      if (c.includes(R)) continue;
      c.push(R);
      const N = o(E, y);
      for (let I = 0; I < N.length; ++I) {
        const P = N[I];
        c.push(A + P);
      }
      l = m + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function go() {
  let e = 0,
    t,
    r,
    n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = er(t)) && (n && (n += " "), (n += r));
  return n;
}
const er = (e) => {
  if (typeof e == "string") return e;
  let t,
    r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = er(e[n])) && (r && (r += " "), (r += t));
  return r;
};
function ho(e, ...t) {
  let r,
    n,
    o,
    a = c;
  function c(l) {
    const d = t.reduce((m, p) => p(m), e());
    return (r = fo(d)), (n = r.cache.get), (o = r.cache.set), (a = s), s(l);
  }
  function s(l) {
    const d = n(l);
    if (d) return d;
    const m = po(l, r);
    return o(l, m), m;
  }
  return () => a(go.apply(null, arguments));
}
const O = (e) => {
    const t = (r) => r[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  tr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  rr = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  vo = /^\d+\/\d+$/,
  bo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  yo =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  wo = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  xo = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Eo =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  J = (e) => vo.test(e),
  C = (e) => !!e && !Number.isNaN(Number(e)),
  G = (e) => !!e && Number.isInteger(Number(e)),
  _e = (e) => e.endsWith("%") && C(e.slice(0, -1)),
  z = (e) => bo.test(e),
  ko = () => !0,
  Co = (e) => yo.test(e) && !wo.test(e),
  nr = () => !1,
  So = (e) => xo.test(e),
  Ro = (e) => Eo.test(e),
  Po = (e) => !g(e) && !h(e),
  Ao = (e) => te(e, sr, nr),
  g = (e) => tr.test(e),
  V = (e) => te(e, ir, Co),
  je = (e) => te(e, Do, C),
  ht = (e) => te(e, or, nr),
  No = (e) => te(e, ar, Ro),
  he = (e) => te(e, cr, So),
  h = (e) => rr.test(e),
  ne = (e) => re(e, ir),
  Oo = (e) => re(e, To),
  vt = (e) => re(e, or),
  Mo = (e) => re(e, sr),
  Io = (e) => re(e, ar),
  ve = (e) => re(e, cr, !0),
  te = (e, t, r) => {
    const n = tr.exec(e);
    return n ? (n[1] ? t(n[1]) : r(n[2])) : !1;
  },
  re = (e, t, r = !1) => {
    const n = rr.exec(e);
    return n ? (n[1] ? t(n[1]) : r) : !1;
  },
  or = (e) => e === "position" || e === "percentage",
  ar = (e) => e === "image" || e === "url",
  sr = (e) => e === "length" || e === "size" || e === "bg-size",
  ir = (e) => e === "length",
  Do = (e) => e === "number",
  To = (e) => e === "family-name",
  cr = (e) => e === "shadow",
  Lo = () => {
    const e = O("color"),
      t = O("font"),
      r = O("text"),
      n = O("font-weight"),
      o = O("tracking"),
      a = O("leading"),
      c = O("breakpoint"),
      s = O("container"),
      l = O("spacing"),
      d = O("radius"),
      m = O("shadow"),
      p = O("inset-shadow"),
      w = O("text-shadow"),
      f = O("drop-shadow"),
      x = O("blur"),
      u = O("perspective"),
      y = O("aspect"),
      E = O("ease"),
      S = O("animate"),
      A = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      R = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      N = () => [...R(), h, g],
      I = () => ["auto", "hidden", "clip", "visible", "scroll"],
      P = () => ["auto", "contain", "none"],
      b = () => [h, g, l],
      D = () => [J, "full", "auto", ...b()],
      X = () => [G, "none", "subgrid", h, g],
      Xe = () => ["auto", { span: ["full", G, h, g] }, G, h, g],
      se = () => [G, "auto", h, g],
      Ye = () => ["auto", "min", "max", "fr", h, g],
      Se = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      Y = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      F = () => ["auto", ...b()],
      U = () => [
        J,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...b(),
      ],
      k = () => [e, h, g],
      qe = () => [...R(), vt, ht, { position: [h, g] }],
      Ze = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      Qe = () => ["auto", "cover", "contain", Mo, Ao, { size: [h, g] }],
      Re = () => [_e, ne, V],
      T = () => ["", "none", "full", d, h, g],
      L = () => ["", C, ne, V],
      ie = () => ["solid", "dashed", "dotted", "double"],
      Je = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      M = () => [C, _e, vt, ht],
      et = () => ["", "none", x, h, g],
      ce = () => ["none", C, h, g],
      le = () => ["none", C, h, g],
      Pe = () => [C, h, g],
      ue = () => [J, "full", ...b()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [z],
        breakpoint: [z],
        color: [ko],
        container: [z],
        "drop-shadow": [z],
        ease: ["in", "out", "in-out"],
        font: [Po],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [z],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [z],
        shadow: [z],
        spacing: ["px", C],
        text: [z],
        "text-shadow": [z],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", J, g, h, y] }],
        container: ["container"],
        columns: [{ columns: [C, g, h, s] }],
        "break-after": [{ "break-after": A() }],
        "break-before": [{ "break-before": A() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: N() }],
        overflow: [{ overflow: I() }],
        "overflow-x": [{ "overflow-x": I() }],
        "overflow-y": [{ "overflow-y": I() }],
        overscroll: [{ overscroll: P() }],
        "overscroll-x": [{ "overscroll-x": P() }],
        "overscroll-y": [{ "overscroll-y": P() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: D() }],
        "inset-x": [{ "inset-x": D() }],
        "inset-y": [{ "inset-y": D() }],
        start: [{ start: D() }],
        end: [{ end: D() }],
        top: [{ top: D() }],
        right: [{ right: D() }],
        bottom: [{ bottom: D() }],
        left: [{ left: D() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [G, "auto", h, g] }],
        basis: [{ basis: [J, "full", "auto", s, ...b()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [C, J, "auto", "initial", "none", g] }],
        grow: [{ grow: ["", C, h, g] }],
        shrink: [{ shrink: ["", C, h, g] }],
        order: [{ order: [G, "first", "last", "none", h, g] }],
        "grid-cols": [{ "grid-cols": X() }],
        "col-start-end": [{ col: Xe() }],
        "col-start": [{ "col-start": se() }],
        "col-end": [{ "col-end": se() }],
        "grid-rows": [{ "grid-rows": X() }],
        "row-start-end": [{ row: Xe() }],
        "row-start": [{ "row-start": se() }],
        "row-end": [{ "row-end": se() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": Ye() }],
        "auto-rows": [{ "auto-rows": Ye() }],
        gap: [{ gap: b() }],
        "gap-x": [{ "gap-x": b() }],
        "gap-y": [{ "gap-y": b() }],
        "justify-content": [{ justify: [...Se(), "normal"] }],
        "justify-items": [{ "justify-items": [...Y(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...Y()] }],
        "align-content": [{ content: ["normal", ...Se()] }],
        "align-items": [{ items: [...Y(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...Y(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": Se() }],
        "place-items": [{ "place-items": [...Y(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...Y()] }],
        p: [{ p: b() }],
        px: [{ px: b() }],
        py: [{ py: b() }],
        ps: [{ ps: b() }],
        pe: [{ pe: b() }],
        pt: [{ pt: b() }],
        pr: [{ pr: b() }],
        pb: [{ pb: b() }],
        pl: [{ pl: b() }],
        m: [{ m: F() }],
        mx: [{ mx: F() }],
        my: [{ my: F() }],
        ms: [{ ms: F() }],
        me: [{ me: F() }],
        mt: [{ mt: F() }],
        mr: [{ mr: F() }],
        mb: [{ mb: F() }],
        ml: [{ ml: F() }],
        "space-x": [{ "space-x": b() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": b() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: U() }],
        w: [{ w: [s, "screen", ...U()] }],
        "min-w": [{ "min-w": [s, "screen", "none", ...U()] }],
        "max-w": [
          { "max-w": [s, "screen", "none", "prose", { screen: [c] }, ...U()] },
        ],
        h: [{ h: ["screen", "lh", ...U()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...U()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...U()] }],
        "font-size": [{ text: ["base", r, ne, V] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [n, h, je] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              _e,
              g,
            ],
          },
        ],
        "font-family": [{ font: [Oo, g, t] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [o, h, g] }],
        "line-clamp": [{ "line-clamp": [C, "none", h, je] }],
        leading: [{ leading: [a, ...b()] }],
        "list-image": [{ "list-image": ["none", h, g] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", h, g] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: k() }],
        "text-color": [{ text: k() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ie(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [C, "from-font", "auto", h, V] },
        ],
        "text-decoration-color": [{ decoration: k() }],
        "underline-offset": [{ "underline-offset": [C, "auto", h, g] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: b() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              h,
              g,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", h, g] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: qe() }],
        "bg-repeat": [{ bg: Ze() }],
        "bg-size": [{ bg: Qe() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  G,
                  h,
                  g,
                ],
                radial: ["", h, g],
                conic: [G, h, g],
              },
              Io,
              No,
            ],
          },
        ],
        "bg-color": [{ bg: k() }],
        "gradient-from-pos": [{ from: Re() }],
        "gradient-via-pos": [{ via: Re() }],
        "gradient-to-pos": [{ to: Re() }],
        "gradient-from": [{ from: k() }],
        "gradient-via": [{ via: k() }],
        "gradient-to": [{ to: k() }],
        rounded: [{ rounded: T() }],
        "rounded-s": [{ "rounded-s": T() }],
        "rounded-e": [{ "rounded-e": T() }],
        "rounded-t": [{ "rounded-t": T() }],
        "rounded-r": [{ "rounded-r": T() }],
        "rounded-b": [{ "rounded-b": T() }],
        "rounded-l": [{ "rounded-l": T() }],
        "rounded-ss": [{ "rounded-ss": T() }],
        "rounded-se": [{ "rounded-se": T() }],
        "rounded-ee": [{ "rounded-ee": T() }],
        "rounded-es": [{ "rounded-es": T() }],
        "rounded-tl": [{ "rounded-tl": T() }],
        "rounded-tr": [{ "rounded-tr": T() }],
        "rounded-br": [{ "rounded-br": T() }],
        "rounded-bl": [{ "rounded-bl": T() }],
        "border-w": [{ border: L() }],
        "border-w-x": [{ "border-x": L() }],
        "border-w-y": [{ "border-y": L() }],
        "border-w-s": [{ "border-s": L() }],
        "border-w-e": [{ "border-e": L() }],
        "border-w-t": [{ "border-t": L() }],
        "border-w-r": [{ "border-r": L() }],
        "border-w-b": [{ "border-b": L() }],
        "border-w-l": [{ "border-l": L() }],
        "divide-x": [{ "divide-x": L() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": L() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...ie(), "hidden", "none"] }],
        "divide-style": [{ divide: [...ie(), "hidden", "none"] }],
        "border-color": [{ border: k() }],
        "border-color-x": [{ "border-x": k() }],
        "border-color-y": [{ "border-y": k() }],
        "border-color-s": [{ "border-s": k() }],
        "border-color-e": [{ "border-e": k() }],
        "border-color-t": [{ "border-t": k() }],
        "border-color-r": [{ "border-r": k() }],
        "border-color-b": [{ "border-b": k() }],
        "border-color-l": [{ "border-l": k() }],
        "divide-color": [{ divide: k() }],
        "outline-style": [{ outline: [...ie(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [C, h, g] }],
        "outline-w": [{ outline: ["", C, ne, V] }],
        "outline-color": [{ outline: k() }],
        shadow: [{ shadow: ["", "none", m, ve, he] }],
        "shadow-color": [{ shadow: k() }],
        "inset-shadow": [{ "inset-shadow": ["none", p, ve, he] }],
        "inset-shadow-color": [{ "inset-shadow": k() }],
        "ring-w": [{ ring: L() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: k() }],
        "ring-offset-w": [{ "ring-offset": [C, V] }],
        "ring-offset-color": [{ "ring-offset": k() }],
        "inset-ring-w": [{ "inset-ring": L() }],
        "inset-ring-color": [{ "inset-ring": k() }],
        "text-shadow": [{ "text-shadow": ["none", w, ve, he] }],
        "text-shadow-color": [{ "text-shadow": k() }],
        opacity: [{ opacity: [C, h, g] }],
        "mix-blend": [
          { "mix-blend": [...Je(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": Je() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [C] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": M() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": M() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": k() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": k() }],
        "mask-image-t-from-pos": [{ "mask-t-from": M() }],
        "mask-image-t-to-pos": [{ "mask-t-to": M() }],
        "mask-image-t-from-color": [{ "mask-t-from": k() }],
        "mask-image-t-to-color": [{ "mask-t-to": k() }],
        "mask-image-r-from-pos": [{ "mask-r-from": M() }],
        "mask-image-r-to-pos": [{ "mask-r-to": M() }],
        "mask-image-r-from-color": [{ "mask-r-from": k() }],
        "mask-image-r-to-color": [{ "mask-r-to": k() }],
        "mask-image-b-from-pos": [{ "mask-b-from": M() }],
        "mask-image-b-to-pos": [{ "mask-b-to": M() }],
        "mask-image-b-from-color": [{ "mask-b-from": k() }],
        "mask-image-b-to-color": [{ "mask-b-to": k() }],
        "mask-image-l-from-pos": [{ "mask-l-from": M() }],
        "mask-image-l-to-pos": [{ "mask-l-to": M() }],
        "mask-image-l-from-color": [{ "mask-l-from": k() }],
        "mask-image-l-to-color": [{ "mask-l-to": k() }],
        "mask-image-x-from-pos": [{ "mask-x-from": M() }],
        "mask-image-x-to-pos": [{ "mask-x-to": M() }],
        "mask-image-x-from-color": [{ "mask-x-from": k() }],
        "mask-image-x-to-color": [{ "mask-x-to": k() }],
        "mask-image-y-from-pos": [{ "mask-y-from": M() }],
        "mask-image-y-to-pos": [{ "mask-y-to": M() }],
        "mask-image-y-from-color": [{ "mask-y-from": k() }],
        "mask-image-y-to-color": [{ "mask-y-to": k() }],
        "mask-image-radial": [{ "mask-radial": [h, g] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": M() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": M() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": k() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": k() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": R() }],
        "mask-image-conic-pos": [{ "mask-conic": [C] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": M() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": M() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": k() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": k() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: qe() }],
        "mask-repeat": [{ mask: Ze() }],
        "mask-size": [{ mask: Qe() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", h, g] }],
        filter: [{ filter: ["", "none", h, g] }],
        blur: [{ blur: et() }],
        brightness: [{ brightness: [C, h, g] }],
        contrast: [{ contrast: [C, h, g] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", f, ve, he] }],
        "drop-shadow-color": [{ "drop-shadow": k() }],
        grayscale: [{ grayscale: ["", C, h, g] }],
        "hue-rotate": [{ "hue-rotate": [C, h, g] }],
        invert: [{ invert: ["", C, h, g] }],
        saturate: [{ saturate: [C, h, g] }],
        sepia: [{ sepia: ["", C, h, g] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", h, g] }],
        "backdrop-blur": [{ "backdrop-blur": et() }],
        "backdrop-brightness": [{ "backdrop-brightness": [C, h, g] }],
        "backdrop-contrast": [{ "backdrop-contrast": [C, h, g] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", C, h, g] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [C, h, g] }],
        "backdrop-invert": [{ "backdrop-invert": ["", C, h, g] }],
        "backdrop-opacity": [{ "backdrop-opacity": [C, h, g] }],
        "backdrop-saturate": [{ "backdrop-saturate": [C, h, g] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", C, h, g] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": b() }],
        "border-spacing-x": [{ "border-spacing-x": b() }],
        "border-spacing-y": [{ "border-spacing-y": b() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              h,
              g,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [C, "initial", h, g] }],
        ease: [{ ease: ["linear", "initial", E, h, g] }],
        delay: [{ delay: [C, h, g] }],
        animate: [{ animate: ["none", S, h, g] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [u, h, g] }],
        "perspective-origin": [{ "perspective-origin": N() }],
        rotate: [{ rotate: ce() }],
        "rotate-x": [{ "rotate-x": ce() }],
        "rotate-y": [{ "rotate-y": ce() }],
        "rotate-z": [{ "rotate-z": ce() }],
        scale: [{ scale: le() }],
        "scale-x": [{ "scale-x": le() }],
        "scale-y": [{ "scale-y": le() }],
        "scale-z": [{ "scale-z": le() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: Pe() }],
        "skew-x": [{ "skew-x": Pe() }],
        "skew-y": [{ "skew-y": Pe() }],
        transform: [{ transform: [h, g, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: N() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: ue() }],
        "translate-x": [{ "translate-x": ue() }],
        "translate-y": [{ "translate-y": ue() }],
        "translate-z": [{ "translate-z": ue() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: k() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: k() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              h,
              g,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": b() }],
        "scroll-mx": [{ "scroll-mx": b() }],
        "scroll-my": [{ "scroll-my": b() }],
        "scroll-ms": [{ "scroll-ms": b() }],
        "scroll-me": [{ "scroll-me": b() }],
        "scroll-mt": [{ "scroll-mt": b() }],
        "scroll-mr": [{ "scroll-mr": b() }],
        "scroll-mb": [{ "scroll-mb": b() }],
        "scroll-ml": [{ "scroll-ml": b() }],
        "scroll-p": [{ "scroll-p": b() }],
        "scroll-px": [{ "scroll-px": b() }],
        "scroll-py": [{ "scroll-py": b() }],
        "scroll-ps": [{ "scroll-ps": b() }],
        "scroll-pe": [{ "scroll-pe": b() }],
        "scroll-pt": [{ "scroll-pt": b() }],
        "scroll-pr": [{ "scroll-pr": b() }],
        "scroll-pb": [{ "scroll-pb": b() }],
        "scroll-pl": [{ "scroll-pl": b() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", h, g] },
        ],
        fill: [{ fill: ["none", ...k()] }],
        "stroke-w": [{ stroke: [C, ne, V, je] }],
        stroke: [{ stroke: ["none", ...k()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  _o = ho(Lo);
function Ce(...e) {
  return _o(to(e));
}
function jo({ ...e }) {
  return v.jsx(Xn, { "data-slot": "dialog", ...e });
}
function Fo({ ...e }) {
  return v.jsx(Yn, { "data-slot": "dialog-portal", ...e });
}
function zo({ className: e, ...t }) {
  return v.jsx(qn, {
    "data-slot": "dialog-overlay",
    className: Ce(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
      e,
    ),
    ...t,
  });
}
function Wo({ className: e, children: t, hideCloseButton: r = !1, ...n }) {
  return v.jsxs(Fo, {
    "data-slot": "dialog-portal",
    children: [
      v.jsx(zo, {}),
      v.jsxs(Zn, {
        "data-slot": "dialog-content",
        className: Ce(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e,
        ),
        ...n,
        children: [
          t,
          !r &&
            v.jsxs(eo, {
              className:
                "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
              children: [
                v.jsx(pr, {}),
                v.jsx("span", { className: "sr-only", children: "Close" }),
              ],
            }),
        ],
      }),
    ],
  });
}
function Go({ className: e, ...t }) {
  return v.jsx(Qn, {
    "data-slot": "dialog-title",
    className: Ce("text-lg leading-none font-semibold", e),
    ...t,
  });
}
function Bo({ className: e, ...t }) {
  return v.jsx(Jn, {
    "data-slot": "dialog-description",
    className: Ce("text-muted-foreground text-sm", e),
    ...t,
  });
}
function $o(e, t) {
  switch (t.type) {
    case "OPEN_IMAGE":
      return {
        image: t.src,
        alt: t.alt || "",
        isOpen: !0,
        isLoading: !0,
        error: null,
      };
    case "CLOSE_IMAGE":
      return { ...e, isOpen: !1 };
    case "IMAGE_LOADED":
      return { ...e, isLoading: !1, error: null };
    case "IMAGE_ERROR":
      return { ...e, isLoading: !1, error: t.error || "Could not load image" };
    default:
      return e;
  }
}
const Fe = new WeakMap(),
  qo = ({ selector: e = "article img", observe: t }) => {
    const [r, n] = i.useReducer($o, {
        image: null,
        alt: "",
        isOpen: !1,
        isLoading: !1,
        error: null,
      }),
      o = i.useRef(n),
      a = i.useRef(null);
    i.useEffect(() => {
      o.current = n;
    });
    const c = i.useCallback(() => {
        for (const f of document.querySelectorAll(e)) {
          if (!(f instanceof HTMLImageElement)) continue;
          const x = Fe.get(f);
          x &&
            (f.removeEventListener("mouseenter", x.enter),
            f.removeEventListener("mouseleave", x.leave),
            f.removeEventListener("click", x.click),
            (f.style.cursor = ""),
            Fe.delete(f));
        }
      }, [e]),
      s = i.useCallback(() => {
        c();
        for (const f of document.querySelectorAll(e)) {
          if (!(f instanceof HTMLImageElement)) continue;
          f.style.cursor = "zoom-in";
          const x = f.style.filter,
            u = () => {
              (f.style.transition = "filter 0.2s ease"),
                (f.style.filter = "brightness(90%)");
            },
            y = () => {
              f.style.filter = x;
            },
            E = (S) => {
              S.preventDefault(),
                S.stopPropagation(),
                o.current({ type: "OPEN_IMAGE", src: f.src, alt: f.alt || "" });
            };
          f.addEventListener("mouseenter", u),
            f.addEventListener("mouseleave", y),
            f.addEventListener("click", E),
            Fe.set(f, { enter: u, leave: y, click: E });
        }
      }, [c, e]);
    i.useEffect(
      () => (
        s(),
        () => {
          a.current !== null &&
            (cancelAnimationFrame(a.current), (a.current = null)),
            c();
        }
      ),
      [s, c],
    ),
      i.useEffect(() => {
        if (!t) return;
        const x = (Array.isArray(t) ? t : [t]).flatMap((E) =>
          Array.from(document.querySelectorAll(E)).filter(
            (S) => S instanceof Element,
          ),
        );
        if (x.length === 0) return;
        const u = () => {
            a.current === null &&
              (a.current = requestAnimationFrame(() => {
                (a.current = null), s();
              }));
          },
          y = x.map((E) => {
            const S = new MutationObserver((A) => {
              A.some(
                (R) => R.addedNodes.length > 0 || R.removedNodes.length > 0,
              ) && u();
            });
            return S.observe(E, { childList: !0, subtree: !0 }), S;
          });
        return () => {
          for (const E of y) E.disconnect();
        };
      }, [t, s]);
    const l = (f) => {
        f || n({ type: "CLOSE_IMAGE" });
      },
      d = (f) => {
        f.stopPropagation(), n({ type: "CLOSE_IMAGE" });
      },
      m = (f) => {
        (f.key === "Escape" || f.key === "Enter" || f.key === " ") &&
          n({ type: "CLOSE_IMAGE" });
      },
      p = () => {
        n({ type: "IMAGE_LOADED" });
      },
      w = (f) => {
        const x = f.currentTarget;
        n({ type: "IMAGE_ERROR", error: `Failed to load image: ${x.src}` });
      };
    return v.jsx(v.Fragment, {
      children: r.image
        ? v.jsx(jo, {
            open: r.isOpen,
            onOpenChange: l,
            children: v.jsxs(Wo, {
              hideCloseButton: !0,
              className:
                "cursor-pointer p-0 overflow-hidden bg-black/0 border-0 shadow-none sm:max-w-[95vw] sm:rounded-lg",
              children: [
                v.jsx(Go, {
                  className: "sr-only hidden",
                  children: "Image Viewer",
                }),
                v.jsx(Bo, {
                  className: "sr-only hidden",
                  children: "View the image in full size",
                }),
                v.jsxs("div", {
                  className:
                    "relative w-full h-full flex justify-center items-center",
                  children: [
                    v.jsxs("button", {
                      type: "button",
                      className:
                        "relative w-full h-full flex justify-center items-center cursor-pointer bg-transparent border-0 p-0",
                      onClick: d,
                      onKeyDown: m,
                      "aria-label": "Close",
                      children: [
                        r.isLoading &&
                          v.jsx("div", {
                            className:
                              "absolute inset-0 flex items-center justify-center bg-black/20",
                            children: v.jsx(fr, {
                              className: "h-8 w-8 animate-spin text-white",
                            }),
                          }),
                        r.error
                          ? v.jsx("div", {
                              className: "max-h-[90vh] max-w-[90vw]",
                              "aria-hidden": "true",
                            })
                          : v.jsx("img", {
                              src: r.image,
                              alt: r.alt,
                              className:
                                "max-h-[90vh] max-w-[90vw] cursor-pointer object-contain",
                              onLoad: p,
                              onError: w,
                              "aria-label": "Close",
                            }),
                      ],
                    }),
                    r.error &&
                      v.jsxs("div", {
                        className:
                          "absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/10 rounded-lg pointer-events-none",
                        children: [
                          v.jsxs("span", {
                            className: "text-red-500 mb-2",
                            children: ["⚠️ ", r.error],
                          }),
                          v.jsx("button", {
                            type: "button",
                            className:
                              "px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm mt-2 pointer-events-auto",
                            onClick: (f) => {
                              f.stopPropagation(),
                                r.image &&
                                  n({
                                    type: "OPEN_IMAGE",
                                    src: r.image,
                                    alt: r.alt,
                                  });
                            },
                            onKeyDown: m,
                            children: "Retry",
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          })
        : null,
    });
  };
export { qo as ImageViewer };
