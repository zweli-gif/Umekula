// ============================================================
// AFSTI Dashboard — Data Layer
// All project data embedded as JS objects (no backend needed)
// ============================================================

const DATA = {
  project: {
    name: "Africa Food Systems and Trade Initiative",
    acronym: "AFSTI",
    value: "$1.46M",
    lead: "Baobab Impact × Dalberg Kenya",
    client: "AGRA",
    currentDate: "2026-02-18",
    phases: [
      { name: "Diagnostic", start: "2025-10-01", end: "2026-01-30", status: "complete" },
      { name: "Design", start: "2026-01-31", end: "2026-03-06", status: "current" },
      { name: "Implementation Planning", start: "2026-03-07", end: "2026-03-31", status: "upcoming" },
      { name: "Acceleration", start: "2026-04-01", end: "2026-06-30", status: "upcoming" }
    ],
    deliverables: [
      { name: "Baseline & Analytical Report", due: "2026-01-30", status: "Complete", pct: 100 },
      { name: "Draft Investment Cases (9–12)", due: "2026-03-06", status: "At Risk", pct: 45 },
      { name: "Validation Workshop Report", due: "2026-03-20", status: "On Track", pct: 15 },
      { name: "Final Investment Cases + Strategy", due: "2026-03-31", status: "On Track", pct: 5 }
    ],
    kpis: [
      { label: "Interviews completed", value: "25+", note: "Across 8 countries" },
      { label: "Investment cases drafted", value: "4", note: "of 9–12 target" },
      { label: "Total corridor opportunity", value: "$450M+", note: "Across 4 corridors" },
      { label: "Stakeholders engaged", value: "74+", note: "6 types mapped" }
    ],
    activity: [
      { text: "Field visit: Zambia (ETG, Alliance, Mt Meru) underway", date: "Feb 17", type: "gn" },
      { text: "Field visit: Tanzania (NMB, AGCOT, ALAF) underway", date: "Feb 17", type: "gn" },
      { text: "Zimbabwe wheat model updated — bear case strengthened", date: "Feb 15", type: "am" },
      { text: "Nigeria rice model v3 complete — import substitution framing", date: "Feb 12", type: "gn" },
      { text: "SteerCo call #4 completed — corridor prioritization approved", date: "Feb 10", type: "gn" },
      { text: "Zambia soya model recalibrated (Jan 2026 data)", date: "Feb 8", type: "gn" },
      { text: "Sofala Partners PEA report incorporated", date: "Feb 5", type: "am" },
      { text: "Tanzania maize — export ban risk flagged as structural", date: "Feb 3", type: "rd" },
      { text: "Palm oil — weak investment case, deprioritized", date: "Jan 30", type: "rd" },
      { text: "Baseline report delivered to AGRA", date: "Jan 30", type: "gn" }
    ]
  },

  corridors: [
    {
      id: "lobito", name: "Lobito & Upper Rift", color: "#1B5E20",
      countries: ["Tanzania", "Zambia", "Malawi", "DRC", "Angola"],
      valueChains: ["Maize", "Soya", "Poultry"],
      peaReadiness: "Amber–Green",
      investmentRange: "$240–440M",
      chokepoints: ["Export ban risk (Tanzania maize)", "Aggregation gaps across all VCs"]
    },
    {
      id: "limpopo", name: "Limpopo–Southern Africa", color: "#6A1B9A",
      countries: ["Zimbabwe", "Mozambique", "South Africa", "Botswana"],
      valueChains: ["Wheat", "Beef", "Poultry", "Feed"],
      peaReadiness: "Amber",
      investmentRange: "$100–200M",
      chokepoints: ["GMB monopsony (Zimbabwe)", "Beitbridge border delays"]
    },
    {
      id: "abidjan", name: "Abidjan–Lagos", color: "#E65100",
      countries: ["Côte d'Ivoire", "Nigeria", "Ghana", "Benin", "Togo", "Burkina Faso"],
      valueChains: ["Rice", "Palm Oil"],
      peaReadiness: "Amber",
      investmentRange: "$110–210M",
      chokepoints: ["Nigerian import ban (porous)", "Benin arbitrage channel"]
    },
    {
      id: "dakar", name: "Dakar–Lagos", color: "#00838F",
      countries: ["Overlaps Abidjan–Lagos (west)"],
      valueChains: ["Rice", "Maize"],
      peaReadiness: "Amber–Red",
      investmentRange: "TBD",
      chokepoints: ["ECOWAS instability", "Mali exclusion"]
    }
  ],

  matrix: {
    corridors: ["Lobito–Upper Rift", "Limpopo–Southern Africa", "Abidjan–Lagos", "Dakar–Lagos"],
    valueChains: ["Maize", "Soya", "Rice", "Wheat", "Poultry", "Palm Oil"],
    cells: [
      ["a","g","na","na","a","na"],
      ["na","na","na","a","r","na"],
      ["na","na","a","na","na","r"],
      ["a","na","a","na","na","na"]
    ],
    labels: [
      ["TZ","ZM","—","—","MW/ZM","—"],
      ["—","—","—","ZW","MW→MZ","—"],
      ["—","—","NG","—","—","CI"],
      ["TZ","—","NG","—","—","—"]
    ]
  },

  investmentCases: [
    { id:1, name:"Aggregation platform + WRS (Tanzania)", corridor:"Lobito–Upper Rift", vc:"Maize", size:"$15–25M", type:"Private + DFI", status:"Draft", confidence:"Medium", vcLink:"maize_tanzania" },
    { id:2, name:"Aggregation hubs (Zambia)", corridor:"Lobito–Upper Rift", vc:"Soya", size:"$15–25M", type:"Private + DFI", status:"Draft", confidence:"High", vcLink:"soya_zambia" },
    { id:3, name:"Crusher debottleneck (Zambia)", corridor:"Lobito–Upper Rift", vc:"Soya", size:"$10–20M", type:"Private", status:"Draft", confidence:"High", vcLink:"soya_zambia" },
    { id:4, name:"Meal anchor offtake (Malawi/DRC)", corridor:"Lobito–Upper Rift", vc:"Soya", size:"$5–10M", type:"Private", status:"Draft", confidence:"Medium", vcLink:"soya_zambia" },
    { id:5, name:"Trade finance facility", corridor:"Cross-corridor", vc:"Multi", size:"$25–30M", type:"DFI + banks", status:"Draft", confidence:"Medium", vcLink:null },
    { id:6, name:"Irrigated rice clusters (Nigeria)", corridor:"Abidjan–Lagos", vc:"Rice", size:"$40–80M", type:"Blended", status:"Draft", confidence:"Medium", vcLink:"rice_nigeria" },
    { id:7, name:"Milling hub scale-up (Nigeria)", corridor:"Abidjan–Lagos", vc:"Rice", size:"$20–40M", type:"Private/DFI", status:"Draft", confidence:"Medium", vcLink:"rice_nigeria" },
    { id:8, name:"Irrigation expansion (Zimbabwe)", corridor:"Limpopo", vc:"Wheat", size:"$30–50M", type:"Public", status:"Scoping", confidence:"Low", vcLink:"wheat_zimbabwe" },
    { id:9, name:"Feed + poultry integration", corridor:"Limpopo", vc:"Poultry", size:"TBD", type:"Private/DFI", status:"Scoping", confidence:"Low", vcLink:"poultry_limpopo" }
  ],

  peaCountries: [
    { name:"Tanzania", flag:"🇹🇿", production:"Amber–Green", trade:"Amber", peIncentives:"Amber–Green", overall:"Amber–Green",
      summary:"Reliable food system but unreliable regional partner. 5+ export bans make corridor planning impossible.",
      risks:["Export bans are electoral insurance","Sovereignty narrative deeply institutional"],
      approach:["Frame as domestic value-add first","Link to EAC trade obligations"] },
    { name:"Zambia", flag:"🇿🇲", production:"Amber–Green", trade:"Amber", peIncentives:"Amber–Green", overall:"Amber–Green",
      summary:"Strongest soya corridor candidate. Private sector investing. Policy risk moderate.",
      risks:["Blanket export bans during price spikes","Kwacha volatility"],
      approach:["Ring-fence soya from blanket bans","Build on Cargill/ETG momentum"] },
    { name:"Malawi", flag:"🇲🇼", production:"Amber–Green", trade:"Amber–Red", peIncentives:"Amber", overall:"Amber",
      summary:"Key demand sink for soy meal (poultry feed). Trade posture constrained.",
      risks:["FX scarcity limits imports","Poultry sector fragmented"],
      approach:["Position as buyer not seller","Anchor meal offtake contracts"] },
    { name:"Nigeria", flag:"🇳🇬", production:"Amber–Green", trade:"Amber–Red", peIncentives:"Amber–Red", overall:"Amber",
      summary:"Massive rice market ($800M+ imports) but import ban is porous and political.",
      risks:["Benin arbitrage undermines policy","Insecurity in northern basins"],
      approach:["Import substitution framing only","Work with state-level champions"] },
    { name:"Zimbabwe", flag:"🇿🇼", production:"Amber", trade:"Amber–Red", peIncentives:"Amber", overall:"Amber",
      summary:"Wheat production surge (7× in 4 years) but data reliability disputed and GMB controls market.",
      risks:["GMB late payments erode trust","FX scarcity constrains inputs"],
      approach:["Private buyer channels via ZMX","Document real vs reported production"] },
    { name:"Côte d'Ivoire", flag:"🇨🇮", production:"Amber–Green", trade:"Amber", peIncentives:"Amber–Green", overall:"Amber–Green",
      summary:"Palm oil and rice corridor anchor. Relatively stable trade environment.",
      risks:["Palm oil dominated by SE Asia","Regional integration uneven"],
      approach:["Leverage ECOWAS tariff structure","Focus on regional supply chains"] },
    { name:"Ghana", flag:"🇬🇭", production:"Amber–Green", trade:"Amber", peIncentives:"Amber", overall:"Amber",
      summary:"Rice import market (~700kt). Domestic production covers ~50%.",
      risks:["Import dependency","Currency pressures"],
      approach:["Position in Abidjan–Lagos corridor","Rice quality improvement"] },
    { name:"Burkina Faso", flag:"🇧🇫", production:"Amber–Red", trade:"Red", peIncentives:"Red", overall:"Amber–Red",
      summary:"Political instability and ECOWAS tensions limit corridor potential.",
      risks:["Military government","ECOWAS exit risk (Mali precedent)"],
      approach:["Monitor only — do not commit investment","Reassess if political stability returns"] },
    { name:"DRC", flag:"🇨🇩", production:"—", trade:"—", peIncentives:"—", overall:"Demand sink",
      summary:"Key demand sink for maize and soy meal. Growing protein deficit.",
      risks:["Counterparty risk","Cash-based transactions"],
      approach:["Off-take contracts via Lubumbashi corridor","Partner with existing processors (TMK, Midema)"] },
    { name:"Angola", flag:"🇦🇴", production:"—", trade:"—", peIncentives:"—", overall:"Demand sink",
      summary:"$58M soy oil + $219M palm oil imports. Key sink for Zambia corridor.",
      risks:["Self-sufficiency push (PlanaGrão)","Tariff structure favours crude"],
      approach:["Proximity advantage over seaborne","Focus on soy oil substitution"] },
    { name:"Mozambique", flag:"🇲🇿", production:"Amber", trade:"Amber", peIncentives:"Amber", overall:"Amber",
      summary:"Wheat import market (~800kt). Southern Africa corridor demand anchor.",
      risks:["Port infrastructure limitations","Northern insurgency spillover"],
      approach:["Beira corridor for Zimbabwe wheat","Link to Limpopo poultry feed chain"] },
    { name:"South Africa", flag:"🇿🇦", production:"Green", trade:"Green", peIncentives:"Green–Amber", overall:"Green–Amber",
      summary:"Most developed market. Benchmark competitor for corridor exports.",
      risks:["Poultry import tariffs","Regional competitiveness sets price floor"],
      approach:["Benchmark not target","Feed chain linkage (soy meal → poultry)"] }
  ],

  projections2050: {
    valueChains: [
      { name:"Maize", demandX:"1.8×", supplyX:"1.6×", gap:"Moderate", color:"gn" },
      { name:"Soya", demandX:"2–3×", supplyX:"Lagging", gap:"Large", color:"am" },
      { name:"Rice", demandX:"2×+", supplyX:"Depends on yield", gap:"Large", color:"am" },
      { name:"Wheat", demandX:"2×+", supplyX:"Constrained", gap:"Structural", color:"rd" },
      { name:"Poultry", demandX:"4×", supplyX:"Feed-limited", gap:"Very large", color:"rd" },
      { name:"Palm Oil", demandX:"3×", supplyX:"SE Asia dominant", gap:"Weak case", color:"rd" }
    ],
    scenarios: [
      { name:"Trade fragmentation", desc:"Tariffs, export bans, quotas increase across corridors", prob:"High (70%)", impact:"Strengthens proximity advantage but increases risk premium", color:"rd" },
      { name:"Fertilizer supply insecurity", desc:"Global supply disruptions raise input costs 30–50%", prob:"Medium (40%)", impact:"Favours low-input value chains; penalises wheat/rice", color:"am" },
      { name:"Shipping & freight disruptions", desc:"Red Sea/Suez disruptions raise ocean freight 2–3×", prob:"Medium (35%)", impact:"Strongly favours intra-African overland corridors", color:"am" },
      { name:"Energy market instability", desc:"Oil/gas volatility raises processing and transport costs", prob:"Medium (45%)", impact:"Solar-powered processing becomes competitive faster", color:"am" }
    ]
  },

  stakeholders: [
    { name:"ETG / Parrogate JV", org:"ETG", type:"Private Sector", corridor:"Lobito–Upper Rift", vc:"Soya", stage:5, lastContact:"Feb 17", priority:"High" },
    { name:"Alliance Ginneries", org:"Alliance", type:"Private Sector", corridor:"Lobito–Upper Rift", vc:"Soya", stage:5, lastContact:"Feb 17", priority:"High" },
    { name:"Mount Meru Group", org:"Mount Meru", type:"Private Sector", corridor:"Lobito–Upper Rift", vc:"Soya", stage:5, lastContact:"Feb 17", priority:"High" },
    { name:"Ministry of Agriculture (Zambia)", org:"Govt Zambia", type:"Government", corridor:"Lobito–Upper Rift", vc:"Multi", stage:5, lastContact:"Feb 17", priority:"High" },
    { name:"Zambia National Farmers Union", org:"ZNFU", type:"Private Sector", corridor:"Lobito–Upper Rift", vc:"Multi", stage:5, lastContact:"Feb 17", priority:"Medium" },
    { name:"NMB Bank Tanzania", org:"NMB", type:"DFI/Donor", corridor:"Lobito–Upper Rift", vc:"Maize", stage:5, lastContact:"Feb 17", priority:"Medium" },
    { name:"AGCOT", org:"AGCOT", type:"Private Sector", corridor:"Lobito–Upper Rift", vc:"Maize", stage:5, lastContact:"Feb 17", priority:"High" },
    { name:"ALAF Poultry", org:"ALAF", type:"Private Sector", corridor:"Lobito–Upper Rift", vc:"Poultry", stage:4, lastContact:"Feb 15", priority:"Medium" },
    { name:"AMDT", org:"AMDT", type:"Think Tank/Research", corridor:"Lobito–Upper Rift", vc:"Multi", stage:5, lastContact:"Feb 17", priority:"Medium" },
    { name:"Ministry of Agriculture (Tanzania)", org:"Govt Tanzania", type:"Government", corridor:"Lobito–Upper Rift", vc:"Maize", stage:5, lastContact:"Feb 17", priority:"High" },
    { name:"Ministry of Lands (Zimbabwe)", org:"Govt Zimbabwe", type:"Government", corridor:"Limpopo", vc:"Wheat", stage:4, lastContact:"Feb 10", priority:"High" },
    { name:"ARDA Zimbabwe", org:"ARDA", type:"Government", corridor:"Limpopo", vc:"Wheat", stage:4, lastContact:"Feb 10", priority:"High" },
    { name:"Bakhresa / Blue Ribbon", org:"Bakhresa", type:"Private Sector", corridor:"Limpopo", vc:"Wheat", stage:4, lastContact:"Feb 10", priority:"High" },
    { name:"Innscor Africa", org:"Innscor", type:"Private Sector", corridor:"Limpopo", vc:"Poultry", stage:4, lastContact:"Feb 10", priority:"High" },
    { name:"National Food Holdings", org:"NFH", type:"Private Sector", corridor:"Limpopo", vc:"Wheat", stage:4, lastContact:"Feb 10", priority:"Medium" },
    { name:"Thrive Agri (Nigeria)", org:"Thrive", type:"Private Sector", corridor:"Abidjan–Lagos", vc:"Rice", stage:3, lastContact:"Feb 5", priority:"High" },
    { name:"AFEX Nigeria", org:"AFEX", type:"Private Sector", corridor:"Abidjan–Lagos", vc:"Rice", stage:3, lastContact:"Feb 5", priority:"High" },
    { name:"Lagos Rice Mill", org:"LRM", type:"Private Sector", corridor:"Abidjan–Lagos", vc:"Rice", stage:3, lastContact:"Feb 3", priority:"Medium" },
    { name:"Rice Mills of Nigeria", org:"RMN", type:"Private Sector", corridor:"Abidjan–Lagos", vc:"Rice", stage:3, lastContact:"Feb 3", priority:"Medium" },
    { name:"Olam Agri Nigeria", org:"Olam", type:"Private Sector", corridor:"Abidjan–Lagos", vc:"Rice", stage:3, lastContact:"Feb 3", priority:"High" },
    { name:"RIFAN Nigeria", org:"RIFAN", type:"Private Sector", corridor:"Abidjan–Lagos", vc:"Rice", stage:2, lastContact:"Jan 28", priority:"Medium" },
    { name:"Grain Marketing Board (Zimbabwe)", org:"GMB", type:"Government", corridor:"Limpopo", vc:"Wheat", stage:4, lastContact:"Feb 10", priority:"Critical" },
    { name:"Zamanita (Cargill)", org:"Cargill", type:"Private Sector", corridor:"Lobito–Upper Rift", vc:"Soya", stage:5, lastContact:"Feb 8", priority:"High" },
    { name:"George Liacopoulos", org:"Consultant", type:"Think Tank/Research", corridor:"Cross-corridor", vc:"Soya", stage:6, lastContact:"Feb 2026", priority:"High" },
    { name:"Sofala Partners", org:"Sofala", type:"Think Tank/Research", corridor:"Cross-corridor", vc:"Multi", stage:6, lastContact:"Sep 2025", priority:"High" },
    { name:"Dr. Olurotimi Fashola (LASG)", org:"Lagos State", type:"Government", corridor:"Abidjan–Lagos", vc:"Rice", stage:5, lastContact:"Feb 2026", priority:"High" },
    { name:"Dangote Rice", org:"Dangote", type:"Private Sector", corridor:"Abidjan–Lagos", vc:"Rice", stage:3, lastContact:"Feb 1", priority:"High" },
    { name:"NCRI / AfricaRice", org:"NCRI", type:"Think Tank/Research", corridor:"Abidjan–Lagos", vc:"Rice", stage:2, lastContact:"Jan 20", priority:"Medium" },
    { name:"CBN / NIRSAL", org:"CBN", type:"DFI/Donor", corridor:"Abidjan–Lagos", vc:"Rice", stage:2, lastContact:"Jan 15", priority:"Medium" },
    { name:"Hello Tractor", org:"Hello Tractor", type:"Private Sector", corridor:"Abidjan–Lagos", vc:"Rice", stage:2, lastContact:"Jan 20", priority:"Medium" }
  ],

  fieldVisits: [
    { country:"Zambia", dates:"Feb 17–21", contacts:["ETG","Alliance Ginneries","Mount Meru","Ministry of Agriculture","ZNFU"], status:"Active" },
    { country:"Tanzania", dates:"Feb 17–21", contacts:["NMB","AGCOT","ALAF Poultry","AMDT","Ministry of Agriculture"], status:"Active" },
    { country:"Zimbabwe", dates:"Feb 23–26", contacts:["Ministry of Lands","ARDA","Bakhresa/Blue Ribbon","Innscor","National Food Holdings"], status:"Upcoming" },
    { country:"Nigeria", dates:"Feb 23–Mar 2", contacts:["Thrive Agri","AFEX","Lagos Rice Mill","Rice Mills of Nigeria","Olam Agri","RIFAN"], status:"Upcoming" }
  ]
};
