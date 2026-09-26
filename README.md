# pabloprieto.io

Personal portfolio: a terminal session you scroll through, on top of a faint crypto-coin network.

Built with [Astro](https://astro.build) as a fully static site. The page ships as one HTML file with inlined CSS
and ~1 KB of JavaScript (the typing/reveal effect), plus a self-hosted JetBrains Mono font.

## Develop

```sh
bun install
bun run dev      # http://localhost:4321
bun run build    # type-check + static build into dist/
bun run preview  # serve dist/
bun run og       # re-render the share image (public/og.png) with headless Chromium
```

## Where things live

| Path                               | What                                                                  |
| ---------------------------------- | --------------------------------------------------------------------- |
| `src/data/resume.ts`               | All copy. Edit this to change text; `**phrase**` highlights a metric. |
| `src/styles/global.css`            | Color tokens, font, CRT scanline overlay.                             |
| `src/components/CoinNetwork.astro` | The background coin network (SVG + CSS, no JS).                       |
| `src/components/Terminal.astro`    | Window chrome and title bar.                                          |
| `src/components/sections/`         | One component per command block.                                      |
| `src/scripts/terminal.ts`          | Types each command as it scrolls into view, then reveals its output.  |
| `design/mocks/`                    | The static HTML design mocks this was built from.                     |

The typing effect is progressive: without JavaScript, or with `prefers-reduced-motion`, all content is simply visible.
