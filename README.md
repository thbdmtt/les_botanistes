# Les Botanistes

Site vitrine premium pour **Les Botanistes**, restaurant de cuisine traditionnelle française situé à Paris 7e, près du Bon Marché.

## Objectifs

- Valoriser l'image du restaurant avec une expérience digitale élégante
- Faciliter les réservations en ligne
- Optimiser le référencement local (SEO Paris 7e, Sèvres-Babylone)
- Permettre une mise à jour du contenu sans intervention technique

---

## Stack technique

| Élément | Technologie |
|---------|-------------|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Hébergement | [Vercel](https://vercel.com/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Internationalisation | [next-intl](https://next-intl-docs.vercel.app/) |
| Données dynamiques | Google Sheets API |
| Emails | [Resend](https://resend.com/) |
| SEO | JSON-LD / Schema.org |

---

## Architecture du projet

```
les-botanistes/
├── app/
│   ├── [locale]/           # Routes internationalisées
│   │   ├── (booking)/      # Pages réservation
│   │   ├── (marketing)/    # Page d'accueil
│   │   ├── (menu)/         # Page carte
│   │   └── layout.jsx      # Layout principal
│   ├── globals.css         # Styles globaux
│   ├── robots.js           # Configuration robots.txt
│   └── sitemap.js          # Génération sitemap.xml
├── components/
│   ├── layout/             # Header, Footer, Navigation
│   ├── sections/           # Sections de page (Hero, PageHeader)
│   └── ui/                 # Composants réutilisables (Button, MenuItem)
├── data/
│   └── menu/               # Loaders et connexion Google Sheets
├── i18n/                   # Configuration next-intl
├── lib/
│   ├── config.js           # Configuration centralisée du site
│   ├── jsonld.tsx          # Schémas SEO (Restaurant, Menu, ReserveAction)
│   └── menu.ts             # Re-export des fonctions menu
├── messages/               # Fichiers de traduction (fr, en, es, de, it, pt, ja)
└── public/                 # Assets statiques (images, favicon)
```

### Fichiers clés

| Fichier | Rôle |
|---------|------|
| `lib/config.js` | Configuration centralisée (nom, adresse, horaires, réseaux sociaux) |
| `lib/jsonld.tsx` | Schémas Schema.org pour le SEO |
| `data/menu/loaders.ts` | Chargement des menus depuis Google Sheets |
| `i18n/routing.ts` | Configuration des langues et du routage |

---

## Gestion du contenu

### Menus (Google Sheets)

Les menus sont pilotés par un tableur Google Sheets, permettant au restaurateur de :

- Modifier les plats, prix et descriptions
- Activer/désactiver des items (`active: true/false`)
- Mettre à jour le contenu **sans redéploiement**

**Structure du tableur :**

| id | name_fr | name_en | price_eur | active | tag |
|----|---------|---------|-----------|--------|-----|
| starter-01 | Velouté de saison | Seasonal soup | 14 | TRUE | |

**Onglets requis :** `Starters`, `Mains`, `Desserts`

### Cache

Les données sont mises en cache pendant 5 minutes (`unstable_cache`) pour optimiser les performances tout en garantissant une fraîcheur raisonnable.

### Traductions

Les textes de l'interface sont gérés via des fichiers JSON dans `/messages/` :

- `fr.json` (français - langue par défaut)
- `en.json`, `es.json`, `de.json`, `it.json`, `pt.json`, `ja.json`

---

## SEO & Référencement

### JSON-LD (Schema.org)

Le site intègre des schémas structurés conformes aux recommandations Google 2025 :

| Schéma | Page | Objectif |
|--------|------|----------|
| `Restaurant` | Toutes | Rich snippet restaurant, Local Pack |
| `WebSite` | Toutes | Identification du site |
| `Menu` | `/carte` | Affichage des plats dans les résultats |
| `ReserveAction` | `/reservation` | Action de réservation |

### Bonnes pratiques intégrées

- Balises `<title>` et `<meta description>` dynamiques par page et par langue
- Attributs `lang` et `hreflang` pour le multilingue
- `robots.txt` et `sitemap.xml` générés automatiquement
- URLs canoniques configurées
- Images optimisées avec `next/image`

### SEO local

- Adresse complète structurée (PostalAddress)
- Coordonnées géographiques précises (GeoCoordinates)
- Horaires d'ouverture détaillés
- Lien vers le profil Google Business (via `sameAs`)

---

## Déploiement

### Vercel

Le projet est conçu pour un déploiement sur Vercel :

1. Connecter le repository GitHub/GitLab à Vercel
2. Configurer les variables d'environnement (voir section suivante)
3. Déployer

**Fonctionnalités Vercel utilisées :**

- HTTPS automatique
- CDN mondial
- Environnements Preview (branches) et Production
- Déploiements automatiques à chaque push

### Domaine

Configurer le domaine `les-botanistes.fr` dans les paramètres Vercel :
- Ajout des enregistrements DNS (A ou CNAME)
- Certificat SSL automatique

---

## Variables d'environnement

Configurer dans Vercel (Settings > Environment Variables) :

| Variable | Description |
|----------|-------------|
| `GOOGLE_SHEETS_SPREADSHEET_ID` | ID du tableur Google Sheets |
| `GOOGLE_SHEETS_CLIENT_EMAIL` | Email du compte de service Google |
| `GOOGLE_SHEETS_PRIVATE_KEY_BASE64` | Clé privée encodée en base64 |
| `RESEND_API_KEY` | Clé API Resend pour l'envoi d'emails |

**Note :** Ne jamais committer ces valeurs dans le code source.

---

## Maintenance & Évolutivité

### Modifier le menu

1. Ouvrir le tableur Google Sheets
2. Modifier les lignes (prix, noms, descriptions)
3. Les changements apparaissent sous 5 minutes (cache)

### Ajouter un nouveau plat

1. Ajouter une ligne dans l'onglet correspondant (`Starters`, `Mains`, `Desserts`)
2. Renseigner tous les champs, `active: TRUE`
3. Le plat apparaît automatiquement

### Désactiver un plat

1. Passer `active` à `FALSE`
2. Le plat disparaît du site sans suppression des données

### Ajouter une langue

1. Créer un fichier `messages/{locale}.json`
2. Ajouter la locale dans `i18n/routing.ts`
3. Redéployer

### Modifier les informations du restaurant

Éditer `lib/config.js` :
- Adresse, téléphone, email
- Horaires d'ouverture
- Liens réseaux sociaux

---

## Bonnes pratiques

### Performance

- Images optimisées automatiquement (WebP, lazy loading)
- Fonts optimisés avec `next/font`
- Code splitting automatique
- Cache serveur pour les données dynamiques

### Accessibilité

- HTML sémantique
- Labels sur les formulaires
- Contrastes respectés
- Navigation au clavier

### Sécurité

- Variables d'environnement pour les secrets
- Validation des entrées formulaires
- Protection honeypot anti-spam
- HTTPS obligatoire

### Code

- TypeScript pour les fichiers critiques
- ESLint configuré
- Composants réutilisables
- Séparation claire données / présentation

---

## Scripts disponibles

```bash
# Développement local
npm run dev

# Build de production
npm run build

# Démarrer en production (local)
npm start

# Vérification du code
npm run lint
```

---

## Langues supportées

| Code | Langue |
|------|--------|
| `fr` | Français (défaut) |
| `en` | English |
| `es` | Español |
| `de` | Deutsch |
| `it` | Italiano |
| `pt` | Português |
| `ja` | 日本語 |

---

## Crédits

Développé pour **Les Botanistes**, restaurant de cuisine traditionnelle française à Paris.

---

## Licence

Projet propriétaire. Tous droits réservés.
