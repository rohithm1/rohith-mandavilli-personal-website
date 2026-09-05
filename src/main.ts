import "./style.css";

interface Project {
  name: string;
  href: string;
  note?: string;
}

const projects: Project[] = [
  {
    name: "2026 ff mock drafter",
    href: "https://ffdraft2026.vercel.app",
    note: "a fantasy football draft room",
  },
  {
    name: "polis",
    href: "https://polisus.com/",
    note: "public access to legislative proceedings",
  },
  {
    name: "engineering blog",
    href: "https://rmengineering.weebly.com/",
    note: "high school drawings",
  },
];

interface Contact {
  name: string;
  href: string;
}

const contacts: Contact[] = [
  { name: "email", href: "mailto:rohith.mandavilli@gmail.com" },
  { name: "github", href: "https://github.com/rohithm1" },
  { name: "linkedin", href: "https://www.linkedin.com/in/rohithmandavilli/" },
  { name: "resume", href: "/resume.pdf" },
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

const links = el(
  "nav",
  { class: "links" },
  ...contacts.map((c) => el("a", { href: c.href }, c.name)),
);

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

app.append(links, col);
