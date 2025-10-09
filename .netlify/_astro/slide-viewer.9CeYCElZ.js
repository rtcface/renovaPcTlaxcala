import { r as c } from "./index.CY-HDqYb.js"; /* empty css                       */
import { j as E } from "./jsx-runtime.D_zvdyIk.js";

const L = "modulepreload",
  _ = (i) => "/" + i,
  F = {},
  v = (e, r, C) => {
    let y = Promise.resolve();
    if (r && r.length > 0) {
      const o = (a) =>
        Promise.all(
          a.map((d) =>
            Promise.resolve(d).then(
              (f) => ({ status: "fulfilled", value: f }),
              (f) => ({ status: "rejected", reason: f }),
            ),
          ),
        );
      document.getElementsByTagName("link");
      const t = document.querySelector("meta[property=csp-nonce]"),
        s = t?.nonce || t?.getAttribute("nonce");
      y = o(
        r.map((a) => {
          if (((a = _(a)), a in F)) return;
          F[a] = !0;
          const d = a.endsWith(".css"),
            f = d ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${a}"]${f}`)) return;
          const l = document.createElement("link");
          if (
            ((l.rel = d ? "stylesheet" : L),
            d || (l.as = "script"),
            (l.crossOrigin = ""),
            (l.href = a),
            s && l.setAttribute("nonce", s),
            document.head.appendChild(l),
            d)
          )
            return new Promise((k, u) => {
              l.addEventListener("load", k),
                l.addEventListener("error", () =>
                  u(new Error(`Unable to preload CSS for ${a}`)),
                );
            });
        }),
      );
    }
    function m(o) {
      const t = new Event("vite:preloadError", { cancelable: !0 });
      if (((t.payload = o), window.dispatchEvent(t), !t.defaultPrevented))
        throw o;
    }
    return y.then((o) => {
      for (const t of o || []) t.status === "rejected" && m(t.reason);
      return e().catch(m);
    });
  },
  x = {
    black: {
      background: "#191919",
      type: "solid",
      titleFont: '"Source Sans Pro", Helvetica, sans-serif',
      titleWeight: 600,
      titleTransform: "uppercase",
      textFont: '"Source Sans Pro", Helvetica, sans-serif',
      titleColor: "#fff",
      textColor: "#fff",
      overlayColor: "rgba(0, 0, 0, 0.3)",
    },
    white: {
      background: "#ffffff",
      type: "solid",
      titleFont: '"Source Sans Pro", Helvetica, sans-serif',
      titleWeight: 600,
      titleTransform: "uppercase",
      textFont: '"Source Sans Pro", Helvetica, sans-serif',
      titleColor: "#222",
      textColor: "#222",
      overlayColor: "rgba(255, 255, 255, 0.3)",
    },
    league: {
      background:
        "radial-gradient(circle, rgb(85, 90, 95) 0%, rgb(28, 30, 32) 100%)",
      type: "gradient",
      titleFont: '"League Gothic", Impact, sans-serif',
      titleWeight: "normal",
      titleTransform: "uppercase",
      textFont: "Lato, sans-serif",
      titleColor: "#eee",
      textColor: "#eee",
      overlayColor: "rgba(0, 0, 0, 0.3)",
    },
    beige: {
      background:
        "radial-gradient(circle, rgb(255, 255, 255) 0%, rgb(247, 242, 211) 100%)",
      type: "gradient",
      titleFont: '"League Gothic", Impact, sans-serif',
      titleWeight: "normal",
      titleTransform: "uppercase",
      textFont: "Lato, sans-serif",
      titleColor: "#333",
      textColor: "#333",
      overlayColor: "rgba(0, 0, 0, 0.1)",
    },
    moon: {
      background: "#002b36",
      type: "solid",
      titleFont: '"League Gothic", Impact, sans-serif',
      titleWeight: "normal",
      titleTransform: "uppercase",
      textFont: "Lato, sans-serif",
      titleColor: "#eee8d5",
      textColor: "#93a1a1",
      overlayColor: "rgba(0, 0, 0, 0.3)",
    },
    solarized: {
      background: "#fdf6e3",
      type: "solid",
      titleFont: '"League Gothic", Impact, sans-serif',
      titleWeight: "normal",
      titleTransform: "uppercase",
      textFont: "Lato, sans-serif",
      titleColor: "#657b83",
      textColor: "#657b83",
      overlayColor: "rgba(255, 255, 255, 0.3)",
    },
    sky: {
      background: "radial-gradient(circle, #f7fbfc 0%, #add9e4 100%)",
      type: "gradient",
      titleFont: '"Quicksand", sans-serif',
      titleWeight: "normal",
      titleTransform: "uppercase",
      textFont: '"Open Sans", sans-serif',
      titleColor: "#333",
      textColor: "#333",
      overlayColor: "rgba(0, 0, 0, 0.1)",
    },
    night: {
      background: "radial-gradient(circle, #1e1e1e 0%, #000000 100%)",
      type: "gradient",
      titleFont: '"Montserrat", Impact, sans-serif',
      titleWeight: "normal",
      titleTransform: "none",
      textFont: '"Open Sans", sans-serif',
      titleColor: "#fff",
      textColor: "#fff",
      overlayColor: "rgba(0, 0, 0, 0.3)",
    },
    serif: {
      background: "#f0f1eb",
      type: "solid",
      titleFont:
        '"Palatino Linotype", "Book Antiqua", Palatino, FreeSerif, serif',
      titleWeight: "normal",
      titleTransform: "none",
      textFont:
        '"Palatino Linotype", "Book Antiqua", Palatino, FreeSerif, serif',
      titleColor: "#383d3d",
      textColor: "#383d3d",
      overlayColor: "rgba(255, 255, 255, 0.3)",
    },
    simple: {
      background: "#ffffff",
      type: "solid",
      titleFont: '"Source Sans Pro", Helvetica, sans-serif',
      titleWeight: 600,
      titleTransform: "none",
      textFont: "Lato, sans-serif",
      titleColor: "#333",
      textColor: "#333",
      overlayColor: "rgba(255, 255, 255, 0.3)",
    },
    blood: {
      background: "#222",
      type: "solid",
      titleFont: '"Ubuntu", sans-serif',
      titleWeight: 700,
      titleTransform: "uppercase",
      textFont: "Ubuntu, sans-serif",
      titleColor: "#fff",
      textColor: "#fff",
      overlayColor: "rgba(0, 0, 0, 0.3)",
    },
    dracula: {
      background: "#282a36",
      type: "solid",
      titleFont: '"League Gothic", Impact, sans-serif',
      titleWeight: "normal",
      titleTransform: "none",
      textFont:
        '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif',
      titleColor: "#bd93f9",
      textColor: "#fff",
      overlayColor: "rgba(0, 0, 0, 0.3)",
    },
  };
function P(i) {
  const e = x[i] || x.black;
  return `${e.type === "gradient" ? `data-background="${e.background}"` : `data-background-color="${e.background}"`} class="theme-${i}"`;
}
function R(i, e) {
  const r = x[i] || x.black;
  return `
    .reveal-${e.replace(/:/g, "-")} .slides section {
      background: ${r.background} !important;
      padding-top: 30px;
    }

    .reveal-${e.replace(/:/g, "-")} .slides section h1,
    .reveal-${e.replace(/:/g, "-")} .slides section h2 {
      font-family: ${r.titleFont} !important;
      font-weight: ${r.titleWeight} !important;
      text-transform: ${r.titleTransform} !important;
      color: ${r.titleColor} !important;
      font-size: 32px !important;
      padding-left: 8px;
      padding-right: 8px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      line-height: 1.2;
      letter-spacing: normal !important;
    }

    .reveal-${e.replace(/:/g, "-")} .slides section p,
    .reveal-${e.replace(/:/g, "-")} .slides section em {
      font-family: ${r.textFont} !important;
      color: ${r.textColor} !important;
      font-size: 20px !important;
      line-height: 0.8 !important;
      letter-spacing: normal !important;
    }

    .reveal-${e.replace(/:/g, "-")} .slides section em {
      font-style: normal !important;
    }

    .reveal-${e.replace(/:/g, "-")} .reveal-viewport {
      border: 1px solid black;
      border-radius: 1rem;
    }
  `;
}
const H = ({
  content: i,
  theme: e = "black",
  transition: r = "slide",
  controls: C = !0,
  progress: y = !0,
  preview: m = !1,
}) => {
  const o = c.useRef(null),
    t = c.useRef(null),
    [s, a] = c.useState(!1),
    [d, f] = c.useState(!1),
    [l, k] = c.useState(!1),
    u = c.useId();
  return (
    c.useEffect(() => {
      a(!0);
    }, []),
    c.useEffect(() => {
      if (!s) return;
      (() => {
        if (document.querySelector(`link[data-reveal-theme="${e}"]`)) {
          f(!0);
          return;
        }
        const n = document.createElement("link");
        (n.rel = "stylesheet"),
          (n.href = `https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.2.1/theme/${e}.css`),
          n.setAttribute("data-reveal-theme", e),
          (n.onload = () => f(!0)),
          (n.onerror = () => {
            console.warn(`Failed to load theme: ${e}`), f(!0);
          }),
          document.head.appendChild(n);
      })();
    }, [e, s]),
    c.useEffect(() => {
      if (!s || !m) return;
      const h = `slide-theme-${u.replace(/:/g, "-")}`,
        b = document.getElementById(h);
      b && b.remove();
      const n = document.createElement("style");
      return (
        (n.id = h),
        (n.textContent = R(e, u)),
        document.head.appendChild(n),
        k(!0),
        () => {
          const g = document.getElementById(h);
          g && g.remove();
        }
      );
    }, [e, s, m, u]),
    c.useEffect(() => {
      if (!o.current || !s || !d || (m && !l)) return;
      const h = Math.random() * 200 + 50,
        b = setTimeout(async () => {
          await n();
        }, h),
        n = async () => {
          try {
            const { default: g } = await v(async () => {
                const { default: p } = await import("./reveal.esm.IL6PhzrQ.js");
                return { default: p };
              }, []),
              { default: w } = await v(async () => {
                const { default: p } = await import(
                  "./highlight.esm.CUZwKXYC.js"
                );
                return { default: p };
              }, []),
              { default: $ } = await v(async () => {
                const { default: p } = await import(
                  "./markdown.esm.CnKC3TVR.js"
                );
                return { default: p };
              }, []),
              { default: S } = await v(async () => {
                const { default: p } = await import("./notes.esm.CrtRLS_3.js");
                return { default: p };
              }, []),
              T = `          <section data-markdown ${m ? P(e) : ""}>
            <script type="text/template">
              ${i}
            </script>
          </section>`;
            o.current &&
              !t.current &&
              ((o.current.className = `reveal reveal-${u.replace(/:/g, "-")}`),
              (o.current.innerHTML = `<div class="slides">${T}</div>`),
              (t.current = new g(o.current, {
                hash: !1,
                controls: C,
                progress: y,
                transition: r,
                plugins: [$, w, S],
                markdown: { smartypants: !0 },
                embedded: !0,
                width: "100%",
                height: "100%",
              })),
              await t.current.initialize());
          } catch (g) {
            console.error(`Failed to initialize reveal.js for ${u}:`, g);
          }
        };
      return () => {
        if ((clearTimeout(b), t.current)) {
          try {
            t.current.destroy();
          } catch (g) {
            console.warn("Error destroying reveal.js instance:", g);
          }
          t.current = null;
        }
      };
    }, [i, e, r, C, y, m, s, d, l, u]),
    E.jsx("div", {
      className: `reveal reveal-container-${u.replace(/:/g, "-")}`,
      ref: o,
      style: { width: "100%", height: "100%" },
      children:
        !s &&
        E.jsx("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            color: "#666",
          },
          children: "Loading...",
        }),
    })
  );
};
export { H as SlideViewer };
