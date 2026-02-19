// ============================================================
// AFSTI Dashboard — App Router & Core Logic
// ============================================================

let currentPage = 'home';
let currentVC = null;

// Page registry — each page module registers itself here
const PAGES = {};

function registerPage(id, renderFn) {
    PAGES[id] = renderFn;
}

// Navigation
function go(pageId, linkEl, e) {
    if (e) e.preventDefault();
    currentPage = pageId;
    // Update sidebar active state
    document.querySelectorAll('.sidebar nav a').forEach(a => a.classList.remove('active'));
    if (linkEl) linkEl.classList.add('active');
    else {
        document.querySelectorAll('.sidebar nav a').forEach(a => {
            if (a.getAttribute('href') === '#' + pageId) a.classList.add('active');
        });
    }
    renderPage(pageId);
    window.location.hash = pageId;
}

function renderPage(pageId) {
    const content = document.getElementById('content');
    if (PAGES[pageId]) {
        content.innerHTML = PAGES[pageId]();
    } else {
        content.innerHTML = `<div class="page active"><h2>Page not found</h2></div>`;
    }
    updateBreadcrumb(pageId);
    content.scrollTop = 0;
}

function updateBreadcrumb(pageId) {
    const bc = document.getElementById('breadcrumb');
    const names = {
        home: 'Command Center', corridors: 'Corridor Map', valuechains: 'Value Chains',
        investments: 'Investment Cases', stakeholders: 'Stakeholders', pea: 'Political Economy',
        projections: '2050 Projections'
    };
    if (pageId === 'home') {
        bc.innerHTML = '<a href="#home" onclick="go(\'home\',null,event)">Home</a>';
    } else {
        bc.innerHTML = `<a href="#home" onclick="go('home',null,event)">Home</a><span class="sep">›</span><span>${names[pageId] || pageId}</span>`;
    }
}

// Sidebar collapse
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('collapsed');
}

// Search
function handleSearch(q) {
    if (!q || q.length < 2) return;
    // Simple search — navigate to relevant page
    const ql = q.toLowerCase();
    if (['soya', 'zambia', 'crush', 'meal'].some(k => ql.includes(k))) { go('valuechains', null); setTimeout(() => switchVC('soya_zambia'), 100); }
    else if (['maize', 'tanzania'].some(k => ql.includes(k))) { go('valuechains', null); setTimeout(() => switchVC('maize_tanzania'), 100); }
    else if (['rice', 'nigeria'].some(k => ql.includes(k))) { go('valuechains', null); setTimeout(() => switchVC('rice_nigeria'), 100); }
    else if (['wheat', 'zimbabwe'].some(k => ql.includes(k))) { go('valuechains', null); setTimeout(() => switchVC('wheat_zimbabwe'), 100); }
}

// Value chain tab switching
function vcTab(i) {
    document.querySelectorAll('.vc-sec').forEach((s, j) => { s.classList.toggle('on', j === i); });
    document.querySelectorAll('.vc-tb').forEach((t, j) => { t.classList.toggle('on', j === i); });
}

// Value chain switching
function switchVC(vcId) {
    currentVC = vcId;
    const container = document.getElementById('vc-content');
    if (!container) return;
    const fn = window['renderVC_' + vcId];
    if (fn) {
        container.innerHTML = fn();
    } else {
        container.innerHTML = `<div class="c"><h2>Coming soon</h2><p style="font-size:12px;color:var(--mu)">This value chain analysis is being developed. Check back after field visits.</p></div>`;
    }
    // Update VC selector
    document.querySelectorAll('.vc-selector-btn').forEach(b => {
        b.classList.toggle('on', b.dataset.vc === vcId);
    });
}

// Matrix cell click
function matrixClick(corridor, vc) {
    go('valuechains', null);
    const vcMap = {
        'Lobito–Upper Rift_Maize': 'maize_tanzania',
        'Lobito–Upper Rift_Soya': 'soya_zambia',
        'Lobito–Upper Rift_Poultry': 'poultry_limpopo',
        'Limpopo–Southern Africa_Wheat': 'wheat_zimbabwe',
        'Limpopo–Southern Africa_Poultry': 'poultry_limpopo',
        'Abidjan–Lagos_Rice': 'rice_nigeria',
        'Abidjan–Lagos_Palm Oil': 'palm_oil',
        'Dakar–Lagos_Maize': 'maize_tanzania',
        'Dakar–Lagos_Rice': 'rice_nigeria'
    };
    const target = vcMap[corridor + '_' + vc];
    if (target) setTimeout(() => switchVC(target), 100);
}

// Investment case expand
function toggleIC(id) {
    const el = document.getElementById('ic-' + id);
    if (el) el.classList.toggle('show');
}

// Helper: RAG pill
function ragPill(rating) {
    if (!rating || rating === '—') return '<span class="p neutral">—</span>';
    const r = rating.toLowerCase();
    if (r.includes('green') && !r.includes('amber')) return `<span class="p ok">${rating}</span>`;
    if (r.includes('red')) return `<span class="p bad">${rating}</span>`;
    return `<span class="p warn">${rating}</span>`;
}

// Helper: status pill
function statusPill(status) {
    if (status === 'Complete') return '<span class="p ok">Complete</span>';
    if (status === 'On Track') return '<span class="p ok">On Track</span>';
    if (status === 'At Risk') return '<span class="p warn">At Risk</span>';
    if (status === 'Overdue') return '<span class="p bad">Overdue</span>';
    if (status === 'Draft') return '<span class="p warn">Draft</span>';
    if (status === 'Scoping') return '<span class="p neutral">Scoping</span>';
    return `<span class="p neutral">${status}</span>`;
}

function confidencePill(c) {
    if (c === 'High') return '<span class="p ok">High</span>';
    if (c === 'Medium') return '<span class="p warn">Medium</span>';
    return '<span class="p bad">Low</span>';
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    go(hash, null);
});
