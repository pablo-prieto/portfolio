// Every piece of copy on the site lives here.
// Wrap a phrase in **double asterisks** to render it as a highlighted metric.

export const profile = {
  name: { first: "Pablo", last: "Prieto" },
  handle: "pablo",
  host: "austin",
  cwd: "~/portfolio",
  role: "Full-Stack AI Engineer",
  tagline: "Institutional financial data platforms",
  location: "Austin, TX",
  email: "prietop.pablo@gmail.com",
  github: "pablo-prieto",
  site: "https://pabloprieto.io",
} as const

export const fetch: ReadonlyArray<readonly [key: string, value: string]> = [
  ["role", "Full-Stack AI Engineer"],
  ["domain", "Institutional financial data · crypto · prediction markets"],
  ["uptime", "10 years shipping fintech"],
  ["location", "Austin, TX"],
  ["shell", "claude-code + mcp"],
  ["stack", "TypeScript · React/Next.js · Python · Kotlin · AWS"],
  ["off-hours", "⚽ soccer · 🎮 video games · ₿ on-chain rabbit holes"],
]

export const readme = {
  paragraphs: [
    "Full-stack AI engineer with **10 years** building financial software — from BNY Mellon Pershing to digital-asset, derivatives, and prediction-market data platforms at Lukka.",
    "I take products from idea to production across React/Next.js frontends, AWS infrastructure, and Python/Kotlin backends — and I work AI-native every day with Claude Code and MCP-driven workflows.",
  ],
  comment:
    "currently: building agentic dev workflows & watching too much Champions League",
}

export interface Role {
  title: string
  company: string
  start: string
  /** `null` renders as HEAD (current role). */
  end: string | null
  note?: string
  highlights: string[]
}

export const roles: Role[] = [
  {
    title: "Lead Software Engineer",
    company: "Lukka, Inc.",
    start: "2021-03",
    end: null,
    highlights: [
      "Led the full rebuild of Angular Insights into **OneFi** — a React/TypeScript platform unifying Insights and EDM behind one API Gateway with unified auth.",
      "Designed organization-based entitlements with per-feature authorization for every client org and user.",
      "Replaced a manually rotated shared JWT with a Lambda authorizer doing Okta OAuth token exchange across the Pricing and Reference Data APIs.",
      "Directed **Prediction Markets** — real-time prices, volume and open interest across Polymarket, Kalshi and more, with AI-generated market updates.",
      "Architected **Insights** from inception to production: data-dense AG Grid + WebSocket views over crypto-asset and derivatives datasets.",
      "Built backend systems for a derivatives platform processing **~43B updates/mo**.",
      "Moved filtering off DynamoDB to OpenSearch, with index design tuned for **sub-50ms** filtered, sorted queries.",
      "Built an AI dev pipeline: JIRA via MCP → git worktrees → parallel Claude Code → authenticated Playwright tests.",
      "Coordinated **4 engineers** on the OneFi migration; managed **3** on Insights.",
    ],
  },
  {
    title: "Founding Engineer",
    company: "Daita Corp.",
    start: "2024-03",
    end: null,
    note: "side project",
    highlights: [
      "Took an AI data-cleaning platform from idea to production — Next.js (RSC/SSR), Python services and Supabase.",
      "LangChain SQL agents for schema detection and relationship mapping across CSV, JSON and Excel uploads.",
      "Real-time ingestion into PostgreSQL through validation and transformation pipelines.",
      "Owned DevOps end-to-end: AWS (S3, Lightsail), Docker, SSL and deploys.",
    ],
  },
  {
    title: "Lead Software Engineer",
    company: "BNY Mellon │ Pershing",
    start: "2016-06",
    end: "2021-03",
    highlights: [
      "Built a search component adopted by **10+ teams**, improving search efficiency **40%**.",
      "Tech lead for an Angular loan-calculation tool used by **100+** users, plus the Spring Boot services behind it.",
      "Contributed to the company-wide Angular framework, cutting development time **20%**.",
      "Set review standards that cut maintenance effort **30%**.",
    ],
  },
]

export const education = {
  date: "2015-05",
  degree: "B.E. Computer Engineering",
  school: "City College of New York",
}

export interface Project {
  name: string
  kind: "dir" | "exec"
  summary: string
  href?: string
}

export const projects: Project[] = [
  {
    name: "onefi",
    kind: "dir",
    summary: "Unified API platform · Lambda authorizer · Okta OAuth",
  },
  {
    name: "prediction-markets",
    kind: "dir",
    summary: "Next.js real-time dashboard · Polymarket · Kalshi",
    href: "https://app.predictionmarketdata.io",
  },
  {
    name: "insights",
    kind: "dir",
    summary: "AG Grid + WebSockets · digital-asset analytics",
  },
  {
    name: "daita",
    kind: "dir",
    summary: "AI data standardization · LangChain agents",
  },
  {
    name: "ai-worktree-pipeline",
    kind: "exec",
    summary: "MCP → worktrees → parallel Claude Code",
  },
]

/** Bar level is out of 20 cells. */
export const skillBars: ReadonlyArray<
  readonly [name: string, level: number, comment?: string]
> = [
  ["typescript", 20],
  ["react/next", 19],
  ["python", 16],
  ["aws", 17],
  ["opensearch", 14],
  ["claude-code", 20, "daily driver"],
]

export const skillGroups: ReadonlyArray<
  readonly [group: string, items: string]
> = [
  ["languages", "TypeScript, JavaScript, Python, SQL, Kotlin"],
  [
    "frontend",
    "React, Next.js, AG Grid, shadcn/ui, Tailwind, Storybook, Angular, Bun",
  ],
  ["backend", "FastAPI, Flask, REST, WebSockets, Lambda, OpenAPI"],
  [
    "aws",
    "API Gateway, Lambda, CloudFront, S3, EventBridge, EKS, IAM, Bedrock",
  ],
  ["data", "PostgreSQL, DynamoDB, Redis, OpenSearch, Supabase"],
  ["identity", "Okta, OAuth 2.0, JWT/JWKS, SAML, entitlements"],
  ["ai", "Claude Code (skills, hooks, MCP), MCP servers, Playwright"],
]

export interface Interest {
  icon: string
  name: string
  blurb: string
}

export const interests: Interest[] = [
  {
    icon: "₿",
    name: "crypto",
    blurb:
      "On-chain data, market structure, and building the tools that read it.",
  },
  {
    icon: "◆",
    name: "ai",
    blurb: "Agents, MCP, and making the dev loop 10× shorter.",
  },
  {
    icon: "⚽",
    name: "fútbol",
    blurb: "Weekend matches. Strong opinions on the high press.",
  },
  {
    icon: "▶",
    name: "games",
    blurb: "Competitive by default. Always queueing one more match.",
  },
]
