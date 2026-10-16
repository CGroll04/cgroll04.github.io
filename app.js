const projects = {
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
const keys = Object.keys(projects);
let activeProject = null;
let lastTrigger = null;

function openProject(key, trigger) {
  const project = projects[key];
  if (!project) return;
  activeProject = key;
  if (trigger) lastTrigger = trigger;
  document.querySelector('#detail-catalogue').textContent = project.catalogue;
  const sleeve = document.querySelector(`[data-project="${key}"] .sleeve`).cloneNode(true);
  sleeve.querySelectorAll('[id]').forEach(node => {
    const oldId = node.id;
    node.id = `${oldId}-detail`;
    sleeve.querySelectorAll(`[clip-path="url(#${oldId})"]`).forEach(el => el.setAttribute('clip-path', `url(#${oldId}-detail)`));
  });
  detail.innerHTML = `<div class="detail-hero"><div><div class="detail-brand"><img src="${project.logo}" alt="${project.logoAlt}" class="detail-logo ${key}-mark" width="64" height="64"><span class="eyebrow">${key === 'ibm' ? 'EMPLOYMENT / IBM CONSULTING' : key === 'spotify' ? 'INDEPENDENT TOOL / SPOTIFY WEB API' : 'INDEPENDENT PRODUCT / SWEETSPOTS'}</span></div><h2 id="detail-title">${project.title}</h2><p class="detail-lead">${project.lead}</p><p class="detail-credit">${project.credit}</p><div class="detail-links">${project.links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label}</a>`).join('')}</div></div><div class="detail-art" aria-hidden="true"></div></div><div class="detail-content">${project.metrics || ''}${project.visual}${project.sections.map(([title, html]) => `<section class="detail-block"><h3>${title}</h3><div>${html}</div></section>`).join('')}<div class="detail-footer"><button type="button" class="back-collection">← Back to the collection</button><button type="button" class="next-project">Next story →</button></div></div>`;
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

document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.project, button)));
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  if (location.hash.startsWith('#project-')) history.replaceState(null, '', '#work');
  lastTrigger?.focus({preventScroll: true});
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
