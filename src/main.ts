import "./style.css";

interface Project {
  name: string;
  href: string;
}

const projects: Project[] = [
  { name: "'26 Fantasy Draft Helper", href: "https://ffdraft2026.vercel.app" },
  { name: "polis", href: "https://polisus.com/" },
  { name: "engineering blog", href: "https://rmengineering.weebly.com/" },
];

const publications: Project[] = [
  {
    name: "Determining ASL Joint Trajectory Similarity Using Dynamic Time Warping (2022)",
    href: "https://digitalcommons.dartmouth.edu/cs_senior_theses/12",
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

const section = (title: string, items: Project[]) =>
  el(
    "section",
    { class: "col" },
    el("h2", {}, title),
    el(
      "ul",
      {},
      ...items.map((p) => el("li", {}, el("a", { href: p.href }, p.name))),
    ),
  );

app.append(
  section("Projects", projects),
  section("Research Publications", publications),
  links,
);
