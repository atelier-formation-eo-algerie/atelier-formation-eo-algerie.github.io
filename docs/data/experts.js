/* =====================================================================
   EXPERTS PRESSENTIS — fichier de données éditable.
   ---------------------------------------------------------------------
   name        : nom affiché
   role        : facultatif, rôle dans la proposition (ex. coordination)
   initials    : utilisées si aucun portrait n'est disponible
   institution : affiliation actuelle, vérifiée sur une page officielle
   specialty   : spécialité courte, telle que décrite publiquement
   profile     : lien vers le profil professionnel officiel
   photo       : chemin local (assets/images/experts/...) ou URL officielle
   photoCredit : source du portrait (affichée sous la grille)
   photoFocus  : facultatif, cadrage { position: "x% y%", zoom: 1.5 }
   status      : « Participation à confirmer » tant qu'aucun accord écrit
   ===================================================================== */
window.EXPERTS = [
  {
    name: "Dr Walid Ouaret",
    role: "Coordination de la proposition",
    initials: "WO",
    institution: "The Earth Commons Institute, Georgetown University",
    specialty: "Observation de la Terre, sécheresse, changement d'usage des terres et risques climatiques.",
    profile: "https://earthcommons.georgetown.edu/profiles/walid-ouaret/",
    photo: "assets/images/experts/ouaret.jpg",
    photoCredit: "",
    status: "Participation confirmée"
  },
  {
    name: "Dr Molly E. Brown",
    initials: "MB",
    institution: "Department of Geographical Sciences, University of Maryland",
    specialty: "Télédétection, agriculture et sécurité alimentaire.",
    profile: "https://geog.umd.edu/facultyprofile/brown/molly",
    photo: "https://mollyelizabethbrown.github.io/images/portrait/molly-brown.jpg",
    photoCredit: "site professionnel mollyelizabethbrown.github.io",
    status: "Participation à confirmer"
  },
  {
    name: "Dr K. Arthur Endsley",
    initials: "KAE",
    institution: "Numerical Terradynamic Simulation Group, University of Montana",
    specialty: "Télédétection satellitaire, cycles du carbone et de l'eau, méthodes reproductibles.",
    profile: "https://directory.apps.umt.edu/index.php/details/3aef9f84f53860114f94aa67656ef73a",
    photo: "https://empdb.apps.umt.edu/storage/photos/6342.jpg",
    photoFocus: { position: "62% 6%", zoom: 2.1 },
    photoCredit: "annuaire de l'University of Montana",
    status: "Participation à confirmer"
  },
  {
    name: "Dr Ghiles Kaci",
    role: "Coordination de la proposition",
    initials: "GK",
    institution: "Texas A&M AgriLife Research",
    specialty: "Agronomie, santé des sols et science ouverte appliquée à l'agriculture.",
    profile: "https://agrilifepeople.tamu.edu/people/view/39943",
    photo: "assets/images/experts/kaci.jpg",
    photoCredit: "",
    status: "Participation confirmée"
  },
  {
    name: "Dr Markus Enenkel",
    initials: "ME",
    institution: "Banque mondiale — programme de financement des risques de catastrophe (DRFIP)",
    specialty: "Risques climatiques, suivi des sécheresses et alerte précoce.",
    profile: "https://markusenenkel.com/",
    photo: "https://markusenenkel.com/Portrait_Enenkel_April2025_small.jpg",
    photoCredit: "markusenenkel.com",
    status: "Participation à confirmer"
  },
  {
    name: "Dr Brent W. Auvermann",
    initials: "BWA",
    institution: "Texas A&M AgriLife Research",
    specialty: "Ingénierie environnementale appliquée : qualité de l'air, effluents d'élevage, eau.",
    profile: "https://agrilifepeople.tamu.edu/people/view/710",
    photo: "https://baen.tamu.edu/wp-content/uploads/sites/5/2025/06/Auvermann-240x320-1.jpg",
    photoCredit: "Texas A&M, Biological & Agricultural Engineering",
    status: "Participation à confirmer"
  }
];
