/* Xanadu v2: nav, example console, readiness check. Content is visible without this script. */
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

  /* ---------- client logo carousel: pause control ---------- */
  const clients = document.querySelector('.clients');
  const mt = clients ? clients.querySelector('.marquee-toggle') : null;
  if (mt) mt.addEventListener('click', () => {
    const paused = clients.classList.toggle('paused');
    mt.setAttribute('aria-pressed', String(paused));
    mt.setAttribute('aria-label', paused ? 'Play client logos' : 'Pause client logos');
  });

  /* ---------- example console (illustrative, never a client result) ---------- */
  const list = document.getElementById('console');
  if (list) {
    const steps = [
      ['›', 'assess', 'workflows mapped across functions', '42'],
      ['›', 'blueprint', 'business case and costed roadmap', 'ready'],
      ['›', 'enable', 'Claude provisioned, SSO and policies set', 'done'],
      ['›', 'enable', 'champions trained in every function', '24'],
      ['×', 'govern', 'usage baseline and cost guardrails', 'on'],
      ['×', 'build', 'agent: RFP first drafts', 'in review'],
      ['×', 'build', 'human approval gate before send', 'on'],
    ];
    const meter = document.getElementById('console-meter'), status = document.getElementById('console-status');
    const add = ([icon, phase, text, val]) => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="ic${icon === '×' ? ' x' : ''}">${icon}</span><span><em>${phase}</em> ${text}</span><span class="v">${val}</span>`;
      list.appendChild(li);
    };
    const run = () => {
      list.innerHTML = ''; meter.style.width = '0';
      if (reduce) { steps.forEach(add); meter.style.width = '100%'; status.textContent = 'example complete'; return; }
      let i = 0;
      const tick = () => {
        if (i < steps.length) {
          add(steps[i++]);
          meter.style.width = `${(i / steps.length) * 100}%`;
          status.textContent = i === steps.length ? 'example complete' : `step ${i} of ${steps.length}`;
          setTimeout(tick, 900);
        } else setTimeout(run, 5000);
      };
      setTimeout(tick, 500);
    };
    run();
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
