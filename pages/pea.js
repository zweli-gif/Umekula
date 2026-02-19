// Political Economy Insights — Page 6
registerPage('pea', function () {
  const countries = PEA_COUNTRIES || [];
  return `
<div class="hdr">
  <h1>Political Economy Insights</h1>
  <div class="sub">12 country profiles · Cross-cutting insights · Corridor PE synthesis</div>
</div>
<div class="wrap">

  <!-- Country cards -->
  <div class="g3">
    ${countries.map(c => `
      <div class="country-card">
        <div class="flag">${c.flag}</div>
        <h3>${c.name}</h3>
        <div class="rag-row">
          ${ragPill(c.trade)} ${ragPill(c.fx)} ${ragPill(c.institutional)}
        </div>
        <ul>
          ${c.risks.map(r => `<li style="font-size:10px">${r}</li>`).join('')}
        </ul>
        <div style="font-size:10px;color:var(--mu);margin-top:6px"><strong>Approach:</strong> ${c.approach}</div>
      </div>
    `).join('')}
  </div>

  <!-- Cross-cutting insights -->
  <div class="c" style="margin-top:12px">
    <h2>Cross-cutting insights</h2>
    <div class="g2">
      <div>
        <div class="sig" style="flex-direction:column">
          <div class="s warn" style="margin-bottom:6px">⚠ Export bans are electoral insurance<span>Tanzania, Zambia, Malawi all use food export bans as political tools — not rational trade policy</span></div>
          <div class="s bad" style="margin-bottom:6px">✗ FX scarcity compresses margins<span>Zimbabwe, Malawi, Nigeria — input costs in USD, revenues in local currency</span></div>
          <div class="s ok" style="margin-bottom:6px">✓ WRS frameworks gaining traction<span>Warehouse Receipt Systems in Zambia and Tanzania showing promise for de-risking trade</span></div>
        </div>
      </div>
      <div>
        <div class="sig" style="flex-direction:column">
          <div class="s warn" style="margin-bottom:6px">⚠ State marketing boards distort prices<span>GMB (Zimbabwe), ADMARC (Malawi) — monopsony power reduces farmer incentives</span></div>
          <div class="s ok" style="margin-bottom:6px">✓ EAC/SADC frameworks provide leverage<span>Regional integration commitments can be used to lock in trade policy reforms</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Corridor PE synthesis -->
  <div class="c">
    <h2>Corridor PE synthesis</h2>
    <table class="t">
      <thead><tr><th>Corridor</th><th>Primary PE risk</th><th>Mitigation strategy</th><th>Overall rating</th></tr></thead>
      <tbody>
        <tr><td><strong>Lobito–Upper Rift</strong></td><td>Export bans (TZ), side-selling (ZM)</td><td>WRS + EAC trade commitments</td><td>${ragPill('Green–Amber')}</td></tr>
        <tr><td><strong>Limpopo</strong></td><td>GMB monopsony, FX scarcity</td><td>Private buyer channels via ZMX</td><td>${ragPill('Amber–Red')}</td></tr>
        <tr><td><strong>Abidjan–Lagos</strong></td><td>Porous borders, Benin arbitrage</td><td>Quality differentiation + enforcement</td><td>${ragPill('Amber')}</td></tr>
        <tr><td><strong>Upper Rift</strong></td><td>Export ban credibility</td><td>Buffer stock + trade commitments</td><td>${ragPill('Amber')}</td></tr>
      </tbody>
    </table>
  </div>

</div>`;
});
