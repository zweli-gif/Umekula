// 2050 Projections — Page 7
registerPage('projections', function () {
  const proj = PROJECTIONS || [];
  return `
<div class="hdr">
  <h1>2050 Projections</h1>
  <div class="sub">Demand vs supply outlook · Climate overlay · Geopolitical scenarios</div>
</div>
<div class="wrap">

  <!-- Demand vs Supply bars -->
  <div class="c">
    <h2>Demand vs supply outlook (2050)</h2>
    ${proj.map(p => `
      <div class="chart-bar-group" style="margin-bottom:10px">
        <div class="chart-label">${p.vc}</div>
        <div class="dual-bar">
          <div class="bar-label">Demand</div>
          <div class="bar-track"><div class="bar-fill" style="width:${Math.min(p.demandPct, 100)}%;background:linear-gradient(90deg,#42A5F5,#1565C0)">${p.demand}</div></div>
        </div>
        <div class="dual-bar">
          <div class="bar-label">Supply</div>
          <div class="bar-track"><div class="bar-fill" style="width:${Math.min(p.supplyPct, 100)}%;background:linear-gradient(90deg,#4CAF50,#1B5E20)">${p.supply}</div></div>
        </div>
        <div style="font-size:9px;color:${p.gap.startsWith('+') ? 'var(--r)' : 'var(--g)'};margin-top:2px;padding-left:56px"><strong>Gap:</strong> ${p.gap}</div>
      </div>
    `).join('')}
  </div>

  <!-- Climate overlay -->
  <div class="c">
    <h2>Climate impact overlay</h2>
    <div class="g3">
      <div class="nd">
        <span class="fl loss">HIGH</span>
        <div class="h">Water stress</div>
        <ul>
          <li>Zimbabwe wheat irrigation dependent</li>
          <li>Tanzania maize increasingly rainfed-risky</li>
          <li>Irrigation rehab critical for Limpopo corridor</li>
        </ul>
      </div>
      <div class="nd">
        <span class="fl bind">MEDIUM</span>
        <div class="h">Temperature shift</div>
        <ul>
          <li>+1.5–2.5°C by 2050 in Southern Africa</li>
          <li>Soya heat tolerance becoming a factor</li>
          <li>Maize yield decline 10–20% in stressed zones</li>
        </ul>
      </div>
      <div class="nd">
        <span class="fl bind">MEDIUM</span>
        <div class="h">Extreme weather events</div>
        <ul>
          <li>Cyclone frequency increasing (Moz coast)</li>
          <li>Drought cycles shortening</li>
          <li>Supply chain disruption risk rising</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Geopolitical scenarios -->
  <div class="c">
    <h2>Geopolitical scenarios</h2>
    <div class="g2">
      <div class="scenario-card" style="border-left:4px solid var(--g)">
        <h3>Integration acceleration</h3>
        <ul>
          <li>AfCFTA fully implemented by 2035</li>
          <li>Corridor infrastructure on schedule</li>
          <li>Regional value chains emerge</li>
        </ul>
        <div class="prob"><span class="p ok">P = 25%</span> Best case</div>
      </div>
      <div class="scenario-card" style="border-left:4px solid var(--a)">
        <h3>Muddle through</h3>
        <ul>
          <li>Partial implementation of AfCFTA</li>
          <li>Some corridors work, others stall</li>
          <li>Bilateral deals dominate</li>
        </ul>
        <div class="prob"><span class="p warn">P = 40%</span> Base case</div>
      </div>
      <div class="scenario-card" style="border-left:4px solid var(--r)">
        <h3>Fragmentation</h3>
        <ul>
          <li>Trade barriers increase post-pandemic</li>
          <li>Food sovereignty trumps trade</li>
          <li>Export bans become permanent</li>
        </ul>
        <div class="prob"><span class="p bad">P = 25%</span> Downside</div>
      </div>
      <div class="scenario-card" style="border-left:4px solid #7B1FA2">
        <h3>External shock</h3>
        <ul>
          <li>Global supply chain disruption</li>
          <li>Commodity price spike / crash</li>
          <li>Africa imports surge, deficits widen</li>
        </ul>
        <div class="prob"><span class="p bad">P = 10%</span> Tail risk</div>
      </div>
    </div>
  </div>

  <!-- Implications matrix -->
  <div class="c">
    <h2>Scenario × investment implications</h2>
    <table class="t">
      <thead><tr><th>Scenario</th><th>Soya (ZM)</th><th>Maize (TZ)</th><th>Rice (NG)</th><th>Wheat (ZW)</th></tr></thead>
      <tbody>
        <tr><td><strong>Integration</strong></td><td><span class="p ok">Accelerate</span></td><td><span class="p ok">Accelerate</span></td><td><span class="p ok">Scale up</span></td><td><span class="p warn">Conditional</span></td></tr>
        <tr><td><strong>Muddle through</strong></td><td><span class="p ok">Proceed</span></td><td><span class="p warn">Watch</span></td><td><span class="p warn">Watch</span></td><td><span class="p bad">Pause</span></td></tr>
        <tr><td><strong>Fragmentation</strong></td><td><span class="p warn">Domestic only</span></td><td><span class="p bad">Pause</span></td><td><span class="p ok">Import sub</span></td><td><span class="p bad">Abandon</span></td></tr>
        <tr><td><strong>External shock</strong></td><td><span class="p warn">Hedge</span></td><td><span class="p bad">Pause</span></td><td><span class="p warn">Hedge</span></td><td><span class="p bad">Abandon</span></td></tr>
      </tbody>
    </table>
  </div>

</div>`;
});
