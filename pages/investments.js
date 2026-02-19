// Investment Cases — Page 4
registerPage('investments', function () {
  const ics = INVESTMENT_CASES || [];
  return `
<div class="hdr">
  <h1>Investment Cases</h1>
  <div class="sub">Portfolio of 9 investment cases · $280–480M total</div>
</div>
<div class="wrap">

  <!-- KPI strip -->
  <div class="g4">
    <div class="k"><div class="l">Total ICs</div><div class="v">9</div><div class="n">Across 4 corridors</div></div>
    <div class="k"><div class="l">Portfolio value</div><div class="v">$280–480M</div><div class="n">Blended public + private</div></div>
    <div class="k amber"><div class="l">High confidence</div><div class="v">3</div><div class="n">Ready for detailed structuring</div></div>
    <div class="k"><div class="l">Jobs potential</div><div class="v">15,000+</div><div class="n">Direct + indirect</div></div>
  </div>

  <!-- Filters -->
  <div class="filters">
    <select id="ic-filter-corridor" onchange="filterICs()">
      <option value="">All corridors</option>
      <option>Lobito</option><option>Limpopo</option><option>Abidjan–Lagos</option>
    </select>
    <select id="ic-filter-vc" onchange="filterICs()">
      <option value="">All VCs</option>
      <option>Soya</option><option>Maize</option><option>Rice</option><option>Wheat</option><option>Poultry</option>
    </select>
    <select id="ic-filter-status" onchange="filterICs()">
      <option value="">All statuses</option>
      <option>Draft</option><option>Scoping</option><option>Complete</option>
    </select>
  </div>

  <!-- Portfolio table -->
  <div class="c">
    <h2>Investment case portfolio</h2>
    <table class="t" id="ic-table">
      <thead><tr><th>IC</th><th>Corridor</th><th>VC</th><th>Size ($M)</th><th>Confidence</th><th>Status</th></tr></thead>
      <tbody>
        ${ics.map((ic, i) => `
          <tr class="clickable" onclick="toggleIC(${i})" data-corridor="${ic.corridor}" data-vc="${ic.vc}" data-status="${ic.status}">
            <td><strong>${ic.name}</strong></td>
            <td>${ic.corridor}</td>
            <td>${ic.vc}</td>
            <td class="mono">${ic.size}</td>
            <td>${confidencePill(ic.confidence)}</td>
            <td>${statusPill(ic.status)}</td>
          </tr>
          <tr><td colspan="6" style="padding:0"><div class="ic-expand" id="ic-${i}">
            <div class="g2">
              <div><h3>Description</h3><p style="font-size:11px">${ic.description || 'Investment case details being developed.'}</p></div>
              <div><h3>Key risks</h3><ul>${(ic.risks || ['TBD']).map(r => `<li style="font-size:11px">${r}</li>`).join('')}</ul></div>
            </div>
          </div></td></tr>
        `).join('')}
      </tbody>
    </table>
  </div>

  <!-- Cross-corridor dependencies -->
  <div class="c">
    <h2>Cross-corridor dependencies</h2>
    <div class="sig">
      <div class="s warn">⚠ Poultry depends on soy meal (Zambia) and maize (Tanzania)<span>Cannot assess independently</span></div>
      <div class="s bad">✗ Zimbabwe wheat constrained by GMB + FX<span>Don't invest downstream until PE resolved</span></div>
      <div class="s ok">✓ Zambia soya is the anchor VC<span>Strongest economics, lowest PE risk</span></div>
    </div>
  </div>

</div>`;
});

function filterICs() {
  const fc = document.getElementById('ic-filter-corridor').value;
  const fv = document.getElementById('ic-filter-vc').value;
  const fs = document.getElementById('ic-filter-status').value;
  document.querySelectorAll('#ic-table tbody tr.clickable').forEach(row => {
    const show = (!fc || row.dataset.corridor.includes(fc)) &&
      (!fv || row.dataset.vc.includes(fv)) &&
      (!fs || row.dataset.status === fs);
    row.style.display = show ? '' : 'none';
    row.nextElementSibling.style.display = show ? '' : 'none';
  });
}
