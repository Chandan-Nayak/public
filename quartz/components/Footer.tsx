import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"
import { getDate, formatDate } from "./Date"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg, fileData }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    const dateDisplay = fileData && fileData.dates ? getDate(cfg, fileData) : undefined
    
    return (
      <footer class={`${displayClass ?? ""}`}>
        {dateDisplay && (
          <div class="footer-date">
            Last updated: <time datetime={dateDisplay.toISOString()}>{formatDate(dateDisplay, cfg.locale)}</time>
          </div>
        )}
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
