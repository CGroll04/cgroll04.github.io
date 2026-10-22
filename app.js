const projects = {
  helm: {
    catalogue: 'CG–004 / PERSONAL WORKSPACE', title: 'Helm', category: 'INDEPENDENT PROJECT / NATIVE MACOS',
    lead: 'One app I can keep making my own.',
    credit: 'PRODUCT DESIGN & DEVELOPMENT · OCT 2026 · AI-ASSISTED DEVELOPMENT',
    logo: 'assets/helm-icon.png', logoAlt: 'Helm navigation icon',
    visual: `<section class="project-visual helm-visual" aria-label="Helm native app with fictional showcase data"><div class="visual-heading"><span class="eyebrow">THE ACTUAL APP · FICTIONAL SHOWCASE DATA</span></div><a href="assets/helm-board.png" target="_blank" rel="noopener"><img class="helm-screen" src="assets/helm-board.png" alt="Helm planning board with Today, Tomorrow, This week and Backlog columns" width="1320" height="880" loading="lazy"></a><div class="helm-detail-gallery"><figure><a href="assets/helm-study.png" target="_blank" rel="noopener"><img src="assets/helm-study.png" alt="Helm course preparation checklist with source-backed sample study topics" loading="lazy"></a><figcaption>Preparation with visible progress.</figcaption></figure><figure><a href="assets/helm-projects.png" target="_blank" rel="noopener"><img src="assets/helm-projects.png" alt="Helm update folders with task conversations and release progress" loading="lazy"></a><figcaption>One folder per update. One conversation per task.</figcaption></figure></div></section>`,
    links: [['View source on GitHub ↗', 'https://github.com/CGroll04/helm']],
    sections: [
      ['Why I built it', '<p>I was tired of using a different app for every part of my life. Tasks in one place, school in another, project updates somewhere else—and each tool decided how I was supposed to work.</p><p>I wanted one home base I could keep adding to, editing, and making my own. That is the idea behind Helm.</p>'],
      ['Made to keep evolving', '<p>When I wanted a NeetCode tracker, I added a coding-practice workspace: saved attempts, review planning, an in-app Python editor and a restricted test runner. The next thing I need can become another part of the same app.</p><p>Customization happens through changes to the app’s source. I can change the workflow, connect another source, or build a new capability around what I actually need.</p>'],
      ['What is in it today', '<p>The current version brings together a drag-and-drop planning board, checklists, semester goals, course preparation, project-update folders, career leads, daily briefs and coding practice. The personal workspace connects to Reminders and Calendar and reads selected conversation updates.</p><p>Those are the features I have needed so far. They can grow and change as my routines do.</p>'],
      ['Keeping it useful', '<ul><li><strong>One workspace, shared context:</strong> useful information sits beside the work it supports.</li><li><strong>Clear boundaries:</strong> moving a task to Tomorrow preserves its due date, and a study checkoff does not submit an assignment.</li><li><strong>Source-backed preparation:</strong> quiz coverage selects relevant notes before study topics are suggested, while preserving previous checkoffs.</li><li><strong>A separate showcase:</strong> the public demo uses fictional data. Live accounts and AI are disconnected; prepared examples are labelled.</li></ul>'],
      ['A work in progress', '<p>Helm is meant to keep evolving with me. It is a personal Mac app I use, change, and extend whenever I have a better idea or a new need.</p><p>Designed and developed with SwiftUI, AppKit, EventKit and Python, using AI-assisted implementation and validation. The current build runs on Mac; phone sync and cloud execution remain future possibilities.</p>']
    ]
  },
  sweetspots: {
    catalogue: 'CG–001 / INDEPENDENT PRODUCT', title: 'SweetSpots',
    lead: 'A place to save the places you want to go.',
    credit: 'CO-FOUNDER & SOLE iOS DEVELOPER · JUL 2025 — PRESENT',
    logo: 'assets/sweetspots-logo.png', logoAlt: 'SweetSpots logo',
    metrics: `<div class="detail-metrics" aria-label="Verified SweetSpots figures"><div><strong>508</strong><span>First-time App Store downloads</span></div><div><strong>318</strong><span>Registered Firebase accounts</span></div></div><p class="metrics-date">Downloads through Oct 13, 2026 · Accounts checked Oct 14, 2026</p>`,
    visual: `<section class="project-visual app-visual" aria-label="SweetSpots App Store screenshots"><div class="visual-heading"><span class="eyebrow">THE APP, IN USE</span><a href="https://apps.apple.com/ca/app/sweetspots/id6747997071" target="_blank" rel="noopener">App Store screenshots ↗</a></div><div class="app-gallery"><figure><a href="assets/sweetspots-screen-1.jpg" target="_blank" rel="noopener" aria-label="Open the Save and Add screenshot"><img src="assets/sweetspots-screen-1.jpg" alt="SweetSpots App Store screenshot showing the share-sheet save flow" width="221" height="480"></a><figcaption><strong>Save &amp; Add</strong><span>Save places you discover online.</span></figcaption></figure><figure><a href="assets/sweetspots-notifications.jpg" target="_blank" rel="noopener" aria-label="Open the Notifications screenshot"><img src="assets/sweetspots-notifications.jpg" alt="SweetSpots App Store screenshot showing nearby-place notifications" width="221" height="480"></a><figcaption><strong>Notifications</strong><span>Get a reminder when you’re nearby.</span></figcaption></figure><figure><a href="assets/sweetspots-share-with-friends.jpg" target="_blank" rel="noopener" aria-label="Open the Share with Friends screenshot"><img src="assets/sweetspots-share-with-friends.jpg" alt="SweetSpots App Store screenshot showing shared places and collections" width="221" height="480"></a><figcaption><strong>Share with Friends</strong><span>Send places and collections to friends.</span></figcaption></figure></div></section>`,
    links: [['View on the App Store ↗', 'https://apps.apple.com/ca/app/sweetspots/id6747997071'], ['Visit the product site ↗', 'https://thesweetspotsapp.com']],
    sections: [
      ['What I built', '<p>I built the entire iOS app and codebase: the interface, authentication, cloud data, sharing integrations and App Store release. My co-founder contributed to ideation and handled promotion and marketing.</p>'],
      ['A few decisions', '<ul><li><strong>Native iOS:</strong> Swift and SwiftUI, with UIKit for sharing integrations and Firebase for authentication and real-time data.</li><li><strong>Reliable importing:</strong> A share extension, deep links and shared collections with duplicate and conflict handling.</li><li><strong>Nearby reminders:</strong> Distance-prioritized monitoring within iOS’s 20-region limit, with permission handling, cooldowns and targeted unit tests.</li></ul>'],
      ['Shipped & maintained', '<p>Released in October 2025 and actively maintained. The app and product site are public; the iOS source remains private.</p>']
    ]
  },
  ibm: {
    catalogue: 'CG–002 / PROFESSIONAL EXPERIENCE', title: 'IBM Consulting',
    lead: 'Building useful AI systems within real business constraints.',
    credit: 'DEVELOPER INTERN · SEP 2025 — AUG 2026<br>STUDENT ON CALL · SEP 2026 — PRESENT',
    logo: 'assets/ibm-logo.webp', logoAlt: 'IBM logo',
    visual: `<section class="project-visual" aria-label="Summary of Charlie’s IBM contributions"><div class="outcome-grid"><div><span class="eyebrow">CLIENT CHATBOT</span><h3>Intent routing</h3><p>Validation, classification and ambiguity handling.</p><span class="outcome-status">Built & integrated component</span></div><div><span class="eyebrow">INTERNAL IBM WORKFLOW</span><h3>Change reporting</h3><p>AI-assisted reports with a consultant in the loop.</p><span class="outcome-status">Deployed · used by consultants</span></div></div></section>`,
    links: [],
    sections: [
      ['My contribution', '<p>Built and integrated the multi-agent intent router in watsonx Orchestrate, producing structured inputs for knowledge-base retrieval. I owned the routing component, not the whole chatbot.</p><p>Separately built an internal workflow that compares copied sales-dashboard data with previous input and generates formatted change reports.</p>'],
      ['Prototype work', '<p>Built a VS Code chatbot-extension prototype with code and file context, chat reset and response copying. Tested FastAPI and WebSocket approaches and improved file-upload handling in another client tool.</p>'],
      ['Continuing', '<p>Stayed with the same team as Student On Call after the 12-month internship, working part-time during my final year. Client and internal implementation details remain private.</p>']
    ]
  },
  spotify: {
    catalogue: 'CG–003 / PERSONAL TOOL', title: 'Spotify Release Tracker',
    lead: 'New music from artists you follow, delivered to Telegram.',
    credit: 'INDEPENDENT DEVELOPER · JUN 2026 · PUBLIC REPOSITORY',
    logo: 'assets/spotify-logo.png', logoAlt: 'Spotify logo',
    visual: `<section class="project-visual tracker-visual" aria-label="How the Spotify Release Tracker works"><div class="visual-heading"><span class="eyebrow">FROM PLAYLIST TO NOTIFICATION</span></div><ol class="tracker-flow"><li><span class="flow-number">01</span><strong>Your playlist</strong><span>Artists to follow</span></li><li><span class="flow-number">02</span><strong>Release checks</strong><span>Albums, singles & features</span></li><li><span class="flow-number">03</span><strong>Telegram alert</strong><span>A link to the new music</span></li></ol><p class="flow-note">Persistent local state prevents duplicate alerts.</p></section>`,
    links: [['Read the code on GitHub ↗', 'https://github.com/CGroll04/spotify-release-tracker']],
    sections: [
      ['Why I built it', '<p>I wanted a more customized way to keep up with releases, including guest features. A Spotify playlist serves as my artist watchlist; new releases arrive on my phone through Telegram.</p>'],
      ['My contribution', '<p>Built the Python tool with Spotify OAuth, API pagination, rate-limit handling, release deduplication and persistent local JSON state.</p>'],
      ['Try it', '<p>The public repository includes setup instructions and environment-variable configuration. This is an independent personal tool using the Spotify Web API.</p>']
    ]
  }
};

const dialog = document.querySelector('.project-dialog');
const detail = document.querySelector('#project-detail');
const keys = [...document.querySelectorAll(".project-grid .project-art")].map(cover => cover.dataset.project);
const recordCrate = setupRecordCrate();
let activeProject = null;
let lastTrigger = null;

function openProject(key, trigger) {
  const project = projects[key];
  if (!project) return;
  activeProject = key;
  recordCrate?.selectKey(key);
  if (trigger) lastTrigger = trigger;
  document.querySelector('#detail-catalogue').textContent = project.catalogue;
  const sleeve = document.querySelector(`[data-project="${key}"] .sleeve`).cloneNode(true);
  sleeve.querySelectorAll('[id]').forEach(node => {
    const oldId = node.id;
    node.id = `${oldId}-detail`;
    sleeve.querySelectorAll(`[clip-path="url(#${oldId})"]`).forEach(el => el.setAttribute('clip-path', `url(#${oldId}-detail)`));
  });
  const sectionMarkup = project.sections.map(([title, html]) => `<section class="detail-block"><h3>${title}</h3><div>${html}</div></section>`);
  const storyMarkup = key === 'helm'
    ? sectionMarkup.slice(0, 2).join('') + project.visual + sectionMarkup.slice(2).join('')
    : `${project.metrics || ''}${project.visual}${sectionMarkup.join('')}`;
  detail.innerHTML = `<div class="detail-hero"><div><div class="detail-brand"><img src="${project.logo}" alt="${project.logoAlt}" class="detail-logo ${key}-mark" width="64" height="64"><span class="eyebrow">${project.category || (key === 'ibm' ? 'EMPLOYMENT / IBM CONSULTING' : key === 'spotify' ? 'INDEPENDENT TOOL / SPOTIFY WEB API' : 'INDEPENDENT PRODUCT / SWEETSPOTS')}</span></div><h2 id="detail-title">${project.title}</h2><p class="detail-lead">${project.lead}</p><p class="detail-credit">${project.credit}</p><div class="detail-links">${project.links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label}</a>`).join('')}</div></div><div class="detail-art" aria-hidden="true"></div></div><div class="detail-content">${storyMarkup}<div class="detail-footer"><button type="button" class="back-collection">← Back to the collection</button><button type="button" class="next-project">Next story →</button></div></div>`;
  detail.querySelector('.detail-art').append(sleeve);
  detail.querySelector('.back-collection').addEventListener('click', () => dialog.close());
  detail.querySelector('.next-project').addEventListener('click', () => {
    openProject(keys[(keys.indexOf(activeProject) + 1) % keys.length]);
    detail.querySelector('#detail-title').setAttribute('tabindex', '-1');
    detail.querySelector('#detail-title').focus();
  });
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
  history.replaceState(null, '', `#project-${key}`);
}

document.querySelectorAll('[data-project]').forEach(button => {
  if (!button.matches('.crate-stack .project-art')) button.addEventListener('click', () => openProject(button.dataset.project, button));
});
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  if (location.hash.startsWith('#project-')) history.replaceState(null, '', '#work');
  const returnTarget = lastTrigger?.closest('[hidden]') ? document.querySelector('.crate-stack [data-current="true"]') : lastTrigger;
  returnTarget?.focus({preventScroll: true});
  activeProject = null;
});
function openFromHash() {
  if (location.hash.startsWith('#project-')) openProject(location.hash.slice(9));
}
window.addEventListener('hashchange', openFromHash);
document.querySelector('#year').textContent = new Date().getFullYear();
openFromHash();

// Native anchors still work without JavaScript; enhancement adds a compact menu and location cue.
const sectionNav = document.querySelector('.section-nav');
const sectionToggle = document.querySelector('.section-menu-toggle');
const sectionLinks = [...sectionNav.querySelectorAll('.section-links a')];
const pageSections = sectionLinks.map(link => document.querySelector(link.getAttribute('href')));
const compactNavigation = window.matchMedia('(max-width: 1199px)');
document.documentElement.classList.add('navigation-ready');

function closeSectionMenu(restoreFocus = false) {
  sectionNav.classList.remove('menu-open');
  sectionToggle.setAttribute('aria-expanded', 'false');
  if (restoreFocus) sectionToggle.focus({preventScroll: true});
}

sectionToggle.addEventListener('click', () => {
  const expanded = sectionNav.classList.toggle('menu-open');
  sectionToggle.setAttribute('aria-expanded', String(expanded));
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && sectionNav.classList.contains('menu-open')) closeSectionMenu(true);
});
document.addEventListener('pointerdown', event => {
  if (!sectionNav.contains(event.target)) closeSectionMenu();
});
compactNavigation.addEventListener('change', () => closeSectionMenu());

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    const target = document.getElementById(link.getAttribute('href').slice(1));
    if (!target) return;
    closeSectionMenu();
    // Move keyboard focus to the destination without overriding the browser's anchor scrolling.
    if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
    target.focus({preventScroll: true});
  });
});

let navigationFrame = null;
function updateSectionLocation() {
  navigationFrame = null;
  const readingLine = Math.min(innerHeight * .3, 230);
  let current = 0;
  pageSections.forEach((section, index) => {
    if (section.getBoundingClientRect().top <= readingLine) current = index;
  });
  if (scrollY + innerHeight >= document.documentElement.scrollHeight - 3) current = pageSections.length - 1;
  sectionLinks.forEach((link, index) => {
    if (index === current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  sectionNav.querySelector('.menu-current').textContent = sectionLinks[current].children[1].textContent;
}
function queueSectionLocation() {
  if (navigationFrame === null) navigationFrame = requestAnimationFrame(updateSectionLocation);
}
window.addEventListener('scroll', queueSectionLocation, {passive: true});
window.addEventListener('resize', queueSectionLocation);
window.addEventListener('load', queueSectionLocation);
new ResizeObserver(queueSectionLocation).observe(document.querySelector('main'));
updateSectionLocation();


// Progressive enhancement: without JavaScript, all four project cards remain readable.
function setupRecordCrate() {
  const collection = document.querySelector('.project-grid');
  if (!collection) return null;
  const articles = [...collection.querySelectorAll(':scope > .project')];
  const records = articles.map(article => ({article, cover: article.querySelector('.project-art'), title: article.querySelector('.project-title').textContent.trim()}));
  if (records.some(record => !record.cover)) return null;
  let selected = 0;
  let pointerStart = null;
  let lastSwipe = -Infinity;
  const stage = document.createElement('div');
  stage.className = 'crate-stage';
  stage.setAttribute('role', 'group');
  stage.setAttribute('aria-label', 'Record crate. Flip through four projects, then open a sleeve.');
  stage.innerHTML = `<p class="crate-instruction"><span>THE RECORD CRATE</span><span>Flip through. Find a story.</span></p>
    <div class="crate-scene">
      <svg class="crate-shell crate-shell-back" viewBox="0 0 600 600" aria-hidden="true" focusable="false">
        <defs><linearGradient id="crate-inner" x2="0" y2="1"><stop stop-color="#79583c"/><stop offset="1" stop-color="#352b24"/></linearGradient></defs>
        <ellipse cx="307" cy="557" rx="251" ry="27" fill="#071e28" opacity=".45"/>
        <path d="M151 275 568 289 568 465 151 450Z" fill="url(#crate-inner)" stroke="#bc9367" stroke-width="5"/>
        <path d="m59 407 92-132 417 14-99 133Z" fill="#332b24" stroke="#805e40" stroke-width="4"/>
        <path d="m59 407 92-132 0 175-92 105Z" fill="#6a4c34" stroke="#bf956b" stroke-width="4"/>
        <path d="m151 275 417 14" fill="none" stroke="#d2ad7b" stroke-width="10"/>
      </svg>
      <div class="crate-stack"></div>
      <svg class="crate-shell crate-shell-front" viewBox="0 0 600 600" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="crate-wood" x2="0" y2="1"><stop stop-color="#c19a6a"/><stop offset="1" stop-color="#a3784e"/></linearGradient>
          <linearGradient id="crate-side" x2="1" y2="0"><stop stop-color="#92704c"/><stop offset="1" stop-color="#6e5037"/></linearGradient>
          <pattern id="crate-grain" width="140" height="18" patternUnits="userSpaceOnUse"><path d="M0 4Q35 1 70 5T140 4M0 12Q40 15 90 11T140 13" fill="none" stroke="#694c32" stroke-width=".7" opacity=".2"/></pattern>
        </defs>
        <path d="m469 422 99-133 0 176-99 102Z" fill="url(#crate-side)" stroke="#d2ac7b" stroke-width="3"/>
        <path d="m469 422 99-133 0 176-99 102Z" fill="url(#crate-grain)"/>
        <path d="m479 461 79-101m-79 146 79-98m-79 143 79-93" fill="none" stroke="#3d3024" stroke-width="7"/>
        <path d="m478 457 80-102m-80 145 80-98m-80 143 80-93" fill="none" stroke="#c69d6e" stroke-width="2"/>
        <path d="m59 407 410 15 0 145-410-12Z" fill="url(#crate-wood)" stroke="#d9b889" stroke-width="3"/>
        <path d="m59 407 410 15 0 145-410-12Z" fill="url(#crate-grain)"/>
        <path d="m60 453 408 14m-408 31 408 13" fill="none" stroke="#4a3929" stroke-width="7"/>
        <path d="m60 449 408 14m-408 31 408 13" fill="none" stroke="#e0bb86" stroke-width="2" opacity=".75"/>
        <path d="m59 407 410 15 99-133" fill="none" stroke="#e1bd8c" stroke-width="9" stroke-linejoin="round"/>
        <path d="m59 407 0 148m410-133 0 145" fill="none" stroke="#80603f" stroke-width="13"/>
        <path d="m65 413 0 136m398-122 0 133" fill="none" stroke="#d5ab78" stroke-width="4"/>
        <path d="M229 429 298 431Q305 432 305 439 305 447 297 447L229 445Q221 445 221 437 221 430 229 429Z" fill="#233e46" stroke="#745537" stroke-width="2"/>
        <g fill="#4a3828"><circle cx="76" cy="431" r="2.3"/><circle cx="452" cy="445" r="2.3"/><circle cx="76" cy="477" r="2.3"/><circle cx="452" cy="491" r="2.3"/><circle cx="76" cy="529" r="2.3"/><circle cx="452" cy="541" r="2.3"/></g>
        <text x="91" y="538" transform="rotate(2 91 538)" fill="#473626" font-family="monospace" font-size="12" letter-spacing="2">CG / SELECTED WORK</text>
        <text x="368" y="548" fill="#473626" font-family="monospace" font-size="10">VOL. 01</text>
      </svg>
    </div>`;
  const stack = stage.querySelector('.crate-stack');
  const information = document.createElement('div');
  information.className = 'crate-information';
  const controls = document.createElement('div');
  controls.className = 'crate-controls';
  controls.innerHTML = '<button type="button" class="crate-previous" aria-label="Previous record"><span aria-hidden="true">←</span> Back</button><p class="crate-status" role="status" aria-live="polite" aria-atomic="true"></p><button type="button" class="crate-next" aria-label="Next record">Flip next <span aria-hidden="true">→</span></button>';
  const picker = document.createElement('div');
  picker.className = 'crate-picker'; picker.setAttribute('role','tablist'); picker.setAttribute('aria-label','Choose a project record');
  const tabs = records.map((record,index) => {
    const tab = document.createElement('button');
    tab.type = 'button'; tab.id = `crate-tab-${record.cover.dataset.project}`;
    tab.setAttribute('role','tab'); tab.setAttribute('aria-controls',`crate-project-${record.cover.dataset.project}`);
    tab.innerHTML = `<span class="crate-number">${String(index+1).padStart(2,'0')}</span><span>${record.title}</span>`;
    tab.addEventListener('click',()=>select(index)); picker.append(tab);
    record.article.id = `crate-project-${record.cover.dataset.project}`;
    record.article.setAttribute('role','tabpanel'); record.article.setAttribute('aria-labelledby',tab.id);
    record.cover.querySelectorAll('img').forEach(image => { image.draggable = false; });
    record.cover.addEventListener('click',event => {
      if (performance.now() - lastSwipe < 450) { event.preventDefault(); return; }
      if (selected !== index) select(index);
      else openProject(record.cover.dataset.project, record.cover);
    });
    stack.append(record.cover); information.append(record.article);
    return tab;
  });
  const previous = controls.querySelector('.crate-previous');
  const next = controls.querySelector('.crate-next');
  previous.addEventListener('click',()=>select(selected-1));
  next.addEventListener('click',()=>select(selected+1));
  function select(index, focusTab=false) {
    selected = Math.max(0,Math.min(records.length-1,index));
    records.forEach((record,i)=>{
      const depth = (i-selected+records.length)%records.length;
      record.cover.style.setProperty('--depth',depth);
      record.cover.dataset.current = String(i===selected);
      record.cover.tabIndex = i===selected ? 0 : -1;
      record.cover.setAttribute('aria-label',i===selected ? `Open the ${record.title} project story` : `Bring ${record.title} to the front`);
      record.article.hidden = i!==selected;
      tabs[i].setAttribute('aria-selected',String(i===selected)); tabs[i].tabIndex=i===selected?0:-1;
    });
    previous.disabled=selected===0; next.disabled=selected===records.length-1;
    controls.querySelector('.crate-status').textContent=`${String(selected+1).padStart(2,'0')} / ${String(records.length).padStart(2,'0')} · ${records[selected].title}`;
    if (focusTab) tabs[selected].focus({preventScroll:true});
  }
  collection.addEventListener('keydown', event=>{
    const offset = event.key==='ArrowRight' ? 1 : event.key==='ArrowLeft' ? -1 : 0;
    if (!offset && event.key!=='Home' && event.key!=='End') return;
    event.preventDefault();
    select(event.key==='Home'?0:event.key==='End'?records.length-1:selected+offset, event.target.getAttribute('role')==='tab');
  });
  stage.addEventListener('pointerdown',event=>{ pointerStart={x:event.clientX,y:event.clientY,id:event.pointerId}; });
  stage.addEventListener('pointercancel',()=>{ pointerStart=null; });
  stage.addEventListener('pointerup',event=>{
    if (!pointerStart || pointerStart.id!==event.pointerId) return;
    const dx=event.clientX-pointerStart.x, dy=event.clientY-pointerStart.y; pointerStart=null;
    if (Math.abs(dx)<48 || Math.abs(dx)<Math.abs(dy)*1.3) return;
    lastSwipe=performance.now(); select(selected+(dx<0?1:-1));
  });
  collection.append(stage,information,controls,picker);
  select(0); collection.classList.add('crate-ready');
  return {selectKey(key){const index=records.findIndex(record=>record.cover.dataset.project===key);if(index>=0)select(index);}};
}
