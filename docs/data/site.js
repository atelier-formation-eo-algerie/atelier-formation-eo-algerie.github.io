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

  /* Coordination de la proposition (une entrée par coordinateur).
     Les champs vides ne s'affichent pas. */
  coordination: [
    {
      name: "Dr Walid Ouaret",
      institution: "The Earth Commons Institute, Georgetown University",
      email: "",
      profile: "https://earthcommons.georgetown.edu/profiles/walid-ouaret/"
    },
    {
      name: "Dr Ghiles Kaci",
      institution: "Texas A&M AgriLife Research",
      email: "",
      profile: "https://agrilifepeople.tamu.edu/people/view/39943"
    }
  ],

  /* Date de dernière mise à jour (AAAA-MM-JJ). */
  lastUpdated: "2026-11-19"
};
