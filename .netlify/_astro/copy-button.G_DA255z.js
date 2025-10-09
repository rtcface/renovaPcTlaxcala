import { c as p } from "./createLucideIcon.CgJsfuSp.js";
import { t } from "./index.DAZZgTnj.js";
import { j as e } from "./jsx-runtime.D_zvdyIk.js";
import "./index.CY-HDqYb.js";
import "./index.BoFeahe5.js";
import "./index.BvNfZMHe.js"; /**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l = [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea",
      },
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf",
      },
    ],
  ],
  y = p("copy", l),
  f = ({
    content: i,
    textColor: n,
    background: a,
    iconSize: c = "w-4 h-4",
  }) => {
    const r = (o) => {
        o.stopPropagation(),
          navigator.clipboard &&
          typeof navigator.clipboard.writeText == "function"
            ? navigator.clipboard
                .writeText(i)
                .then(() => {
                  t.success("Copied successfully!");
                })
                .catch(() => {
                  t.error("Failed to copy content.");
                })
            : t.error("Clipboard API not available in this browser.");
      },
      s = (o) => {
        (o.key === "Enter" || o.key === " ") && r(o);
      };
    return e.jsx("button", {
      type: "button",
      onClick: r,
      onKeyDown: s,
      className: `group  cursor-pointer ${a}`,
      "aria-label": "Copy content",
      children: e.jsx(y, {
        className:
          `${c} transition-colors duration-150 ${n ?? ""} group-hover:text-gray-500`.trim(),
      }),
    });
  };
export { f as CopyButton };
