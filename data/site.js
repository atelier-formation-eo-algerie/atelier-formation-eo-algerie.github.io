/* =====================================================================
   PARAMÈTRES GÉNÉRAUX — statut, document PDF, contact, date.
   ===================================================================== */
window.SITE = {
  /* Mention courte affichée en haut de chaque page. */
  statusLabel: "Document de travail — Proposition d'atelier en cours de discussion",

  /* Texte affiché sous l'introduction. */
  statusText: "Ce site présente une proposition préliminaire destinée à faciliter les échanges avec les institutions algériennes, les scientifiques et les organisateurs potentiels. Le programme, les participants, les partenariats et les modalités de financement restent à définir.",

  /* Note de proposition (PDF). Laisser vide tant qu'elle n'existe pas :
     le bouton n'apparaît pas. Exemple : "assets/docs/note-de-proposition.pdf" */
  conceptNotePdf: "",

  /* Contact de coordination. Les champs vides ne s'affichent pas. */
  contact: {
    name: "Dr Walid Ouaret",
    role: "Coordination scientifique de la proposition",
    email: "",
    profile: "https://earthcommons.georgetown.edu/profiles/walid-ouaret/"
  },

  /* Date de dernière mise à jour (AAAA-MM-JJ). */
  lastUpdated: "2026-11-19"
};
