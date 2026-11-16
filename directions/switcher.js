/* Preview switcher: flip between the three v2 hero directions (buttons or ← → keys). */
(function () {
  const PAGES = [
    { file: 'a-line.html', key: 'A', name: 'Line' },
    { file: 'b-correspondence.html', key: 'B', name: 'Correspondence' },
    { file: 'c-certificate.html', key: 'C', name: 'Certificate' },
  ];
  const here = location.pathname.split('/').pop() || 'index.html';
  const at = Math.max(0, PAGES.findIndex(p => p.file === here));
  const go = d => { location.href = PAGES[(at + d + PAGES.length) % PAGES.length].file; };

  const css = `
  .xs{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:999;display:flex;align-items:center;gap:4px;
    padding:5px;border-radius:999px;background:rgba(16,23,25,.92);color:#F2F4F3;font:500 13px/1 system-ui,-apple-system,"Segoe UI",sans-serif;
    box-shadow:0 10px 30px -10px rgba(0,0,0,.45);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);max-width:calc(100vw - 24px)}
  .xs a,.xs button{all:unset;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:6px;height:36px;min-width:36px;padding:0 12px;border-radius:999px;color:#C8D0D2;transition:background .15s,color .15s}
  .xs a:hover,.xs button:hover{background:rgba(255,255,255,.08);color:#fff}
  .xs a[aria-current="page"]{background:#F2F4F3;color:#101719}
  .xs a:focus-visible,.xs button:focus-visible{outline:2px solid #F26A1B;outline-offset:2px}
  .xs b{font-weight:600}
  .xs .xs-tag{padding:0 10px 0 12px;color:#8E9A9E;white-space:nowrap}
  .xs svg{width:16px;height:16px}
  @media (max-width:560px){.xs .xs-name,.xs .xs-tag{display:none}.xs a{padding:0 14px}}
  body{padding-bottom:72px}`;
  const style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);

  const nav = document.createElement('nav');
  nav.className = 'xs'; nav.setAttribute('aria-label', 'Preview directions');
  const arrow = d => `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  nav.innerHTML = `<span class="xs-tag">Concept previews</span>
    <button type="button" aria-label="Previous direction">${arrow('M12.5 15l-5-5 5-5')}</button>
    ${PAGES.map((p, i) => `<a href="${p.file}"${i === at ? ' aria-current="page"' : ''}><b>${p.key}</b><span class="xs-name">${p.name}</span></a>`).join('')}
    <button type="button" aria-label="Next direction">${arrow('M7.5 5l5 5-5 5')}</button>`;
  const [prev, next] = nav.querySelectorAll('button');
  prev.addEventListener('click', () => go(-1));
  next.addEventListener('click', () => go(1));
  document.body.appendChild(nav);

  document.addEventListener('keydown', e => {
    if (e.altKey || e.metaKey || e.ctrlKey) return;
    if (e.target.closest('input, textarea, select, [contenteditable]')) return;
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  });
})();
