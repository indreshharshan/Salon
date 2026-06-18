<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Trimly — Beauty Service Booking Platform</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #0d0d0f;
      --surface: #18181b;
      --surface2: #222228;
      --border: rgba(255,255,255,0.08);
      --border2: rgba(255,255,255,0.14);
      --text: #e8e8e8;
      --muted: #888;
      --purple: #a78bfa;
      --green: #34d399;
      --blue: #60a5fa;
      --pink: #f472b6;
      --orange: #fb923c;
    }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      min-height: 100vh;
      padding: 32px 16px 60px;
    }

    .container { max-width: 800px; margin: 0 auto; }

    /* ── ANIMATIONS ── */
    @keyframes fadeUp   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
    @keyframes slideIn  { from{opacity:0;transform:translateX(-18px)} to{opacity:1;transform:translateX(0)} }
    @keyframes float    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
    @keyframes shimmer  { 0%{background-position:200% center} 100%{background-position:-200% center} }
    @keyframes badgePop { 0%{opacity:0;transform:scale(0.6)} 70%{transform:scale(1.1)} 100%{opacity:1;transform:scale(1)} }
    @keyframes pulse    { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06)} }
    @keyframes spin     { to{transform:rotate(360deg)} }
    @keyframes dot      { 0%,80%,100%{opacity:0.25} 40%{opacity:1} }
    @keyframes dashIn   { from{stroke-dashoffset:200} to{stroke-dashoffset:0} }
    @keyframes starWave { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }

    .anim-fadeup { animation: fadeUp 0.65s ease both; }

    /* ── BANNER ── */
    .banner {
      position: relative; overflow: hidden;
      background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
      border-radius: 20px;
      padding: 48px 32px 36px;
      margin-bottom: 24px;
      border: 1px solid rgba(167,139,250,0.2);
      animation: fadeUp 0.7s ease both;
    }
    .banner-glow {
      position: absolute; inset: 0; pointer-events: none;
      background:
        radial-gradient(ellipse at 80% 15%, rgba(167,139,250,0.18) 0%, transparent 55%),
        radial-gradient(ellipse at 15% 85%, rgba(52,211,153,0.12) 0%, transparent 55%);
    }
    .banner-scissors {
      font-size: 60px; text-align: center;
      display: block; margin-bottom: 14px;
      animation: float 3.2s ease-in-out infinite;
    }
    .banner-title {
      font-size: 52px; font-weight: 800; text-align: center;
      background: linear-gradient(90deg, #a78bfa, #34d399, #60a5fa, #f472b6, #a78bfa);
      background-size: 250% auto;
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 4s linear infinite;
      margin-bottom: 10px;
      letter-spacing: -1px;
    }
    .banner-sub {
      text-align: center; color: rgba(255,255,255,0.72);
      font-size: 15px; line-height: 1.65;
      max-width: 520px; margin: 0 auto 24px;
      animation: fadeUp 0.8s ease 0.4s both; opacity: 0;
    }
    .badge-row { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; }
    .badge {
      font-size: 11px; font-weight: 700; padding: 5px 14px;
      border-radius: 20px; letter-spacing: 0.05em;
      animation: badgePop 0.5s ease both;
    }
    .b-mern   { background:rgba(52,211,153,0.15); color:#34d399; border:1px solid rgba(52,211,153,0.3); animation-delay:0.6s; }
    .b-react  { background:rgba(96,165,250,0.15); color:#60a5fa; border:1px solid rgba(96,165,250,0.3); animation-delay:0.75s; }
    .b-jwt    { background:rgba(251,146,60,0.15);  color:#fb923c; border:1px solid rgba(251,146,60,0.3);  animation-delay:0.9s; }
    .b-vercel { background:rgba(255,255,255,0.1);  color:#fff;    border:1px solid rgba(255,255,255,0.2); animation-delay:1.05s; }
    .b-mongo  { background:rgba(74,222,128,0.15);  color:#4ade80; border:1px solid rgba(74,222,128,0.3); animation-delay:1.2s; }

    /* ── SECTION ── */
    .section { margin-bottom: 24px; animation: fadeUp 0.6s ease both; }
    .section-title {
      font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
      color: var(--muted); text-transform: uppercase;
      margin-bottom: 14px; display: flex; align-items: center; gap: 10px;
    }
    .section-title::after { content:''; flex:1; height:1px; background:var(--border2); }

    /* ── ROLE CARDS ── */
    .roles-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; }
    @media(max-width:600px) { .roles-grid { grid-template-columns: 1fr; } }
    .role-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px; padding: 20px 16px;
      cursor: pointer; text-decoration: none; color: inherit;
      transition: transform 0.22s, border-color 0.22s, box-shadow 0.22s;
      display: block;
    }
    .role-card:hover {
      transform: translateY(-4px);
      border-color: var(--border2);
      box-shadow: 0 8px 32px rgba(0,0,0,0.35);
    }
    .role-icon { font-size: 26px; margin-bottom: 10px; display:block; }
    .role-label { font-size: 10px; color: var(--muted); font-weight: 600; letter-spacing:0.07em; margin-bottom:4px; }
    .role-name  { font-size: 15px; font-weight: 700; margin-bottom: 7px; }
    .role-desc  { font-size: 12px; color: var(--muted); line-height: 1.55; }
    .role-link  {
      display: inline-flex; align-items: center; gap: 5px;
      font-size: 11px; margin-top: 12px; font-weight: 600;
      text-decoration: none;
    }
    .dot-live {
      width: 7px; height: 7px; border-radius: 50%; display:inline-block;
      animation: dot 1.6s ease-in-out infinite;
    }

    /* ── FEATURES ── */
    .features-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; }
    @media(max-width:500px) { .features-grid { grid-template-columns: 1fr 1fr; } }
    .feat {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 11px; padding: 13px 12px;
      font-size: 12.5px; color: var(--muted);
      display: flex; align-items: flex-start; gap: 9px;
      animation: slideIn 0.5s ease both;
      line-height: 1.5;
    }
    .feat-icon { font-size: 17px; flex-shrink:0; margin-top:1px; }

    /* ── ARCH SVG wrap ── */
    .arch-wrap {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px; padding: 20px;
      overflow: hidden;
    }

    /* ── STACK ── */
    .stack-row { display: flex; flex-wrap: wrap; gap: 9px; }
    .stack-pill {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 20px; padding: 7px 16px;
      font-size: 13px; color: var(--text); font-weight: 500;
      display: flex; align-items: center; gap: 7px;
      animation: badgePop 0.4s ease both;
      transition: transform 0.15s, border-color 0.15s;
      cursor: default;
    }
    .stack-pill:hover { transform: scale(1.07); border-color: var(--border2); }

    /* ── KEY HIGHLIGHTS ── */
    .highlights-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    @media(max-width:500px) { .highlights-grid { grid-template-columns: 1fr; } }
    .highlight {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 11px; padding: 13px 16px;
      font-size: 13px; color: var(--text);
      display: flex; align-items: center; gap: 10px;
      transition: transform 0.2s;
    }
    .highlight:hover { transform: translateX(5px); }
    .hl-check { font-size: 16px; }

    /* ── FUTURE ── */
    .future-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    @media(max-width:500px) { .future-grid { grid-template-columns: 1fr; } }
    .future-item {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 11px; padding: 13px 16px;
      font-size: 13px; color: var(--muted);
      display: flex; align-items: center; gap: 10px;
      transition: transform 0.2s, color 0.2s;
    }
    .future-item:hover { transform: translateX(5px); color: var(--text); }

    /* ── SCREENSHOTS ── */
    .screenshots-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    @media(max-width:500px){ .screenshots-grid { grid-template-columns:1fr; } }
    .screenshot-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px; overflow:hidden;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .screenshot-card:hover { transform:scale(1.02); box-shadow:0 8px 28px rgba(0,0,0,0.4); }
    .screenshot-card img { width:100%; display:block; }
    .screenshot-label {
      font-size:11px; color:var(--muted); padding:8px 12px;
      border-top:1px solid var(--border);
    }

    /* ── CTA ── */
    .cta {
      text-align: center; padding: 28px;
      background: var(--surface);
      border: 1px solid rgba(167,139,250,0.25);
      border-radius: 16px;
      animation: fadeUp 0.6s ease 0.5s both; opacity:0;
    }
    .cta-text { font-size: 14px; color: var(--muted); margin-bottom: 14px; }
    .stars span {
      font-size: 28px;
      display: inline-block;
      animation: starWave 1.6s ease-in-out infinite;
    }
    .stars span:nth-child(1){animation-delay:0s;}
    .stars span:nth-child(2){animation-delay:0.12s;}
    .stars span:nth-child(3){animation-delay:0.24s;}
    .stars span:nth-child(4){animation-delay:0.36s;}
    .stars span:nth-child(5){animation-delay:0.48s;}

    /* ── FOOTER ── */
    .footer { text-align:center; margin-top:32px; font-size:11px; color:#444; }
  </style>
</head>
<body>
<div class="container">

  <!-- BANNER -->
  <div class="banner">
    <div class="banner-glow"></div>
    <span class="banner-scissors">✂️</span>
    <div class="banner-title">Trimly</div>
    <p class="banner-sub">A complete full-stack beauty service marketplace connecting users, service providers, and administrators in one seamless platform.</p>
    <div class="badge-row">
      <span class="badge b-mern">MERN Stack</span>
      <span class="badge b-react">React.js</span>
      <span class="badge b-jwt">JWT Auth</span>
      <span class="badge b-vercel">Vercel</span>
      <span class="badge b-mongo">MongoDB</span>
    </div>
  </div>

  <!-- LIVE DEMO -->
  <div class="section" style="animation-delay:0.1s;">
    <div class="section-title">🌐 Live Demo</div>
    <div class="roles-grid">

      <a class="role-card" href="https://trimly-user.vercel.app" target="_blank" rel="noopener">
        <span class="role-icon">👤</span>
        <div class="role-label">Platform</div>
        <div class="role-name">User App</div>
        <div class="role-desc">Browse services, find providers & book appointments seamlessly.</div>
        <span class="role-link" style="color:#34d399;">
          <span class="dot-live" style="background:#34d399;"></span>
          trimly-user.vercel.app ↗
        </span>
      </a>

      <a class="role-card" href="https://trimly-provider.vercel.app" target="_blank" rel="noopener">
        <span class="role-icon">💼</span>
        <div class="role-label">Dashboard</div>
        <div class="role-name">Provider App</div>
        <div class="role-desc">Manage your profile, services & incoming appointment requests.</div>
        <span class="role-link" style="color:#60a5fa;">
          <span class="dot-live" style="background:#60a5fa; animation-delay:0.3s;"></span>
          trimly-provider.vercel.app ↗
        </span>
      </a>

      <a class="role-card" href="https://trimly-admin.vercel.app" target="_blank" rel="noopener">
        <span class="role-icon">🛠️</span>
        <div class="role-label">Control Panel</div>
        <div class="role-name">Admin Dashboard</div>
        <div class="role-desc">Monitor users, providers, bookings & control the whole platform.</div>
        <span class="role-link" style="color:#f472b6;">
          <span class="dot-live" style="background:#f472b6; animation-delay:0.6s;"></span>
          trimly-admin.vercel.app ↗
        </span>
      </a>

    </div>
  </div>

  <!-- FEATURES -->
  <div class="section" style="animation-delay:0.15s;">
    <div class="section-title">✨ Features</div>
    <div class="features-grid">
      <div class="feat" style="animation-delay:0.2s;"><span class="feat-icon">🔐</span>JWT auth & profile management</div>
      <div class="feat" style="animation-delay:0.25s;"><span class="feat-icon">📅</span>Appointment booking & tracking</div>
      <div class="feat" style="animation-delay:0.3s;"><span class="feat-icon">🔎</span>Browse providers & services</div>
      <div class="feat" style="animation-delay:0.35s;"><span class="feat-icon">💼</span>Provider dashboard & availability</div>
      <div class="feat" style="animation-delay:0.4s;"><span class="feat-icon">📊</span>Admin monitoring & controls</div>
      <div class="feat" style="animation-delay:0.45s;"><span class="feat-icon">📱</span>Responsive modern UI</div>
    </div>
  </div>

  <!-- ARCHITECTURE -->
  <div class="section" style="animation-delay:0.2s;">
    <div class="section-title">🏗️ System Architecture</div>
    <div class="arch-wrap">
      <svg width="100%" viewBox="0 0 720 170" role="img">
        <title>Trimly three-tier architecture</title>
        <desc>User, Provider, and Admin apps all connect to the central Trimly Platform.</desc>
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </marker>
        </defs>
        <!-- Central -->
        <rect x="260" y="10" width="200" height="44" rx="10" fill="rgba(167,139,250,0.12)" stroke="#a78bfa" stroke-width="1"/>
        <text x="360" y="32" text-anchor="middle" dominant-baseline="central" style="font-size:14px;font-weight:700;fill:#a78bfa;font-family:sans-serif;">✂️ Trimly Platform</text>
        <!-- Lines -->
        <line x1="155" y1="84" x2="278" y2="54" stroke="#a78bfa" stroke-width="1.2" stroke-dasharray="5 3" marker-end="url(#arr)" opacity="0.55"
              style="stroke-dashoffset:200;animation:dashIn 1s ease 0.8s both;"/>
        <line x1="360" y1="84" x2="360" y2="54" stroke="#a78bfa" stroke-width="1.2" stroke-dasharray="5 3" marker-end="url(#arr)" opacity="0.55"
              style="stroke-dashoffset:200;animation:dashIn 1s ease 1s both;"/>
        <line x1="565" y1="84" x2="442" y2="54" stroke="#a78bfa" stroke-width="1.2" stroke-dasharray="5 3" marker-end="url(#arr)" opacity="0.55"
              style="stroke-dashoffset:200;animation:dashIn 1s ease 1.2s both;"/>
        <!-- User -->
        <g style="animation:fadeUp 0.5s ease 0.9s both;opacity:0;">
          <rect x="50" y="84" width="210" height="76" rx="11" fill="rgba(52,211,153,0.1)" stroke="#34d399" stroke-width="0.8"/>
          <text x="155" y="106" text-anchor="middle" dominant-baseline="central" style="font-size:13px;font-weight:700;fill:#34d399;font-family:sans-serif;">👤 User App</text>
          <text x="155" y="124" text-anchor="middle" dominant-baseline="central" style="font-size:11px;fill:rgba(52,211,153,0.65);font-family:sans-serif;">Browse · Book · Manage</text>
          <text x="155" y="145" text-anchor="middle" dominant-baseline="central" style="font-size:10px;fill:rgba(52,211,153,0.4);font-family:sans-serif;">trimly-user.vercel.app</text>
        </g>
        <!-- Provider -->
        <g style="animation:fadeUp 0.5s ease 1.1s both;opacity:0;">
          <rect x="255" y="84" width="210" height="76" rx="11" fill="rgba(96,165,250,0.1)" stroke="#60a5fa" stroke-width="0.8"/>
          <text x="360" y="106" text-anchor="middle" dominant-baseline="central" style="font-size:13px;font-weight:700;fill:#60a5fa;font-family:sans-serif;">💼 Provider App</text>
          <text x="360" y="124" text-anchor="middle" dominant-baseline="central" style="font-size:11px;fill:rgba(96,165,250,0.65);font-family:sans-serif;">Services · Bookings · Profile</text>
          <text x="360" y="145" text-anchor="middle" dominant-baseline="central" style="font-size:10px;fill:rgba(96,165,250,0.4);font-family:sans-serif;">trimly-provider.vercel.app</text>
        </g>
        <!-- Admin -->
        <g style="animation:fadeUp 0.5s ease 1.3s both;opacity:0;">
          <rect x="460" y="84" width="210" height="76" rx="11" fill="rgba(244,114,182,0.1)" stroke="#f472b6" stroke-width="0.8"/>
          <text x="565" y="106" text-anchor="middle" dominant-baseline="central" style="font-size:13px;font-weight:700;fill:#f472b6;font-family:sans-serif;">🛠️ Admin Panel</text>
          <text x="565" y="124" text-anchor="middle" dominant-baseline="central" style="font-size:11px;fill:rgba(244,114,182,0.65);font-family:sans-serif;">Monitor · Control · Manage</text>
          <text x="565" y="145" text-anchor="middle" dominant-baseline="central" style="font-size:10px;fill:rgba(244,114,182,0.4);font-family:sans-serif;">trimly-admin.vercel.app</text>
        </g>
      </svg>
    </div>
  </div>

  <!-- TECH STACK -->
  <div class="section" style="animation-delay:0.25s;">
    <div class="section-title">🛠️ Tech Stack</div>
    <div class="stack-row">
      <div class="stack-pill" style="animation-delay:0.3s;">⚛️ React.js</div>
      <div class="stack-pill" style="animation-delay:0.35s;">🟩 Node.js</div>
      <div class="stack-pill" style="animation-delay:0.4s;">🚂 Express.js</div>
      <div class="stack-pill" style="animation-delay:0.45s;">🍃 MongoDB</div>
      <div class="stack-pill" style="animation-delay:0.5s;">🎨 Tailwind CSS</div>
      <div class="stack-pill" style="animation-delay:0.55s;">🔑 JWT Auth</div>
      <div class="stack-pill" style="animation-delay:0.6s;">🔀 React Router</div>
      <div class="stack-pill" style="animation-delay:0.65s;">▲ Vercel</div>
      <div class="stack-pill" style="animation-delay:0.7s;">🌐 REST API</div>
    </div>
  </div>

  <!-- KEY HIGHLIGHTS -->
  <div class="section" style="animation-delay:0.3s;">
    <div class="section-title">🎯 Key Highlights</div>
    <div class="highlights-grid">
      <div class="highlight"><span class="hl-check">✅</span> Multi-role application architecture</div>
      <div class="highlight"><span class="hl-check">✅</span> Complete booking workflow</div>
      <div class="highlight"><span class="hl-check">✅</span> Separate dashboards for each role</div>
      <div class="highlight"><span class="hl-check">✅</span> Scalable MERN stack implementation</div>
      <div class="highlight"><span class="hl-check">✅</span> Responsive modern UI design</div>
      <div class="highlight"><span class="hl-check">✅</span> Real-world marketplace architecture</div>
    </div>
  </div>

  <!-- SCREENSHOTS -->
  <div class="section" style="animation-delay:0.35s;">
    <div class="section-title">📸 Screenshots</div>
    <div class="screenshots-grid">
      <div class="screenshot-card">
        <img src="https://github.com/user-attachments/assets/e02a685b-3aa7-46ec-9ff1-5f889d06c354" alt="Trimly screenshot 1" loading="lazy"/>
        <div class="screenshot-label">User Platform</div>
      </div>
      <div class="screenshot-card">
        <img src="https://github.com/user-attachments/assets/d899dc3f-1bce-4722-bc17-2fe37f37ed79" alt="Trimly screenshot 2" loading="lazy"/>
        <div class="screenshot-label">Provider Dashboard</div>
      </div>
    </div>
  </div>

  <!-- FUTURE ROADMAP -->
  <div class="section" style="animation-delay:0.4s;">
    <div class="section-title">🔮 Roadmap</div>
    <div class="future-grid">
      <div class="future-item">💳 Online payment integration</div>
      <div class="future-item">🔔 Real-time notifications</div>
      <div class="future-item">💬 User–provider chat</div>
      <div class="future-item">🤖 AI service recommendations</div>
      <div class="future-item">⭐ Review & rating system</div>
      <div class="future-item">📍 Location-based discovery</div>
    </div>
  </div>

  <!-- STAR CTA -->
  <div class="cta">
    <div class="cta-text">Found Trimly useful? Drop a star and show some love 🙌</div>
    <div class="stars">
      <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
    </div>
  </div>

  <div class="footer">Made with ❤️ — Trimly &copy; 2026</div>

</div>

<style>
  @keyframes dashIn { from{stroke-dashoffset:200} to{stroke-dashoffset:0} }
  @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
  @keyframes starWave { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
</style>

</body>
</html>
