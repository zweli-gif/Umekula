// Corridor Map — Page 2
registerPage('corridors', function () {
  return `
<div class="hdr">
  <h1>Corridor Map</h1>
  <div class="sub">Four priority trade corridors across Sub-Saharan Africa</div>
</div>
<div class="wrap">

  <!-- Map -->
  <div class="c">
    <h2>Africa corridor overview</h2>
    <svg viewBox="0 0 600 650" class="map-svg" style="display:block;margin:0 auto;max-width:500px">
      <!-- Simplified Africa outline -->
      <path class="country" d="M200,50 L330,30 L380,60 L420,40 L460,80 L480,140 L500,200 L520,260 L540,300 L530,360 L510,400 L490,430 L470,460 L440,490 L410,520 L380,540 L350,560 L320,580 L290,590 L260,580 L230,560 L200,530 L180,500 L160,460 L140,420 L130,380 L120,340 L110,300 L100,260 L120,200 L140,160 L160,120 L180,80 Z" fill="#e8ede8" stroke="#fff" stroke-width="2"/>
      
      <!-- Corridor lines -->
      <line x1="220" y1="380" x2="360" y2="350" stroke="var(--g)" stroke-width="3" stroke-dasharray="6,3" opacity=".7"/>
      <text x="290" y="358" font-size="9" fill="var(--g)" font-weight="600">Lobito</text>
      
      <line x1="310" y1="450" x2="390" y2="520" stroke="var(--g3)" stroke-width="3" stroke-dasharray="6,3" opacity=".7"/>
      <text x="360" y="490" font-size="9" fill="var(--g3)" font-weight="600">Limpopo</text>
      
      <line x1="160" y1="250" x2="230" y2="260" stroke="var(--a)" stroke-width="3" stroke-dasharray="6,3" opacity=".7"/>
      <text x="180" y="240" font-size="9" fill="var(--a)" font-weight="600">Abidjan–Lagos</text>
      
      <line x1="350" y1="300" x2="380" y2="340" stroke="#42A5F5" stroke-width="3" stroke-dasharray="6,3" opacity=".7"/>
      <text x="360" y="310" font-size="9" fill="#42A5F5" font-weight="600">Upper Rift</text>
      
      <!-- Country markers -->
      <circle cx="280" cy="390" r="8" fill="var(--g)" opacity=".9"/><text x="280" y="393" text-anchor="middle" font-size="7" fill="#fff" font-weight="700">ZM</text>
      <circle cx="350" cy="350" r="8" fill="var(--a)" opacity=".9"/><text x="350" y="353" text-anchor="middle" font-size="7" fill="#fff" font-weight="700">TZ</text>
      <circle cx="210" cy="260" r="8" fill="var(--a)" opacity=".9"/><text x="210" y="263" text-anchor="middle" font-size="7" fill="#fff" font-weight="700">NG</text>
      <circle cx="370" cy="470" r="8" fill="var(--r)" opacity=".9"/><text x="370" y="473" text-anchor="middle" font-size="7" fill="#fff" font-weight="700">ZW</text>
      <circle cx="400" cy="500" r="8" fill="var(--g3)" opacity=".9"/><text x="400" y="503" text-anchor="middle" font-size="7" fill="#fff" font-weight="700">MZ</text>
      <circle cx="310" cy="420" r="8" fill="var(--g3)" opacity=".9"/><text x="310" y="423" text-anchor="middle" font-size="7" fill="#fff" font-weight="700">MW</text>
      <circle cx="160" cy="270" r="8" fill="var(--r)" opacity=".9"/><text x="160" y="273" text-anchor="middle" font-size="7" fill="#fff" font-weight="700">CI</text>
    </svg>
  </div>

  <!-- Corridor cards -->
  <div class="g2">
    <div class="c" style="border-left:4px solid var(--g)">
      <h3>Lobito–Upper Rift</h3>
      <div class="sig" style="margin:4px 0">
        <div class="s ok" style="padding:4px 8px;font-size:10px">✓ Primary corridor</div>
      </div>
      <ul>
        <li><strong>Countries:</strong> Zambia, Tanzania, DRC, Malawi, Angola</li>
        <li><strong>VCs:</strong> Soya (ZM), Maize (TZ), Poultry (MW)</li>
        <li><strong>Priority:</strong> <span class="p ok">HIGH</span></li>
      </ul>
    </div>
    <div class="c" style="border-left:4px solid var(--g3)">
      <h3>Limpopo–Southern Africa</h3>
      <div class="sig" style="margin:4px 0">
        <div class="s warn" style="padding:4px 8px;font-size:10px">⚠ PE risks prominent</div>
      </div>
      <ul>
        <li><strong>Countries:</strong> Zimbabwe, Mozambique, South Africa</li>
        <li><strong>VCs:</strong> Wheat (ZW), Beef (ZW/MZ), Poultry (MZ)</li>
        <li><strong>Priority:</strong> <span class="p warn">MEDIUM</span></li>
      </ul>
    </div>
    <div class="c" style="border-left:4px solid var(--a)">
      <h3>Abidjan–Lagos</h3>
      <div class="sig" style="margin:4px 0">
        <div class="s warn" style="padding:4px 8px;font-size:10px">⚠ Import substitution focus</div>
      </div>
      <ul>
        <li><strong>Countries:</strong> Côte d'Ivoire, Ghana, Nigeria</li>
        <li><strong>VCs:</strong> Rice (NG), Palm Oil (CI)</li>
        <li><strong>Priority:</strong> <span class="p warn">MEDIUM</span></li>
      </ul>
    </div>
    <div class="c" style="border-left:4px solid #42A5F5">
      <h3>Upper Rift / East Africa</h3>
      <div class="sig" style="margin:4px 0">
        <div class="s warn" style="padding:4px 8px;font-size:10px">⚠ Policy credibility needed</div>
      </div>
      <ul>
        <li><strong>Countries:</strong> Tanzania, Kenya, Uganda, DRC</li>
        <li><strong>VCs:</strong> Maize (TZ), linked to Lobito corridor outputs</li>
        <li><strong>Priority:</strong> <span class="p warn">CONDITIONAL</span></li>
      </ul>
    </div>
  </div>

  <!-- PEA readiness table -->
  <div class="c">
    <h2>Political Economy readiness by corridor</h2>
    <table class="t">
      <thead><tr><th>Corridor</th><th>Trade policy</th><th>FX stability</th><th>Institutional</th><th>Overall</th></tr></thead>
      <tbody>
        <tr><td><strong>Lobito–Upper Rift</strong></td><td>${ragPill('Green')}</td><td>${ragPill('Amber')}</td><td>${ragPill('Green')}</td><td>${ragPill('Green–Amber')}</td></tr>
        <tr><td><strong>Limpopo</strong></td><td>${ragPill('Amber')}</td><td>${ragPill('Red')}</td><td>${ragPill('Red')}</td><td>${ragPill('Amber–Red')}</td></tr>
        <tr><td><strong>Abidjan–Lagos</strong></td><td>${ragPill('Amber')}</td><td>${ragPill('Amber')}</td><td>${ragPill('Amber')}</td><td>${ragPill('Amber')}</td></tr>
        <tr><td><strong>Upper Rift</strong></td><td>${ragPill('Amber')}</td><td>${ragPill('Green')}</td><td>${ragPill('Amber')}</td><td>${ragPill('Amber')}</td></tr>
      </tbody>
    </table>
  </div>

</div>`;
});
