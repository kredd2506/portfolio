export default function Page() {
  return (
    <main className="wip-page">
      <section className="wip-card">
        <div className="wip-tag">
          <span className="wip-dot" />
          <span>status · rebuilding</span>
        </div>

        <h1>
          this site is <em>under construction</em>.
        </h1>

        <p>
          for the third time this year, allegedly the last. <em>manish</em> is
          chiseling. the real homepage lands when it&apos;s actually good.
        </p>

        <p>
          in the meantime, the work happens here →{" "}
          <a
            href="https://github.com/kredd2506"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/kredd2506
          </a>
        </p>

        <div className="wip-foot">
          <span>404: site found · 200: author maybe</span>
          <span>atlanta · {new Date().getFullYear()}</span>
        </div>
      </section>

      <style>{`
        .wip-page {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 40px 20px;
          background: var(--bg);
          color: var(--ink);
        }
        .wip-card {
          max-width: 560px;
          width: 100%;
        }
        .wip-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink-soft);
          margin-bottom: 32px;
          padding: 6px 12px;
          border: 1px solid var(--rule);
          border-radius: 999px;
        }
        .wip-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--accent);
          animation: wip-pulse 1.6s ease-in-out infinite;
        }
        @keyframes wip-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
        .wip-card h1 {
          font-family: var(--display);
          font-weight: 500;
          font-size: clamp(36px, 6vw, 56px);
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin: 0 0 24px;
        }
        .wip-card h1 em {
          font-style: italic;
          color: var(--accent);
        }
        .wip-card p {
          font-size: 19px;
          line-height: 1.55;
          margin: 0 0 18px;
          max-width: 50ch;
        }
        .wip-card a {
          font-family: var(--mono);
          font-size: 16px;
          text-decoration: underline;
          text-underline-offset: 4px;
          text-decoration-thickness: 1px;
          color: var(--accent);
        }
        .wip-foot {
          margin-top: 56px;
          padding-top: 22px;
          border-top: 1px solid var(--rule);
          display: flex;
          justify-content: space-between;
          font-family: var(--mono);
          font-size: 10.5px;
          letter-spacing: 0.1em;
          text-transform: lowercase;
          color: var(--ink-soft);
          gap: 16px;
          flex-wrap: wrap;
        }
        @media (max-width: 480px) {
          .wip-card h1 { font-size: 34px; }
          .wip-card p { font-size: 17px; }
          .wip-foot { font-size: 9.5px; }
        }
      `}</style>
    </main>
  );
}
