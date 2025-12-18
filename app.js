/* ==========================
       1) YOUR DATA MODEL (EDIT HERE)
       ========================== */

    const CATEGORIES = [
      "All",
      "Prediction Markets",
      "Politics",
      "Sports",
      "Culture",
      "Crypto",
      "Climate",
      "Economics",
      "Tomorrow's Paper",
      "Companies",
      "Financials",
      "Tech & Science",
      "Health",
      "World",
      "Caribbean",
      "OECS"
    ];

    // Confidence is 0 to 100.
    // status: "good" | "warn" | "bad" (drives the dot color).
    // due: ISO date string.
    // updated: ISO date string.
    // marketsLink is optional, used when category is Prediction Markets.
    const PREDICTIONS = [
      
       
      {
        id: "reach-oslo-scenario-weighted",
        category: "Financials",
        title: "REACH (Oslo Børs), scenario-weighted view, 3 to 6 month horizon",
        summary: "Q3 showed weaker revenue and EBIT year over year, with stable EBITDA margin, key focus is utilization normalization and investment-phase execution.",
        due: "2026-03-31",
        updated: "2025-12-13",
        confidence: 57,
        status: "warn",
        call: "Base case (45%): mixed execution and limited re-rating while utilization normalizes unevenly during the investment phase. Upside case (35%): utilization improves and ramp costs fade, supporting an EBIT rebound. Downside case (20%): idle time persists and ramp or commitment costs remain elevated, raising execution risk. Weight-shifters: evidence of utilization improvement and EBIT recovery shifts probability from A to B, repeat utilization weakness shifts probability from A to C.",
        band: "Medium",
        drivers: [
          "Q3 revenue and EBIT declined year over year, primary cited drivers included idle time and start-up or implementation costs.",
          "EBITDA margin remained high and broadly stable, suggesting core unit economics held even as utilization weakened.",
          "Liquidity and financing posture matter during the investment phase, key variable is whether utilization improves fast enough to offset ramp costs and commitments."
        ],
        assumptions: [
          "No abrupt sector-wide demand shock within the horizon.",
          "Next reporting provides clearer evidence on utilization and cost normalization versus persistence.",
          "Financing access remains steady while the investment phase continues."
        ],
        scenario_outlook: {
          horizon: "3-6 months",
          scenarios: [
            { id: "B", label: "SIDE. Operational normalization", weight: 0.35 },
            { id: "A", label: "UP. Mixed execution, limited re-rating", weight: 0.45 },
            { id: "C", label: "DOWN. Extended execution drag", weight: 0.20 }
          ]
        },

        sources: [
          { label: "Reach Subsea investor relations", url: "https://reachsubsea.no/investor-relations/" },
          { label: "Euronext Live, REACH (XOSL)", url: "https://live.euronext.com/en/product/equities/NO0010199151-XOSL" }
        ],
        tags: ["reach","oslo","xosl","subsea","offshore","scenario","probabilities"]
      },
      /* ============================
   TOMORROW'S PAPER, 10-STORY SLATE
   Horizon: 90 days (due: 2026-03-14)
   Updated: 2025-12-15
   ============================ */

{
  id: "tp-001-gaza-ceasefire-stress-test",
  category: "Tomorrow's Paper",
  tp_section: "War & Peace",
  tp_region: "Middle East",
  title: "Gaza ceasefire stress test: violations without collapse",
  summary: "Ceasefire persists on paper, but targeted incidents, aid throughput disputes, and hostage leverage keep producing recurring front-page moments.",
  due: "2026-03-14",
  updated: "2025-12-15",
  confidence: 66,
  status: "warn",
  band: "Medium",
  call: "Base case (60%): ceasefire holds but frays, producing repeated breach headlines. Escalation (25%): retaliation chain collapses the arrangement. De-escalation (15%): verified phase transition and sustained aid improvement reduce headline dominance.",
  drivers: [
    "Ceasefire compliance ambiguity and contested interpretation",
    "Aid throughput constraints and operational bottlenecks",
    "Hostage and phase-transition leverage dynamics",
    "International mediation intensity and enforcement posture",
    "Event-driven escalation risk from targeted incidents"
  ],
  assumptions: [
    "No single incident forces immediate and irreversible full-scale escalation",
    "Aid logistics remain imperfect and politically contested",
    "Major stakeholders continue to treat a formal ceasefire as preferable to open collapse"
  ],
  scenario_outlook: {
    horizon: "90 days",
    scenarios: [
      { id: "A", label: "BASE. Ceasefire holds, frays visibly", weight: 0.60 },
      { id: "B", label: "UP. Collapse into open fighting", weight: 0.25 },
      { id: "C", label: "DOWN. Phase transition stabilizes", weight: 0.15 }
    ]
  },
  sources: [
    { label: "GDELT, frontpage monitoring (topic tracking)", url: "https://www.gdeltproject.org/" },
    { label: "Media Cloud, topic clustering (optional)", url: "https://mediacloud.org/" },
    { label: "Primary and reputable news baselines", url: "https://www.reuters.com/" }
  ],
  tags: ["tomorrows-paper","war-peace","gaza","ceasefire","aid","hostages","90d","paths","headline-likelihood"],
  tp_story: {
    is_longform: true,
    headline_likelihood_pct: 85,
    headline_likelihood_basis: "Likelihood this remains a dominant world-news storyline across major Western outlets within 90 days.",
    base_case_sentence: "Most likely: ceasefire remains formally intact, but recurring violations, aid disputes, and hostage leverage create a repeating cycle of crisis moments.",
    lede: [
      "This storyline stays on the front page for a specific reason, it delivers continuity. A ceasefire is not a conclusion, it is a framework that produces repeated tests.",
      "In the next 90 days, the most probable state is not full peace, and not full collapse. It is the middle state, a ceasefire that remains nominally active while generating episodic incidents and political disputes that editors cannot ignore.",
      "Tomorrow’s Paper treats this as a headline-likelihood problem. The question is not whether the conflict ends. The question is whether it repeatedly generates top-tier headline moments. The answer is yes, under the base path."
    ].join("\n\n"),
    paths: [
      {
        id: "A",
        weight_pct: 60,
        headline_variant: "Ceasefire tested again as targeted incidents and aid disputes mount",
        one_liner: "Formal ceasefire persists, but repeated breach events and aid shortfalls keep the story at the top.",
        must_happen: [
          "Continued incidents framed as enforcement, counter-terror actions, or violations of terms",
          "Aid flow remains contested, delayed, or below publicly discussed targets",
          "Hostage and phase-transition conditions remain unresolved or only partially met"
        ],
        must_not_happen: [
          "A single mass-casualty escalation that forces abandonment of the ceasefire framework",
          "A fully verified phase transition with credible compliance monitoring and stable aid throughput"
        ],
        contributors: [
          "Ambiguous compliance language that allows competing narratives",
          "High political value in claiming enforcement rather than admitting collapse",
          "Aid logistics and security friction that produce recurring failure points"
        ],
        detractors: [
          "Sustained and verified improvement in aid throughput",
          "A concrete phase transition with clear verification and enforcement mechanisms"
        ],
        early_indicators: [
          "Repeated ‘ceasefire violation’ framing by parties and mediators",
          "Aid delivery disputes appearing repeatedly in top headlines",
          "Public friction around phase transition terms"
        ],
        policy_levers: [
          "Independent compliance monitoring and transparent incident adjudication reduce recurring breach headlines",
          "Guaranteeing minimum aid throughput with verifiable reporting reduces cyclical strain"
        ],
        disconfirmers: [
          "A sustained multi-week decline in incident reporting and breach claims",
          "A verified phase transition with measurable aid stabilization"
        ],
        counterfactual_box: "If the ceasefire had enforceable, independently verified compliance mechanisms plus guaranteed aid throughput that meets stated targets, the repeating ‘breach’ cycle would weaken and headline dominance would drop."
      },
      {
        id: "B",
        weight_pct: 25,
        headline_variant: "Ceasefire collapses after retaliation chain, open fighting resumes",
        one_liner: "A single catalytic event triggers retaliation, ending the ceasefire framework.",
        must_happen: [
          "A high-impact incident with clear attribution and public pressure to respond",
          "A retaliation chain that becomes declared policy rather than contained action"
        ],
        must_not_happen: [
          "Rapid mediation creating a face-saving off-ramp within 24 to 72 hours"
        ],
        contributors: [
          "High emotional temperature and short reaction windows",
          "Escalation incentives tied to internal politics and deterrence messaging"
        ],
        detractors: [
          "Strong, immediate mediation and enforcement of restraint",
          "Operational constraints that limit escalation"
        ],
        early_indicators: [
          "Multi-day consecutive strike cycles",
          "Large-scale evacuation orders and border closures",
          "Rapid collapse of aid coordination mechanisms"
        ],
        policy_levers: [
          "Pre-agreed de-escalation protocols and third-party enforcement channels reduce escalation probability"
        ],
        disconfirmers: [
          "Contained incidents followed by confirmed restraint and resumed aid"
        ],
        counterfactual_box: "A credible rapid-deconfliction protocol with third-party enforcement reduces the probability that one incident becomes an irreversible retaliation chain."
      },
      {
        id: "C",
        weight_pct: 15,
        headline_variant: "Phase transition proceeds, aid stabilizes, headline intensity declines",
        one_liner: "Verified phase transition plus steady aid throughput turns the story from crisis to process.",
        must_happen: [
          "A monitored phase transition is implemented with compliance verification",
          "Aid throughput stabilizes and becomes reliably measurable",
          "Hostage and security terms move forward in a structured sequence"
        ],
        must_not_happen: [
          "A major breach event that resets trust and reverses the transition"
        ],
        contributors: [
          "Credible monitoring and transparent reporting",
          "Aligned incentives for stakeholders to maintain formal stability"
        ],
        detractors: [
          "Spoiler incentives and tactical shocks"
        ],
        early_indicators: [
          "Consistent weekly improvement in reported aid deliveries",
          "Fewer high-profile breach headlines",
          "Public confirmation of transition milestones"
        ],
        policy_levers: [
          "Operational transparency and independent reporting to prevent narrative drift"
        ],
        disconfirmers: [
          "Any sustained reversal in aid stability or compliance claims"
        ],
        counterfactual_box: "When verification becomes routine and aid becomes stable, editors lose recurring ‘breach’ events, and front-page dominance declines."
      }
    ],
    triggers: {
      increase_headline_likelihood: [
        "A high-profile targeted strike or leadership death framed as a ceasefire breach",
        "Aid delivery disruptions becoming persistent and measurable",
        "Public disputes over phase transition conditions intensifying"
      ],
      decrease_headline_likelihood: [
        "A sustained period of lower incident frequency and fewer breach claims",
        "Verified improvement in aid throughput, week over week",
        "Clear and enforced phase-transition milestones"
      ],
      shift_weights: {
        toward_A: [
          "Recurring incidents continue but remain contained, ceasefire persists formally"
        ],
        toward_B: [
          "Multi-day retaliation chain, high-casualty incident, broad evacuations"
        ],
        toward_C: [
          "Verified phase transition plus sustained aid stabilization over multiple weeks"
        ]
      }
    },
    audit_log: [
      {
        ts: "2025-12-15T10:00:00-04:00",
        source_label: "Baseline build, synthesis of major outlet continuity patterns",
        source_url: "https://www.gdeltproject.org/",
        signal: "Continuity and escalation risk remain elevated",
        observation: "Ceasefire framing produces repeated high-salience breach moments even without full collapse.",
        assessment: "Set Path A as most likely while keeping Path B non-trivial given catalytic risk.",
        weight_delta: { headline_likelihood_delta: 0, path_weight_deltas: { A: 0, B: 0, C: 0 } },
        confidence_delta: 0
      }
    ]
  }
},

{
  id: "tp-002-ukraine-framework-donbas-hinge",
  category: "Tomorrow's Paper",
  tp_section: "War & Peace",
  tp_region: "Europe",
  title: "Ukraine peace framework goes public, Donbas becomes the hinge",
  summary: "Peace terms become more explicit, but security guarantees and territorial risk keep negotiations high friction and headline-rich.",
  due: "2026-03-14",
  updated: "2025-12-15",
  confidence: 64,
  status: "warn",
  band: "Medium",
  call: "Base case (55%): framework talk intensifies, terms remain contested. Escalation (25%): negotiations coincide with intensified conflict. Breakthrough (20%): monitored ceasefire path becomes real.",
  drivers: [
    "Security guarantees as the core bottleneck",
    "Territorial and deterrence credibility constraints",
    "EU and US positioning and long-horizon threat framing",
    "Sanctions, asset policy, and reconstruction economics"
  ],
  assumptions: [
    "No decisive battlefield shock that ends negotiations by force",
    "Stakeholders continue to pursue a public framework even if privately pessimistic"
  ],
  scenario_outlook: {
    horizon: "90 days",
    scenarios: [
      { id: "A", label: "BASE. Terms public, contested guarantees", weight: 0.55 },
      { id: "B", label: "UP. Conflict intensity rises", weight: 0.25 },
      { id: "C", label: "DOWN. Monitored ceasefire path", weight: 0.20 }
    ]
  },
  sources: [
    { label: "GDELT, topic timeline monitoring", url: "https://blog.gdeltproject.org/gdelt-2-0-our-global-world-in-realtime/" },
    { label: "Media Cloud, topic clustering", url: "https://mediacloud.org/" },
    { label: "Primary and reputable news baselines", url: "https://www.reuters.com/" }
  ],
  tags: ["tomorrows-paper","war-peace","ukraine","russia","donbas","security-guarantees","90d","headline-likelihood"],
  tp_story: {
    is_longform: true,
    headline_likelihood_pct: 80,
    headline_likelihood_basis: "Likelihood this becomes a dominant world-news storyline across major Western outlets within 90 days.",
    base_case_sentence: "Most likely: peace framework terms become more explicit, but security guarantees and territorial risks keep negotiations contested and headline-generating.",
    lede: [
      "This story stays prominent because it produces structured conflict between words and reality. Framework talk can intensify without producing resolution, and that gap creates repeated headline moments.",
      "The hinge is simple: territorial risk and security guarantees. If guarantees are inadequate, terms are politically impossible. If guarantees are strong, implementation becomes difficult. This tension keeps the story in the paper.",
      "Tomorrow’s Paper treats this as a sequence of visible branch points: public proposals, reactions, military intensity, and financial war measures that keep re-entering the story stream."
    ].join("\n\n"),
    paths: [
      {
        id: "A",
        weight_pct: 55,
        headline_variant: "Peace proposal details emerge, security guarantees remain the sticking point",
        one_liner: "Talk intensifies and terms become explicit, but guarantees remain unresolved and the story persists.",
        must_happen: [
          "Continued public discussion of terms and conditions",
          "Ongoing debate about enforceable guarantees and deterrence",
          "Financial war layer stays active through sanctions and asset policy discourse"
        ],
        must_not_happen: [
          "A binding security arrangement that satisfies Ukraine quickly",
          "A decisive battlefield shift that makes negotiations irrelevant"
        ],
        contributors: [
          "Guarantee ambiguity fuels repeated political statements and reactions",
          "Multiple stakeholders amplify the story across regions and sections"
        ],
        detractors: [
          "Competing global crises that crowd out coverage",
          "Long stretches without new proposals or visible movement"
        ],
        early_indicators: [
          "More explicit language about buffers, monitoring, and enforcement",
          "Rhetoric about asset use, sanctions tightening, or reconstruction funding"
        ],
        policy_levers: [
          "Credible monitoring and enforcement proposals increase likelihood of Path C over time",
          "Transparent definition of guarantees reduces ‘proposal whiplash’ headlines"
        ],
        disconfirmers: [
          "A multi-week absence of proposal-related public statements",
          "Clear shift of coverage to a different dominant crisis"
        ],
        counterfactual_box: "If credible, enforceable security guarantees were already designed and accepted, most headlines would collapse into implementation details and the story would drop in prominence."
      },
      {
        id: "B",
        weight_pct: 25,
        headline_variant: "Negotiations continue as conflict intensity rises, stakes harden",
        one_liner: "Talk continues, but military escalation hardens positions and keeps the story urgent.",
        must_happen: [
          "A visible increase in strike intensity or mobilization posture",
          "Public positioning that ties negotiations to battlefield momentum"
        ],
        must_not_happen: [
          "Fast mediation producing a stable monitored de-escalation mechanism"
        ],
        contributors: [
          "Escalation incentives and bargaining leverage dynamics",
          "Security fears amplify editorial urgency"
        ],
        detractors: [
          "Operational constraints limiting escalation",
          "Rapidly accepted ceasefire monitoring"
        ],
        early_indicators: [
          "Emergency posture messaging",
          "New sanctions announcements timed with escalatory events"
        ],
        policy_levers: [
          "Pre-agreed deconfliction channels reduce escalation probability"
        ],
        disconfirmers: [
          "Sustained decline in military intensity metrics and rhetoric"
        ],
        counterfactual_box: "When escalation is contained and monitored, the ‘urgent war’ framing weakens and the story shifts from crisis to process."
      },
      {
        id: "C",
        weight_pct: 20,
        headline_variant: "A monitored ceasefire path becomes real, framework narrows to implementation",
        one_liner: "A monitored ceasefire and credible enforcement shift the storyline toward execution.",
        must_happen: [
          "Agreement on monitoring and compliance verification",
          "A credible enforcement channel that addresses ‘advance after withdrawal’ fears",
          "Initial reconstruction and compliance incentives become tangible"
        ],
        must_not_happen: [
          "A major breach event that resets trust"
        ],
        contributors: [
          "Verification and enforcement reduce ambiguity",
          "Economic incentives align stakeholders"
        ],
        detractors: [
          "Spoiler events and internal political resistance"
        ],
        early_indicators: [
          "Specific details on monitoring, enforcement, and sequencing",
          "Reduction in rhetorical maximalism"
        ],
        policy_levers: [
          "Concrete monitoring architecture and economic sequencing increase probability of stabilization"
        ],
        disconfirmers: [
          "Failure to specify enforceable guarantees over multiple cycles"
        ],
        counterfactual_box: "A credible monitored mechanism is the difference between endless framework headlines and a story that transitions to implementation."
      }
    ],
    triggers: {
      increase_headline_likelihood: [
        "Public release of peace terms with immediate high-level reactions",
        "New sanctions or asset policy moves tied to negotiation posture",
        "Visible shift in military intensity while talks continue"
      ],
      decrease_headline_likelihood: [
        "Extended absence of new statements or developments",
        "Competing major crises displacing world-news attention"
      ],
      shift_weights: {
        toward_A: [
          "Terms discussed openly but guarantees remain unresolved, coverage cycles continue"
        ],
        toward_B: [
          "Escalation events coincide with negotiation statements and tighten rhetoric"
        ],
        toward_C: [
          "Monitoring and enforcement architecture is announced and accepted"
        ]
      }
    },
    audit_log: [
      {
        ts: "2025-12-15T10:05:00-04:00",
        source_label: "Baseline build, continuity and elite-actor framing",
        source_url: "https://www.gdeltproject.org/",
        signal: "High continuity and high-stakes diplomacy structure",
        observation: "Security guarantees remain the central friction point, sustaining repeated headline moments.",
        assessment: "Set Path A dominant, maintain B due to escalation risk, keep C meaningful but lower.",
        weight_delta: { headline_likelihood_delta: 0, path_weight_deltas: { A: 0, B: 0, C: 0 } },
        confidence_delta: 0
      }
    ]
  }
},

{
  id: "tp-003-fed-cuts-pause-pressure",
  category: "Tomorrow's Paper",
  tp_section: "Money",
  tp_region: "US",
  title: "Fed cuts, then signals caution, markets reprice the 2026 path",
  summary: "After a rate-cut sequence, the story becomes pace and pause, plus political pressure and internal committee division.",
  due: "2026-03-14",
  updated: "2025-12-15",
  confidence: 68,
  status: "warn",
  band: "Medium",
  call: "Base case (60%): cut then pause language dominates, markets reprice slowly. Downside growth shock (25%): labor weakens and easing accelerates. Inflation bite-back (15%): shocks force caution or reversal.",
  drivers: [
    "Data ambiguity, inflation not collapsing, labor not collapsing",
    "Committee division and dissent narratives",
    "Political pressure and leadership succession chatter",
    "Market-implied rate path and risk asset repricing"
  ],
  assumptions: [
    "No immediate hard recession shock forces emergency easing",
    "No sudden inflation spike forces abrupt hawkish reversal"
  ],
  scenario_outlook: {
    horizon: "90 days",
    scenarios: [
      { id: "A", label: "BASE. Cut then pause, markets reprice", weight: 0.60 },
      { id: "B", label: "UP. Faster easing on growth shock", weight: 0.25 },
      { id: "C", label: "DOWN. Inflation bite-back", weight: 0.15 }
    ]
  },
  sources: [
    { label: "GDELT, business topic monitoring", url: "https://blog.gdeltproject.org/gdelt-2-0-our-global-world-in-realtime/" },
    { label: "NYT Top Stories API (baseline editorial structure)", url: "https://developer.nytimes.com/docs/top-stories-product/1/overview" },
    { label: "Primary and reputable news baselines", url: "https://www.reuters.com/" }
  ],
  tags: ["tomorrows-paper","money","fed","rates","markets","inflation","labor","politics","90d","headline-likelihood"],
  tp_story: {
    is_longform: true,
    headline_likelihood_pct: 78,
    headline_likelihood_basis: "Likelihood this becomes a dominant business and politics storyline across major Western outlets within 90 days.",
    base_case_sentence: "Most likely: the Fed shifts from cutting to cautious pause language, and markets debate whether growth fragility demands more easing or whether inflation risk still binds.",
    lede: [
      "For the next 90 days, the Fed story is less about the last cut and more about what the central bank signals after it reaches a contested ‘near neutral’ zone.",
      "Once you have a cut sequence, uncertainty shifts to timing and pace, and uncertainty is media fuel. Layer political pressure on top, and it becomes front-page material well beyond the business section.",
      "Tomorrow’s Paper frames this as headline likelihood. The Fed becomes dominant when ambiguity is high, committee unity is low, and markets are repricing in real time."
    ].join("\n\n"),
    paths: [
      {
        id: "A",
        weight_pct: 60,
        headline_variant: "Fed signals patience, markets debate next move",
        one_liner: "Pause language dominates, markets reprice gradually as the committee tries to hold credibility under pressure.",
        must_happen: [
          "Macro data stays mixed enough to justify ‘wait and see’ communication",
          "The committee continues to show uncertainty or non-unity",
          "Markets keep debating the 2026 path rather than settling into one narrative"
        ],
        must_not_happen: [
          "A sharp inflation rebound that forces hawkish reversal quickly",
          "A sharp labor break that forces emergency easing"
        ],
        contributors: [
          "Ambiguity and dissent sustain coverage",
          "Rates affect mortgages, jobs, and markets, keeping the story broadly relevant",
          "Political pressure adds conflict and stakes"
        ],
        detractors: [
          "A clean, monotonic macro trend that removes ambiguity",
          "A bigger external crisis displacing business attention"
        ],
        early_indicators: [
          "‘Pause’ language frequency increases in Fed coverage and speech snippets",
          "Market implied path volatility spikes around meetings and data prints"
        ],
        policy_levers: [
          "Clear communication and unity reduce headline dominance by reducing uncertainty",
          "Transparency about reaction function lowers ‘shock’ repricing events"
        ],
        disconfirmers: [
          "Committee becomes visibly unified and data becomes cleanly directional"
        ],
        counterfactual_box: "If the committee were unified and the inflation and labor paths were clean, this would fall below the fold. Division and ambiguity are the oxygen."
      },
      {
        id: "B",
        weight_pct: 25,
        headline_variant: "Weak labor forces faster cuts, markets shift to downturn framing",
        one_liner: "Labor weakness and tightening credit conditions push the Fed into faster easing and dominate headlines.",
        must_happen: [
          "Employment indicators weaken materially",
          "Credit stress or earnings guidance turns defensive"
        ],
        must_not_happen: [
          "Inflation resurgence that prevents faster easing"
        ],
        contributors: [
          "Recession fear narratives spread rapidly across outlets"
        ],
        detractors: [
          "Strong consumption and stable job creation"
        ],
        early_indicators: [
          "Unemployment and claims surprise upward",
          "Emergency liquidity headlines or credit spread widening"
        ],
        policy_levers: [
          "Stabilizing credit channels reduces need for rapid easing"
        ],
        disconfirmers: [
          "Labor data remains resilient across multiple releases"
        ],
        counterfactual_box: "This path weakens if labor remains steady and credit stress does not propagate."
      },
      {
        id: "C",
        weight_pct: 15,
        headline_variant: "Inflation re-accelerates, Fed turns cautious or hints at reversal",
        one_liner: "An inflation impulse forces more restrictive signaling, challenging the ‘cuts are done’ narrative.",
        must_happen: [
          "A new inflation impulse becomes salient, energy, supply shocks, tariffs, or services re-acceleration",
          "Fed communication pivots to inflation risk management"
        ],
        must_not_happen: [
          "Rapid disinflation that makes inflation fears non-credible"
        ],
        contributors: [
          "Energy and price-shock narratives connect to voters and politics"
        ],
        detractors: [
          "Stable energy prices and continued disinflation"
        ],
        early_indicators: [
          "Inflation surprises to the upside",
          "Energy price spikes sustained over weeks"
        ],
        policy_levers: [
          "Supply-side stability and careful tariff policy reduce risk of this path"
        ],
        disconfirmers: [
          "Inflation prints remain consistently benign"
        ],
        counterfactual_box: "When inflation remains stable and energy stays calm, this path loses force quickly."
      }
    ],
    triggers: {
      increase_headline_likelihood: [
        "Unusual dissent or visible committee division becomes a recurring feature",
        "Political pressure escalates publicly, including leadership succession chatter",
        "Markets show elevated repricing volatility around meetings"
      ],
      decrease_headline_likelihood: [
        "Fed communication becomes unified and macro data becomes cleanly directional",
        "Another dominant crisis displaces money coverage"
      ],
      shift_weights: {
        toward_A: [
          "Mixed data plus pause language, no major shock"
        ],
        toward_B: [
          "Labor weakness and credit stress propagate"
        ],
        toward_C: [
          "Inflation impulse becomes salient and persistent"
        ]
      }
    },
    audit_log: [
      {
        ts: "2025-12-15T10:10:00-04:00",
        source_label: "Baseline build, macro ambiguity and editorial continuity",
        source_url: "https://www.gdeltproject.org/",
        signal: "High relevance, high continuity, high elite conflict",
        observation: "Rates sit at the intersection of markets, mortgages, and politics, making this story resilient in front-page business coverage.",
        assessment: "Set Path A dominant while maintaining B and C as tail risks that can shift quickly with data.",
        weight_delta: { headline_likelihood_delta: 0, path_weight_deltas: { A: 0, B: 0, C: 0 } },
        confidence_delta: 0
      }
    ]
  }
},

{
  id: "tp-004-gaza-reconstruction-governance-fight",
  category: "Tomorrow's Paper",
  tp_section: "Meta",
  tp_region: "Middle East",
  title: "Reconstruction becomes a governance fight, contractors and legitimacy collide",
  summary: "Even under ceasefire conditions, reconstruction planning becomes a political economy battle over authority, funding control, and legitimacy.",
  due: "2026-03-14",
  updated: "2025-12-15",
  confidence: 56,
  status: "warn",
  band: "Wide",
  call: "Base case: reconstruction debates intensify without clear governance settlement. Upside: credible governance framework reduces conflict. Downside: governance vacuum fuels instability and delays.",
  drivers: [
    "Who controls reconstruction money and contracts",
    "Governance legitimacy and security control disputes",
    "Donor conditions and verification demands"
  ],
  assumptions: [
    "Reconstruction is treated as a political question, not merely engineering"
  ],
  scenario_outlook: {
    horizon: "90 days",
    scenarios: [
      { id: "A", label: "BASE. Governance fight dominates", weight: 0.55 },
      { id: "B", label: "UP. Framework emerges", weight: 0.25 },
      { id: "C", label: "DOWN. Vacuum delays and destabilizes", weight: 0.20 }
    ]
  },
  sources: [
    { label: "GDELT, frontpage monitoring", url: "https://www.gdeltproject.org/" }
  ],
  tags: ["tomorrows-paper","meta","reconstruction","governance","contracts","aid","90d"],
  tp_story: {
    is_longform: false,
    headline_likelihood_pct: 45,
    headline_likelihood_basis: "Likelihood this becomes a recurring front-page explanatory storyline within 90 days.",
    base_case_sentence: "Most likely: reconstruction planning becomes a proxy war over governance and legitimacy, generating recurring headlines without fast resolution.",
    paths: [
      {
        id: "A",
        weight_pct: 55,
        headline_variant: "Donors demand conditions as governance dispute blocks reconstruction",
        one_liner: "Money and legitimacy collide, progress is slow, headlines persist.",
        must_happen: ["Governance authority remains contested", "Donor conditions and verification remain strict"],
        must_not_happen: ["A credible governance settlement accepted by key stakeholders"],
        contributors: ["Contract awards and control of funds are political leverage"],
        detractors: ["Unified governance and transparent mechanisms"],
        early_indicators: ["Donor conditionality headlines", "Contracting controversies"],
        disconfirmers: ["Clear governance mechanism implemented"]
      },
      {
        id: "B",
        weight_pct: 25,
        headline_variant: "Governance framework announced, reconstruction accelerates",
        one_liner: "A workable framework reduces uncertainty, headlines cool.",
        must_happen: ["Transparent governance mechanism emerges"],
        must_not_happen: ["Spoiler incidents that collapse trust"],
        contributors: ["Strong verification and enforcement"],
        detractors: ["Legitimacy disputes"],
        early_indicators: ["Joint announcements with verification"],
        disconfirmers: ["Framework stalls"]
      },
      {
        id: "C",
        weight_pct: 20,
        headline_variant: "Vacuum and instability delay reconstruction, costs rise",
        one_liner: "Delays and instability create an ongoing crisis narrative.",
        must_happen: ["Security incidents disrupt implementation", "Funding disbursement slows"],
        must_not_happen: ["Stable security and governance"],
        contributors: ["Vacuum incentives"],
        detractors: ["Stable enforcement"],
        early_indicators: ["Repeated delay statements"],
        disconfirmers: ["Stable implementation begins"]
      }
    ],
    triggers: {
      increase_headline_likelihood: ["High-profile donor dispute or contracting scandal"],
      decrease_headline_likelihood: ["Stable framework plus measurable progress"],
      shift_weights: { toward_A: ["No governance settlement"], toward_B: ["Framework and verification"], toward_C: ["Instability and delays"] }
    },
    audit_log: []
  }
},

{
  id: "tp-005-ai-capex-nerves-bubble-language",
  category: "Tomorrow's Paper",
  tp_section: "Tech & AI",
  tp_region: "Global",
  title: "AI spending shock meets investor nerves, bubble language returns",
  summary: "Capex headlines and uneven monetization revive the debate: productivity engine or overheated cycle.",
  due: "2026-03-14",
  updated: "2025-12-15",
  confidence: 58,
  status: "warn",
  band: "Wide",
  call: "Base case: recurring volatility and commentary as capex meets monetization uncertainty. Upside: clear ROI stories stabilize sentiment. Downside: a major earnings disappointment triggers broader de-rating.",
  drivers: [
    "AI infrastructure capex scale and timing",
    "Monetization clarity and unit economics",
    "Regulatory and IP uncertainty",
    "Investor risk appetite"
  ],
  assumptions: [
    "AI remains a dominant narrative topic in major tech and business coverage"
  ],
  scenario_outlook: {
    horizon: "90 days",
    scenarios: [
      { id: "A", label: "BASE. Volatile, debate persists", weight: 0.52 },
      { id: "B", label: "UP. ROI clarity calms nerves", weight: 0.28 },
      { id: "C", label: "DOWN. De-rating event", weight: 0.20 }
    ]
  },
  sources: [
    { label: "GDELT, tech topic monitoring", url: "https://www.gdeltproject.org/" }
  ],
  tags: ["tomorrows-paper","tech","ai","capex","markets","ip","90d"],
  tp_story: {
    is_longform: false,
    headline_likelihood_pct: 62,
    headline_likelihood_basis: "Likelihood this becomes a dominant tech and business storyline within 90 days.",
    base_case_sentence: "Most likely: AI stays top-of-mind, but capex scale and uneven monetization keep producing volatility and ‘bubble’ framing cycles.",
    paths: [
      {
        id: "A",
        weight_pct: 52,
        headline_variant: "AI capex rises, monetization still uneven, volatility persists",
        one_liner: "Debate continues, no decisive answer, repeated headlines.",
        must_happen: ["Large capex headlines continue", "Revenue stories remain mixed"],
        must_not_happen: ["Clear across-the-board monetization proof"],
        contributors: ["Magnitude of spending", "Narrative competition"],
        detractors: ["Stable ROI evidence"],
        early_indicators: ["Capex guidance surprises", "Mixed earnings reactions"],
        disconfirmers: ["Monetization clarity becomes dominant"]
      },
      {
        id: "B",
        weight_pct: 28,
        headline_variant: "AI ROI becomes visible, investor tone stabilizes",
        one_liner: "Clear productivity and revenue evidence calms bubble talk.",
        must_happen: ["Strong adoption and revenue proof points"],
        must_not_happen: ["Regulatory or IP shock"],
        contributors: ["Enterprise deals", "Productivity validation"],
        detractors: ["Skepticism cycles"],
        early_indicators: ["Guidance upgrades tied to AI"],
        disconfirmers: ["ROI remains anecdotal"]
      },
      {
        id: "C",
        weight_pct: 20,
        headline_variant: "Major miss triggers broader AI de-rating",
        one_liner: "A high-profile disappointment resets expectations.",
        must_happen: ["A major earnings miss tied to AI spend or weak demand"],
        must_not_happen: ["Quick offsetting positive surprise"],
        contributors: ["Crowded positioning", "Risk-off shift"],
        detractors: ["Rapid rebound in sentiment"],
        early_indicators: ["Negative guidance tone", "Multiple compression"],
        disconfirmers: ["Markets absorb misses easily"]
      }
    ],
    triggers: {
      increase_headline_likelihood: ["High-profile capex surprise or earnings shock tied to AI"],
      decrease_headline_likelihood: ["Quiet earnings season with consistent ROI stories"],
      shift_weights: { toward_A: ["Mixed results"], toward_B: ["Clear ROI"], toward_C: ["De-rating catalyst"] }
    },
    audit_log: []
  }
},

{
  id: "tp-006-generative-video-ip-licensing-template",
  category: "Tomorrow's Paper",
  tp_section: "Tech & AI",
  tp_region: "US, EU",
  title: "IP licensing deals define the next phase of generative video",
  summary: "Studios and rights holders push licensing templates, shaping what generative video can legally become.",
  due: "2026-03-14",
  updated: "2025-12-15",
  confidence: 54,
  status: "good",
  band: "Wide",
  call: "Base case: licensing templates spread and define norms. Upside: broad licensing reduces litigation risk. Downside: legal conflict escalates and fragments the market.",
  drivers: [
    "Rights holder bargaining power",
    "Regulatory and court signals",
    "Platform demand for legally safe datasets",
    "Creator backlash and labor pressures"
  ],
  assumptions: [
    "Generative video remains commercially relevant and culturally salient"
  ],
  scenario_outlook: {
    horizon: "90 days",
    scenarios: [
      { id: "A", label: "BASE. Licensing templates expand", weight: 0.50 },
      { id: "B", label: "UP. Stable legal lane emerges", weight: 0.30 },
      { id: "C", label: "DOWN. Litigation escalates", weight: 0.20 }
    ]
  },
  sources: [
    { label: "Publisher baselines (entertainment business press)", url: "https://www.wsj.com/" }
  ],
  tags: ["tomorrows-paper","tech","ai","video","copyright","licensing","90d"],
  tp_story: {
    is_longform: false,
    headline_likelihood_pct: 58,
    headline_likelihood_basis: "Likelihood this becomes a recurring tech and culture storyline within 90 days.",
    base_case_sentence: "Most likely: licensing templates become the practical compromise that lets generative video scale without constant existential legal fights.",
    paths: [
      {
        id: "A",
        weight_pct: 50,
        headline_variant: "Studios sign licensing framework, industry shifts toward ‘authorized datasets’",
        one_liner: "Licensing becomes the new normal and headlines follow the template expansion.",
        must_happen: ["Deals announced and replicated"],
        must_not_happen: ["A court decision that invalidates key assumptions"],
        contributors: ["Commercial demand for legal certainty"],
        detractors: ["Fragmented rights disputes"],
        early_indicators: ["Multiple similar licensing announcements"],
        disconfirmers: ["Deals stall"]
      },
      {
        id: "B",
        weight_pct: 30,
        headline_variant: "Regulatory clarity and licensing reduce litigation intensity",
        one_liner: "A stable lane emerges and coverage shifts from fear to business execution.",
        must_happen: ["Regulatory or court clarity supports licensing"],
        must_not_happen: ["High-profile legal reversal"],
        contributors: ["Policy alignment"],
        detractors: ["Conflicting jurisdictions"],
        early_indicators: ["Reduced litigation chatter"],
        disconfirmers: ["New lawsuits surge"]
      },
      {
        id: "C",
        weight_pct: 20,
        headline_variant: "Litigation surges, market fragments into walled gardens",
        one_liner: "Legal conflict dominates and slows adoption.",
        must_happen: ["Major lawsuits or injunctions"],
        must_not_happen: ["Quick settlements"],
        contributors: ["Hardline rights positions"],
        detractors: ["Deal-making"],
        early_indicators: ["Injunction requests and court escalations"],
        disconfirmers: ["Settlements"]
      }
    ],
    triggers: {
      increase_headline_likelihood: ["Major studio licensing agreement or court milestone"],
      decrease_headline_likelihood: ["No deals and no court movement"],
      shift_weights: { toward_A: ["Templates replicate"], toward_B: ["Clarity reduces fights"], toward_C: ["Legal escalation"] }
    },
    audit_log: []
  }
},

{
  id: "tp-007-china-japan-taiwan-framing-tensions",
  category: "Tomorrow's Paper",
  tp_section: "Asia Pacific",
  tp_region: "China, Japan",
  title: "China–Japan tensions rise again over Taiwan framing",
  summary: "Diplomatic sparring and targeted measures reappear as signaling stories, with Taiwan framing as the recurring trigger.",
  due: "2026-03-14",
  updated: "2025-12-15",
  confidence: 50,
  status: "warn",
  band: "Wide",
  call: "Base case: recurring diplomatic incidents keep the topic alive. Upside: quiet diplomacy reduces frequency. Downside: targeted economic measures escalate.",
  drivers: [
    "Taiwan-related rhetoric and signaling",
    "Regional security posture and alliance messaging",
    "Economic leverage and targeted measures"
  ],
  assumptions: [
    "No single event forces major war escalation in the window"
  ],
  scenario_outlook: {
    horizon: "90 days",
    scenarios: [
      { id: "A", label: "BASE. Recurring signaling incidents", weight: 0.48 },
      { id: "B", label: "UP. Quiet diplomacy cools", weight: 0.27 },
      { id: "C", label: "DOWN. Targeted measures escalate", weight: 0.25 }
    ]
  },
  sources: [
    { label: "GDELT, geopolitics monitoring", url: "https://www.gdeltproject.org/" }
  ],
  tags: ["tomorrows-paper","asia-pacific","china","japan","taiwan","diplomacy","90d"],
  tp_story: {
    is_longform: false,
    headline_likelihood_pct: 55,
    headline_likelihood_basis: "Likelihood of recurring front-page geopolitics headlines within 90 days.",
    base_case_sentence: "Most likely: this remains a recurring signaling storyline, with spikes tied to statements, visits, or targeted measures.",
    paths: [
      {
        id: "A",
        weight_pct: 48,
        headline_variant: "Diplomatic sparring flares, then cools, then returns",
        one_liner: "A cyclical signaling story with periodic spikes.",
        must_happen: ["New statements or incidents reintroduce tensions"],
        must_not_happen: ["Extended quiet with no new signals"],
        contributors: ["Alliance posture", "Domestic politics"],
        detractors: ["Quiet diplomacy"],
        early_indicators: ["Official condemnations and travel controversies"],
        disconfirmers: ["Sustained quiet"]
      },
      {
        id: "B",
        weight_pct: 27,
        headline_variant: "Backchannel diplomacy reduces headline frequency",
        one_liner: "The story remains present but drops from top placement.",
        must_happen: ["Intentional quiet period"],
        must_not_happen: ["New triggering incident"],
        contributors: ["Economic caution"],
        detractors: ["Symbolic signaling"],
        early_indicators: ["Muted statements"],
        disconfirmers: ["Renewed public sparring"]
      },
      {
        id: "C",
        weight_pct: 25,
        headline_variant: "Targeted economic measures widen the dispute",
        one_liner: "Economic leverage escalates and headlines intensify.",
        must_happen: ["Targeted restrictions or retaliatory measures"],
        must_not_happen: ["Rapid compromise"],
        contributors: ["Leverage incentives"],
        detractors: ["Cost concerns"],
        early_indicators: ["Policy announcements"],
        disconfirmers: ["Measures withdrawn"]
      }
    ],
    triggers: {
      increase_headline_likelihood: ["A high-profile incident or targeted measure announcement"],
      decrease_headline_likelihood: ["Sustained quiet diplomacy"],
      shift_weights: { toward_A: ["Recurring incidents"], toward_B: ["Quiet holds"], toward_C: ["Economic escalation"] }
    },
    audit_log: []
  }
},

{
  id: "tp-008-us-venezuela-seizure-diplomatic-energy",
  category: "Tomorrow's Paper",
  tp_section: "War & Peace",
  tp_region: "Americas",
  title: "US–Venezuela seizure becomes a wider diplomatic and energy story",
  summary: "Maritime seizure, legal framing, and retaliation rhetoric recur, with oil market implications pulling the story into business pages.",
  due: "2026-03-14",
  updated: "2025-12-15",
  confidence: 48,
  status: "warn",
  band: "Wide",
  call: "Base case: recurring diplomatic and legal story with occasional energy-market spikes. Upside: quiet legal resolution. Downside: retaliation measures widen the dispute.",
  drivers: [
    "Legal contestation and retaliation dynamics",
    "Energy market sensitivity to supply risk",
    "Regional diplomatic alignment and enforcement posture"
  ],
  assumptions: [
    "The dispute remains active enough to generate periodic updates"
  ],
  scenario_outlook: {
    horizon: "90 days",
    scenarios: [
      { id: "A", label: "BASE. Recurring dispute updates", weight: 0.50 },
      { id: "B", label: "UP. Quiet legal resolution", weight: 0.22 },
      { id: "C", label: "DOWN. Retaliation widens", weight: 0.28 }
    ]
  },
  sources: [
    { label: "Publisher baselines (international desks and wires)", url: "https://apnews.com/" }
  ],
  tags: ["tomorrows-paper","americas","venezuela","us","energy","sanctions","90d"],
  tp_story: {
    is_longform: false,
    headline_likelihood_pct: 60,
    headline_likelihood_basis: "Likelihood this becomes a recurring international and business headline within 90 days.",
    base_case_sentence: "Most likely: periodic legal and diplomatic updates keep returning, with energy-market sensitivity giving it extra lift when crude narratives tighten.",
    paths: [
      {
        id: "A",
        weight_pct: 50,
        headline_variant: "Seizure dispute continues, legal filings and diplomacy dominate",
        one_liner: "Recurring updates, modest intensity, persistent presence.",
        must_happen: ["New legal filings or diplomatic statements"],
        must_not_happen: ["Full settlement or silence"],
        contributors: ["Symbolic stakes", "Legal process cadence"],
        detractors: ["Competing crises"],
        early_indicators: ["Court dates, filings, retaliation statements"],
        disconfirmers: ["Formal settlement"]
      },
      {
        id: "B",
        weight_pct: 22,
        headline_variant: "Quiet resolution reduces headline intensity",
        one_liner: "Story shifts from front page to brief updates.",
        must_happen: ["Settlement path appears"],
        must_not_happen: ["Retaliation"],
        contributors: ["De-escalation incentives"],
        detractors: ["Domestic politics"],
        early_indicators: ["Muted rhetoric"],
        disconfirmers: ["New sanctions"]
      },
      {
        id: "C",
        weight_pct: 28,
        headline_variant: "Retaliation widens the dispute, energy angle intensifies",
        one_liner: "Broader measures elevate it to higher prominence.",
        must_happen: ["Retaliatory restrictions or enforcement expansions"],
        must_not_happen: ["Restraint messaging holds"],
        contributors: ["Energy sensitivity"],
        detractors: ["Backchannel diplomacy"],
        early_indicators: ["Policy announcements"],
        disconfirmers: ["Measures reversed"]
      }
    ],
    triggers: {
      increase_headline_likelihood: ["Retaliation announcement", "Oil risk premium spikes"],
      decrease_headline_likelihood: ["No new filings or statements"],
      shift_weights: { toward_A: ["Routine updates"], toward_B: ["Settlement"], toward_C: ["Retaliation and energy spike"] }
    },
    audit_log: []
  }
},

{
  id: "tp-009-oil-risk-premium-returns",
  category: "Tomorrow's Paper",
  tp_section: "World Economy, Energy",
  tp_region: "Global",
  title: "Oil risk premium narrative returns, inflation politics follow",
  summary: "Geopolitics, supply discipline, and seasonal demand create a recurring risk-premium storyline that feeds inflation and rates coverage.",
  due: "2026-03-14",
  updated: "2025-12-15",
  confidence: 46,
  status: "good",
  band: "Wide",
  call: "Base case: oil remains a recurring macro accelerant headline. Upside: prices stabilize and narrative cools. Downside: supply disruption spikes prices and pulls inflation back into politics.",
  drivers: [
    "Geopolitics and supply disruption risk",
    "OPEC and allied supply discipline",
    "Seasonal demand and inventory narratives",
    "Inflation sensitivity and central bank reaction framing"
  ],
  assumptions: [
    "No structural collapse in demand within the horizon"
  ],
  scenario_outlook: {
    horizon: "90 days",
    scenarios: [
      { id: "A", label: "BASE. Macro accelerant headlines", weight: 0.47 },
      { id: "B", label: "UP. Stability cools story", weight: 0.25 },
      { id: "C", label: "DOWN. Disruption spike", weight: 0.28 }
    ]
  },
  sources: [
    { label: "GDELT, macro topic monitoring", url: "https://www.gdeltproject.org/" }
  ],
  tags: ["tomorrows-paper","energy","oil","inflation","rates","macro","90d"],
  tp_story: {
    is_longform: false,
    headline_likelihood_pct: 50,
    headline_likelihood_basis: "Likelihood oil becomes a recurring macro headline driver within 90 days.",
    base_case_sentence: "Most likely: oil remains a recurring accelerant story, rising when geopolitics tightens and falling back when inventories and demand calm narratives.",
    paths: [
      {
        id: "A",
        weight_pct: 47,
        headline_variant: "Oil risk premium returns, inflation debate sharpens",
        one_liner: "Recurring macro headlines as oil feeds inflation and rates narratives.",
        must_happen: ["Periodic geopolitical risk spikes", "Macro sensitivity remains high"],
        must_not_happen: ["Extended calm with stable prices"],
        contributors: ["Inflation linkage", "Political framing"],
        detractors: ["Stable energy prices"],
        early_indicators: ["Risk premium language increases"],
        disconfirmers: ["Oil volatility compresses"]
      },
      {
        id: "B",
        weight_pct: 25,
        headline_variant: "Oil stabilizes, macro attention shifts away",
        one_liner: "Stability pushes oil lower on the front page.",
        must_happen: ["Supply and demand narratives calm"],
        must_not_happen: ["Shock disruption"],
        contributors: ["Inventory relief"],
        detractors: ["New geopolitical incidents"],
        early_indicators: ["Volatility declines"],
        disconfirmers: ["Sudden spike"]
      },
      {
        id: "C",
        weight_pct: 28,
        headline_variant: "Supply disruption spikes oil, inflation politics intensify",
        one_liner: "A real disruption lifts prices and pulls the story back to top placement.",
        must_happen: ["Disruption event or major supply constraint"],
        must_not_happen: ["Fast offset by spare capacity"],
        contributors: ["Supply fragility"],
        detractors: ["Rapid relief measures"],
        early_indicators: ["Shipping and supply constraint headlines"],
        disconfirmers: ["Disruption resolves quickly"]
      }
    ],
    triggers: {
      increase_headline_likelihood: ["Supply disruption event", "Sustained price spike over multiple weeks"],
      decrease_headline_likelihood: ["Volatility compresses and prices stabilize"],
      shift_weights: { toward_A: ["Recurring spikes"], toward_B: ["Stability"], toward_C: ["Disruption"] }
    },
    audit_log: []
  }
},

{
  id: "tp-010-us-monetary-politics-succession-chatter",
  category: "Tomorrow's Paper",
  tp_section: "Money",
  tp_region: "US",
  title: "Politics collides with monetary policy, succession chatter intensifies",
  summary: "Pressure campaigns and chair replacement speculation keep returning because power and money share the same headline frame.",
  due: "2026-03-14",
  updated: "2025-12-15",
  confidence: 45,
  status: "warn",
  band: "Wide",
  call: "Base case: recurring pressure and succession chatter continues. Upside: rhetoric cools and markets ignore. Downside: formal steps or major statements force front-page escalation.",
  drivers: [
    "Political pressure cycles around rates and inflation",
    "Leadership succession incentives and signaling",
    "Market sensitivity to central bank independence narratives"
  ],
  assumptions: [
    "Political actors continue to treat monetary policy as a public issue"
  ],
  scenario_outlook: {
    horizon: "90 days",
    scenarios: [
      { id: "A", label: "BASE. Recurring rhetoric and commentary", weight: 0.52 },
      { id: "B", label: "UP. Noise fades", weight: 0.22 },
      { id: "C", label: "DOWN. Formal escalation", weight: 0.26 }
    ]
  },
  sources: [
    { label: "Major publisher baselines (business + politics)", url: "https://www.ft.com/" }
  ],
  tags: ["tomorrows-paper","money","politics","fed","independence","succession","90d"],
  tp_story: {
    is_longform: false,
    headline_likelihood_pct: 65,
    headline_likelihood_basis: "Likelihood this becomes a recurring politics and business storyline within 90 days.",
    base_case_sentence: "Most likely: monetary policy independence becomes a recurring political storyline, with periodic spikes tied to statements, appointments talk, or market reactions.",
    paths: [
      {
        id: "A",
        weight_pct: 52,
        headline_variant: "Pressure rises again, markets watch the independence story",
        one_liner: "Recurring spikes without a single decisive event.",
        must_happen: ["New statements and commentary cycles"],
        must_not_happen: ["Complete silence from key actors"],
        contributors: ["Election incentives", "Market sensitivity"],
        detractors: ["Bigger crises displacing attention"],
        early_indicators: ["Repeated op-eds and official comments"],
        disconfirmers: ["Rhetoric ends"]
      },
      {
        id: "B",
        weight_pct: 22,
        headline_variant: "Rhetoric cools, story drops in prominence",
        one_liner: "Markets and editors move on temporarily.",
        must_happen: ["Quiet period"],
        must_not_happen: ["Escalating statements"],
        contributors: ["Stability incentive"],
        detractors: ["Political conflict incentives"],
        early_indicators: ["Muted messaging"],
        disconfirmers: ["Renewed pressure"]
      },
      {
        id: "C",
        weight_pct: 26,
        headline_variant: "Formal steps or major statements intensify the succession narrative",
        one_liner: "A concrete action pushes the story onto the front page.",
        must_happen: ["Formal succession talk becomes explicit or actionable"],
        must_not_happen: ["Immediate backtracking"],
        contributors: ["Power struggle dynamics"],
        detractors: ["Institutional pushback"],
        early_indicators: ["Named candidates and formal signals"],
        disconfirmers: ["Signals reversed"]
      }
    ],
    triggers: {
      increase_headline_likelihood: ["Major statement naming succession intent", "Market volatility spike tied to independence fears"],
      decrease_headline_likelihood: ["Sustained quiet and stable markets"],
      shift_weights: { toward_A: ["Recurring rhetoric"], toward_B: ["Quiet holds"], toward_C: ["Formal escalation"] }
    },
    audit_log: []
  }
},

      {
        id: "eqnr-oslo-90d-scenario-weighted",
        category: "Financials",
        title: "EQNR (Oslo Børs), scenario-weighted view, 90 day horizon",
        summary: "Equinor over the next 90 days is dominated by energy macro and risk sentiment, with buybacks and dividend framing providing partial support, and permitting plus renewables headlines adding optional volatility.",
        due: "2026-03-14",
        updated: "2025-12-14",
        confidence: 60,
        status: "warn",
        call: "Base case (55%): range-bound oil and European gas, steady buyback cadence into February, and no fresh permitting shock, results in choppy but resilient trading with capital returns acting as support. Upside case (25%): energy complex bid plus quieter policy tape allows multiple expansion and clearer momentum. Downside case (20%): macro flips risk-off or a new offshore wind permitting or impairment headline resurfaces, raising drawdown risk. Weight-shifters: sustained strength in oil and gas and improving equity risk appetite shifts weight from A to B, a policy disruption or sharp macro selloff shifts weight from A to C.",
        band: "Medium",
        most_likely_driver: "Energy macro, especially oil and European gas pricing, sets the short-horizon regime, capital returns and policy headlines modulate the path.",
        drivers: [
          "Energy macro, oil and European gas pricing, and broad risk sentiment tend to overwhelm single-company factors on a 90 day horizon.",
          "Capital returns matter, Equinor is actively executing the fourth tranche of its 2025 share buy-back programme and maintains a clearly communicated dividend framework.",
          "Permitting and renewables headlines, especially US offshore wind policy and impairment narratives, can re-price the multiple quickly even when core upstream cashflows are steady."
        ],
        assumptions: [
          "No abrupt geopolitical shock that forces a step-change in oil and gas pricing beyond normal volatility.",
          "Share buy-back activity continues within the announced tranche window without disruption.",
          "No major unanticipated production interruption dominates headlines for multiple consecutive weeks."
        ],
        scenario_outlook: {
          horizon: "90 days",
          scenarios: [
            { id: "A", label: "BASE. Cash-return carry, range-bound macro", weight: 0.55 },
            { id: "B", label: "UP. Energy bid, quieter policy tape", weight: 0.25 },
            { id: "C", label: "DOWN. Risk-off or renewed policy shock", weight: 0.20 }
          ]
        },

        mpe_analysis: {
          ticker: "EQNR",
          exchange: "Oslo Børs",
          horizon_days: 90,
          horizon_end: "2026-03-14",
          as_of: "2025-12-12",
          price_anchor_label: "LAST TRADED (Euronext)",
          price_anchor: "232.70",
          currency: "NOK",
          volatility_posture: "Moderate",
          driver_chips: [
            "Energy macro, oil and European gas",
            "Capital returns, dividends and buybacks",
            "Norwegian shelf execution, uptime and unit costs",
            "Transition and permitting headlines, offshore wind and impairments",
            "Risk sentiment, equity rotation"
          ],
          verified_anchors: [
            {
              title: "Buyback tranche window",
              detail: "Fourth tranche 2025 share buy-back tranche runs from 30 October 2025 to no later than 2 February 2026, and transactions are reported under regulated news.",
              source: "Euronext company news",
              url: "https://live.euronext.com/en/products/equities/company-news/2025-12-09-equinor-asa-share-buy-back-fourth-tranche-2025"
            },
            {
              title: "Buyback programme launch details",
              detail: "Equinor announced the fourth and final tranche of up to USD 1,266 million as part of the 2025 share buy-back programme.",
              source: "Equinor news",
              url: "https://www.equinor.com/news/20251029-fourth-tranche-2025-share-buy-back-programme"
            },
            {
              title: "Dividend baseline is explicit",
              detail: "Key information for the third quarter 2025 cash dividend lists the cash dividend amount as USD 0.37 per share, with Oslo Børs ex-date and payment date details.",
              source: "Equinor news",
              url: "https://www.equinor.com/news/20251029-key-information-cash-dividend-third-quarter-2025"
            },
            {
              title: "US offshore wind policy risk is real",
              detail: "Equinor’s second quarter 2025 results note an impairment tied to US offshore wind regulatory changes, and related headlines can shift sentiment quickly.",
              source: "Equinor results",
              url: "https://www.equinor.com/news/equinor-second-quarter-2025-results"
            }
          ],
          scenarios: [
            {
              id: "A",
              name: "Base, cash-return carry with range-bound macro",
              weight_pct: 55,
              conditions: [
                "Oil and gas range-bound, risk sentiment stable",
                "Buyback tranche continues into February",
                "No fresh offshore wind permitting shock beyond what is already priced"
              ],
              expected_behavior: "Choppy but resilient trading, supported by buybacks and dividend framing, with headline sensitivity remaining."
            },
            {
              id: "B",
              name: "Upside, energy bid plus reduced policy noise",
              weight_pct: 25,
              conditions: [
                "Energy complex bid, risk-on rotation",
                "No major production interruption headlines",
                "Quieter stretch on offshore wind and permitting headlines"
              ],
              expected_behavior: "Multiple expansion becomes visible, momentum improves, and capital-return support reinforces the bid."
            },
            {
              id: "C",
              name: "Downside, macro risk-off or renewed transition shock",
              weight_pct: 20,
              conditions: [
                "Oil sells off hard or broader equities de-rate",
                "New offshore wind or permitting disruption headline",
                "Operational interruptions dominate the tape for weeks"
              ],
              expected_behavior: "Faster drawdown risk, EQNR trades as macro beta, and the discount widens."
            }
          ],
          triggers: {
            upside: [
              "Oil and European gas trend upward for multiple weeks, with risk sentiment improving.",
              "Buyback cadence remains steady through January, no tranche disruption.",
              "No new impairment, permitting, or regulatory surprises tied to offshore wind."
            ],
            downside: [
              "Macro flips to recession-style risk-off, cyclicals de-rate broadly.",
              "New offshore wind regulatory change or permitting disruption hits project economics.",
              "Production or operational interruptions become the dominant narrative for multiple weeks."
            ]
          },
          citations: [
            {
              label: "Euronext Live, EQUINOR (NO0010096985, XOSL), last traded and regulated news",
              url: "https://live.euronext.com/en/product/equities/NO0010096985-XOSL",
              note: "Price anchor and regulated news list"
            },
            {
              label: "Euronext company news, Share buy-back, fourth tranche for 2025",
              url: "https://live.euronext.com/en/products/equities/company-news/2025-12-09-equinor-asa-share-buy-back-fourth-tranche-2025",
              note: "Tranche window and transaction reporting"
            },
            {
              label: "Equinor, fourth tranche of the 2025 share buy-back programme",
              url: "https://www.equinor.com/news/20251029-fourth-tranche-2025-share-buy-back-programme",
              note: "Programme details and tranche sizing"
            },
            {
              label: "Equinor, key information relating to cash dividend for the third quarter 2025",
              url: "https://www.equinor.com/news/20251029-key-information-cash-dividend-third-quarter-2025",
              note: "USD 0.37 cash dividend details"
            },
            {
              label: "Equinor, second quarter 2025 results, offshore wind impairment context",
              url: "https://www.equinor.com/news/equinor-second-quarter-2025-results",
              note: "Impairment linked to US offshore wind regulatory changes"
            }
          ]
        },

        sources: [
          { label: "Euronext Live, EQUINOR (XOSL)", url: "https://live.euronext.com/en/product/equities/NO0010096985-XOSL" },
          { label: "Equinor investor dividend page", url: "https://www.equinor.com/investors/our-dividend" }
        ],
        tags: ["eqnr","equinor","oslo","xosl","energy","oil","gas","buyback","dividend","scenario","90d"]
      },
      {
        id: "dnb-oslo-90d-scenario-weighted",
        category: "Financials",
        title: "DNB (Oslo Børs), scenario-weighted view, 90 day horizon",
        summary: "DNB over the next 90 days likely trades modestly range-bound to slightly higher, supported by net interest income resilience and capital strength, but capped by uncertainty around the timing of rate cuts and credit-cycle headlines.",
        due: "2026-03-14",
        updated: "2025-12-14",
        confidence: 58,
        status: "warn",
        call: "Base case (55%): DNB trades sideways to slightly higher over the next 90 days, supported by still-elevated net interest margins and capital strength, but lacking a clear catalyst for a sustained re-rating while the market debates rate-cut timing. Upside case (25%): rate cuts get pushed out, margin compression fears fade, and credit headlines stay quiet, supporting modest multiple expansion. Downside case (20%): rate-cut expectations accelerate, and or credit and commercial real estate headlines worsen, pushing provisioning fears to the forefront and de-rating the stock. Weight-shifters: higher-for-longer signals and steady margin commentary shift weight from A to B, faster rate-cut pricing or rising provisions shift weight from A to C.",
        band: "Medium",
        most_likely_driver: "Rate expectations and the net interest margin trajectory set the short-horizon regime, credit and provisioning headlines modulate sentiment.",
        drivers: [
          "Interest rate expectations drive the multiple, markets price the turning point well before the data confirms it.",
          "Net interest income and margin stability are the core near-term earnings sensitivity, small spread changes matter at scale.",
          "Credit quality and provisioning narrative can re-price the stock quickly, especially if commercial real estate stress becomes the headline.",
          "Capital returns, dividend policy and buybacks provide support, but do not guarantee a re-rating on their own."
        ],
        assumptions: [
          "No abrupt credit event that forces a step-change in provisioning beyond normal quarter-to-quarter volatility.",
          "Rate expectations remain a debate about timing, not a sudden repricing toward aggressive cuts.",
          "Buyback and capital return communication remains steady and consistent through the horizon."
        ],
        scenario_outlook: {
          horizon: "90 days",
          scenarios: [
            { id: "A", label: "BASE. NIM resilience, peak-cycle narrative", weight: 0.55 },
            { id: "B", label: "UP. Higher for longer, margins surprise", weight: 0.25 },
            { id: "C", label: "DOWN. Faster cuts or credit stress headlines", weight: 0.20 }
          ]
        },

        mpe_analysis: {
          ticker: "DNB",
          exchange: "Oslo Børs",
          horizon_days: 90,
          horizon_end: "2026-03-14",
          as_of: "2025-12-11",
          price_anchor_label: "LAST TRADED (Euronext)",
          price_anchor: "273.60",
          currency: "NOK",
          volatility_posture: "Low to Moderate",
          driver_chips: [
            "Rate expectations, Norges Bank path",
            "Net interest margin stability, pricing and spreads",
            "Credit quality and provisioning narrative",
            "Commercial real estate headline sensitivity",
            "Capital returns, dividends and buybacks"
          ],
          verified_anchors: [
            {
              title: "Price anchor and regulated news list",
              detail: "Euronext Live lists DNB Bank ASA with last traded price and a stream of regulated news releases for tracking programme updates.",
              source: "Euronext Live",
              url: "https://live.euronext.com/en/product/equities/NO0010161896-XOSL"
            },
            {
              title: "Share buy-back programme timeline",
              detail: "DNB reports weekly status updates, including that up to 9,752,192 shares will be purchased on trading venues by 20 February 2026, with proposals to cancel and redeem shares at the next AGM.",
              source: "DNB IR press release",
              url: "https://www.ir.dnb.no/press-and-reports/press-releases/dnb-bank-asa-status-share-buy-back-programme-after-week-49-2025"
            },
            {
              title: "Dividend and ex-dividend mechanics are explicit",
              detail: "DNB stated that the shares were quoted ex-dividend on 30 April 2025, with a dividend of NOK 16.75 per share distributed to shareholders as of 29 April 2025 and payment around 9 May 2025.",
              source: "DNB IR press release",
              url: "https://www.ir.dnb.no/press-and-reports/press-releases/shares-dnb-bank-asa-will-be-quoted-ex-dividend-today-2325303"
            },
            {
              title: "Q3 2025 report confirms margin pressure but stable NII",
              detail: "The Q3 2025 report notes net interest income remained stable quarter over quarter, despite narrowing spreads, with negative margin effects offset by higher lending volumes.",
              source: "DNB Q3 2025 report (PDF)",
              url: "https://mb.cision.com/Public/1975/4254060/a879f5d1b4268bda.pdf"
            }
          ],
          scenarios: [
            {
              id: "A",
              name: "Base, strong earnings, peak narrative persists",
              weight_pct: 55,
              conditions: [
                "Rate-cut debate continues, but no rapid repricing toward aggressive cuts",
                "Margins soften slightly but remain strong, net interest income stays resilient",
                "Credit headlines remain contained, provisions do not step-change"
              ],
              expected_behavior: "Range-bound to gently positive drift, supported by capital strength and dividend framing, with rallies capped by peak-cycle logic."
            },
            {
              id: "B",
              name: "Upside, higher for longer and margin resilience surprises",
              weight_pct: 25,
              conditions: [
                "Rate cuts pushed further out, higher-for-longer narrative strengthens",
                "Margin compression fears fade, pricing discipline holds",
                "No material deterioration in credit quality narrative"
              ],
              expected_behavior: "Modest multiple expansion and relative outperformance, DNB trades more like a quality compounder than a peak-cycle bank."
            },
            {
              id: "C",
              name: "Downside, faster cuts or credit stress dominates the tape",
              weight_pct: 20,
              conditions: [
                "Rate-cut expectations accelerate sharply",
                "Commercial real estate or household stress becomes a dominant headline theme",
                "Provisioning rises faster than expected, de-rating pressure increases"
              ],
              expected_behavior: "Faster drawdown risk, the stock de-rates on peak earnings concerns even if underlying solvency remains sound."
            }
          ],
          triggers: {
            upside: [
              "Central bank communication shifts toward higher for longer, and rate-cut expectations move out.",
              "Management commentary supports margin stability, with less evidence of spread compression.",
              "Credit and provisioning headlines stay quiet, commercial real estate fears ease."
            ],
            downside: [
              "Market reprices toward faster cuts, compressing bank multiples.",
              "Loan loss provisions increase faster than expected, credit narrative turns.",
              "Commercial real estate stress becomes the dominant driver across Nordic banks."
            ]
          },
          citations: [
            {
              label: "Euronext Live, DNB Bank ASA (NO0010161896, XOSL), price anchor and regulated news",
              url: "https://live.euronext.com/en/product/equities/NO0010161896-XOSL",
              note: "Last traded price and regulated news list"
            },
            {
              label: "DNB IR, status of share buy-back programme after week 49 2025",
              url: "https://www.ir.dnb.no/press-and-reports/press-releases/dnb-bank-asa-status-share-buy-back-programme-after-week-49-2025",
              note: "Buyback purchase window to 20 February 2026"
            },
            {
              label: "DNB IR, shares quoted ex-dividend, dividend NOK 16.75 per share",
              url: "https://www.ir.dnb.no/press-and-reports/press-releases/shares-dnb-bank-asa-will-be-quoted-ex-dividend-today-2325303",
              note: "Dividend mechanics and payment timing"
            },
            {
              label: "DNB, third quarter report 2025 (PDF)",
              url: "https://mb.cision.com/Public/1975/4254060/a879f5d1b4268bda.pdf",
              note: "Net interest income stable despite narrowing spreads"
            }
          ]
        },

        sources: [
          { label: "Euronext Live, DNB (XOSL)", url: "https://live.euronext.com/en/product/equities/NO0010161896-XOSL" },
          { label: "DNB investor relations, press releases", url: "https://www.ir.dnb.no/press-and-reports/press-releases" }
        ],
        tags: ["dnb","oslo","xosl","bank","financials","rates","nim","credit","buyback","dividend","scenario","90d"]
      },
      {
        id: "oecs-budget-2026",
        category: "OECS",
        title: "OECS fiscal signals, 2026, tightening vs stimulus",
        summary: "Watch for budget language that signals restraint, debt management, and targeted programs rather than broad spending.",
        due: "2026-01-31",
        updated: "2025-12-12",
        confidence: 63,
        status: "warn",
        call: "Moderate likelihood of selective tightening paired with public facing growth language.",
        band: "Medium",
        drivers: [
          "Debt servicing and FX constraints remain central for small island economies.",
          "Policy messaging tends to emphasize resilience and stability during uncertain global cycles.",
          "Tourism and import costs feed directly into government posture."
        ],
        assumptions: [
          "No major external shock in Dec–Jan (storms, commodity spikes, geopolitical disruptions).",
          "Tourism demand stays stable through peak season."
        ],
        sources: [
          { label: "Eastern Caribbean Central Bank", url: "https://www.eccb-centralbank.org/" }
        ],
        tags: ["oecs","caribbean","policy","budgets"]
      },
      	{
        id: "btc-vol-window",
        category: "Crypto",
        title: "Bitcoin volatility window, elevated risk around macro prints",
        summary: "Expect sharper intraday moves during clustered macro releases, even if the trend stays sideways.",
        due: "2025-12-20",
        updated: "2025-12-12",
        confidence: 58,
        status: "warn",
        call: "Choppy conditions, short bursts, mean reversion likely.",
        band: "Medium",
        drivers: [
          "Macro calendar clustering can amplify risk on leveraged positioning.",
          "Liquidity pockets create quick wicks, then snapback."
        ],
        assumptions: [
          "No sudden regulatory headline shock in major jurisdictions."
        ],
        sources: [
          { label: "Kalshi", url: "https://kalshi.com/" },
          { label: "Polymarket", url: "https://polymarket.com/" }
        ],
        tags: ["bitcoin","volatility","macro","crypto"]
      },
      {
        id: "sports-football-upset",
        category: "Sports",
        title: "Weekend football upset probability, one top seed stumbles",
        summary: "A fatigue, travel, or injury narrative becomes the story, expect one high profile favorite to underperform.",
        due: "2025-12-14",
        updated: "2025-12-12",
        confidence: 46,
        status: "warn",
        call: "One surprise result is plausible, but the market will overreact after.",
        band: "Wide",
        drivers: [
          "Compressed schedules raise variance.",
          "Late lineup changes matter more than fans admit."
        ],
        assumptions: [
          "Key player availability changes within 24 hours of kickoff."
        ],
        sources: [],
        tags: ["sports","football","upset","variance"]
      },
      {
        id: "pm-ucl-winner-2026",
        category: "Prediction Markets",
        categories: ["Prediction Markets","Sports"],
        title: "UEFA Champions League Winner (2025–26), market + scenario view",
        summary: "Bayern lead the market, but this tournament is an injury-and-draw machine. Most likely path is favorites holding form and depth through the knockouts.",
        due: "2026-05-31",
        updated: "2025-12-16",
        confidence: 58,
        status: "warn",
        call: "Base case (55%): favorites hold form and depth matters across two-legged ties. Bracket-opens case (30%): one superclub shock-exits, and the title race re-prices sharply. Underdog run (15%): keeper and finishing variance plus draw luck creates a non-elite finalist. Market baseline (Polymarket): Bayern 19%, Arsenal 16%, Real 11%, PSG 11%, City 10%, Barca 10%, Liverpool 9%.",
        band: "Medium",
        most_likely_driver: "Squad availability and draw path, especially injuries to the spine (keeper, CB organizer, primary scorer), plus late-season fixture congestion.",
        drivers: [
          "Market baseline currently favors Bayern, Arsenal, Real, PSG, City, Barca, Liverpool, implying a tight elite cluster rather than a single runaway favorite.",
          "Knockout structure amplifies single-match variance, with red cards, penalties, and keeper spikes acting as decisive swing factors.",
          "Depth and rotation quality matter more after March, when domestic and European fixtures compress."
        ],
        assumptions: [
          "No prolonged multi-week injury absence to multiple starters for the market leader.",
          "No extreme draw imbalance that forces top favorites into an unusually hard bracket on one side.",
          "League-phase performance remains broadly informative of knockout quality, not completely noisy."
        ],
        market_meta: { platform: "Polymarket", volume: "$84m", expiry_note: "Tournament" },
        quick_odds: [
          { label: "Bayern", pct: 19 },
          { label: "Arsenal", pct: 16 },
          { label: "Real Madrid", pct: 11 }
        ],
        market_odds: [
          { label: "Bayern Munich", pct: 19 },
          { label: "Arsenal", pct: 16 },
          { label: "Real Madrid", pct: 11 },
          { label: "PSG", pct: 11 },
          { label: "Man City", pct: 10 },
          { label: "Barcelona", pct: 10 },
          { label: "Liverpool", pct: 9 },
          { label: "Chelsea", pct: 4 },
          { label: "Inter", pct: 4 },
          { label: "Field/Other", pct: 6 }
        ],
        scenario_outlook: {
          horizon: "Knockout season",
          scenarios: [
            { id: "A", label: "BASE. Favorites hold, depth matters", weight: 0.55 },
            { id: "B", label: "OPEN. Superclub shock, bracket opens", weight: 0.30 },
            { id: "C", label: "CHAOS. Underdog run via variance", weight: 0.15 }
          ]
        },
        mpe_analysis: {
          ticker: "UCL",
          exchange: "UEFA",
          horizon_days: 170,
          horizon_end: "2026-05-31",
          as_of: "2025-12-16",
          price_anchor_label: "MARKET BASELINE (Polymarket)",
          price_anchor: "Bayern 19%, Arsenal 16%",
          currency: "",
          volatility_posture: "High, knockout variance",
          driver_chips: [
            "Squad health and depth",
            "Draw path and bracket shape",
            "Defensive stability and set-piece resilience",
            "Fixture congestion into spring",
            "Keeper and finishing variance"
          ],
          verified_anchors: [
            {
              title: "Polymarket baseline distribution",
              detail: "Current market-implied win chances for the 2025–26 Champions League.",
              source: "Polymarket",
              url: "https://polymarket.com/event/uefa-champions-league-winner"
            },
            {
              title: "Official competition source",
              detail: "Official UEFA Champions League competition hub and results.",
              source: "UEFA",
              url: "https://www.uefa.com/uefachampionsleague/"
            }
          ],
          scenarios: [
            {
              id: "A",
              name: "Base, favorites hold and depth matters",
              weight_pct: 55,
              conditions: [
                "Top teams keep their spine healthy through March to May",
                "Rotation quality prevents late-season fatigue collapse",
                "Two-legged ties reduce single-match chaos"
              ],
              expected_behavior: "Elite cluster remains dominant, the final is likely two of the market top seven."
            },
            {
              id: "B",
              name: "Bracket opens after a superclub shock-exit",
              weight_pct: 30,
              conditions: [
                "A top contender suffers an injury cascade or red-card event in a key tie",
                "The draw forces a concentrated heavyweight collision early",
                "An underpriced team capitalizes on a softened bracket"
              ],
              expected_behavior: "Title odds re-price, mid-tier contenders become live, and the market compresses."
            },
            {
              id: "C",
              name: "Underdog run driven by variance",
              weight_pct: 15,
              conditions: [
                "Keeper spike and finishing streak align for 3 to 5 matches",
                "Draw luck avoids multiple heavyweights",
                "Set-pieces and counters deliver high leverage goals"
              ],
              expected_behavior: "A non-elite semifinalist emerges and the final becomes higher variance than expected."
            }
          ],
          triggers: {
            upside: [
              "Market leader keeps a stable XI through March and avoids key injuries.",
              "Favorable draw avoids early top-3 collisions on the same side of the bracket.",
              "Underlying defensive metrics remain stable over 5+ matches."
            ],
            downside: [
              "Spine injury (keeper, CB organizer, primary scorer) or multi-week absence cluster.",
              "Early red card or penalty-heavy tie signals chaos rising.",
              "Draw forces multiple heavyweights into the same quarter of the bracket."
            ]
          },
          citations: [
            {
              label: "Polymarket, UEFA Champions League Winner (market baseline)",
              url: "https://polymarket.com/event/uefa-champions-league-winner",
              note: "Market-implied distribution and volume"
            },
            {
              label: "UEFA Champions League official competition hub",
              url: "https://www.uefa.com/uefachampionsleague/",
              note: "Official results and competition structure"
            }
          ]
        },
        sources: [
          { label: "Polymarket, UEFA Champions League Winner", url: "https://polymarket.com/event/uefa-champions-league-winner" },
          { label: "UEFA Champions League official", url: "https://www.uefa.com/uefachampionsleague/" }
        ],
        tags: ["predictionmarkets","sports","soccer","ucl","knockout","injuries","draw","variance"]
      },
      {
        id: "pm-epl-winner-2026",
        category: "Prediction Markets",
        categories: ["Prediction Markets","Sports"],
        title: "English Premier League Winner (2025–26), market + scenario view",
        summary: "Arsenal are priced as a clear favorite, City remain the primary threat. Most likely path is the leader staying normal the longest through congestion.",
        due: "2026-05-27",
        updated: "2025-12-16",
        confidence: 60,
        status: "warn",
        call: "Base case (65%): two-team race, leader converts the advantage through steady points pace and rotation discipline. Chase-down case (25%): City heater + leader wobble in congestion weeks. Surprise case (10%): third contender runs hot while the top two bleed points. Market baseline (Polymarket): Arsenal 54%, Man City 29%, Liverpool 9%, Chelsea 4%.",
        band: "Medium",
        most_likely_driver: "Injury-adjusted squad strength and congestion management, with January window and finishing regression as secondary levers.",
        drivers: [
          "Markets imply a two-team structure with Arsenal heavily favored and City the main alternative.",
          "League outcomes are driven by repeatable advantage: depth, rotation, and defense stability over months.",
          "January window and injury cascades are the biggest practical re-pricers in-season."
        ],
        assumptions: [
          "No sustained multi-month injury absence to multiple starters for the market leader.",
          "No structural collapse in defensive performance for the top two.",
          "January window does not produce a transformational signing for a long-shot contender."
        ],
        market_meta: { platform: "Polymarket", volume: "$105m", expiry_note: "Season" },
        quick_odds: [
          { label: "Arsenal", pct: 54 },
          { label: "Man City", pct: 29 },
          { label: "Liverpool", pct: 9 }
        ],
        market_odds: [
          { label: "Arsenal", pct: 54 },
          { label: "Man City", pct: 29 },
          { label: "Liverpool", pct: 9 },
          { label: "Chelsea", pct: 5 },
          { label: "Man United", pct: 3 },
          { label: "Field/Other", pct: 0 }
        ],
        scenario_outlook: {
          horizon: "Season",
          scenarios: [
            { id: "A", label: "BASE. Two-team race, leader converts", weight: 0.65 },
            { id: "B", label: "CHASE. City heater + leader wobble", weight: 0.25 },
            { id: "C", label: "SURPRISE. Third contender spikes", weight: 0.10 }
          ]
        },
        mpe_analysis: {
          ticker: "EPL",
          exchange: "Premier League",
          horizon_days: 160,
          horizon_end: "2026-05-27",
          as_of: "2025-12-16",
          price_anchor_label: "MARKET BASELINE (Polymarket)",
          price_anchor: "Arsenal 54%, Man City 29%",
          currency: "",
          volatility_posture: "Medium, league compounding with injury shocks",
          driver_chips: [
            "Depth and rotation quality",
            "Injury-adjusted squad strength",
            "Fixture congestion and travel",
            "January window impact",
            "Finishing regression and set pieces"
          ],
          verified_anchors: [
            {
              title: "Polymarket baseline distribution",
              detail: "Current market-implied win chances for the 2025–26 Premier League title.",
              source: "Polymarket",
              url: "https://polymarket.com/event/english-premier-league-winner"
            },
            {
              title: "Official league source",
              detail: "Official Premier League competition hub and standings.",
              source: "Premier League",
              url: "https://www.premierleague.com/"
            }
          ],
          scenarios: [
            {
              id: "A",
              name: "Base, leader converts through consistency",
              weight_pct: 65,
              conditions: [
                "Stable defensive performance and steady points pace",
                "Rotation prevents fatigue collapse in congested windows",
                "January window is additive, not disruptive"
              ],
              expected_behavior: "Two-team race remains intact, the favorite stays favorite and closes out the season."
            },
            {
              id: "B",
              name: "Chase-down, City surge meets leader wobble",
              weight_pct: 25,
              conditions: [
                "A 10 to 14 match heater for City",
                "Leader drops points in two congestion windows",
                "Key injury or minutes-load effect emerges"
              ],
              expected_behavior: "Title odds compress sharply and the last six weeks become a pressure race."
            },
            {
              id: "C",
              name: "Surprise, a third contender spikes",
              weight_pct: 10,
              conditions: [
                "Top two bleed points simultaneously",
                "Third contender has elite defense and finishing spike",
                "January upgrade adds meaningful net rating"
              ],
              expected_behavior: "A three-way race forms and the market reprices long shots upward."
            }
          ],
          triggers: {
            upside: [
              "Leader survives congestion weeks with 2+ wins and no key injuries.",
              "Underlying defensive metrics stay stable for 5+ matches.",
              "January window adds depth rather than reshapes tactics."
            ],
            downside: [
              "Two dropped-point weeks inside a 10-day span.",
              "Spine injury to creator, striker, or CB organizer.",
              "A major January signing for a challenger changes underlying strength."
            ]
          },
          citations: [
            {
              label: "Polymarket, English Premier League Winner (market baseline)",
              url: "https://polymarket.com/event/english-premier-league-winner",
              note: "Market-implied distribution and end date"
            },
            {
              label: "Premier League official hub",
              url: "https://www.premierleague.com/",
              note: "Official standings and competition source"
            }
          ]
        },
        sources: [
          { label: "Polymarket, English Premier League Winner", url: "https://polymarket.com/event/english-premier-league-winner" },
          { label: "Premier League official", url: "https://www.premierleague.com/" }
        ],
        tags: ["predictionmarkets","sports","soccer","epl","injuries","congestion","januarywindow","regression"]
      },
      {
        id: "pm-worldcup-winner-2026",
        category: "Prediction Markets",
        categories: ["Prediction Markets","Sports"],
        title: "2026 FIFA World Cup Winner, market + scenario view",
        summary: "Spain lead the market, but tournaments punish predictability. Most likely path is a favorite executing, with real chaos tail risk in a 48-team format.",
        due: "2026-07-19",
        updated: "2025-12-16",
        confidence: 56,
        status: "warn",
        call: "Base case (55%): a traditional favorite wins through depth and tactical control. Peak-cycle case (30%): a second-tier contender peaks at the right time. Chaos case (15%): bracket shocks cluster and an outsider path becomes real. Market baseline (Polymarket): Spain 18%, England 14%, France 14%, Brazil 9%, Portugal 9%.",
        band: "Wide",
        most_likely_driver: "Roster availability and coaching pragmatism in knockouts, with set-piece efficiency and travel recovery as hidden multipliers.",
        drivers: [
          "Market baseline points to Spain as leader with a tight cluster behind, indicating no dominant runaway favorite.",
          "Tournament outcomes are driven by availability, set pieces, and matchup tree more than long-run league compounding.",
          "A larger format increases pathways for shocks while still favoring depth."
        ],
        assumptions: [
          "No pre-tournament injury removes multiple stars from a top-three favorite.",
          "No extreme group-stage draw disadvantages one favorite disproportionately.",
          "Top teams remain motivated and tactically pragmatic in knockouts."
        ],
        market_meta: { platform: "Polymarket", volume: "$5m", expiry_note: "Tournament" },
        quick_odds: [
          { label: "Spain", pct: 18 },
          { label: "France", pct: 14 },
          { label: "England", pct: 14 }
        ],
        market_odds: [
          { label: "Spain", pct: 18 },
          { label: "England", pct: 14 },
          { label: "France", pct: 14 },
          { label: "Portugal", pct: 9 },
          { label: "Brazil", pct: 9 },
          { label: "Argentina", pct: 8 },
          { label: "Germany", pct: 7 },
          { label: "Norway", pct: 6 },
          { label: "Netherlands", pct: 5 },
          { label: "Field/Other", pct: 20 }
        ],
        scenario_outlook: {
          horizon: "Tournament",
          scenarios: [
            { id: "A", label: "BASE. Favorite executes", weight: 0.55 },
            { id: "B", label: "PEAK. New-cycle contender peaks", weight: 0.30 },
            { id: "C", label: "CHAOS. Outsider via bracket shocks", weight: 0.15 }
          ]
        },
        mpe_analysis: {
          ticker: "WC26",
          exchange: "FIFA",
          horizon_days: 215,
          horizon_end: "2026-07-19",
          as_of: "2025-12-16",
          price_anchor_label: "MARKET BASELINE (Polymarket)",
          price_anchor: "Spain 18%, England 14%, France 14%",
          currency: "",
          volatility_posture: "High, tournament variance",
          driver_chips: [
            "Roster availability and injuries",
            "Set-piece efficiency",
            "Knockout pragmatism and coaching",
            "Travel, recovery, and heat management",
            "Bracket and group draw shape"
          ],
          verified_anchors: [
            {
              title: "Polymarket baseline distribution",
              detail: "Current market-implied win chances for the 2026 World Cup.",
              source: "Polymarket",
              url: "https://polymarket.com/event/2026-fifa-world-cup-winner-595"
            },
            {
              title: "Official competition source",
              detail: "Official FIFA competition hub for the World Cup.",
              source: "FIFA",
              url: "https://www.fifa.com/"
            }
          ],
          scenarios: [
            {
              id: "A",
              name: "Base, traditional favorite wins",
              weight_pct: 55,
              conditions: [
                "Top roster stays healthy enough to keep its spine intact",
                "Set-piece defense holds under pressure",
                "Coach chooses pragmatic match control in knockouts"
              ],
              expected_behavior: "A top favorite wins with controlled game states, limited chaos exposure."
            },
            {
              id: "B",
              name: "Peak-cycle contender peaks at the right time",
              weight_pct: 30,
              conditions: [
                "Second-tier contender hits form and finishing spike during knockouts",
                "Key veterans stay available and cohesive",
                "Bracket avoids multiple elite opponents until late"
              ],
              expected_behavior: "A near-favorite wins as the best version of itself arrives in June and July."
            },
            {
              id: "C",
              name: "Chaos, outsider path becomes real",
              weight_pct: 15,
              conditions: [
                "Early upset removes one or two favorites from a side of the bracket",
                "Keeper spike and set-piece goals deliver leverage wins",
                "Momentum and matchups dominate"
              ],
              expected_behavior: "A non-elite finalist appears and the market reprices quickly mid-tournament."
            }
          ],
          triggers: {
            upside: [
              "A top favorite shows stable defense and set-piece control in warm-up matches.",
              "Roster announcements confirm full availability for the spine.",
              "Group draw gives at least one elite side a relatively clean path."
            ],
            downside: [
              "Star injury before the tournament to a favorite’s spine.",
              "Group-stage struggles, two draws or a loss for a top seed.",
              "Set-piece vulnerability appears repeatedly in recent matches."
            ]
          },
          citations: [
            {
              label: "Polymarket, 2026 FIFA World Cup Winner (market baseline)",
              url: "https://polymarket.com/event/2026-fifa-world-cup-winner-595",
              note: "Market-implied distribution and volume"
            },
            {
              label: "FIFA official hub",
              url: "https://www.fifa.com/",
              note: "Official competition source"
            }
          ]
        },
        sources: [
          { label: "Polymarket, 2026 FIFA World Cup Winner", url: "https://polymarket.com/event/2026-fifa-world-cup-winner-595" },
          { label: "FIFA official", url: "https://www.fifa.com/" }
        ],
        tags: ["predictionmarkets","sports","soccer","worldcup","tournament","injuries","setpieces","bracket"]
      },
      {
        id: "pm-nba-champion-2026",
        category: "Prediction Markets",
        categories: ["Prediction Markets","Sports"],
        title: "2026 NBA Champion, market + scenario view",
        summary: "OKC are priced as a runaway favorite. The only reliable counter is health and matchups, because one hamstring can erase a season.",
        due: "2026-07-01",
        updated: "2025-12-16",
        confidence: 57,
        status: "warn",
        call: "Base case (55%): best efficiency team wins with stable availability. Health swing (30%): a challenger gets healthier at the right time and the tree reshapes. Bracket breaks (15%): injuries and upset chains change the matchup map. Market baseline (Polymarket): OKC 47%, Nuggets 9%, Rockets 7%, Knicks 7%.",
        band: "Medium",
        most_likely_driver: "Injury-adjusted net rating and playoff matchup tree, with trade deadline and seeding as secondary levers.",
        drivers: [
          "Market baseline is unusually concentrated on OKC, signaling strong consensus on underlying strength.",
          "Playoff outcomes are highly sensitive to availability, matchups, and late-season minutes load.",
          "Trade deadline moves can change the 8-man rotation quality more than casual fans admit."
        ],
        assumptions: [
          "No multi-week injury to the market leader’s top two players near the playoffs.",
          "No dramatic mid-season trade that creates a new superteam dynamic.",
          "Playoff seeding does not produce an extreme matchup disadvantage for the market leader."
        ],
        market_meta: { platform: "Polymarket", volume: "$89m", expiry_note: "Season" },
        quick_odds: [
          { label: "OKC Thunder", pct: 47 },
          { label: "Nuggets", pct: 9 },
          { label: "Rockets", pct: 7 }
        ],
        market_odds: [
          { label: "Oklahoma City Thunder", pct: 47 },
          { label: "Denver Nuggets", pct: 9 },
          { label: "Houston Rockets", pct: 7 },
          { label: "New York Knicks", pct: 7 },
          { label: "San Antonio Spurs", pct: 5 },
          { label: "Los Angeles Lakers", pct: 4 },
          { label: "Detroit Pistons", pct: 4 },
          { label: "Cleveland Cavaliers", pct: 4 },
          { label: "Field/Other", pct: 13 }
        ],
        scenario_outlook: {
          horizon: "Season",
          scenarios: [
            { id: "A", label: "BASE. Best team wins, stable health", weight: 0.55 },
            { id: "B", label: "HEALTH. Challenger peaks in playoffs", weight: 0.30 },
            { id: "C", label: "CHAOS. Bracket breaks via injuries", weight: 0.15 }
          ]
        },
        mpe_analysis: {
          ticker: "NBA26",
          exchange: "NBA",
          horizon_days: 198,
          horizon_end: "2026-07-01",
          as_of: "2025-12-16",
          price_anchor_label: "MARKET BASELINE (Polymarket)",
          price_anchor: "OKC 47%, Nuggets 9%",
          currency: "",
          volatility_posture: "Medium, injury and matchup sensitive",
          driver_chips: [
            "Injury-adjusted net rating",
            "Trade deadline rotation quality",
            "Playoff matchup tree",
            "Seeding and home court",
            "Shooting variance in playoff series"
          ],
          verified_anchors: [
            {
              title: "Polymarket baseline distribution",
              detail: "Current market-implied win chances for the 2026 NBA title.",
              source: "Polymarket",
              url: "https://polymarket.com/event/2026-nba-champion"
            },
            {
              title: "Official league source",
              detail: "NBA official competition source used for resolution of the underlying market.",
              source: "NBA",
              url: "https://www.nba.com/"
            }
          ],
          scenarios: [
            {
              id: "A",
              name: "Base, best team converts with stable availability",
              weight_pct: 55,
              conditions: [
                "Market leader stays healthy through April to June",
                "Net rating translates to playoff matchups",
                "Rotation depth avoids minutes-load collapse"
              ],
              expected_behavior: "Favorite remains favorite, title goes to the best efficiency profile."
            },
            {
              id: "B",
              name: "Health swing, challenger peaks at the right time",
              weight_pct: 30,
              conditions: [
                "A challenger gets healthier while the favorite loses depth",
                "Trade deadline upgrade improves a contender’s 8-man reliability",
                "Bracket matchups favor the challenger"
              ],
              expected_behavior: "Odds compress and the finals become less predictable than the market baseline suggests."
            },
            {
              id: "C",
              name: "Chaos, injuries and upsets reshape the bracket",
              weight_pct: 15,
              conditions: [
                "One or more top seeds lose a star for a series",
                "Upset chains shift matchups",
                "Variance dominates at the margins"
              ],
              expected_behavior: "Multiple contenders become live late, and a mid-tier team can steal the title."
            }
          ],
          triggers: {
            upside: [
              "Favorite enters playoffs healthy with stable rotation minutes.",
              "Seeding produces favorable matchups and avoids a stylistic nightmare early.",
              "No major trade creates a new elite challenger profile."
            ],
            downside: [
              "Star injury news near playoffs, especially hamstring and ankle risks.",
              "Trade deadline adds a high-leverage piece to a top-4 contender.",
              "Seeding forces an early matchup against a high-variance opponent."
            ]
          },
          citations: [
            {
              label: "Polymarket, 2026 NBA Champion (market baseline)",
              url: "https://polymarket.com/event/2026-nba-champion",
              note: "Market-implied distribution and volume"
            },
            {
              label: "NBA official hub",
              url: "https://www.nba.com/",
              note: "Official competition source"
            }
          ]
        },
        sources: [
          { label: "Polymarket, 2026 NBA Champion", url: "https://polymarket.com/event/2026-nba-champion" },
          { label: "NBA official", url: "https://www.nba.com/" }
        ],
        tags: ["predictionmarkets","sports","nba","championship","injuries","trade-deadline","matchups","seeding"]
      },
      {
        id: "pm-nba-cup-final-spurs-knicks-2025-12-16",
        category: "Prediction Markets",
        categories: ["Prediction Markets","Sports"],
        short_horizon: true,
        title: "NBA Cup Final, Spurs vs Knicks, moneyline (short horizon)",
        summary: "One game. The market leans Knicks. Most likely path is normal rotations and half-court control, but one hot quarter flips everything.",
        due: "2025-12-16",
        updated: "2025-12-16",
        confidence: 50,
        status: "warn",
        call: "Base case (56%): Knicks control pace and physicality in the half court. Spurs surge case (34%): pace plus star gravity forces rotation stress. Chaos case (10%): foul trouble or 3-point variance decides it. Market baseline: Knicks 56%, Spurs 44%.",
        band: "Wide",
        most_likely_driver: "Late injury news, starting lineups, and 3-point variance.",
        drivers: [
          "Single-game markets are dominated by availability and variance, not long-run team strength.",
          "Pace and turnover margin often decide Cup-style finals.",
          "3-point swing and foul trouble are the highest leverage volatility sources."
        ],
        assumptions: [
          "No late scratch of a primary creator within 60 minutes of tip.",
          "Normal rotation and minutes limits apply.",
          "No extreme officiating-driven foul imbalance early."
        ],
        market_meta: { platform: "Polymarket", volume: "$2m", expiry_note: "Short Horizon" },
        quick_odds: [
          { label: "Knicks", pct: 56 },
          { label: "Spurs", pct: 44 }
        ],
        market_odds: [
          { label: "Knicks win", pct: 56 },
          { label: "Spurs win", pct: 44 }
        ],
        scenario_outlook: {
          horizon: "Game",
          scenarios: [
            { id: "A", label: "BASE. Knicks control half-court", weight: 0.56 },
            { id: "B", label: "PACE. Spurs surge and run", weight: 0.34 },
            { id: "C", label: "CHAOS. One weird quarter", weight: 0.10 }
          ]
        },
        mpe_analysis: {
          ticker: "NBA-CUP",
          exchange: "NBA",
          horizon_days: 1,
          horizon_end: "2025-12-16",
          as_of: "2025-12-16",
          price_anchor_label: "MARKET BASELINE",
          price_anchor: "Knicks 56%, Spurs 44%",
          currency: "",
          volatility_posture: "High, single-game variance",
          driver_chips: [
            "Lineup availability",
            "Pace control",
            "Turnover margin",
            "3-point variance",
            "Foul trouble"
          ],
          verified_anchors: [
            {
              title: "Market anchor",
              detail: "Single-game probability snapshot from the prediction market.",
              source: "Polymarket",
              url: "https://polymarket.com/"
            }
          ],
          scenarios: [
            {
              id: "A",
              name: "Base, Knicks control half-court and rebound margin",
              weight_pct: 56,
              conditions: [
                "Normal rotations and minutes",
                "Knicks win the half-court possession battle",
                "No early foul trouble on core defenders"
              ],
              expected_behavior: "Knicks win a controlled final with fewer transition possessions."
            },
            {
              id: "B",
              name: "Spurs surge via pace and star gravity",
              weight_pct: 34,
              conditions: [
                "Spurs push pace and create early offense",
                "Knicks turnover margin worsens",
                "Knicks bench minutes become a vulnerability"
              ],
              expected_behavior: "Spurs steal the game by forcing tempo and winning a 6-minute run."
            },
            {
              id: "C",
              name: "Chaos quarter decides it",
              weight_pct: 10,
              conditions: [
                "3-point shooting swings",
                "Foul trouble or minor injury changes rotations",
                "One quarter produces +12 points swing"
              ],
              expected_behavior: "Outcome is driven by variance rather than structure."
            }
          ],
          triggers: {
            upside: [
              "Confirmed starting lineups and normal minutes for Knicks key players.",
              "Low turnover first quarter and steady half-court pace."
            ],
            downside: [
              "Late scratch or minutes limit announcement.",
              "Early foul trouble or 3-point swing by halftime."
            ]
          },
          citations: [
            {
              label: "Polymarket home (market reference)",
              url: "https://polymarket.com/",
              note: "Use the specific event link if available"
            }
          ]
        },
        sources: [
          { label: "Polymarket", url: "https://polymarket.com/" },
          { label: "NBA official", url: "https://www.nba.com/" }
        ],
        tags: ["predictionmarkets","sports","nba","short-horizon","moneyline","variance"]
      },
      {
        id: "pm-laliga-girona-atletico-2025-12-21",
        category: "Prediction Markets",
        categories: ["Prediction Markets","Sports"],
        short_horizon: true,
        title: "LaLiga, Girona vs Atlético Madrid, 1X2 (short horizon)",
        summary: "Market leans Atlético, but draws and early goals are the trap doors. Most likely path is Atlético control, with a meaningful draw tail.",
        due: "2025-12-21",
        updated: "2025-12-16",
        confidence: 48,
        status: "warn",
        call: "Base case (55%): Atlético win via quality and game control. Draw case (25%): low-scoring tactical lock. Upset case (20%): early Girona goal plus compact defense. Market baseline: Atlético 57%, Girona 20%, Draw 23%.",
        band: "Wide",
        most_likely_driver: "Starting XI and early goal timing, plus set-piece conversion.",
        drivers: [
          "Single matches are leverage events: the first goal changes game state and probabilities sharply.",
          "Draw probability is often underappreciated when favorites play conservatively away.",
          "Set pieces and keeper performance can override expected open-play dominance."
        ],
        assumptions: [
          "No surprise red card in the first 30 minutes.",
          "No major lineup downgrade for Atlético relative to expectations.",
          "Weather and pitch conditions are normal."
        ],
        market_meta: { platform: "Polymarket", volume: "$963k", expiry_note: "Short Horizon" },
        quick_odds: [
          { label: "Atlético", pct: 57 },
          { label: "Draw", pct: 23 },
          { label: "Girona", pct: 20 }
        ],
        market_odds: [
          { label: "Atlético win", pct: 57 },
          { label: "Draw", pct: 23 },
          { label: "Girona win", pct: 20 }
        ],
        scenario_outlook: {
          horizon: "Match",
          scenarios: [
            { id: "A", label: "BASE. Atlético win", weight: 0.55 },
            { id: "B", label: "DRAW. Tactical lock", weight: 0.25 },
            { id: "C", label: "UPSET. Early goal holds", weight: 0.20 }
          ]
        },
        mpe_analysis: {
          ticker: "LALIGA-1X2",
          exchange: "LaLiga",
          horizon_days: 6,
          horizon_end: "2025-12-21",
          as_of: "2025-12-16",
          price_anchor_label: "MARKET BASELINE",
          price_anchor: "Atlético 57%, Draw 23%, Girona 20%",
          currency: "",
          volatility_posture: "High, match variance",
          driver_chips: [
            "Lineups and rotation",
            "First-goal timing",
            "Set pieces and keeper form",
            "Away-game conservatism",
            "Red-card risk"
          ],
          verified_anchors: [
            {
              title: "Market anchor",
              detail: "Single-match outcome distribution from the prediction market.",
              source: "Polymarket",
              url: "https://polymarket.com/"
            }
          ],
          scenarios: [
            {
              id: "A",
              name: "Base, Atlético impose control and win",
              weight_pct: 55,
              conditions: [
                "Atlético start XI is close to full strength",
                "They avoid early concessions and manage game state",
                "Set-piece defense holds"
              ],
              expected_behavior: "Atlético win by controlling risk and converting one or two high-quality chances."
            },
            {
              id: "B",
              name: "Draw, low-scoring tactical lock",
              weight_pct: 25,
              conditions: [
                "Early minutes are cautious and low event",
                "Girona stay compact and limit big chances",
                "Atlético accept a point late"
              ],
              expected_behavior: "A draw emerges as the modal outcome if the first goal does not arrive early."
            },
            {
              id: "C",
              name: "Upset, Girona score early and hold",
              weight_pct: 20,
              conditions: [
                "Girona score first within 35 minutes",
                "Keeper performance plus compact defense holds",
                "Atlético chase and open transitions"
              ],
              expected_behavior: "Upset becomes live when game state flips early."
            }
          ],
          triggers: {
            upside: [
              "Atlético start their strongest XI and avoid rotation.",
              "No early goal and Girona stay pinned back."
            ],
            downside: [
              "Atlético rotation or late scratch in the spine.",
              "Early Girona goal, or early red card shifts the match state."
            ]
          },
          citations: [
            {
              label: "Polymarket home (market reference)",
              url: "https://polymarket.com/",
              note: "Use the specific event link if available"
            }
          ]
        },
        sources: [
          { label: "Polymarket", url: "https://polymarket.com/" },
          { label: "LaLiga official", url: "https://www.laliga.com/" }
        ],
        tags: ["predictionmarkets","sports","soccer","laliga","short-horizon","1x2","variance"]
      },
      {
        id: "caribbean-tourism-peak",
        category: "Caribbean",
        carib_area: "Regional",
        title: "Caribbean tourism peak, strong occupancy with higher price dispersion",
        summary: "Expect high occupancy, with bigger gaps between premium properties and mid-tier inventory.",
        due: "2025-12-31",
        updated: "2025-12-12",
        confidence: 65,
        status: "good",
        call: "Solid season demand, pricing power becomes uneven across segments.",
        band: "Medium",
        drivers: [
          "Airline capacity plus seasonal travel behavior.",
          "Premium experiences capture more pricing power."
        ],
        assumptions: [
          "No major disruption to flight schedules in the region."
        ],
        sources: [],
        tags: ["caribbean","tourism","pricing"]
      },

      {
        id: "jam-election-trigger-12m",
        category: "Caribbean",
        carib_area: "Jamaica",
        title: "Jamaica early-election trigger risk, next 12 months",
        summary: "Most likely no early-election trigger emerges within 12 months, with government in delivery mode after a close 2025 election. Trigger risk remains non-trivial due to narrow parliamentary math and post Hurricane Melissa recovery execution.",
        due: "2026-12-15",
        updated: "2025-12-15",
        confidence: 61,
        status: "warn",
        call: "Base case (72%): no trigger emerges, Parliament stays stable, and recovery delivery remains credible. Instability trigger (23%): compound stress from recovery execution, integrity controversy, household strain, or parliamentary math makes an early election a live option. Opportunistic trigger (5%): sustained polling advantage and opposition weakness makes a mandate-seeking snap election rational. Implied probability a trigger emerges: 28%.",
        band: "Medium",
        most_likely_driver: "Recovery execution and legitimacy, given a narrow post-election margin, with procurement transparency and service restoration as key stabilizers.",
        drivers: [
          "Close 2025 election and relatively narrow governing margin increase sensitivity to shocks.",
          "Hurricane Melissa recovery is a large execution test, delays or procurement controversy can become legitimacy triggers.",
          "Household cost-of-living pressure and public safety narratives can shift sentiment quickly in a low turnout environment.",
          "Integrity narratives can amplify if they intersect with recovery spending and accountability."
        ],
        assumptions: [
          "No sudden parliamentary collapse via multiple vacancies or defections.",
          "Recovery financing and coordination remain intact, with measurable progress on service restoration.",
          "No sustained nationwide unrest that forces a political reset."
        ],
        scenario_outlook: {
          horizon: "12 months",
          scenarios: [
            { id: "A", label: "BASE. No trigger, managed recovery", weight: 0.72 },
            { id: "B", label: "RISK. Compound stress trigger emerges", weight: 0.23 },
            { id: "C", label: "LOW. Opportunistic mandate trigger", weight: 0.05 }
          ]
        },

        longform: {
          button_label: "Open longform explainer",
          placeholder_id: "longform-jam-election-trigger-12m",
          teaser: "A deeper explainer is available, showing how Jamaica avoids an early-election trigger, and what would have to break for the trigger to appear.",
          note: "",
          html: `<h1>Jamaica’s Quiet Year</h1>
<h2>How Jamaica avoids an early-election trigger, and what would have to break for one to appear</h2>

<p><strong>Horizon:</strong> Dec 15, 2025 to Dec 15, 2026</p>
<p><strong>Question:</strong> What is the probability that a <em>trigger</em> emerges that makes a snap election meaningfully more likely than baseline, even if an election is never called?</p>

<h3>Base case in one sentence</h3>
<p><strong>Most likely, Jamaica stays in “govern and rebuild” mode rather than “campaign again” mode, and no early-election trigger emerges in the next 12 months.</strong></p>

<h3>Our current weighting</h3>
<ul>
  <li><strong>Path A (No trigger): 72%</strong></li>
  <li><strong>Path B (Instability trigger): 23%</strong></li>
  <li><strong>Path C (Opportunistic trigger): 5%</strong></li>
</ul>
<p>These weights reflect a fresh mandate, strong institutional defaults, and macro indicators that support stability, while Hurricane Melissa and a narrow parliamentary margin increase the surface area for shocks.</p>

<hr>

<h3>The first truth: Jamaica can call elections early, even when things are calm</h3>
<p>Jamaica is a Westminster-style parliamentary democracy, and the Constitution explicitly allows the Governor-General to prorogue or dissolve Parliament, and sets a maximum life of Parliament as five years from the first sitting unless sooner dissolved (see Jamaica Constitution Order in Council). So the “early election” question is never, “Is it legal?” It is always, “Is it rational?”</p>

<hr>

<h3>The second truth: the 2025 election produced both stability and sensitivity</h3>
<p>The general election was held on September 3, 2025, and preliminary official results show JLP winning 34 constituencies and PNP 29, with preliminary turnout around 39.5% (Electoral Commission of Jamaica). That combination matters:</p>
<ul>
  <li><strong>Stability:</strong> a clear governing majority exists.</li>
  <li><strong>Sensitivity:</strong> 34 seats is only two seats above the 32-seat majority line in a 63-seat chamber, so small shocks can matter more than in a landslide Parliament.</li>
</ul>
<p>In other words, Jamaica is not fragile, but it is more responsive to real events.</p>

<hr>

<h3>Why Path A is most likely: the incentives favor “delivery,” not “rerun”</h3>
<p>A government that has just won re-election typically has one overriding incentive: <strong>convert power into visible results</strong>. That incentive is stronger in Jamaica right now because the next year is shaped by three forces that reward competence over theatrics:</p>

<h4>1) Hurricane Melissa makes governance a performance test</h4>
<p>The World Bank and IDB estimate US$8.8 billion in physical damage, about 41% of 2024 GDP, the costliest hurricane in Jamaica’s recorded history (World Bank, IDB). Massive shocks sometimes destabilize politics, but they also create a powerful stabilizer: voters and institutions demand competence, speed, and coherence.</p>

<h4>2) International financing reduces immediate fiscal panic</h4>
<p>The IMF and partner institutions announced a coordinated package of up to US$6.7 billion over three years for recovery and reconstruction, including emergency liquidity and longer-term financing (IMF). This matters because fiscal panic is a classic trigger engine. When a government cannot finance its obligations, political bargaining becomes desperate. When financing exists, the game shifts toward delivery and integrity.</p>

<h4>3) The macro baseline was supportive going into the election</h4>
<ul>
  <li><strong>Unemployment:</strong> STATIN reports 3.3% (July 2025), very low by historical standards (STATIN).</li>
  <li><strong>Inflation:</strong> Bank of Jamaica reported annual headline inflation at 3.3% in July 2025, below its 4–6% target band, while expecting inflation within target over the next two years (Bank of Jamaica).</li>
</ul>
<p>A stable macro baseline does not guarantee stability after a Category 5 hurricane, but it reduces the chance that the country enters a fast economic spiral that forces political reset behavior.</p>

<hr>

<h3>The sentiment layer: Jamaica is competitive, watchful, and hard to impress</h3>
<p>The 2025 campaign environment was not “one side dominating.” It was tight, with serious undecided blocs and leader ratings that told a deeper story: a country that is engaged, skeptical, and willing to shift.</p>

<h4>1) Low turnout means mobilization shocks can move reality quickly</h4>
<p>Turnout was around 39.5%, and low participation creates a paradox: it reduces the chance of constant agitation, but it increases sensitivity to events that suddenly mobilize people.</p>

<h4>2) Polling showed a narrow psychological gap between leaders</h4>
<p>Pre-election polls showed a narrow lead for PNP in some voting intention metrics, with a large undecided block, and leader favourability figures that were close (RJR News). That is the signature of a competitive democracy: leadership support exists, leadership skepticism exists, and the middle is movable.</p>

<hr>

<h3>So what keeps Jamaica in Path A?</h3>
<p>Path A is “no trigger.” It is not passive. It is built, week by week, through predictable stability mechanisms. Here is the Path A machine, described plainly:</p>

<h4>1) Keep Parliament boring</h4>
<p>With a narrow seat margin, the most stabilizing behavior is disciplined attendance, strong caucus cohesion, and rapid containment of internal disputes. Boring Parliament is not dull, it is national stability.</p>

<h4>2) Make recovery measurable</h4>
<p>After Melissa, legitimacy becomes a dashboard whether anyone builds one or not. If government does not publish clear progress metrics, the public creates its own metric, usually anger. The World Bank estimate breaks damage down across housing and infrastructure as major categories, which is exactly where public frustration concentrates.</p>

<h4>3) Preserve trust during procurement</h4>
<p>Disaster spending is where otherwise stable governments get wounded. It is also where opposition strategy becomes sharpest. This is why Path A depends on a clean procurement posture, independent oversight, and visible accountability, because one credible scandal can become a trigger.</p>

<h4>4) Maintain safety gains without creating new legitimacy fractures</h4>
<p>Significant reductions in murders were reported in 2025, and government communications emphasized law-enforcement success. But sources also note human rights concerns around enforcement methods. Safety gains remain stabilizing only if the public believes the methods are lawful and sustainable.</p>

<hr>

<h3>What would have to break for a trigger to appear?</h3>
<p>This is the heart of the story. Path B is not “chaos.” It is “compound stress that changes incentives.” A trigger emerges when at least one of these fault lines becomes sustained and national:</p>

<h4>Fault line 1: parliamentary math shock</h4>
<p>The governing party has limited buffer. If vacancies, illness, resignations, or by-election losses cluster, legislative control begins to feel uncertain. When a government begins to fear a confidence defeat, early election talk becomes rational.</p>

<h4>Fault line 2: recovery execution failure that becomes a legitimacy crisis</h4>
<p>Triggers here look like prolonged power, water, or road restoration delays that remain visible month after month; a shelter and displacement problem that stays stubbornly high; supply bottlenecks that turn into political blame; or procurement controversy that does not die in one news cycle.</p>

<h4>Fault line 3: integrity controversy that shifts from narrative to consequence</h4>
<p>Jamaica’s Integrity Commission matter around financial disclosures is entangled with legal constraints and disclosure limits, which can keep the issue alive as a trust channel. A trigger appears if this evolves into cabinet-level resignations, caucus fracture, or sustained public protests tied to governance legitimacy.</p>

<h4>Fault line 4: household stress shock</h4>
<p>If inflation accelerates sharply due to post-hurricane logistics and imports, or if currency stability comes under pressure, household mood can change rapidly. Bank of Jamaica has explicitly noted inflation risk management and FX stability as key priorities in policy communication. The trigger here is not “inflation exists.” It is “inflation becomes a lived crisis again.”</p>

<hr>

<h3>The subtle but powerful “avoidance lesson”</h3>
<p><strong>In Jamaica, an early-election trigger is usually not a single event. It is a stack: a delay plus a scandal plus household pain. A safety controversy plus a legitimacy story plus a parliamentary wobble.</strong></p>
<p>The leadership insight is equally simple:</p>
<ul>
  <li>Deliver recovery in public metrics</li>
  <li>Keep procurement clean and auditable</li>
  <li>Protect households with targeted relief when needed</li>
  <li>Maintain safety gains with rights credibility</li>
  <li>Keep parliamentary discipline airtight</li>
</ul>

<hr>

<h3>Reader takeaway</h3>
<p><strong>Most likely outcome:</strong> Jamaica stays on its normal governance track, and no early-election trigger appears.</p>
<p><strong>But the watchlist matters:</strong> Hurricane Melissa created an unusually large execution challenge, and the parliamentary majority is narrow, so trigger risk remains real and measurable.</p>

<hr>

<h3>Citations</h3>
<ul>
  <li><a href="https://www.reuters.com/world/americas/jamaicas-labour-party-wins-third-term-promising-tax-cuts-2025-09-04/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">Reuters: Jamaica’s Labour Party wins third term promising tax cuts</a></li>
  <li><a href="https://roadtorepublic.mlca.gov.jm/wp-content/uploads/2025/02/The-Jamaica-Constitution-Order-in-Council-1962-updated-to-2024-clean-v-2024.pdf?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">Jamaica Constitution Order in Council, 1962</a></li>
  <li><a href="https://www.ecj.com.jm/september-3-2025-elections-preliminary-results/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">Electoral Commission of Jamaica: Preliminary Results</a></li>
  <li><a href="https://www.worldbank.org/en/news/press-release/2025/11/19/world-bank-idb-estimate-hurricane-melissa-damage-to-jamaica-totals-all-time-high-of-us-8-8-billion?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">World Bank/IDB: Estimated damage from Hurricane Melissa</a></li>
  <li><a href="https://www.imf.org/en/news/articles/2025/12/01/pr25400-jamaica-billions-over-3-years-for-recovery-and-reconstruct-after-hurricane-melissa?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">IMF: Support package for recovery and reconstruction</a></li>
  <li><a href="https://statinja.gov.jm/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">STATIN Jamaica</a></li>
  <li><a href="https://boj.org.jm/monetary-policy-press-release-august-2025/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">Bank of Jamaica: Monetary Policy Press Release - August 2025</a></li>
  <li><a href="https://radiojamaicanewsonline.com/local/pnp-holds-31-lead-over-jlp-in-latest-don-anderson-poll?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">RJR News: PNP poll lead over JLP</a></li>
  <li><a href="https://radiojamaicanewsonline.com/local/don-anderson-poll-holness-takes-75-per-cent-favourability-lead-golding-has-lower-unfavourable-rating?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">RJR News: Poll on leader favourability</a></li>
  <li><a href="https://opm.gov.jm/news/murders-plummets-major-gun-busts-underscore-law-enforcement-success/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">OPM Jamaica: Crime trend reporting</a></li>
  <li><a href="https://apnews.com/article/bdc4ab66ca9ef293ea6396f4c1e18f0c?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">AP News: Persistent displacement and recovery strain</a></li>
  <li><a href="https://web5.jamaica-gleaner.com/article/news/20250710/ic-denies-access-holness-forensic-report-cites-court-case-and-gag-clause?qt-article_image_video=1&utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">Jamaica Gleaner: IC/Integrity Commission matter</a></li>
  <li><a href="https://boj.org.jm/monetary-policy-press-release-june-2025/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">Bank of Jamaica: Monetary Policy Press June 2025</a></li>
</ul>`


        },

        mpe_analysis: {
          ticker: "JAM-ELECT",
          exchange: "Jamaica",
          horizon_days: 365,
          horizon_end: "2026-12-15",
          as_of: "2025-12-15",
          price_anchor_label: "TRIGGER LIKELIHOOD (12M)",
          price_anchor: "28",
          currency: "%",
          volatility_posture: "Moderate, policy and execution sensitive",
          driver_chips: [
            "Parliamentary math and party discipline",
            "Recovery execution after Hurricane Melissa",
            "Integrity and procurement credibility",
            "Household cost-of-living pressure",
            "Crime and public order narrative"
          ],
          verified_anchors: [
            {
              title: "Close election and narrow mandate",
              detail: "EOJ preliminary results reported by the Jamaica Gleaner showed JLP leading in 34 constituencies and PNP in 29, with 39.5 percent turnout, highlighting a closely contested electorate.",
              source: "Jamaica Gleaner, EOJ turnout and preliminary results (Sep 4 2025)",
              url: "https://web5.jamaica-gleaner.com/article/news/20250904/javotes2025-eoj-reports-395-cent-voter-turnout-general-election"
            },
            {
              title: "Constitutional timing is flexible",
              detail: "Section 64 of the Constitution allows the Governor-General to prorogue or dissolve Parliament, and sets a five-year term from the first sitting unless sooner dissolved.",
              source: "Constitution of Jamaica, section 64 (PDF)",
              url: "https://roadtorepublic.mlca.gov.jm/wp-content/uploads/2025/02/The-Jamaica-Constitution-Order-in-Council-1962-updated-to-2024-clean-v-2024.pdf"
            },
            {
              title: "Recovery execution is a major legitimacy test",
              detail: "An IMF press release describes a coordinated package of up to US$6.7 billion over three years for recovery and reconstruction after Hurricane Melissa, with damages estimated at US$8.8 billion.",
              source: "IMF press release, Dec 1 2025",
              url: "https://www.imf.org/en/news/articles/2025/12/01/pr25400-jamaica-billions-over-3-years-for-recovery-and-reconstruct-after-hurricane-melissa"
            },
            {
              title: "Persistent recovery stress is visible",
              detail: "AP reporting described ongoing displacement, shelter use, and restoration timelines across the northern Caribbean after Hurricane Melissa, including Jamaica.",
              source: "AP News, Dec 2025",
              url: "https://apnews.com/article/bdc4ab66ca9ef293ea6396f4c1e18f0c"
            }
          ],
          scenarios: [
            {
              id: "A",
              name: "Base, no trigger, managed recovery",
              weight_pct: 72,
              conditions: [
                "Parliament stays stable with disciplined attendance and cohesion",
                "Recovery delivery is measurable, procurement remains clean, and services improve steadily",
                "Household stress remains contained enough to avoid sustained unrest"
              ],
              expected_behavior: "No early-election trigger emerges, politics stays within normal cycle, and election timing remains a low-salience issue."
            },
            {
              id: "B",
              name: "Risk, compound stress trigger emerges",
              weight_pct: 23,
              conditions: [
                "Recovery execution failures become sustained national grievances",
                "A credibility or integrity controversy overlaps with recovery spending or procurement",
                "Parliamentary math tightens through vacancies or by-election risk, raising confidence-vote anxiety"
              ],
              expected_behavior: "Early-election talk becomes rational and visible, even if an election is not yet called."
            },
            {
              id: "C",
              name: "Low, opportunistic mandate trigger",
              weight_pct: 5,
              conditions: [
                "Government gains a durable polling advantage and wants a stronger mandate",
                "Opposition fragmentation persists long enough to make an early call attractive",
                "Public mood is positive enough that an early vote does not look like convenience"
              ],
              expected_behavior: "Snap election becomes a strategic option rather than a crisis response."
            }
          ],
          triggers: {
            upside: [
              "Transparent recovery dashboard and steady service restoration reduce grievance momentum.",
              "Procurement remains boring and auditable, no multi-cycle scandal emerges.",
              "Public safety and cost-of-living narratives remain stable."
            ],
            downside: [
              "Service restoration delays become widespread and persistent, with visible protest activity.",
              "A procurement or integrity scandal survives multiple news cycles and enters parliamentary conflict.",
              "Multiple vacancies or by-election losses tighten the governing margin toward the confidence threshold."
            ]
          },
          citations: [
            {
              label: "Jamaica Gleaner, EOJ turnout and preliminary constituency results (39.5 percent turnout; 34 vs 29)",
              url: "https://web5.jamaica-gleaner.com/article/news/20250904/javotes2025-eoj-reports-395-cent-voter-turnout-general-election",
              note: "Election competitiveness and turnout"
            },
            {
              label: "Constitution of Jamaica, section 64 prorogation and dissolution of Parliament (PDF)",
              url: "https://roadtorepublic.mlca.gov.jm/wp-content/uploads/2025/02/The-Jamaica-Constitution-Order-in-Council-1962-updated-to-2024-clean-v-2024.pdf",
              note: "Five-year term unless sooner dissolved, dissolution power"
            },
            {
              label: "IMF press release, US$6.7B package for Hurricane Melissa recovery and reconstruction",
              url: "https://www.imf.org/en/news/articles/2025/12/01/pr25400-jamaica-billions-over-3-years-for-recovery-and-reconstruct-after-hurricane-melissa",
              note: "Recovery financing anchor and damage estimate"
            },
            {
              label: "AP News, post Hurricane Melissa displacement and recovery conditions across the northern Caribbean",
              url: "https://apnews.com/article/bdc4ab66ca9ef293ea6396f4c1e18f0c",
              note: "Recovery stress and shelter conditions"
            }
          ]
        },

        sources: [
          { label: "EOJ turnout and preliminary results (via Jamaica Gleaner)", url: "https://web5.jamaica-gleaner.com/article/news/20250904/javotes2025-eoj-reports-395-cent-voter-turnout-general-election" },
          { label: "Constitution of Jamaica, section 64 (PDF)", url: "https://roadtorepublic.mlca.gov.jm/wp-content/uploads/2025/02/The-Jamaica-Constitution-Order-in-Council-1962-updated-to-2024-clean-v-2024.pdf" },
          { label: "IMF, Melissa recovery support package (Dec 1 2025)", url: "https://www.imf.org/en/news/articles/2025/12/01/pr25400-jamaica-billions-over-3-years-for-recovery-and-reconstruct-after-hurricane-melissa" }
        ],
        tags: ["jamaica","caribbean","politics","electiontiming","snaprisk","parliament","recovery","hurricane-melissa","governance","integrity","12m","scenario","trigger"]
      },
      {
        id: "slu-electricity-6m",
        category: "Caribbean",
        carib_area: "Saint Lucia",
        title: "Saint Lucia electricity prices, likelihood of increase, next 6 months",
        summary: "Electricity prices are more likely than not to rise modestly over the next six months, because the current tariff includes a negative fuel cost adjustment that can revert toward zero or turn positive if fuel costs rise.",
        due: "2026-06-14",
        updated: "2025-12-14",
        confidence: 64,
        status: "warn",
        call: "Base case (55%): a modest increase as the fuel cost adjustment moves from negative toward zero, lifting the effective tariff even if the base rate is unchanged. Consumer-friendly case (25%): flat to slightly lower bills if fuel remains below the base price and system efficiency holds. Risk case (20%): a noticeable increase if fuel spikes, storms disrupt operations, or generation efficiency worsens. Implied likelihood of a higher effective per-kWh price than today over the next six months: ~75%, with the most probable outcome being a modest rise rather than a severe shock. Policy levers that lower tail risk include faster solar and storage procurement, demand-side efficiency, and targeted lifeline relief for low consumption households.",
        band: "Medium",
        most_likely_driver: "Monthly fuel cost adjustment movement, driven by the gap between current fuel prices and the prior-year average base price used in the adjustment calculation.",
        drivers: [
          "Tariff mechanics: LUCELEC basic energy rates are adjusted annually, while a fuel cost adjustment is applied per kWh and changes monthly based on fuel prices and fuel used in generation.",
          "Fuel exposure: as a fuel-intensive grid, fuel prices and freight costs can pass through quickly via the monthly adjustment.",
          "Operational efficiency: outages, maintenance timing, and storm disruption can increase fuel burn per kWh and raise the effective cost to customers.",
          "Renewables pipeline: solar and storage procurement pace determines how quickly fuel exposure and bill volatility decline.",
          "Policy posture and fiscal space: cost-of-living measures can soften household impact, but broad energy subsidies can be fiscally expensive and reduce room for resilience investment."
        ],
        assumptions: [
          "No prolonged multi-month fuel price shock far above recent ranges.",
          "No major grid-damaging storm event causing extended operational inefficiency.",
          "No broad, untargeted electricity subsidy that materially offsets fuel pass-through for all customers."
        ],
        scenario_outlook: {
          horizon: "6 months",
          scenarios: [
            { id: "A", label: "BASE. Fuel adjustment discount fades", weight: 0.55 },
            { id: "B", label: "FLAT. Fuel stays subdued, efficiency holds", weight: 0.25 },
            { id: "C", label: "UP. Fuel shock or storm disruption", weight: 0.20 }
          ]
        },

        mpe_analysis: {
          ticker: "SLU-POWER",
          exchange: "Saint Lucia",
          horizon_days: 182,
          horizon_end: "2026-06-14",
          as_of: "2025-11-30",
          price_anchor_label: "DOMESTIC 1–180 kWh RATE (Nov 2025 bills)",
          price_anchor: "0.804",
          currency: "EC$/kWh",
          volatility_posture: "Moderate, fuel-sensitive",
          driver_chips: [
            "Fuel cost adjustment, monthly reset",
            "Global fuel prices and shipping costs",
            "Annual base tariff reset",
            "Grid reliability and storm disruption",
            "Renewables and storage procurement pace",
            "Cost-of-living policy and fiscal space"
          ],
          verified_anchors: [
            {
              title: "Tariff anchor and fuel adjustment",
              detail: "LUCELEC lists domestic 1–180 units at EC$0.804 per kWh, based on a 2025 base tariff EC$0.843 and a fuel cost adjustment of -EC$0.039 applied to bills for November 2025.",
              source: "LUCELEC Rates & Service Standards",
              url: "https://www.lucelec.com/content/rates-service-standards"
            },
            {
              title: "Fuel surcharge cost adjustment formula",
              detail: "LUCELEC FSCA documents describe the adjustment as current fuel cost minus the prior-year average base price, divided by total kWh sold, producing a cents-per-unit adjustment that can be negative or positive.",
              source: "LUCELEC FSCA PDF (example month)",
              url: "https://www.lucelec.com/sites/default/files/FSCA%20-%20April%202025.pdf"
            },
            {
              title: "Troumassee solar + storage procurement",
              detail: "LUCELEC issued an RFP for the EPC of a 10MWac solar PV facility plus a 13.3MW/26.6MWh BESS and substation, dated November 10, 2025, a direct step toward reducing fuel exposure over time.",
              source: "LUCELEC RFP notice",
              url: "https://www.lucelec.com/content/rfp-troumassee-10mwac-solar-pv-133mw266mwh-bess-and-substation-project"
            },
            {
              title: "Cost-of-living policy posture",
              detail: "Government communications show active cost-of-living relief measures, including the suspension of a six percent service charge on price-controlled essential goods from June 1, 2025 until May 31, 2026, indicating willingness to intervene on household costs.",
              source: "Government of Saint Lucia portal",
              url: "https://www.govt.lc/news/government-waives-a-6-service-charge-tax-on-essential-goods"
            },
            {
              title: "Fiscal constraints and debt context",
              detail: "The IMF Article IV consultation notes fiscal deficits and elevated debt, and recommends sustained fiscal consolidation while safeguarding resilience and capital spending, which constrains the feasibility of broad subsidies.",
              source: "IMF Article IV press release",
              url: "https://www.imf.org/en/news/articles/2025/03/12/pr-2560-st-lucia-imf-executive-board-concludes-2024-article-iv-consultation"
            },
            {
              title: "Inflation category cross-check",
              detail: "ECCB CPI tables track a dedicated category for Housing, Water, Electricity, Gas, and Other Fuels, useful for monitoring how utility costs feed into overall inflation in Saint Lucia.",
              source: "ECCB CPI, Saint Lucia",
              url: "https://www.eccb-centralbank.org/statistics-category/other-real-sector/consumer-price-index-saint-lucia/q"
            }
          ],
          scenarios: [
            {
              id: "A",
              name: "Base, modest increase as the fuel discount fades",
              weight_pct: 55,
              conditions: [
                "Fuel adjustment drifts from -EC$0.039 toward zero or slightly positive",
                "No broad subsidy offsets pass-through for all customers",
                "No major operational shock that changes dispatch efficiency for weeks"
              ],
              expected_behavior: "Bills rise modestly as the fuel adjustment becomes less negative, lifting the effective per-kWh rate even if the base tariff is stable."
            },
            {
              id: "B",
              name: "Consumer-friendly, flat to slightly lower bills",
              weight_pct: 25,
              conditions: [
                "Fuel remains below the base price for multiple months",
                "System efficiency holds, no prolonged outages",
                "Incremental renewables, storage, or demand reduction helps at the margin"
              ],
              expected_behavior: "Bills stay near current levels, with small month-to-month relief if the fuel adjustment stays negative."
            },
            {
              id: "C",
              name: "Risk, noticeable increase from fuel shock or disruption",
              weight_pct: 20,
              conditions: [
                "Fuel price shock moves current prices above the base price",
                "Storm disruption or outages increase fuel burn per kWh",
                "Pass-through dominates, limited or delayed mitigation"
              ],
              expected_behavior: "Bills rise materially, and electricity contributes more visibly to cost-of-living pressure."
            }
          ],
          triggers: {
            upside: [
              "Fuel cost adjustment remains negative for consecutive months, indicating current fuel costs below the base price.",
              "Rapid progress on solar and storage procurement milestones, with clear award and mobilization timelines.",
              "Demand-side efficiency measures reduce peak load and diesel burn, improving the effective cost profile."
            ],
            downside: [
              "Fuel cost adjustment flips positive and remains positive, signaling current fuel costs above the base price.",
              "A disruptive storm season event or major outage increases operating costs and reduces efficiency.",
              "A base tariff reset or other regulatory change increases the underlying rate level."
            ]
          },
          citations: [
            {
              label: "LUCELEC Rates & Service Standards, base tariff and fuel cost adjustment (Nov 2025 bills)",
              url: "https://www.lucelec.com/content/rates-service-standards",
              note: "Tariff anchor, base tariff EC$0.843 and fuel adjustment -EC$0.039"
            },
            {
              label: "LUCELEC Fuel Surcharge Cost Adjustment PDF (example month, April 2025)",
              url: "https://www.lucelec.com/sites/default/files/FSCA%20-%20April%202025.pdf",
              note: "FSCA methodology and base price comparison"
            },
            {
              label: "LUCELEC RFP, Troumassee 10MWac Solar PV + BESS + Substation project",
              url: "https://www.lucelec.com/content/rfp-troumassee-10mwac-solar-pv-133mw266mwh-bess-and-substation-project",
              note: "Renewables procurement milestone, Nov 10 2025"
            },
            {
              label: "Government of Saint Lucia, cost-of-living relief measure (service charge suspension to May 31 2026)",
              url: "https://www.govt.lc/news/government-waives-a-6-service-charge-tax-on-essential-goods",
              note: "Policy posture and monitoring language"
            },
            {
              label: "IMF, 2024 Article IV consultation, St. Lucia, fiscal and debt context",
              url: "https://www.imf.org/en/news/articles/2025/03/12/pr-2560-st-lucia-imf-executive-board-concludes-2024-article-iv-consultation",
              note: "Fiscal constraint and resilience priorities"
            },
            {
              label: "ECCB CPI, Saint Lucia, Housing/Water/Electricity/Gas category tracking",
              url: "https://www.eccb-centralbank.org/statistics-category/other-real-sector/consumer-price-index-saint-lucia/q",
              note: "Inflation cross-check"
            }
          ]
        },

        sources: [
          { label: "LUCELEC rates and service standards", url: "https://www.lucelec.com/content/rates-service-standards" },
          { label: "ECCB CPI, Saint Lucia", url: "https://www.eccb-centralbank.org/statistics-category/other-real-sector/consumer-price-index-saint-lucia/q" }
        ],
        tags: ["saintlucia","caribbean","costofliving","inflation","electricity","lucelec","fuel","fsca","tariff","renewables","solar","battery","policy","6m","scenario"]
      },

      {
        id: "pm-portugal-presidential-election-2026",
        category: "Prediction Markets",
        categories: ["Prediction Markets","Politics"],
        theme_key: "portugal",
        stamp: "PT",
        title: "Portugal Presidential Election (2026), market + scenario view",
        summary: "Market favors Luís Marques Mendes, but polling points to a runoff. The decisive variable is who becomes the second-round consensus when coalition and turnout dynamics harden.",
        due: "2026-01-25",
        updated: "2025-12-17",
        confidence: 58,
        status: "warn",
        call: "Base case (50%): establishment consolidation in the runoff, second-choice flows favor the mainstream option. Fragmentation case (40%): first-round dispersion and turnout pockets determine the runoff pairing and re-price the race. Surprise surge (10%): a late momentum swing lifts an outsider lane. Market baseline (Polymarket): Mendes 64%, Gouveia e Melo 22%, Ventura 6.5%, Cotrim Figueiredo 5.1%, Seguro ~4%. Poll anchor (Reuters): a tight first round and a likely Jan 18 first round plus Feb 8 runoff dynamic.",
        band: "Medium",
        most_likely_driver: "Runoff pairing and second-choice flows, plus turnout composition, especially whether the electorate consolidates around a mainstream option in round two.",
        drivers: [
          "Polymarket currently implies a strong lead for Mendes, but Reuters polling suggests a closer first round and likely runoff, making second-choice flows decisive.",
          "Portugal uses a two-round presidential system if no candidate exceeds 50% in round one, so the runoff pairing is the key structural variable.",
          "High rejection risk can matter more than first-round strength, especially for polarizing candidates."
        ],
        assumptions: [
          "A runoff occurs (no outright first-round winner).",
          "No major scandal or exogenous shock fundamentally alters candidate viability in the final weeks.",
          "Turnout patterns are broadly consistent with recent presidential elections."
        ],
        market_meta: { platform: "Polymarket", volume: "$69.8m", expiry_note: "Election" },
        quick_odds: [
          { label: "Mendes", pct: 64 },
          { label: "Gouveia e Melo", pct: 22 },
          { label: "Ventura", pct: 6.5 }
        ],
        market_odds: [
          { label: "Luís Marques Mendes (PSD)", pct: 64 },
          { label: "Henrique Gouveia e Melo (IND)", pct: 22 },
          { label: "André Ventura (CH)", pct: 6.5 },
          { label: "João Cotrim Figueiredo (IL)", pct: 5.1 },
          { label: "António José Seguro (IND)", pct: "4" },
          { label: "Other", pct: "<1" }
        ],
        scenario_outlook: {
          horizon: "Election",
          scenarios: [
            { id: "A", label: "BASE. Establishment consolidation", weight: 0.50 },
            { id: "B", label: "RUNOFF. Pairing drives repricing", weight: 0.40 },
            { id: "C", label: "SURGE. Outsider lane breaks late", weight: 0.10 }
          ]
        },
        mpe_analysis: {
          ticker: "PT-PRES",
          exchange: "Portugal",
          horizon_days: 39,
          horizon_end: "2026-01-25",
          as_of: "2025-12-17",
          price_anchor_label: "MARKET BASELINE (Polymarket)",
          price_anchor: "Mendes 64%, Gouveia 22%",
          currency: "",
          volatility_posture: "Moderate, runoff-driven",
          driver_chips: [
            "Runoff pairing and second-choice flows",
            "Turnout composition and coalition endorsements",
            "Rejection risk versus broad acceptability",
            "Late campaign momentum and credibility shocks"
          ],
          verified_anchors: [
            { title: "Market baseline", detail: "Polymarket implied probabilities for Portugal Presidential Election.", source: "Polymarket", url: "https://polymarket.com/event/portugal-presidential-election" },
            { title: "Polling anchor and expected runoff", detail: "Reuters reported Ventura and Gouveia e Melo tied at 18% with Mendes at 16%, and a Jan 18 first round plus Feb 8 runoff expected.", source: "Reuters", url: "https://www.reuters.com/world/poll-shows-farright-leader-independent-admiral-tied-race-portugals-presidency-2025-11-28/" }
          ],
          scenarios: [
            { id: "A", name: "Base, mainstream consolidation in runoff", weight_pct: 50, conditions: ["Runoff pairing favors a mainstream consensus outcome", "Endorsements cohere and second-choice flows concentrate"], expected_behavior: "Market favorite holds advantage as runoff coalition logic dominates." },
            { id: "B", name: "Runoff math dominates, pairing drives repricing", weight_pct: 40, conditions: ["First round remains tight and fragmented", "Runoff pairing is decisive for second-choice flows"], expected_behavior: "Probabilities shift sharply once runoff pairing becomes clearer." },
            { id: "C", name: "Surge case, outsider lane breaks late", weight_pct: 10, conditions: ["Late turnout swing or credibility shock", "Outsider lane expands beyond base"], expected_behavior: "A surprise finalist emerges or the runoff becomes more volatile than expected." }
          ],
          triggers: {
            upside: [
              "Polling shows consolidation around Mendes in a runoff scenario.",
              "Endorsement signals reduce fragmentation and raise acceptability.",
              "No late credibility shock to the market leader."
            ],
            downside: [
              "Polling tightens across multiple candidates, increasing runoff pairing uncertainty.",
              "A turnout shock or scandal changes coalition behavior.",
              "Evidence that second-choice flows do not consolidate as expected."
            ]
          },
          citations: [
            { label: "Polymarket, Portugal Presidential Election", url: "https://polymarket.com/event/portugal-presidential-election", note: "Market baseline and volume" },
            { label: "Reuters, Portugal presidential poll and runoff expectation", url: "https://www.reuters.com/world/poll-shows-farright-leader-independent-admiral-tied-race-portugals-presidency-2025-11-28/", note: "ICS/ISCTE poll and expected Jan 18/Feb 8 structure" }
          ]
        },
        sources: [
          { label: "Polymarket, Portugal Presidential Election", url: "https://polymarket.com/event/portugal-presidential-election" },
          { label: "Reuters, Portugal presidential poll", url: "https://www.reuters.com/world/poll-shows-farright-leader-independent-admiral-tied-race-portugals-presidency-2025-11-28/" }
        ],
        tags: ["predictionmarkets","politics","portugal","election","runoff","coalitions","turnout","sentiment"]
      },

      {
        id: "pm-democratic-nominee-2028",
        category: "Prediction Markets",
        categories: ["Prediction Markets","Politics"],
        theme_key: "usa",
        stamp: "D28",
        title: "Democratic Presidential Nominee 2028, market + scenario view",
        summary: "Newsom is the market anchor. The real uncertainty is whether the field stays open until after the 2026 midterms, creating a late-entry window and a longer consolidation fight.",
        due: "2028-11-07",
        updated: "2025-12-17",
        confidence: 54,
        status: "warn",
        call: "Base case (45%): early front-runner consolidates via endorsements and fundraising. Contested case (35%): multiple lanes remain viable and the race runs long. Late-entry case (20%): a new entrant after the 2026 midterms reshapes the field. Market baseline (Polymarket): Newsom 36%, AOC 11%, Harris 5.1%, Shapiro 5.0%, Buttigieg 5.0%, Mark Kelly 3.2%.",
        band: "Wide",
        most_likely_driver: "Endorsement and donor-network consolidation versus a fragmented field that stays open through the 2026 midterms.",
        drivers: [
          "Nomination dynamics are dominated by fundraising, endorsements, and early-state momentum, not national-name recognition alone.",
          "The 2026 midterms are a structural inflection point that can validate or destabilize party strategy and create late-entry opportunities.",
          "Media share-of-voice and favorability movement matter most when the field is crowded and cues are scarce."
        ],
        assumptions: [
          "No extraordinary event forces a major candidate to exit early or a new candidate to enter immediately.",
          "Early-state dynamics remain important for legitimacy and momentum.",
          "Party elites and donors behave as coordinating agents rather than staying neutral indefinitely."
        ],
        market_meta: { platform: "Polymarket", volume: "$381.6m", expiry_note: "Nomination" },
        quick_odds: [
          { label: "Newsom", pct: 36 },
          { label: "AOC", pct: 11 },
          { label: "Harris", pct: 5.1 }
        ],
        market_odds: [
          { label: "Gavin Newsom", pct: 36 },
          { label: "Alexandria Ocasio-Cortez", pct: 11 },
          { label: "Kamala Harris", pct: 5.1 },
          { label: "Josh Shapiro", pct: 5.0 },
          { label: "Pete Buttigieg", pct: 5.0 },
          { label: "Mark Kelly", pct: 3.2 },
          { label: "Jon Ossoff", pct: 2.9 },
          { label: "J.B. Pritzker", pct: 2.7 },
          { label: "Field/Other", pct: "—" }
        ],
        scenario_outlook: {
          horizon: "Nomination cycle",
          scenarios: [
            { id: "A", label: "BASE. Early consolidation", weight: 0.45 },
            { id: "B", label: "CONTESTED. Multi-lane fight", weight: 0.35 },
            { id: "C", label: "LATE. Post-midterms entrant", weight: 0.20 }
          ]
        },
        mpe_analysis: {
          ticker: "DEM28",
          exchange: "US Politics",
          horizon_days: 1057,
          horizon_end: "2028-11-07",
          as_of: "2025-12-17",
          price_anchor_label: "MARKET BASELINE (Polymarket)",
          price_anchor: "Newsom 36%, AOC 11%",
          currency: "",
          volatility_posture: "High, long runway",
          driver_chips: [
            "Endorsements and donor networks",
            "Early-state momentum",
            "Post-midterms entry window",
            "Media share-of-voice and favorability"
          ],
          verified_anchors: [
            { title: "Market baseline", detail: "Polymarket implied probabilities for Democratic Presidential Nominee 2028.", source: "Polymarket", url: "https://polymarket.com/event/democratic-presidential-nominee-2028" }
          ],
          scenarios: [
            { id: "A", name: "Base, early front-runner consolidates", weight_pct: 45, conditions: ["Endorsement cascade begins early", "Fundraising and institutional cues align"], expected_behavior: "Front-runner expands lead as elites coordinate." },
            { id: "B", name: "Contested primary, multi-lane fight persists", weight_pct: 35, conditions: ["Multiple lanes stay funded and credible", "Early states do not resolve the field quickly"], expected_behavior: "Probabilities remain dispersed and shift with momentum." },
            { id: "C", name: "Late entrant reshapes the race", weight_pct: 20, conditions: ["A new high-profile entrant post-2026", "Narrative shock changes electability assumptions"], expected_behavior: "Field probability rises and the anchor candidate’s share compresses." }
          ],
          triggers: {
            upside: [
              "Fundraising and endorsements accelerate for the leading candidate.",
              "Early polling in key early states shows a durable advantage.",
              "No major late entrant appears after the 2026 midterms."
            ],
            downside: [
              "Multiple candidates show strength in early-state polling, preventing consolidation.",
              "A post-midterms entrant draws elite and donor support quickly.",
              "A major reputational event shifts favorability."
            ]
          },
          citations: [
            { label: "Polymarket, Democratic Presidential Nominee 2028", url: "https://polymarket.com/event/democratic-presidential-nominee-2028", note: "Market baseline and volume" }
          ]
        },
        sources: [
          { label: "Polymarket, Democratic Presidential Nominee 2028", url: "https://polymarket.com/event/democratic-presidential-nominee-2028" }
        ],
        tags: ["predictionmarkets","politics","us","democrats","nomination","2028","polls","fundraising","endorsements","sentiment"]
      },

      {
        id: "pm-republican-nominee-2028",
        category: "Prediction Markets",
        categories: ["Prediction Markets","Politics"],
        theme_key: "usa",
        stamp: "R28",
        title: "Republican Presidential Nominee 2028, market + scenario view",
        summary: "The market prices an heir-apparent dynamic around the sitting Vice President. The main alternative is a fragmented multi-lane fight if performance or shocks break transfer momentum.",
        due: "2028-11-07",
        updated: "2025-12-17",
        confidence: 56,
        status: "warn",
        call: "Base case (55%): heir-apparent lane consolidates, donors and party incentives coordinate around a single front-runner. Contest case (35%): factional lanes split and early states matter more. Shock case (10%): a major event reshuffles hierarchy. Market baseline (Polymarket): Vance 52%, Rubio 8.2%, Trump 4.8%, DeSantis 4.1%, Carlson 3.2%, Cruz 3.1%.",
        band: "Wide",
        most_likely_driver: "Party coordination around an heir-apparent versus factional fragmentation, especially after the 2026 midterms.",
        drivers: [
          "VP advantage and party coordination dynamics can compress the field early, unless performance shocks open factional lanes.",
          "A crowded field increases the importance of early states and endorsement signals.",
          "Media attention and perceived electability can shift quickly after major policy or geopolitical events."
        ],
        assumptions: [
          "The current top contender remains eligible and willing to run.",
          "No extraordinary legal or health event forces a sudden vacancy in the top tier.",
          "Party elites and donors continue to behave as coordinating agents."
        ],
        market_meta: { platform: "Polymarket", volume: "$122.9m", expiry_note: "Nomination" },
        quick_odds: [
          { label: "Vance", pct: 52 },
          { label: "Rubio", pct: 8.2 },
          { label: "Trump", pct: 4.8 }
        ],
        market_odds: [
          { label: "J.D. Vance", pct: 52 },
          { label: "Marco Rubio", pct: 8.2 },
          { label: "Donald Trump", pct: 4.8 },
          { label: "Ron DeSantis", pct: 4.1 },
          { label: "Tucker Carlson", pct: 3.2 },
          { label: "Ted Cruz", pct: 3.1 },
          { label: "Marjorie Taylor Greene", pct: 2.6 },
          { label: "Donald Trump Jr.", pct: 2.0 },
          { label: "Field/Other", pct: "—" }
        ],
        scenario_outlook: {
          horizon: "Nomination cycle",
          scenarios: [
            { id: "A", label: "BASE. Heir-apparent consolidates", weight: 0.55 },
            { id: "B", label: "FIGHT. Multi-lane contest", weight: 0.35 },
            { id: "C", label: "SHOCK. Hierarchy reshuffles", weight: 0.10 }
          ]
        },
        mpe_analysis: {
          ticker: "GOP28",
          exchange: "US Politics",
          horizon_days: 1057,
          horizon_end: "2028-11-07",
          as_of: "2025-12-17",
          price_anchor_label: "MARKET BASELINE (Polymarket)",
          price_anchor: "Vance 52%, Rubio 8.2%",
          currency: "",
          volatility_posture: "High, long runway",
          driver_chips: [
            "Heir-apparent coordination",
            "Factional lane fragmentation",
            "Early-state momentum and endorsements",
            "Shock sensitivity"
          ],
          verified_anchors: [
            { title: "Market baseline", detail: "Polymarket implied probabilities for Republican Presidential Nominee 2028.", source: "Polymarket", url: "https://polymarket.com/event/republican-presidential-nominee-2028" }
          ],
          scenarios: [
            { id: "A", name: "Base, heir-apparent lane consolidates", weight_pct: 55, conditions: ["Donor and party coordination begins early", "Performance signals remain supportive"], expected_behavior: "Front-runner maintains a dominant share and the field compresses." },
            { id: "B", name: "Multi-candidate fight persists", weight_pct: 35, conditions: ["Factional lanes remain funded", "Early states split outcomes"], expected_behavior: "Probabilities redistribute and coalition math dominates." },
            { id: "C", name: "Shock reshuffles hierarchy", weight_pct: 10, conditions: ["Major event changes perceived electability", "Top-tier eligibility or willingness changes"], expected_behavior: "Sudden repricing and larger 'Field' probability." }
          ],
          triggers: {
            upside: [
              "Endorsement and fundraising signals strengthen the front-runner lane.",
              "Early-state polling shows a durable advantage."
            ],
            downside: [
              "Multiple lanes gain traction and prevent consolidation.",
              "A shock event or leadership change shifts the electability frame."
            ]
          },
          citations: [
            { label: "Polymarket, Republican Presidential Nominee 2028", url: "https://polymarket.com/event/republican-presidential-nominee-2028", note: "Market baseline and volume" }
          ]
        },
        sources: [
          { label: "Polymarket, Republican Presidential Nominee 2028", url: "https://polymarket.com/event/republican-presidential-nominee-2028" }
        ],
        tags: ["predictionmarkets","politics","us","republicans","nomination","2028","endorsements","fundraising","sentiment"]
      },

      {
        id: "pm-presidential-winner-2028",
        category: "Prediction Markets",
        categories: ["Prediction Markets","Politics"],
        theme_key: "usa",
        stamp: "P28",
        title: "Presidential Election Winner 2028, market + scenario view",
        summary: "This market is the stitched composite of nominee odds plus national mood. Most likely path is baseline macro conditions and normal coalition behavior, with stress and shocks as the main weight-shifters.",
        due: "2028-11-07",
        updated: "2025-12-17",
        confidence: 52,
        status: "warn",
        call: "Base case (45%): baseline macro and normal coalition behavior, nominee quality dominates at the margins. Macro-stress case (35%): affordability pain or recession shifts turnout and persuasion dynamics. Shock case (20%): a candidate-specific or geopolitical shock dominates. Market baseline (Polymarket): Vance 32%, Newsom 18%, AOC 8%, Trump 4.3%, Rubio 4%, Harris 4%.",
        band: "Wide",
        most_likely_driver: "Macro regime and nominee quality, with turnout composition and confidence shocks as high-leverage swing variables.",
        drivers: [
          "General elections are driven by macro regime and coalition turnout more than daily headlines.",
          "Nominee quality acts as a multiplier when the macro environment is ambiguous.",
          "Shock events can dominate late-cycle narratives and reprice probabilities quickly."
        ],
        assumptions: [
          "No singular constitutional crisis changes the election timeline or rules.",
          "Two-party nominees remain the central outcome structure.",
          "Macro conditions remain the dominant driver of late-cycle mood."
        ],
        market_meta: { platform: "Polymarket", volume: "$152.2m", expiry_note: "Election" },
        quick_odds: [
          { label: "Vance", pct: 32 },
          { label: "Newsom", pct: 18 },
          { label: "AOC", pct: 8 }
        ],
        market_odds: [
          { label: "JD Vance", pct: 32 },
          { label: "Gavin Newsom", pct: 18 },
          { label: "Alexandria Ocasio-Cortez", pct: 8 },
          { label: "Donald Trump", pct: 4.3 },
          { label: "Marco Rubio", pct: 4.0 },
          { label: "Kamala Harris", pct: 4.0 },
          { label: "Field/Other", pct: "—" }
        ],
        scenario_outlook: {
          horizon: "Election cycle",
          scenarios: [
            { id: "A", label: "BASE. Normal coalition behavior", weight: 0.45 },
            { id: "B", label: "STRESS. Macro pain shifts turnout", weight: 0.35 },
            { id: "C", label: "SHOCK. Candidate/geopolitics event", weight: 0.20 }
          ]
        },
        mpe_analysis: {
          ticker: "POTUS28",
          exchange: "US Politics",
          horizon_days: 1057,
          horizon_end: "2028-11-07",
          as_of: "2025-12-17",
          price_anchor_label: "MARKET BASELINE (Polymarket)",
          price_anchor: "Vance 32%, Newsom 18%",
          currency: "",
          volatility_posture: "High, long runway",
          driver_chips: [
            "Macro regime and affordability",
            "Turnout coalition composition",
            "Nominee quality and electability",
            "Late-cycle shocks"
          ],
          verified_anchors: [
            { title: "Market baseline", detail: "Polymarket implied probabilities for Presidential Election Winner 2028.", source: "Polymarket", url: "https://polymarket.com/event/presidential-election-winner-2028" }
          ],
          scenarios: [
            { id: "A", name: "Base, normal coalition behavior", weight_pct: 45, conditions: ["Macro remains mixed but stable", "Nominee quality differentiates at the margin"], expected_behavior: "The election behaves like a standard referendum on competence and stability." },
            { id: "B", name: "Macro stress reshapes turnout and persuasion", weight_pct: 35, conditions: ["Affordability pain or recession increases", "Turnout and persuasion patterns shift"], expected_behavior: "Coalition composition changes, probabilities compress and swing." },
            { id: "C", name: "Shock dominates narrative", weight_pct: 20, conditions: ["Major candidate-specific or geopolitical shock", "Institutional trust becomes central story"], expected_behavior: "Rapid repricing driven by uncertainty and narrative dominance." }
          ],
          triggers: {
            upside: [
              "Stable macro with improving real household conditions.",
              "Nominee emerges with broad coalition appeal."
            ],
            downside: [
              "Inflation or recession shock becomes salient to households.",
              "Candidate-specific scandal, legal event, or foreign-policy shock dominates coverage."
            ]
          },
          citations: [
            { label: "Polymarket, Presidential Election Winner 2028", url: "https://polymarket.com/event/presidential-election-winner-2028", note: "Market baseline and volume" }
          ]
        },
        sources: [
          { label: "Polymarket, Presidential Election Winner 2028", url: "https://polymarket.com/event/presidential-election-winner-2028" }
        ],
        tags: ["predictionmarkets","politics","us","election","2028","macro","turnout","coalitions","sentiment"]
      },

      {
        id: "pm-xi-jinping-out-2025",
        category: "Prediction Markets",
        categories: ["Prediction Markets","Politics"],
        theme_key: "china",
        stamp: "CN",
        title: "Xi Jinping out in 2025, event-risk view (high opacity)",
        summary: "A classic low-data, high-impact market. The correct professional posture is institutional continuity absent credible signals, with strict avoidance of rumor-chasing.",
        due: "2025-12-31",
        updated: "2025-12-17",
        confidence: 78,
        status: "warn",
        call: "Base case (99%): no change, institutional continuity dominates. Managed-transition signal (0.7%): a credible official signal appears. Sudden shock (0.3%): discontinuity event. Market baseline (Polymarket): <1% Yes.",
        band: "Narrow",
        most_likely_driver: "Credible official confirmation, not social media noise. This is event-risk, not continuous forecasting.",
        drivers: [
          "High opacity environment makes rumors cheap and false positives common, so only verified institutional signals matter.",
          "The market’s resolution definition is tied to Xi’s role as CCP General Secretary within a defined timeframe, not generic influence."
        ],
        assumptions: [
          "No credible official announcement indicates removal from the General Secretary position within the timeframe.",
          "No verified institutional disruption changes formal leadership structure.",
          "Consensus credible reporting remains the resolution standard."
        ],
        market_meta: { platform: "Polymarket", volume: "$70.1m", expiry_note: "Event risk" },
        quick_odds: [
          { label: "No", pct: 99 },
          { label: "Yes", pct: 1 }
        ],
        market_odds: [
          { label: "No", pct: 99 },
          { label: "Yes", pct: 1 }
        ],
        scenario_outlook: {
          horizon: "Through Dec 31, 2025",
          scenarios: [
            { id: "A", label: "BASE. No change", weight: 0.99 },
            { id: "B", label: "SIGNAL. Managed transition", weight: 0.007 },
            { id: "C", label: "SHOCK. Sudden discontinuity", weight: 0.003 }
          ]
        },
        mpe_analysis: {
          ticker: "XI25",
          exchange: "China",
          horizon_days: 14,
          horizon_end: "2025-12-31",
          as_of: "2025-12-17",
          price_anchor_label: "MARKET BASELINE (Polymarket)",
          price_anchor: "<1% Yes",
          currency: "",
          volatility_posture: "Low probability, high impact",
          driver_chips: [
            "Official confirmation and credible reporting",
            "Institutional continuity signals",
            "Strict avoidance of rumor-driven false positives"
          ],
          verified_anchors: [
            { title: "Market baseline and rules", detail: "Polymarket rules define removal from CCP General Secretary role between June 12 and Dec 31, 2025 11:59 PM ET.", source: "Polymarket", url: "https://polymarket.com/market/xi-jinping-out-in-2025" }
          ],
          scenarios: [
            { id: "A", name: "Base, no change", weight_pct: 99, conditions: ["No credible official signal of removal", "Normal institutional continuity"], expected_behavior: "Market remains anchored near zero probability of 'Yes'." },
            { id: "B", name: "Managed transition signal appears", weight_pct: 1, conditions: ["Multiple top-tier outlets confirm an official transition signal", "Institutional titles change"], expected_behavior: "Rapid repricing of event-risk." },
            { id: "C", name: "Sudden shock discontinuity", weight_pct: 0, conditions: ["Discontinuous event occurs without long runway"], expected_behavior: "High uncertainty, rapid news-driven repricing." }
          ],
          triggers: {
            upside: [
              "Credible official announcement or verified multi-source reporting indicating a change in CCP General Secretary role."
            ],
            downside: [
              "No credible signals through the horizon, reinforcing continuity."
            ]
          },
          citations: [
            { label: "Polymarket, Xi Jinping out in 2025? (rules and baseline)", url: "https://polymarket.com/market/xi-jinping-out-in-2025", note: "Market definition and volume" }
          ]
        },
        sources: [
          { label: "Polymarket, Xi Jinping out in 2025?", url: "https://polymarket.com/market/xi-jinping-out-in-2025" }
        ],
        tags: ["predictionmarkets","politics","china","eventrisk","highopacity","rules","verified-only"]
      }

    ];


    /* ==========================
       2) SIMPLE ROUTER AND UI
       ========================== */

    const elTabs = document.getElementById("tabs");
    const elSubtabs = document.getElementById("subtabs");
    const elGrid = document.getElementById("grid");
    const elQ = document.getElementById("q");
    const elSort = document.getElementById("sort");
    const elClear = document.getElementById("clear");
    const elStatus = document.getElementById("status");
    const elListView = document.getElementById("listView");
    const elDetail = document.getElementById("detailView");

    let state = {
      category: "All",
      q: "",
      sort: "updatedDesc",
      caribArea: "All"
    };
    /* ==========================
       UX ENHANCEMENTS
       - Remember category/country selection (localStorage)
       ========================== */

    const LS_KEY = "mpe.ui.state.v1";

    function loadUIState(){
      try{
        const raw = localStorage.getItem(LS_KEY);
        if(!raw) return null;
        const obj = JSON.parse(raw);
        if(!obj || typeof obj !== "object") return null;
        return obj;
      }catch(e){
        return null;
      }
    }

    function saveUIState(){
      try{
        const obj = {
          category: state.category,
          caribArea: state.caribArea,
          sort: state.sort
        };
        localStorage.setItem(LS_KEY, JSON.stringify(obj));
      }catch(e){
        // ignore
      }
    }

    function applySavedUIStateIfNoHash(params){
      // If the URL has explicit state, do not override.
      const hasExplicit = params.has("p") || params.has("cat") || params.has("q") || params.has("sort") || params.has("carib");
      if(hasExplicit) return;

      const saved = loadUIState();
      if(!saved) return;

      if(saved.category && CATEGORIES.includes(saved.category)) state.category = saved.category;
      if(saved.sort) state.sort = saved.sort;
      if(state.category === "Caribbean" && saved.caribArea) state.caribArea = saved.caribArea;
      if(state.category !== "Caribbean") state.caribArea = "All";
    }

    /* ==========================
       UX ENHANCEMENTS
       - Smooth transitions between list and detail
       ========================== */

    function animateSwitchToDetail(){
      elListView.classList.add("fade-out");
      setTimeout(() => {
        elListView.style.display = "none";
        elListView.classList.remove("fade-out");
        elDetail.classList.add("active");
        elDetail.classList.add("fade-in");
        setTimeout(() => elDetail.classList.remove("fade-in"), 220);
      }, 140);
    }

    function animateSwitchToList(){
      elDetail.classList.add("fade-out");
      setTimeout(() => {
        elDetail.classList.remove("active");
        elDetail.classList.remove("fade-out");
        elDetail.innerHTML = "";
        elListView.style.display = "";
        elListView.classList.add("fade-in");
        setTimeout(() => elListView.classList.remove("fade-in"), 220);
      }, 140);
    }

    /* ==========================
       UX ENHANCEMENTS
       - Collapsible long sections (details/summary)
       ========================== */

    function detailsAutoCloseOnMobile(){
      // Optional: keep long sections collapsed by default on small screens
      if(window.matchMedia && window.matchMedia("(max-width: 620px)").matches){
        document.querySelectorAll("details.collapsible[data-default='closed-mobile']").forEach(d => d.open = false);
      }
    }


    
    // Default longform block shown in the detail view when a card does not provide michel_prediction text.
    const DEFAULT_MICHEL_PREDICTION = `PREDICTION
Exchange: Oslo Bors
Ticker: REACH
Mar 31, 2026 = 6.78 NOK
Range: 6.71 NOK to 6.85 NOK
Momentum Vector: +0.24
Sentiment Weight: +0.15
Volatility Posture: Moderate

Rationale

Recent Stock Environment & Volatility:
REACH has shown moderately choppy price action with year-to-date declines and a trading range near the mid-6 NOK region, showing some recovery from lows but below recent multi-month highs. Recent regulated news included bond listing activity and Q3 earnings with mixed operational results, suggesting some investor uncertainty. Overall, the stock’s price behavior and trading range imply a moderate volatility environment in the current market.

Sentiment Signals:
Sentiment appears slightly positive to neutral. While Q3 results were weaker, there are signs of operational progress (for example, remote tech milestones), strategic vessel developments, and periodic analyst upward target revisions. These contribute a mild positive drift context for the next several months.

Given the moderate volatility and slightly positive sentiment, the price projection models a gradual uptick over the next quarter, from 6.34 toward about 6.78 by March 31, 2026. The momentum vector reflects mild upward pressure, set against industry cyclicality and broader energy and subsea sector developments. The plus or minus 1 percent price band captures plausible dispersion around the central modeled value.`;


function fmtDate(iso){
      if(!iso) return "—";
      const d = new Date(iso + "T00:00:00");
      const opts = { year:"numeric", month:"short", day:"2-digit" };
      return d.toLocaleDateString(undefined, opts);
    }

    function clamp(n,min,max){ return Math.max(min, Math.min(max,n)); }

    function dotClass(status){
      if(status === "good") return "good";
      if(status === "bad") return "bad";
      return "warn";
    }

    function bandLabel(band){
      if(!band) return "—";
      return band;
    }



    

    function themeKeyFor(p){
      if(!p) return "default";

      if(p && typeof p.theme_key === "string" && p.theme_key.trim()){
        return p.theme_key.trim();
      }

      const cats = categoriesOf(p).map(x => String(x || "").toLowerCase());

      // Prefer the most specific theme when a card belongs to multiple categories.
      if(cats.includes("sports")) return "sports";

      if(cats.includes("caribbean") || String(p.category || "") === "Caribbean"){
        const area = String(p.carib_area || "").toLowerCase();
        if(area.includes("jamaica")) return "jamaica";
        if(area.includes("saint")) return "saintlucia";
        if(area.includes("regional")) return "caribbean";
        return "caribbean";
      }

      if(cats.includes("politics")){
        const hay = ((p.title || "") + " " + (p.summary || "") + " " + (p.tags || []).join(" ")).toLowerCase();
        if(hay.includes("portugal")) return "portugal";
        if(hay.includes("xi") || hay.includes("jinping") || hay.includes("china")) return "china";
        if(hay.includes("democratic") || hay.includes("republican") || hay.includes("presidential") || hay.includes("u.s.") || hay.includes("us ")) return "usa";
        return "politics";
      }

      const cat = String(p.category || "").trim();
      if(cat === "Financials" || cat === "Companies") return "norway";
      if(cat === "Tomorrow's Paper") return "paper";
      if(cat === "Crypto") return "crypto";
      if(cat === "OECS") return "oecs";
      if(cat === "Sports") return "sports";
      return "default";
    }

    function themeIconSVG(key){
      const k = String(key || "default");

      if(k === "portugal"){
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 20V5"/>
          <path d="M5 6h11l-2 3 2 3H5"/>
          <circle cx="9" cy="9" r="1.2" fill="currentColor" stroke="none"/>
        </svg>`;
      }
      if(k === "usa"){
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 2l2.6 6.2 6.7.6-5 4.3 1.6 6.5-5.9-3.5-5.9 3.5 1.6-6.5-5-4.3 6.7-.6z"/>
        </svg>`;
      }
      if(k === "china"){
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M7 7h10v10H7z"/>
          <path d="M10.2 10.8l.9-2.2.9 2.2 2.4.2-1.9 1.4.7 2.3-2.1-1.3-2.1 1.3.7-2.3-1.9-1.4z" fill="currentColor" stroke="none" opacity=".9"/>
        </svg>`;
      }
      if(k === "politics"){
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M7 10h10v10H7z"/>
          <path d="M9 10V7h6v3"/>
          <path d="M10.5 15l1.3 1.3L14 14"/>
        </svg>`;
      }

      if(k === "jamaica"){
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M7 10h10v10H7z"/>
          <path d="M9 10V7h6v3"/>
          <path d="M10.5 15l1.3 1.3L14 14"/>
        </svg>`;
      }
      if(k === "saintlucia"){
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M4 19h16"/>
          <path d="M7 19l5-12 5 12"/>
          <path d="M10 19l2-5 2 5"/>
        </svg>`;
      }
      if(k === "caribbean"){
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M4 16c4-6 7 4 11-2 2-3 3-5 5-6"/>
          <circle cx="6" cy="15.5" r="1.2" fill="currentColor" stroke="none"/>
          <circle cx="12" cy="13.5" r="1.2" fill="currentColor" stroke="none"/>
          <circle cx="18" cy="9.5" r="1.2" fill="currentColor" stroke="none"/>
        </svg>`;
      }
      if(k === "norway"){
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M4 19h16"/>
          <path d="M7 16V8m0 0l2 2m-2-2l-2 2"/>
          <path d="M12 17V6m0 0l2 2m-2-2l-2 2"/>
          <path d="M17 15V9m0 0l2 2m-2-2l-2 2"/>
        </svg>`;
      }
      if(k === "paper"){
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M7 4h10v16H7z"/>
          <path d="M9 8h6"/>
          <path d="M9 11h6"/>
          <path d="M9 14h6"/>
        </svg>`;
      }
      if(k === "crypto"){
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="8"/>
          <path d="M10 8h3.2a2 2 0 0 1 0 4H10z"/>
          <path d="M10 12h3.6a2 2 0 0 1 0 4H10z"/>
          <path d="M12 6v12"/>
        </svg>`;
      }
      if(k === "sports"){
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M8 21h8"/>
          <path d="M9 17h6"/>
          <path d="M8 4h8v7a4 4 0 0 1-8 0z"/>
          <path d="M6 6h2v2a3 3 0 0 1-3 3H4V9a3 3 0 0 1 2-3z"/>
          <path d="M18 6h-2v2a3 3 0 0 0 3 3h1V9a3 3 0 0 0-2-3z"/>
        </svg>`;
      }
      if(k === "oecs"){
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M10 13a3 3 0 0 0 0-4l-1-1a3 3 0 0 0-4 4l1 1"/>
          <path d="M14 11a3 3 0 0 0 0 4l1 1a3 3 0 0 0 4-4l-1-1"/>
          <path d="M9 12h6"/>
        </svg>`;
      }

      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 3l2.4 6.2L21 12l-6.6 2.8L12 21l-2.4-6.2L3 12l6.6-2.8z"/>
      </svg>`;
    }

    function categoriesOf(p){
      const out = [];
      if(p && Array.isArray(p.categories)) out.push(...p.categories);
      if(p && p.category) out.push(p.category);
      const uniq = [];
      const seen = new Set();
      out.map(x => String(x || "").trim()).filter(Boolean).forEach(v => {
        if(!seen.has(v)){
          seen.add(v);
          uniq.push(v);
        }
      });
      return uniq;
    }

    function categoryLabel(p){
      const cats = categoriesOf(p);
      if(cats.length <= 1) return cats[0] || "";
      const primary = p && p.category ? String(p.category).trim() : cats[0];
      const rest = cats.filter(x => x !== primary);
      const shown = [primary, ...rest.slice(0,1)];
      return shown.join(" · ");
    }

    function stampFor(p){
      if(p && typeof p.stamp === "string" && p.stamp.trim()) return p.stamp.trim();
      const key = themeKeyFor(p);
      const map = {
        jamaica: "JM",
        saintlucia: "SL",
        caribbean: "CAR",
        oecs: "OECS",
        norway: "NO",
        sports: "SPORT",
        crypto: "CR",
        paper: "TP",
        portugal: "PT",
        usa: "US",
        china: "CN",
        politics: "POL"
      };
      return map[key] || "";
    }

    function marketMetaHTML(p){
      const m = p && p.market_meta ? p.market_meta : null;
      if(!m) return "";
      const parts = [];
      if(m.platform) parts.push(`<span class="badge">${escapeHtml(m.platform)}</span>`);
      if(m.volume) parts.push(`<span class="badge">Vol ${escapeHtml(m.volume)}</span>`);
      if(m.expiry_note) parts.push(`<span class="badge">${escapeHtml(m.expiry_note)}</span>`);
      return parts.length ? `<div class="pm-meta">${parts.join("")}</div>` : "";
    }

    function quickOddsHTML(p){
      const q = p && Array.isArray(p.quick_odds) ? p.quick_odds : null;
      if(!q || q.length === 0) return "";
      const top = q.slice(0,3);
      const rows = top.map(o => `
        <div class="pm-odds-row">
          <span class="pm-odds-name">${escapeHtml(o.label)}</span>
          <span class="pm-odds-pct">${escapeHtml(String(o.pct))}${String(o.pct).includes("%") ? "" : "%"}</span>
        </div>
      `).join("");
      return `
        <div class="pm-odds">
          <div class="pm-odds-head">Market baseline</div>
          ${rows}
        </div>
      `;
    }

    function marketOddsDetailHTML(p){
      const arr = p && Array.isArray(p.market_odds) ? p.market_odds : null;
      if(!arr || arr.length === 0) return "";
      const rows = arr.map(o => `
        <div class="pm-odds-row">
          <span class="pm-odds-name">${escapeHtml(o.label)}</span>
          <span class="pm-odds-pct">${escapeHtml(String(o.pct))}${String(o.pct).includes("%") ? "" : "%"}</span>
        </div>
      `).join("");
      return `
        <details class="collapsible">
          <summary>
            <span>Market baseline</span>
            <span class="cmeta">${arr.length}</span>
          </summary>
          <div class="cbody">
            <div class="pm-odds-list">
              ${rows}
            </div>
          </div>
        </details>
      `;
    }

function mostLikelyDriver(p){
      if(p && typeof p.most_likely_driver === "string" && p.most_likely_driver.trim()){
        return p.most_likely_driver.trim();
      }
      if(p && Array.isArray(p.drivers) && p.drivers.length){
        return String(p.drivers[0] || "").trim();
      }
      return "";
    }

    function probClass(pct){
      if(pct >= 50) return "good";
      if(pct >= 30) return "warn";
      return "bad";
    }

    function scenarioBarsHTML(p, mode){
      const horizon = p?.scenario_outlook?.horizon;
      const sc = p?.scenario_outlook?.scenarios;
      if(!Array.isArray(sc) || sc.length === 0) return "";
      const scSorted = [...sc].sort((a,b) => (b.weight ?? 0) - (a.weight ?? 0));
      const rows = scSorted.map(s => {
        const pct = clamp(Math.round((s.weight ?? 0) * 100), 0, 100);
        const cls = probClass(pct);
        const id = s.id ? String(s.id) : "";
        const label = s.label ? String(s.label) : "";
        const name = (mode === "mini") ? id : (id ? (id + " • " + label) : label);
        return `
          <div class="srow ${mode}">
            <div class="sname">${escapeHtml(name)}</div>
            <div class="sbar"><div class="sfill ${cls}" style="width:${pct}%"></div></div>
            <div class="spct">${pct}%</div>
          </div>
        `;
      }).join("");
      const h = horizon ? `<div class="shorizon">${escapeHtml(horizon)} horizon</div>` : "";
      const head = (mode === "mini") ? "" : `<div class="shead">Scenario weights</div>${h}`;
      return `<div class="scenarios ${mode}">${head}${rows}</div>`;
    }

    
    function michelPredictionSectionHTML(p){
      // Show the REACH longform prediction summary ONLY on the REACH detail page.
      if(!p || p.id !== "reach-oslo-scenario-weighted") return "";

      return `
            <div style="margin-top:12px;">
              <h3>Michel Prediction Engine</h3>

              <div style="
                padding:14px;
                border:1px solid rgba(255,255,255,.10);
                border-radius:16px;
                background: rgba(255,255,255,.03);
              ">

                <div style="font-family:var(--mono); font-size:12px; color:var(--muted2);">
                  PREDICTION SUMMARY
                </div>

                <div style="margin-top:6px; font-family:var(--mono); font-size:14px; color:var(--text);">
                  Exchange: <strong>Oslo Børs</strong> · Ticker: <strong>REACH</strong>
                </div>

                <div class="kv" style="margin-top:12px;">
                  <div class="row"><div class="k">TARGET (31 Mar 2026)</div><div class="v">6.78 NOK</div></div>
                  <div class="row"><div class="k">MODELED RANGE</div><div class="v">6.71 – 6.85 NOK</div></div>
                  <div class="row"><div class="k">MOMENTUM VECTOR</div><div class="v">+0.24</div></div>
                  <div class="row"><div class="k">SENTIMENT WEIGHT</div><div class="v">+0.15</div></div>
                  <div class="row" style="grid-column:span 2;">
                    <div class="k">VOLATILITY POSTURE</div>
                    <div class="v">Moderate</div>
                  </div>
                </div>

                <div style="margin-top:14px;">
                  <div style="font-family:var(--mono); font-size:12px; color:var(--muted2);">
                    MARKET ENVIRONMENT & VOLATILITY
                  </div>
                  <div style="margin-top:6px; font-size:13px; line-height:1.55; color:var(--text);">
                    REACH has shown moderately choppy price action with year-to-date declines and a trading range near the mid-6 NOK region, showing some recovery from lows but below recent multi-month highs. Recent regulated news included bond listing activity and Q3 earnings with mixed operational results, suggesting some investor uncertainty. Overall, the stock’s price behavior and trading range imply a moderate volatility environment in the current market.
                  </div>
                </div>

                <div style="margin-top:14px;">
                  <div style="font-family:var(--mono); font-size:12px; color:var(--muted2);">
                    SENTIMENT SIGNALS
                  </div>
                  <div style="margin-top:6px; font-size:13px; line-height:1.55; color:var(--text);">
                    Sentiment appears slightly positive to neutral. While Q3 results were weaker, there are signs of operational progress (for example, remote tech milestones), strategic vessel developments, and periodic analyst upward target revisions. These contribute a mild positive drift context for the next several months.
                  </div>
                </div>

                <div style="margin-top:14px;">
                  <div style="font-family:var(--mono); font-size:12px; color:var(--muted2);">
                    MODEL OUTPUT
                  </div>
                  <div style="margin-top:6px; font-size:13px; line-height:1.55; color:var(--text);">
                    Given the moderate volatility and slightly positive sentiment, the price projection models a gradual uptick over the next quarter, from 6.34 toward about 6.78 by March 31, 2026. The momentum vector reflects mild upward pressure, set against industry cyclicality and broader energy and subsea sector developments. The plus or minus 1 percent price band captures plausible dispersion around the central modeled value.
                  </div>
                </div>

                <div style="
                  margin-top:14px;
                  padding:10px 12px;
                  border:1px solid rgba(255,255,255,.08);
                  border-radius:12px;
                  background: rgba(255,255,255,.04);
                  font-family:var(--mono);
                  font-size:12px;
                  color:var(--muted);
                ">
                  Modeled outcome reflects mild upward pressure balanced against sector cyclicality and subsea industry execution risk.
                </div>

              </div>
            </div>
      `;
    }


    function mpeAnalysisSectionHTML(p){
      const a = p && p.mpe_analysis ? p.mpe_analysis : null;
      if(!a) return "";

      const chips = (a.driver_chips || []).map(t => `<span class="mpe-chip2">${escapeHtml(t)}</span>`).join("");

      const anchors = (a.verified_anchors || []).map((x,i) => {
        const src = x && x.url ? ` <a href="${escapeAttr(x.url)}" target="_blank" rel="noopener noreferrer" style="color:var(--accent); text-decoration:none;">${escapeHtml(x.source || "Source")}</a>` : (x && x.source ? ` <span style="color:var(--muted2); font-family:var(--mono); font-size:11px;">${escapeHtml(x.source)}</span>` : "");
        return `
          <li class="li">
            <div class="b">${i+1}</div>
            <div>
              <div style="font-weight:700; margin-bottom:4px;">${escapeHtml(x.title || "")}</div>
              <div style="color: var(--muted); line-height:1.5;">${escapeHtml(x.detail || "")}${src}</div>
            </div>
          </li>
        `;
      }).join("");

      const rows = (a.scenarios || []).map(s => {
        const conds = (s.conditions || []).map(c => `<li>${escapeHtml(c)}</li>`).join("");
        return `
          <tr>
            <td><strong>${escapeHtml(s.name || "")}</strong><div style="margin-top:6px;" class="mpe-subtle">${escapeHtml(s.id ? ("Path " + s.id) : "")}</div></td>
            <td class="mpe-weight">${escapeHtml(String(s.weight_pct ?? "") + "%")}</td>
            <td><ul class="mpe-miniul">${conds}</ul></td>
            <td>${escapeHtml(s.expected_behavior || "")}</td>
          </tr>
        `;
      }).join("");

      const tUp = (a.triggers && Array.isArray(a.triggers.upside) ? a.triggers.upside : []).map(x => `<li>${escapeHtml(x)}</li>`).join("");
      const tDown = (a.triggers && Array.isArray(a.triggers.downside) ? a.triggers.downside : []).map(x => `<li>${escapeHtml(x)}</li>`).join("");

      const cites = (a.citations || []).map(c => {
        const link = c && c.url ? `<a href="${escapeAttr(c.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(c.url)}</a>` : "";
        const note = c && c.note ? ` <span style="color:var(--muted2);">(${escapeHtml(c.note)})</span>` : "";
        return `<li><span style="color:var(--text);">${escapeHtml(c.label || "")}</span>${note}${link ? `<div style="margin-top:4px;">${link}</div>` : ""}</li>`;
      }).join("");

      const asof = a.as_of ? fmtDate(a.as_of) : "—";
      const hend = a.horizon_end ? fmtDate(a.horizon_end) : "—";
      const anchorLabel = a.price_anchor_label ? a.price_anchor_label : "PRICE ANCHOR";
      const anchorVal = (a.price_anchor != null && a.currency) ? `${a.price_anchor} ${a.currency}` : (a.price_anchor != null ? String(a.price_anchor) : "—");

      return `
        <div class="mpe-block">
          <div class="mpe-subtle">Michel Prediction Engine, market analysis</div>

          <div style="margin-top:6px; font-family:var(--mono); font-size:14px; color:var(--text);">
            Exchange: <strong>${escapeHtml(a.exchange || "—")}</strong> · Ticker: <strong>${escapeHtml(a.ticker || "—")}</strong> · Horizon: <strong>${escapeHtml(String(a.horizon_days || "—"))} days</strong>
          </div>

          <div class="kv" style="margin-top:12px;">
            <div class="row"><div class="k">${escapeHtml(anchorLabel)}</div><div class="v">${escapeHtml(anchorVal)}</div></div>
            <div class="row"><div class="k">AS OF</div><div class="v">${escapeHtml(asof)}</div></div>
            <div class="row"><div class="k">HORIZON END</div><div class="v">${escapeHtml(hend)}</div></div>
            <div class="row"><div class="k">VOLATILITY POSTURE</div><div class="v">${escapeHtml(a.volatility_posture || "—")}</div></div>
          </div>

          ${(chips ? `
            <div style="margin-top:14px;">
              <div class="mpe-subtle">Driver chips</div>
              <div class="mpe-chips">${chips}</div>
            </div>
          ` : "")}

          ${(anchors ? `
            <div style="margin-top:14px;">
              <div class="mpe-subtle">Verified anchors</div>
              <ul class="list" style="margin-top:10px;">
                ${anchors}
              </ul>
            </div>
          ` : "")}

          ${(rows ? `
            <div style="margin-top:14px;">
              <div class="mpe-subtle">Scenario table</div>
              <table class="mpe-table" aria-label="Scenario table">
                <thead>
                  <tr>
                    <th>Scenario</th>
                    <th>Weight</th>
                    <th>Conditions</th>
                    <th>Expected behavior</th>
                  </tr>
                </thead>
                <tbody>
                  ${rows}
                </tbody>
              </table>
            </div>
          ` : "")}

          ${(tUp || tDown ? `
            <div style="margin-top:14px;">
              <div class="mpe-subtle">Triggers that update weights</div>
              <div class="mpe-triggergrid">
                <div class="mpe-triggerpanel">
                  <h4>Increase Upside weight if</h4>
                  <ul>${tUp || "<li>—</li>"}</ul>
                </div>
                <div class="mpe-triggerpanel mpe-triggerpanel--risk">
                  <h4>Increase Downside weight if</h4>
                  <ul>${tDown || "<li>—</li>"}</ul>
                </div>
              </div>
            </div>
          ` : "")}

          ${(cites ? `
            <div style="margin-top:14px;">
              <div class="mpe-subtle">Citations and source log</div>
              <ol class="mpe-cite">
                ${cites}
              </ol>
            </div>
          ` : "")}

        </div>
      `;
    }

    /* ==========================
       LONGFORM PLACEHOLDERS (NON-TP)
       ========================== */

    function longformTeaserHTML(p){
      const lf = p && p.longform ? p.longform : null;
      if(!lf || !lf.placeholder_id) return "";
      const teaser = lf.teaser || "A longform explainer is available for this analysis.";
      const btn = lf.button_label || "Open longform";
      return `
        <div style="margin-top:14px;">
          <h3>Further reading</h3>
          <div style="color: var(--muted); font-size:13px; line-height:1.55;">
            ${escapeHtml(teaser)}
          </div>
          <div style="margin-top:10px; display:flex; gap:10px; flex-wrap:wrap; align-items:center;">
            <button class="btn" id="longformBtn">${escapeHtml(btn)}</button>
            <span class="badge">Longform</span>
          </div>
        </div>
      `;
    }

    function longformPlaceholderBlockHTML(p){
      const lf = p && p.longform ? p.longform : null;
      if(!lf || !lf.placeholder_id) return "";
      const pid = lf.placeholder_id;

      // If longform HTML is provided, render it here (trusted content, pasted by site owner).
      if(lf && typeof lf.html === "string" && lf.html.trim()){
        return `
          <div class="mpe-block" id="${escapeAttr(pid)}">
            <div class="mpe-subtle">Longform explainer</div>
            <div class="longform-article">
              ${lf.html}
            </div>
          </div>
        `;
      }

      // Default placeholder
      return `
        <div class="mpe-block" id="${escapeAttr(pid)}">
          <div class="mpe-subtle">Longform explainer</div>
          <div style="margin-top:8px; color: var(--muted); font-size:13px; line-height:1.6;">
            <strong>PLACEHOLDER:</strong> paste the longform article content here. Keep scenario weights and the base-case sentence aligned with the card and detail page.
          </div>
          <div style="margin-top:10px; color: var(--muted2); font-family: var(--mono); font-size:11px; line-height:1.45;">
            Tip: search the file for <span style="color:var(--text);">longform-jam-election-trigger-12m</span> to find this block quickly.
          </div>
        </div>
      `;
    }

/* ==========================
   TOMORROW'S PAPER HELPERS
   ========================== */

   function tpSectionOf(p){
  const s = (p && typeof p.tp_section === "string") ? p.tp_section.trim() : "";
  return s || "Top stories";
}

function tpRegionOf(p){
  const r = (p && typeof p.tp_region === "string") ? p.tp_region.trim() : "";
  return r || "Global";
}

function headlineLikelihoodPct(p){
  const v = p && p.tp_story && typeof p.tp_story.headline_likelihood_pct === "number" ? p.tp_story.headline_likelihood_pct : null;
  if(v === null || v === undefined) return null;
  return clamp(Math.round(v), 0, 100);
}

function tpHasLongform(p){
  return !!(p && p.tp_story && p.tp_story.is_longform);
}

function tpParaHTML(text){
  if(!text) return "";
  const parts = String(text).split(/\n\s*\n/g).map(x => x.trim()).filter(Boolean);
  return parts.map(x => `<p>${escapeHtml(x)}</p>`).join("");
}

function tpListOrDash(arr){
  if(!Array.isArray(arr) || arr.length === 0) return `<div style="color:var(--muted2); font-family:var(--mono); font-size:12px;">—</div>`;
  return `<ul>${arr.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>`;
}

function tpCoverHTML(items){
  const list = (items || []).filter(p => p && p.category === "Tomorrow's Paper");
  if(list.length === 0){
    return `
      <div class="panel" style="grid-column: span 12;">
        <h3>Tomorrow's Paper</h3>
        <div style="color: var(--muted); font-size:13px; line-height:1.5;">
          No stories yet.
        </div>
      </div>
    `;
  }

  const sorted = [...list].sort((a,b) => (headlineLikelihoodPct(b) || 0) - (headlineLikelihoodPct(a) || 0));
  const hero = sorted[0];

  const heroHL = headlineLikelihoodPct(hero);
  const heroBase = hero?.tp_story?.base_case_sentence || hero.summary || "";
  const heroSection = tpSectionOf(hero);
  const heroRegion = tpRegionOf(hero);

  const groups = {};
  sorted.forEach(p => {
    const sec = tpSectionOf(p);
    if(!groups[sec]) groups[sec] = [];
    groups[sec].push(p);
  });

  const preferredOrder = ["War & Peace","Money","Tech & AI","Asia Pacific","World Economy, Energy","Meta"];
  const keys = Object.keys(groups).sort((a,b) => {
    const ia = preferredOrder.indexOf(a);
    const ib = preferredOrder.indexOf(b);
    if(ia === -1 && ib === -1) return a.localeCompare(b);
    if(ia === -1) return 1;
    if(ib === -1) return -1;
    return ia - ib;
  });

  const heroHTML = `
    <div class="tp-hero">
      <div class="tp-hero-kicker">Tomorrow's Paper, 90 day headline candidates</div>
      <div class="tp-hero-title">Cover page list</div>
      <div class="tp-hero-sub">
        This section models which storylines are most likely to dominate major front pages within the next 90 days. Each entry includes a base-case sentence, scenario paths with weights, triggers, and a counterfactual note for how the headline path could have been avoided.
      </div>

      <div class="tp-hero-grid">
        <div class="tp-hero-box tp-item" data-id="${escapeAttr(hero.id)}" role="button" tabindex="0">
          <h4>Lead headline candidate</h4>
          <div class="tp-lik"><span>${escapeHtml(heroSection)} • ${escapeHtml(heroRegion)}</span><strong>${heroHL !== null ? (heroHL + "%") : "—"}</strong></div>
          <div class="tp-likbar"><div class="tp-likfill" style="width:${heroHL !== null ? heroHL : 0}%"></div></div>
          <div style="margin-top:10px; font-weight:860; font-size:14px; line-height:1.3;">${escapeHtml(hero.title)}</div>
          <div style="margin-top:8px; color:var(--muted); font-size:13px; line-height:1.5;">${escapeHtml(heroBase)}</div>
          <div class="tp-item-meta">
            ${tpHasLongform(hero) ? `<span class="tp-flag">Longform available</span>` : ``}
            <span class="tp-mutedtag">DUE ${escapeHtml(fmtDate(hero.due))}</span>
          </div>
        </div>

        <div class="tp-hero-box">
          <h4>How to read</h4>
          <div style="color:var(--muted); font-size:13px; line-height:1.55;">
            <ul style="margin:0; padding-left:18px;">
              <li>Headline likelihood is the chance this becomes a dominant front page storyline.</li>
              <li>Path A is most likely, Path B is escalation, Path C is dissipation or resolution.</li>
              <li>Triggers are observable signals that shift weights.</li>
              <li>Counterfactual notes highlight how the headline path could have been avoided.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  const sectionHTML = keys.map(sec => {
    const rows = (groups[sec] || [])
      .sort((a,b) => (headlineLikelihoodPct(b) || 0) - (headlineLikelihoodPct(a) || 0))
      .map(p => {
        const hl = headlineLikelihoodPct(p);
        const base = p?.tp_story?.base_case_sentence || p.summary || "";
        const region = tpRegionOf(p);
        const longform = tpHasLongform(p);

        return `
          <div class="tp-item" data-id="${escapeAttr(p.id)}" role="button" tabindex="0">
            <div class="tp-pct">${hl !== null ? (hl + "%") : "—"}</div>
            <div class="tp-item-main">
              <div class="tp-item-title">${escapeHtml(p.title)}</div>
              <div class="tp-item-sub">${escapeHtml(base)}</div>
              <div class="tp-item-meta">
                ${longform ? `<span class="tp-flag">Longform</span>` : ``}
                <span class="tp-mutedtag">${escapeHtml(region)}</span>
                <span class="tp-mutedtag">DUE ${escapeHtml(fmtDate(p.due))}</span>
              </div>
            </div>
          </div>
        `;
      }).join("");

    return `
      <div class="tp-sec">
        <div class="tp-sechead"><h3>${escapeHtml(sec)}</h3></div>
        <div class="tp-seclist">${rows}</div>
      </div>
    `;
  }).join("");

  return `<div class="tp-cover">${heroHTML}<div class="tp-secgrid">${sectionHTML}</div></div>`;
}

function tpStorySectionHTML(p){
  const tp = p && p.tp_story ? p.tp_story : null;
  if(!tp) return "";

  const hl = headlineLikelihoodPct(p);
  const basis = tp.headline_likelihood_basis || "";
  const base = tp.base_case_sentence || "";
  const lede = tpParaHTML(tp.lede || "");

  const paths = Array.isArray(tp.paths) ? tp.paths : [];
  const pathHTML = paths.map(path => {
    const pid = path.id ? String(path.id) : "";
    const weight = (typeof path.weight_pct === "number") ? clamp(Math.round(path.weight_pct), 0, 100) : null;
    const variant = path.headline_variant || "";
    const one = path.one_liner || "";

    function box(title, arr){
      if(!Array.isArray(arr) || arr.length === 0) return "";
      return `<div class="tp-box"><h5>${escapeHtml(title)}</h5>${tpListOrDash(arr)}</div>`;
    }

    const boxes = [
      box("Must happen", path.must_happen),
      box("Must not happen", path.must_not_happen),
      box("Contributors", path.contributors),
      box("Detractors", path.detractors),
      box("Early indicators", path.early_indicators),
      box("Disconfirmers", path.disconfirmers),
      box("Policy levers", path.policy_levers)
    ].filter(Boolean).join("");

    const counter = path.counterfactual_box
      ? `<div class="tp-counter"><strong style="font-family:var(--mono); font-size:11px; color:var(--muted2); text-transform:uppercase; letter-spacing:.4px;">Counterfactual box</strong><div style="margin-top:6px;">${escapeHtml(path.counterfactual_box)}</div></div>`
      : "";

    return `
      <div class="tp-path">
        <div class="tp-pathhead">
          <div class="tp-pathname">${escapeHtml(pid ? ("Path " + pid) : "Path")}</div>
          <div class="tp-pathweight">${weight !== null ? (weight + "%") : "—"}</div>
        </div>
        ${variant ? `<div class="tp-pathvariant">HEADLINE VARIANT: ${escapeHtml(variant)}</div>` : ""}
        ${one ? `<div class="tp-pathone">${escapeHtml(one)}</div>` : ""}
        ${boxes ? `<div class="tp-grid2">${boxes}</div>` : ""}
        ${counter}
      </div>
    `;
  }).join("");

  const trig = tp.triggers || {};
  const inc = trig.increase_headline_likelihood || [];
  const dec = trig.decrease_headline_likelihood || [];
  const sw = trig.shift_weights || {};
  const swA = sw.toward_A || [];
  const swB = sw.toward_B || [];
  const swC = sw.toward_C || [];

  const triggersHTML = `
    <div class="tp-path">
      <div class="tp-pathhead">
        <div class="tp-pathname">Triggers that update weights</div>
        <div class="tp-pathweight"></div>
      </div>
      <div class="tp-grid2">
        <div class="tp-box"><h5>Increase headline likelihood if</h5>${tpListOrDash(inc)}</div>
        <div class="tp-box"><h5>Decrease headline likelihood if</h5>${tpListOrDash(dec)}</div>
        <div class="tp-box"><h5>Shift weight toward Path A</h5>${tpListOrDash(swA)}</div>
        <div class="tp-box"><h5>Shift weight toward Path B</h5>${tpListOrDash(swB)}</div>
        <div class="tp-box"><h5>Shift weight toward Path C</h5>${tpListOrDash(swC)}</div>
      </div>
    </div>
  `;

  const audit = Array.isArray(tp.audit_log) ? tp.audit_log : [];
  const auditHTML = audit.length ? `
    <div class="tp-audit">
      <h4>Audit log</h4>
      ${audit.map(e => {
        const ts = e.ts || "";
        const obs = e.observation || "";
        const asmt = e.assessment || "";
        const src = e.source_label || "";
        const sig = e.signal || "";
        return `
          <div class="tp-audititem">
            <div class="tp-auditts">${escapeHtml(ts)} • ${escapeHtml(src)}${sig ? (" • " + escapeHtml(sig)) : ""}</div>
            ${obs ? `<div class="tp-audittext">${escapeHtml(obs)}</div>` : ""}
            ${asmt ? `<div class="tp-auditmeta">Assessment: ${escapeHtml(asmt)}</div>` : ""}
          </div>
        `;
      }).join("")}
    </div>
  ` : "";

  return `
    <div class="tp-block">
      <div class="tp-subtle">Tomorrow's Paper, story build</div>

      <div style="margin-top:10px;">
        <div class="tp-lik"><span>HEADLINE LIKELIHOOD</span><strong>${hl !== null ? (hl + "%") : "—"}</strong></div>
        <div class="tp-likbar"><div class="tp-likfill" style="width:${hl !== null ? hl : 0}%"></div></div>
        ${basis ? `<div style="margin-top:8px; color:var(--muted2); font-family:var(--mono); font-size:11px; line-height:1.45;">${escapeHtml(basis)}</div>` : ""}
      </div>

      ${base ? `<div class="tp-base"><strong style="font-family:var(--mono); font-size:11px; color:var(--muted2); text-transform:uppercase; letter-spacing:.4px;">Base case</strong><div style="margin-top:6px;">${escapeHtml(base)}</div></div>` : ""}
      ${lede ? `<div class="tp-lede">${lede}</div>` : ""}
      ${pathHTML ? `<div style="margin-top:12px;"><div class="tp-subtle">Paths</div>${pathHTML}</div>` : ""}
      ${triggersHTML}
      ${auditHTML}
    </div>
  `;
}

function buildTabs(){
      elTabs.innerHTML = "";
      CATEGORIES.forEach(cat => {
        const b = document.createElement("button");
        b.className = "tab" + (cat === state.category ? " active" : "");
        b.textContent = cat;
        b.addEventListener("click", () => {
          state.category = cat;
          if(cat !== "Caribbean") state.caribArea = "All";
          saveUIState();
          setHashList();
          render();
        });
        elTabs.appendChild(b);
      });
    }

    function setActiveTab(){
      [...elTabs.children].forEach(btn => {
        btn.classList.toggle("active", btn.textContent === state.category);
      });
    }


    function caribAreaOf(p){
      const a = (p && p.carib_area) ? String(p.carib_area).trim() : "";
      return a ? a : "Regional";
    }

    function caribbeanAreas(){
      const set = new Set();
      PREDICTIONS.filter(p => p.category === "Caribbean").forEach(p => set.add(caribAreaOf(p)));
      const arr = [...set];
      arr.sort((a,b) => {
        if(a === "Regional") return -1;
        if(b === "Regional") return 1;
        return a.localeCompare(b);
      });
      return arr;
    }

    function buildSubtabs(){
      if(!elSubtabs) return;

      if(state.category !== "Caribbean"){
        elSubtabs.style.display = "none";
        elSubtabs.innerHTML = "";
        return;
      }

      elSubtabs.style.display = "";
      elSubtabs.innerHTML = "";

      const areas = caribbeanAreas();
      const items = ["All", ...areas];

      items.forEach(area => {
        const b = document.createElement("button");
        b.className = "subtab" + (area === state.caribArea ? " active" : "");
        b.textContent = (area === "All") ? "All Caribbean" : area;
        b.addEventListener("click", () => {
          state.caribArea = area;
          saveUIState();
          setHashList();
          render();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
        elSubtabs.appendChild(b);
      });
    }

    function normalize(s){ return (s || "").toLowerCase().trim(); }

    function filterData(){
      const q = normalize(state.q);
      return PREDICTIONS
        .filter(p => state.category === "All" ? true : categoriesOf(p).includes(state.category))
        .filter(p => {
          if(state.category !== "Caribbean") return true;
          if(state.caribArea === "All") return true;
          return caribAreaOf(p) === state.caribArea;
        })
        .filter(p => {
          if(!q) return true;
          const hay = [
            p.title, p.summary, p.category, categoriesOf(p).join(" "), p.call,
            ...(p.tags || [])
          ].join(" ").toLowerCase();
          return hay.includes(q);
        });
    }

    function sortData(items){
      const arr = [...items];
      if(state.sort === "updatedDesc"){
        arr.sort((a,b) => (b.updated || "").localeCompare(a.updated || ""));
      } else if(state.sort === "dueAsc"){
        arr.sort((a,b) => (a.due || "9999-12-31").localeCompare(b.due || "9999-12-31"));
      } else if(state.sort === "confidenceDesc"){
        arr.sort((a,b) => (b.confidence || 0) - (a.confidence || 0));
      }
      return arr;
    }

    function cardHTML(p){
      const conf = clamp(p.confidence ?? 0, 0, 100);
      const due = fmtDate(p.due);
      const upd = fmtDate(p.updated);
      const theme = themeKeyFor(p);
      const stamp = stampFor(p);
      const isShort = !!p.short_horizon;

      return `
        <article class="card" role="button" tabindex="0" aria-label="Open prediction details: ${escapeHtml(p.title)}"
          data-id="${escapeAttr(p.id)}" data-theme="${escapeAttr(theme)}" ${isShort ? `data-short="1"` : ``}>
          <div class="card-inner">
            ${stamp ? `<div class="stamp" aria-hidden="true">${escapeHtml(stamp)}</div>` : ``}

            <div class="kicker-row">
              <div class="chip">
                <span class="ticon" aria-hidden="true">${themeIconSVG(theme)}</span>
                <span class="dot ${dotClass(p.status)}"></span>
                <span>${escapeHtml(categoryLabel(p) || p.category)}</span>
              </div>
              <div class="when">DUE ${escapeHtml(due)}</div>
            </div>

            <div class="h">${escapeHtml(p.title)}</div>
            <div class="desc">${escapeHtml(p.summary)}</div>

            ${marketMetaHTML(p)}
            ${quickOddsHTML(p)}

            ${scenarioBarsHTML(p,"mini")}

            ${mostLikelyDriver(p) ? `<div style="margin-top:8px; color: var(--muted2); font-family: var(--mono); font-size:11px; line-height:1.35;">MOST LIKELY DRIVER: ${escapeHtml(mostLikelyDriver(p))}</div>` : ""}

            <div class="meter">
              <div class="bar" aria-hidden="true"><div class="fill" style="width:${conf}%"></div></div>
              <div class="meta">
                <div>CONF ${conf}% • BAND ${escapeHtml(bandLabel(p.band))}</div>
                <div>UPD ${escapeHtml(upd)}</div>
              </div>
            </div>
          </div>
        </article>
      `;
    }

    function renderGrid(items){
      elGrid.classList.toggle("tp-mode", state.category === "Tomorrow's Paper");
      if(items.length === 0){
        elGrid.innerHTML = `
          <div class="panel" style="grid-column: span 12;">
            <h3>No matches</h3>
            <div style="color: var(--muted); font-size:13px; line-height:1.5;">
              Try a different category, or clear the search.
            </div>
          </div>
        `;
        return;
      }
      // Special Tomorrow's Paper cover view
if(state.category === "Tomorrow's Paper"){
  elGrid.innerHTML = tpCoverHTML(items);

  document.querySelectorAll(".tp-item").forEach(el => {
    el.addEventListener("click", () => openDetail(el.dataset.id));
    el.addEventListener("keydown", (e) => {
      if(e.key === "Enter" || e.key === " "){
        e.preventDefault();
        openDetail(el.dataset.id);
      }
    });
  });

  return;
}

      // Special Caribbean view: show Regional + country sections when "All Caribbean" is selected.
      if(state.category === "Caribbean" && state.caribArea === "All"){
        const groups = {};
        items.forEach(p => {
          const a = caribAreaOf(p);
          if(!groups[a]) groups[a] = [];
          groups[a].push(p);
        });

        const keys = Object.keys(groups).sort((a,b) => {
          if(a === "Regional") return -1;
          if(b === "Regional") return 1;
          return a.localeCompare(b);
        });

        let html = "";
        keys.forEach(k => {
          const label = (k === "Regional") ? "Regional signals" : "Country focus";
          const sub = (k === "Regional")
            ? "Region-wide items and cross-island signals, useful context before drilling into a single country."
            : "Country-specific items, local policy and cost-of-living dynamics.";
          html += `
            <div class="panel carib-head" style="grid-column: span 12;">
              <h3>${escapeHtml(label)}</h3>
              <div class="carib-title">${escapeHtml(k)}</div>
              <div class="carib-sub">${escapeHtml(sub)}</div>
            </div>
          `;
          html += groups[k].map(cardHTML).join("");
        });

        elGrid.innerHTML = html;
      } else {
        elGrid.innerHTML = items.map(cardHTML).join("");
      }

      // click handlers
      document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => openDetail(card.dataset.id));
        card.addEventListener("keydown", (e) => {
          if(e.key === "Enter" || e.key === " "){
            e.preventDefault();
            openDetail(card.dataset.id);
          }
        });
      });
    }

    function renderStatus(items){
      const total = PREDICTIONS.length;
      const shown = items.length;
      const areaNote = (state.category === "Caribbean") ? ` • area: ${state.caribArea}` : "";
      elStatus.textContent = `${shown} shown • ${total} total • category: ${state.category}${areaNote}`;
    }

    function render(){
      buildTabs();
      setActiveTab();
      buildSubtabs();

      elQ.value = state.q;
      elSort.value = state.sort;

      const filtered = filterData();
      const sorted = sortData(filtered);

      renderGrid(sorted);
      renderStatus(sorted);

      elListView.style.display = "";
      elDetail.classList.remove("active");
      elDetail.innerHTML = "";
      elListView.classList.add("fade-in");
      setTimeout(() => elListView.classList.remove("fade-in"), 220);
    }

    function openDetail(id){
      const p = PREDICTIONS.find(x => x.id === id);
      if(!p) return;

      // update URL hash to shareable link
      const params = new URLSearchParams();
      params.set("p", id);
      saveUIState();
      location.hash = params.toString();

      renderDetail(p);
    }

    function backToList(){
      setHashList();
      // Smooth transition back to list view
      animateSwitchToList();
      // render after short delay so DOM is ready
      setTimeout(() => {
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 10);
    }

    function setHashList(){
      const params = new URLSearchParams();
      if(state.category && state.category !== "All") params.set("cat", state.category);
      if(state.q) params.set("q", state.q);
      if(state.sort && state.sort !== "updatedDesc") params.set("sort", state.sort);
      if(state.category === "Caribbean" && state.caribArea && state.caribArea !== "All") params.set("carib", state.caribArea);
      saveUIState();
      location.hash = params.toString();
    }

    function renderDetail(p){
      // Smooth transition into detail view
      if(elListView.style.display !== "none"){
        animateSwitchToDetail();
      } else {
        elDetail.classList.add("active");
      }

      const theme = themeKeyFor(p);
      elDetail.setAttribute("data-theme", theme);


      const conf = clamp(p.confidence ?? 0, 0, 100);
      const due = fmtDate(p.due);
      const upd = fmtDate(p.updated);

      const driverCount = (p.drivers || []).length;
      const assumptionCount = (p.assumptions || []).length;

      const drivers = (p.drivers || []).map((t,i) => `
        <li class="li"><div class="b">${i+1}</div><div>${escapeHtml(t)}</div></li>
      `).join("");

      const assumptions = (p.assumptions || []).map((t,i) => `
        <li class="li"><div class="b">${i+1}</div><div>${escapeHtml(t)}</div></li>
      `).join("");

      const sources = (p.sources || []).map(s => `
        <div class="row" style="grid-column: span 2;">
          <div class="k">SOURCE</div>
          <div class="v"><a href="${escapeAttr(s.url)}" target="_blank" rel="noopener noreferrer" style="color:var(--accent); text-decoration:none;">${escapeHtml(s.label)}</a></div>
        </div>
      `).join("");

      const tags = (p.tags || []).map(t => `<span class="badge">#${escapeHtml(t)}</span>`).join(" ");

      elDetail.innerHTML = `
        <div class="view-head">
          <div>
            <div class="chip" style="display:inline-flex;">
              <span class="ticon" aria-hidden="true">${themeIconSVG(themeKeyFor(p))}</span>
              <span class="dot ${dotClass(p.status)}"></span>
              <span>${escapeHtml(categoryLabel(p) || p.category)}</span>
            </div>

            <h2 class="view-title">${escapeHtml(p.title)}</h2>
            <div class="view-sub">${escapeHtml(p.summary)}</div>

            <div style="margin-top:12px; display:flex; gap:10px; flex-wrap:wrap;">
              ${tags || ""}
            </div>
          </div>

          <div style="display:flex; flex-direction:column; gap:10px; align-items:flex-end;">
            <button class="btn" id="backBtn">Back</button>
            <button class="btn secondary" id="copyBtn">Copy Link</button>
          </div>
        </div>

        <div class="view-body">
          <div class="panel">
            <h3>Scenario weights</h3>
            ${scenarioBarsHTML(p,"full")}

            ${marketMetaHTML(p)}
            ${marketOddsDetailHTML(p)}


            ${mostLikelyDriver(p) ? `<div style="margin-top:10px; padding:10px 10px; border:1px solid rgba(255,255,255,.08); border-radius:14px; background: rgba(255,255,255,.03); font-family: var(--mono); font-size:11px; color: var(--muted); line-height:1.45;"><span style="color: var(--muted2);">MOST LIKELY DRIVER</span><br>${escapeHtml(mostLikelyDriver(p))}</div>` : ""}

            <div style="margin-top:14px;">
              <h3>Scenario narrative</h3>
              <div style="font-size:14px; line-height:1.55; color:var(--text);">
                ${escapeHtml(p.call || "—")}
              </div>
            </div>


            <details class="collapsible" open>
              <summary>
                <span>Drivers</span>
                <span class="cmeta">${driverCount}</span>
              </summary>
              <div class="cbody">
                <ul class="list">
                  ${drivers || `<li class="li"><div class="b">!</div><div>No drivers added yet.</div></li>`}
                </ul>
              </div>
            </details>

            <details class="collapsible" open>
              <summary>
                <span>Assumptions</span>
                <span class="cmeta">${assumptionCount}</span>
              </summary>
              <div class="cbody">
                <ul class="list">
                  ${assumptions || `<li class="li"><div class="b">!</div><div>No assumptions added yet.</div></li>`}
                </ul>
              </div>
            </details>
            ${longformTeaserHTML(p)}
            ${tpStorySectionHTML(p)}
            ${mpeAnalysisSectionHTML(p)}
            ${longformPlaceholderBlockHTML(p)}
          </div>

          <div class="panel">
            <h3>Signal panel</h3>
            <div class="kv">
              <div class="row">
                <div class="k">DUE</div>
                <div class="v">${escapeHtml(due)}</div>
              </div>
              <div class="row">
                <div class="k">UPDATED</div>
                <div class="v">${escapeHtml(upd)}</div>
              </div>
              <div class="row">
                <div class="k">CONFIDENCE</div>
                <div class="v">${conf}%</div>
              </div>
              <div class="row">
                <div class="k">BAND</div>
                <div class="v">${escapeHtml(bandLabel(p.band))}</div>
              </div>
              <div class="row" style="grid-column: span 2;">
                <div class="k">CATEGORY</div>
                <div class="v">${escapeHtml(categoryLabel(p) || p.category)}</div>
              </div>

              ${p.market_meta ? `
              <div class="row" style="grid-column: span 2;">
                <div class="k">MARKET</div>
                <div class="v">${escapeHtml(String(p.market_meta.platform || "Polymarket"))}${p.market_meta.volume ? (" • Vol " + escapeHtml(String(p.market_meta.volume))) : ""}</div>
              </div>
              ` : ""}
            </div>

            <div style="margin-top:12px;">
              <h3>Confidence meter</h3>
              <div class="bar"><div class="fill" style="width:${conf}%"></div></div>
              <div style="margin-top:8px; font-family:var(--mono); font-size:11px; color:var(--muted2);">
                Higher confidence means: fewer fragile assumptions, more consistent signal inputs, clearer driver alignment.
              </div>
            </div>

            

            ${michelPredictionSectionHTML(p)}

      `;

      document.getElementById("backBtn").addEventListener("click", backToList);
      document.getElementById("copyBtn").addEventListener("click", async () => {
        try{
          await navigator.clipboard.writeText(location.href);
          document.getElementById("copyBtn").textContent = "Copied";
          setTimeout(() => (document.getElementById("copyBtn").textContent = "Copy Link"), 900);
        }catch(e){
          alert("Copy failed, you can copy from the address bar.");
        }
      });

      detailsAutoCloseOnMobile();

      const lfBtn = document.getElementById("longformBtn");
      if(lfBtn && p.longform && p.longform.placeholder_id){
        lfBtn.addEventListener("click", () => {
          const target = document.getElementById(p.longform.placeholder_id);
          if(target){
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function escapeHtml(s){
      return String(s ?? "")
        .replaceAll("&","&amp;")
        .replaceAll("<","&lt;")
        .replaceAll(">","&gt;")
        .replaceAll('"',"&quot;")
        .replaceAll("'","&#039;");
    }
    function escapeAttr(s){
      return escapeHtml(s).replaceAll("`","&#096;");
    }

    /* ==========================
       3) HASH STATE: shareable URLs
       ========================== */

    function readHash(){
      const raw = (location.hash || "").replace(/^#/, "");
      const params = new URLSearchParams(raw);

      applySavedUIStateIfNoHash(params);


      const p = params.get("p");
      const cat = params.get("cat");
      const q = params.get("q");
      const sort = params.get("sort");
      const carib = params.get("carib");

      if(cat && CATEGORIES.includes(cat)) state.category = cat;
      else state.category = "All";

      state.caribArea = (state.category === "Caribbean" && carib) ? carib : "All";

      state.q = q ? q : "";
      state.sort = sort ? sort : "updatedDesc";

      if(p){
        const pred = PREDICTIONS.find(x => x.id === p);
        if(pred){
          // Keep tabs aligned with the item’s category for context
          state.category = pred.category;
          state.caribArea = (pred.category === "Caribbean") ? caribAreaOf(pred) : "All";
          buildTabs();
          setActiveTab();
          buildSubtabs();
          renderDetail(pred);
          return;
        }
      }
      render();
    }

    /* ==========================
       4) EVENTS
       ========================== */

    elQ.addEventListener("input", () => {
      state.q = elQ.value;
      setHashList();
      render();
    });

    elSort.addEventListener("change", () => {
      state.sort = elSort.value;
      saveUIState();
      setHashList();
      render();
    });

    elClear.addEventListener("click", () => {
      state.category = "All";
      state.q = "";
      state.sort = "updatedDesc";
      try{ localStorage.removeItem(LS_KEY); }catch(e){}
      location.hash = "";
      render();
    });

    window.addEventListener("hashchange", readHash);

    // Boot
    readHash();
