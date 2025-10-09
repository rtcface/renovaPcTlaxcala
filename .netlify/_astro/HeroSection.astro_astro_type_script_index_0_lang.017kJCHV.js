import { t as n, s as o, c as s } from "./anime.esm.BuwIZpGW.js";

document.addEventListener("DOMContentLoaded", () => {
  const t = document.getElementById("mona-text");
  if (t) {
    const { chars: e } = n.split(t, { words: !1, chars: !0 });
    s({ loop: !1, defaults: { ease: "inOut(3)", duration: 1500 } })
      .add(
        e,
        {
          y: [(a) => (+a.dataset.line % 2 ? "100%" : "-200%"), "0%"],
          opacity: [0, 1],
        },
        o(10, { from: "random" }),
      )
      .init()
      .then(() => {
        document.dispatchEvent(new Event("start-tags"));
      });
  }
});
