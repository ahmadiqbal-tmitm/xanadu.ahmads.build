/* Xanadu v2: nav, readiness check, hero rollout illustration. Content is visible without this script. */
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- mobile nav ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.getElementById('nav-links');
  if (toggle && links) {
    const set = open => { links.classList.toggle('open', open); toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); };
    toggle.addEventListener('click', () => set(!links.classList.contains('open')));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => set(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && links.classList.contains('open')) { set(false); toggle.focus(); } });
  }

  /* ---------- readiness check ---------- */
  const quiz = document.getElementById('quiz');
  if (quiz) {
    const dial = document.getElementById('dial'), scoreEl = document.getElementById('score');
    const tierEl = document.getElementById('tier'), adviceEl = document.getElementById('advice'), cta = document.getElementById('result-cta');
    const sets = [...quiz.querySelectorAll('fieldset')];
    const MAX = 15;
    const tiers = [
      { min: 0, step: 'Assess', copy: 'Start with the free Assess. We map where AI pays off first, before you spend anything.' },
      { min: 35, step: 'Blueprint', copy: 'You have momentum but no plan. A Blueprint turns pilots into a costed roadmap with a date on it.' },
      { min: 60, step: 'Enable', copy: 'You are ready to launch. Enable deploys, trains and adopts to target, with Govern keeping risk and spend in check.' },
      { min: 85, step: 'Build', copy: 'You are ready for agents in production. Build integrates Claude into core workflows, one function at a time.' },
    ];
    quiz.addEventListener('change', e => {
      e.target.closest('fieldset')?.classList.add('done');
      const picked = sets.map(f => f.querySelector('input:checked'));
      const answered = picked.filter(Boolean).length;
      if (answered < sets.length) {
        dial.style.setProperty('--p', (answered / sets.length) * 100);
        scoreEl.textContent = answered; dial.querySelector('.dial-num span').textContent = `of ${sets.length}`;
        tierEl.textContent = `${answered} of ${sets.length} answered`;
        return;
      }
      const total = picked.reduce((s, i) => s + Number(i.value), 0);
      const pct = Math.round((total / MAX) * 100);
      const t = [...tiers].reverse().find(x => pct >= x.min);
      dial.style.setProperty('--p', pct);
      scoreEl.textContent = pct; dial.querySelector('.dial-num span').textContent = 'of 100';
      tierEl.textContent = `Start with ${t.step}`;
      adviceEl.textContent = t.copy;
      const lines = sets.map((f, k) => `${f.querySelector('legend').textContent} ${picked[k].parentElement.textContent.trim()}`);
      const subject = `AI readiness: ${t.step} (${pct}/100)`;
      const body = `Hello Xanadu,\n\nI took the readiness check on your site.\n\n${lines.join('\n')}\n\nRecommended first step: ${t.step}.\n`;
      cta.href = `mailto:hello@xanadu.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      cta.innerHTML = `Book a conversation about ${t.step} <span class="arr" aria-hidden="true">→</span>`;
    });
  }
})();

/* Hero rollout org chart: an illustration of the method, not a client result. */
(() => {
  if (!document.getElementById('org')) return;
  // ---- Content -----------------------------------------------------------
  const VERTICALS = [
    { name: 'Finance', short: 'Finance', teams: ['FP&A', 'Payables', 'Compliance'],
      task: { team: 1, steps: ['Matched 214 invoices to purchase orders', 'Flagged 2 exceptions for review'], pending: 'Waiting for the finance lead', approved: 'Approved by the finance lead' } },
    { name: 'HR', short: 'HR', teams: ['Recruiting', 'Onboarding', 'Learning'],
      task: { team: 1, steps: ['Prepared day-one packs for 6 joiners', 'Booked system access and training'], pending: 'Waiting for the HR partner', approved: 'Signed off by the HR partner' } },
    { name: 'Operations', short: 'Ops', teams: ['Procurement', 'Supply chain', 'Service'],
      task: { team: 0, steps: ['Compared 3 supplier quotes', 'Drafted the purchase order'], pending: 'Waiting for the operations manager', approved: 'Approved by the operations manager' } },
    { name: 'Product', short: 'Product', teams: ['Research', 'Engineering', 'QA & release'],
      task: { team: 2, steps: ['Ran 480 regression tests', 'Wrote the release notes'], pending: 'Waiting for the product lead', approved: 'Released by the product lead' } },
    { name: 'Marketing', short: 'Mktg', teams: ['Content & SEO', 'Paid media', 'Analytics'],
      task: { team: 0, steps: ['Drafted 12 SEO briefs', 'Checked each against the brand guide'], pending: 'Waiting for the content lead', approved: 'Approved by the content lead' } },
  ];
  const STAGES = ['Assess', 'Blueprint', 'Enable', 'Govern'];
  // Rollout start times: gaps shrink so it reads as a wave, not a metronome.
  const ROLL_STARTS = [0, 520, 980, 1380, 1720];
  const STAGE_MS = 210;
  const EASE = 'cubic-bezier(0.23, 1, 0.32, 1)';
  const CHECK = '<svg viewBox="0 0 8 8" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 4.2 3.2 6l3.3-4"/></svg>';

  // ---- Build DOM ---------------------------------------------------------
  const org = document.getElementById('org');
  const colsEl = document.getElementById('org-cols');
  const wiresEl = document.getElementById('org-wires');
  const legend = document.getElementById('org-legend');
  const taskEl = document.getElementById('org-task');
  const whereEl = document.getElementById('org-task-where');
  const stepsEl = document.getElementById('org-task-steps');
  const bar = document.getElementById('org-bar');
  const count = document.getElementById('org-count');

  const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };

  const stemLit = el('i', 'stem lit v');
  wiresEl.append(stemLit);

  const cols = VERTICALS.map((v, i) => {
    const x = 10 + i * 20;
    // grey base drop + lit bus segment (from the centre outwards) + lit drop
    const drop = el('i', 'drop'); drop.style.left = x + '%';
    const dropLit = el('i', 'drop lit v'); dropLit.style.left = x + '%';
    const busLit = el('i', 'lit h');
    busLit.style.top = '14px'; busLit.style.height = '1px';
    busLit.style.left = Math.min(50, x) + '%';
    busLit.style.width = Math.abs(50 - x) + '%';
    busLit.style.transformOrigin = x < 50 ? 'right' : 'left';
    wiresEl.append(drop, busLit, dropLit);

    const col = el('div', 'org-col');
    const vert = el('div', 'org-vert');
    vert.dataset.state = 'idle';
    const stage = el('span', 'stage', '<span>Queued</span>');
    vert.append(el('span', 'name', `<span class="full">${v.name}</span><span class="short">${v.short}</span>`), stage);
    const teams = el('ul', 'org-teams');
    const teamEls = v.teams.map(t => { const li = el('li', 'org-team', `<span class="dot"></span><span>${t.replace('&', '&amp;')}</span>`); teams.append(li); return li; });
    col.append(vert, teams);
    colsEl.append(col);
    return { v, col, vert, stageText: stage.firstElementChild, teamEls, wires: [busLit, dropLit] };
  });

  // ---- Helpers -----------------------------------------------------------
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  let run = 0;          // bump to cancel whatever is in flight
  let rolled = false;   // rollout plays once
  let spotIndex = 0;
  let live = 0;
  const wait = (ms, t) => new Promise(res => setTimeout(() => { if (t === run) res(); }, ms));

  function setStage(c, text) {
    c.stageText.textContent = text;
    if (!reduce.matches) c.stageText.animate([{ opacity: 0, transform: 'translateY(3px)' }, { opacity: 1, transform: 'none' }], { duration: 180, easing: EASE });
  }
  function setLive(n) {
    live = n;
    bar.style.transform = `scaleX(${n / VERTICALS.length})`;
    count.textContent = `${n} of ${VERTICALS.length} functions live`;
  }
  function makeLive(c) {
    c.wires.forEach(w => w.classList.add('on'));
    stemLit.classList.add('on');
    c.vert.dataset.state = 'live';
    c.stageText.textContent = 'Live';
    c.teamEls.forEach(t => t.classList.add('live'));
  }
  function clearSpot() {
    cols.forEach(c => {
      c.col.classList.remove('is-spot');
      c.wires.forEach(w => w.classList.remove('hot'));
      c.teamEls.forEach(t => t.classList.remove('active', 'working'));
    });
    stemLit.classList.remove('hot');
  }
  function reset() {
    run++;
    rolled = false; spotIndex = 0;
    org.dataset.phase = 'idle';
    clearSpot();
    cols.forEach(c => {
      c.vert.dataset.state = 'idle';
      c.stageText.textContent = 'Queued';
      c.wires.forEach(w => w.classList.remove('on'));
      c.teamEls.forEach(t => t.classList.remove('live'));
    });
    stemLit.classList.remove('on');
    taskEl.classList.remove('show');
    legend.classList.add('show');
    setLive(0);
  }
  function fillTask(c, finished) {
    const k = c.v.task;
    whereEl.textContent = `${c.v.name} · ${c.v.teams[k.team]}`;
    const cls = finished ? 'in done' : '';
    stepsEl.innerHTML =
      k.steps.map(s => `<li class="${cls}"><span class="mark">${CHECK}</span><span>${s}</span><span class="who">Agent</span></li>`).join('') +
      `<li class="human ${cls}"><span class="mark">${CHECK}</span><span class="txt">${finished ? k.approved : k.pending}</span><span class="who">Human approval</span></li>`;
  }

  // ---- Phase 1: rollout (plays once) -------------------------------------
  async function rollOne(c, i, t) {
    await wait(ROLL_STARTS[i], t);
    stemLit.classList.add('on');
    c.wires.forEach(w => w.classList.add('on', 'hot'));   // the wire arrives in teal
    await wait(360, t);
    c.vert.dataset.state = 'rolling';
    for (const s of STAGES) { setStage(c, s); await wait(STAGE_MS, t); }
    c.vert.dataset.state = 'live';
    setStage(c, 'Live');
    c.teamEls.forEach(x => x.classList.add('live'));        // sub-teams fade with their vertical
    c.wires.forEach(w => w.classList.remove('hot'));        // and the wire settles to ink
    setLive(live + 1);
  }
  async function rollout(t) {
    org.dataset.phase = 'rollout';
    await wait(350, t);
    await Promise.all(cols.map((c, i) => rollOne(c, i, t)));
    rolled = true;
    await wait(900, t);
    loop(t);
  }

  // ---- Phase 2: spotlight loop -------------------------------------------
  async function spotlight(c, t) {
    const k = c.v.task;
    const team = c.teamEls[k.team];
    // swap the feed: old out, content replaced, new in
    legend.classList.remove('show');
    taskEl.classList.remove('show');
    clearSpot();
    org.dataset.phase = 'spot';
    c.col.classList.add('is-spot');
    stemLit.classList.add('hot');
    c.wires.forEach(w => w.classList.add('hot'));
    await wait(200, t);
    fillTask(c, false);
    taskEl.classList.add('show');
    team.classList.add('active', 'working');
    const rows = [...stepsEl.children];
    await wait(260, t);
    rows[0].classList.add('in');  await wait(700, t);  rows[0].classList.add('done');
    await wait(160, t);
    rows[1].classList.add('in');  await wait(700, t);  rows[1].classList.add('done');
    await wait(160, t);
    rows[2].classList.add('in');  team.classList.remove('working');
    await wait(1100, t);                                   // the agent waits for a person
    rows[2].querySelector('.txt').textContent = k.approved;
    rows[2].classList.add('done');
    await wait(2400, t);                                   // hold so it can be read
  }
  async function loop(t) {
    while (t === run) {
      await spotlight(cols[spotIndex], t);
      spotIndex = (spotIndex + 1) % cols.length;
    }
  }

  // ---- Reduced motion: finished chart, one static example ---------------
  function showFinal() {
    run++;
    cols.forEach(makeLive);
    setLive(cols.length);
    rolled = true;
    const c = cols[0];
    org.dataset.phase = 'spot';
    c.col.classList.add('is-spot');
    stemLit.classList.add('hot');
    c.wires.forEach(w => w.classList.add('hot'));
    c.teamEls[c.v.task.team].classList.add('active');
    legend.classList.remove('show');
    fillTask(c, true);
    taskEl.classList.add('show');
  }

  // ---- Start / pause ------------------------------------------------------
  let visible = false;
  function start() {
    if (reduce.matches) { showFinal(); return; }
    const t = ++run;
    if (!rolled) { reset(); const t2 = run; rollout(t2); }   // an interrupted rollout restarts cleanly
    else loop(t);
  }
  function stop() { run++; }

  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible && !document.hidden) start(); else stop();
  }, { threshold: 0.35 }).observe(org);
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else if (visible) start(); });
  reduce.addEventListener('change', () => { reset(); if (visible) start(); });

})();
