'use strict';
(() => {
  const p = window.PROJECT;
  const $ = id => document.getElementById(id);
  const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; return n; };
  const set = (id, text) => { $(id).textContent = text; };
  function safeURL(value) {
    if (!value || typeof value !== 'string') return '';
    try { const u = new URL(value, location.href); return ['http:', 'https:', 'file:'].includes(u.protocol) ? value : ''; } catch { return ''; }
  }
  function placeholder(title, note) {
    const n = el('div', 'placeholder');
    n.append(el('p', 'placeholder-title', title), el('p', 'placeholder-note', note));
    return n;
  }
  function media(item, hero = false) {
    if (!safeURL(item.src)) {
      if (hero) return placeholder('Project video', 'Add your project’s main video here.');
      const empty = el('div', 'placeholder');
      empty.append(el('p', 'placeholder-note', 'Video coming soon.'));
      return empty;
    }
    const v = el('video'); v.src = safeURL(item.src); v.controls = true; v.playsInline = true; v.preload = 'metadata';
    if (!hero) {
      v.muted = true; v.defaultMuted = true; v.autoplay = true; v.loop = true;
      v.defaultPlaybackRate = 1; v.playbackRate = 1;
    }
    if (safeURL(item.poster)) v.poster = safeURL(item.poster);
    v.setAttribute('aria-label', item.title || 'Project teaser video');
    v.addEventListener('error', () => v.replaceWith(el('p','media-error','This video could not be loaded. Please check the file path and format.')), { once: true });
    return v;
  }
  document.title = `${p.name} — ${p.title}`;
  document.querySelector('meta[name="description"]').content = p.subtitle;
  set('project-name', p.name); set('paper-title', p.title); set('subtitle', p.subtitle); set('venue', p.venue);
  $('draft-tag').hidden = !p.draft;
  for (const a of p.authors) {
    const n = safeURL(a.url) ? el('a', '', a.name) : el('span', '', a.name);
    if (n.tagName === 'A') { n.href = safeURL(a.url); n.target = '_blank'; n.rel = 'noopener noreferrer'; }
    n.append(el('sup', '', `${a.affiliation}${a.equal ? '*' : ''}`)); $('authors').append(n);
  }
  p.affiliations.forEach((name, i) => { const n = el('span'); n.append(el('sup', '', String(i + 1)), document.createTextNode(` ${name}`)); $('affiliations').append(n); });
  $('equal-note').hidden = !p.authors.some(a => a.equal);
  [['paper','Paper'], ['arxiv','arXiv'], ['code','Code'], ['video','Video']].forEach(([key, name]) => {
    const url = safeURL(p.links[key]); const a = el(url ? 'a' : 'span', `resource${url ? ' available' : ''}`);
    a.append(document.createTextNode(name));
    if (url) { a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    else { a.setAttribute('aria-disabled', 'true'); a.append(el('small', '', 'Soon')); }
    $('resource-links').append(a);
  });
  $('teaser').append(media(p.teaser, true)); set('teaser-caption',p.teaser.caption); set('tldr',p.tldr); set('abstract',p.abstract);
  p.demoGroups.forEach((group, index) => {
    const section = el('section', 'demo-domain');
    const heading = el('h3', 'demo-domain-title', `${group.name} domain (x1)`);
    heading.id = `demo-domain-${index}`;
    section.setAttribute('aria-labelledby', heading.id);
    section.append(heading);
    group.items.forEach(item => {
      const frame = el('div', 'demo-media');
      frame.append(media(item));
      section.append(frame);
    });
    $('demo-domains').append(section);
  });
  $('demos').hidden = !p.demoGroups.length;
  document.querySelectorAll('#demos video').forEach(video => {
    // Keep the native controls available if the browser blocks autoplay.
    video.play().catch(() => {});
  });
  let imageTrigger;
  function figure(id, data, isMethod) {
    const container=$(id);
    if (safeURL(data.image)) {
      const b=el('button','figure-button'),img=el('img'); img.src=safeURL(data.image);img.alt=data.alt;img.loading='lazy';b.setAttribute('aria-label',`Enlarge ${data.alt}`);b.append(img);
      b.onclick=()=>{imageTrigger=b;$('dialog-image').src=img.src;$('dialog-image').alt=img.alt;$('image-dialog').showModal();};
      img.onerror=()=>b.replaceWith(el('p','media-error','This figure could not be loaded. Please check its file path.'));container.append(b);
    } else {
      const n=el('div','figure-placeholder');
      n.append(el('p','placeholder-title',isMethod ? 'Method overview' : 'Experimental results'),el('p','placeholder-note','Figure coming soon.'));
      container.append(n);
    }
    container.append(el('figcaption','',data.caption));
  }
  set('method-intro',p.method.intro);figure('method-figure',p.method,true);set('results-text',p.results.text);figure('results-figure',p.results,false);
  p.method.steps.forEach(s=>{const n=el('article','method-step');n.append(el('h3','',s.title),el('p','',s.text));$('method-steps').append(n);});
  $('close-dialog').onclick=()=>$('image-dialog').close();
  $('image-dialog').addEventListener('click',e=>{if(e.target===$('image-dialog'))$('image-dialog').close();});
  $('image-dialog').addEventListener('close',()=>imageTrigger?.focus());
  set('bibtex',p.bibtex.trim() || '% Citation coming soon.\n% Add the final BibTeX entry when your paper is available.');
  $('copy-citation').disabled=!p.bibtex.trim();
  if(p.bibtex.trim()) document.querySelector('.citation-section .body-copy').textContent='If you find this work useful, please cite our paper.';
  $('copy-citation').onclick=async()=>{try {await navigator.clipboard.writeText(p.bibtex);set('copy-citation','Copied ✓');set('copy-status','Citation copied to clipboard.');setTimeout(()=>set('copy-citation','Copy citation'),2000);}catch{const range=document.createRange();range.selectNodeContents($('bibtex'));const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);set('copy-citation','Text selected');set('copy-status','Copy with Control C or Command C.');}};
  set('footer-text',p.footer);
})();
