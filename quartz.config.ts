import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import * as Component from "./quartz/components"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Chandan's Notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "notes.cnayak.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Sora",
        body: "Work Sans",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f5f2ed",
          lightgray: "#ebe5dc",
          gray: "#d3c7b8",
          darkgray: "#3c3a35",
          dark: "#181511",
          secondary: "#0f766e",
          tertiary: "#f59e0b",
          highlight: "rgba(15, 118, 110, 0.08)",
          textHighlight: "#f59e0b66",
        },
        darkMode: {
          light: "#0f172a",
          lightgray: "#1f2937",
          gray: "#334155",
          darkgray: "#e5e7eb",
          dark: "#f8fafc",
          secondary: "#2dd4bf",
          tertiary: "#fbbf24",
          highlight: "rgba(45, 212, 191, 0.12)",
          textHighlight: "#fbbf244d",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage({ pageBody: Component.FolderContent({ showFolderCount: false, showSubfolders: false }) }),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
