(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- mobile nav ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  toggle?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  /* ---------- hero console: an example deployment run ---------- */
  const steps = [
    ['›', 'assess', 'workflows mapped across 6 functions', '42'],
    ['›', 'assess', 'brand assets audited', '1,180'],
    ['›', 'blueprint', 'business case + costed roadmap', 'ready'],
    ['›', 'enable', 'Canva Enterprise seats provisioned', '380'],
    ['›', 'enable', 'brand kit locked, templates published', '✓'],
    ['×', 'build', 'Claude agent: RFP first drafts', 'live'],
    ['×', 'build', 'human approval gate → legal@', 'on'],
    ['›', 'govern', 'licence + cost dashboard', 'live'],
  ];
  const list = document.getElementById('console');
  const meter = document.getElementById('consoleMeter');
  const status = document.getElementById('consoleStatus');

  function runConsole() {
    list.innerHTML = '';
    meter.style.width = '0';
    status.textContent = 'running…';
    if (reduce) {
      steps.forEach(addStep);
      meter.style.width = '100%';
      status.textContent = 'in production';
      return;
    }
    let i = 0;
    const tick = () => {
      if (i < steps.length) {
        addStep(steps[i]);
        i++;
        meter.style.width = `${(i / steps.length) * 100}%`;
        status.textContent = i === steps.length ? 'in production' : `step ${i}/${steps.length}`;
        setTimeout(tick, 650 + Math.random() * 350);
      } else {
        setTimeout(runConsole, 4200);
      }
    };
    setTimeout(tick, 400);
  }
  function addStep([icon, phase, text, val]) {
    const li = document.createElement('li');
    li.innerHTML = `<span class="ic ${icon === '×' ? 'x' : ''}">${icon}</span>` +
      `<span class="t"><em>${phase}</em> ${text}</span><span class="v">${val}</span>`;
    list.appendChild(li);
  }
  if (list) runConsole();

  /* ---------- readiness check ---------- */
  const quiz = document.getElementById('quiz');
  const dial = document.getElementById('dial');
  const scoreEl = document.getElementById('score');
  const tierEl = document.getElementById('tier');
  const adviceEl = document.getElementById('advice');
  const ctaEl = document.getElementById('resultCta');
  const MAX = 15;

  const tiers = [
    { min: 0,  name: 'Exploring', step: 'Assess', copy: 'Start with a free Assess. We map where AI and creative tooling would pay off first — before you spend anything.' },
    { min: 35, name: 'Experimenting', step: 'Blueprint', copy: 'You have momentum but no plan. A Blueprint turns pilots into a costed roadmap and a business case with a date on it.' },
    { min: 60, name: 'Scaling', step: 'Enable + Govern', copy: 'Time to roll out properly: deploy, train, adopt to target — with brand, cost and policy controls from day one.' },
    { min: 85, name: 'Production‑ready', step: 'Build', copy: 'You’re ready for agents in production. We integrate Claude into core workflows, function by function.' },
  ];

  let animFrame;
  function animateNumber(el, to) {
    cancelAnimationFrame(animFrame);
    const from = Number(el.textContent) || 0;
    if (reduce) { el.textContent = to; return; }
    const t0 = performance.now();
    const step = now => {
      const k = Math.min(1, (now - t0) / 600);
      el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3)));
      if (k < 1) animFrame = requestAnimationFrame(step);
    };
    animFrame = requestAnimationFrame(step);
  }

  quiz?.addEventListener('change', e => {
    e.target.closest('fieldset')?.classList.add('done');
    const answered = [...quiz.querySelectorAll('input:checked')];
    const total = answered.reduce((s, i) => s + Number(i.value), 0);
    const pct = Math.round((total / MAX) * 100);
    dial.style.setProperty('--p', pct);
    animateNumber(scoreEl, pct);
    const all = answered.length === 5;
    const tier = [...tiers].reverse().find(t => pct >= t.min);
    tierEl.textContent = all ? `${tier.name} · start with ${tier.step}` : `${answered.length}/5 answered`;
    adviceEl.textContent = all ? tier.copy : 'Keep going — your recommended starting step appears when all five are answered.';
    if (all) {
      ctaEl.textContent = `Talk to us about ${tier.step} →`;
      ctaEl.href = `mailto:hello@xanadu.co?subject=${encodeURIComponent(`Readiness check: ${pct}/100 (${tier.name})`)}`;
    }
  });

  /* ---------- count-up stats + scroll reveal ---------- */
  const revealTargets = document.querySelectorAll('.section-head, .layer, .stat, .track li, .sectors article, .edge article, .manifesto li, .cta-inner, .quiz, .result');
  revealTargets.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('in');
      const num = el.querySelector?.('[data-count]');
      if (num && !reduce) {
        const to = Number(num.dataset.count), suf = num.dataset.suffix || '';
        const t0 = performance.now();
        const f = now => {
          const k = Math.min(1, (now - t0) / 1200);
          num.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + suf;
          if (k < 1) requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
      }
      io.unobserve(el);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  revealTargets.forEach(el => io.observe(el));
})();
