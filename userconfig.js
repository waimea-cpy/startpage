// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "UK",
      timezone: "Europe/London",
      format: "k:i p",
      icon_color: palette.peach,
    },
  ],
  search: {
    engines: {
      s: ["https://www.startpage.com/sp/search?query=", "StartPage"],
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "s",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.perplexity.ai",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "Me",
      background_url: "src/img/banners/banner_01.gif",
      categories: [
        {
          name: "Links",
          links: [
            {
              name: "TradeMe",
              url: "https://trademe.co.nz",
              icon: "droplet-bolt",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "Org",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "News",
          links: [
            {
              name: "BBC",
              url: "https://news.bbc.o.uk",
              icon: "news",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
    {
      name: "Dev",
      background_url: "src/img/banners/banner_02.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com/waimea-cpy",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "Code",
          links: [
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/banner_03.gif",
      categories: [
        {
          name: "Video",
          links: [
            {
              name: "YouTube",
              url: "https://youtube.com/subscriptions",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "Play",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
