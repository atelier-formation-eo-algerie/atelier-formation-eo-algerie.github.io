# Observation de la Terre et formation professionnelle en Algérie

Site statique (HTML, CSS, JavaScript natif) présentant une **proposition d'atelier en cours de discussion**. Aucune dépendance ni serveur : compatible GitHub Pages.

Adresse prévue : https://atelier-formation-eo-algerie.github.io/

## Modifier le contenu

Le site publié se trouve dans le dossier `docs/` (GitHub Pages est configuré sur `main` / `docs`). Tout le contenu évolutif se trouve dans `docs/data/` ; il n'est pas nécessaire de toucher au HTML.

| Pour modifier… | Fichier | Champ |
|---|---|---|
| Le statut affiché en haut de page | `docs/data/site.js` | `statusLabel`, `statusText` |
| La date de mise à jour | `docs/data/site.js` | `lastUpdated` |
| Les coordinateurs (pied de page, présentation) | `docs/data/site.js` | `coordination` (une entrée par personne) |
| La note de proposition PDF | `docs/data/site.js` | `conceptNotePdf` (le bouton n'apparaît que si le champ est rempli) |
| Le programme des trois journées | `docs/data/program.js` | `days`, `note` |
| Les experts | `docs/data/experts.js` | un objet par personne |
| Les institutions | `docs/data/institutions.js` | un groupe → une liste d'institutions |

### Experts

```js
{
  name: "Dr Prénom Nom",
  initials: "PN",                       // affichées si pas de portrait
  institution: "Institution actuelle (vérifiée)",
  specialty: "Spécialité courte.",
  profile: "https://page-officielle",
  photo: "https://url-du-portrait-officiel.jpg",   // ou assets/images/experts/nom.jpg
  photoFocus: { position: "50% 20%", zoom: 1.4 },  // facultatif : cadrage
  photoCredit: "source du portrait",
  status: "Participation à confirmer"   // à changer seulement après accord écrit
}
```

Portraits : ceux de M. Brown, A. Endsley, M. Enenkel et B. Auvermann sont **affichés depuis leurs pages professionnelles officielles** (aucune licence de réutilisation n'y est indiquée). Une fois l'accord de chaque personne obtenu, il est préférable d'enregistrer une copie dans `docs/assets/images/experts/` et de remplacer l'URL par ce chemin.

### Institutions

```js
{ acronym: "SIGLE", name: "Nom officiel complet",
  description: "Une ligne sur sa pertinence.",
  url: "https://site-officiel.dz/",       // "" si aucun site fiable
  urlNote: "Site officiel non disponible" }
```

Vérification des sites (19/11/2026) :
- chargent depuis l'étranger : ASAL, CREAD, ENSGTS, BNEDER, ONEDD, CNFE ;
- officiels mais **inaccessibles depuis l'étranger** (liés depuis des sites ministériels, archivés en 2026) : ANRH, INRAA, AND, ANCC, DGPC — à vérifier depuis l'Algérie ;
- aucun site fonctionnel : DGF, INSID (affichés sans lien).

Aucune institution ne doit être présentée comme partenaire sans accord écrit.

## Images

Toutes les images se trouvent dans `docs/assets/images/`.

| Fichier | Contenu | Source et licence |
|---|---|---|
| `hero-tanezrouft.jpg` | Bassin du Tanezrouft, Sentinel-2, 09/02/2026 | ESA, données Copernicus modifiées — CC BY-SA 3.0 IGO (recadrée) |
| `eau-avant.jpg`, `eau-apres.jpg` | Sebkha el Melah, Landsat 9, 12/08 et 29/09/2024 | NASA Earth Observatory (M. Garrison), données USGS — domaine public |
| `agri-avant.jpg`, `agri-apres.jpg` | El Meniaa, Landsat 7 (2003) et Landsat 9 (2025) | USGS — domaine public ; composition réalisée pour ce site |
| `domain-forets.jpg` | Incendies de Kabylie, Sentinel-2, 12/08/2021 | ESA, données Copernicus modifiées — CC BY-SA 3.0 IGO (recadrée) |
| `domain-dechets.jpg` | CET de Hassi Bounif (Oran), Sentinel-2C, 02/11/2026 | Données Copernicus Sentinel modifiées (2026) ; composition réalisée pour ce site |
| `experts/ouaret.jpg`, `experts/kaci.jpg` | Portraits de W. Ouaret et G. Kaci | Photos fournies par les coordinateurs |

Pour remplacer une image : garder le même nom de fichier (ou modifier `src` dans `index.html`) et mettre à jour le texte `alt`, la ligne technique (`.meta`) et la légende.

## Voir le site en local

```bash
cd docs
python -m http.server 8000
# puis http://localhost:8000
```

## Publier sur GitHub Pages

Dépôt : https://github.com/atelier-formation-eo-algerie/atelier-formation-eo-algerie.github.io (organisation `atelier-formation-eo-algerie`).

1. Depuis ce dossier : `git push -u origin main`
2. Sur GitHub : *Settings → Pages → Build and deployment → Deploy from a branch → `main` / `/docs`*.
3. Le site est en ligne après une à deux minutes : https://atelier-formation-eo-algerie.github.io/

Pour publier une modification : `git add -A`, `git commit -m "…"`, `git push`.

Pour inviter un co-éditeur (par exemple G. Kaci) : *Organisation `atelier-formation-eo-algerie` → People → Invite member*.
