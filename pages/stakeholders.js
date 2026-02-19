// Stakeholder Engagement Tracker — Page 5
registerPage('stakeholders', function () {
  const stk = STAKEHOLDERS || [];
  const visits = FIELD_VISITS || [];

  // Count by type
  const byType = {};
  stk.forEach(s => { byType[s.type] = (byType[s.type] || 0) + 1; });

  // Count by corridor
  const byCorridor = {};
  stk.forEach(s => { byCorridor[s.corridor] = (byCorridor[s.corridor] || 0) + 1; });

  return `
<div class="hdr">
  <h1>Stakeholder Engagement Tracker</h1>
  <div class="sub">30 tracked stakeholders across 12 countries · Pipeline + field visits</div>
</div>
<div class="wrap">

  <!-- Pipeline funnel -->
  <div class="c">
    <h2>Engagement pipeline</h2>
    <div class="funnel">
      <div class="funnel-stage"><div class="funnel-label">Identified</div><div class="funnel-bar" style="width:100%;background:var(--g3)">30</div></div>
      <div class="funnel-stage"><div class="funnel-label">Contacted</div><div class="funnel-bar" style="width:80%;background:var(--g2)">24</div></div>
      <div class="funnel-stage"><div class="funnel-label">Interviewed</div><div class="funnel-bar" style="width:53%;background:var(--g)">16</div></div>
      <div class="funnel-stage"><div class="funnel-label">Partnership</div><div class="funnel-bar" style="width:20%;background:#0d3311">6</div></div>
    </div>
  </div>

  <!-- Field visits -->
  <div class="c">
    <h2>Field visits</h2>
    <div class="g3">
      ${visits.map(v => `
        <div class="nd">
          <span class="fl ${v.status === 'Complete' ? 'mkt' : v.status === 'In Progress' ? 'bind' : 'loss'}">${v.status}</span>
          <div class="h">${v.location}</div>
          <div style="font-size:10px;color:var(--mu);margin:4px 0">${v.dates}</div>
          <ul>${v.objectives.map(o => `<li>${o}</li>`).join('')}</ul>
        </div>
      `).join('')}
    </div>
  </div>

  <!-- Engagement by corridor -->
  <div class="c">
    <h2>Engagement by corridor</h2>
    <div class="bar">
      ${Object.entries(byCorridor).map(([c, n]) => `
        <div class="bar-r">
          <div class="bar-l">${c}</div>
          <div class="bar-t"><div class="bar-f gn" style="width:${Math.round(n / 30 * 100)}%">${n}</div></div>
        </div>
      `).join('')}
    </div>
  </div>

  <!-- Stakeholder table -->
  <div class="c">
    <h2>Stakeholder registry</h2>
    <div class="filters">
      <select id="stk-filter-type" onchange="filterSTK()">
        <option value="">All types</option>
        ${Object.keys(byType).map(t => `<option>${t}</option>`).join('')}
      </select>
      <select id="stk-filter-corridor" onchange="filterSTK()">
        <option value="">All corridors</option>
        ${Object.keys(byCorridor).map(c => `<option>${c}</option>`).join('')}
      </select>
      <select id="stk-filter-priority" onchange="filterSTK()">
        <option value="">All priorities</option>
        <option>Critical</option><option>High</option><option>Medium</option><option>Low</option>
      </select>
    </div>
    <table class="t" id="stk-table">
      <thead><tr><th>Name</th><th>Organisation</th><th>Type</th><th>Corridor</th><th>Priority</th><th>Engagement</th></tr></thead>
      <tbody>
        ${stk.map(s => `
          <tr data-type="${s.type}" data-corridor="${s.corridor}" data-priority="${s.priority}">
            <td><strong>${s.name}</strong></td>
            <td>${s.org}</td>
            <td>${s.type}</td>
            <td>${s.corridor}</td>
            <td>${s.priority === 'Critical' ? '<span class="p bad">Critical</span>' : s.priority === 'High' ? '<span class="p warn">High</span>' : '<span class="p ok">' + s.priority + '</span>'}</td>
            <td>${ragPill(s.engagement)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>

</div>`;
});

function filterSTK() {
  const ft = document.getElementById('stk-filter-type').value;
  const fc = document.getElementById('stk-filter-corridor').value;
  const fp = document.getElementById('stk-filter-priority').value;
  document.querySelectorAll('#stk-table tbody tr').forEach(row => {
    const show = (!ft || row.dataset.type === ft) &&
      (!fc || row.dataset.corridor === fc) &&
      (!fp || row.dataset.priority === fp);
    row.style.display = show ? '' : 'none';
  });
}
