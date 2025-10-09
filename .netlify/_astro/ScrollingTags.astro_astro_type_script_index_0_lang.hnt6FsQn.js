import { c as v } from "./anime.esm.BuwIZpGW.js";

const r = {
    TAG_GAP: 16,
    SPEED_PX_PER_SECOND: 120,
    MASK_OFFSET: 10,
    MASK_BLUR: 4,
    HOVER_DELAY: 150,
    CONTAINER_MULTIPLIER: 2,
  },
  C = new WeakMap(),
  L = new WeakMap(),
  f = new WeakMap(),
  w = new WeakMap(),
  _ = new WeakSet(),
  S = new WeakMap(),
  p = new WeakMap(),
  o = {
    container: null,
    tracks: [],
    tagRows: [],
    heroSection: null,
    titleElement: null,
    isInitialized: !1,
    init() {
      if (this.isInitialized) return;
      this.container = document.getElementById("scrolling-tags");
      const e = document.querySelector("section");
      this.heroSection = e instanceof HTMLElement ? e : null;
      const n = this.heroSection?.querySelector("#mona-text"),
        t = this.heroSection?.querySelector(".text-center");
      (this.titleElement =
        n instanceof HTMLElement ? n : t instanceof HTMLElement ? t : null),
        (this.isInitialized = !0);
    },
    refreshDynamicElements() {
      (this.tracks = Array.from(document.querySelectorAll(".tag-track"))),
        (this.tagRows = Array.from(document.querySelectorAll(".tag-row")));
    },
    getTracks() {
      return this.tracks;
    },
    getTagRows() {
      return this.tagRows;
    },
    getContainer() {
      return this.container;
    },
    getHeroElements() {
      return { section: this.heroSection, title: this.titleElement };
    },
  },
  y = {
    ltr: {
      getInitialPos: (e) => -e,
      getEntryAnimation: (e, n) => ({
        translateX: [-e, 0],
        duration: (e / r.SPEED_PX_PER_SECOND) * 1e3,
      }),
      getLoopAnimation: (e) => ({
        translateX: [-e, 0],
        duration: (e / r.SPEED_PX_PER_SECOND) * 1e3,
      }),
    },
    rtl: {
      getInitialPos: (e, n) => n,
      getEntryAnimation: (e, n) => ({
        translateX: [n, 0],
        duration: (n / r.SPEED_PX_PER_SECOND) * 1e3,
      }),
      getLoopAnimation: (e) => ({
        translateX: [0, -e],
        duration: (e / r.SPEED_PX_PER_SECOND) * 1e3,
      }),
    },
  };
function W(e, n, t) {
  const i = y[n],
    s = w.get(e),
    l = e.scrollWidth;
  return !i || !s
    ? null
    : {
        entry: { ...i.getEntryAnimation(l, t), ease: "linear" },
        loop: { ...i.getLoopAnimation(s), loop: !0, ease: "linear" },
      };
}
function I(e, n) {
  const t = document.createElement("div");
  return (
    (t.className =
      "tag px-4 py-2 rounded-full font-semibold text-white text-base flex-shrink-0 backdrop-blur-md bg-white/15"),
    (t.textContent = e),
    C.set(t, n),
    (t.dataset.tagText = e),
    t
  );
}
function T(e) {
  return e instanceof HTMLElement;
}
function R(e) {
  _.has(e) ||
    (e.addEventListener("mouseenter", () => {
      const n = p.get(e);
      n && (clearTimeout(n), p.delete(e)), S.set(e, !0);
      const t = f.get(e);
      t?.pause && t.pause();
    }),
    e.addEventListener("mouseleave", () => {
      S.set(e, !1);
      const n = setTimeout(() => {
        if (!S.get(e)) {
          const t = f.get(e);
          t?.play && t.play();
        }
        p.delete(e);
      }, r.HOVER_DELAY);
      p.set(e, n);
    }),
    e.addEventListener(
      "mouseenter",
      (n) => {
        const t = n.target;
        T(t) && t.classList.contains("tag") && t.classList.add("tag-hovered");
      },
      !0,
    ),
    e.addEventListener(
      "mouseleave",
      (n) => {
        const t = n.target;
        T(t) &&
          t.classList.contains("tag") &&
          t.classList.remove("tag-hovered");
      },
      !0,
    ),
    e.addEventListener("click", (n) => {
      const t = n.target;
      if (T(t) && t.classList.contains("tag")) {
        n.preventDefault();
        const i = t.dataset.tagText || t.textContent || "";
        window.location.href = `/search?q=${encodeURIComponent(i)}`;
      }
    }),
    _.add(e));
}
function A() {
  const { section: e, title: n } = o.getHeroElements();
  if (!e || !n) return;
  const t = [],
    i = n.querySelector("h1");
  T(i) && t.push(i);
  const s = n.querySelector("p");
  T(s) && t.push(s);
  const l = window.innerWidth,
    c = t.reduce(
      (a, E) => {
        const g = E.getBoundingClientRect();
        return {
          left: Math.min(a.left, g.left),
          right: Math.max(a.right, g.right),
        };
      },
      { left: l, right: 0 },
    ),
    d = Math.max(0, (c.left / l) * 100 - r.MASK_OFFSET),
    h = Math.min(100, (c.right / l) * 100 + r.MASK_OFFSET),
    m = `linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) ${d - r.MASK_BLUR}%, rgba(0,0,0,0) ${h + r.MASK_BLUR}%, rgba(0,0,0,1) 100%)`;
  o.getTagRows().forEach((a) => {
    const E =
      a.dataset.mask === "true"
        ? {
            "-webkit-mask-image": m,
            "mask-image": m,
            "-webkit-mask-size": "100vw 100%",
            "mask-size": "100vw 100%",
            "-webkit-mask-repeat": "no-repeat",
            "mask-repeat": "no-repeat",
            "-webkit-mask-position": "left top",
            "mask-position": "left top",
          }
        : { "-webkit-mask-image": "none", "mask-image": "none" };
    Object.entries(E).forEach(([g, u]) => {
      a.style.setProperty(g, u);
    }),
      a.classList.remove("masked-row");
  });
}
function b() {
  o.refreshDynamicElements(),
    o.getTracks().forEach((e, n) => {
      e.innerHTML = "";
      const t =
        e.dataset.tags
          ?.split(",")
          .map((a) => a.trim())
          .filter(Boolean) || [];
      if (t.length === 0) return;
      const i = window.innerWidth;
      let s = 0,
        l = 0,
        c = !1;
      for (; s < i * r.CONTAINER_MULTIPLIER; ) {
        const a = document.createDocumentFragment(),
          E = [];
        for (const g of t) {
          const u = I(g, e);
          a.appendChild(u), E.push(u);
        }
        e.appendChild(a);
        for (const g of E) {
          const u = g.offsetWidth + r.TAG_GAP;
          (s += u), c || (l += u);
        }
        c || ((c = !0), w.set(e, l));
      }
      const d = n % 2 === 0 ? "rtl" : "ltr";
      (e.dataset.direction = d), R(e);
      const m = y[d].getInitialPos(e.scrollWidth / 2, i);
      (e.style.transform = `translateX(${m}px)`),
        (e.style.willChange = "transform");
    });
}
function M() {
  const n = o.getContainer()?.offsetWidth || window.innerWidth;
  o.getTracks().forEach((t, i) => {
    if ((t.scrollWidth || t.offsetWidth || 0) === 0) return;
    const c =
        (t.dataset.direction || (i % 2 === 0 ? "rtl" : "ltr")) === "ltr"
          ? "ltr"
          : "rtl",
      d = f.get(t);
    d && (typeof d.pause == "function" && d.pause(), f.delete(t));
    const h = W(t, c, n);
    if (!h) return;
    const m = v();
    m.add(t, h.entry).add(t, h.loop, "+=0"), f.set(t, m);
  });
}
function P() {
  o.getTracks().forEach((n) => {
    const t = f.get(n);
    t && (typeof t.pause == "function" && t.pause(), f.delete(n)), w.delete(n);
    const i = p.get(n);
    i && (clearTimeout(i), p.delete(n)), S.delete(n);
  }),
    o.getTracks().forEach((n) => {
      const t = n.querySelectorAll(".tag");
      Array.from(t).forEach((i) => {
        if (i instanceof HTMLElement) {
          const s = L.get(i);
          s && (clearTimeout(s), L.delete(i));
        }
      });
    }),
    (o.container = null),
    (o.tracks = []),
    (o.tagRows = []),
    (o.heroSection = null),
    (o.titleElement = null),
    (o.isInitialized = !1);
}
document.addEventListener("start-tags", () => {
  o.init();
  const e = o.getContainer();
  e && ((e.style.opacity = "0.5"), b(), A(), M());
});
window.addEventListener("resize", () => {
  A(), M();
});
window.addEventListener("beforeunload", P);
document.addEventListener("astro:before-preparation", P);
