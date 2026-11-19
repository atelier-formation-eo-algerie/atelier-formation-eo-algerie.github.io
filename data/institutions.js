/* =====================================================================
   INSTITUTIONS ALGÉRIENNES SUSCEPTIBLES D'ÊTRE INTÉRESSÉES
   ---------------------------------------------------------------------
   Aucune de ces institutions n'est partenaire : liste proposée pour
   consultation ou invitation. Toutes ont la même importance visuelle.

   acronym     : sigle
   name        : nom officiel complet
   description : une ligne sur sa pertinence
   url         : site officiel vérifié (laisser "" si aucun site fiable)
   urlNote     : texte affiché quand url est vide

   Vérification du 19/11/2026 (voir README) :
   - chargés depuis l'étranger : ASAL, CREAD, ENSGTS, BNEDER, ONEDD, CNFE ;
   - officiels mais inaccessibles depuis l'étranger (liés depuis des sites
     ministériels, archivés en 2026) : ANRH, INRAA, AND, ANCC, DGPC ;
   - aucun site fonctionnel trouvé : DGF, INSID.
   ===================================================================== */
window.INSTITUTIONS = [
  {
    group: "Recherche et observation de la Terre",
    items: [
      { acronym: "ASAL", name: "Agence spatiale algérienne",
        description: "Conçoit et met en œuvre la politique spatiale nationale, dont les satellites d'observation Alsat.",
        url: "https://asal.dz/" },
      { acronym: "CREAD", name: "Centre de recherche en économie appliquée pour le développement",
        description: "Recherche appliquée, dont une division Agriculture, Territoire et Environnement.",
        url: "https://www.cread.dz/" },
      { acronym: "ENSGTS", name: "École nationale supérieure des sciences géodésiques et des techniques spatiales",
        description: "Forme ingénieurs et chercheurs en sciences géographiques, géomatique et sciences spatiales (Arzew).",
        url: "https://ensgts.dz/" }
    ]
  },
  {
    group: "Eau, sols et agriculture",
    items: [
      { acronym: "ANRH", name: "Agence nationale des ressources hydriques",
        description: "Inventaire, évaluation et suivi des ressources en eau et des superficies irrigables.",
        url: "https://anrh.dz/" },
      { acronym: "INSID", name: "Institut national des sols, de l'irrigation et du drainage",
        description: "Sols, irrigation, drainage et salinité des terres agricoles.",
        url: "", urlNote: "Site officiel non disponible" },
      { acronym: "BNEDER", name: "Bureau national d'études pour le développement rural",
        description: "Études pour le développement rural, sous tutelle du ministère de l'Agriculture.",
        url: "https://bneder.dz/" },
      { acronym: "INRAA", name: "Institut national de la recherche agronomique d'Algérie",
        description: "Recherche agronomique : productions végétales et animales, ressources génétiques.",
        url: "https://inraa.dz/" }
    ]
  },
  {
    group: "Forêts, environnement et risques",
    items: [
      { acronym: "DGF", name: "Direction générale des forêts",
        description: "Gestion et protection du patrimoine forestier, steppique et saharien.",
        url: "", urlNote: "Site officiel non disponible" },
      { acronym: "AND", name: "Agence nationale des déchets",
        description: "Information et appui aux collectivités : tri, collecte, traitement et valorisation des déchets.",
        url: "https://and.dz/" },
      { acronym: "ONEDD", name: "Observatoire national de l'environnement et du développement durable",
        description: "Réseaux d'observation de la pollution et de surveillance des milieux naturels.",
        url: "https://onedd.org/" },
      { acronym: "ANCC", name: "Agence nationale des changements climatiques",
        description: "Information, sensibilisation et études sur les émissions, l'adaptation et l'atténuation.",
        url: "http://www.ancc.dz/" },
      { acronym: "DGPC", name: "Protection civile — Direction générale de la Protection civile",
        description: "Prévention et intervention face aux risques naturels et technologiques.",
        url: "https://dgpc.dz/" }
    ]
  },
  {
    group: "Formation",
    items: [
      { acronym: "CNFE", name: "Conservatoire national des formations à l'environnement",
        description: "Formations à l'environnement, avec des annexes régionales (« Maisons de l'environnement »).",
        url: "https://cnfe.dz/" },
      { acronym: "EFP", name: "Établissements de formation professionnelle concernés",
        description: "Instituts et centres liés à l'environnement, à l'eau, à l'agriculture ou à la topographie.",
        url: "", urlNote: "À identifier avec le ministère" }
    ]
  }
];
