// @ts-check
import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://pabloprieto.io",
  devToolbar: { enabled: false },
  build: {
    // Single page: inlining CSS removes the only render-blocking request.
    inlineStylesheets: "always",
  },
})
