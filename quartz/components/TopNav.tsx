import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const navLinks = [
  { href: "/learning/books", label: "Books", prefix: "learning/books" },
  { href: "/learning", label: "Technology", prefix: "learning" },
  { href: "/hobbies", label: "Projects", prefix: "hobbies" },
  { href: "/ideas", label: "Ideas", prefix: "ideas" },
]

const TopNav: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const slug = fileData?.slug ?? ""

  return (
    <nav class="top-nav">
      <a class="brand" href="/">
        <span class="brand-mark" aria-hidden="true">C</span>
        <span class="brand-text">
          <span class="brand-title">Chandan's Notes</span>
          <span class="brand-subtitle">Tech, business, building</span>
        </span>
      </a>
      <div class="nav-links">
        {navLinks.map((link) => (
          <a
            href={link.href}
            class={`nav-link${slug.startsWith(link.prefix) ? " active" : ""}`}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div class="nav-actions">
        <a class="btn primary" href="/learning/books">Start with books</a>
        <a class="btn ghost" href="/learning">Latest learning</a>
      </div>
    </nav>
  )
}

export default (() => TopNav) satisfies QuartzComponentConstructor
