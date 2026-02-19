// ============================================================
// Page 3: Value Chain Deep Dives
// ============================================================

registerPage('valuechains', function () {
  const vcs = [
    { id: 'soya_zambia', name: 'Zambia Soya', corridor: 'Lobito–Upper Rift', tag: 'ok' },
    { id: 'maize_tanzania', name: 'Tanzania Maize', corridor: 'Lobito–Upper Rift', tag: 'warn' },
    { id: 'rice_nigeria', name: 'Nigeria Rice', corridor: 'Abidjan–Lagos', tag: 'warn' },
    { id: 'wheat_zimbabwe', name: 'Zimbabwe Wheat', corridor: 'Limpopo', tag: 'bad' },
    { id: 'poultry_limpopo', name: 'Poultry (Limpopo)', corridor: 'Limpopo', tag: 'neutral' },
    { id: 'palm_oil', name: 'Palm Oil (Abidjan–Lagos)', corridor: 'Abidjan–Lagos', tag: 'neutral' },
    { id: 'beef_limpopo', name: 'Beef/Livestock (Limpopo)', corridor: 'Limpopo', tag: 'neutral' }
  ];

  let selector = '';
  vcs.forEach(v => {
    const on = (currentVC === v.id || (!currentVC && v.id === 'soya_zambia')) ? ' on' : '';
    selector += `<div class="tb vc-selector-btn${on}" data-vc="${v.id}" onclick="switchVC('${v.id}')">${v.name} <span class="p ${v.tag}" style="margin-left:4px">${v.corridor}</span></div>`;
  });

  const defaultVC = currentVC || 'soya_zambia';
  setTimeout(() => switchVC(defaultVC), 0);

  return `
<div class="hdr">
  <h1>Value Chain Deep Dives</h1>
  <div class="sub">7 priority value chains · 4 complete analyses · 3 in development</div>
  <div class="nav">${selector}</div>
</div>
<div class="wrap">
  <div id="vc-content"><div class="c"><p style="color:var(--mu)">Loading...</p></div></div>
</div>`;
});

// ============================================================
// Zambia Soya — Complete Dashboard (from reference HTML)
// ============================================================
window.renderVC_soya_zambia = function () {
  return `
  <div class="c" style="border-left:4px solid var(--g)">
    <h2 style="margin-bottom:2px">Zambia Soya — Exhibit-style Fact Base</h2>
    <div style="font-size:11px;color:var(--mu);margin-bottom:8px">Lobito–Upper Rift · Updated Feb 2026</div>
    <div class="nav-tabs">
      <div class="tb vc-tb on" onclick="vcTab(0)">1) Thesis</div>
      <div class="tb vc-tb" onclick="vcTab(1)">2) Cost physics</div>
      <div class="tb vc-tb" onclick="vcTab(2)">3) Demand fit</div>
      <div class="tb vc-tb" onclick="vcTab(3)">4) Ecosystem map</div>
      <div class="tb vc-tb" onclick="vcTab(4)">5) Five projects</div>
      <div class="tb vc-tb" onclick="vcTab(5)">6) Players & tests</div>
    </div>
  </div>

  <!-- TAB 1: THESIS -->
  <div class="vc-sec on">
    <div class="c"><h2>Governing thought</h2>
      <div class="sig">
        <div class="s ok">✓ 1M MT installed crush<span>Capacity exists — don't build new tin</span></div>
        <div class="s bad">✗ 48% utilisation<span>475kt beans vs 1M MT capacity</span></div>
        <div class="s warn">⚠ Co-product trap<span>Meal clearance drives crushing, not oil</span></div>
      </div>
      <ul><li><strong>Thesis:</strong> Idle crushers → regional meal corridor → oil competitive as by-product</li>
        <li><strong>Bind:</strong> No scaled aggregation + meal doesn't clear regionally at predictable terms</li>
        <li><strong>Logic:</strong> Fix aggregation → utilisation rises → unit cost falls → oil competitive</li>
        <li><strong>Key insight:</strong> "Meal economics drive crushing decisions, not oil" (George L.)</li></ul>
    </div>
    <div class="g4">
      <div class="k"><div class="l">Bean production</div><div class="v">475kt</div><div class="n">• Falling (was ~500kt)<br/>• Yield 1.3 t/ha (declining)<br/>• ~150,000 smallholders</div></div>
      <div class="k red"><div class="l">Crush utilisation</div><div class="v">~48%</div><div class="n">• 1M MT capacity installed<br/>• "80%" claim is impossible<br/>• Need more beans, not tin</div></div>
      <div class="k amber"><div class="l">Oil extraction rate</div><div class="v">14→18%</div><div class="n">• Artisanal: 14% recovery<br/>• Modern (Mount Meru): 18%<br/>• Solvent: 18–20%</div></div>
      <div class="k"><div class="l">Delivered advantage</div><div class="v">+$40–80/t</div><div class="n">• Proximity vs seaborne<br/>• Into Angola, DRC, Malawi<br/>• Only if execution works</div></div>
    </div>
    <div class="g2">
      <div class="c" style="margin:0"><h3 style="color:var(--g)">✓ Bull case</h3>
        <ul><li><strong>Capacity exists</strong> — brownfield upgrade, not greenfield</li>
          <li><strong>Cargill bought Zamanita</strong> — global quality validated</li>
          <li><strong>Angola imports $58M soy oil</strong> + $219M palm oil</li>
          <li><strong>DRC/Malawi protein deficit</strong> — meal demand real</li>
          <li><strong>EAC/SADC tariff preferences</strong> vs South America</li></ul></div>
      <div class="c" style="margin:0"><h3 style="color:var(--r)">✗ Bear case</h3>
        <ul><li class="red"><strong>Yield falling</strong> — 1.3 t/ha and declining</li>
          <li class="red"><strong>Finance 25–32%</strong> — $22M/yr excess cost</li>
          <li class="red"><strong>$65/t gap to Argentina</strong> soy oil</li>
          <li class="red"><strong>Export ban risk</strong> during price spikes</li>
          <li class="red"><strong>226kt excess meal</strong> needs regional placement</li></ul></div>
    </div>
  </div>

  <!-- TAB 2: COST PHYSICS -->
  <div class="vc-sec">
    <div class="c"><h2>Co-product equation (per 590kt beans crushed)</h2>
      <table class="t"><thead><tr><th>Output</th><th>Volume</th><th>Value</th><th>Placement</th></tr></thead><tbody>
        <tr><td><strong>Soy oil</strong></td><td class="mono">~100kt</td><td class="mono">~$90M/yr</td><td>Angola ($58M), domestic, DRC</td></tr>
        <tr><td><strong>Soy meal</strong></td><td class="mono">~460kt</td><td class="mono">~$180M/yr</td><td>Domestic 234kt + regional 226kt</td></tr>
        <tr style="background:var(--rl)"><td><strong>Excess meal</strong></td><td class="mono">~226kt</td><td></td><td><strong>Must find: Malawi, DRC, Zim poultry</strong></td></tr>
      </tbody></table></div>
    <div class="c"><h2>Oil cost decomposition: current → reformed</h2>
      <table class="t"><thead><tr><th>Component</th><th>Now</th><th>Reformed</th><th>Δ</th><th>Lever</th></tr></thead><tbody>
        <tr><td>Farmgate beans</td><td class="mono">$420/t</td><td class="mono">$350/t</td><td class="mono" style="color:var(--g)">-$70</td><td>Yield 1.3→2.0 t/ha + aggregation</td></tr>
        <tr><td>Processing (crush)</td><td class="mono">$180/t</td><td class="mono">$100/t</td><td class="mono" style="color:var(--g)">-$80</td><td>Utilisation 48%→75%; OER 14→18%</td></tr>
        <tr><td>Finance cost (25–32%)</td><td class="mono">$85/t</td><td class="mono">$40/t</td><td class="mono" style="color:var(--g)">-$45</td><td>DFI facility: WC at 8–10%</td></tr>
        <tr><td>Logistics + border</td><td class="mono">$65/t</td><td class="mono">$45/t</td><td class="mono" style="color:var(--g)">-$20</td><td>Green lane + corridor platform</td></tr>
        <tr><td>Meal credit (offset)</td><td class="mono" style="color:var(--g)">-$210/t</td><td class="mono" style="color:var(--g)">-$250/t</td><td class="mono" style="color:var(--g)">-$40</td><td>Regional offtake at higher price</td></tr>
        <tr style="background:var(--gl)"><td><strong>NET OIL COST</strong></td><td class="mono"><strong>$540/t</strong></td><td class="mono"><strong>$285/t</strong></td><td class="mono" style="color:var(--g)"><strong>-$255</strong></td><td><strong>-47% (meal cross-subsidy key)</strong></td></tr>
      </tbody></table></div>
    <div class="g3">
      <div class="k"><div class="l">Argentina soy oil CIF</div><div class="v">$895/t</div><div class="n">Benchmark — landed Angola/DRC</div></div>
      <div class="k amber"><div class="l">Zambia current</div><div class="v">$540/t</div><div class="n">Already below import parity — but only if meal clears</div></div>
      <div class="k"><div class="l">Zambia reformed</div><div class="v">$285/t</div><div class="n">Structural ~$229/t advantage at scale</div></div>
    </div>
  </div>

  <!-- TAB 3: DEMAND FIT -->
  <div class="vc-sec">
    <div class="c"><h2>Target markets — oil + meal (joint product)</h2>
      <table class="t"><thead><tr><th>Market</th><th>Product</th><th>Size</th><th>ZM advantage</th><th>Verdict</th></tr></thead><tbody>
        <tr><td><strong>Angola</strong></td><td>Soy oil</td><td>$58M imports</td><td>Proximity; no ocean freight</td><td><span class="p ok">PRIORITY</span></td></tr>
        <tr><td><strong>Angola</strong></td><td>Palm oil substitute</td><td>$219M imports</td><td>Tariff structure favours crude</td><td><span class="p warn">PARTIAL</span></td></tr>
        <tr><td><strong>DRC</strong></td><td>Soy oil + meal</td><td>Growing deficit</td><td>Overland corridor</td><td><span class="p warn">CONDITIONAL</span></td></tr>
        <tr><td><strong>Malawi</strong></td><td>Soy meal (feed)</td><td>Poultry feed deficit</td><td>5–10 day lead vs 30–45 seaborne</td><td><span class="p ok">PRIORITY</span></td></tr>
        <tr><td><strong>Domestic</strong></td><td>Oil + meal</td><td>234kt meal absorbed</td><td>Captive market</td><td><span class="p ok">BASELINE</span></td></tr>
      </tbody></table></div>
  </div>

  <!-- TAB 4: ECOSYSTEM MAP -->
  <div class="vc-sec">
    <div class="c"><h2>Value chain constraint map</h2>
      <div class="g6">
        <div class="nd"><span class="fl loss">LOSS</span><div class="h">1. Inputs</div><ul><li>Yield 1.3 t/ha (falling)</li><li>Seed recycled</li><li>Finance 30–45%</li><li>No agronomy support</li></ul></div>
        <div class="nd"><span class="fl loss">LOSS</span><div class="h">2. Production</div><ul><li>475kt total beans</li><li>Fragmented supply</li><li>12–15% post-harvest loss</li><li>Moisture/impurity variance</li></ul></div>
        <div class="nd"><span class="fl bind">BIND</span><div class="h">3. Aggregation</div><ul><li>No scaled hubs</li><li>No exportable lots</li><li>$45/t secondary logistics</li><li>Oligopsony: 5 vs 150k</li></ul></div>
        <div class="nd"><span class="fl loss">LOSS</span><div class="h">4. Processing</div><ul><li>48% utilisation</li><li>OER 14% vs 18%</li><li>1M MT capacity idle</li><li>Energy unreliable</li></ul></div>
        <div class="nd"><span class="fl bind">BIND</span><div class="h">5. Trade logistics</div><ul><li>Border delay variance</li><li>Informal payments</li><li>Unpredictable delivery</li><li>$65/t corridor cost</li></ul></div>
        <div class="nd"><span class="fl bind">BIND</span><div class="h">6. Demand sink</div><ul><li>226kt meal to place</li><li>No anchor contracts</li><li>Buyers stay seaborne</li><li>Credit terms mismatch</li></ul></div>
      </div></div>
  </div>

  <!-- TAB 5: FIVE PROJECTS -->
  <div class="vc-sec">
    <div class="c"><h2>Five brick-level investment projects</h2>
      <p style="font-size:11px;color:var(--mu);margin-bottom:10px">Each fixes a specific trade constraint. Aggregation (#1) and meal offtake (#3) are prerequisites.</p></div>
    <div class="c"><h3>1. Aggregation + drying hubs (6 nodes) — $15–25M</h3>
      <ul><li><strong>Constraint:</strong> No exportable lots; quality variance</li>
        <li><strong>Build:</strong> 6 hubs — cleaning, drying, grading, 20–50kt silo, QC lab</li>
        <li><strong>Impact:</strong> Monthly supply plans → predictable crusher runs</li></ul></div>
    <div class="c"><h3>2. Debottleneck 2–3 industrial crushers — $10–20M</h3>
      <ul><li><strong>Impact:</strong> Recovery 14→18%; utilisation 48→75%</li>
        <li><strong>Targets:</strong> ETG Mwembeshi, Zamanita, Mt Meru</li></ul></div>
    <div class="c"><h3>3. Meal anchor offtake (Malawi/DRC) — $5–10M</h3>
      <ul><li><strong>Build:</strong> 2–3yr contracts, monthly delivery, shared QC protocol</li>
        <li><strong>Impact:</strong> Guaranteed sink → crushers run at 75–90%</li></ul></div>
    <div class="c"><h3>4. Border green lane — $3–5M</h3>
      <ul><li><strong>Build:</strong> Trusted trader program, digital pre-clearance</li></ul></div>
    <div class="c"><h3>5. Trade finance facility — $25–30M</h3>
      <ul><li><strong>Structure:</strong> DFI first-loss + commercial bank top-up</li>
        <li><strong>Impact:</strong> WC at 8–10% vs 25–32%</li></ul></div>
    <div class="c"><h3>Total investment & sequencing</h3>
      <table class="t"><thead><tr><th>Seq</th><th>Project</th><th>Size</th><th>Type</th><th>Timeline</th></tr></thead><tbody>
        <tr style="background:var(--gl)"><td>1st</td><td><strong>Aggregation hubs</strong></td><td class="mono">$15–25M</td><td>Private + DFI</td><td>Year 1–2</td></tr>
        <tr style="background:var(--gl)"><td>1st</td><td><strong>Meal anchor offtake</strong></td><td class="mono">$5–10M</td><td>Private</td><td>Year 1</td></tr>
        <tr><td>2nd</td><td>Trade finance facility</td><td class="mono">$25–30M</td><td>DFI + banks</td><td>Year 1</td></tr>
        <tr><td>3rd</td><td>Debottleneck crushers</td><td class="mono">$10–20M</td><td>Private</td><td>Year 1–3</td></tr>
        <tr><td>4th</td><td>Border green lane</td><td class="mono">$3–5M</td><td>Gov't / multilateral</td><td>Year 2–3</td></tr>
        <tr style="background:var(--gl)"><td colspan="2"><strong>TOTAL</strong></td><td class="mono"><strong>$58–90M</strong></td><td colspan="2">Target: 700kt beans → $85M/yr incremental</td></tr>
      </tbody></table></div>
  </div>

  <!-- TAB 6: PLAYERS & TESTS -->
  <div class="vc-sec">
    <div class="c"><h2>Named operators</h2>
      <table class="t"><thead><tr><th>Company</th><th>Role</th><th>Best-fit projects</th></tr></thead><tbody>
        <tr><td><strong>ETG / Parrogate JV</strong></td><td>Industrial crush + refining</td><td class="mono">#1 #2 #3 #5</td></tr>
        <tr><td><strong>Alliance Ginneries</strong></td><td>Integrated agro-processing</td><td class="mono">#1 #3 #5</td></tr>
        <tr><td><strong>Mount Meru Group</strong></td><td>Regional footprint; cross-border</td><td class="mono">#2 #3 #4 #5</td></tr>
        <tr><td><strong>Zamanita (Cargill)</strong></td><td>Established processor; quality validated</td><td class="mono">#1 #2 #3</td></tr>
      </tbody></table></div>
    <div class="kill"><div class="h">🛑 Abandon corridor VC if</div>
      <ul><li>Malawi/DRC buyers won't sign anchor contracts even at price parity</li>
        <li>Export restrictions remain unpredictable during shocks</li>
        <li>Yield continues declining below 1.0 t/ha — bean supply collapses</li></ul></div>
    <div class="c"><h3>The honest assessment</h3>
      <ul><li><strong>This is the strongest VC in the portfolio</strong> — capacity exists, private players investing</li>
        <li class="amber"><strong>But "if meal clears" is the entire thesis.</strong> Without Malawi/DRC offtake, crushing stays seasonal</li>
        <li><strong>Cross-corridor dependency:</strong> Soy meal → feeds Limpopo poultry</li></ul></div>
    <div class="ft">Sources: George Liacopoulos interview (Feb 2026); Zambia Soya Oil Model (corrected Jan 2026); AFSTI Baseline Analytics; Sofala Partners PEA</div>
  </div>`;
};

// ============================================================
// Tanzania Maize — Complete Dashboard
// ============================================================
window.renderVC_maize_tanzania = function () {
  return `
  <div class="c" style="border-left:4px solid var(--a)">
    <h2>Tanzania Maize — Exhibit-style Fact Base</h2>
    <div style="font-size:11px;color:var(--mu);margin-bottom:8px">Lobito–Upper Rift · Updated Feb 2026</div>
    <div class="nav-tabs">
      <div class="tb vc-tb on" onclick="vcTab(0)">1) Thesis</div>
      <div class="tb vc-tb" onclick="vcTab(1)">2) Cost physics</div>
      <div class="tb vc-tb" onclick="vcTab(2)">3) Demand fit</div>
      <div class="tb vc-tb" onclick="vcTab(3)">4) Ecosystem map</div>
      <div class="tb vc-tb" onclick="vcTab(4)">5) Five projects</div>
      <div class="tb vc-tb" onclick="vcTab(5)">6) Players & tests</div>
    </div>
  </div>
  <div class="vc-sec on">
    <div class="c"><h2>Governing thought</h2>
      <div class="sig">
        <div class="s warn">⚠ Surplus exits via DRC/Kenya corridors<span>~150kt residual surplus after losses + consumption</span></div>
        <div class="s bad">✗ Export bans + post-harvest loss (30–40%)<span>Binding constraints on corridor viability</span></div>
        <div class="s warn">⚠ Why hasn't private sector moved already?<span>Because the risk premium is too high</span></div>
      </div>
      <ul><li><strong>Thesis:</strong> Surplus exits via DRC/Kenya corridors</li>
        <li><strong>Reality:</strong> ~150kt residual surplus after losses + consumption</li>
        <li><strong>Binding constraints:</strong> Export bans + post-harvest loss (30–40%)</li>
        <li><strong>The honest question:</strong> Why hasn't the private sector moved already?</li></ul></div>
    <div class="g4">
      <div class="k"><div class="l">Production</div><div class="v">6.2M MT</div><div class="n">But 30–40% post-harvest loss</div></div>
      <div class="k amber"><div class="l">Residual surplus</div><div class="v">~150kt</div><div class="n">After consumption + losses</div></div>
      <div class="k red"><div class="l">Export bans</div><div class="v">5+ since 2008</div><div class="n">Electoral insurance, not policy</div></div>
      <div class="k"><div class="l">Farmgate price</div><div class="v">$180–220/t</div><div class="n">Competitive — but unpredictable</div></div>
    </div>
  </div>
  <div class="vc-sec">
    <div class="c"><h2>Cost decomposition: farmgate → delivered</h2>
      <table class="t"><thead><tr><th>Component</th><th>Current</th><th>Reformed</th><th>Lever</th></tr></thead><tbody>
        <tr><td>Farmgate</td><td class="mono">$180–220/t</td><td class="mono">$160–180/t</td><td>Aggregation + storage removes seasonal spike</td></tr>
        <tr><td>Post-harvest loss</td><td class="mono">+$60–80/t</td><td class="mono">+$20–30/t</td><td>Hermetic storage, drying platforms</td></tr>
        <tr><td>Transport to border</td><td class="mono">+$40–60/t</td><td class="mono">+$30–40/t</td><td>Route consolidation, backhaul</td></tr>
        <tr><td>Border + risk premium</td><td class="mono">+$30–50/t</td><td class="mono">+$10–20/t</td><td>WRS + credible no-ban commitment</td></tr>
        <tr style="background:var(--al)"><td><strong>Delivered (DRC/Kenya)</strong></td><td class="mono"><strong>$310–410/t</strong></td><td class="mono"><strong>$220–270/t</strong></td><td><strong>Competitive if ban risk removed</strong></td></tr>
      </tbody></table></div>
  </div>
  <div class="vc-sec">
    <div class="c"><h2>Target markets</h2>
      <table class="t"><thead><tr><th>Market</th><th>Size</th><th>TZ advantage</th><th>Verdict</th></tr></thead><tbody>
        <tr><td><strong>Domestic</strong></td><td>~5.5M MT consumed</td><td>Captive</td><td><span class="p ok">BASELINE</span></td></tr>
        <tr><td><strong>Kenya</strong></td><td>Import ~800kt/yr</td><td>Proximity; EAC</td><td><span class="p warn">CONDITIONAL</span></td></tr>
        <tr><td><strong>DRC (Lubumbashi)</strong></td><td>Growing deficit</td><td>Overland</td><td><span class="p warn">CONDITIONAL</span></td></tr>
      </tbody></table>
      <p style="font-size:11px;color:var(--r);margin-top:6px"><strong>⚠ All export markets conditional on ban risk mitigation</strong> — aflatoxin is also a key barrier for Kenya</p></div>
  </div>
  <div class="vc-sec">
    <div class="c"><h2>Constraint map</h2>
      <div class="g5">
        <div class="nd"><span class="fl loss">LOSS</span><div class="h">1. Production</div><ul><li>High fragmentation</li><li>Low input use</li><li>Water stress increasing</li></ul></div>
        <div class="nd"><span class="fl bind">BIND</span><div class="h">2. Post-harvest</div><ul><li>30–40% losses</li><li>No hermetic storage</li><li>Aflatoxin contamination</li></ul></div>
        <div class="nd"><span class="fl bind">BIND</span><div class="h">3. Policy</div><ul><li>5+ export bans</li><li>Unpredictable timing</li><li>Electoral insurance</li></ul></div>
        <div class="nd"><span class="fl loss">LOSS</span><div class="h">4. Aggregation</div><ul><li>No scaled storage</li><li>Side-selling</li><li>Quality variance</li></ul></div>
        <div class="nd"><span class="fl loss">LOSS</span><div class="h">5. Logistics</div><ul><li>Poor feeder roads</li><li>High transport cost</li><li>Border delays</li></ul></div>
      </div></div>
  </div>
  <div class="vc-sec">
    <div class="c"><h2>Five projects — sequencing matters</h2>
      <p style="font-size:11px;color:var(--r);margin-bottom:8px"><strong>Policy credibility (#1) and post-harvest loss (#2) are prerequisites. Everything else is contingent.</strong></p></div>
    <div class="c"><h3>1. Policy credibility mechanism — Foundational</h3>
      <ul><li><strong>Build:</strong> WRS + buffer stock linked to EAC trade obligations</li>
        <li><strong>Impact:</strong> Reduces risk premium from $30–50/t to $10–20/t</li></ul></div>
    <div class="c"><h3>2. Post-harvest loss platform — $15–25M</h3>
      <ul><li><strong>Build:</strong> Hermetic storage, drying platforms, aflatoxin testing at 6–8 nodes</li>
        <li><strong>Impact:</strong> Losses from 30–40% to 10–15%</li></ul></div>
    <div class="c"><h3>3–5. Aggregation, logistics, trade finance — contingent on #1–2</h3>
      <ul><li>Do not invest downstream until policy credibility demonstrated</li></ul></div>
    <div class="kill"><div class="h">🛑 Abandon corridor VC if</div>
      <ul><li>Tanzania imposes new export ban during project period</li>
        <li>Post-harvest loss interventions fail to scale</li>
        <li>Aflatoxin levels remain unacceptable for Kenya market</li></ul></div>
  </div>
  <div class="vc-sec">
    <div class="c"><h2>The honest assessment</h2>
      <ul><li class="amber"><strong>High potential but high political risk</strong> — the economics work, the politics don't (yet)</li>
        <li><strong>Do not commit capital</strong> until WRS + policy credibility demonstrated</li>
        <li><strong>This is a "watch and wait" VC</strong> — not a "move now" VC</li></ul></div>
    <div class="ft">Sources: AFSTI Baseline Analytics; Tanzania maize model (Feb 2026); Sofala Partners PEA; AMDT interviews</div>
  </div>`;
};

// ============================================================
// Nigeria Rice — Complete Dashboard
// ============================================================
window.renderVC_rice_nigeria = function () {
  return `
  <div class="c" style="border-left:4px solid var(--a)">
    <h2>Nigeria Rice — Exhibit-style Fact Base</h2>
    <div style="font-size:11px;color:var(--mu);margin-bottom:8px">Abidjan–Lagos · Updated Feb 2026</div>
    <div class="nav-tabs">
      <div class="tb vc-tb on" onclick="vcTab(0)">1) Thesis</div>
      <div class="tb vc-tb" onclick="vcTab(1)">2) Cost physics</div>
      <div class="tb vc-tb" onclick="vcTab(2)">3) Demand fit</div>
      <div class="tb vc-tb" onclick="vcTab(3)">4) Ecosystem map</div>
      <div class="tb vc-tb" onclick="vcTab(4)">5) Five projects</div>
      <div class="tb vc-tb" onclick="vcTab(5)">6) Players & tests</div>
    </div>
  </div>
  <div class="vc-sec on">
    <div class="c"><h2>Governing thought — Import substitution, not export</h2>
      <div class="sig">
        <div class="s ok">✓ $800M+ import bill<span>Market is domestic — don't chase export</span></div>
        <div class="s bad">✗ Import ban is porous<span>Benin arbitrage undercuts domestic</span></div>
        <div class="s warn">⚠ 4M MT gap between demand and quality supply<span>Yield + milling quality are the binds</span></div>
      </div>
      <ul><li><strong>Frame:</strong> This is import substitution, not export. $800M+ import bill is the market.</li>
        <li><strong>Bind:</strong> Domestic rice quality can't compete with Thai/Indian imports at mill-gate</li>
        <li><strong>The Benin problem:</strong> Porous border = imports re-enter despite ban</li></ul></div>
    <div class="g4">
      <div class="k"><div class="l">Domestic production</div><div class="v">~5M MT paddy</div><div class="n">~3.2M MT milled equivalent</div></div>
      <div class="k red"><div class="l">Import bill</div><div class="v">$800M+</div><div class="n">~2.5M MT imported (official + informal)</div></div>
      <div class="k amber"><div class="l">Milling recovery</div><div class="v">55–60%</div><div class="n">vs 65–68% modern mills</div></div>
      <div class="k"><div class="l">Demand</div><div class="v">~7.5M MT</div><div class="n">Growing at ~5% p.a.</div></div>
    </div>
  </div>
  <div class="vc-sec">
    <div class="c"><h2>Cost decomposition: paddy → delivered milled rice</h2>
      <table class="t"><thead><tr><th>Component</th><th>Current</th><th>Reformed</th><th>Lever</th></tr></thead><tbody>
        <tr><td>Paddy (farmgate)</td><td class="mono">$280–320/t</td><td class="mono">$220–260/t</td><td>Irrigated clusters + improved varieties</td></tr>
        <tr><td>Milling cost</td><td class="mono">$80–120/t</td><td class="mono">$50–70/t</td><td>Scale: 2–5 t/hr → 10+ t/hr mills</td></tr>
        <tr><td>Storage + finance</td><td class="mono">$40–60/t</td><td class="mono">$20–30/t</td><td>WRS + DFI finance at 12–15%</td></tr>
        <tr><td>Distribution</td><td class="mono">$30–40/t</td><td class="mono">$20–30/t</td><td>Direct-to-retail channels</td></tr>
        <tr style="background:var(--al)"><td><strong>Delivered (Lagos)</strong></td><td class="mono"><strong>$430–540/t</strong></td><td class="mono"><strong>$310–390/t</strong></td><td><strong>Competitive with Thai at $400–450/t</strong></td></tr>
      </tbody></table></div>
  </div>
  <div class="vc-sec">
    <div class="c"><h2>Demand analysis — domestic market only</h2>
      <table class="t"><thead><tr><th>Segment</th><th>Size</th><th>Preference</th><th>Verdict</th></tr></thead><tbody>
        <tr><td><strong>Urban consumers (Lagos)</strong></td><td>~30% of demand</td><td>Long-grain, clean, foreign</td><td><span class="p warn">QUALITY GAP</span></td></tr>
        <tr><td><strong>Urban consumers (North)</strong></td><td>~25% of demand</td><td>Local varieties OK</td><td><span class="p ok">ACCESSIBLE</span></td></tr>
        <tr><td><strong>Rural consumers</strong></td><td>~35% of demand</td><td>Price-driven</td><td><span class="p ok">PRICE WINS</span></td></tr>
        <tr><td><strong>Institutional</strong></td><td>~10% of demand</td><td>Bulk parboiled</td><td><span class="p ok">ACCESSIBLE</span></td></tr>
      </tbody></table></div>
  </div>
  <div class="vc-sec">
    <div class="c"><h2>Constraint map</h2>
      <div class="g6">
        <div class="nd"><span class="fl loss">LOSS</span><div class="h">1. Inputs</div><ul><li>Seed recycling</li><li>Fertilizer cost high</li><li>No irrigation scale</li></ul></div>
        <div class="nd"><span class="fl bind">BIND</span><div class="h">2. Production</div><ul><li>3–4 t/ha rainfed</li><li>Fragmented land</li><li>Northern insecurity</li></ul></div>
        <div class="nd"><span class="fl loss">LOSS</span><div class="h">3. Milling</div><ul><li>55–60% recovery</li><li>Broken grain high</li><li>Artisanal mills</li></ul></div>
        <div class="nd"><span class="fl loss">LOSS</span><div class="h">4. Storage</div><ul><li>Post-harvest 15–20%</li><li>No quality grading</li><li>Aflatoxin risk</li></ul></div>
        <div class="nd"><span class="fl bind">BIND</span><div class="h">5. Policy</div><ul><li>Import ban porous</li><li>Benin arbitrage</li><li>CBN interventions</li></ul></div>
        <div class="nd"><span class="fl loss">LOSS</span><div class="h">6. Market access</div><ul><li>Quality perception</li><li>Branding weak</li><li>No consistent supply</li></ul></div>
      </div></div>
  </div>
  <div class="vc-sec">
    <div class="c"><h2>Five projects</h2></div>
    <div class="c"><h3>1. Irrigated production clusters (3 sites) — $40–80M</h3>
      <ul><li>5,000–10,000ha per cluster in Kebbi, Niger, Ebonyi</li>
        <li>Target: 6–8 t/ha irrigated vs 3–4 t/ha rainfed</li></ul></div>
    <div class="c"><h3>2. Modern milling hubs (2–3 sites) — $20–40M</h3>
      <ul><li>10+ t/hr capacity; recovery 65–68%</li>
        <li>Co-located with production clusters</li></ul></div>
    <div class="c"><h3>3. Quality assurance + branding platform — $3–5M</h3>
      <ul><li>Grade standards, brand identity, quality marks</li></ul></div>
    <div class="c"><h3>4. WRS + trade finance — $15–25M</h3>
      <ul><li>Buffer stock mechanism; DFI-backed finance</li></ul></div>
    <div class="c"><h3>5. Border enforcement support — Policy</h3>
      <ul><li>Close the Benin arbitrage channel — or the investment case collapses</li></ul></div>
    <div class="kill"><div class="h">🛑 Abandon if</div>
      <ul><li>Benin arbitrage channel remains fully open</li>
        <li>Irrigated cluster yields stay below 5 t/ha after 2 seasons</li>
        <li>Northern insecurity prevents cluster operations</li></ul></div>
  </div>
  <div class="vc-sec">
    <div class="c"><h2>The honest assessment</h2>
      <ul><li><strong>Massive market potential</strong> — $800M import bill is the opportunity</li>
        <li class="amber"><strong>But the Benin problem is real</strong> — without effective border policy, domestic rice can't compete on price</li>
        <li><strong>Quality is the battle</strong> — Nigerian consumers who can afford it prefer imported rice</li></ul></div>
    <div class="ft">Sources: AFSTI Nigeria Rice Model v3 (Feb 2026); NCRI data; Olam/Thrive/AFEX interviews; Sofala Partners PEA</div>
  </div>`;
};

// ============================================================
// Zimbabwe Wheat — Complete Dashboard
// ============================================================
window.renderVC_wheat_zimbabwe = function () {
  return `
  <div class="c" style="border-left:4px solid var(--r)">
    <h2>Zimbabwe Wheat — Exhibit-style Fact Base</h2>
    <div style="font-size:11px;color:var(--mu);margin-bottom:8px">Limpopo · Updated Feb 2026</div>
    <div class="nav-tabs">
      <div class="tb vc-tb on" onclick="vcTab(0)">1) Thesis</div>
      <div class="tb vc-tb" onclick="vcTab(1)">2) Cost physics</div>
      <div class="tb vc-tb" onclick="vcTab(2)">3) Demand fit</div>
      <div class="tb vc-tb" onclick="vcTab(3)">4) Ecosystem map</div>
      <div class="tb vc-tb" onclick="vcTab(4)">5) Five projects</div>
      <div class="tb vc-tb" onclick="vcTab(5)">6) Players & tests</div>
    </div>
  </div>
  <div class="vc-sec on">
    <div class="c"><h2>Governing thought — "7× surge" needs reality check</h2>
      <div class="sig">
        <div class="s warn">⚠ Official: 380kt (2024)<span>Up from ~50kt in 2020 — 7× surge</span></div>
        <div class="s bad">✗ Private sector estimate: 180–220kt<span>George L: "The 380kt number is not real"</span></div>
        <div class="s bad">✗ GMB controls market<span>Late payments, discretionary licensing</span></div>
      </div>
      <ul><li><strong>Thesis:</strong> Zimbabwe can supply regional wheat (Moz, Zambia, SA)</li>
        <li><strong>Reality:</strong> Production surge is real but overstated; GMB is the binding constraint</li>
        <li><strong>Key risk:</strong> FX scarcity + GMB late payments erode farmer trust</li></ul></div>
    <div class="g4">
      <div class="k amber"><div class="l">Official production</div><div class="v">380kt</div><div class="n">Government figure (2024)</div></div>
      <div class="k red"><div class="l">Private estimate</div><div class="v">180–220kt</div><div class="n">"More realistic" — George L.</div></div>
      <div class="k"><div class="l">Domestic demand</div><div class="v">~450kt</div><div class="n">Still a net importer</div></div>
      <div class="k red"><div class="l">PE rating</div><div class="v">Amber–Red</div><div class="n">GMB + FX are structural</div></div>
    </div>
  </div>
  <div class="vc-sec">
    <div class="c"><h2>Cost decomposition</h2>
      <table class="t"><thead><tr><th>Component</th><th>Current</th><th>Benchmark (global)</th><th>Gap</th></tr></thead><tbody>
        <tr><td>Farmgate</td><td class="mono">$350–400/t</td><td class="mono">$240–280/t</td><td class="mono" style="color:var(--r)">+$110–120/t</td></tr>
        <tr><td>Irrigation cost</td><td class="mono">$80–120/t</td><td class="mono">$30–50/t</td><td class="mono" style="color:var(--r)">+$50–70/t</td></tr>
        <tr><td>Processing</td><td class="mono">$40–60/t</td><td class="mono">$30–40/t</td><td class="mono" style="color:var(--a)">+$10–20/t</td></tr>
        <tr><td>Finance (30%+)</td><td class="mono">$80–100/t</td><td class="mono">$15–25/t</td><td class="mono" style="color:var(--r)">+$65–75/t</td></tr>
        <tr style="background:var(--rl)"><td><strong>Delivered</strong></td><td class="mono"><strong>$550–680/t</strong></td><td class="mono"><strong>$315–395/t</strong></td><td class="mono" style="color:var(--r)"><strong>+$235–285/t premium</strong></td></tr>
      </tbody></table></div>
  </div>
  <div class="vc-sec">
    <div class="c"><h2>Demand — domestic first, regional conditional</h2>
      <table class="t"><thead><tr><th>Market</th><th>Size</th><th>ZW position</th><th>Verdict</th></tr></thead><tbody>
        <tr><td><strong>Domestic (ZW)</strong></td><td>~450kt/yr</td><td>Still importing</td><td><span class="p ok">PRIORITY</span></td></tr>
        <tr><td><strong>Mozambique</strong></td><td>~800kt imports</td><td>Beira corridor proximity</td><td><span class="p warn">CONDITIONAL</span></td></tr>
        <tr><td><strong>Zambia</strong></td><td>Import market</td><td>Overland possible</td><td><span class="p bad">UNLIKELY</span></td></tr>
      </tbody></table></div>
  </div>
  <div class="vc-sec">
    <div class="c"><h2>Constraint map</h2>
      <div class="g5">
        <div class="nd"><span class="fl bind">BIND</span><div class="h">1. GMB monopsony</div><ul><li>Late payments (6–12 mo)</li><li>Discretionary licensing</li><li>No alternative buyer</li></ul></div>
        <div class="nd"><span class="fl loss">LOSS</span><div class="h">2. Irrigation</div><ul><li>Dam capacity exists</li><li>Canals degraded</li><li>Energy unreliable</li></ul></div>
        <div class="nd"><span class="fl bind">BIND</span><div class="h">3. FX scarcity</div><ul><li>Import inputs in USD</li><li>Sell in ZWL</li><li>Margin compressed</li></ul></div>
        <div class="nd"><span class="fl loss">LOSS</span><div class="h">4. Data reliability</div><ul><li>Gov reports 380kt</li><li>Private: 180–220kt</li><li>Investment at risk</li></ul></div>
        <div class="nd"><span class="fl loss">LOSS</span><div class="h">5. Aggregation</div><ul><li>No private buyers</li><li>GMB only channel</li><li>Quality mixing</li></ul></div>
      </div></div>
  </div>
  <div class="vc-sec">
    <div class="c"><h2>Five projects — design around PE discretion</h2></div>
    <div class="c"><h3>1. Irrigation rehabilitation — $30–50M (Public)</h3>
      <ul><li>Canal rehab on existing dams (Lowveld, Midlands)</li>
        <li>Solar pumping to reduce energy dependency</li></ul></div>
    <div class="c"><h3>2. Private buyer channel via ZMX — $5–10M</h3>
      <ul><li>Commodity exchange trading to bypass GMB</li>
        <li>Requires regulatory reform</li></ul></div>
    <div class="c"><h3>3. Aggregation + quality control — $5–10M</h3>
      <ul><li>Independent grading, storage, quality certification</li></ul></div>
    <div class="c"><h3>4. Trade finance (USD-denominated) — $10–20M</h3></div>
    <div class="c"><h3>5. Beira corridor logistics — $5–10M</h3>
      <ul><li>Rail rehabilitation + border streamlining for Mozambique market</li></ul></div>
    <div class="kill"><div class="h">🛑 Abandon if</div>
      <ul><li>GMB refuses to allow private buyer channels</li>
        <li>FX gap widens beyond 30%</li>
        <li>Actual production confirmed below 150kt</li></ul></div>
  </div>
  <div class="vc-sec">
    <div class="c"><h2>The honest assessment</h2>
      <ul><li class="red"><strong>This is the highest PE-risk VC in the portfolio</strong></li>
        <li><strong>GMB is the binding constraint</strong> — not agronomy, not logistics</li>
        <li class="amber"><strong>Don't invest downstream</strong> until private buyer channels are operational</li>
        <li><strong>Data verification is critical</strong> — commission independent crop survey before committing capital</li></ul></div>
    <div class="ft">Sources: Zimbabwe Wheat Model (bear case, Feb 2026); George L. interview; ARDA data; Ministry of Lands; Sofala Partners PEA</div>
  </div>`;
};

// ============================================================
// Stub VCs (Poultry, Palm Oil, Beef)
// ============================================================
window.renderVC_poultry_limpopo = function () {
  return `
  <div class="c" style="border-left:4px solid var(--mu)"><h2>Poultry — Limpopo Corridor</h2>
    <div style="font-size:11px;color:var(--mu);margin-bottom:12px">Analysis in development · Field visits scheduled Feb 23–26</div>
    <div class="sig">
      <div class="s warn">⚠ Feed cost is the binding constraint<span>Soy meal from Zambia + maize from Tanzania</span></div>
      <div class="s ok">✓ Demand growth 4× by 2050<span>Africa's fastest-growing protein</span></div>
    </div></div>
  <div class="g3">
    <div class="k"><div class="l">Corridor countries</div><div class="v">MW, ZM, MZ</div><div class="n">Malawi, Zambia, Mozambique</div></div>
    <div class="k"><div class="l">Demand multiplier</div><div class="v">4×</div><div class="n">By 2050 (fastest growing)</div></div>
    <div class="k amber"><div class="l">Key dependency</div><div class="v">Feed cost</div><div class="n">Soy meal + maize from Lobito corridor</div></div>
  </div>
  <div class="c" style="margin-top:12px"><h3>Cross-corridor dependency</h3>
    <ul><li><strong>Zambia soy meal</strong> → feeds poultry in Malawi/Mozambique</li>
      <li><strong>Tanzania maize</strong> → feeds poultry in East Africa</li>
      <li><strong>This VC cannot be assessed independently</strong> — it depends on Lobito corridor outputs</li></ul></div>
  <div class="c"><p style="font-size:11px;color:var(--mu)">Full 6-tab analysis will be completed after Zambia/Tanzania field visits (Feb 17–21) and Limpopo corridor visits (Feb 23–26).</p></div>`;
};

window.renderVC_palm_oil = function () {
  return `
  <div class="c" style="border-left:4px solid var(--r)"><h2>Palm Oil — Abidjan–Lagos Corridor</h2>
    <div style="font-size:11px;color:var(--mu);margin-bottom:12px">Deprioritized · Weak investment case</div>
    <div class="sig">
      <div class="s bad">✗ SE Asia dominance<span>Indonesia/Malaysia: 85% global supply</span></div>
      <div class="s bad">✗ 20-year yield lag<span>Africa 2–4 t/ha vs SE Asia 15–20 t/ha</span></div>
    </div></div>
  <div class="g3">
    <div class="k red"><div class="l">Competitive position</div><div class="v">Weak</div><div class="n">20-year yield gap to close</div></div>
    <div class="k"><div class="l">Africa import bill</div><div class="v">$6B+</div><div class="n">Market exists but SE Asia owns it</div></div>
    <div class="k red"><div class="l">Recommendation</div><div class="v">DEPRIORITIZE</div><div class="n">Monitor only</div></div>
  </div>
  <div class="kill" style="margin-top:12px"><div class="h">Why deprioritized</div>
    <ul><li>SE Asia structural cost advantage — 15–20× African yield</li>
      <li>Capital-intensive (5–7 year payback on plantations)</li>
      <li>Environmental/land-use sensitivity</li>
      <li>Côte d'Ivoire is the only viable origin — and it's already losing to imports</li></ul></div>`;
};

window.renderVC_beef_limpopo = function () {
  return `
  <div class="c" style="border-left:4px solid var(--mu)"><h2>Beef & Livestock — Limpopo Corridor</h2>
    <div style="font-size:11px;color:var(--mu);margin-bottom:12px">Analysis in development · Early scoping phase</div>
    <div class="sig">
      <div class="s warn">⚠ SPS barriers constrain trade<span>Foot-and-mouth disease status limits access to SA market</span></div>
      <div class="s ok">✓ Demand structural<span>Protein demand growing across Southern Africa</span></div>
    </div></div>
  <div class="g3">
    <div class="k"><div class="l">Countries</div><div class="v">ZW, MZ, ZA</div><div class="n">Zimbabwe, Mozambique, South Africa</div></div>
    <div class="k amber"><div class="l">Key barrier</div><div class="v">SPS / FMD</div><div class="n">Disease status blocks SA market</div></div>
    <div class="k"><div class="l">Opportunity</div><div class="v">TBD</div><div class="n">Sizing in progress</div></div>
  </div>
  <div class="c" style="margin-top:12px"><p style="font-size:11px;color:var(--mu)">Full analysis pending. Beef value chain assessment will be developed after priority VCs (soya, maize, rice, wheat) are validated.</p></div>`;
};
