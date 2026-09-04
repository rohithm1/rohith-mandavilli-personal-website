import "./style.css";

interface Project {
  name: string;
  href: string;
  note?: string;
}

const projects: Project[] = [
  {
    name: "2026 ff mock drafter",
    href: "https://ff-draft-ten.vercel.app",
    note: "a fantasy football draft room",
  },
  {
    name: "engineering blog",
    href: "https://rmengineering.weebly.com/",
    note: "older builds",
  },
];

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs: Record<string, string> = {},
  ...children: (Node | string)[]
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
  node.append(...children);
  return node;
}

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("#app missing");

const hi = el("h1", { class: "hi" }, el("mark", {}, "hi, this is rohith"));

const list = el(
  "ul",
  {},
  ...projects.map((p) =>
    el(
      "li",
      {},
      el("a", { href: p.href }, p.name),
      p.note ? el("span", { class: "note" }, ` — ${p.note}`) : "",
    ),
  ),
);
const col = el("section", { class: "col" }, el("h2", {}, "side projects"), list);

const footer = el("footer", {}, "rohith mandavilli");

app.append(hi, col, footer);
