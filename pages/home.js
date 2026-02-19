// Command Center — Page 1
registerPage('home', function () {
    const phases = [
        { name: 'Inception', status: 'done', dates: 'Oct–Dec 2025' },
        { name: 'Field & Analysis', status: 'current', dates: 'Jan–Apr 2026' },
        { name: 'Investment Cases', status: 'upcoming', dates: 'May–Jul 2026' },
        { name: 'Implementation', status: 'upcoming', dates: 'Aug–Dec 2026' }
    ];

    return `
<div class="hdr">
  <h1>Command Center</h1>
  <div class="sub">AFSTI project dashboard · Last updated Feb 2026</div>
</div>
<div class="wrap">

  <!-- Timeline -->
  <div class="c">
    <h2>Project timeline</h2>
    <div class="timeline-phases">
      ${phases.map(p => `<div class="timeline-phase ${p.status}">${p.name}</div>`).join('')}
    </div>
    <div class="timeline-labels">
      ${phases.map(p => `<span>${p.dates}</span>`).join('')}
    </div>
  </div>

  <!-- KPI strip -->
  <div class="g4">
    <div class="k"><div class="l">Corridors mapped</div><div class="v">4</div><div class="n">Lobito, Limpopo, Abidjan–Lagos, Upper Rift</div></div>
    <div class="k"><div class="l">Value chains assessed</div><div class="v">7</div><div class="n">4 complete, 3 in scoping</div></div>
    <div class="k amber"><div class="l">Investment cases</div><div class="v">9</div><div class="n">$280–480M total portfolio</div></div>
    <div class="k"><div class="l">Stakeholders tracked</div><div class="v">30</div><div class="n">Across 12 countries</div></div>
  </div>

  <!-- Deliverable tracker -->
  <div class="c">
    <h2>Deliverable tracker</h2>
    <table class="t">
      <thead><tr><th>Deliverable</th><th>Due</th><th>Status</th><th>Owner</th></tr></thead>
      <tbody>
        <tr><td>Baseline analytics pack</td><td class="mono">Jan 31</td><td><span class="p ok">DELIVERED</span></td><td>Analytics team</td></tr>
        <tr><td>Zambia/Tanzania field visits</td><td class="mono">Feb 17–21</td><td><span class="p warn">IN FIELD</span></td><td>Field team</td></tr>
        <tr><td>4 VC short decks</td><td class="mono">Feb 28</td><td><span class="p ok">3/4 DONE</span></td><td>VC leads</td></tr>
        <tr><td>PEA country profiles (12)</td><td class="mono">Mar 15</td><td><span class="p warn">8/12</span></td><td>Sofala Partners</td></tr>
        <tr><td>Investment case portfolio</td><td class="mono">May 30</td><td><span class="p neutral">NOT STARTED</span></td><td>IC team</td></tr>
        <tr><td>Corridor logistics mapping</td><td class="mono">Jun 15</td><td><span class="p neutral">NOT STARTED</span></td><td>Logistics WS</td></tr>
      </tbody>
    </table>
  </div>

  <!-- Corridor × VC Matrix -->
  <div class="c">
    <h2>Corridor × Value Chain matrix</h2>
    <div class="sub" style="font-size:10px;color:var(--mu);margin-bottom:8px">Click any cell to jump to that value chain deep dive</div>
    <div class="matrix">
      <table>
        <thead><tr><th></th><th>Soya</th><th>Maize</th><th>Rice</th><th>Wheat</th><th>Poultry</th><th>Palm Oil</th><th>Beef</th></tr></thead>
        <tbody>
          <tr><td class="row-label">Lobito</td>
            <td class="g" onclick="goVC('soya_zambia')">ZM ✓</td>
            <td class="a" onclick="goVC('maize_tanzania')">TZ ⚠</td>
            <td class="na">—</td><td class="na">—</td>
            <td class="a" onclick="goVC('poultry_limpopo')">MW ⚠</td>
            <td class="na">—</td><td class="na">—</td></tr>
          <tr><td class="row-label">Limpopo</td>
            <td class="na">—</td><td class="na">—</td><td class="na">—</td>
            <td class="r" onclick="goVC('wheat_zimbabwe')">ZW ✗</td>
            <td class="a" onclick="goVC('poultry_limpopo')">MZ ⚠</td>
            <td class="na">—</td>
            <td class="a" onclick="goVC('beef_limpopo')">ZW ⚠</td></tr>
          <tr><td class="row-label">Abidjan–Lagos</td>
            <td class="na">—</td><td class="na">—</td>
            <td class="a" onclick="goVC('rice_nigeria')">NG ⚠</td>
            <td class="na">—</td><td class="na">—</td>
            <td class="r" onclick="goVC('palm_oil')">CI ✗</td><td class="na">—</td></tr>
          <tr><td class="row-label">Upper Rift</td>
            <td class="na">—</td>
            <td class="a" onclick="goVC('maize_tanzania')">TZ ⚠</td>
            <td class="na">—</td><td class="na">—</td><td class="na">—</td><td class="na">—</td><td class="na">—</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Activity feed -->
  <div class="c">
    <h2>Recent activity</h2>
    <div class="feed-item"><div class="feed-dot gn"></div><div>Zambia Soya short deck — final version delivered<div class="feed-date">Feb 14</div></div></div>
    <div class="feed-item"><div class="feed-dot gn"></div><div>Tanzania Maize field visit prep complete<div class="feed-date">Feb 12</div></div></div>
    <div class="feed-item"><div class="feed-dot am"></div><div>Nigeria Rice — Benin arbitrage analysis flagged as critical<div class="feed-date">Feb 10</div></div></div>
    <div class="feed-item"><div class="feed-dot rd"></div><div>Zimbabwe Wheat — GMB data discrepancy escalated<div class="feed-date">Feb 8</div></div></div>
    <div class="feed-item"><div class="feed-dot gn"></div><div>PEA profiles completed for 8 of 12 countries<div class="feed-date">Feb 6</div></div></div>
    <div class="feed-item"><div class="feed-dot am"></div><div>Investment case methodology workshop scheduled<div class="feed-date">Feb 4</div></div></div>
  </div>

</div>`;
});

// Helper for matrix clicks
function goVC(vcId) {
    go('valuechains', null);
    setTimeout(() => switchVC(vcId), 100);
}
