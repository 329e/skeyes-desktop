# SKEYES Desktop

Ceci est une petite coquille "Electron" : une fenêtre native qui affiche
directement https://skeyes.netlify.app. Comme le vrai code de l'appli vit
sur le site, l'appli desktop se met à jour toute seule à chaque fois que
tu modifies le site — tu n'as jamais besoin de recompiler pour un
changement de fonctionnalité.

## 1. Installer les outils (une seule fois)

Télécharge et installe **Node.js** (version LTS) depuis :
https://nodejs.org

Vérifie que ça a marché en ouvrant un terminal (PowerShell sur Windows,
Terminal sur Mac) et en tapant :

```
node --version
```

Tu dois voir un numéro de version s'afficher (ex: v20.x.x).

## 2. Préparer le projet

1. Dézippe ce dossier `skeyes-desktop` quelque part sur ton ordinateur
2. Ouvre un terminal **dans ce dossier** (sur Windows : clic droit dans le
   dossier → "Ouvrir dans le terminal" ; sur Mac : `cd` jusqu'au dossier)
3. Installe les dépendances :

```
npm install
```

Ça va télécharger Electron (peut prendre quelques minutes la première fois).

## 3. Tester l'appli

```
npm start
```

Une fenêtre SKEYES doit s'ouvrir. Si ça marche, tu es prêt à créer
l'installeur.

## 4. Créer un vrai fichier installable

Choisis la commande selon ton système :

```
npm run dist:win      (crée un .exe pour Windows)
npm run dist:mac      (crée un .dmg pour Mac — doit être lancé sur un Mac)
npm run dist:linux    (crée un .AppImage pour Linux)
```

Le fichier généré apparaît dans le dossier `release/`. C'est ce fichier
que tu peux envoyer à tes amis (chacun doit générer/utiliser la version
correspondant à son propre système).

## Option B — Compiler dans le cloud via GitHub Actions (sans PC)

Ce dossier contient aussi un fichier `.github/workflows/build.yml` qui permet
de compiler automatiquement les 3 versions (Windows, Mac, Linux) sur de
vraies machines dans le cloud, gratuitement, en pilotant tout depuis ton
téléphone.

1. Crée un compte sur **github.com** (gratuit) si tu n'en as pas déjà un.
2. Crée un nouveau dépôt : bouton **"+"** en haut à droite → **"New
   repository"**. Nom au choix (ex: `skeyes-desktop`). Peu importe public
   ou privé. Ne coche aucune case d'initialisation. **Create repository**.
3. Sur la page du dépôt vide, clique **"uploading an existing file"**.
4. Dézippe ce projet sur ton téléphone, puis sélectionne/glisse **tous**
   les fichiers et dossiers (y compris le dossier caché `.github` — sur
   mobile, le sélecteur de fichiers doit te permettre de choisir le
   dossier entier `skeyes-desktop` en une fois). Si `.github` ne
   s'uploade pas avec le reste, utilise "Add file → Create new file",
   tape le chemin exact `.github/workflows/build.yml` dans le champ nom
   (GitHub crée les dossiers automatiquement), colle le contenu du
   fichier, puis "Commit".
5. Une fois tous les fichiers en place, va dans l'onglet **"Actions"** du
   dépôt. Un workflow "Build SKEYES Desktop" doit apparaître.
6. Clique dessus → **"Run workflow"** → **"Run workflow"** (bouton vert).
7. Attends quelques minutes (tu peux fermer l'onglet, ça tourne côté
   serveur). Rafraîchis la page : un rond vert ✅ indique que c'est fini.
8. Clique sur le run terminé → en bas de page, section **"Artifacts"** :
   trois fichiers `skeyes-windows-latest`, `skeyes-macos-latest`,
   `skeyes-ubuntu-latest` à télécharger, chacun contenant l'installeur du
   système correspondant.

Note : le `.dmg` Mac et le `.exe` Windows ne seront pas signés
numériquement (ça coûte cher), donc au premier lancement chez tes amis :
- Windows affichera "Windows a protégé votre ordinateur" → "Informations
  complémentaires" → "Exécuter quand même".
- Mac affichera "développeur non identifié" → clic droit sur l'app →
  "Ouvrir" → confirmer.

## Limites à connaître

- Un installeur **Mac (.dmg)** doit être compilé sur un Mac. Un installeur
  **Windows (.exe)** doit être compilé sur Windows (ou sur Mac/Linux avec
  des outils supplémentaires, plus avancé). Chacun de vous peut compiler
  la version de son propre système en suivant ce même guide.
- Le premier lancement sur Windows peut afficher un avertissement
  "Windows a protégé votre ordinateur" car l'appli n'est pas signée
  numériquement (ça coûte cher et n'est pas nécessaire pour un usage
  entre amis) — il suffit de cliquer "Informations complémentaires" puis
  "Exécuter quand même".
