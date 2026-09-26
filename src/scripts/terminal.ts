// Each .block "runs" when it scrolls into view: its command types out, then its output appears.
// The inline script in Base.astro adds `html.js` (skipped for reduced motion); without it, everything
// is already visible and this module does nothing.

const CHAR_MS = 32

const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms))

async function typeInto(el: HTMLElement, text: string) {
  el.textContent = ""
  for (let i = 1; i <= text.length; i++) {
    el.textContent = text.slice(0, i)
    await sleep(CHAR_MS + Math.random() * 30)
  }
  await sleep(120)
}

function show(block: HTMLElement) {
  block.classList.add("on", "done")
}

async function run(block: HTMLElement) {
  block.classList.add("on")
  const cmd = block.querySelector<HTMLElement>(":scope > .prompt .cmd")
  const text = cmd?.dataset["cmd"]
  if (cmd && text) await typeInto(cmd, text)
  block.classList.add("done")
}

if (document.documentElement.classList.contains("js")) {
  // Blocks run one at a time, in the order they appear, so the session reads like real output.
  let queue = Promise.resolve()

  const io = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        const block = entry.target as HTMLElement
        if (entry.isIntersecting) {
          io.unobserve(block)
          queue = queue.then(() => run(block))
        } else if (entry.boundingClientRect.top < 0) {
          // Already scrolled past (reload mid-page, anchor jump): show without animating.
          io.unobserve(block)
          show(block)
        }
      }
    },
    // Trigger on the block's top edge, not a % of its height: some blocks are taller than the viewport.
    { rootMargin: "0px 0px -12% 0px" },
  )

  document.querySelectorAll<HTMLElement>(".block").forEach(b => io.observe(b))
}
