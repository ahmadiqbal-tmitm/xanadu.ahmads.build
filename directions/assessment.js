/* Shared AI readiness assessment engine for the v2 hero previews.
   Same questions, scoring and outcomes on every direction; each page styles the markup
   and reacts to the hooks in its own visual language. */
(function () {
  const QUESTIONS = [
    { q: 'How is AI used in your organisation today?',
      a: [['Not yet', 0], ['Individuals experimenting', 1], ['Team pilots', 2], ['In production', 3]] },
    { q: 'Is there an executive owner for AI?',
      a: [['No', 0], ['Informally', 2], ['Yes, with a mandate', 3]] },
    { q: 'How governed are your data and content?',
      a: [['Every team does its own thing', 0], ['Guidelines exist', 2], ['Controls are enforced', 3]] },
    { q: 'Can your data be used safely by AI today?',
      a: [['Unsure', 0], ['Some of it', 2], ['Yes, under policy', 3]] },
    { q: 'How do you measure the value of AI?',
      a: [["We don't yet", 0], ['Anecdotally', 1], ['Against business KPIs', 3]] },
  ];
  const MAX = 15;

  const STEPS = [
    { id: 'assess', name: 'Assess', ar: 'التقييم', role: 'Free' },
    { id: 'blueprint', name: 'Blueprint', ar: 'المخطط', role: 'Paid plan' },
    { id: 'enable', name: 'Enable', ar: 'التمكين', role: 'Go-live' },
    { id: 'govern', name: 'Govern', ar: 'الحوكمة', role: 'Control' },
    { id: 'build', name: 'Build', ar: 'البناء', role: 'Production' },
  ];

  const OUTCOMES = [
    { min: 0, step: 0, copy: 'Start with a free Assess. We map where AI would pay off first, before you spend anything.' },
    { min: 35, step: 1, copy: 'You have momentum but no plan. A Blueprint turns pilots into a costed roadmap and a business case with a date on it.' },
    { min: 60, step: 2, copy: 'You are ready to roll out. Enable deploys, trains and adopts to target, and Govern puts brand, cost and policy controls in from day one.' },
    { min: 85, step: 4, copy: 'You are ready for agents in production. Build integrates Claude into core workflows, one function at a time.' },
  ];

  function outcome(answers) {
    const total = answers.reduce((s, v) => s + v, 0);
    const pct = Math.round((total / MAX) * 100);
    const o = [...OUTCOMES].reverse().find(x => pct >= x.min);
    return { pct, step: o.step, stepInfo: STEPS[o.step], copy: o.copy };
  }

  function mailto(answers, res) {
    const lines = QUESTIONS.map((q, i) => `${q.q} ${q.a.find(a => a[1] === answers[i])?.[0] ?? ''}`);
    const subject = `AI readiness: ${res.stepInfo.name} (${res.pct}/100)`;
    const body = `Hello Xanadu,\n\nI took the AI readiness assessment.\n\n${lines.join('\n')}\n\nRecommended first step: ${res.stepInfo.name}.\n`;
    return `mailto:hello@xanadu.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  /* mount(root, hooks)
     root contains: [data-q-progress], [data-q-title], [data-q-options], [data-q-back],
                    [data-q-stage] (question view), [data-q-result] (result view, hidden),
                    [data-q-step], [data-q-copy], [data-q-cta], [data-q-restart], optional [data-q-score]
     hooks: onAnswer(i, answers), onComplete(result, answers), onReset() */
  function mount(root, hooks = {}) {
    const $ = s => root.querySelector(s);
    const progress = $('[data-q-progress]'), title = $('[data-q-title]'), options = $('[data-q-options]');
    const back = $('[data-q-back]'), stage = $('[data-q-stage]'), result = $('[data-q-result]');
    let i = 0; const answers = [];

    function render() {
      const item = QUESTIONS[i];
      progress.textContent = `Question ${i + 1} of ${QUESTIONS.length}`;
      title.textContent = item.q;
      options.innerHTML = '';
      item.a.forEach(([label, value]) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'q-option';
        b.innerHTML = `<span>${label}</span><svg class="q-arrow" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
        if (answers[i] === value) b.setAttribute('aria-pressed', 'true');
        b.addEventListener('click', () => choose(value));
        options.appendChild(b);
      });
      back.hidden = i === 0;
      root.dataset.qIndex = String(i);
      hooks.onRender?.(i, answers.slice());
    }

    function choose(value) {
      answers[i] = value;
      hooks.onAnswer?.(i, answers.slice());
      if (i < QUESTIONS.length - 1) { i++; render(); options.querySelector('button')?.focus({ preventScroll: true }); }
      else complete();
    }

    function complete() {
      const res = outcome(answers);
      stage.hidden = true; result.hidden = false;
      $('[data-q-step]').textContent = res.stepInfo.name;
      $('[data-q-copy]').textContent = res.copy;
      const score = $('[data-q-score]'); if (score) score.textContent = String(res.pct);
      const cta = $('[data-q-cta]');
      cta.href = mailto(answers, res);
      cta.textContent = `Book a conversation about ${res.stepInfo.name}`;
      root.dataset.qDone = 'true';
      hooks.onComplete?.(res, answers.slice());
      result.focus({ preventScroll: true });
    }

    back.addEventListener('click', () => { if (i > 0) { i--; render(); } });
    $('[data-q-restart]').addEventListener('click', () => {
      answers.length = 0; i = 0; stage.hidden = false; result.hidden = true; delete root.dataset.qDone;
      hooks.onReset?.(); render(); options.querySelector('button')?.focus({ preventScroll: true });
    });
    render();
  }

  window.XanaduAssessment = { QUESTIONS, STEPS, mount };
})();
