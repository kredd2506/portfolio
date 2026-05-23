"use client";

import { useEffect, useState } from "react";

const NAME_FIRST = "Manish";
const NAME_LAST = "K Reddy";
const FULL_NAME = `${NAME_FIRST} ${NAME_LAST}`;
const LOCATION = "atlanta";
const SECTIONS = ["about", "research", "experience"] as const;
type Section = (typeof SECTIONS)[number];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

function Tile({
  id,
  klass,
  label,
  caption,
}: {
  id: string;
  klass: string;
  label: string;
  caption: string;
}) {
  return (
    <div className="hero-tile" data-tile={id}>
      <div className={`ph ${klass}`}>
        <span>{label}</span>
      </div>
      <div className="cap">{caption}</div>
    </div>
  );
}

function RailTile({
  klass,
  label,
  aspect,
}: {
  klass: string;
  label: string;
  aspect?: "wide";
}) {
  return (
    <div className={`tile ${aspect === "wide" ? "wide" : ""}`}>
      <div className={`ph ${klass}`}>
        <span>{label}</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-name">{FULL_NAME}</div>
      <nav className="hero-nav">
        {SECTIONS.map((s) => (
          <button key={s} onClick={() => scrollTo(s)}>
            {s}
          </button>
        ))}
      </nav>
      <Tile id="1" klass="a" label="portrait" caption="portrait.jpg · atlanta, 2025" />
      <Tile id="2" klass="b" label="atlanta skyline" caption="skyline.jpg · piedmont, dusk" />
      <Tile id="3" klass="c" label="motorcycle" caption="ride.jpg · north ga, sept" />
      <Tile id="4" klass="d" label="workstation / gpus" caption="workstation.jpg · home lab" />
    </section>
  );
}

function Ticker() {
  const items: Array<[string, string]> = [
    ["now", "atlanta, ga"],
    ["compiling", "project helix · ontology-first agents"],
    ["shipping", "numina pilot — first b2b var"],
    ["drafting", "tpu v6e vs h200 vs mi300x paper"],
    ["merged", "openxla/xla pr #40232"],
    ["reading", "the structure of scientific revolutions"],
    ["listening", "king krule · alice coltrane"],
  ];
  const all = [...items, ...items];
  return (
    <div className="ticker" aria-label="status">
      <div className="ticker-track">
        {all.map(([k, v], i) => (
          <span key={i}>
            <span className="pulse" />
            <span style={{ opacity: 0.55 }}>{k}</span>
            <span className="dot">▸</span>
            <span>{v}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function StickyBar() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState<Section>("about");
  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.6);
      const offset = window.innerHeight * 0.4;
      let current: Section = "about";
      for (const s of SECTIONS) {
        const el = document.getElementById(s);
        if (el && el.getBoundingClientRect().top - offset < 0) current = s;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`stickbar ${show ? "show" : ""}`}>
      <div className="nm">{FULL_NAME}</div>
      <nav>
        {SECTIONS.map((s) => (
          <button
            key={s}
            className={active === s ? "active" : ""}
            onClick={() => scrollTo(s)}
          >
            {s}
          </button>
        ))}
      </nav>
      <div className="loc">
        {LOCATION} · {new Date().getFullYear()}
      </div>
    </div>
  );
}

function About() {
  return (
    <div id="about" className="body-wrap">
      <aside className="sidebar">
        <div className="portrait">
          <div className="ph a" style={{ position: "absolute", inset: 0 }}>
            <span>portrait</span>
          </div>
        </div>
        <h1>
          {NAME_FIRST} <em>{NAME_LAST}</em>
        </h1>
        <p>
          hi, i&apos;m Manish! i live in <em>Atlanta</em> and recently finished my MS in computer science at <em>Illinois Tech</em>. i spend my time somewhere between <em>ML compilers</em>, <em>agentic infrastructure</em>, and building a company, and i&apos;m figuring out which of those to bet the next few years on — possibly a <em>PhD</em>.
        </p>
        <p>
          i&apos;m excited to meet people who love building things: products, compilers, companies, communities — so don&apos;t hesitate to reach out!!
        </p>
        <div className="links">
          <a href="mailto:kreddy.manish@gmail.com">email</a>
          <a href="https://www.linkedin.com/in/manishkreddy/" target="_blank" rel="noopener noreferrer">linkedin</a>
          <a href="https://github.com/kredd2506" target="_blank" rel="noopener noreferrer">github</a>
        </div>

        <div className="now-block">
          <div className="now-h">now</div>
          <div className="now-row">
            <span className="k">reading</span>
            <span className="v"><em>kuhn</em>, <em>winograd &amp; flores</em></span>
          </div>
          <div className="now-row">
            <span className="k">building</span>
            <span className="v">helix · numina pilot</span>
          </div>
          <div className="now-row">
            <span className="k">drafting</span>
            <span className="v">tpu benchmark paper</span>
          </div>
        </div>
      </aside>

      <main className="main">
        <div className="sect-prefix">
          <span>§ 01 / about</span> <span className="accent">—</span>{" "}
          <span>what i&apos;m pursuing</span>
        </div>
        <h2>what i&apos;m pursuing</h2>
        <ol className="numlist">
          <li>
            <span className="n">01</span>
            <span className="b">
              contributing to <a href="https://github.com/openxla/xla" target="_blank" rel="noopener noreferrer" className="arrow">OpenXLA</a> on the <em>HLO verifier</em> and numerical correctness, with merged PRs to <em>openxla/xla</em> — my favorite kind of contribution is the small one that surfaces five silent crash bugs downstream
            </span>
          </li>
          <li>
            <span className="n">02</span>
            <span className="b">
              co-founding <a href="#" className="arrow">Numina AI</a>, where we&apos;re building <em>AI-native workflow infrastructure</em> for small CPA firms serving SMBs — currently preparing an angel round and onboarding our first pilot
            </span>
          </li>
          <li>
            <span className="n">03</span>
            <span className="b">
              engineering <em>agentic AI infrastructure</em> at CONA Services for Coca-Cola&apos;s bottling operations across <em>500+ servers</em> and <em>11 bottlers</em>, leading an ontology-first architecture initiative to replace bloated instruction files with a structured knowledge layer
            </span>
          </li>
          <li>
            <span className="n">04</span>
            <span className="b">
              writing a cross-platform benchmarking paper comparing <em>TPU v6e</em>, <em>H200</em>, and <em>MI300X</em> — follow-up to my Google Summer of Code work at SDSC / UC Santa Cruz on GPU observability
            </span>
          </li>
          <li>
            <span className="n">05</span>
            <span className="b">
              exploring <em>PhD programs</em> in ML systems and compilers — the cascade-bug work and the TPU benchmarking are the threads i&apos;d most want to pull on next
            </span>
          </li>
          <li>
            <span className="n">06</span>
            <span className="b">
              finding ways to make a real dent through <em>infrastructure</em>, <em>research</em>, and the occasional well-placed bet
            </span>
          </li>
        </ol>
      </main>

      <aside className="right-rail">
        <RailTile klass="b" label="atlanta, dusk" />
        <RailTile klass="e" label="ride, north ga" aspect="wide" />
        <RailTile klass="d" label="kitchen / sunday" />
        <RailTile klass="f" label="desk, late" aspect="wide" />
      </aside>
    </div>
  );
}

function Research() {
  return (
    <div id="research" className="body-wrap">
      <aside className="sidebar">
        <div className="section-label">research</div>
        <p>compilers, accelerators, and the agent infrastructure i&apos;m building around them.</p>
      </aside>

      <main className="main">
        <div className="sect-prefix">
          <span>§ 02 / research</span> <span className="accent">—</span>{" "}
          <span>compilers, accelerators, agents</span>
        </div>
        <div className="prose">
          <h3>OpenXLA — HLO verifier &amp; numerical correctness</h3>
          <p>
            i contribute to <a href="https://github.com/openxla/xla" target="_blank" rel="noopener noreferrer">openxla/xla</a>, focused on the <em>HLO verifier</em>. my most recent merged work, <a href="https://github.com/openxla/xla/pull/40232" target="_blank" rel="noopener noreferrer">PR #40232</a> (an async-pair fix), surfaced <em>five silent crash bugs</em> in downstream tests that had been masked for months.
          </p>
          <p>
            the cascade is what i love about compiler work — one verifier rule, dozens of corrected behaviors. other contributions: a scalar <em>erf</em> saturation fix and test coverage across the HLO surface. recently accepted into the <em>TPU Builder</em> program.
          </p>

          <div className="stats">
            <div className="cell">
              <div className="n">500<span className="unit">+</span></div>
              <div className="l">servers patched<br />across cona ops</div>
            </div>
            <div className="cell">
              <div className="n">5<span className="unit">bugs</span></div>
              <div className="l">silent crashes<br />surfaced by pr #40232</div>
            </div>
            <div className="cell">
              <div className="n">96.6<span className="unit">%</span></div>
              <div className="l">throughput recovered<br />in dr validation</div>
            </div>
            <div className="cell">
              <div className="n">62k<span className="unit">–93k</span></div>
              <div className="l">instruction tokens<br />helix replaces</div>
            </div>
          </div>

          <h3>Cross-platform inference benchmarking</h3>
          <p>
            a paper-in-progress comparing <em>TPU v6e</em>, <em>H200</em>, and <em>MI300X</em> across realistic inference workloads — the kind of numbers everyone wants when picking infrastructure but nobody publishes openly.
          </p>
          <p>
            what i find compelling is how often the intuitive answer turns out to be wrong once you actually measure across <em>batch sizes</em>, <em>sequence lengths</em>, and <em>memory regimes</em>. accelerator choice is downstream of workload shape.
          </p>

          <h3>GPU observability for NRP — GSoC 2025</h3>
          <p>
            with OSPO at UC Santa Cruz, i built a containerized agentic platform for the <em>National Research Platform</em> (70+ institutions, 3 continents) — ingesting Prometheus metrics to power GenAI narratives and root-cause analyses in the Seam portal. co-authored <a href="https://arxiv.org/abs/2507.00418" target="_blank" rel="noopener noreferrer">arXiv 2507.00418</a>.
          </p>

          <h3>Project Helix — ontology-first agents at CONA</h3>
          <p>
            at <em>CONA Services</em> i lead Helix, replacing bloated agent instruction files (62K–110K tokens) with a structured knowledge layer on <em>Cosmos DB Gremlin</em>, <em>Azure AI Search</em>, and <em>Graphiti</em>. the hypothesis: agent quality degrades as instructions grow, but <em>ontologies don&apos;t</em>.
          </p>
          <p>
            this sits underneath <em>ZENO</em>, a 16-node LangGraph pipeline with seven specialist agents and a Splunk MCP gateway.
          </p>

          <h3>Numina AI — workflow infrastructure for small CPA firms</h3>
          <p>
            i&apos;m co-founder of <a href="#">Numina</a>, building AI-native workflow infrastructure for the underserved middle of accounting: small CPA firms serving SMBs. what i find compelling is the shape of the market — <em>too small for Big 4, too complex for off-the-shelf SaaS</em>, and workflows that look nearly identical across hundreds of firms.
          </p>
        </div>
      </main>

      <aside className="right-rail">
        <RailTile klass="e" label="hlo trace" />
        <RailTile klass="f" label="benchmark plot" aspect="wide" />
        <RailTile klass="c" label="gpu rack" />
        <RailTile klass="d" label="helix diagram" aspect="wide" />
        <RailTile klass="b" label="numina, sketches" />
      </aside>
    </div>
  );
}

function Experience() {
  return (
    <div id="experience" className="body-wrap">
      <aside className="sidebar">
        <div className="section-label">
          experiences <em>along the way</em>
        </div>
        <p>a non-exhaustive list — pieced together from full-time work, summers, fellowships, and the occasional prize.</p>
      </aside>

      <main className="main">
        <div className="sect-prefix">
          <span>§ 03 / experience</span> <span className="accent">—</span>{" "}
          <span>full-time, summers, fellowships</span>
        </div>
        <ol className="numlist">
          <li>
            <span className="n">01</span>
            <span className="b">
              <em>AI Solutions Engineer</em> at CONA Services (Coca-Cola bottling operations), where i shipped the <em>Patching Status Tracking System</em> — React dashboard, Azure Logic Apps orchestration, a 13-tool MCP server on Azure Functions — coordinating maintenance across 500+ servers and 11 teams
            </span>
          </li>
          <li>
            <span className="n">02</span>
            <span className="b">
              <em>DR validation system</em> at CONA using FastAPI + React, recovering <em>96.6% of throughput</em> in disaster scenarios
            </span>
          </li>
          <li>
            <span className="n">03</span>
            <span className="b">
              <em>Google Summer of Code 2025</em> with OSPO at UC Santa Cruz, building GPU observability for the National Research Platform across A100, GH200, L40, and RTX 3090
            </span>
          </li>
          <li>
            <span className="n">04</span>
            <span className="b">
              <em>Genisys Venture Analyst</em> at Kaplan Institute, running due diligence on deep-tech projects and helping shape a <em>$6M TechForward</em> investment thesis
            </span>
          </li>
          <li>
            <span className="n">05</span>
            <span className="b">
              <em>Grainger Computing Innovation Prize</em> — 2nd Runner-Up for <em>H2.0 Resilience</em>, an explainable-AI flood risk tool that reduced evaluation time by 90%
            </span>
          </li>
          <li>
            <span className="n">06</span>
            <span className="b">
              earlier on: <em>machine learning research</em> at VIGA Entertainment on real-time facial motion capture in Unreal Engine, and founding <em>SIGGRAPH BNMIT</em> during undergrad in Bangalore
            </span>
          </li>
          <li>
            <span className="n">07</span>
            <span className="b">
              <em>Dartmouth Conrades Distinguished Fellowship</em>, <em>UC Berkeley VC University</em> scholarship, and <em>&ldquo;Cultural Achiever of the Year&rdquo;</em> — somewhere between business, research, and being too curious for one lane
            </span>
          </li>
        </ol>
      </main>

      <aside className="right-rail">
        <RailTile klass="d" label="cona dashboard" />
        <RailTile klass="b" label="ucsc, summer" aspect="wide" />
        <RailTile klass="f" label="kaplan, demo day" />
        <RailTile klass="c" label="award night" aspect="wide" />
      </aside>
    </div>
  );
}

function SiteFooter() {
  const now = new Date();
  const yyyymm = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, "0")}`;
  return (
    <>
      <footer>
        <div>
          © {now.getFullYear()} <em>{FULL_NAME.toLowerCase()}</em>
        </div>
        <div>
          set in <em>EB Garamond</em> &amp; <em>JetBrains Mono</em>
        </div>
        <div
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            fontFamily: "var(--mono)",
            fontSize: 11,
          }}
        >
          {LOCATION}
        </div>
      </footer>
      <div className="build">
        <span className="tag">build {yyyymm}</span>
        <span className="tag">v2.0.0</span>
        <span className="tag">eb garamond / jetbrains mono</span>
        <span className="sp" />
        <span className="tag">handcoded · atlanta</span>
      </div>
    </>
  );
}

function ModeToggle({
  theme,
  setTheme,
}: {
  theme: "paper" | "dark";
  setTheme: (t: "paper" | "dark") => void;
}) {
  const isDark = theme === "dark";
  return (
    <button
      className="mode-toggle"
      onClick={() => setTheme(isDark ? "paper" : "dark")}
      aria-label="toggle dark mode"
    >
      <span className="glyph" />
      <span>{isDark ? "light" : "dark"}</span>
    </button>
  );
}

export default function Page() {
  const [theme, setTheme] = useState<"paper" | "dark">("paper");

  useEffect(() => {
    let initial: "paper" | "dark" = "paper";
    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved === "dark" || saved === "paper") {
        initial = saved;
      } else if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        initial = "dark";
      }
    } catch {}
    setTheme(initial);
  }, []);

  useEffect(() => {
    document.body.classList.remove("theme-paper", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {}
  }, [theme]);

  return (
    <>
      <Hero />
      <Ticker />
      <StickyBar />
      <About />
      <Research />
      <Experience />
      <SiteFooter />
      <ModeToggle theme={theme} setTheme={setTheme} />
    </>
  );
}
