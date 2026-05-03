/**
 * publications.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for all publications.
 * To add a new paper: copy a block below, fill in the fields, save.
 * Fields:
 *   year     , integer
 *   title    , string
 *   authors  , array of strings; use "**Morato, P.G.**" to bold your name
 *   venue    , string (journal / conference / series)
 *   type     , "journal" | "conference" | "preprint" | "book-chapter" | "thesis"
 *   selected , true if this is a highlighted paper
 *   links    , object: { doi, arxiv, code, pdf, slides }, all optional
 *   abstract , optional short abstract string
 * ─────────────────────────────────────────────────────────────────────────────
 */

window.PUBLICATIONS = [

  /* ── 2025 ─────────────────────────────────────────────────────────────── */
  {
    year: 2025,
    title: "ConBatch-BAL: Batch Bayesian Active Learning under Budget Constraints",
    authors: ["**Morato, P.G.**", "Andriotis, C.P.", "Khademi, S."],
    venue: "arXiv preprint arXiv:2507.04929",
    type: "preprint",
    selected: false,
    links: { arxiv: "https://arxiv.org/abs/2507.04929" }
  },

  {
    year: 2025,
    title: "Balancing the Exploration-Exploitation Trade-off in Active Learning for Surrogate Model-Based Reliability Analysis via Multi-Objective Optimization",
    authors: ["Moran, J.A.", "**Morato, P.G.**"],
    venue: "arXiv preprint arXiv:2508.18170",
    type: "preprint",
    selected: false,
    links: { arxiv: "https://arxiv.org/abs/2508.18170" }
  },

  /* ── 2024 ─────────────────────────────────────────────────────────────── */
  {
    year: 2024,
    title: "Farm-Wide Virtual Load Monitoring for Offshore Wind Structures via Bayesian Neural Networks",
    authors: ["Hlaing, N.", "**Morato, P.G.**", "Santos, F.N.", "Weijtjens, W.", "Devriendt, C.", "Rigo, P."],
    venue: "Structural Health Monitoring, 23(3), 1641–1663. SAGE Publications.",
    type: "journal",
    selected: true,
    links: { doi: "https://doi.org/10.1177/14759217231195671" }
  },

  {
    year: 2024,
    title: "Uncertainty Quantification of Wind Turbine Fatigue Lifetime Predictions through Binning",
    authors: ["Sadeghi, N.", "Noppe, N.", "**Morato, P.G.**", "Weijtjens, W.", "Devriendt, C."],
    venue: "Journal of Physics: Conference Series, 2767(3), 032024. IOP Publishing.",
    type: "conference",
    selected: false,
    links: {}
  },

  {
    year: 2024,
    title: "Propagation of Interacting Cracks in Offshore Wind Welded Structures through Numerical Analysis",
    authors: ["Mishael, J.", "**Morato, P.G.**", "Rigo, P."],
    venue: "ISOPE International Ocean and Polar Engineering Conference.",
    type: "conference",
    selected: false,
    links: {}
  },

  {
    year: 2024,
    title: "Life-Cycle Risk-Based Decision-Making in a Changing Climate",
    authors: ["Frangopol, D.M.", "Liu, M.", "Akiyama, M.", "Yang, D.Y.", "Papakonstantinou, K.G.", "Haas, K.", "Stewart, M.G.", "Biondini, F.", "Ghosn, M.", "Bianchi, S.", "et al."],
    venue: "Effects of Climate Change on Life-Cycle Performance of Structures and Infrastructure Systems. ASCE, pp. 207–292.",
    type: "book-chapter",
    selected: false,
    links: {}
  },

  /* ── 2023 ─────────────────────────────────────────────────────────────── */
  {
    year: 2023,
    title: "Inference and Dynamic Decision-Making for Deteriorating Systems with Probabilistic Dependencies through Bayesian Networks and Deep Reinforcement Learning",
    authors: ["**Morato, P.G.**", "Andriotis, C.P.", "Papakonstantinou, K.G.", "Rigo, P."],
    venue: "Reliability Engineering & System Safety, 235, 109144. Elsevier.",
    type: "journal",
    selected: true,
    links: { doi: "https://doi.org/10.1016/j.ress.2023.109144" }
  },

  {
    year: 2023,
    title: "IMP-MARL: A Suite of Environments for Large-Scale Infrastructure Management Planning via Multi-Agent Reinforcement Learning",
    authors: ["Leroy, P.", "**Morato, P.G.**", "Pisane, J.", "Kolios, A.", "Ernst, D."],
    venue: "arXiv preprint arXiv:2306.11551",
    type: "preprint",
    selected: true,
    links: {
      arxiv: "https://arxiv.org/abs/2306.11551",
      code: "https://github.com/moratodpg/imp_marl"
    }
  },

  // ── To add a code link to any paper, add: code: "https://github.com/..." inside links: {}
  // ── Example placeholder already set for IMP-MARL above.

  {
    year: 2023,
    title: "Interpretation and Analysis of Deep Reinforcement Learning Driven Inspection and Maintenance Policies for Engineering Systems",
    authors: ["**Morato, P.G.**", "Papakonstantinou, K.G.", "Andriotis, C.P.", "Hlaing, N.", "Kolios, A."],
    venue: "14th International Conference on Applications of Statistics and Probability in Civil Engineering (ICASP14).",
    type: "conference",
    selected: true,
    links: {}
  },

  {
    year: 2023,
    title: "Numerical Fatigue Modeling and Simulation of Interacting Surface Cracks in Offshore Wind Structural Connections",
    authors: ["Mishael, J.", "**Morato, P.G.**", "Rigo, P."],
    venue: "Marine Structures, 92, 103472. Elsevier.",
    type: "journal",
    selected: false,
    links: { doi: "https://doi.org/10.1016/j.marstruc.2023.103472" }
  },

  {
    year: 2023,
    title: "Active Learning for Structural Reliability Analysis with Multiple Limit State Functions through Variance-Enhanced PC-Kriging Surrogate Models",
    authors: ["Moran A., J.", "**Morato, P.G.**", "Rigo, P."],
    venue: "arXiv preprint arXiv:2302.12074",
    type: "preprint",
    selected: false,
    links: { arxiv: "https://arxiv.org/abs/2302.12074" }
  },

  {
    year: 2023,
    title: "Life-Cycle Management of Offshore Wind Deteriorating Structures under Ship Collision Accidental Events",
    authors: ["Salazar, P.", "Morán, J.", "Rigo, P.", "**Morato, P.G.**"],
    venue: "Life-Cycle of Structures and Infrastructure Systems. CRC Press, pp. 1983–1990.",
    type: "book-chapter",
    selected: false,
    links: {}
  },

  /* ── 2022 ─────────────────────────────────────────────────────────────── */
  {
    year: 2022,
    title: "Optimal Inspection and Maintenance Planning for Deteriorating Structural Components through Dynamic Bayesian Networks and Markov Decision Processes",
    authors: ["**Morato, P.G.**", "Papakonstantinou, K.G.", "Andriotis, C.P.", "Nielsen, J.S.", "Rigo, P."],
    venue: "Structural Safety, 94, 102140. Elsevier.",
    type: "journal",
    selected: true,
    links: { doi: "https://doi.org/10.1016/j.strusafe.2021.102140" }
  },

  {
    year: 2022,
    title: "Managing Offshore Wind Turbines through Markov Decision Processes and Dynamic Bayesian Networks",
    authors: ["**Morato, P.G.**", "Papakonstantinou, K.G.", "Andriotis, C.", "Rigo, P."],
    venue: "13th International Conference on Structural Safety & Reliability (ICOSSAR), Shanghai, China.",
    type: "conference",
    selected: true,
    links: {}
  },

  {
    year: 2022,
    title: "Inspection and Maintenance Planning for Offshore Wind Structural Components: Integrating Fatigue Failure Criteria with Bayesian Networks and Markov Decision Processes",
    authors: ["Hlaing, N.", "**Morato, P.G.**", "Nielsen, J.S.", "Amirafshari, P.", "Kolios, A.", "Rigo, P."],
    venue: "Structure and Infrastructure Engineering, 18(7), 983–1001. Taylor & Francis.",
    type: "journal",
    selected: false,
    links: { doi: "https://doi.org/10.1080/15732479.2022.2025673" }
  },

  {
    year: 2022,
    title: "Probabilistic Virtual Load Monitoring of Offshore Wind Substructures: A Supervised Learning Approach",
    authors: ["Hlaing, N.", "**Morato, P.G.**", "Rigo, P."],
    venue: "ISOPE International Ocean and Polar Engineering Conference.",
    type: "conference",
    selected: false,
    links: {}
  },

  {
    year: 2022,
    title: "Inspection and Maintenance Planning for Offshore Wind Support Structures: Modelling Reliability and Inspection Costs at the System Level",
    authors: ["Giro, F.", "Mishael, J.", "**Morato, P.G.**", "Rigo, P."],
    venue: "International Conference on Offshore Mechanics and Arctic Engineering (OMAE), Vol. 85864, V002T02A065. ASME.",
    type: "conference",
    selected: false,
    links: {}
  },

  {
    year: 2022,
    title: "Committee V.4: Offshore Renewable Energy",
    authors: ["Kolios, A.", "Kim, K.H.", "Cheng, C.H.", "Oguz, E.", "**Morato, P.G.**", "Ralph, F.", "et al."],
    venue: "International Ship and Offshore Structures Congress (ISSC). SNAME.",
    type: "conference",
    selected: false,
    links: {}
  },

  /* ── 2021 ─────────────────────────────────────────────────────────────── */
  {
    year: 2021,
    title: "Optimal Inspection and Maintenance Planning for Deteriorating Structures via Markov Decision Processes and Deep Reinforcement Learning. Application to Offshore Wind Substructures.",
    authors: ["**Morato, P.G.**"],
    venue: "PhD Thesis. Université de Liège, Liège, Belgium.",
    type: "thesis",
    selected: false,
    links: {}
  },

  {
    year: 2021,
    title: "The Effect of Failure Criteria on Risk-Based Inspection Planning of Offshore Wind Support Structures",
    authors: ["Hlaing, N.", "**Morato, P.G.**", "Rigo, P.", "Amirafshari, P.", "Kolios, A.", "Nielsen, J.S."],
    venue: "Life-Cycle Civil Engineering: Innovation, Theory and Practice. CRC Press, pp. 146–153.",
    type: "book-chapter",
    selected: false,
    links: {}
  },

  /* ── 2020 ─────────────────────────────────────────────────────────────── */
  {
    year: 2020,
    title: "Information Value-Based Optimization of Structural and Environmental Monitoring for Offshore Wind Turbines Support Structures",
    authors: ["Long, L.", "Mai, Q.A.", "**Morato, P.G.**", "Sørensen, J.D.", "Thöns, S."],
    venue: "Renewable Energy, 159, 1036–1046. Pergamon.",
    type: "journal",
    selected: false,
    links: { doi: "https://doi.org/10.1016/j.renene.2020.06.005" }
  },

  {
    year: 2020,
    title: "Updating the Reliability of Aging Miter Gates in the Presence of Corrosion and Fatigue",
    authors: ["Dang, T.V.", "Mai, Q.A.", "**Morato, P.G.**", "Rigo, P."],
    venue: "ICSCEA 2019: Proceedings of the International Conference on Sustainable Civil Engineering and Architecture. Springer, pp. 1247–1253.",
    type: "conference",
    selected: false,
    links: {}
  },

  /* ── 2019 ─────────────────────────────────────────────────────────────── */
  {
    year: 2019,
    title: "POMDP Based Maintenance Optimization of Offshore Wind Substructures including Monitoring",
    authors: ["**Morato, P.G.**", "Nielsen, J.S.", "Mai, Q.A.", "Rigo, P."],
    venue: "13th International Conference on Applications of Statistics and Probability in Civil Engineering (ICASP13).",
    type: "conference",
    selected: false,
    links: {}
  },

  {
    year: 2019,
    title: "Prediction of Remaining Fatigue Life of Welded Joints in Wind Turbine Support Structures Considering Strain Measurement and a Joint Distribution of Oceanographic Data",
    authors: ["Mai, Q.A.", "Weijtjens, W.", "Devriendt, C.", "**Morato, P.G.**", "Rigo, P.", "Sørensen, J.D."],
    venue: "Marine Structures, 66, 307–322. Elsevier.",
    type: "journal",
    selected: false,
    links: { doi: "https://doi.org/10.1016/j.marstruc.2019.04.002" }
  },

  {
    year: 2019,
    title: "Optimal Inspection and Repair Scheduling for Mitre Lock Gates",
    authors: ["Dang, T.V.", "**Morato, P.G.**", "Mai, Q.A.", "Rigo, P."],
    venue: "Proceedings of the Institution of Civil Engineers, Maritime Engineering, 172(3), 95–103. Thomas Telford.",
    type: "journal",
    selected: false,
    links: {}
  },

  /* ── 2018 ─────────────────────────────────────────────────────────────── */
  {
    year: 2018,
    title: "Point-Based POMDP Risk Based Inspection of Offshore Wind Substructures",
    authors: ["**Morato, P.G.**", "Mai, Q.A.", "Rigo, P.", "Nielsen, J.S."],
    venue: "Life Cycle Analysis and Assessment in Civil Engineering: Towards an Integrated Vision. CRC Press, pp. 3069–3076.",
    type: "book-chapter",
    selected: false,
    links: {}
  }

]; // end PUBLICATIONS
